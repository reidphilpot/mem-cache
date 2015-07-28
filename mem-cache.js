if (typeof module === 'object' && typeof define !== 'function') {
  var define = function (factory) {
    module.exports = factory(require, exports, module)
  }
}

define(function () {

  function MemCache(defaultTimeout) {

    var cache = {}

    /*
     * Returns all keys.
     * @api public
     */
    Object.defineProperty(this, 'keys', {
      enumerable: true,
      get: function () {
        return Object.keys(cache)
      }
    })

    /*
     * Returns count of items in the cache.
     * @api public
     */
    Object.defineProperty(this, 'length', {
      enumerable: true,
      get: function () {
        return this.keys.length
      }
    })

    this.set = function (key, value, timeout) {
      var item = { key: key, value: value }

      if (timeout || defaultTimeout) {
        item.timerId = setTimeout(timeout || defaultTimeout, this.remove.bind(this, item.key))
      }

      this.remove(key)

      cache[key] = item

      return value
    }

    this.get = function (key) {
      return cache[key] ? cache[key].value : null
    }

    this.remove = function (key) {
      var item = cache[key]
      if (!item) return null

      if(item.timerId) clearTimeout(item.timerId)
      delete cache[key]

      return item.value
    }

    this.flush = function () {
      cache = {}
    }

  }

  return MemCache

})