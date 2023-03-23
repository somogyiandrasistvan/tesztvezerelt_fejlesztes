QUnit.module("add", function () {
  QUnit.test("létezik-e a fizbuz?", function (assert) {
    assert.ok(fizbuz, "Létezik-e a fizbuz?");
  });

  QUnit.test("Tényleg fügvény-e?", function (assert) {
    assert.ok(typeof fizbuz === "function", "Tényleg fügvény-e?");
  });

  QUnit.test("fizbuzzErtek() [1,2,4,7,8,11,13,14]", function (assert) {
    const nemOszthatoLista = [1, 2, 4, 7, 8, 11, 13, 14];
    for (let index = 0; index < nemOszthatoLista.length; index++) {
      assert.equal(
        fizbuzzErtek(nemOszthatoLista[index]),
        nemOszthatoLista[index]
      );
    }
  });

  QUnit.test("fizbuzzErtek() [3,6,9,12]", function (assert) {
    const nemOszthatoLista = [3, 6, 9, 12];
    for (let index = 0; index < nemOszthatoLista.length; index++) {
      assert.equal(fizbuzzErtek(nemOszthatoLista[index]), "fizz");
    }
  });

  QUnit.test("fizbuzzErtek() [5,10]", function (assert) {
    const nemOszthatoLista = [5, 10];
    for (let index = 0; index < nemOszthatoLista.length; index++) {
      assert.equal(fizbuzzErtek(nemOszthatoLista[index]), "buzz");
    }
  });

  QUnit.test("fizbuzzErtek() [15]", function (assert) {
    const nemOszthatoLista = [15];
    for (let index = 0; index < nemOszthatoLista.length; index++) {
      assert.equal(fizbuzzErtek(nemOszthatoLista[index]), "fizzbuzz");
    }
  });

  QUnit.test("fizbuzzErtek(15)", function (assert) {
    assert.equal(
      fizbuz(15),
      "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz"
    );
  });
});
