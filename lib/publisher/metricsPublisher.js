module.exports = {
  //dummy publisher
  monitoringEventsHandler: function (event) {
    console.log('udp send: ', event);
  }
}
