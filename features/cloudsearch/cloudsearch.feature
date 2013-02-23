# Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

# language: en
@cloudsearch
Feature: Amazon CloudSearch

  I want to use Amazon CloudSearch

  Scenario: Domain creation
    Given I create a domain with name prefix "aws-js-sdk"
    Then DomainStatus should show that Created is true
    And I delete the domain

  Scenario: Error handling
    Given I create a domain with name prefix ""
    Then the error code should be "ValidationError"
