AWS = require('./helpers').AWS

describe 'AWS.Endpoint', ->
  it 'throws error if parameter is null/undefined', ->
    expect(-> new AWS.Endpoint(null)).to.throw('Invalid endpoint: null')
    expect(-> new AWS.Endpoint(undefined)).to.throw('Invalid endpoint: undefined')

  it 'copy constructs Endpoint', ->
    origEndpoint = new AWS.Endpoint('http://domain.com')
    endpoint = new AWS.Endpoint(origEndpoint)
    expect(endpoint).not.to.equal(origEndpoint)
    expect(endpoint.host).to.equal('domain.com')

  it 'retains the entire endpoint as the endpoint href', ->
    href = 'http://domain.com/'
    endpoint = new AWS.Endpoint(href)
    expect(endpoint.href).to.equal(href)

  it 'populates the endpoint properites from the endpoint href', ->
    href = 'http://domain.com/'
    endpoint = new AWS.Endpoint(href)
    expect(endpoint.href).to.equal(href)
    expect(endpoint.protocol).to.equal('http:')
    expect(endpoint.host).to.equal('domain.com')
    expect(endpoint.hostname).to.equal('domain.com')
    expect(endpoint.port).to.equal(80)

  it 'keeps port in host when non-standard', ->
    href = 'http://domain.com:123/'
    endpoint = new AWS.Endpoint(href)
    expect(endpoint.href).to.equal(href)
    expect(endpoint.protocol).to.equal('http:')
    expect(endpoint.host).to.equal('domain.com:123')
    expect(endpoint.hostname).to.equal('domain.com')
    expect(endpoint.port).to.equal(123)

  it 'works with https endpoints', ->
    href = 'https://secure.domain.com/'
    endpoint = new AWS.Endpoint(href)
    expect(endpoint.href).to.equal(href)
    expect(endpoint.protocol).to.equal('https:')
    expect(endpoint.host).to.equal('secure.domain.com')
    expect(endpoint.hostname).to.equal('secure.domain.com')
    expect(endpoint.port).to.equal(443)

  it 'keeps port in host when non-standard for SSL', ->
    href = 'https://secure.domain.com:123/'
    endpoint = new AWS.Endpoint(href)
    expect(endpoint.href).to.equal(href)
    expect(endpoint.protocol).to.equal('https:')
    expect(endpoint.host).to.equal('secure.domain.com:123')
    expect(endpoint.hostname).to.equal('secure.domain.com')
    expect(endpoint.port).to.equal(123)

  it 'defaults the protocol to the current AWS.config.sslEnabled mode', ->
    AWS.config.sslEnabled = false
    endpoint = new AWS.Endpoint('domain.com')
    expect(endpoint.href).to.equal('http://domain.com/')
    expect(endpoint.protocol).to.equal('http:')
    expect(endpoint.host).to.equal('domain.com')
    expect(endpoint.hostname).to.equal('domain.com')
    expect(endpoint.port).to.equal(80)

  it 'defaults the protocol to the current AWS.config.sslEnabled mode', ->
    AWS.config.sslEnabled = true
    endpoint = new AWS.Endpoint('domain.com')
    expect(endpoint.href).to.equal('https://domain.com/')
    expect(endpoint.protocol).to.equal('https:')
    expect(endpoint.host).to.equal('domain.com')
    expect(endpoint.hostname).to.equal('domain.com')
    expect(endpoint.port).to.equal(443)

  it 'accepts a configuration object that specifies the mode', ->
    expect(AWS.config.sslEnabled).to.equal(true)
    endpoint = new AWS.Endpoint('domain.com', { sslEnabled: false })
    expect(endpoint.href).to.equal('http://domain.com/')
    expect(endpoint.protocol).to.equal('http:')
    expect(endpoint.host).to.equal('domain.com')
    expect(endpoint.hostname).to.equal('domain.com')
    expect(endpoint.port).to.equal(80)
