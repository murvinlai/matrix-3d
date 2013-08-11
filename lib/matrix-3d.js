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

// Roundoff to 0 Cos, 
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








