(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.merge basic deep merge', function () {
      var users = {
        data: [{ user: 'barney' }, { user: 'fred' }]
      };

      var ages = {
        data: [{ age: 36 }, { age: 40 }]
      };

      var res = nx.merge({}, users, ages);

      expect(res.data.length).toBe(2);
      expect(res.data[0].user).toBe('barney');
      expect(res.data[0].age).toBe(36);
    });

    test('safe mix', () => {
      var object = {
        a: [{ b: 2 }, { d: 4 }]
      };

      var other = {
        a: [{ c: 3 }, { e: 5 }]
      };

      var res = nx.merge(object, other);

      expect(res === object).toBe(true);
      expect(res).toEqual({
        a: [
          { b: 2, c: 3 },
          { d: 4, e: 5 }
        ]
      });
    });
  });
})();
