# Generates lib/aws.rb which requires all service files
class ServicesLoaderGenerator
  def initialize(root)
    @requires = []

    apis = Dir.glob(File.join(root, 'lib', 'services', '*.js'))
    apis.sort.each do |api|
      service = File.basename(api).split('.').first
      @requires << "require('./services/#{service}');"
    end
  end

  def to_s
    <<-eof
/* This file is auto-generated. DO NOT EDIT. */

#{@requires.join("\n")}
    eof
  end
end