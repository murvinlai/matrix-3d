var math = require('mathjs');

var a = [[1, 0, 0, 1], 
     [0, 1, 0, 0],
	 [0, 0, 1, 0],
	 [0, 0, 0, 1]];

var b = [[1, 0, 0, 0],
	 [0, 1, 0, 0],
	 [0, 0, 1, 0],
	 [0, 0, 0, 1]];

var c = math.multiply(a, b);  
console.log("c is :" + JSON.stringify(c));

var c = math.select(a).multiply(b).done();
console.log("c is :" + JSON.stringify(c));

var t1 = [[1, 0, 0, 2],
	  [0, 1, 0, 0], 
	  [0, 0, 1, 0],
	  [0, 0, 0, 1]];

var c = math.select(a).multiply(t1).done();
console.log("c is :" + JSON.stringify(c));

var d2r = function(d) {
	var r = (d * math.pi )/180;
	return r;  
}

console.log("90 degree is rad: " + d2r(90));   


var rx = function(d) {
	var m = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]; 
	var r = d2r(d);
	var cos = math.cos(r);
	if ((cos | 0) === 0) {
		cos = 0;
	}
	var sin = math.sin(r);
	if ((sin | 0) === 0) {
		sin = 0;
	}
	m[1][1] = cos;
	m[1][2] = -1 * sin;
	m[2][1] = sin;
	m[2][2] = cos;
	return m;
}

var ry = function(d) {
	var m = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];
        var r = d2r(d);
        var cos = math.cos(r);
        if ((cos | 0) === 0) {
                cos = 0;
        }
        var sin = math.sin(r);
        if ((sin | 0) === 0) {
                sin = 0;
        }
        m[0][0] = cos;
        m[0][2] = sin;
        m[2][0] = -1 * sin;
        m[2][2] = cos;
        return m;
}

var rz = function(d) {
	var m = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];
        var r = d2r(d);
        var cos = math.cos(r);
        if ((cos | 0) === 0) {
                cos = 0;
        }
        var sin = math.sin(r);
        if ((sin | 0) === 0) {
                sin = 0;
        }
        m[0][0] = cos;
        m[0][1] = -1 * sin;
        m[1][0] = sin;
        m[1][1] = cos;
	console.log("run rz" + JSON.stringify(m));
        return m;
}

var r1 = rx(180);
var r2 = ry(180);
var r3 = rz(180);
console.log("r1: "+ JSON.stringify(r1));
console.log("r2: "+ JSON.stringify(r2));
console.log("r3: "+ JSON.stringify(r3));
console.log("---180---");
var c = math.select(a).multiply(t1).multiply(r1).done();
console.log("c is :" + JSON.stringify(c));

var c = math.select(a).multiply(t1).multiply(r1).multiply(t1).done();
console.log("rx is :" + JSON.stringify(c));

var c = math.select(a).multiply(t1).multiply(r2).multiply(t1).done();
console.log("ry is :" + JSON.stringify(c));

var c = math.select(a).multiply(t1).multiply(r3).multiply(t1).done();
console.log("rz is :" + JSON.stringify(c));

console.log("---90---");
var r1 = rx(90);
var r2 = ry(90);
var r3 = rz(90);

var c = math.select(a).multiply(t1).multiply(r1).done();
console.log("c is :" + JSON.stringify(c));

var c = math.select(a).multiply(t1).multiply(r1).multiply(t1).done();
console.log("rx is :" + JSON.stringify(c));

var c = math.select(a).multiply(t1).multiply(r2).multiply(t1).done();
console.log("ry is :" + JSON.stringify(c));

var c = math.select(a).multiply(t1).multiply(r3).multiply(t1).done();
console.log("rz is :" + JSON.stringify(c));

var c = math.select(a).multiply(t1).multiply(r3).multiply(t1).multiply(r3).multiply(t1).multiply(r3).multiply(t1).done();
console.log("rz back to original:  :" + JSON.stringify(c));