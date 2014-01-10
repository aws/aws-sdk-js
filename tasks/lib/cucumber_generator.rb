# Generates features/service/* files
class CucumberGenerator
  def initialize(klass, service, api)
    @klass = klass
    @service = service
    @api = api
  end

  def features_file
    <<-eof
# language: en
@#{@service}
Feature: #{@api['service_full_name']}

  I want to use #{@api['service_full_name']}

  Scenario: Feature
    Given I create something with the service
    Then the request should be successful
    And I delete the thing I created

  Scenario: Error handling
    Given I do something with the service
    Then the error code should be "ValidationError"
    eof
  end

  def step_definitions_file
    <<-eof
module.exports = function() {
  this.Before("@#{@service}", function (callback) {
    this.service = new this.AWS.#{@klass}();
    callback();
  });

  // Add step definitions
};
    eof
  end
end
