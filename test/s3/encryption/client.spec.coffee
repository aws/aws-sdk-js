helpers = require('../../helpers')
AWS = helpers.AWS

describe 'AWS.S3.Encryption.Client', ->

  master_key = new Buffer('kM5UVbhE/4rtMZJfsadYEdm2vaKFsmV2f5+URSeUCV4=', 'base64' , 'utf8')

  api_client = new AWS.S3(
      accessKeyId: 'akid',
      secretAccessKey: 'secret',
      region: 'us-west-1',
      maxRetries: 0 # disable failed request retries
    )

  options = { client: api_client, encryption_key: master_key }

  client = new AWS.S3.Encryption.Client(options)

  request = (operation, params) -> client.makeRequest(operation, params)

  double = ( obj ) ->
    if (obj == null || (typeof obj != 'object'))
      return obj;

    clone = obj.constructor(); # give clone the original obj's constructor
    for key in obj
      clone[key] = double(obj[key]);

    return clone;

  describe 'configuration', ->

    it 'constructs a default s3 client when one is not given', (done) ->
      #api_client = double(client)
      # expect(S3.Client).to receive(:new).andReturn(api_client)
      #expect(-> new AWS.S3()).to.be(api_client)
      client = new AWS.S3.Encryption.Client({ encryption_key: master_key })
      #expect(client.client).to.be(api_client)
      done()

    it 'accepts vanilla client options', (done) ->
      opts = {
        region: 'us-west-2',
        credentials: new AWS.Credentials(accessKeyId: 'akid', secretAccessKey: 'secret'),
        encryption_key: '.' * 32,
      }
      enc_client = new AWS.S3.Encryption.Client(opts)
      expect(enc_client.client.config.region).to.equal('us-west-2')
      expect(enc_client.client.config.credentials.accessKeyId).to.equal('akid')
      # this fails because secretAccessKey is hidden
      #expect(enc_client.client.config.credentials.secretAccessKey).to.equal('secret')
      done()

    it 'requires an encryption key or provider', (done) ->
      expect ->
        delete options['encryption_key']
        new AWS.S3.Encryption.Client(options)
      .to.throw(':kms_key_id, :key_provider, or :encryption_key')

      expect ->
        console.log( Object.assign(options, { encryption_key: master_key }) );
        new AWS.S3.Encryption.Client( Object.assign(options, { encryption_key: master_key }) )
      .not.to.equal(error)

      expect ->
        #key_provider = double('key-provider')
        new AWS.S3.Encryption.Client( Object.assign(options, { key_provider: key_provider }) )
      .not.to.equal(error)
      done()

    it 'consturcts a key provider from a master key', (done) ->
      options['encryption_key'] = master_key
      console.log( client.key_provider );
      expect(client.key_provider.key_for('')).to.equal(master_key)
      expect(client.key_provider.key_for('{}')).to.equal(master_key)
      expect(client.key_provider.key_for('{"foo":"bar"}')).to.equal(master_key)
      done()

    it 'defaults :envelope_location to :metadata', (done) ->
      expect(client.envelope_location).to.equal(metadata)
      done()

    it 'requires :envelope_location to be :metadata or :instruction_file', (done) ->
      expect ->
        new AWS.S3.Encryption.Client( Object.assign(options, { envelope_location: bad }) )
      .to.throw(':metadata or :instruction_file')

      expect ->
        new AWS.S3.Encryption.Client( Object.assign(options, { envelope_location: metadata }) )
        new AWS.S3.Encryption.Client( Object.assign(options, { envelope_location: instruction_file }) )
      .not.to.equal(error)
      done()

    it 'requires :materials_description to be a valid JSON document', (done) ->
      options['materials_description'] = '?!'
      expect ->
        client
      .to.throw('JSON document')
      done()

    it 'defaults :instruction_file_suffix to ".instruction"', (done) ->
      expect(client.instruction_file_suffix).to.equal('.instruction')
      done()

    it 'requires :instruction_file_suffix to be a string', (done) ->
      options['instruction_file_suffix'] = true
      expect ->
        client
      .to.throw('must be a string')
      done()


  describe 'encryption methods', ->

    # this is the encrypted string "secret" using the fixed envelope
    # keys defined below in the beforeEach block
    encrypted_body = new Buffer('JIgXCTXpeQerPLiU6dVL4Q==', 'base64' , 'utf8')

    beforeEach ->
      key = new Buffer('uSwsRlIMhY1klVYrgqceqjmQMmARcNl7rEKWW+7HVvA=', 'base64' , 'utf8')
      iv = new Buffer('TO5mQgtOzWkTfoX4RE5tsA==', 'base64' , 'utf8')
      #allow_any_instance_of(OpenSSL.Cipher).to receive(random_key).andReturn(key)
      #allow_any_instance_of(OpenSSL.Cipher).to receive(random_iv).andReturn(iv)

    describe '#put_object', ->

      it 'encrypts the data client-side', (done) ->
        request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key')
        client.putObject(bucket:'bucket', key:'key', body:'secret')
        expect(
          a_request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key').with(
            body: encrypted_body,
            headers: {
              'Content-Length': '16',
              'Content-Md5': 'l0B7VfMeJ/9UqZlxWo2uEw==',
              # key is encrypted here with the master encryption key,
              # then base64 encoded
              'X-Amz-Meta-X-Amz-Key': 'gX+a4JQYj7FP0y5TAAvxTz4e2l0DvOItbXByml/NPtKQcUlsoGHoYR/T0TuYHcNj',
              'X-Amz-Meta-X-Amz-Iv': 'TO5mQgtOzWkTfoX4RE5tsA==',
              'X-Amz-Meta-X-Amz-Matdesc': '{}',
              'X-Amz-Meta-X-Amz-Unencrypted-Content-Length': '6'
            }
          )
        ).to have_been_made.once
        done()

      it 'encrypts an empty or missing body', (done) ->
        request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key')
        client.putObject(bucket:'bucket', key:'key') # body not set
        expect(
          a_request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key').
            with(body: /.{16}/)
        ).to have_been_made.once
        done()

      it 'can store the encryption envelope in a separate object', (done) ->

        request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key')
        request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key.instruction')

        options['envelope_location'] = instruction_file
        client.putObject(bucket:'bucket', key:'key', body:'secret')

        # first request stores the encryption materials in the instruction file
        expect(
          a_request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key.instruction').with(
            body: JSON.stringify(
              'x-amz-key': 'gX+a4JQYj7FP0y5TAAvxTz4e2l0DvOItbXByml/NPtKQcUlsoGHoYR/T0TuYHcNj',
              'x-amz-iv': 'TO5mQgtOzWkTfoX4RE5tsA==',
              'x-amz-matdesc': '{}',
            )
          )
        ).to have_been_made.once

        # second request stores teh encrypted object
        expect(
          a_request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key').with(
            body: encrypted_body,
            headers: {
              'Content-Length': '16',
              'X-Amz-Meta-X-Amz-Unencrypted-Content-Length': '6'
            }
          )
        ).to have_been_made.once
        done()

      it 'accpets a custom instruction file suffix', (done) ->
        req1 = request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key.envelope')
        req2 = request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key')

        options['envelope_location'] = instruction_file
        options['instruction_file_suffix'] = '.envelope'
        client.putObject(bucket:'bucket', key:'key', body:'secret')

        expect(req1).to have_been_made.once
        expect(req2).to have_been_made.once
        done()

      it 'moves the un-encrypted md5 to a new header', (done) ->
        request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key')
        client.putObject(bucket:'bucket', key:'key', body:'secret', content_md5: 'MD5')
        expect(
          a_request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key').with(
            body: encrypted_body,
            headers: {
              'X-Amz-Meta-X-Amz-Unencrypted-Content-Md5': 'MD5'
            }
          )
        ).to have_been_made.once
        done()

      it 'supports encryption with an asymmetric key pair', (done) ->
        request('PUT', 'https://bucket.s3-us-west-1.amazonaws.com/key')
        options['encryption_key'] = OpenSSL.PKey.RSA.generate(1024)
        resp = client.putObject(bucket:'bucket', key:'key', body:'secret')
        expect(resp.context.http_request.body_contents).not_to.equal('secret')
        done()

      it 'raises an error on an invalid encryption key', (done) ->
        options['encryption_key'] = 123
        expect ->
          client.putObject(bucket:'bucket', key:'key', body:'secret')
        .to.throw('invalid encryption key')
        done()


    describe '#get_object', ->

      stub_encrypted_get = (matdesc) ->
        request('GET', 'https://bucket.s3-us-west-1.amazonaws.com/key').
          to.eql(
            body: encrypted_body,
            headers: {
              'X-Amz-Meta-X-Amz-Key': 'gX+a4JQYj7FP0y5TAAvxTz4e2l0DvOItbXByml/NPtKQcUlsoGHoYR/T0TuYHcNj',
              'X-Amz-Meta-X-Amz-Iv': 'TO5mQgtOzWkTfoX4RE5tsA==',
              'X-Amz-Meta-X-Amz-Matdesc': matdesc,
            }
          )

      stub_encrypted_get_with_instruction_file = () ->
        request('GET', 'https://bucket.s3-us-west-1.amazonaws.com/key').
          to.eql(body: encrypted_body)
        request('GET', 'https://bucket.s3-us-west-1.amazonaws.com/key.instruction').
          to.eql(
            body: JSON.stringify(
              'x-amz-key': 'gX+a4JQYj7FP0y5TAAvxTz4e2l0DvOItbXByml/NPtKQcUlsoGHoYR/T0TuYHcNj',
              'x-amz-iv': 'TO5mQgtOzWkTfoX4RE5tsA==',
              'x-amz-matdesc': '{}',
            )
          )

      it 'decrypts the object', (done) ->
        stub_encrypted_get()
        #helpers.mockHttpResponse 200, {'body': 'secret'}, """{"body": "secret" }"""
        #request = dynamo.listTables()
        #request.send (err, data) ->
        resp = client.getObject(bucket:'bucket', key:'key')
        console.log(resp)
        expect(resp.body.read).to.equal('secret')
        done()

      it 'supports #getObject with a block', (done) ->
        stub_encrypted_get()
        data = ''
        client.getObject (bucket:'bucket', key:'key'), (chunk) ->
          data << chunk

        expect(data).to.equal('secret')
        done()

      it 'does not attempt to decrypt failed responses', (done) ->
        request('GET', 'https://bucket.s3-us-west-1.amazonaws.com/key').
          to.eql(status: 500)
        expect ->
          client.getObject(bucket:'bucket', key:'key')
        .to.throw(AWS.S3.Errors.ServiceError)
        done()

      it 'loads envelope from instruction file when not found in metadata', (done) ->
        stub_encrypted_get_with_instruction_file()
        resp = client.getObject(bucket:'bucket', key:'key')
        expect(resp.body.read).to.equal('secret')
        done()

      it 'users the configured instruction file suffix', (done) ->
        stub_encrypted_get_with_instruction_file('.envelope')
        options['instruction_file_suffix'] = '.envelope'
        resp = client.getObject(bucket:'bucket', key:'key')
        expect(resp.body.read).to.equal('secret')
        done()

      it 'gets the instruction file first with loc :instruction_file', (done) ->
        stub_encrypted_get_with_instruction_file()
        options['envelope_location'] = instruction_file
        resp = client.getObject(bucket:'bucket', key:'key')
        expect(resp.body.read).to.equal('secret')
        done()

      it 'accepts :envelope_location, overriding the default location', (done) ->
        stub_encrypted_get_with_instruction_file()
        resp = client.getObject(bucket:'bucket', key:'key', envelope_location: instruction_file)
        expect(resp.body.read).to.equal('secret')
        expect(resp.context['encryption']['envelope_location']).to.equal(instruction_file)
        expect(resp.context['encryption']['instruction_file_suffix']).to.equal('.instruction')
        done()

      it 'accepts :instruction_file_suffix, overriding the default location', (done) ->
        stub_encrypted_get_with_instruction_file('.envelope')
        resp = client.getObject(bucket:'bucket', key:'key', instruction_file_suffix: '.envelope')
        expect(resp.body.read).to.equal('secret')
        expect(resp.context['encryption']['envelope_location']).to.equal(instruction_file)
        expect(resp.context['encryption']['instruction_file_suffix']).to.equal('.envelope')
        done()

      it 'supports multiple master keys with a key provider', (done) ->
        stub_encrypted_get('MATERIALS-DESC')
        #key_provider = double('key-provider')
        expect(key_provider).to receive(key_for).
          with('MATERIALS-DESC').andReturn(master_key)
        options['key_provider'] = key_provider
        resp = client.getObject(bucket:'bucket', key:'key')
        expect(resp.body.read).to.equal('secret')
        done()

      it 'raises an error when materials can not be found', (done) ->
        stub_encrypted_get_with_instruction_file()
        request('GET', 'https://bucket.s3-us-west-1.amazonaws.com/key.instruction').
          to.eql(status: 404)
        expect ->
          client.getObject(bucket:'bucket', key:'key')
        .to.throw('unable to locate encyrption envelope')
        done()

      it 'resets the cipher during decryption on error', (done) ->
        data = encrypted_body
        api_client.handle (step: send), (context) ->
          http_resp = context.http_response
          headers = {
            'X-Amz-Meta-X-Amz-Key': 'gX+a4JQYj7FP0y5TAAvxTz4e2l0DvOItbXByml/NPtKQcUlsoGHoYR/T0TuYHcNj',
            'X-Amz-Meta-X-Amz-Iv': 'TO5mQgtOzWkTfoX4RE5tsA==',
            'X-Amz-Meta-X-Amz-Matdesc': '{}',
          }
          # fail first attempt, succeed second time
          if context['already_failed']
            http_resp.signal_headers(200, headers)
            http_resp.signal_data(data)
            http_resp.signal_done
          else
            context['already_failed'] = true
            http_resp.signal_headers(200, headers)
            http_resp.signal_data(data)
            http_resp.signal_error(
              new Seahorse.Client.NetworkingError( new RuntimeError('oops'))
            )

          new Seahorse.Client.Response({ context: context })

        resp = client.getObject({ bucket:'bucket', key:'key' })
        expect(resp.body.read).to.equal('secret')
        done()

      it 'raises an error when it is unable to decrypt the envelope', (done) ->
        stub_encrypted_get()
        options['encryption_key'] = '.' * 32
        expect ->
          client.getObject(bucket:'bucket', key:'key')
        .to.throw('decryption failed, possible incorrect key')
        done()

      it 'validates the key length', (done) ->
        stub_encrypted_get()
        options['encryption_key'] = '.' * 31
        msg = 'invalid key, symmetric key required to be 16, 24, or 32 bytes in length, saw length 31'
        expect ->
          client.getObject(bucket:'bucket', key:'key')
        .to.throw(msg)
        done()

      it 'supports asymmetric keys', (done) ->
        stub_encrypted_get()
        options['encryption_key'] = OpenSSL.PKey.RSA.generate(1024)
        expect ->
          client.getObject(bucket:'bucket', key:'key')
        .to.throw(StandardError)
        done()

      it 'does not support get with range', (done) ->
        expect ->
          client.getObject(bucket:'bucket', key:'key', range: 'BYTE-RANGE')
        .to.throw('range not supported')
        done()


  describe 'kms', ->

    kms_client = new AWS.KMS({ stub_responses:true })

    client = new AWS.S3.Encryption.Client(
        kms_key_id: 'kms-key-id',
        kms_client: kms_client,
        stub_responses: true,
      )

    envelope = {
      'x-amz-wrap-alg': 'kms',
      'x-amz-cek-alg': 'AES/CBC/PKCS5Padding',
      'x-amz-iv': 'rVucSqIJvenVa7HliO+oIw==',
      'x-amz-key-v2': new Buffer('encrypted-object-key', 'utf8', 'base64'),
      'x-amz-matdesc': '{"kms_cmk_id":"kms-key-id"}',
    }

    plaintext_object_key = '\xE4^\xE3\xE0v@\x8Aq\xAF\xE7y\x10\x18\xD4X\xC2\xDC&\xF6\xDB\xCCM\x03\xAF3DD\xFF\xDA\x0Flj'

    encrypted_object_key = 'encrypted-object-key'

    random_iv = new Buffer('rVucSqIJvenVa7HliO+oIw==', 'base64', 'utf8')

    #beforeEach -> allow_any_instance_of(OpenSSL.Cipher).to.receive(random_iv).andReturn(random_iv)

    it 'supports encryption via KMS', (done) ->
      kms_client.generateDataKey ({
        plaintext: plaintext_object_key,
        ciphertext_blob: encrypted_object_key,
      }), (err, response) ->
        #console.log("err, response", err, response);
      resp = client.putObject(bucket:'aws-sdk', key:'foo', body:'plain-text')
      console.log("resp.context.http_request.headers", resp.context.http_request.headers);
      headers = resp.context.http_request.headers
      AWS.util.each envelope (key, value) ->
        expect(headers['x-amz-meta-#{key}']).to.equal(value)

      expect( new Buffer(resp.context.http_request.body_contents, 'utf8', 'base64') ).to.equal('4FAj3kTOIisQ+9b8/kia8g==\n')
      done()

    it 'supports decryption via KMS', (done) ->
      kms_client.decrypt(plaintext: plaintext_object_key)
      client.client.getObject({
        body: new Buffer('4FAj3kTOIisQ+9b8/kia8g==\n', 'base64', 'utf8'),
        metadata: envelope
      })
      resp = client.getObject(bucket:'aws-sdk', key:'foo')
      expect(resp.body.read).to.equal('plain-text')
      done()
