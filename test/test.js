var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-merge');

describe('next/merge', function () {

  it('nx.mix', function () {
    var users = {
      'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
    };

    var ages = {
      'data': [{ 'age': 36 }, { 'age': 40 }]
    };


    var res = nx.merge(users, ages);

    console.log(res);

  });

});
