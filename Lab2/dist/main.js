/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/cameras/Camera.ts":
/*!*******************************!*\
  !*** ./lib/cameras/Camera.ts ***!
  \*******************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
class Camera {
    constructor(position, UP) {
        this.position = position;
        this.UP = UP;
    }
    /**
     * calculate the N, U, V vector of the camera
     * @param objectPosition
     */
    calcNUV(objectPosition) {
        const N = objectPosition.subtract(this.position).unit();
        const U = N.crossProduct(this.UP).unit();
        const V = U.crossProduct(N);
        return [N, U, V];
    }
}



/***/ }),

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/*! exports provided: Camera, Matrix, Vector3d, Vector4d, EdgeTableElement, Model, RGBA, backFaceCulling, calcModel, bufferInit, scanConversion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cameras_Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cameras/Camera */ "./lib/cameras/Camera.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _cameras_Camera__WEBPACK_IMPORTED_MODULE_0__["Camera"]; });

/* harmony import */ var _math_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math/Matrix */ "./lib/math/Matrix.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _math_Matrix__WEBPACK_IMPORTED_MODULE_1__["Matrix"]; });

/* harmony import */ var _math_Vector3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math/Vector3d */ "./lib/math/Vector3d.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector3d", function() { return _math_Vector3d__WEBPACK_IMPORTED_MODULE_2__["Vector3d"]; });

/* harmony import */ var _math_Vector4d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math/Vector4d */ "./lib/math/Vector4d.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector4d", function() { return _math_Vector4d__WEBPACK_IMPORTED_MODULE_3__["Vector4d"]; });

/* harmony import */ var _objects_EdgeTableElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objects/EdgeTableElement */ "./lib/objects/EdgeTableElement.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EdgeTableElement", function() { return _objects_EdgeTableElement__WEBPACK_IMPORTED_MODULE_4__["EdgeTableElement"]; });

/* harmony import */ var _objects_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/Model */ "./lib/objects/Model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _objects_Model__WEBPACK_IMPORTED_MODULE_5__["Model"]; });

/* harmony import */ var _objects_RGBA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objects/RGBA */ "./lib/objects/RGBA.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RGBA", function() { return _objects_RGBA__WEBPACK_IMPORTED_MODULE_6__["RGBA"]; });

/* harmony import */ var _transform_modeling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transform/modeling */ "./lib/transform/modeling.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backFaceCulling", function() { return _transform_modeling__WEBPACK_IMPORTED_MODULE_7__["backFaceCulling"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcModel", function() { return _transform_modeling__WEBPACK_IMPORTED_MODULE_7__["calcModel"]; });

/* harmony import */ var _transform_fillPixel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transform/fillPixel */ "./lib/transform/fillPixel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferInit", function() { return _transform_fillPixel__WEBPACK_IMPORTED_MODULE_8__["bufferInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scanConversion", function() { return _transform_fillPixel__WEBPACK_IMPORTED_MODULE_8__["scanConversion"]; });

/******************** ./cameras ********************/

/******************** ./math ********************/



/******************** ./objects ********************/



/******************** ./transform ********************/




/***/ }),

/***/ "./lib/math/Matrix.ts":
/*!****************************!*\
  !*** ./lib/math/Matrix.ts ***!
  \****************************/
/*! exports provided: Matrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return Matrix; });
/* harmony import */ var _Vector4d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector4d */ "./lib/math/Vector4d.ts");

class Matrix {
    constructor(valuesOrM, n) {
        if (valuesOrM !== undefined && n !== undefined) {
            this.values = [];
            for (let i = 0; i < valuesOrM; i++) {
                this.values.push(Array.from({ length: n }, _ => 0));
            }
        }
        else if (valuesOrM !== undefined) {
            this.values = valuesOrM;
        }
        else {
            this.values = [];
        }
    }
    /**
     * multiply with other matrix, return a new matrix
     * @param other
     */
    multiply(other) {
        if (this.values[0].length !== other.values.length) {
            throw new Error('Cannot multiply these two matrices!');
        }
        const m = this.values.length;
        const n = other.values.length;
        const k = other.values[0].length;
        // multiply
        const newMatrix = new Matrix(m, k);
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < k; j++) {
                for (let t = 0; t < n; t++) {
                    newMatrix.values[i][j] += this.values[i][t] * other.values[t][j];
                }
            }
        }
        return newMatrix;
    }
    ;
    toVector() {
        const vector = new _Vector4d__WEBPACK_IMPORTED_MODULE_0__["Vector4d"](this.values[0][0], this.values[1][0], this.values[2][0], this.values[3][0]);
        return vector.collapse();
    }
}



/***/ }),

/***/ "./lib/math/Vector.ts":
/*!****************************!*\
  !*** ./lib/math/Vector.ts ***!
  \****************************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
/*
 * @Author: GXwar
 * @Date: 2019-02-19 14:37:03
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 14:40:25
 */
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}



/***/ }),

/***/ "./lib/math/Vector3d.ts":
/*!******************************!*\
  !*** ./lib/math/Vector3d.ts ***!
  \******************************/
/*! exports provided: Vector3d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector3d", function() { return Vector3d; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./lib/math/Vector.ts");
/* harmony import */ var _Vector4d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector4d */ "./lib/math/Vector4d.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-15 01:32:16
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 15:30:21
 */


class Vector3d extends _Vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] {
    constructor(x, y, z) {
        if (x === undefined) {
            super(0, 0);
            this.z = 0;
        }
        else {
            super(x, y);
            this.z = z;
        }
    }
    extend() {
        return new _Vector4d__WEBPACK_IMPORTED_MODULE_1__["Vector4d"](this.x, this.y, this.z, 1);
    }
    /**
     * get the absolute value of the vector
     */
    abs() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    add(other) {
        return new Vector3d(this.x + other.x, this.y + other.y, this.z + other.z);
    }
    subtract(other) {
        return new Vector3d(this.x - other.x, this.y - other.y, this.z - other.z);
    }
    scale(n) {
        return new Vector3d(this.x * n, this.y * n, this.z * n);
    }
    unit() {
        return this.scale(1 / this.abs());
    }
    crossProduct(other) {
        // return [
        //   vec1[1] * vec2[2] - vec2[1] * vec1[2],
        //   -(vec1[0] * vec2[2] - vec2[0] * vec1[2]),
        //   vec1[0] * vec2[1] - vec2[0] * vec1[1]
        // ];
        return new Vector3d(this.y * other.z - other.y * this.z, -(this.x * other.z - other.x * this.z), this.x * other.y - other.x * this.y);
    }
    dotProduct(other) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }
}



/***/ }),

/***/ "./lib/math/Vector4d.ts":
/*!******************************!*\
  !*** ./lib/math/Vector4d.ts ***!
  \******************************/
/*! exports provided: Vector4d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector4d", function() { return Vector4d; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./lib/math/Vector.ts");
/* harmony import */ var _Vector3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector3d */ "./lib/math/Vector3d.ts");
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Matrix */ "./lib/math/Matrix.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-15 01:31:53
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 14:41:30
 */



class Vector4d extends _Vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] {
    constructor(x, y, z, w) {
        super(x, y);
        this.z = z;
        this.w = w;
    }
    collapse() {
        let t = this.w;
        return new _Vector3d__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](this.x / t, this.y / t, this.z / t);
    }
    toMatrix() {
        return new _Matrix__WEBPACK_IMPORTED_MODULE_2__["Matrix"]([
            [this.x],
            [this.y],
            [this.z],
            [this.w]
        ]);
    }
}



/***/ }),

/***/ "./lib/objects/EdgeTableElement.ts":
/*!*****************************************!*\
  !*** ./lib/objects/EdgeTableElement.ts ***!
  \*****************************************/
/*! exports provided: EdgeTableElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeTableElement", function() { return EdgeTableElement; });
/*
 * @Author: GXwar
 * @Date: 2019-02-17 21:37:10
 * @Last Modified by:   GXwar
 * @Last Modified time: 2019-02-19 01:34:06
 */
class EdgeTableElement {
    constructor(yStart, yMax, xStart, delta, zUpper, zLower) {
        this.yStart = yStart;
        this.yMax = yMax;
        this.xStart = xStart;
        this.delta = delta;
        this.zUpper = zUpper;
        this.zLower = zLower;
    }
}
;



/***/ }),

/***/ "./lib/objects/Model.ts":
/*!******************************!*\
  !*** ./lib/objects/Model.ts ***!
  \******************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony import */ var _math_Vector3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vector3d */ "./lib/math/Vector3d.ts");
/* harmony import */ var _RGBA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RGBA */ "./lib/objects/RGBA.ts");
/* harmony import */ var _utils_rand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rand */ "./lib/utils/rand.ts");



class Model {
    constructor() {
        this.position = new _math_Vector3d__WEBPACK_IMPORTED_MODULE_0__["Vector3d"]();
        this.points = [];
        this.faces = [];
        this.N = new _math_Vector3d__WEBPACK_IMPORTED_MODULE_0__["Vector3d"]();
        this.U = new _math_Vector3d__WEBPACK_IMPORTED_MODULE_0__["Vector3d"]();
        this.V = new _math_Vector3d__WEBPACK_IMPORTED_MODULE_0__["Vector3d"]();
        this.facesColor = [];
        this.backFaceSet = new Set();
        this.calcPoints = [];
        this.iBuffer = [];
        this.zBuffer = [];
        this.ready = false;
    }
    setPosition(position) {
        this.position = position;
    }
    colorInit() {
        for (let i = 0; i < this.faces.length; i++) {
            this.facesColor.push(new _RGBA__WEBPACK_IMPORTED_MODULE_1__["RGBA"](Object(_utils_rand__WEBPACK_IMPORTED_MODULE_2__["random"])(), Object(_utils_rand__WEBPACK_IMPORTED_MODULE_2__["random"])(), Object(_utils_rand__WEBPACK_IMPORTED_MODULE_2__["random"])(), 255));
        }
    }
}



/***/ }),

/***/ "./lib/objects/RGBA.ts":
/*!*****************************!*\
  !*** ./lib/objects/RGBA.ts ***!
  \*****************************/
/*! exports provided: RGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBA", function() { return RGBA; });
/*
 * @Author: GXwar
 * @Date: 2019-02-19 16:37:49
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 16:45:55
 */
class RGBA {
    constructor(r = 0, g = 0, b = 0, a = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}



/***/ }),

/***/ "./lib/transform/fillPixel.ts":
/*!************************************!*\
  !*** ./lib/transform/fillPixel.ts ***!
  \************************************/
/*! exports provided: bufferInit, scanConversion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufferInit", function() { return bufferInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanConversion", function() { return scanConversion; });
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/index */ "./lib/index.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-17 14:44:32
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 17:15:37
 */
/******************** FILL PIXELS ********************/

// get a random integer in [0, 255]
const random = () => Math.floor(Math.random() * 256);
// convert 2d point to canvas point
const toPixel = (value, height, shortten = false) => Math.floor((value + 1) * height / 2) - (shortten ? 1 : 0);
const toFloatPixel = (value, height) => (value + 1) * height / 2;
const bufferInit = (height, width) => {
    const iBuffer = [];
    const zBuffer = [];
    for (let i = 0; i < height; i++) {
        iBuffer[i] = [];
        zBuffer[i] = [];
        for (let j = 0; j < width; j++) {
            iBuffer[i][j] = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["RGBA"]();
            zBuffer[i][j] = 1;
        }
    }
    return [iBuffer, zBuffer];
};
const edgeTableInit = (height) => {
    const edgeTable = [];
    for (let i = 0; i < height; i++) {
        edgeTable[i] = [];
    }
    return edgeTable;
};
/**
 * Scan Conversion
 * 1. for each scan line, determine edges of polygons that intersect
 * 2. Find the start and end of the span
 * 3. Rely on scanline and pixel coherence to linearly interpolate (between scanlines and between pixels)
 */
const addEdgeToET = (lowerPoint, upperPoint, edgeTable, height) => {
    // ignore horizontal edge and out of range point
    if (toPixel(lowerPoint.y, height) === toPixel(upperPoint.y, height)
        || lowerPoint.y > 1 || lowerPoint.y < -1)
        return;
    // swap the order of two points
    if (lowerPoint.y > upperPoint.y) {
        [lowerPoint, upperPoint] = [upperPoint, lowerPoint];
    }
    // create edge table element and add it into the edge table
    const ETElement = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["EdgeTableElement"](toPixel(lowerPoint.y, height), toPixel(upperPoint.y, height, true), toFloatPixel(lowerPoint.x, height), (lowerPoint.x - upperPoint.x) / (lowerPoint.y - upperPoint.y), upperPoint.z, lowerPoint.z);
    if (ETElement.yStart > ETElement.yMax) {
        ETElement.yMax = ETElement.yStart;
    }
    edgeTable[Math.floor(ETElement.yStart)].push(ETElement);
};
// Calculation of z
const calcZ = (edge, ys) => edge.yMax === edge.yStart ? edge.zUpper :
    edge.zUpper - (edge.zUpper - edge.zLower) * (edge.yMax - ys) / (edge.yMax - edge.yStart);
const scanConversion = (model, height, width) => {
    const [iBuffer, zBuffer] = bufferInit(height, width);
    let activeEdgeTable = [];
    // for each face
    model.faces.forEach((face, index) => {
        // don't need to consider back face
        if (model.backFaceSet.has(index))
            return;
        // build edge table
        const edgeTable = edgeTableInit(height);
        for (let i = 0; i < face.length; i++) {
            // get an edge 
            let lowerPoint = model.calcPoints[face[i]];
            let upperPoint = model.calcPoints[face[(i + 1) % face.length]];
            addEdgeToET(lowerPoint, upperPoint, edgeTable, height);
        }
        // fill pixel to pixel buffer
        let currentScanLine = 0;
        for (let i = 0; i < height; i++) {
            if (edgeTable[i].length > 0) {
                currentScanLine = i;
                break;
            }
        }
        for (let i = currentScanLine; i < height; i++) {
            // move edge from Edge Tabel to Active Edge Table
            for (let j = 0; j < edgeTable[i].length; j++) {
                activeEdgeTable.push(edgeTable[i][j]);
            }
            activeEdgeTable.sort((a, b) => {
                return a.xStart - b.xStart;
            });
            for (let j = 0; j + 1 < activeEdgeTable.length; j += 2) {
                const [left, right] = [activeEdgeTable[j], activeEdgeTable[j + 1]];
                if (left.xStart > right.xStart)
                    continue;
                const [za, zb] = [calcZ(left, i), calcZ(right, i)];
                for (let k = Math.max(0, Math.floor(left.xStart)); k < Math.floor(right.xStart) && k < width; k++) {
                    // calculate the current point's z coordinate
                    let zp = k == Math.max(0, left.xStart) ? za : zb - (zb - za) * (right.xStart - k) / (right.xStart - left.xStart);
                    if (zp > zBuffer[i][k])
                        continue;
                    zBuffer[i][k] = zp;
                    iBuffer[i][k] = model.facesColor[index];
                }
            }
            activeEdgeTable = activeEdgeTable
                .filter(edge => edge.yMax !== i) // remove edge from Active Edge Table while y = yMax
                .map(edge => {
                edge.xStart += edge.delta;
                return edge;
            });
        }
    });
    return [iBuffer, zBuffer];
};



/***/ }),

/***/ "./lib/transform/modeling.ts":
/*!***********************************!*\
  !*** ./lib/transform/modeling.ts ***!
  \***********************************/
/*! exports provided: backFaceCulling, calcModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backFaceCulling", function() { return backFaceCulling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcModel", function() { return calcModel; });
/* harmony import */ var _math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Matrix */ "./lib/math/Matrix.ts");

const world2Camera = (model, camera) => {
    const R = new _math_Matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"]([
        [model.U.x, model.U.y, model.U.z, 0],
        [model.V.x, model.V.y, model.V.z, 0],
        [model.N.x, model.N.y, model.N.z, 0],
        [0, 0, 0, 1]
    ]);
    const T = new _math_Matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"]([
        [1, 0, 0, -camera.position.x],
        [0, 1, 0, -camera.position.y],
        [0, 0, 1, -camera.position.z],
        [0, 0, 0, 1]
    ]);
    return R.multiply(T);
};
const perspectiveTransform = (h, d, f) => new _math_Matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"]([
    [d / h, 0, 0, 0],
    [0, d / h, 0, 0],
    [0, 0, f / (f - d), -d * f / (f - d)],
    [0, 0, 1, 0]
]);
/**
 * Back-face culling
 * Visible if Np dot product N > 0
 * Note: Some the polygons are denoted in anti-clockwise order
 */
const backFaceCulling = (model, camera) => {
    const backFaceSet = new Set();
    model.faces.forEach((face, index) => {
        const v1 = model.points[face[0]].subtract(model.points[face[1]]);
        const v2 = model.points[face[1]].subtract(model.points[face[2]]);
        const Np = v1.crossProduct(v2);
        const N = camera.position.subtract(model.points[face[0]]);
        if (Np.dotProduct(N) >= 0) {
            backFaceSet.add(index);
        }
    });
    return backFaceSet;
};
// Calculate model
const calcModel = (model, camera, h, d, f) => {
    const combo = perspectiveTransform(h, d, f).multiply(world2Camera(model, camera));
    return model.points.map(point => {
        return combo.multiply(point.extend().toMatrix()).toVector();
    });
};



/***/ }),

/***/ "./lib/utils/rand.ts":
/*!***************************!*\
  !*** ./lib/utils/rand.ts ***!
  \***************************/
/*! exports provided: random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/**
 * Get a random number between 0 and 255(both inclusive);
 */
const random = () => Math.floor(Math.random() * 256);


/***/ }),

/***/ "./src/configs/constants.ts":
/*!**********************************!*\
  !*** ./src/configs/constants.ts ***!
  \**********************************/
/*! exports provided: files */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "files", function() { return files; });
/*
 * @Author: GXwar
 * @Date: 2019-02-10 01:33:45
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 19:15:08
 */
// data files to be loaded
const files = [
    'atc',
    'ball',
    'cow',
    'cone',
    'knight'
];



/***/ }),

/***/ "./src/configs/parameters.ts":
/*!***********************************!*\
  !*** ./src/configs/parameters.ts ***!
  \***********************************/
/*! exports provided: parameters, models */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parameters", function() { return parameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "models", function() { return models; });
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/index */ "./lib/index.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-18 01:33:56
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 18:29:45
 */

const parameters = {
    /******************** setting ********************/
    h: 1,
    d: 1,
    f: 1000,
    height: 0,
    width: 0,
    camera: new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Camera"](new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 20, 20), new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, -1, 0))
};
const models = [];



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configs_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs/parameters */ "./src/configs/parameters.ts");
/* harmony import */ var _utils_loadFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/loadFile */ "./src/utils/loadFile.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/dom */ "./src/utils/dom.ts");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/index */ "./lib/index.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-14 15:18:52
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 18:57:06
 */




/******************** Initialize DOM ********************/
// Get canvas ready
const canvas = document.querySelector('#content');
const height = canvas.height;
const width = canvas.width;
const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, width, height);
// Load all model options to menu
const choose_model1 = document.querySelector('select.choose_model1');
const choose_model2 = document.querySelector('select.choose_model2');
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["loadMenu"])(choose_model1);
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["loadMenu"])(choose_model2);
// // Get three slides ready binding with h, d, f parameter
['h', 'd', 'f'].forEach(item => Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bindSlider"])(item));
// Button
// Bind render button with load file and render opertion
const renderBtn = document.querySelector('.render');
renderBtn.addEventListener('click', () => {
    const modelIndex1 = choose_model1.selectedIndex;
    const modelIndex2 = choose_model2.selectedIndex;
    if (modelIndex1 === 0 || modelIndex2 === 0) {
        alert('Please select a model to render');
    }
    let modelNames = [];
    modelNames.push(choose_model1.options[modelIndex1].value);
    modelNames.push(choose_model2.options[modelIndex2].value);
    modelNames = modelNames.map((name) => {
        return `./public/model/${name}.d.txt`;
    });
    Object(_utils_loadFile__WEBPACK_IMPORTED_MODULE_1__["default"])(modelNames);
    renderBtn.disabled = true;
});
// bind reset button with refresh function
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    location.reload();
});
/******************** Initialize Data ********************/
_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].width = width;
_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height = height;
// // Binding operation
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["reactToOperation"])(canvas);
draw();
function draw() {
    ctx.clearRect(0, 0, width, height);
    const imageData = ctx.createImageData(width, height);
    const data = new Uint8Array(width * height * 4);
    const iBuffer = getBuffer(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["models"], height, width);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const t = i * width + j;
            const color = iBuffer[i][j];
            data[t * 4 + 0] = color.r;
            data[t * 4 + 1] = color.g;
            data[t * 4 + 2] = color.b;
            data[t * 4 + 3] = color.a;
        }
    }
    imageData.data.set(data);
    ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(draw);
}
function getBuffer(models, height, width) {
    const [iBuffer, zBuffer] = Object(_lib_index__WEBPACK_IMPORTED_MODULE_3__["bufferInit"])(height, width);
    if (models.length == 2 && models.every(model => model.ready)) {
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                for (let k = 0; k < models.length; k++) {
                    if (models[k].zBuffer[i][j] < zBuffer[i][j]) {
                        iBuffer[i][j] = models[k].iBuffer[i][j];
                    }
                }
            }
        }
    }
    return iBuffer;
}


/***/ }),

/***/ "./src/utils/calcAll.ts":
/*!******************************!*\
  !*** ./src/utils/calcAll.ts ***!
  \******************************/
/*! exports provided: calcAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcAll", function() { return calcAll; });
/* harmony import */ var _configs_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/parameters */ "./src/configs/parameters.ts");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/index */ "./lib/index.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-19 18:25:24
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 18:30:05
 */


const calcAll = () => {
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["models"].forEach((model) => {
        [model.N, model.U, model.V] = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].camera.calcNUV(model.position);
        model.backFaceSet = Object(_lib_index__WEBPACK_IMPORTED_MODULE_1__["backFaceCulling"])(model, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].camera);
        model.calcPoints = Object(_lib_index__WEBPACK_IMPORTED_MODULE_1__["calcModel"])(model, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].camera, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].h, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].d, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].f);
        [model.iBuffer, model.zBuffer] = Object(_lib_index__WEBPACK_IMPORTED_MODULE_1__["scanConversion"])(model, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].width);
        model.ready = true;
    });
};



/***/ }),

/***/ "./src/utils/dom.ts":
/*!**************************!*\
  !*** ./src/utils/dom.ts ***!
  \**************************/
/*! exports provided: loadMenu, bindSlider, reactToOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMenu", function() { return loadMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindSlider", function() { return bindSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactToOperation", function() { return reactToOperation; });
/* harmony import */ var _configs_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/parameters */ "./src/configs/parameters.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/constants */ "./src/configs/constants.ts");
/* harmony import */ var _utils_calcAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/calcAll */ "./src/utils/calcAll.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-14 18:55:51
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 19:01:16
 */
/******************** DOM OPERATION ********************/



/**
 * Load menu
 * @param selectDOM
 */
const loadMenu = (selectDOM) => {
    _configs_constants__WEBPACK_IMPORTED_MODULE_1__["files"].forEach(file => {
        const option = document.createElement('option');
        option.setAttribute("value", file);
        option.appendChild(document.createTextNode(file));
        selectDOM.appendChild(option);
    });
};
/**
 * Bind the value of slider with camera setting
 * @param name
 */
const bindSlider = (name) => {
    const slider = document.querySelector(`#${name}`);
    const sliderText = document.querySelector(`#${name}_V`);
    slider.value = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"][name];
    sliderText.innerHTML = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"][name];
    slider.addEventListener('change', function () {
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"][name] = this.value;
        sliderText.innerHTML = this.value;
        Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
    });
};
/**
 * Bind operation to control the final effect
 */
const objectLen = 1;
const cameraLen = 2;
const reactToOperation = (canvas) => {
    // zooming the model
    const camera = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].camera;
    canvas.addEventListener('mousewheel', function (event) {
        if (event.wheelDelta > 0) {
            camera.position = camera.position.scale(6 / 5);
        }
        else {
            camera.position = camera.position.scale(5 / 6);
        }
        Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
    });
    document.addEventListener('keypress', function (e) {
        switch (e.key) {
            // case 'w': 
            //   camera.position = camera.position.add(camera.V.scale(-objectLen));
            //   draw();
            //   break;
            // case 's':
            //   camera.position = camera.position.add(camera.V.scale(objectLen));
            //   draw();
            //   break;
            // case 'a':
            //   camera.position = camera.position.add(camera.U.scale(objectLen));
            //   draw();
            //   break;
            // case 'd':
            //   camera.position = camera.position.add(camera.U.scale(-objectLen));
            //   draw();
            //   break;
            case 'i':
                camera.position.y += cameraLen;
                Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
                break;
            case 'k':
                camera.position.y -= cameraLen;
                Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
                break;
            case 'j':
                camera.position.x -= cameraLen;
                Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
                break;
            case 'l':
                camera.position.x += cameraLen;
                Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
                break;
            default:
                break;
        }
    });
};


/***/ }),

/***/ "./src/utils/loadFile.ts":
/*!*******************************!*\
  !*** ./src/utils/loadFile.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configs_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/parameters */ "./src/configs/parameters.ts");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/index */ "./lib/index.ts");
/* harmony import */ var _calcAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calcAll */ "./src/utils/calcAll.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-12 15:08:51
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 19:18:33
 */



/**
 * Parse the data from the .d file, return a Model
 * @param {*} data
 */
let yValue = 0;
const parseFile = (data) => {
    let lines = data.match(/[^\r\n]+/g);
    let [num, pointsNum, facesNum] = lines[0].trim().split(/\s+/);
    // Cause in some file, there are just two number in first line
    if (facesNum == undefined) {
        facesNum = pointsNum;
        pointsNum = num;
    }
    const [pNum, fNum] = [parseInt(pointsNum, 10), parseInt(facesNum)];
    // load data to model
    const model = new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Model"]();
    for (let i = 1; i <= pNum; i++) {
        let [x, y, z] = lines[i].trim().split(/\s+/);
        model.points.push(new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](parseFloat(x), parseFloat(y), parseFloat(z)));
    }
    for (let i = pNum + 1; i <= pNum + fNum; i++) {
        let [num, ...res] = lines[i].trim().split(/\s+/);
        if (res.length > 2) {
            model.faces.push(res.map((x) => parseInt(x) - 1));
        }
    }
    model.setPosition(new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](0, yValue, 0));
    model.colorInit();
    yValue += 2;
    return model;
};
/**
 * Read the content of a file
 * @param filePath
 */
const readFile = (filePath) => {
    return new Promise((res, rej) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', filePath, true);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    res(this.responseText);
                }
                else {
                    rej();
                }
            }
        };
        xhr.send();
    });
};
/**
 * Load and render selected model
 * @param {String} filePath
 */
const loadFile = (filePaths) => {
    if (filePaths.length == 0) {
        Object(_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
    }
    else {
        const file = filePaths.pop();
        readFile(file)
            .then((data) => {
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["models"].push(parseFile(data));
            loadFile(filePaths);
        })
            .catch(() => {
            console.log(`Load or parse file${file} error`);
        });
    }
};
/* harmony default export */ __webpack_exports__["default"] = (loadFile);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NhbWVyYXMvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvbWF0aC9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL21hdGgvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXRoL1ZlY3RvcjNkLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXRoL1ZlY3RvcjRkLnRzIiwid2VicGFjazovLy8uL2xpYi9vYmplY3RzL0VkZ2VUYWJsZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvUkdCQS50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL2ZpbGxQaXhlbC50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL21vZGVsaW5nLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlscy9yYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy9wYXJhbWV0ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2FsY0FsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9sb2FkRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdD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SztBQUMzQixtQkFBbUIsV0FBVztBQUM5QjtBQUNBLDhCQUE4QixtREFBUTtBQUN0QztBQUNBLDBCQUEwQixrQkFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtREFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQU07QUFDbEI7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw2Q0FBNkMsS0FBSztBQUNsRCxTQUFTO0FBQ1Q7QUFDQTtBQUNlLHVFQUFRLEVBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiY2xhc3MgQ2FtZXJhIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgVVApIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLlVQID0gVVA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGNhbGN1bGF0ZSB0aGUgTiwgVSwgViB2ZWN0b3Igb2YgdGhlIGNhbWVyYVxuICAgICAqIEBwYXJhbSBvYmplY3RQb3NpdGlvblxuICAgICAqL1xuICAgIGNhbGNOVVYob2JqZWN0UG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgTiA9IG9iamVjdFBvc2l0aW9uLnN1YnRyYWN0KHRoaXMucG9zaXRpb24pLnVuaXQoKTtcbiAgICAgICAgY29uc3QgVSA9IE4uY3Jvc3NQcm9kdWN0KHRoaXMuVVApLnVuaXQoKTtcbiAgICAgICAgY29uc3QgViA9IFUuY3Jvc3NQcm9kdWN0KE4pO1xuICAgICAgICByZXR1cm4gW04sIFUsIFZdO1xuICAgIH1cbn1cbmV4cG9ydCB7IENhbWVyYSB9O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqIC4vY2FtZXJhcyAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IENhbWVyYSB9IGZyb20gJy4vY2FtZXJhcy9DYW1lcmEnO1xuLyoqKioqKioqKioqKioqKioqKioqIC4vbWF0aCAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IE1hdHJpeCB9IGZyb20gJy4vbWF0aC9NYXRyaXgnO1xuZXhwb3J0IHsgVmVjdG9yM2QgfSBmcm9tICcuL21hdGgvVmVjdG9yM2QnO1xuZXhwb3J0IHsgVmVjdG9yNGQgfSBmcm9tICcuL21hdGgvVmVjdG9yNGQnO1xuLyoqKioqKioqKioqKioqKioqKioqIC4vb2JqZWN0cyAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IEVkZ2VUYWJsZUVsZW1lbnQgfSBmcm9tICcuL29iamVjdHMvRWRnZVRhYmxlRWxlbWVudCc7XG5leHBvcnQgeyBNb2RlbCB9IGZyb20gJy4vb2JqZWN0cy9Nb2RlbCc7XG5leHBvcnQgeyBSR0JBIH0gZnJvbSAnLi9vYmplY3RzL1JHQkEnO1xuLyoqKioqKioqKioqKioqKioqKioqIC4vdHJhbnNmb3JtICoqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IHsgYmFja0ZhY2VDdWxsaW5nLCBjYWxjTW9kZWwgfSBmcm9tICcuL3RyYW5zZm9ybS9tb2RlbGluZyc7XG5leHBvcnQgeyBidWZmZXJJbml0LCBzY2FuQ29udmVyc2lvbiB9IGZyb20gJy4vdHJhbnNmb3JtL2ZpbGxQaXhlbCc7XG4iLCJpbXBvcnQgeyBWZWN0b3I0ZCB9IGZyb20gJy4vVmVjdG9yNGQnO1xuY2xhc3MgTWF0cml4IHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXNPck0sIG4pIHtcbiAgICAgICAgaWYgKHZhbHVlc09yTSAhPT0gdW5kZWZpbmVkICYmIG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzT3JNOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKEFycmF5LmZyb20oeyBsZW5ndGg6IG4gfSwgXyA9PiAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWVzT3JNICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzT3JNO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBtdWx0aXBseSB3aXRoIG90aGVyIG1hdHJpeCwgcmV0dXJuIGEgbmV3IG1hdHJpeFxuICAgICAqIEBwYXJhbSBvdGhlclxuICAgICAqL1xuICAgIG11bHRpcGx5KG90aGVyKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlc1swXS5sZW5ndGggIT09IG90aGVyLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IG11bHRpcGx5IHRoZXNlIHR3byBtYXRyaWNlcyEnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtID0gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBuID0gb3RoZXIudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgayA9IG90aGVyLnZhbHVlc1swXS5sZW5ndGg7XG4gICAgICAgIC8vIG11bHRpcGx5XG4gICAgICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobSwgayk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGs7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgbjsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeC52YWx1ZXNbaV1bal0gKz0gdGhpcy52YWx1ZXNbaV1bdF0gKiBvdGhlci52YWx1ZXNbdF1bal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgfVxuICAgIDtcbiAgICB0b1ZlY3RvcigpIHtcbiAgICAgICAgY29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcjRkKHRoaXMudmFsdWVzWzBdWzBdLCB0aGlzLnZhbHVlc1sxXVswXSwgdGhpcy52YWx1ZXNbMl1bMF0sIHRoaXMudmFsdWVzWzNdWzBdKTtcbiAgICAgICAgcmV0dXJuIHZlY3Rvci5jb2xsYXBzZSgpO1xuICAgIH1cbn1cbmV4cG9ydCB7IE1hdHJpeCB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xOSAxNDozNzowM1xuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE0OjQwOjI1XG4gKi9cbmNsYXNzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cbmV4cG9ydCB7IFZlY3RvciB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xNSAwMTozMjoxNlxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE1OjMwOjIxXG4gKi9cbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJztcbmltcG9ydCB7IFZlY3RvcjRkIH0gZnJvbSBcIi4vVmVjdG9yNGRcIjtcbmNsYXNzIFZlY3RvcjNkIGV4dGVuZHMgVmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XG4gICAgICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN1cGVyKDAsIDApO1xuICAgICAgICAgICAgdGhpcy56ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyKHgsIHkpO1xuICAgICAgICAgICAgdGhpcy56ID0gejtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHRlbmQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNGQodGhpcy54LCB0aGlzLnksIHRoaXMueiwgMSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCB0aGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhlIHZlY3RvclxuICAgICAqL1xuICAgIGFicygpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnopO1xuICAgIH1cbiAgICBhZGQob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnggKyBvdGhlci54LCB0aGlzLnkgKyBvdGhlci55LCB0aGlzLnogKyBvdGhlci56KTtcbiAgICB9XG4gICAgc3VidHJhY3Qob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnggLSBvdGhlci54LCB0aGlzLnkgLSBvdGhlci55LCB0aGlzLnogLSBvdGhlci56KTtcbiAgICB9XG4gICAgc2NhbGUobikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCAqIG4sIHRoaXMueSAqIG4sIHRoaXMueiAqIG4pO1xuICAgIH1cbiAgICB1bml0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZSgxIC8gdGhpcy5hYnMoKSk7XG4gICAgfVxuICAgIGNyb3NzUHJvZHVjdChvdGhlcikge1xuICAgICAgICAvLyByZXR1cm4gW1xuICAgICAgICAvLyAgIHZlYzFbMV0gKiB2ZWMyWzJdIC0gdmVjMlsxXSAqIHZlYzFbMl0sXG4gICAgICAgIC8vICAgLSh2ZWMxWzBdICogdmVjMlsyXSAtIHZlYzJbMF0gKiB2ZWMxWzJdKSxcbiAgICAgICAgLy8gICB2ZWMxWzBdICogdmVjMlsxXSAtIHZlYzJbMF0gKiB2ZWMxWzFdXG4gICAgICAgIC8vIF07XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM2QodGhpcy55ICogb3RoZXIueiAtIG90aGVyLnkgKiB0aGlzLnosIC0odGhpcy54ICogb3RoZXIueiAtIG90aGVyLnggKiB0aGlzLnopLCB0aGlzLnggKiBvdGhlci55IC0gb3RoZXIueCAqIHRoaXMueSk7XG4gICAgfVxuICAgIGRvdFByb2R1Y3Qob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIG90aGVyLnggKyB0aGlzLnkgKiBvdGhlci55ICsgdGhpcy56ICogb3RoZXIuejtcbiAgICB9XG59XG5leHBvcnQgeyBWZWN0b3IzZCB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xNSAwMTozMTo1M1xuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE0OjQxOjMwXG4gKi9cbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJztcbmltcG9ydCB7IFZlY3RvcjNkIH0gZnJvbSAnLi9WZWN0b3IzZCc7XG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tICcuL01hdHJpeCc7XG5jbGFzcyBWZWN0b3I0ZCBleHRlbmRzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgeiwgdykge1xuICAgICAgICBzdXBlcih4LCB5KTtcbiAgICAgICAgdGhpcy56ID0gejtcbiAgICAgICAgdGhpcy53ID0gdztcbiAgICB9XG4gICAgY29sbGFwc2UoKSB7XG4gICAgICAgIGxldCB0ID0gdGhpcy53O1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCAvIHQsIHRoaXMueSAvIHQsIHRoaXMueiAvIHQpO1xuICAgIH1cbiAgICB0b01hdHJpeCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoW1xuICAgICAgICAgICAgW3RoaXMueF0sXG4gICAgICAgICAgICBbdGhpcy55XSxcbiAgICAgICAgICAgIFt0aGlzLnpdLFxuICAgICAgICAgICAgW3RoaXMud11cbiAgICAgICAgXSk7XG4gICAgfVxufVxuZXhwb3J0IHsgVmVjdG9yNGQgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTcgMjE6Mzc6MTBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDAxOjM0OjA2XG4gKi9cbmNsYXNzIEVkZ2VUYWJsZUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHlTdGFydCwgeU1heCwgeFN0YXJ0LCBkZWx0YSwgelVwcGVyLCB6TG93ZXIpIHtcbiAgICAgICAgdGhpcy55U3RhcnQgPSB5U3RhcnQ7XG4gICAgICAgIHRoaXMueU1heCA9IHlNYXg7XG4gICAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgICB0aGlzLmRlbHRhID0gZGVsdGE7XG4gICAgICAgIHRoaXMuelVwcGVyID0gelVwcGVyO1xuICAgICAgICB0aGlzLnpMb3dlciA9IHpMb3dlcjtcbiAgICB9XG59XG47XG5leHBvcnQgeyBFZGdlVGFibGVFbGVtZW50IH07XG4iLCJpbXBvcnQgeyBWZWN0b3IzZCB9IGZyb20gXCIuLi9tYXRoL1ZlY3RvcjNkXCI7XG5pbXBvcnQgeyBSR0JBIH0gZnJvbSBcIi4vUkdCQVwiO1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vdXRpbHMvcmFuZCc7XG5jbGFzcyBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yM2QoKTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgdGhpcy5mYWNlcyA9IFtdO1xuICAgICAgICB0aGlzLk4gPSBuZXcgVmVjdG9yM2QoKTtcbiAgICAgICAgdGhpcy5VID0gbmV3IFZlY3RvcjNkKCk7XG4gICAgICAgIHRoaXMuViA9IG5ldyBWZWN0b3IzZCgpO1xuICAgICAgICB0aGlzLmZhY2VzQ29sb3IgPSBbXTtcbiAgICAgICAgdGhpcy5iYWNrRmFjZVNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5jYWxjUG9pbnRzID0gW107XG4gICAgICAgIHRoaXMuaUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnpCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgIH1cbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICAgIGNvbG9ySW5pdCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZhY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzQ29sb3IucHVzaChuZXcgUkdCQShyYW5kb20oKSwgcmFuZG9tKCksIHJhbmRvbSgpLCAyNTUpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCB7IE1vZGVsIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE5IDE2OjM3OjQ5XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMTY6NDU6NTVcbiAqL1xuY2xhc3MgUkdCQSB7XG4gICAgY29uc3RydWN0b3IociA9IDAsIGcgPSAwLCBiID0gMCwgYSA9IDI1NSkge1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmcgPSBnO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgIH1cbn1cbmV4cG9ydCB7IFJHQkEgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTcgMTQ6NDQ6MzJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAxNzoxNTozN1xuICovXG4vKioqKioqKioqKioqKioqKioqKiogRklMTCBQSVhFTFMgKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgeyBFZGdlVGFibGVFbGVtZW50LCBSR0JBIH0gZnJvbSAnLi4vLi4vbGliL2luZGV4Jztcbi8vIGdldCBhIHJhbmRvbSBpbnRlZ2VyIGluIFswLCAyNTVdXG5jb25zdCByYW5kb20gPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpO1xuLy8gY29udmVydCAyZCBwb2ludCB0byBjYW52YXMgcG9pbnRcbmNvbnN0IHRvUGl4ZWwgPSAodmFsdWUsIGhlaWdodCwgc2hvcnR0ZW4gPSBmYWxzZSkgPT4gTWF0aC5mbG9vcigodmFsdWUgKyAxKSAqIGhlaWdodCAvIDIpIC0gKHNob3J0dGVuID8gMSA6IDApO1xuY29uc3QgdG9GbG9hdFBpeGVsID0gKHZhbHVlLCBoZWlnaHQpID0+ICh2YWx1ZSArIDEpICogaGVpZ2h0IC8gMjtcbmNvbnN0IGJ1ZmZlckluaXQgPSAoaGVpZ2h0LCB3aWR0aCkgPT4ge1xuICAgIGNvbnN0IGlCdWZmZXIgPSBbXTtcbiAgICBjb25zdCB6QnVmZmVyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICBpQnVmZmVyW2ldID0gW107XG4gICAgICAgIHpCdWZmZXJbaV0gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICBpQnVmZmVyW2ldW2pdID0gbmV3IFJHQkEoKTtcbiAgICAgICAgICAgIHpCdWZmZXJbaV1bal0gPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbaUJ1ZmZlciwgekJ1ZmZlcl07XG59O1xuY29uc3QgZWRnZVRhYmxlSW5pdCA9IChoZWlnaHQpID0+IHtcbiAgICBjb25zdCBlZGdlVGFibGUgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGVkZ2VUYWJsZVtpXSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gZWRnZVRhYmxlO1xufTtcbi8qKlxuICogU2NhbiBDb252ZXJzaW9uXG4gKiAxLiBmb3IgZWFjaCBzY2FuIGxpbmUsIGRldGVybWluZSBlZGdlcyBvZiBwb2x5Z29ucyB0aGF0IGludGVyc2VjdFxuICogMi4gRmluZCB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgc3BhblxuICogMy4gUmVseSBvbiBzY2FubGluZSBhbmQgcGl4ZWwgY29oZXJlbmNlIHRvIGxpbmVhcmx5IGludGVycG9sYXRlIChiZXR3ZWVuIHNjYW5saW5lcyBhbmQgYmV0d2VlbiBwaXhlbHMpXG4gKi9cbmNvbnN0IGFkZEVkZ2VUb0VUID0gKGxvd2VyUG9pbnQsIHVwcGVyUG9pbnQsIGVkZ2VUYWJsZSwgaGVpZ2h0KSA9PiB7XG4gICAgLy8gaWdub3JlIGhvcml6b250YWwgZWRnZSBhbmQgb3V0IG9mIHJhbmdlIHBvaW50XG4gICAgaWYgKHRvUGl4ZWwobG93ZXJQb2ludC55LCBoZWlnaHQpID09PSB0b1BpeGVsKHVwcGVyUG9pbnQueSwgaGVpZ2h0KVxuICAgICAgICB8fCBsb3dlclBvaW50LnkgPiAxIHx8IGxvd2VyUG9pbnQueSA8IC0xKVxuICAgICAgICByZXR1cm47XG4gICAgLy8gc3dhcCB0aGUgb3JkZXIgb2YgdHdvIHBvaW50c1xuICAgIGlmIChsb3dlclBvaW50LnkgPiB1cHBlclBvaW50LnkpIHtcbiAgICAgICAgW2xvd2VyUG9pbnQsIHVwcGVyUG9pbnRdID0gW3VwcGVyUG9pbnQsIGxvd2VyUG9pbnRdO1xuICAgIH1cbiAgICAvLyBjcmVhdGUgZWRnZSB0YWJsZSBlbGVtZW50IGFuZCBhZGQgaXQgaW50byB0aGUgZWRnZSB0YWJsZVxuICAgIGNvbnN0IEVURWxlbWVudCA9IG5ldyBFZGdlVGFibGVFbGVtZW50KHRvUGl4ZWwobG93ZXJQb2ludC55LCBoZWlnaHQpLCB0b1BpeGVsKHVwcGVyUG9pbnQueSwgaGVpZ2h0LCB0cnVlKSwgdG9GbG9hdFBpeGVsKGxvd2VyUG9pbnQueCwgaGVpZ2h0KSwgKGxvd2VyUG9pbnQueCAtIHVwcGVyUG9pbnQueCkgLyAobG93ZXJQb2ludC55IC0gdXBwZXJQb2ludC55KSwgdXBwZXJQb2ludC56LCBsb3dlclBvaW50LnopO1xuICAgIGlmIChFVEVsZW1lbnQueVN0YXJ0ID4gRVRFbGVtZW50LnlNYXgpIHtcbiAgICAgICAgRVRFbGVtZW50LnlNYXggPSBFVEVsZW1lbnQueVN0YXJ0O1xuICAgIH1cbiAgICBlZGdlVGFibGVbTWF0aC5mbG9vcihFVEVsZW1lbnQueVN0YXJ0KV0ucHVzaChFVEVsZW1lbnQpO1xufTtcbi8vIENhbGN1bGF0aW9uIG9mIHpcbmNvbnN0IGNhbGNaID0gKGVkZ2UsIHlzKSA9PiBlZGdlLnlNYXggPT09IGVkZ2UueVN0YXJ0ID8gZWRnZS56VXBwZXIgOlxuICAgIGVkZ2UuelVwcGVyIC0gKGVkZ2UuelVwcGVyIC0gZWRnZS56TG93ZXIpICogKGVkZ2UueU1heCAtIHlzKSAvIChlZGdlLnlNYXggLSBlZGdlLnlTdGFydCk7XG5jb25zdCBzY2FuQ29udmVyc2lvbiA9IChtb2RlbCwgaGVpZ2h0LCB3aWR0aCkgPT4ge1xuICAgIGNvbnN0IFtpQnVmZmVyLCB6QnVmZmVyXSA9IGJ1ZmZlckluaXQoaGVpZ2h0LCB3aWR0aCk7XG4gICAgbGV0IGFjdGl2ZUVkZ2VUYWJsZSA9IFtdO1xuICAgIC8vIGZvciBlYWNoIGZhY2VcbiAgICBtb2RlbC5mYWNlcy5mb3JFYWNoKChmYWNlLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBkb24ndCBuZWVkIHRvIGNvbnNpZGVyIGJhY2sgZmFjZVxuICAgICAgICBpZiAobW9kZWwuYmFja0ZhY2VTZXQuaGFzKGluZGV4KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gYnVpbGQgZWRnZSB0YWJsZVxuICAgICAgICBjb25zdCBlZGdlVGFibGUgPSBlZGdlVGFibGVJbml0KGhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IGFuIGVkZ2UgXG4gICAgICAgICAgICBsZXQgbG93ZXJQb2ludCA9IG1vZGVsLmNhbGNQb2ludHNbZmFjZVtpXV07XG4gICAgICAgICAgICBsZXQgdXBwZXJQb2ludCA9IG1vZGVsLmNhbGNQb2ludHNbZmFjZVsoaSArIDEpICUgZmFjZS5sZW5ndGhdXTtcbiAgICAgICAgICAgIGFkZEVkZ2VUb0VUKGxvd2VyUG9pbnQsIHVwcGVyUG9pbnQsIGVkZ2VUYWJsZSwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWxsIHBpeGVsIHRvIHBpeGVsIGJ1ZmZlclxuICAgICAgICBsZXQgY3VycmVudFNjYW5MaW5lID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVkZ2VUYWJsZVtpXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNjYW5MaW5lID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudFNjYW5MaW5lOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1vdmUgZWRnZSBmcm9tIEVkZ2UgVGFiZWwgdG8gQWN0aXZlIEVkZ2UgVGFibGVcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWRnZVRhYmxlW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlRWRnZVRhYmxlLnB1c2goZWRnZVRhYmxlW2ldW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEueFN0YXJ0IC0gYi54U3RhcnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqICsgMSA8IGFjdGl2ZUVkZ2VUYWJsZS5sZW5ndGg7IGogKz0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSBbYWN0aXZlRWRnZVRhYmxlW2pdLCBhY3RpdmVFZGdlVGFibGVbaiArIDFdXTtcbiAgICAgICAgICAgICAgICBpZiAobGVmdC54U3RhcnQgPiByaWdodC54U3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IFt6YSwgemJdID0gW2NhbGNaKGxlZnQsIGkpLCBjYWxjWihyaWdodCwgaSldO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKGxlZnQueFN0YXJ0KSk7IGsgPCBNYXRoLmZsb29yKHJpZ2h0LnhTdGFydCkgJiYgayA8IHdpZHRoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBjdXJyZW50IHBvaW50J3MgeiBjb29yZGluYXRlXG4gICAgICAgICAgICAgICAgICAgIGxldCB6cCA9IGsgPT0gTWF0aC5tYXgoMCwgbGVmdC54U3RhcnQpID8gemEgOiB6YiAtICh6YiAtIHphKSAqIChyaWdodC54U3RhcnQgLSBrKSAvIChyaWdodC54U3RhcnQgLSBsZWZ0LnhTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh6cCA+IHpCdWZmZXJbaV1ba10pXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgekJ1ZmZlcltpXVtrXSA9IHpwO1xuICAgICAgICAgICAgICAgICAgICBpQnVmZmVyW2ldW2tdID0gbW9kZWwuZmFjZXNDb2xvcltpbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aXZlRWRnZVRhYmxlID0gYWN0aXZlRWRnZVRhYmxlXG4gICAgICAgICAgICAgICAgLmZpbHRlcihlZGdlID0+IGVkZ2UueU1heCAhPT0gaSkgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBBY3RpdmUgRWRnZSBUYWJsZSB3aGlsZSB5ID0geU1heFxuICAgICAgICAgICAgICAgIC5tYXAoZWRnZSA9PiB7XG4gICAgICAgICAgICAgICAgZWRnZS54U3RhcnQgKz0gZWRnZS5kZWx0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWRnZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFtpQnVmZmVyLCB6QnVmZmVyXTtcbn07XG5leHBvcnQgeyBidWZmZXJJbml0LCBzY2FuQ29udmVyc2lvbiB9O1xuIiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnLi4vbWF0aC9NYXRyaXgnO1xuY29uc3Qgd29ybGQyQ2FtZXJhID0gKG1vZGVsLCBjYW1lcmEpID0+IHtcbiAgICBjb25zdCBSID0gbmV3IE1hdHJpeChbXG4gICAgICAgIFttb2RlbC5VLngsIG1vZGVsLlUueSwgbW9kZWwuVS56LCAwXSxcbiAgICAgICAgW21vZGVsLlYueCwgbW9kZWwuVi55LCBtb2RlbC5WLnosIDBdLFxuICAgICAgICBbbW9kZWwuTi54LCBtb2RlbC5OLnksIG1vZGVsLk4ueiwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAxXVxuICAgIF0pO1xuICAgIGNvbnN0IFQgPSBuZXcgTWF0cml4KFtcbiAgICAgICAgWzEsIDAsIDAsIC1jYW1lcmEucG9zaXRpb24ueF0sXG4gICAgICAgIFswLCAxLCAwLCAtY2FtZXJhLnBvc2l0aW9uLnldLFxuICAgICAgICBbMCwgMCwgMSwgLWNhbWVyYS5wb3NpdGlvbi56XSxcbiAgICAgICAgWzAsIDAsIDAsIDFdXG4gICAgXSk7XG4gICAgcmV0dXJuIFIubXVsdGlwbHkoVCk7XG59O1xuY29uc3QgcGVyc3BlY3RpdmVUcmFuc2Zvcm0gPSAoaCwgZCwgZikgPT4gbmV3IE1hdHJpeChbXG4gICAgW2QgLyBoLCAwLCAwLCAwXSxcbiAgICBbMCwgZCAvIGgsIDAsIDBdLFxuICAgIFswLCAwLCBmIC8gKGYgLSBkKSwgLWQgKiBmIC8gKGYgLSBkKV0sXG4gICAgWzAsIDAsIDEsIDBdXG5dKTtcbi8qKlxuICogQmFjay1mYWNlIGN1bGxpbmdcbiAqIFZpc2libGUgaWYgTnAgZG90IHByb2R1Y3QgTiA+IDBcbiAqIE5vdGU6IFNvbWUgdGhlIHBvbHlnb25zIGFyZSBkZW5vdGVkIGluIGFudGktY2xvY2t3aXNlIG9yZGVyXG4gKi9cbmNvbnN0IGJhY2tGYWNlQ3VsbGluZyA9IChtb2RlbCwgY2FtZXJhKSA9PiB7XG4gICAgY29uc3QgYmFja0ZhY2VTZXQgPSBuZXcgU2V0KCk7XG4gICAgbW9kZWwuZmFjZXMuZm9yRWFjaCgoZmFjZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdjEgPSBtb2RlbC5wb2ludHNbZmFjZVswXV0uc3VidHJhY3QobW9kZWwucG9pbnRzW2ZhY2VbMV1dKTtcbiAgICAgICAgY29uc3QgdjIgPSBtb2RlbC5wb2ludHNbZmFjZVsxXV0uc3VidHJhY3QobW9kZWwucG9pbnRzW2ZhY2VbMl1dKTtcbiAgICAgICAgY29uc3QgTnAgPSB2MS5jcm9zc1Byb2R1Y3QodjIpO1xuICAgICAgICBjb25zdCBOID0gY2FtZXJhLnBvc2l0aW9uLnN1YnRyYWN0KG1vZGVsLnBvaW50c1tmYWNlWzBdXSk7XG4gICAgICAgIGlmIChOcC5kb3RQcm9kdWN0KE4pID49IDApIHtcbiAgICAgICAgICAgIGJhY2tGYWNlU2V0LmFkZChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYmFja0ZhY2VTZXQ7XG59O1xuLy8gQ2FsY3VsYXRlIG1vZGVsXG5jb25zdCBjYWxjTW9kZWwgPSAobW9kZWwsIGNhbWVyYSwgaCwgZCwgZikgPT4ge1xuICAgIGNvbnN0IGNvbWJvID0gcGVyc3BlY3RpdmVUcmFuc2Zvcm0oaCwgZCwgZikubXVsdGlwbHkod29ybGQyQ2FtZXJhKG1vZGVsLCBjYW1lcmEpKTtcbiAgICByZXR1cm4gbW9kZWwucG9pbnRzLm1hcChwb2ludCA9PiB7XG4gICAgICAgIHJldHVybiBjb21iby5tdWx0aXBseShwb2ludC5leHRlbmQoKS50b01hdHJpeCgpKS50b1ZlY3RvcigpO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IGJhY2tGYWNlQ3VsbGluZywgY2FsY01vZGVsIH07XG4iLCIvKipcbiAqIEdldCBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAwIGFuZCAyNTUoYm90aCBpbmNsdXNpdmUpO1xuICovXG5leHBvcnQgY29uc3QgcmFuZG9tID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTAgMDE6MzM6NDVcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAxOToxNTowOFxuICovXG4vLyBkYXRhIGZpbGVzIHRvIGJlIGxvYWRlZFxuY29uc3QgZmlsZXMgPSBbXG4gICAgJ2F0YycsXG4gICAgJ2JhbGwnLFxuICAgICdjb3cnLFxuICAgICdjb25lJyxcbiAgICAna25pZ2h0J1xuXTtcbmV4cG9ydCB7IGZpbGVzIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE4IDAxOjMzOjU2XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMTg6Mjk6NDVcbiAqL1xuaW1wb3J0IHsgQ2FtZXJhLCBWZWN0b3IzZCB9IGZyb20gJy4uLy4uL2xpYi9pbmRleCc7XG5jb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgIC8qKioqKioqKioqKioqKioqKioqKiBzZXR0aW5nICoqKioqKioqKioqKioqKioqKioqL1xuICAgIGg6IDEsXG4gICAgZDogMSxcbiAgICBmOiAxMDAwLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBjYW1lcmE6IG5ldyBDYW1lcmEobmV3IFZlY3RvcjNkKDAsIDIwLCAyMCksIG5ldyBWZWN0b3IzZCgwLCAtMSwgMCkpXG59O1xuY29uc3QgbW9kZWxzID0gW107XG5leHBvcnQgeyBwYXJhbWV0ZXJzLCBtb2RlbHMgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTQgMTU6MTg6NTJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAxODo1NzowNlxuICovXG5pbXBvcnQgeyBtb2RlbHMsIHBhcmFtZXRlcnMgfSBmcm9tICcuL2NvbmZpZ3MvcGFyYW1ldGVycyc7XG5pbXBvcnQgbG9hZEZpbGUgZnJvbSAnLi91dGlscy9sb2FkRmlsZSc7XG5pbXBvcnQgeyBsb2FkTWVudSwgYmluZFNsaWRlciwgcmVhY3RUb09wZXJhdGlvbiB9IGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCB7IGJ1ZmZlckluaXQgfSBmcm9tICcuLi9saWIvaW5kZXgnO1xuLyoqKioqKioqKioqKioqKioqKioqIEluaXRpYWxpemUgRE9NICoqKioqKioqKioqKioqKioqKioqL1xuLy8gR2V0IGNhbnZhcyByZWFkeVxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IGhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5jb25zdCB3aWR0aCA9IGNhbnZhcy53aWR0aDtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuLy8gTG9hZCBhbGwgbW9kZWwgb3B0aW9ucyB0byBtZW51XG5jb25zdCBjaG9vc2VfbW9kZWwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0LmNob29zZV9tb2RlbDEnKTtcbmNvbnN0IGNob29zZV9tb2RlbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QuY2hvb3NlX21vZGVsMicpO1xubG9hZE1lbnUoY2hvb3NlX21vZGVsMSk7XG5sb2FkTWVudShjaG9vc2VfbW9kZWwyKTtcbi8vIC8vIEdldCB0aHJlZSBzbGlkZXMgcmVhZHkgYmluZGluZyB3aXRoIGgsIGQsIGYgcGFyYW1ldGVyXG5bJ2gnLCAnZCcsICdmJ10uZm9yRWFjaChpdGVtID0+IGJpbmRTbGlkZXIoaXRlbSkpO1xuLy8gQnV0dG9uXG4vLyBCaW5kIHJlbmRlciBidXR0b24gd2l0aCBsb2FkIGZpbGUgYW5kIHJlbmRlciBvcGVydGlvblxuY29uc3QgcmVuZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbmRlcicpO1xucmVuZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG1vZGVsSW5kZXgxID0gY2hvb3NlX21vZGVsMS5zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IG1vZGVsSW5kZXgyID0gY2hvb3NlX21vZGVsMi5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChtb2RlbEluZGV4MSA9PT0gMCB8fCBtb2RlbEluZGV4MiA9PT0gMCkge1xuICAgICAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIG1vZGVsIHRvIHJlbmRlcicpO1xuICAgIH1cbiAgICBsZXQgbW9kZWxOYW1lcyA9IFtdO1xuICAgIG1vZGVsTmFtZXMucHVzaChjaG9vc2VfbW9kZWwxLm9wdGlvbnNbbW9kZWxJbmRleDFdLnZhbHVlKTtcbiAgICBtb2RlbE5hbWVzLnB1c2goY2hvb3NlX21vZGVsMi5vcHRpb25zW21vZGVsSW5kZXgyXS52YWx1ZSk7XG4gICAgbW9kZWxOYW1lcyA9IG1vZGVsTmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBgLi9wdWJsaWMvbW9kZWwvJHtuYW1lfS5kLnR4dGA7XG4gICAgfSk7XG4gICAgbG9hZEZpbGUobW9kZWxOYW1lcyk7XG4gICAgcmVuZGVyQnRuLmRpc2FibGVkID0gdHJ1ZTtcbn0pO1xuLy8gYmluZCByZXNldCBidXR0b24gd2l0aCByZWZyZXNoIGZ1bmN0aW9uXG5jb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpO1xucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG59KTtcbi8qKioqKioqKioqKioqKioqKioqKiBJbml0aWFsaXplIERhdGEgKioqKioqKioqKioqKioqKioqKiovXG5wYXJhbWV0ZXJzLndpZHRoID0gd2lkdGg7XG5wYXJhbWV0ZXJzLmhlaWdodCA9IGhlaWdodDtcbi8vIC8vIEJpbmRpbmcgb3BlcmF0aW9uXG5yZWFjdFRvT3BlcmF0aW9uKGNhbnZhcyk7XG5kcmF3KCk7XG5mdW5jdGlvbiBkcmF3KCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgY29uc3QgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcbiAgICBjb25zdCBpQnVmZmVyID0gZ2V0QnVmZmVyKG1vZGVscywgaGVpZ2h0LCB3aWR0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBpICogd2lkdGggKyBqO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBpQnVmZmVyW2ldW2pdO1xuICAgICAgICAgICAgZGF0YVt0ICogNCArIDBdID0gY29sb3IucjtcbiAgICAgICAgICAgIGRhdGFbdCAqIDQgKyAxXSA9IGNvbG9yLmc7XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgMl0gPSBjb2xvci5iO1xuICAgICAgICAgICAgZGF0YVt0ICogNCArIDNdID0gY29sb3IuYTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbWFnZURhdGEuZGF0YS5zZXQoZGF0YSk7XG4gICAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbn1cbmZ1bmN0aW9uIGdldEJ1ZmZlcihtb2RlbHMsIGhlaWdodCwgd2lkdGgpIHtcbiAgICBjb25zdCBbaUJ1ZmZlciwgekJ1ZmZlcl0gPSBidWZmZXJJbml0KGhlaWdodCwgd2lkdGgpO1xuICAgIGlmIChtb2RlbHMubGVuZ3RoID09IDIgJiYgbW9kZWxzLmV2ZXJ5KG1vZGVsID0+IG1vZGVsLnJlYWR5KSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG1vZGVscy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxzW2tdLnpCdWZmZXJbaV1bal0gPCB6QnVmZmVyW2ldW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpQnVmZmVyW2ldW2pdID0gbW9kZWxzW2tdLmlCdWZmZXJbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlCdWZmZXI7XG59XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE5IDE4OjI1OjI0XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMTg6MzA6MDVcbiAqL1xuaW1wb3J0IHsgbW9kZWxzLCBwYXJhbWV0ZXJzIH0gZnJvbSAnLi4vY29uZmlncy9wYXJhbWV0ZXJzJztcbmltcG9ydCB7IGJhY2tGYWNlQ3VsbGluZywgY2FsY01vZGVsLCBzY2FuQ29udmVyc2lvbiB9IGZyb20gJy4uLy4uL2xpYi9pbmRleCc7XG5jb25zdCBjYWxjQWxsID0gKCkgPT4ge1xuICAgIG1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgICBbbW9kZWwuTiwgbW9kZWwuVSwgbW9kZWwuVl0gPSBwYXJhbWV0ZXJzLmNhbWVyYS5jYWxjTlVWKG1vZGVsLnBvc2l0aW9uKTtcbiAgICAgICAgbW9kZWwuYmFja0ZhY2VTZXQgPSBiYWNrRmFjZUN1bGxpbmcobW9kZWwsIHBhcmFtZXRlcnMuY2FtZXJhKTtcbiAgICAgICAgbW9kZWwuY2FsY1BvaW50cyA9IGNhbGNNb2RlbChtb2RlbCwgcGFyYW1ldGVycy5jYW1lcmEsIHBhcmFtZXRlcnMuaCwgcGFyYW1ldGVycy5kLCBwYXJhbWV0ZXJzLmYpO1xuICAgICAgICBbbW9kZWwuaUJ1ZmZlciwgbW9kZWwuekJ1ZmZlcl0gPSBzY2FuQ29udmVyc2lvbihtb2RlbCwgcGFyYW1ldGVycy5oZWlnaHQsIHBhcmFtZXRlcnMud2lkdGgpO1xuICAgICAgICBtb2RlbC5yZWFkeSA9IHRydWU7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgY2FsY0FsbCB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xNCAxODo1NTo1MVxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE5OjAxOjE2XG4gKi9cbi8qKioqKioqKioqKioqKioqKioqKiBET00gT1BFUkFUSU9OICoqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IHsgcGFyYW1ldGVycyB9IGZyb20gJy4uL2NvbmZpZ3MvcGFyYW1ldGVycyc7XG5pbXBvcnQgeyBmaWxlcyB9IGZyb20gJy4uL2NvbmZpZ3MvY29uc3RhbnRzJztcbmltcG9ydCB7IGNhbGNBbGwgfSBmcm9tICcuLi91dGlscy9jYWxjQWxsJztcbi8qKlxuICogTG9hZCBtZW51XG4gKiBAcGFyYW0gc2VsZWN0RE9NXG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkTWVudSA9IChzZWxlY3RET00pID0+IHtcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGZpbGUpO1xuICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZmlsZSkpO1xuICAgICAgICBzZWxlY3RET00uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIEJpbmQgdGhlIHZhbHVlIG9mIHNsaWRlciB3aXRoIGNhbWVyYSBzZXR0aW5nXG4gKiBAcGFyYW0gbmFtZVxuICovXG5leHBvcnQgY29uc3QgYmluZFNsaWRlciA9IChuYW1lKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bmFtZX1gKTtcbiAgICBjb25zdCBzbGlkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bmFtZX1fVmApO1xuICAgIHNsaWRlci52YWx1ZSA9IHBhcmFtZXRlcnNbbmFtZV07XG4gICAgc2xpZGVyVGV4dC5pbm5lckhUTUwgPSBwYXJhbWV0ZXJzW25hbWVdO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBhcmFtZXRlcnNbbmFtZV0gPSB0aGlzLnZhbHVlO1xuICAgICAgICBzbGlkZXJUZXh0LmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGNhbGNBbGwoKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIEJpbmQgb3BlcmF0aW9uIHRvIGNvbnRyb2wgdGhlIGZpbmFsIGVmZmVjdFxuICovXG5jb25zdCBvYmplY3RMZW4gPSAxO1xuY29uc3QgY2FtZXJhTGVuID0gMjtcbmV4cG9ydCBjb25zdCByZWFjdFRvT3BlcmF0aW9uID0gKGNhbnZhcykgPT4ge1xuICAgIC8vIHpvb21pbmcgdGhlIG1vZGVsXG4gICAgY29uc3QgY2FtZXJhID0gcGFyYW1ldGVycy5jYW1lcmE7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LndoZWVsRGVsdGEgPiAwKSB7XG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb24uc2NhbGUoNiAvIDUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uLnNjYWxlKDUgLyA2KTtcbiAgICAgICAgfVxuICAgICAgICBjYWxjQWxsKCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAvLyBjYXNlICd3JzogXG4gICAgICAgICAgICAvLyAgIGNhbWVyYS5wb3NpdGlvbiA9IGNhbWVyYS5wb3NpdGlvbi5hZGQoY2FtZXJhLlYuc2NhbGUoLW9iamVjdExlbikpO1xuICAgICAgICAgICAgLy8gICBkcmF3KCk7XG4gICAgICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSAncyc6XG4gICAgICAgICAgICAvLyAgIGNhbWVyYS5wb3NpdGlvbiA9IGNhbWVyYS5wb3NpdGlvbi5hZGQoY2FtZXJhLlYuc2NhbGUob2JqZWN0TGVuKSk7XG4gICAgICAgICAgICAvLyAgIGRyYXcoKTtcbiAgICAgICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlICdhJzpcbiAgICAgICAgICAgIC8vICAgY2FtZXJhLnBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uLmFkZChjYW1lcmEuVS5zY2FsZShvYmplY3RMZW4pKTtcbiAgICAgICAgICAgIC8vICAgZHJhdygpO1xuICAgICAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgJ2QnOlxuICAgICAgICAgICAgLy8gICBjYW1lcmEucG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb24uYWRkKGNhbWVyYS5VLnNjYWxlKC1vYmplY3RMZW4pKTtcbiAgICAgICAgICAgIC8vICAgZHJhdygpO1xuICAgICAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2knOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ICs9IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBjYWxjQWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdrJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSAtPSBjYW1lcmFMZW47XG4gICAgICAgICAgICAgICAgY2FsY0FsbCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaic6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggLT0gY2FtZXJhTGVuO1xuICAgICAgICAgICAgICAgIGNhbGNBbGwoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBjYWxjQWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xMiAxNTowODo1MVxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE5OjE4OjMzXG4gKi9cbmltcG9ydCB7IG1vZGVscyB9IGZyb20gJy4uL2NvbmZpZ3MvcGFyYW1ldGVycyc7XG5pbXBvcnQgeyBWZWN0b3IzZCwgTW9kZWwgfSBmcm9tICcuLi8uLi9saWIvaW5kZXgnO1xuaW1wb3J0IHsgY2FsY0FsbCB9IGZyb20gJy4vY2FsY0FsbCc7XG4vKipcbiAqIFBhcnNlIHRoZSBkYXRhIGZyb20gdGhlIC5kIGZpbGUsIHJldHVybiBhIE1vZGVsXG4gKiBAcGFyYW0geyp9IGRhdGFcbiAqL1xubGV0IHlWYWx1ZSA9IDA7XG5jb25zdCBwYXJzZUZpbGUgPSAoZGF0YSkgPT4ge1xuICAgIGxldCBsaW5lcyA9IGRhdGEubWF0Y2goL1teXFxyXFxuXSsvZyk7XG4gICAgbGV0IFtudW0sIHBvaW50c051bSwgZmFjZXNOdW1dID0gbGluZXNbMF0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgLy8gQ2F1c2UgaW4gc29tZSBmaWxlLCB0aGVyZSBhcmUganVzdCB0d28gbnVtYmVyIGluIGZpcnN0IGxpbmVcbiAgICBpZiAoZmFjZXNOdW0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZhY2VzTnVtID0gcG9pbnRzTnVtO1xuICAgICAgICBwb2ludHNOdW0gPSBudW07XG4gICAgfVxuICAgIGNvbnN0IFtwTnVtLCBmTnVtXSA9IFtwYXJzZUludChwb2ludHNOdW0sIDEwKSwgcGFyc2VJbnQoZmFjZXNOdW0pXTtcbiAgICAvLyBsb2FkIGRhdGEgdG8gbW9kZWxcbiAgICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbCgpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBOdW07IGkrKykge1xuICAgICAgICBsZXQgW3gsIHksIHpdID0gbGluZXNbaV0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIG1vZGVsLnBvaW50cy5wdXNoKG5ldyBWZWN0b3IzZChwYXJzZUZsb2F0KHgpLCBwYXJzZUZsb2F0KHkpLCBwYXJzZUZsb2F0KHopKSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBwTnVtICsgMTsgaSA8PSBwTnVtICsgZk51bTsgaSsrKSB7XG4gICAgICAgIGxldCBbbnVtLCAuLi5yZXNdID0gbGluZXNbaV0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIGlmIChyZXMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgbW9kZWwuZmFjZXMucHVzaChyZXMubWFwKCh4KSA9PiBwYXJzZUludCh4KSAtIDEpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb2RlbC5zZXRQb3NpdGlvbihuZXcgVmVjdG9yM2QoMCwgeVZhbHVlLCAwKSk7XG4gICAgbW9kZWwuY29sb3JJbml0KCk7XG4gICAgeVZhbHVlICs9IDI7XG4gICAgcmV0dXJuIG1vZGVsO1xufTtcbi8qKlxuICogUmVhZCB0aGUgY29udGVudCBvZiBhIGZpbGVcbiAqIEBwYXJhbSBmaWxlUGF0aFxuICovXG5jb25zdCByZWFkRmlsZSA9IChmaWxlUGF0aCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignR0VUJywgZmlsZVBhdGgsIHRydWUpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWooKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBMb2FkIGFuZCByZW5kZXIgc2VsZWN0ZWQgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlUGF0aFxuICovXG5jb25zdCBsb2FkRmlsZSA9IChmaWxlUGF0aHMpID0+IHtcbiAgICBpZiAoZmlsZVBhdGhzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNhbGNBbGwoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlUGF0aHMucG9wKCk7XG4gICAgICAgIHJlYWRGaWxlKGZpbGUpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbW9kZWxzLnB1c2gocGFyc2VGaWxlKGRhdGEpKTtcbiAgICAgICAgICAgIGxvYWRGaWxlKGZpbGVQYXRocyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWQgb3IgcGFyc2UgZmlsZSR7ZmlsZX0gZXJyb3JgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvYWRGaWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==