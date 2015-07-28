## Simple Mem Cache

### Usage

``` javascript
var MemCache = require('mem-cache')
var cache = new MemCache()
```

### Add item to cache

``` javascript
cache.set('foo', 'bar')
```

### Get item from cache

``` javascript
cache.get('foo')
//=> 'bar'
```

### Remove item from cache

``` javascript
cache.remove('foo')
//=> null
```
### Clear cache

``` javascript
cache.flush()
```

### Install

``` shell
> npm Install
```
