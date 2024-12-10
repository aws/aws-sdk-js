helpers = require('../helpers');
var toBuffer = helpers.AWS.util.buffer.toBuffer;

var recordEventMessage = toBuffer(
    'AAAA0AAAAFX31gVLDTptZXNzYWdlLXR5cGUHAAVldmVudAs6ZXZlbnQtdHlwZQcAB1JlY29yZHMNOmNvbnRlbnQtdHlwZQcAGGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTEsRm9vLFdoZW4gbGlmZSBnaXZlcyB5b3UgZm9vLi4uCjIsQmFyLG1ha2UgQmFyIQozLEZpenosU29tZXRpbWVzIHBhaXJlZCB3aXRoLi4uCjQsQnV6eix0aGUgaW5mYW1vdXMgQnV6eiEKzxKeSw==',
    'base64'
);

var statsEventMessage = toBuffer(
    'AAAA0QAAAEM+YpmqDTptZXNzYWdlLXR5cGUHAAVldmVudAs6ZXZlbnQtdHlwZQcABVN0YXRzDTpjb250ZW50LXR5cGUHAAh0ZXh0L3htbDxTdGF0cyB4bWxucz0iIj48Qnl0ZXNTY2FubmVkPjEyNjwvQnl0ZXNTY2FubmVkPjxCeXRlc1Byb2Nlc3NlZD4xMjY8L0J5dGVzUHJvY2Vzc2VkPjxCeXRlc1JldHVybmVkPjEwNzwvQnl0ZXNSZXR1cm5lZD48L1N0YXRzPiJ0pLk=',
    'base64'
);

var endEventMessage = toBuffer(
    'AAAAOAAAACjBxoTUDTptZXNzYWdlLXR5cGUHAAVldmVudAs6ZXZlbnQtdHlwZQcAA0VuZM+X05I=',
    'base64'
);


module.exports = {
    endEventMessage: endEventMessage,
    recordEventMessage: recordEventMessage,
    statsEventMessage: statsEventMessage
};
