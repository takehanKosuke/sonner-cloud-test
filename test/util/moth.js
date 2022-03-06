"use strict";

const test = require('ava');
const mothUtil = require('../../app/util/moth');

test("足し算", (t) => {
  const result = mothUtil.Add(1, 2);
  t.is(result, 3)
});

// test("bar", async (t) => {
//   const bar = Promise.resolve("bar");
//   t.is(await bar, "bar");
// });
