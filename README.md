matrix-3d
=========

Matrix 3D transformations (translate, rotate) with basic degree-radian conversions. 



-------------


## Purpose

A library of handling matrix 3D transformation, including degree-to-radian conversion. 
The current version just return the 4x4 transformation matrix for Translation and Rotation. 
Later version will use mathjs library for the actual matrix computation. 

## Installation
    $ npm install matrix-3d

## Quick Start

```js
    var matrix_3d = require('matrix-3d');
    
    matrix_3d.d2r(90);  //degree to radian
    matrix_3d.r2d(Math.PI/2);  //radin to degree

    matrix_3d.cos_roundoff(90);  //cos() round of inifintely small 0 to 0.
    matrix_3d.sin_roundoff(180);  //sin() round of inifintely small 0 to 0.

    matrix_3d.translate(1,2,3);     // create 4x4 Translation Matrix
    matrix_3d.translate_x(1);     // create 4x4 Translation Matrix
    matrix_3d.translate_y(2);     // create 4x4 Translation Matrix
    matrix_3d.translate_z(3);     // create 4x4 Translation Matrix

    matrix_3d.rotate_x(90);     // create 4x4 Rotation Matrix along x-axis
    matrix_3d.rotate_y(90);     // create 4x4 Rotation Matrix along y-axis
    matrix_3d.rotate_z(90);     // create 4x4 Rotation Matrix along z-axis
    
```