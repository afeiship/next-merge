(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.merge = function () {
    // _mergeRecursive does the actual job with two arguments.
    var _mergeRecursive = function (dst, src) {
      if (typeof src.nodeType!=='undefined' || typeof src !== 'object' || src === null) {
        return dst;
      }

      for (var p in src) {
        if (!src.hasOwnProperty(p) || src[p] === undefined){
          continue;
        }
        if (typeof src[p] !== 'object' || src[p] === null) {
          dst[p] = src[p];
        } else if (typeof dst[p] !== 'object' || dst[p] === null) {
          dst[p] = _mergeRecursive(Array.isArray(src[p]) ? [] : {}, src[p]);
        } else {
          _mergeRecursive(dst[p], src[p]);
        }
      }
      return dst;
    };

    // Loop through arguments and merge them into the first argument.
    var target = arguments[0];
    if (typeof target !== 'object' || target === null){
      return target;
    }
    for (var i = 1, length = arguments.length; i < length; i++) {
      _mergeRecursive(target, arguments[i]);
    }
    return target;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.merge;
  }

}());
