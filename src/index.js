(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var OBJECT = 'object';
  var UNDEFINED = 'undefined';

  // https://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
  // merge does the actual job with two arguments.
  var merge = function (dst, src) {
    if (typeof src.nodeType !== UNDEFINED || typeof src !== OBJECT || src === null) {
      return dst;
    }

    for (var p in src) {
      if (!src.hasOwnProperty(p) || src[p] === undefined) {
        continue;
      }
      if (typeof src[p] !== OBJECT || src[p] === null) {
        dst[p] = src[p];
      } else if (typeof dst[p] !== OBJECT || dst[p] === null) {
        dst[p] = merge(Array.isArray(src[p]) ? [] : {}, src[p]);
      } else {
        merge(dst[p], src[p]);
      }
    }
    return dst;
  };

  nx.merge = function () {
    // Loop through arguments and merge them into the first argument.
    var target = arguments[0];
    if (typeof target !== OBJECT || target === null) return target;
    for (var i = 1, length = arguments.length; i < length; i++) {
      merge(target, arguments[i]);
    }
    return target;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.merge;
  }
})();
