function validateEvents(events, expected) {
  if (events.length !== expected.length) {
    throw new Error(`Expected ${expected.length} events but received ${events.length}`);
  };
  //since the events may be out of order, for each
  //event, compare it to all the expected events until
  //find the correspond one.
  expected = expected.slice(0);//shallow copy of expected events array
  for (const event of events) {
    let equaledIndex = 0;
    while (equaledIndex < expected.length) {
      if (validateEvent(event, expected[equaledIndex])) break;
      equaledIndex ++;
    }
    if (equaledIndex === expected.length) {
      throw new Error(`Cannot validate the event: ${JSON.stringify(event)}`);
    } else {
      expected = expected.slice(0, equaledIndex).concat(expected.slice(equaledIndex + 1));
      //remove found correspond one from expected event array
    }
  }
  if (expected.length === 0) return true;
  return false;
}

function validateEvent(event, expected) {
  if (event.Type === 'ApiCallAttempt')
    return validateApiCallAttemptEvent(event, expected);
  if (event.Type === 'ApiCall')
    return validateApiCallEvent(event, expected);
  throw new Error(`Cannot validate the event: ${JSON.stringify(event)}`);
}

function validateApiCallEvent(event, expected) {
  //shared monitoring event entries
  if (event.Type !== 'ApiCall' || expected.Type !== 'ApiCall') return false;
  const keysToValidate = [
    //shared monitoring event entries
    'Service', 'Api', 'ClientId', 'Version', 'Timestamp', 'Region', 'UserAgent',
    //api call monitoring events
    'AttemptCount', 'Latency', 'MaxRetriesExceeded', 'ApiCallTimeout', 'FinalAwsException',
    'FinalAwsExceptionMessage', 'FinalSdkException', 'FinalSdkExceptionMessage',
    'FinalHttpStatusCode'
  ];
  for (const keyToValidate of keysToValidate) {
    if (!validateEntry(event, expected, keyToValidate)) return false;
  }
  return true;
}

function validateApiCallAttemptEvent(event, expected) {
   //shared monitoring event entries
  if (event.Type !== 'ApiCallAttempt' || expected.Type !== 'ApiCallAttempt') return false;
  const keysToValidate = [
    //shared monitoring event entries
    'Service', 'Api', 'ClientId', 'Version', 'Timestamp', 'Region', 'UserAgent',
    //api call attempt monitoring event entries
    'Fqdn', 'AttemptLatency', 'SessionToken', 'AccessKey', 'HttpStatusCode',
    'AwsException', 'AwsExceptionMessage', 'SdkException', 'SdkExceptionMessage', 'XAmznRequestId',
    'XAmzRequestId', 'XAmzId2'
  ];
  for (const keyToValidate of keysToValidate) {
    if (!validateEntry(event, expected, keyToValidate)) return false;
  }
  return true;
}

function validateEntry(event, expected, key) {
  // additional entry will not be validated
  if (typeof expected[key] === 'undefined') return true;
  //validationg the type of event
  if (isANY(expected[key])) {
    return validateANY(event[key], expected[key]);
  }
  return event[key] === expected[key];
}

function isANY(value) {
  return value && value.indexOf && value.indexOf('ANY_') === 0;
}

function validateANY(origin, expect) {
  if (typeof origin === 'undefined') {
    return true;
  } else if (expect === 'ANY_STR' && typeof origin === 'string') {
    return true;
  } else if (expect === 'ANY_INT' && Number.isInteger(origin)) {
    return true;
  }
  return false;
}

module.exports.validateEvents = validateEvents;
