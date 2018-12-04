import * as AWS from '../index';

// Valudidate request listeners are available
if (AWS.EventListeners.Core.HTTP_DATA) {

} else if (AWS.EventListeners.Core.SEND) {

} else if (AWS.EventListeners.Core.VALIDATE_CREDENTIALS) {

} else if (AWS.EventListeners.Core.VALIDATE_PARAMETERS) {

} else if (AWS.EventListeners.Core.VALIDATE_REGION) {

}

// validate that removeListeners can be called

if (AWS.EventListeners.Core.removeListener) {
    AWS.EventListeners.Core.removeListener('send', AWS.EventListeners.Core.SEND);
}