helpers = require('../../helpers')
AWS = helpers.AWS

describe 'AWS.S3.Encryption.IOEncrypter', ->

  key = new Buffer( 'kM5UVbhE/4rtMZJfsadYEdm2vaKFsmV2f5+URSeUCV4=', 'base64', 'utf8')

  iv = new Buffer( 'k8n8oF8ZNPRKAYY0RFqN2Q==', 'base64', 'utf8')

  plain_text = 'The quick brown fox jumps over the lazy dog.'

  cipher_text = new Buffer( 'MUeGuvB6IcjFo5VBWET659nWwx3+YH21HyVhF2Jf8bQ++2wvmtpXaGMJC2fae4j/', 'base64', 'utf8')

  cipher = require('crypto').createCipheriv('aes-256-cbc', key, iv )
  # cipher.encrypt
  #cipher.key = key
  #cipher.iv = iv

  double = ( obj ) ->
    if (obj == null || (typeof obj != 'object'))
      return obj;

  it 'encrypts an IO object', (done) ->
    io = new AWS.S3.Encryption.IOEncrypter(cipher, plain_text)
    expect(io.read).to eq(cipher_text)
    done()

  it 'supports partial reads', (done) ->
    io = new AWS.S3.Encryption.IOEncrypter(cipher, plain_text)
    parts = []
    while part = io.read(3)
      parts << part
    end
    expect(parts.join).to.equal(cipher_text)
    done()

  it 'caches the cipher-text of large objects to disk', (done) ->
    tempfile = double('tempfile') #.as_null_object
    expect(tempfile).to.receive(write)
    expect(tempfile).to.receive(binmode)
    #allow(Tempfile).to.receive(new).andReturn(tempfile)

    large_io = double('large-io-object', size: 10 * 1024 * 1024, read: nil)
    allow(large_io).to receive(read).
      and_return('data').
      and_return(nil)

    new AWS.S3.Encryption.IOEncrypter(cipher, large_io)
    done()

  it 'supports re-reading from the cache file to enable retries', (done) ->
    data = '.' * (2 * 1024 * 1024) # 2MB file
    io = new AWS.S3.Encryption.IOEncrypter(cipher, data)
    cipher_text = io.read();
    io.close()
    expect(io.read).to eq(cipher_text) # automatically re-opens the file
    done()
