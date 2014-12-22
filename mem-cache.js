if (typeof module === 'object' && typeof define !== 'function') {
  var define = function (factory) { module.exports = factory(require, exports, module) }
}

define(function () {

  function MemCache() {

    var cache = {}
      , timerId = null

    /*
     * Returns all keys.
     * @api public
     */
    Object.defineProperty(this, "keys", {
      enumerable: true,
      get: function () {
        return Object.keys(cache)
      }
    })

    /*
     * Returns count of items in the cache.
     * @api public
     */
    Object.defineProperty(this, "length", {
      enumerable: true,
      get: function () {
        return this.keys.length
      }
    })

    this.set = function (key, value) {
      cache[key] = value

      return value
    }

    this.get = function (key) {
      return cache[key] || null
    }

    this.remove = function (key) {
      var item = cache[key]
      if (!item) return null

      delete cache[key]
      return item
    }

    this.flush = function () {
      cache = {}
    }

  }

  return MemCache

})