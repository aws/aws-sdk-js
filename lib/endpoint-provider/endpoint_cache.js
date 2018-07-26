function EndpointCache(size) {
  this.size = size;
  this.resourceToEndpoint = {};
  this.head = null;
  this.tail = null;
}

function LinkedListNode(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

EndpointCache.prototype.get = function(key) {
  return ''
}

EndpointCache.prototype.set = function(key, value) {

}

module.exports = EndpointCache;
