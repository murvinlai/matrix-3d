var matrix3d = require('../lib/matrix-3d');
var assert = require('assert');

// get the translation matrix
var x = 10;
var y = 2;
var z = -5;

var m = matrix3d.translate_x(x);
console.log("Tx: " + JSON.stringify(m));
assert.equal(m[0][3], x);

var m = matrix3d.translate_y(y);
console.log("Ty: " + JSON.stringify(m));
assert.equal(m[1][3], y);

var m = matrix3d.translate_z(z);
console.log("Tz: " + JSON.stringify(m));
assert.equal(m[2][3], z);

// get the rotation matrix
var d = 90;
var m = matrix3d.rotate_x(d);
console.log("Rx: " + JSON.stringify(m));
assert.equal(m[1][1], 0);
assert.equal(m[1][2], -1);

var m = matrix3d.rotate_y(d);
console.log("Ry: " + JSON.stringify(m));
assert.equal(m[1][1], 1);
assert.equal(m[1][2], 0);

var m = matrix3d.rotate_z(d);
console.log("Rz: " + JSON.stringify(m));
assert.equal(m[0][1],-1);
assert.equal(m[0][2], 0);


