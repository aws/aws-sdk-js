# language: en
@importexport @requiresakid
Feature: AWS Import/Export

  I want to use AWS Import/Export

  Scenario: Creating a job
    Given I create a bucket
    When I create an Import job with manifest:
    """
    manifestVersion: 2.0
    accessKeyId: {ACCESS_KEY_ID}
    bucket: {BUCKET}
    deviceId: ABCDE
    generator: AWS ImportExport Web Service Tool 1.0
    prefix: imported/
    eraseDevice: no
    returnAddress:
        name: Joe Random 
        company: Amazon Web Services
        street1: 123 Any Street    
        city: Anytown
        stateOrProvince: WA
        postalCode: 91111
        phoneNumber: 555-555-0100
        country: USA
    serviceLevel: expeditedShipping   
    """
    And I store the Import job ID
    And I get the Import job status
    Then the result should contain a property CreationDate with a Date
    And I cancel the Import job
    And the result should contain Success with expression true
    And I get the Import job status
    Then the result should contain ProgressCode with string value "Canceled"
    And I delete the bucket

  Scenario: Listing jobs
    When I list Import/Export jobs
    Then the result should contain a property IsTruncated with a boolean
    And the result should contain a property Jobs with an Array

  Scenario: Error handling
    When I create an Import job with manifest:
    """
    INVALID MANIFEST
    """
    Then the error code should be "MalformedManifestException"
    And the error message should be:
    """
    Your manifest is not well-formed
    """
