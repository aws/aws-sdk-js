# Generates a boilerplate service class file
class ServiceGenerator
  def initialize(klass, service, api)
    @klass = klass
    @service = service
    @api = api
  end

  def to_s
    <<-eof
var AWS = require('../core');

AWS.#{@klass} = AWS.Service.defineService('#{@service}', ['#{@api}']);

module.exports = AWS.#{@klass};
    eof
  end
end