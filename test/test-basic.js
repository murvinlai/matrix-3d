var matrix3d = require('../lib/matrix-3d');
var assert = require('assert');

// get the translation matrix
var x = 10;
var y = 2;
var z = -5;

var m = matrix3d.tranlate_x(x);
console.log("Tx: " + JSON.stringify(m));
assert.equal(m[0][3], x);

var m = matrix3d.tranlate_y(y);
console.log("Tz: " + JSON.stringify(m));
assert.equal(m[1][3], y);

var m = matrix3d.tranlate_z(z);
console.log("Ty: " + JSON.stringify(m));
assert.equal(m[2][3], z);

// get the rotation matrix