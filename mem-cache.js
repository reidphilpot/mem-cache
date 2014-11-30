if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(function () {

    var MemCache = function () {

      var cache = {}

      /*
       * Returns all keys.
       * @api public
       */
      Object.defineProperty(this, "keys", {
        enumerable: true,
        get: function () { return Object.keys(cache) }
      })

      /*
       * Returns count of items in the cache.
       * @api public
       */
      Object.defineProperty(this, "length", {
        enumerable: true,
        get: function () { return this.keys.length }
      })

      this.set = function (key, value) {
        cache[key] = value
      }

      this.get = function (key) {
        return cache[key] || null
      }

      this.remove = function (key) {
        var value = cache[key]

        delete cache[key]

        return value
      }

      this.flush = function () {
        cache = {}
      }

    }

    return MemCache

  }
)