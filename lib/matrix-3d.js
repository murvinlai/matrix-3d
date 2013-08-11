var math = require('mathjs');

/* 
* Conversion Functions
*/

// Convert Degree to Radian
var d2r = function(d) {
    return (d * math.pi )/180;
}
module.exports.d2r = d2r;

// Convert Radian to Degree
var r2d = function(r) {
    return (180 * r) /  math.pi;
}
module.exports.r2d = r2d;

// Roundoff to 0 Cos,  cos(pi/2) is a very small floating number in JS.  this function will make it to 0.  
// param: r - radian
var cos_roundoff = function(r) {
    var cos = math.cos(r);
    if ((cos | 0) === 0) {
		cos = 0;
	}
    return cos;
}
module.exports.cos_roundoff = cos_roundoff;

// Roundoff to 0 Sin
var sin_roundoff = function(r) {
    var sin = math.sin(r);
    if ((sin | 0) === 0) {
        sin = 0;
	}
    return sin;
}
module.exports.sin_roundoff = sin_roundoff;

/*
* Actual 3D matrix operation.
*/
// Return the 4x4 matrix for Translation
var translate = function(x, y, z) {
    var m = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]; 
    m[0][3] = x || 0;
    m[1][3] = y || 0;
    m[2][3] = z || 0;
    return m;
}
module.exports.translate = translate;

var tranlate_x = function(x) {
    return translate(x, 0, 0);
}
module.exports.tranlate_x = tranlate_x;

var tranlate_y = function(y) {
    return translate(0, y, 0);
}
module.exports.tranlate_y = tranlate_y;

var tranlate_z = function(z) {
    return translate(0, 0, z);
}
module.exports.tranlate_z = tranlate_z;

// Return the 4x4 matrix for Rotation. 
/* Rotate on X-axis, 
* param: d - degree
*/
var rotate_x = function(d) {
    var m = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]; 
    var r = d2r(d);
	var cos = cos_roundoff(r);
	var sin = sin_roundoff(r);
    
	m[1][1] = cos;
	m[1][2] = -1 * sin;
	m[2][1] = sin;
	m[2][2] = cos;
	return m;
}
module.exports.rotate_x = rotate_x;

var rotate_y = function(d) {
    var m = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]; 
    var r = d2r(d);
    var cos = cos_roundoff(r);
	var sin = sin_roundoff(r);
    
	m[0][0] = cos;
    m[0][2] = sin;
    m[2][0] = -1 * sin;
    m[2][2] = cos;
	return m;
}
module.exports.rotate_y = rotate_y;

var rotate_z = function(d) {
    var m = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]; 
    var r = d2r(d);
    var cos = cos_roundoff(r);
    var sin = sin_roundoff(r);
    
	m[0][0] = cos;
    m[0][1] = -1 * sin;
    m[1][0] = sin;
    m[1][1] = cos;
	return m;
}
module.exports.rotate_z = rotate_z;
var rotate_2d = rotate_z;
module.exports.rotate_2d = rotate_2d;



