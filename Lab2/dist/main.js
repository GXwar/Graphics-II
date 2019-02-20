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
    constructor(position, UP, pRef) {
        this.position = position;
        this.UP = UP;
        this.pRef = pRef;
    }
    /**
     * calculate the N, U, V vector of the camera
     * @param objectPosition
     */
    calcNUV() {
        this.N = this.pRef.subtract(this.position).unit();
        this.U = this.N.crossProduct(this.UP).unit();
        this.V = this.U.crossProduct(this.N);
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
/* harmony import */ var _RGBA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RGBA */ "./lib/objects/RGBA.ts");
/* harmony import */ var _utils_rand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/rand */ "./lib/utils/rand.ts");


class Model {
    constructor() {
        this.points = [];
        this.faces = [];
        this.facesColor = [];
        this.backFaceSet = new Set();
        this.calcPoints = [];
    }
    colorInit() {
        for (let i = 0; i < this.faces.length; i++) {
            this.facesColor.push(new _RGBA__WEBPACK_IMPORTED_MODULE_0__["RGBA"](Object(_utils_rand__WEBPACK_IMPORTED_MODULE_1__["random"])(), Object(_utils_rand__WEBPACK_IMPORTED_MODULE_1__["random"])(), Object(_utils_rand__WEBPACK_IMPORTED_MODULE_1__["random"])(), 255));
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
 * @Last Modified time: 2019-02-19 22:05:53
 */
/******************** FILL PIXELS ********************/

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
    return iBuffer;
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

const world2Camera = (camera) => {
    const R = new _math_Matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"]([
        [camera.U.x, camera.U.y, camera.U.z, 0],
        [camera.V.x, camera.V.y, camera.V.z, 0],
        [camera.N.x, camera.N.y, camera.N.z, 0],
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
        const v1 = model.points[face[1]].subtract(model.points[face[0]]);
        const v2 = model.points[face[2]].subtract(model.points[face[1]]);
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
    const combo = perspectiveTransform(h, d, f).multiply(world2Camera(camera));
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
    'bench',
    'cow',
    'cone',
    'knight'
];



/***/ }),

/***/ "./src/configs/parameters.ts":
/*!***********************************!*\
  !*** ./src/configs/parameters.ts ***!
  \***********************************/
/*! exports provided: parameters, camera, model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parameters", function() { return parameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camera", function() { return camera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "model", function() { return model; });
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/index */ "./lib/index.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-18 01:33:56
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 22:18:15
 */

const parameters = {
    h: 1,
    d: 1,
    f: 1000,
    height: 0,
    width: 0,
    iBuffer: []
};
const camera = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Camera"](new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 20, 20), new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, -1, 0), new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 0, 0));
const model = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Model"]();
/******************** debug ********************/
// model.points = [
//   new Vector3d(-5.53777e-08, 1 , 2.87212e-08),
//   new Vector3d(0.705667, 0.712466, 2.87212e-08),
//   new Vector3d(1, -0.000909919, 2.87212e-08),
//   new Vector3d(0.71298, -0.707007, 2.87212e-08),
//   new Vector3d(-5.53777e-08, -1, 2.87212e-08),
//   new Vector3d(0.570897, 0.712466, 0.436126),
//   new Vector3d(0.809017, -0.000909919, 0.618034),
//   new Vector3d(0.576813, -0.707007, 0.440646),
//   new Vector3d(0.218063, 0.712466, 0.705667),
//   new Vector3d(0.309017, -0.000909919, 1),
//   new Vector3d(0.220323, -0.707007, 0.71298),
//   new Vector3d(-0.218063, 0.712466, 0.705667),
//   new Vector3d(-0.309017, -0.000909919, 1),
//   new Vector3d(-0.220323, -0.707007, 0.71298),
//   new Vector3d(-0.570897, 0.712466, 0.436126),
//   new Vector3d(-0.809017, -0.000909919, 0.618034),
//   new Vector3d(-0.576813, -0.707007, 0.440646),
//   new Vector3d(-0.705668, 0.712466, -3.6145e-08),
//   new Vector3d(-1, -0.000909919, -6.32006e-08),
//   new Vector3d(-0.71298, -0.707007, -3.68172e-08),
//   new Vector3d(-0.570897, 0.712466, -0.436126),
//   new Vector3d(-0.809017, -0.000909919, -0.618034),
//   new Vector3d(-0.576813, -0.707007, -0.440646),
//   new Vector3d(-0.218063, 0.712466, -0.705667),
//   new Vector3d(-0.309017, -0.000909919, -1),
//   new Vector3d(-0.220323, -0.707007, -0.71298),
//   new Vector3d(0.218064, 0.712466, -0.705667),
//   new Vector3d(0.309018, -0.000909919, -1),
//   new Vector3d(0.220323, -0.707007, -0.71298),
//   new Vector3d(0.570897, 0.712466, -0.436126),
//   new Vector3d(0.809018, -0.000909919, -0.618033),
//   new Vector3d(0.576813, -0.707007, -0.440645)
// ];
// model.faces = [
//   [0, 1, 5],
//   [1, 2, 6, 5],
//   [2, 3, 4, 6],
//   [3, 4, 7],
//   [0, 5, 8],
//   [5, 6, 9, 8],
//   [6, 7, 10, 9],
//   [7, 4, 10],
//   [0, 8, 11],
//   [8, 9, 12, 11],
//   [9, 10, 13, 12],
//   [10, 4, 13],
//   [0, 11, 14],
//   [11, 12, 15, 14],
//   [12, 13, 16, 15],
//   [13, 4, 16],
//   [0, 14, 17],
//   [14, 15, 18, 17],
//   [15, 16, 19, 18],
//   [16, 4, 19],
//   [0, 17, 20],
//   [17, 18, 21, 20],
//   [18, 19, 22, 21],
//   [19, 4, 22],
//   [0, 20, 23],
//   [20, 21, 24, 23],
//   [21, 22, 25, 24],
//   [22, 4, 25],
//   [0, 23, 26],
//   [23, 24, 27, 26],
//   [24, 25, 28, 27],
//   [25, 4, 28],
//   [0, 26, 29],
//   [26, 27, 30, 29],
//   [27, 28, 31, 30],
//   [28, 4, 31],
//   [0, 29, 1],
//   [29, 30, 2, 1],
//   [30, 31, 3, 2],
//   [31, 4, 3]
// ];
// model.colorInit();
/******************** debug ********************/



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
/*
 * @Author: GXwar
 * @Date: 2019-02-14 15:18:52
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 22:39:18
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
['h', 'd', 'f'].forEach(item => Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bindSlider"])(item, draw));
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
    Object(_utils_loadFile__WEBPACK_IMPORTED_MODULE_1__["default"])(modelNames, draw);
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
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["reactToOperation"])(canvas, draw);
function draw() {
    // clear before image
    ctx.clearRect(0, 0, width, height);
    // draw
    const imageData = ctx.createImageData(width, height);
    const data = new Uint8Array(width * height * 4);
    const iBuffer = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].iBuffer;
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
 * @Last Modified time: 2019-02-19 22:10:03
 */


const calcAll = () => {
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].calcNUV();
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].backFaceSet = Object(_lib_index__WEBPACK_IMPORTED_MODULE_1__["backFaceCulling"])(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"]);
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].calcPoints = Object(_lib_index__WEBPACK_IMPORTED_MODULE_1__["calcModel"])(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].h, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].d, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].f);
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].iBuffer = Object(_lib_index__WEBPACK_IMPORTED_MODULE_1__["scanConversion"])(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].width);
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
 * @Last Modified time: 2019-02-19 22:38:35
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
const bindSlider = (name, draw) => {
    const slider = document.querySelector(`#${name}`);
    const sliderText = document.querySelector(`#${name}_V`);
    slider.value = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"][name];
    sliderText.innerHTML = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"][name];
    slider.addEventListener('change', function () {
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"][name] = this.value;
        sliderText.innerHTML = this.value;
        Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
        draw();
    });
};
/**
 * Bind operation to control the final effect
 */
const cameraLen = 2;
const reactToOperation = (canvas, draw) => {
    // zooming the model
    canvas.addEventListener('mousewheel', function (event) {
        if (event.wheelDelta > 0) {
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.scale(6 / 5);
        }
        else {
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.scale(5 / 6);
        }
        Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
        draw();
    });
    document.addEventListener('keypress', function (e) {
        switch (e.key) {
            case 'i':
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.y += cameraLen;
                Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
                draw();
                break;
            case 'k':
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.y -= cameraLen;
                Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
                draw();
                break;
            case 'j':
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.x -= cameraLen;
                Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
                draw();
                break;
            case 'l':
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.x += cameraLen;
                Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
                draw();
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
 * @Last Modified time: 2019-02-19 22:37:31
 */



/**
 * Parse the data from the .d file, return a Model
 * @param data
 * @param objPosition
 */
const parseFile = (data, objPosition) => {
    let lines = data.match(/[^\r\n]+/g);
    let [num, pointsNum, facesNum] = lines[0].trim().split(/\s+/);
    // Cause in some file, there are just two number in first line
    if (facesNum == undefined) {
        facesNum = pointsNum;
        pointsNum = num;
    }
    const [pNum, fNum] = [parseInt(pointsNum, 10), parseInt(facesNum)];
    // load data to model
    const lastModelPointsNum = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].points.length;
    for (let i = 1; i <= pNum; i++) {
        let [x, y, z] = lines[i].trim().split(/\s+/);
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].points.push(new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](parseFloat(x) + objPosition.x, parseFloat(y) + objPosition.y, parseFloat(z) + objPosition.z));
    }
    for (let i = pNum + 1; i <= pNum + fNum; i++) {
        let [_, ...res] = lines[i].trim().split(/\s+/);
        if (res.length > 2) {
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].faces.push(res.map((x) => parseInt(x, 10) - 1 + lastModelPointsNum));
        }
    }
    console.log(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"]);
    return _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"];
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
const loadFile = (filePaths, draw) => {
    if (filePaths.length == 0) {
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].colorInit();
        Object(_calcAll__WEBPACK_IMPORTED_MODULE_2__["calcAll"])();
        draw();
    }
    else {
        const file = filePaths.pop();
        readFile(file)
            .then((data) => {
            parseFile(data, new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](0, 0, 0));
            loadFile(filePaths, draw);
        })
            .catch(() => {
            console.log(`Load or parse file${file} error`);
        });
    }
};
/* harmony default export */ __webpack_exports__["default"] = (loadFile);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NhbWVyYXMvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvbWF0aC9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL21hdGgvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXRoL1ZlY3RvcjNkLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXRoL1ZlY3RvcjRkLnRzIiwid2VicGFjazovLy8uL2xpYi9vYmplY3RzL0VkZ2VUYWJsZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvUkdCQS50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL2ZpbGxQaXhlbC50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL21vZGVsaW5nLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlscy9yYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy9wYXJhbWV0ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2FsY0FsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9sb2FkRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4QztBQUNIO0FBQ1A7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlEQUFLO0FBQ3BDLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0EsUUFBUSx5REFBSyxpQkFBaUIsbURBQVE7QUFDdEM7QUFDQSwwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0E7QUFDQSxZQUFZLHlEQUFLO0FBQ2pCO0FBQ0E7QUFDQSxnQkFBZ0IseURBQUs7QUFDckIsV0FBVyx5REFBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFLO0FBQ2IsUUFBUSx3REFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtREFBUTtBQUN4QztBQUNBLFNBQVM7QUFDVDtBQUNBLDZDQUE2QyxLQUFLO0FBQ2xELFNBQVM7QUFDVDtBQUNBO0FBQ2UsdUVBQVEsRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJjbGFzcyBDYW1lcmEge1xuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBVUCwgcFJlZikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuVVAgPSBVUDtcbiAgICAgICAgdGhpcy5wUmVmID0gcFJlZjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogY2FsY3VsYXRlIHRoZSBOLCBVLCBWIHZlY3RvciBvZiB0aGUgY2FtZXJhXG4gICAgICogQHBhcmFtIG9iamVjdFBvc2l0aW9uXG4gICAgICovXG4gICAgY2FsY05VVigpIHtcbiAgICAgICAgdGhpcy5OID0gdGhpcy5wUmVmLnN1YnRyYWN0KHRoaXMucG9zaXRpb24pLnVuaXQoKTtcbiAgICAgICAgdGhpcy5VID0gdGhpcy5OLmNyb3NzUHJvZHVjdCh0aGlzLlVQKS51bml0KCk7XG4gICAgICAgIHRoaXMuViA9IHRoaXMuVS5jcm9zc1Byb2R1Y3QodGhpcy5OKTtcbiAgICB9XG59XG5leHBvcnQgeyBDYW1lcmEgfTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKiAuL2NhbWVyYXMgKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgeyBDYW1lcmEgfSBmcm9tICcuL2NhbWVyYXMvQ2FtZXJhJztcbi8qKioqKioqKioqKioqKioqKioqKiAuL21hdGggKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgeyBNYXRyaXggfSBmcm9tICcuL21hdGgvTWF0cml4JztcbmV4cG9ydCB7IFZlY3RvcjNkIH0gZnJvbSAnLi9tYXRoL1ZlY3RvcjNkJztcbmV4cG9ydCB7IFZlY3RvcjRkIH0gZnJvbSAnLi9tYXRoL1ZlY3RvcjRkJztcbi8qKioqKioqKioqKioqKioqKioqKiAuL29iamVjdHMgKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgeyBFZGdlVGFibGVFbGVtZW50IH0gZnJvbSAnLi9vYmplY3RzL0VkZ2VUYWJsZUVsZW1lbnQnO1xuZXhwb3J0IHsgTW9kZWwgfSBmcm9tICcuL29iamVjdHMvTW9kZWwnO1xuZXhwb3J0IHsgUkdCQSB9IGZyb20gJy4vb2JqZWN0cy9SR0JBJztcbi8qKioqKioqKioqKioqKioqKioqKiAuL3RyYW5zZm9ybSAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IGJhY2tGYWNlQ3VsbGluZywgY2FsY01vZGVsIH0gZnJvbSAnLi90cmFuc2Zvcm0vbW9kZWxpbmcnO1xuZXhwb3J0IHsgYnVmZmVySW5pdCwgc2NhbkNvbnZlcnNpb24gfSBmcm9tICcuL3RyYW5zZm9ybS9maWxsUGl4ZWwnO1xuIiwiaW1wb3J0IHsgVmVjdG9yNGQgfSBmcm9tICcuL1ZlY3RvcjRkJztcbmNsYXNzIE1hdHJpeCB7XG4gICAgY29uc3RydWN0b3IodmFsdWVzT3JNLCBuKSB7XG4gICAgICAgIGlmICh2YWx1ZXNPck0gIT09IHVuZGVmaW5lZCAmJiBuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlc09yTTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMucHVzaChBcnJheS5mcm9tKHsgbGVuZ3RoOiBuIH0sIF8gPT4gMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlc09yTSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlc09yTTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogbXVsdGlwbHkgd2l0aCBvdGhlciBtYXRyaXgsIHJldHVybiBhIG5ldyBtYXRyaXhcbiAgICAgKiBAcGFyYW0gb3RoZXJcbiAgICAgKi9cbiAgICBtdWx0aXBseShvdGhlcikge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXNbMF0ubGVuZ3RoICE9PSBvdGhlci52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBtdWx0aXBseSB0aGVzZSB0d28gbWF0cmljZXMhJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbSA9IHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbiA9IG90aGVyLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGsgPSBvdGhlci52YWx1ZXNbMF0ubGVuZ3RoO1xuICAgICAgICAvLyBtdWx0aXBseVxuICAgICAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG0sIGspO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IG47IHQrKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdNYXRyaXgudmFsdWVzW2ldW2pdICs9IHRoaXMudmFsdWVzW2ldW3RdICogb3RoZXIudmFsdWVzW3RdW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgIH1cbiAgICA7XG4gICAgdG9WZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHZlY3RvciA9IG5ldyBWZWN0b3I0ZCh0aGlzLnZhbHVlc1swXVswXSwgdGhpcy52YWx1ZXNbMV1bMF0sIHRoaXMudmFsdWVzWzJdWzBdLCB0aGlzLnZhbHVlc1szXVswXSk7XG4gICAgICAgIHJldHVybiB2ZWN0b3IuY29sbGFwc2UoKTtcbiAgICB9XG59XG5leHBvcnQgeyBNYXRyaXggfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTkgMTQ6Mzc6MDNcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAxNDo0MDoyNVxuICovXG5jbGFzcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59XG5leHBvcnQgeyBWZWN0b3IgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTUgMDE6MzI6MTZcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAxNTozMDoyMVxuICovXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL1ZlY3Rvcic7XG5pbXBvcnQgeyBWZWN0b3I0ZCB9IGZyb20gXCIuL1ZlY3RvcjRkXCI7XG5jbGFzcyBWZWN0b3IzZCBleHRlbmRzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgeikge1xuICAgICAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdXBlcigwLCAwKTtcbiAgICAgICAgICAgIHRoaXMueiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdXBlcih4LCB5KTtcbiAgICAgICAgICAgIHRoaXMueiA9IHo7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXh0ZW5kKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjRkKHRoaXMueCwgdGhpcy55LCB0aGlzLnosIDEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBnZXQgdGhlIGFic29sdXRlIHZhbHVlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKi9cbiAgICBhYnMoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56KTtcbiAgICB9XG4gICAgYWRkKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM2QodGhpcy54ICsgb3RoZXIueCwgdGhpcy55ICsgb3RoZXIueSwgdGhpcy56ICsgb3RoZXIueik7XG4gICAgfVxuICAgIHN1YnRyYWN0KG90aGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM2QodGhpcy54IC0gb3RoZXIueCwgdGhpcy55IC0gb3RoZXIueSwgdGhpcy56IC0gb3RoZXIueik7XG4gICAgfVxuICAgIHNjYWxlKG4pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnggKiBuLCB0aGlzLnkgKiBuLCB0aGlzLnogKiBuKTtcbiAgICB9XG4gICAgdW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUoMSAvIHRoaXMuYWJzKCkpO1xuICAgIH1cbiAgICBjcm9zc1Byb2R1Y3Qob3RoZXIpIHtcbiAgICAgICAgLy8gcmV0dXJuIFtcbiAgICAgICAgLy8gICB2ZWMxWzFdICogdmVjMlsyXSAtIHZlYzJbMV0gKiB2ZWMxWzJdLFxuICAgICAgICAvLyAgIC0odmVjMVswXSAqIHZlYzJbMl0gLSB2ZWMyWzBdICogdmVjMVsyXSksXG4gICAgICAgIC8vICAgdmVjMVswXSAqIHZlYzJbMV0gLSB2ZWMyWzBdICogdmVjMVsxXVxuICAgICAgICAvLyBdO1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueSAqIG90aGVyLnogLSBvdGhlci55ICogdGhpcy56LCAtKHRoaXMueCAqIG90aGVyLnogLSBvdGhlci54ICogdGhpcy56KSwgdGhpcy54ICogb3RoZXIueSAtIG90aGVyLnggKiB0aGlzLnkpO1xuICAgIH1cbiAgICBkb3RQcm9kdWN0KG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiBvdGhlci54ICsgdGhpcy55ICogb3RoZXIueSArIHRoaXMueiAqIG90aGVyLno7XG4gICAgfVxufVxuZXhwb3J0IHsgVmVjdG9yM2QgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTUgMDE6MzE6NTNcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAxNDo0MTozMFxuICovXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL1ZlY3Rvcic7XG5pbXBvcnQgeyBWZWN0b3IzZCB9IGZyb20gJy4vVmVjdG9yM2QnO1xuaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnLi9NYXRyaXgnO1xuY2xhc3MgVmVjdG9yNGQgZXh0ZW5kcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHosIHcpIHtcbiAgICAgICAgc3VwZXIoeCwgeSk7XG4gICAgICAgIHRoaXMueiA9IHo7XG4gICAgICAgIHRoaXMudyA9IHc7XG4gICAgfVxuICAgIGNvbGxhcHNlKCkge1xuICAgICAgICBsZXQgdCA9IHRoaXMudztcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnggLyB0LCB0aGlzLnkgLyB0LCB0aGlzLnogLyB0KTtcbiAgICB9XG4gICAgdG9NYXRyaXgoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4KFtcbiAgICAgICAgICAgIFt0aGlzLnhdLFxuICAgICAgICAgICAgW3RoaXMueV0sXG4gICAgICAgICAgICBbdGhpcy56XSxcbiAgICAgICAgICAgIFt0aGlzLnddXG4gICAgICAgIF0pO1xuICAgIH1cbn1cbmV4cG9ydCB7IFZlY3RvcjRkIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE3IDIxOjM3OjEwXG4gKiBATGFzdCBNb2RpZmllZCBieTogICBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAwMTozNDowNlxuICovXG5jbGFzcyBFZGdlVGFibGVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih5U3RhcnQsIHlNYXgsIHhTdGFydCwgZGVsdGEsIHpVcHBlciwgekxvd2VyKSB7XG4gICAgICAgIHRoaXMueVN0YXJ0ID0geVN0YXJ0O1xuICAgICAgICB0aGlzLnlNYXggPSB5TWF4O1xuICAgICAgICB0aGlzLnhTdGFydCA9IHhTdGFydDtcbiAgICAgICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgICAgICB0aGlzLnpVcHBlciA9IHpVcHBlcjtcbiAgICAgICAgdGhpcy56TG93ZXIgPSB6TG93ZXI7XG4gICAgfVxufVxuO1xuZXhwb3J0IHsgRWRnZVRhYmxlRWxlbWVudCB9O1xuIiwiaW1wb3J0IHsgUkdCQSB9IGZyb20gXCIuL1JHQkFcIjtcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4uL3V0aWxzL3JhbmQnO1xuY2xhc3MgTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLmZhY2VzID0gW107XG4gICAgICAgIHRoaXMuZmFjZXNDb2xvciA9IFtdO1xuICAgICAgICB0aGlzLmJhY2tGYWNlU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmNhbGNQb2ludHMgPSBbXTtcbiAgICB9XG4gICAgY29sb3JJbml0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmFjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNDb2xvci5wdXNoKG5ldyBSR0JBKHJhbmRvbSgpLCByYW5kb20oKSwgcmFuZG9tKCksIDI1NSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IHsgTW9kZWwgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTkgMTY6Mzc6NDlcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAxNjo0NTo1NVxuICovXG5jbGFzcyBSR0JBIHtcbiAgICBjb25zdHJ1Y3RvcihyID0gMCwgZyA9IDAsIGIgPSAwLCBhID0gMjU1KSB7XG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgICAgIHRoaXMuZyA9IGc7XG4gICAgICAgIHRoaXMuYiA9IGI7XG4gICAgICAgIHRoaXMuYSA9IGE7XG4gICAgfVxufVxuZXhwb3J0IHsgUkdCQSB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xNyAxNDo0NDozMlxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDIyOjA1OjUzXG4gKi9cbi8qKioqKioqKioqKioqKioqKioqKiBGSUxMIFBJWEVMUyAqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCB7IEVkZ2VUYWJsZUVsZW1lbnQsIFJHQkEgfSBmcm9tICcuLi8uLi9saWIvaW5kZXgnO1xuLy8gY29udmVydCAyZCBwb2ludCB0byBjYW52YXMgcG9pbnRcbmNvbnN0IHRvUGl4ZWwgPSAodmFsdWUsIGhlaWdodCwgc2hvcnR0ZW4gPSBmYWxzZSkgPT4gTWF0aC5mbG9vcigodmFsdWUgKyAxKSAqIGhlaWdodCAvIDIpIC0gKHNob3J0dGVuID8gMSA6IDApO1xuY29uc3QgdG9GbG9hdFBpeGVsID0gKHZhbHVlLCBoZWlnaHQpID0+ICh2YWx1ZSArIDEpICogaGVpZ2h0IC8gMjtcbmNvbnN0IGJ1ZmZlckluaXQgPSAoaGVpZ2h0LCB3aWR0aCkgPT4ge1xuICAgIGNvbnN0IGlCdWZmZXIgPSBbXTtcbiAgICBjb25zdCB6QnVmZmVyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICBpQnVmZmVyW2ldID0gW107XG4gICAgICAgIHpCdWZmZXJbaV0gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICBpQnVmZmVyW2ldW2pdID0gbmV3IFJHQkEoKTtcbiAgICAgICAgICAgIHpCdWZmZXJbaV1bal0gPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbaUJ1ZmZlciwgekJ1ZmZlcl07XG59O1xuY29uc3QgZWRnZVRhYmxlSW5pdCA9IChoZWlnaHQpID0+IHtcbiAgICBjb25zdCBlZGdlVGFibGUgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGVkZ2VUYWJsZVtpXSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gZWRnZVRhYmxlO1xufTtcbi8qKlxuICogU2NhbiBDb252ZXJzaW9uXG4gKiAxLiBmb3IgZWFjaCBzY2FuIGxpbmUsIGRldGVybWluZSBlZGdlcyBvZiBwb2x5Z29ucyB0aGF0IGludGVyc2VjdFxuICogMi4gRmluZCB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgc3BhblxuICogMy4gUmVseSBvbiBzY2FubGluZSBhbmQgcGl4ZWwgY29oZXJlbmNlIHRvIGxpbmVhcmx5IGludGVycG9sYXRlIChiZXR3ZWVuIHNjYW5saW5lcyBhbmQgYmV0d2VlbiBwaXhlbHMpXG4gKi9cbmNvbnN0IGFkZEVkZ2VUb0VUID0gKGxvd2VyUG9pbnQsIHVwcGVyUG9pbnQsIGVkZ2VUYWJsZSwgaGVpZ2h0KSA9PiB7XG4gICAgLy8gaWdub3JlIGhvcml6b250YWwgZWRnZSBhbmQgb3V0IG9mIHJhbmdlIHBvaW50XG4gICAgaWYgKHRvUGl4ZWwobG93ZXJQb2ludC55LCBoZWlnaHQpID09PSB0b1BpeGVsKHVwcGVyUG9pbnQueSwgaGVpZ2h0KVxuICAgICAgICB8fCBsb3dlclBvaW50LnkgPiAxIHx8IGxvd2VyUG9pbnQueSA8IC0xKVxuICAgICAgICByZXR1cm47XG4gICAgLy8gc3dhcCB0aGUgb3JkZXIgb2YgdHdvIHBvaW50c1xuICAgIGlmIChsb3dlclBvaW50LnkgPiB1cHBlclBvaW50LnkpIHtcbiAgICAgICAgW2xvd2VyUG9pbnQsIHVwcGVyUG9pbnRdID0gW3VwcGVyUG9pbnQsIGxvd2VyUG9pbnRdO1xuICAgIH1cbiAgICAvLyBjcmVhdGUgZWRnZSB0YWJsZSBlbGVtZW50IGFuZCBhZGQgaXQgaW50byB0aGUgZWRnZSB0YWJsZVxuICAgIGNvbnN0IEVURWxlbWVudCA9IG5ldyBFZGdlVGFibGVFbGVtZW50KHRvUGl4ZWwobG93ZXJQb2ludC55LCBoZWlnaHQpLCB0b1BpeGVsKHVwcGVyUG9pbnQueSwgaGVpZ2h0LCB0cnVlKSwgdG9GbG9hdFBpeGVsKGxvd2VyUG9pbnQueCwgaGVpZ2h0KSwgKGxvd2VyUG9pbnQueCAtIHVwcGVyUG9pbnQueCkgLyAobG93ZXJQb2ludC55IC0gdXBwZXJQb2ludC55KSwgdXBwZXJQb2ludC56LCBsb3dlclBvaW50LnopO1xuICAgIGlmIChFVEVsZW1lbnQueVN0YXJ0ID4gRVRFbGVtZW50LnlNYXgpIHtcbiAgICAgICAgRVRFbGVtZW50LnlNYXggPSBFVEVsZW1lbnQueVN0YXJ0O1xuICAgIH1cbiAgICBlZGdlVGFibGVbTWF0aC5mbG9vcihFVEVsZW1lbnQueVN0YXJ0KV0ucHVzaChFVEVsZW1lbnQpO1xufTtcbi8vIENhbGN1bGF0aW9uIG9mIHpcbmNvbnN0IGNhbGNaID0gKGVkZ2UsIHlzKSA9PiBlZGdlLnlNYXggPT09IGVkZ2UueVN0YXJ0ID8gZWRnZS56VXBwZXIgOlxuICAgIGVkZ2UuelVwcGVyIC0gKGVkZ2UuelVwcGVyIC0gZWRnZS56TG93ZXIpICogKGVkZ2UueU1heCAtIHlzKSAvIChlZGdlLnlNYXggLSBlZGdlLnlTdGFydCk7XG5jb25zdCBzY2FuQ29udmVyc2lvbiA9IChtb2RlbCwgaGVpZ2h0LCB3aWR0aCkgPT4ge1xuICAgIGNvbnN0IFtpQnVmZmVyLCB6QnVmZmVyXSA9IGJ1ZmZlckluaXQoaGVpZ2h0LCB3aWR0aCk7XG4gICAgbGV0IGFjdGl2ZUVkZ2VUYWJsZSA9IFtdO1xuICAgIC8vIGZvciBlYWNoIGZhY2VcbiAgICBtb2RlbC5mYWNlcy5mb3JFYWNoKChmYWNlLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBkb24ndCBuZWVkIHRvIGNvbnNpZGVyIGJhY2sgZmFjZVxuICAgICAgICBpZiAobW9kZWwuYmFja0ZhY2VTZXQuaGFzKGluZGV4KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gYnVpbGQgZWRnZSB0YWJsZVxuICAgICAgICBjb25zdCBlZGdlVGFibGUgPSBlZGdlVGFibGVJbml0KGhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IGFuIGVkZ2UgXG4gICAgICAgICAgICBsZXQgbG93ZXJQb2ludCA9IG1vZGVsLmNhbGNQb2ludHNbZmFjZVtpXV07XG4gICAgICAgICAgICBsZXQgdXBwZXJQb2ludCA9IG1vZGVsLmNhbGNQb2ludHNbZmFjZVsoaSArIDEpICUgZmFjZS5sZW5ndGhdXTtcbiAgICAgICAgICAgIGFkZEVkZ2VUb0VUKGxvd2VyUG9pbnQsIHVwcGVyUG9pbnQsIGVkZ2VUYWJsZSwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWxsIHBpeGVsIHRvIHBpeGVsIGJ1ZmZlclxuICAgICAgICBsZXQgY3VycmVudFNjYW5MaW5lID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVkZ2VUYWJsZVtpXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNjYW5MaW5lID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudFNjYW5MaW5lOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1vdmUgZWRnZSBmcm9tIEVkZ2UgVGFiZWwgdG8gQWN0aXZlIEVkZ2UgVGFibGVcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWRnZVRhYmxlW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlRWRnZVRhYmxlLnB1c2goZWRnZVRhYmxlW2ldW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEueFN0YXJ0IC0gYi54U3RhcnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqICsgMSA8IGFjdGl2ZUVkZ2VUYWJsZS5sZW5ndGg7IGogKz0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSBbYWN0aXZlRWRnZVRhYmxlW2pdLCBhY3RpdmVFZGdlVGFibGVbaiArIDFdXTtcbiAgICAgICAgICAgICAgICBpZiAobGVmdC54U3RhcnQgPiByaWdodC54U3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IFt6YSwgemJdID0gW2NhbGNaKGxlZnQsIGkpLCBjYWxjWihyaWdodCwgaSldO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKGxlZnQueFN0YXJ0KSk7IGsgPCBNYXRoLmZsb29yKHJpZ2h0LnhTdGFydCkgJiYgayA8IHdpZHRoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBjdXJyZW50IHBvaW50J3MgeiBjb29yZGluYXRlXG4gICAgICAgICAgICAgICAgICAgIGxldCB6cCA9IGsgPT0gTWF0aC5tYXgoMCwgbGVmdC54U3RhcnQpID8gemEgOiB6YiAtICh6YiAtIHphKSAqIChyaWdodC54U3RhcnQgLSBrKSAvIChyaWdodC54U3RhcnQgLSBsZWZ0LnhTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh6cCA+IHpCdWZmZXJbaV1ba10pXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgekJ1ZmZlcltpXVtrXSA9IHpwO1xuICAgICAgICAgICAgICAgICAgICBpQnVmZmVyW2ldW2tdID0gbW9kZWwuZmFjZXNDb2xvcltpbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aXZlRWRnZVRhYmxlID0gYWN0aXZlRWRnZVRhYmxlXG4gICAgICAgICAgICAgICAgLmZpbHRlcihlZGdlID0+IGVkZ2UueU1heCAhPT0gaSkgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBBY3RpdmUgRWRnZSBUYWJsZSB3aGlsZSB5ID0geU1heFxuICAgICAgICAgICAgICAgIC5tYXAoZWRnZSA9PiB7XG4gICAgICAgICAgICAgICAgZWRnZS54U3RhcnQgKz0gZWRnZS5kZWx0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWRnZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGlCdWZmZXI7XG59O1xuZXhwb3J0IHsgYnVmZmVySW5pdCwgc2NhbkNvbnZlcnNpb24gfTtcbiIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gJy4uL21hdGgvTWF0cml4JztcbmNvbnN0IHdvcmxkMkNhbWVyYSA9IChjYW1lcmEpID0+IHtcbiAgICBjb25zdCBSID0gbmV3IE1hdHJpeChbXG4gICAgICAgIFtjYW1lcmEuVS54LCBjYW1lcmEuVS55LCBjYW1lcmEuVS56LCAwXSxcbiAgICAgICAgW2NhbWVyYS5WLngsIGNhbWVyYS5WLnksIGNhbWVyYS5WLnosIDBdLFxuICAgICAgICBbY2FtZXJhLk4ueCwgY2FtZXJhLk4ueSwgY2FtZXJhLk4ueiwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAxXVxuICAgIF0pO1xuICAgIGNvbnN0IFQgPSBuZXcgTWF0cml4KFtcbiAgICAgICAgWzEsIDAsIDAsIC1jYW1lcmEucG9zaXRpb24ueF0sXG4gICAgICAgIFswLCAxLCAwLCAtY2FtZXJhLnBvc2l0aW9uLnldLFxuICAgICAgICBbMCwgMCwgMSwgLWNhbWVyYS5wb3NpdGlvbi56XSxcbiAgICAgICAgWzAsIDAsIDAsIDFdXG4gICAgXSk7XG4gICAgcmV0dXJuIFIubXVsdGlwbHkoVCk7XG59O1xuY29uc3QgcGVyc3BlY3RpdmVUcmFuc2Zvcm0gPSAoaCwgZCwgZikgPT4gbmV3IE1hdHJpeChbXG4gICAgW2QgLyBoLCAwLCAwLCAwXSxcbiAgICBbMCwgZCAvIGgsIDAsIDBdLFxuICAgIFswLCAwLCBmIC8gKGYgLSBkKSwgLWQgKiBmIC8gKGYgLSBkKV0sXG4gICAgWzAsIDAsIDEsIDBdXG5dKTtcbi8qKlxuICogQmFjay1mYWNlIGN1bGxpbmdcbiAqIFZpc2libGUgaWYgTnAgZG90IHByb2R1Y3QgTiA+IDBcbiAqIE5vdGU6IFNvbWUgdGhlIHBvbHlnb25zIGFyZSBkZW5vdGVkIGluIGFudGktY2xvY2t3aXNlIG9yZGVyXG4gKi9cbmNvbnN0IGJhY2tGYWNlQ3VsbGluZyA9IChtb2RlbCwgY2FtZXJhKSA9PiB7XG4gICAgY29uc3QgYmFja0ZhY2VTZXQgPSBuZXcgU2V0KCk7XG4gICAgbW9kZWwuZmFjZXMuZm9yRWFjaCgoZmFjZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdjEgPSBtb2RlbC5wb2ludHNbZmFjZVsxXV0uc3VidHJhY3QobW9kZWwucG9pbnRzW2ZhY2VbMF1dKTtcbiAgICAgICAgY29uc3QgdjIgPSBtb2RlbC5wb2ludHNbZmFjZVsyXV0uc3VidHJhY3QobW9kZWwucG9pbnRzW2ZhY2VbMV1dKTtcbiAgICAgICAgY29uc3QgTnAgPSB2MS5jcm9zc1Byb2R1Y3QodjIpO1xuICAgICAgICBjb25zdCBOID0gY2FtZXJhLnBvc2l0aW9uLnN1YnRyYWN0KG1vZGVsLnBvaW50c1tmYWNlWzBdXSk7XG4gICAgICAgIGlmIChOcC5kb3RQcm9kdWN0KE4pID49IDApIHtcbiAgICAgICAgICAgIGJhY2tGYWNlU2V0LmFkZChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYmFja0ZhY2VTZXQ7XG59O1xuLy8gQ2FsY3VsYXRlIG1vZGVsXG5jb25zdCBjYWxjTW9kZWwgPSAobW9kZWwsIGNhbWVyYSwgaCwgZCwgZikgPT4ge1xuICAgIGNvbnN0IGNvbWJvID0gcGVyc3BlY3RpdmVUcmFuc2Zvcm0oaCwgZCwgZikubXVsdGlwbHkod29ybGQyQ2FtZXJhKGNhbWVyYSkpO1xuICAgIHJldHVybiBtb2RlbC5wb2ludHMubWFwKHBvaW50ID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbWJvLm11bHRpcGx5KHBvaW50LmV4dGVuZCgpLnRvTWF0cml4KCkpLnRvVmVjdG9yKCk7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgYmFja0ZhY2VDdWxsaW5nLCBjYWxjTW9kZWwgfTtcbiIsIi8qKlxuICogR2V0IGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAgYW5kIDI1NShib3RoIGluY2x1c2l2ZSk7XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb20gPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpO1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xMCAwMTozMzo0NVxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE5OjE1OjA4XG4gKi9cbi8vIGRhdGEgZmlsZXMgdG8gYmUgbG9hZGVkXG5jb25zdCBmaWxlcyA9IFtcbiAgICAnYXRjJyxcbiAgICAnYmFsbCcsXG4gICAgJ2JlbmNoJyxcbiAgICAnY293JyxcbiAgICAnY29uZScsXG4gICAgJ2tuaWdodCdcbl07XG5leHBvcnQgeyBmaWxlcyB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xOCAwMTozMzo1NlxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDIyOjE4OjE1XG4gKi9cbmltcG9ydCB7IENhbWVyYSwgTW9kZWwsIFZlY3RvcjNkIH0gZnJvbSAnLi4vLi4vbGliL2luZGV4JztcbmNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgaDogMSxcbiAgICBkOiAxLFxuICAgIGY6IDEwMDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGlCdWZmZXI6IFtdXG59O1xuY29uc3QgY2FtZXJhID0gbmV3IENhbWVyYShuZXcgVmVjdG9yM2QoMCwgMjAsIDIwKSwgbmV3IFZlY3RvcjNkKDAsIC0xLCAwKSwgbmV3IFZlY3RvcjNkKDAsIDAsIDApKTtcbmNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCk7XG4vKioqKioqKioqKioqKioqKioqKiogZGVidWcgKioqKioqKioqKioqKioqKioqKiovXG4vLyBtb2RlbC5wb2ludHMgPSBbXG4vLyAgIG5ldyBWZWN0b3IzZCgtNS41Mzc3N2UtMDgsIDEgLCAyLjg3MjEyZS0wOCksXG4vLyAgIG5ldyBWZWN0b3IzZCgwLjcwNTY2NywgMC43MTI0NjYsIDIuODcyMTJlLTA4KSxcbi8vICAgbmV3IFZlY3RvcjNkKDEsIC0wLjAwMDkwOTkxOSwgMi44NzIxMmUtMDgpLFxuLy8gICBuZXcgVmVjdG9yM2QoMC43MTI5OCwgLTAuNzA3MDA3LCAyLjg3MjEyZS0wOCksXG4vLyAgIG5ldyBWZWN0b3IzZCgtNS41Mzc3N2UtMDgsIC0xLCAyLjg3MjEyZS0wOCksXG4vLyAgIG5ldyBWZWN0b3IzZCgwLjU3MDg5NywgMC43MTI0NjYsIDAuNDM2MTI2KSxcbi8vICAgbmV3IFZlY3RvcjNkKDAuODA5MDE3LCAtMC4wMDA5MDk5MTksIDAuNjE4MDM0KSxcbi8vICAgbmV3IFZlY3RvcjNkKDAuNTc2ODEzLCAtMC43MDcwMDcsIDAuNDQwNjQ2KSxcbi8vICAgbmV3IFZlY3RvcjNkKDAuMjE4MDYzLCAwLjcxMjQ2NiwgMC43MDU2NjcpLFxuLy8gICBuZXcgVmVjdG9yM2QoMC4zMDkwMTcsIC0wLjAwMDkwOTkxOSwgMSksXG4vLyAgIG5ldyBWZWN0b3IzZCgwLjIyMDMyMywgLTAuNzA3MDA3LCAwLjcxMjk4KSxcbi8vICAgbmV3IFZlY3RvcjNkKC0wLjIxODA2MywgMC43MTI0NjYsIDAuNzA1NjY3KSxcbi8vICAgbmV3IFZlY3RvcjNkKC0wLjMwOTAxNywgLTAuMDAwOTA5OTE5LCAxKSxcbi8vICAgbmV3IFZlY3RvcjNkKC0wLjIyMDMyMywgLTAuNzA3MDA3LCAwLjcxMjk4KSxcbi8vICAgbmV3IFZlY3RvcjNkKC0wLjU3MDg5NywgMC43MTI0NjYsIDAuNDM2MTI2KSxcbi8vICAgbmV3IFZlY3RvcjNkKC0wLjgwOTAxNywgLTAuMDAwOTA5OTE5LCAwLjYxODAzNCksXG4vLyAgIG5ldyBWZWN0b3IzZCgtMC41NzY4MTMsIC0wLjcwNzAwNywgMC40NDA2NDYpLFxuLy8gICBuZXcgVmVjdG9yM2QoLTAuNzA1NjY4LCAwLjcxMjQ2NiwgLTMuNjE0NWUtMDgpLFxuLy8gICBuZXcgVmVjdG9yM2QoLTEsIC0wLjAwMDkwOTkxOSwgLTYuMzIwMDZlLTA4KSxcbi8vICAgbmV3IFZlY3RvcjNkKC0wLjcxMjk4LCAtMC43MDcwMDcsIC0zLjY4MTcyZS0wOCksXG4vLyAgIG5ldyBWZWN0b3IzZCgtMC41NzA4OTcsIDAuNzEyNDY2LCAtMC40MzYxMjYpLFxuLy8gICBuZXcgVmVjdG9yM2QoLTAuODA5MDE3LCAtMC4wMDA5MDk5MTksIC0wLjYxODAzNCksXG4vLyAgIG5ldyBWZWN0b3IzZCgtMC41NzY4MTMsIC0wLjcwNzAwNywgLTAuNDQwNjQ2KSxcbi8vICAgbmV3IFZlY3RvcjNkKC0wLjIxODA2MywgMC43MTI0NjYsIC0wLjcwNTY2NyksXG4vLyAgIG5ldyBWZWN0b3IzZCgtMC4zMDkwMTcsIC0wLjAwMDkwOTkxOSwgLTEpLFxuLy8gICBuZXcgVmVjdG9yM2QoLTAuMjIwMzIzLCAtMC43MDcwMDcsIC0wLjcxMjk4KSxcbi8vICAgbmV3IFZlY3RvcjNkKDAuMjE4MDY0LCAwLjcxMjQ2NiwgLTAuNzA1NjY3KSxcbi8vICAgbmV3IFZlY3RvcjNkKDAuMzA5MDE4LCAtMC4wMDA5MDk5MTksIC0xKSxcbi8vICAgbmV3IFZlY3RvcjNkKDAuMjIwMzIzLCAtMC43MDcwMDcsIC0wLjcxMjk4KSxcbi8vICAgbmV3IFZlY3RvcjNkKDAuNTcwODk3LCAwLjcxMjQ2NiwgLTAuNDM2MTI2KSxcbi8vICAgbmV3IFZlY3RvcjNkKDAuODA5MDE4LCAtMC4wMDA5MDk5MTksIC0wLjYxODAzMyksXG4vLyAgIG5ldyBWZWN0b3IzZCgwLjU3NjgxMywgLTAuNzA3MDA3LCAtMC40NDA2NDUpXG4vLyBdO1xuLy8gbW9kZWwuZmFjZXMgPSBbXG4vLyAgIFswLCAxLCA1XSxcbi8vICAgWzEsIDIsIDYsIDVdLFxuLy8gICBbMiwgMywgNCwgNl0sXG4vLyAgIFszLCA0LCA3XSxcbi8vICAgWzAsIDUsIDhdLFxuLy8gICBbNSwgNiwgOSwgOF0sXG4vLyAgIFs2LCA3LCAxMCwgOV0sXG4vLyAgIFs3LCA0LCAxMF0sXG4vLyAgIFswLCA4LCAxMV0sXG4vLyAgIFs4LCA5LCAxMiwgMTFdLFxuLy8gICBbOSwgMTAsIDEzLCAxMl0sXG4vLyAgIFsxMCwgNCwgMTNdLFxuLy8gICBbMCwgMTEsIDE0XSxcbi8vICAgWzExLCAxMiwgMTUsIDE0XSxcbi8vICAgWzEyLCAxMywgMTYsIDE1XSxcbi8vICAgWzEzLCA0LCAxNl0sXG4vLyAgIFswLCAxNCwgMTddLFxuLy8gICBbMTQsIDE1LCAxOCwgMTddLFxuLy8gICBbMTUsIDE2LCAxOSwgMThdLFxuLy8gICBbMTYsIDQsIDE5XSxcbi8vICAgWzAsIDE3LCAyMF0sXG4vLyAgIFsxNywgMTgsIDIxLCAyMF0sXG4vLyAgIFsxOCwgMTksIDIyLCAyMV0sXG4vLyAgIFsxOSwgNCwgMjJdLFxuLy8gICBbMCwgMjAsIDIzXSxcbi8vICAgWzIwLCAyMSwgMjQsIDIzXSxcbi8vICAgWzIxLCAyMiwgMjUsIDI0XSxcbi8vICAgWzIyLCA0LCAyNV0sXG4vLyAgIFswLCAyMywgMjZdLFxuLy8gICBbMjMsIDI0LCAyNywgMjZdLFxuLy8gICBbMjQsIDI1LCAyOCwgMjddLFxuLy8gICBbMjUsIDQsIDI4XSxcbi8vICAgWzAsIDI2LCAyOV0sXG4vLyAgIFsyNiwgMjcsIDMwLCAyOV0sXG4vLyAgIFsyNywgMjgsIDMxLCAzMF0sXG4vLyAgIFsyOCwgNCwgMzFdLFxuLy8gICBbMCwgMjksIDFdLFxuLy8gICBbMjksIDMwLCAyLCAxXSxcbi8vICAgWzMwLCAzMSwgMywgMl0sXG4vLyAgIFszMSwgNCwgM11cbi8vIF07XG4vLyBtb2RlbC5jb2xvckluaXQoKTtcbi8qKioqKioqKioqKioqKioqKioqKiBkZWJ1ZyAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IHBhcmFtZXRlcnMsIGNhbWVyYSwgbW9kZWwgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTQgMTU6MTg6NTJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAyMjozOToxOFxuICovXG5pbXBvcnQgeyBwYXJhbWV0ZXJzIH0gZnJvbSAnLi9jb25maWdzL3BhcmFtZXRlcnMnO1xuaW1wb3J0IGxvYWRGaWxlIGZyb20gJy4vdXRpbHMvbG9hZEZpbGUnO1xuaW1wb3J0IHsgbG9hZE1lbnUsIGJpbmRTbGlkZXIsIHJlYWN0VG9PcGVyYXRpb24gfSBmcm9tICcuL3V0aWxzL2RvbSc7XG4vKioqKioqKioqKioqKioqKioqKiogSW5pdGlhbGl6ZSBET00gKioqKioqKioqKioqKioqKioqKiovXG4vLyBHZXQgY2FudmFzIHJlYWR5XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbmNvbnN0IHdpZHRoID0gY2FudmFzLndpZHRoO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4vLyBMb2FkIGFsbCBtb2RlbCBvcHRpb25zIHRvIG1lbnVcbmNvbnN0IGNob29zZV9tb2RlbDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QuY2hvb3NlX21vZGVsMScpO1xuY29uc3QgY2hvb3NlX21vZGVsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdC5jaG9vc2VfbW9kZWwyJyk7XG5sb2FkTWVudShjaG9vc2VfbW9kZWwxKTtcbmxvYWRNZW51KGNob29zZV9tb2RlbDIpO1xuLy8gLy8gR2V0IHRocmVlIHNsaWRlcyByZWFkeSBiaW5kaW5nIHdpdGggaCwgZCwgZiBwYXJhbWV0ZXJcblsnaCcsICdkJywgJ2YnXS5mb3JFYWNoKGl0ZW0gPT4gYmluZFNsaWRlcihpdGVtLCBkcmF3KSk7XG4vLyBCdXR0b25cbi8vIEJpbmQgcmVuZGVyIGJ1dHRvbiB3aXRoIGxvYWQgZmlsZSBhbmQgcmVuZGVyIG9wZXJ0aW9uXG5jb25zdCByZW5kZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVuZGVyJyk7XG5yZW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbW9kZWxJbmRleDEgPSBjaG9vc2VfbW9kZWwxLnNlbGVjdGVkSW5kZXg7XG4gICAgY29uc3QgbW9kZWxJbmRleDIgPSBjaG9vc2VfbW9kZWwyLnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKG1vZGVsSW5kZXgxID09PSAwIHx8IG1vZGVsSW5kZXgyID09PSAwKSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgbW9kZWwgdG8gcmVuZGVyJyk7XG4gICAgfVxuICAgIGxldCBtb2RlbE5hbWVzID0gW107XG4gICAgbW9kZWxOYW1lcy5wdXNoKGNob29zZV9tb2RlbDEub3B0aW9uc1ttb2RlbEluZGV4MV0udmFsdWUpO1xuICAgIG1vZGVsTmFtZXMucHVzaChjaG9vc2VfbW9kZWwyLm9wdGlvbnNbbW9kZWxJbmRleDJdLnZhbHVlKTtcbiAgICBtb2RlbE5hbWVzID0gbW9kZWxOYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGAuL3B1YmxpYy9tb2RlbC8ke25hbWV9LmQudHh0YDtcbiAgICB9KTtcbiAgICBsb2FkRmlsZShtb2RlbE5hbWVzLCBkcmF3KTtcbiAgICByZW5kZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xufSk7XG4vLyBiaW5kIHJlc2V0IGJ1dHRvbiB3aXRoIHJlZnJlc2ggZnVuY3Rpb25cbmNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XG5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuLyoqKioqKioqKioqKioqKioqKioqIEluaXRpYWxpemUgRGF0YSAqKioqKioqKioqKioqKioqKioqKi9cbnBhcmFtZXRlcnMud2lkdGggPSB3aWR0aDtcbnBhcmFtZXRlcnMuaGVpZ2h0ID0gaGVpZ2h0O1xuLy8gLy8gQmluZGluZyBvcGVyYXRpb25cbnJlYWN0VG9PcGVyYXRpb24oY2FudmFzLCBkcmF3KTtcbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgLy8gY2xlYXIgYmVmb3JlIGltYWdlXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAvLyBkcmF3XG4gICAgY29uc3QgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcbiAgICBjb25zdCBpQnVmZmVyID0gcGFyYW1ldGVycy5pQnVmZmVyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gaSAqIHdpZHRoICsgajtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gaUJ1ZmZlcltpXVtqXTtcbiAgICAgICAgICAgIGRhdGFbdCAqIDQgKyAwXSA9IGNvbG9yLnI7XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgMV0gPSBjb2xvci5nO1xuICAgICAgICAgICAgZGF0YVt0ICogNCArIDJdID0gY29sb3IuYjtcbiAgICAgICAgICAgIGRhdGFbdCAqIDQgKyAzXSA9IGNvbG9yLmE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW1hZ2VEYXRhLmRhdGEuc2V0KGRhdGEpO1xuICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcbn1cbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTkgMTg6MjU6MjRcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAyMjoxMDowM1xuICovXG5pbXBvcnQgeyBtb2RlbCwgY2FtZXJhLCBwYXJhbWV0ZXJzIH0gZnJvbSAnLi4vY29uZmlncy9wYXJhbWV0ZXJzJztcbmltcG9ydCB7IGJhY2tGYWNlQ3VsbGluZywgY2FsY01vZGVsLCBzY2FuQ29udmVyc2lvbiB9IGZyb20gJy4uLy4uL2xpYi9pbmRleCc7XG5jb25zdCBjYWxjQWxsID0gKCkgPT4ge1xuICAgIGNhbWVyYS5jYWxjTlVWKCk7XG4gICAgbW9kZWwuYmFja0ZhY2VTZXQgPSBiYWNrRmFjZUN1bGxpbmcobW9kZWwsIGNhbWVyYSk7XG4gICAgbW9kZWwuY2FsY1BvaW50cyA9IGNhbGNNb2RlbChtb2RlbCwgY2FtZXJhLCBwYXJhbWV0ZXJzLmgsIHBhcmFtZXRlcnMuZCwgcGFyYW1ldGVycy5mKTtcbiAgICBwYXJhbWV0ZXJzLmlCdWZmZXIgPSBzY2FuQ29udmVyc2lvbihtb2RlbCwgcGFyYW1ldGVycy5oZWlnaHQsIHBhcmFtZXRlcnMud2lkdGgpO1xufTtcbmV4cG9ydCB7IGNhbGNBbGwgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTQgMTg6NTU6NTFcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAyMjozODozNVxuICovXG4vKioqKioqKioqKioqKioqKioqKiogRE9NIE9QRVJBVElPTiAqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCB7IHBhcmFtZXRlcnMsIGNhbWVyYSB9IGZyb20gJy4uL2NvbmZpZ3MvcGFyYW1ldGVycyc7XG5pbXBvcnQgeyBmaWxlcyB9IGZyb20gJy4uL2NvbmZpZ3MvY29uc3RhbnRzJztcbmltcG9ydCB7IGNhbGNBbGwgfSBmcm9tICcuLi91dGlscy9jYWxjQWxsJztcbi8qKlxuICogTG9hZCBtZW51XG4gKiBAcGFyYW0gc2VsZWN0RE9NXG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkTWVudSA9IChzZWxlY3RET00pID0+IHtcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGZpbGUpO1xuICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZmlsZSkpO1xuICAgICAgICBzZWxlY3RET00uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIEJpbmQgdGhlIHZhbHVlIG9mIHNsaWRlciB3aXRoIGNhbWVyYSBzZXR0aW5nXG4gKiBAcGFyYW0gbmFtZVxuICovXG5leHBvcnQgY29uc3QgYmluZFNsaWRlciA9IChuYW1lLCBkcmF3KSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bmFtZX1gKTtcbiAgICBjb25zdCBzbGlkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bmFtZX1fVmApO1xuICAgIHNsaWRlci52YWx1ZSA9IHBhcmFtZXRlcnNbbmFtZV07XG4gICAgc2xpZGVyVGV4dC5pbm5lckhUTUwgPSBwYXJhbWV0ZXJzW25hbWVdO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBhcmFtZXRlcnNbbmFtZV0gPSB0aGlzLnZhbHVlO1xuICAgICAgICBzbGlkZXJUZXh0LmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGNhbGNBbGwoKTtcbiAgICAgICAgZHJhdygpO1xuICAgIH0pO1xufTtcbi8qKlxuICogQmluZCBvcGVyYXRpb24gdG8gY29udHJvbCB0aGUgZmluYWwgZWZmZWN0XG4gKi9cbmNvbnN0IGNhbWVyYUxlbiA9IDI7XG5leHBvcnQgY29uc3QgcmVhY3RUb09wZXJhdGlvbiA9IChjYW52YXMsIGRyYXcpID0+IHtcbiAgICAvLyB6b29taW5nIHRoZSBtb2RlbFxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC53aGVlbERlbHRhID4gMCkge1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uLnNjYWxlKDYgLyA1KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbiA9IGNhbWVyYS5wb3NpdGlvbi5zY2FsZSg1IC8gNik7XG4gICAgICAgIH1cbiAgICAgICAgY2FsY0FsbCgpO1xuICAgICAgICBkcmF3KCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdpJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSArPSBjYW1lcmFMZW47XG4gICAgICAgICAgICAgICAgY2FsY0FsbCgpO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2snOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55IC09IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBjYWxjQWxsKCk7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaic6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggLT0gY2FtZXJhTGVuO1xuICAgICAgICAgICAgICAgIGNhbGNBbGwoKTtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCArPSBjYW1lcmFMZW47XG4gICAgICAgICAgICAgICAgY2FsY0FsbCgpO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTEyIDE1OjA4OjUxXG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMjI6Mzc6MzFcbiAqL1xuaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuLi9jb25maWdzL3BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgVmVjdG9yM2QgfSBmcm9tICcuLi8uLi9saWIvaW5kZXgnO1xuaW1wb3J0IHsgY2FsY0FsbCB9IGZyb20gJy4vY2FsY0FsbCc7XG4vKipcbiAqIFBhcnNlIHRoZSBkYXRhIGZyb20gdGhlIC5kIGZpbGUsIHJldHVybiBhIE1vZGVsXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIG9ialBvc2l0aW9uXG4gKi9cbmNvbnN0IHBhcnNlRmlsZSA9IChkYXRhLCBvYmpQb3NpdGlvbikgPT4ge1xuICAgIGxldCBsaW5lcyA9IGRhdGEubWF0Y2goL1teXFxyXFxuXSsvZyk7XG4gICAgbGV0IFtudW0sIHBvaW50c051bSwgZmFjZXNOdW1dID0gbGluZXNbMF0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgLy8gQ2F1c2UgaW4gc29tZSBmaWxlLCB0aGVyZSBhcmUganVzdCB0d28gbnVtYmVyIGluIGZpcnN0IGxpbmVcbiAgICBpZiAoZmFjZXNOdW0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZhY2VzTnVtID0gcG9pbnRzTnVtO1xuICAgICAgICBwb2ludHNOdW0gPSBudW07XG4gICAgfVxuICAgIGNvbnN0IFtwTnVtLCBmTnVtXSA9IFtwYXJzZUludChwb2ludHNOdW0sIDEwKSwgcGFyc2VJbnQoZmFjZXNOdW0pXTtcbiAgICAvLyBsb2FkIGRhdGEgdG8gbW9kZWxcbiAgICBjb25zdCBsYXN0TW9kZWxQb2ludHNOdW0gPSBtb2RlbC5wb2ludHMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBOdW07IGkrKykge1xuICAgICAgICBsZXQgW3gsIHksIHpdID0gbGluZXNbaV0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIG1vZGVsLnBvaW50cy5wdXNoKG5ldyBWZWN0b3IzZChwYXJzZUZsb2F0KHgpICsgb2JqUG9zaXRpb24ueCwgcGFyc2VGbG9hdCh5KSArIG9ialBvc2l0aW9uLnksIHBhcnNlRmxvYXQoeikgKyBvYmpQb3NpdGlvbi56KSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBwTnVtICsgMTsgaSA8PSBwTnVtICsgZk51bTsgaSsrKSB7XG4gICAgICAgIGxldCBbXywgLi4ucmVzXSA9IGxpbmVzW2ldLnRyaW0oKS5zcGxpdCgvXFxzKy8pO1xuICAgICAgICBpZiAocmVzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIG1vZGVsLmZhY2VzLnB1c2gocmVzLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCwgMTApIC0gMSArIGxhc3RNb2RlbFBvaW50c051bSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcbiAgICByZXR1cm4gbW9kZWw7XG59O1xuLyoqXG4gKiBSZWFkIHRoZSBjb250ZW50IG9mIGEgZmlsZVxuICogQHBhcmFtIGZpbGVQYXRoXG4gKi9cbmNvbnN0IHJlYWRGaWxlID0gKGZpbGVQYXRoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBmaWxlUGF0aCwgdHJ1ZSk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIExvYWQgYW5kIHJlbmRlciBzZWxlY3RlZCBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVQYXRoXG4gKi9cbmNvbnN0IGxvYWRGaWxlID0gKGZpbGVQYXRocywgZHJhdykgPT4ge1xuICAgIGlmIChmaWxlUGF0aHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgbW9kZWwuY29sb3JJbml0KCk7XG4gICAgICAgIGNhbGNBbGwoKTtcbiAgICAgICAgZHJhdygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVQYXRocy5wb3AoKTtcbiAgICAgICAgcmVhZEZpbGUoZmlsZSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBwYXJzZUZpbGUoZGF0YSwgbmV3IFZlY3RvcjNkKDAsIDAsIDApKTtcbiAgICAgICAgICAgIGxvYWRGaWxlKGZpbGVQYXRocywgZHJhdyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWQgb3IgcGFyc2UgZmlsZSR7ZmlsZX0gZXJyb3JgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvYWRGaWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==