var expect = require('chai').expect
  , Cache = require('../mem-cache')

describe('Mem Cache', function () {

  var cache

  beforeEach(function () {
    cache = new Cache()
  })

  it('should create instance of mem cache', function () {
    expect(cache).to.be.an.instanceof(Cache)
  })

  it('should be able to add an item to the cache', function () {
    cache.set('foo', 'bar')
    expect(cache.keys.length).to.equal(1)
  })

  it('should be able to get a value by its key', function () {
    cache.set('foo0', 'bar0')
    cache.set('foo4', 'bar4')
    cache.set('foo1', 'bar1')
    cache.set('foo3', 'bar3')
    cache.set('foo2', 'bar2')

    expect(cache.length).to.equal(5)

    var value = cache.get('foo2')

    expect(value).to.equal('bar2')
    expect(cache.length).to.equal(5)
  })

  it('should return a null value if an entry for the key does not exist', function () {
    cache.set('foo0', 'bar0')
    cache.set('foo4', 'bar4')
    cache.set('foo1', 'bar1')

    var value = cache.get('bar')

    expect(value).to.be.null
  })

  it ('should be able to update a value by its key', function () {
    cache.set('foo0', 'bar0')
    cache.set('foo4', 'bar4')
    cache.set('foo1', 'bar1')
    cache.set('foo3', 'bar3')
    cache.set('foo2', 'bar2')

    cache.set('foo1', 'baz')
    expect(cache.length).to.equal(5)

    var value = cache.get('foo1')

    expect(value).to.equal('baz')
    expect(cache.length).to.equal(5)
  })

  it ('should be able to remove a value by its key', function () {
    cache.set('foo0', 'bar0')
    cache.set('foo4', 'bar4')
    cache.set('foo1', 'bar1')
    cache.set('foo2', 'bar2')
    cache.set('foo3', 'bar3')

    var value = cache.remove('foo2')

    expect(value).to.equal('bar2')
    expect(cache.length).to.equal(4)
  })

  it ('should return a null value if attempting to remove a key that does not exist', function () {
    var value = cache.remove('foo2')

    expect(value).to.be.null
  })

  it ('should be able to flush the cache', function () {
    cache.set('foo0', 'bar0')
    cache.set('foo1', 'bar1')

    expect(cache.length).to.equal(2)

    cache.flush()

    expect(cache.keys).to.be.empty
  })


})
