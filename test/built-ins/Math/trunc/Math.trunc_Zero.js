// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.2.2.35
author: Ryan Lewis
description: Math.trunc should return 0 when called with 0.
includes: [runTestCase.js]
---*/

function testcase() {
  if(Math.trunc(0) === 0) {
  	return true;
  }
 }
runTestCase(testcase);
