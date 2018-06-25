function validateEvents(events, expected) {
  if(events.length !== expected.length) return false;
  expected = expected.slice(0);//shallow copy of expected events array
  for (const event of events) {
    if (expected.length === 0) return false;
    let equaledIndex = 0
    while (equaledIndex < expected.length) {
      if (validateEvent(event, expected[equaledIndex])) break;
      equaledIndex ++;
    }
    if (equaledIndex === expected.length) {
      throw new Error('Cannot validate the event: ' + JSON.stringify(event));
    } else {
      expected = expected.slice(0, equaledIndex).concat(expected.slice(equaledIndex + 1))
    }
  }
  if (expected.length === 0) return true
  return false;
}

function validateApiCallEvent(event, expected) {
  if (event.Type !== 'ApiCall' || expected.Type !== 'ApiCall') return false;
  if (!validateEntry(event, expected, 'Service')) return false;
  if (!validateEntry(event, expected, 'Api')) return false;
  if (!validateEntry(event, expected, 'ClientId')) return false;
  if (!validateEntry(event, expected, 'Version')) return false;
  if (!validateEntry(event, expected, 'AttemptCount')) return false;
  if (event.Timestamp === undefined || !(parseInt(event.Timestamp) > 0)) return false;
  if (event.Latency === undefined || !(parseInt(event.Latency) >= 0)) return false;
  return true;
}

function validateApiCallAttemptEvent(event, expected) {
  if (event.Type !== 'ApiCallAttempt' || expected.Type !== 'ApiCallAttempt') return false;
  if (!validateEntry(event, expected, 'Service')) return false;
  if (!validateEntry(event, expected, 'Api')) return false;
  if (!validateEntry(event, expected, 'ClientId')) return false;
  if (!validateEntry(event, expected, 'Version')) return false;
  if (!validateEntry(event, expected, 'Fqdn')) return false;
  if (!validateEntry(event, expected, 'Region')) return false;
  if (!validateEntry(event, expected, 'AccessKey')) return false;
  if (!validateEntry(event, expected, 'HttpStatusCode')) return false;
  if (!validateEntry(event, expected, 'XAmznRequestId')) return false;
  if (!validateEntry(event, expected, 'XAmzRequestId')) return false;
  if (!validateEntry(event, expected, 'XAmzId2')) return false;
  if (!validateEntry(event, expected, 'SdkException')) return false;
  if (!validateEntry(event, expected, 'SdkExceptionMessage')) return false;
  if (!validateEntry(event, expected, 'AwsException')) return false;
  if (!validateEntry(event, expected, 'AwsExceptionMessage')) return false;
  if (!validateEntry(event, expected, 'SessionToken')) return false;
  if (!validateEntry(event, expected, 'Timestamp')) return false;
  if (!validateEntry(event, expected, 'AttemptLatency')) return false;
  return true;
}

function validateEvent(event, expected) {
  if (event.Type === 'ApiCallAttempt') 
    return validateApiCallAttemptEvent(event, expected);
  if (event.Type === 'ApiCall')
    return validateApiCallEvent(event, expected);
  return false;
}

function validateEntry(event, expected, key) {
  if ((event[key] || event[key] === '') && !expected[key]) return true;
  if(event[key] !== expected[key] && !isANY(expected[key])) {
    // console.log(key, event[key], expected[key])
    return false;
  }
  return true;
}

function isANY(value) {
  return value.indexOf && value.indexOf('ANY_') === 0
}

module.exports.validateEvents = validateEvents;
