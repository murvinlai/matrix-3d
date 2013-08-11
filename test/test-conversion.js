var matrix3d = require('../lib/matrix-3d');
var assert = require('assert');
var data = [90, 180];

var r = matrix3d.d2r(data[0]);
console.log("Radian: " + r);
var d = matrix3d.r2d(r);
assert.equal(d, data[0]);

