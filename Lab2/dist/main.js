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
 * @Last Modified time: 2019-02-19 22:51:41
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
const scanConversion = (model, calcPoints, backFaceSet, height, width) => {
    const [iBuffer, zBuffer] = bufferInit(height, width);
    let activeEdgeTable = [];
    // for each face
    model.faces.forEach((face, index) => {
        // don't need to consider back face
        if (backFaceSet.has(index))
            return;
        // build edge table
        const edgeTable = edgeTableInit(height);
        for (let i = 0; i < face.length; i++) {
            // get an edge 
            let lowerPoint = calcPoints[face[i]];
            let upperPoint = calcPoints[face[(i + 1) % face.length]];
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
 * @Last Modified time: 2019-02-19 22:54:14
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
/* harmony import */ var _utils_calcAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/calcAll */ "./src/utils/calcAll.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-14 15:18:52
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 22:52:15
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
    const iBuffer = Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_3__["calcAll"])(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"]);
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
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/index */ "./lib/index.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-19 18:25:24
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 22:52:12
 */

const calcAll = (model, camera, parameters) => {
    camera.calcNUV();
    const backFaceSet = Object(_lib_index__WEBPACK_IMPORTED_MODULE_0__["backFaceCulling"])(model, camera);
    const calcPoints = Object(_lib_index__WEBPACK_IMPORTED_MODULE_0__["calcModel"])(model, camera, parameters.h, parameters.d, parameters.f);
    return Object(_lib_index__WEBPACK_IMPORTED_MODULE_0__["scanConversion"])(model, calcPoints, backFaceSet, parameters.height, parameters.width);
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
/*
 * @Author: GXwar
 * @Date: 2019-02-14 18:55:51
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 22:54:29
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
        draw();
    });
    document.addEventListener('keypress', function (e) {
        switch (e.key) {
            case 'i':
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.y += cameraLen;
                draw();
                break;
            case 'k':
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.y -= cameraLen;
                draw();
                break;
            case 'j':
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.x -= cameraLen;
                draw();
                break;
            case 'l':
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.x += cameraLen;
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
/*
 * @Author: GXwar
 * @Date: 2019-02-12 15:08:51
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 22:54:34
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NhbWVyYXMvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvbWF0aC9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL21hdGgvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXRoL1ZlY3RvcjNkLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXRoL1ZlY3RvcjRkLnRzIiwid2VicGFjazovLy8uL2xpYi9vYmplY3RzL0VkZ2VUYWJsZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvUkdCQS50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL2ZpbGxQaXhlbC50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL21vZGVsaW5nLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlscy9yYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy9wYXJhbWV0ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2FsY0FsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9sb2FkRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdD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QUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImNsYXNzIENhbWVyYSB7XG4gICAgY29uc3RydWN0b3IocG9zaXRpb24sIFVQLCBwUmVmKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5VUCA9IFVQO1xuICAgICAgICB0aGlzLnBSZWYgPSBwUmVmO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBjYWxjdWxhdGUgdGhlIE4sIFUsIFYgdmVjdG9yIG9mIHRoZSBjYW1lcmFcbiAgICAgKiBAcGFyYW0gb2JqZWN0UG9zaXRpb25cbiAgICAgKi9cbiAgICBjYWxjTlVWKCkge1xuICAgICAgICB0aGlzLk4gPSB0aGlzLnBSZWYuc3VidHJhY3QodGhpcy5wb3NpdGlvbikudW5pdCgpO1xuICAgICAgICB0aGlzLlUgPSB0aGlzLk4uY3Jvc3NQcm9kdWN0KHRoaXMuVVApLnVuaXQoKTtcbiAgICAgICAgdGhpcy5WID0gdGhpcy5VLmNyb3NzUHJvZHVjdCh0aGlzLk4pO1xuICAgIH1cbn1cbmV4cG9ydCB7IENhbWVyYSB9O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqIC4vY2FtZXJhcyAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IENhbWVyYSB9IGZyb20gJy4vY2FtZXJhcy9DYW1lcmEnO1xuLyoqKioqKioqKioqKioqKioqKioqIC4vbWF0aCAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IE1hdHJpeCB9IGZyb20gJy4vbWF0aC9NYXRyaXgnO1xuZXhwb3J0IHsgVmVjdG9yM2QgfSBmcm9tICcuL21hdGgvVmVjdG9yM2QnO1xuZXhwb3J0IHsgVmVjdG9yNGQgfSBmcm9tICcuL21hdGgvVmVjdG9yNGQnO1xuLyoqKioqKioqKioqKioqKioqKioqIC4vb2JqZWN0cyAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IEVkZ2VUYWJsZUVsZW1lbnQgfSBmcm9tICcuL29iamVjdHMvRWRnZVRhYmxlRWxlbWVudCc7XG5leHBvcnQgeyBNb2RlbCB9IGZyb20gJy4vb2JqZWN0cy9Nb2RlbCc7XG5leHBvcnQgeyBSR0JBIH0gZnJvbSAnLi9vYmplY3RzL1JHQkEnO1xuLyoqKioqKioqKioqKioqKioqKioqIC4vdHJhbnNmb3JtICoqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IHsgYmFja0ZhY2VDdWxsaW5nLCBjYWxjTW9kZWwgfSBmcm9tICcuL3RyYW5zZm9ybS9tb2RlbGluZyc7XG5leHBvcnQgeyBidWZmZXJJbml0LCBzY2FuQ29udmVyc2lvbiB9IGZyb20gJy4vdHJhbnNmb3JtL2ZpbGxQaXhlbCc7XG4iLCJpbXBvcnQgeyBWZWN0b3I0ZCB9IGZyb20gJy4vVmVjdG9yNGQnO1xuY2xhc3MgTWF0cml4IHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXNPck0sIG4pIHtcbiAgICAgICAgaWYgKHZhbHVlc09yTSAhPT0gdW5kZWZpbmVkICYmIG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzT3JNOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKEFycmF5LmZyb20oeyBsZW5ndGg6IG4gfSwgXyA9PiAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWVzT3JNICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzT3JNO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBtdWx0aXBseSB3aXRoIG90aGVyIG1hdHJpeCwgcmV0dXJuIGEgbmV3IG1hdHJpeFxuICAgICAqIEBwYXJhbSBvdGhlclxuICAgICAqL1xuICAgIG11bHRpcGx5KG90aGVyKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlc1swXS5sZW5ndGggIT09IG90aGVyLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IG11bHRpcGx5IHRoZXNlIHR3byBtYXRyaWNlcyEnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtID0gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBuID0gb3RoZXIudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgayA9IG90aGVyLnZhbHVlc1swXS5sZW5ndGg7XG4gICAgICAgIC8vIG11bHRpcGx5XG4gICAgICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobSwgayk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGs7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgbjsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeC52YWx1ZXNbaV1bal0gKz0gdGhpcy52YWx1ZXNbaV1bdF0gKiBvdGhlci52YWx1ZXNbdF1bal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgfVxuICAgIDtcbiAgICB0b1ZlY3RvcigpIHtcbiAgICAgICAgY29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcjRkKHRoaXMudmFsdWVzWzBdWzBdLCB0aGlzLnZhbHVlc1sxXVswXSwgdGhpcy52YWx1ZXNbMl1bMF0sIHRoaXMudmFsdWVzWzNdWzBdKTtcbiAgICAgICAgcmV0dXJuIHZlY3Rvci5jb2xsYXBzZSgpO1xuICAgIH1cbn1cbmV4cG9ydCB7IE1hdHJpeCB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xOSAxNDozNzowM1xuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE0OjQwOjI1XG4gKi9cbmNsYXNzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cbmV4cG9ydCB7IFZlY3RvciB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xNSAwMTozMjoxNlxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE1OjMwOjIxXG4gKi9cbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJztcbmltcG9ydCB7IFZlY3RvcjRkIH0gZnJvbSBcIi4vVmVjdG9yNGRcIjtcbmNsYXNzIFZlY3RvcjNkIGV4dGVuZHMgVmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XG4gICAgICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN1cGVyKDAsIDApO1xuICAgICAgICAgICAgdGhpcy56ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyKHgsIHkpO1xuICAgICAgICAgICAgdGhpcy56ID0gejtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHRlbmQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNGQodGhpcy54LCB0aGlzLnksIHRoaXMueiwgMSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCB0aGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhlIHZlY3RvclxuICAgICAqL1xuICAgIGFicygpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnopO1xuICAgIH1cbiAgICBhZGQob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnggKyBvdGhlci54LCB0aGlzLnkgKyBvdGhlci55LCB0aGlzLnogKyBvdGhlci56KTtcbiAgICB9XG4gICAgc3VidHJhY3Qob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnggLSBvdGhlci54LCB0aGlzLnkgLSBvdGhlci55LCB0aGlzLnogLSBvdGhlci56KTtcbiAgICB9XG4gICAgc2NhbGUobikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCAqIG4sIHRoaXMueSAqIG4sIHRoaXMueiAqIG4pO1xuICAgIH1cbiAgICB1bml0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZSgxIC8gdGhpcy5hYnMoKSk7XG4gICAgfVxuICAgIGNyb3NzUHJvZHVjdChvdGhlcikge1xuICAgICAgICAvLyByZXR1cm4gW1xuICAgICAgICAvLyAgIHZlYzFbMV0gKiB2ZWMyWzJdIC0gdmVjMlsxXSAqIHZlYzFbMl0sXG4gICAgICAgIC8vICAgLSh2ZWMxWzBdICogdmVjMlsyXSAtIHZlYzJbMF0gKiB2ZWMxWzJdKSxcbiAgICAgICAgLy8gICB2ZWMxWzBdICogdmVjMlsxXSAtIHZlYzJbMF0gKiB2ZWMxWzFdXG4gICAgICAgIC8vIF07XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM2QodGhpcy55ICogb3RoZXIueiAtIG90aGVyLnkgKiB0aGlzLnosIC0odGhpcy54ICogb3RoZXIueiAtIG90aGVyLnggKiB0aGlzLnopLCB0aGlzLnggKiBvdGhlci55IC0gb3RoZXIueCAqIHRoaXMueSk7XG4gICAgfVxuICAgIGRvdFByb2R1Y3Qob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIG90aGVyLnggKyB0aGlzLnkgKiBvdGhlci55ICsgdGhpcy56ICogb3RoZXIuejtcbiAgICB9XG59XG5leHBvcnQgeyBWZWN0b3IzZCB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xNSAwMTozMTo1M1xuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE0OjQxOjMwXG4gKi9cbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJztcbmltcG9ydCB7IFZlY3RvcjNkIH0gZnJvbSAnLi9WZWN0b3IzZCc7XG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tICcuL01hdHJpeCc7XG5jbGFzcyBWZWN0b3I0ZCBleHRlbmRzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgeiwgdykge1xuICAgICAgICBzdXBlcih4LCB5KTtcbiAgICAgICAgdGhpcy56ID0gejtcbiAgICAgICAgdGhpcy53ID0gdztcbiAgICB9XG4gICAgY29sbGFwc2UoKSB7XG4gICAgICAgIGxldCB0ID0gdGhpcy53O1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCAvIHQsIHRoaXMueSAvIHQsIHRoaXMueiAvIHQpO1xuICAgIH1cbiAgICB0b01hdHJpeCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoW1xuICAgICAgICAgICAgW3RoaXMueF0sXG4gICAgICAgICAgICBbdGhpcy55XSxcbiAgICAgICAgICAgIFt0aGlzLnpdLFxuICAgICAgICAgICAgW3RoaXMud11cbiAgICAgICAgXSk7XG4gICAgfVxufVxuZXhwb3J0IHsgVmVjdG9yNGQgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTcgMjE6Mzc6MTBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDAxOjM0OjA2XG4gKi9cbmNsYXNzIEVkZ2VUYWJsZUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHlTdGFydCwgeU1heCwgeFN0YXJ0LCBkZWx0YSwgelVwcGVyLCB6TG93ZXIpIHtcbiAgICAgICAgdGhpcy55U3RhcnQgPSB5U3RhcnQ7XG4gICAgICAgIHRoaXMueU1heCA9IHlNYXg7XG4gICAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgICB0aGlzLmRlbHRhID0gZGVsdGE7XG4gICAgICAgIHRoaXMuelVwcGVyID0gelVwcGVyO1xuICAgICAgICB0aGlzLnpMb3dlciA9IHpMb3dlcjtcbiAgICB9XG59XG47XG5leHBvcnQgeyBFZGdlVGFibGVFbGVtZW50IH07XG4iLCJpbXBvcnQgeyBSR0JBIH0gZnJvbSBcIi4vUkdCQVwiO1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vdXRpbHMvcmFuZCc7XG5jbGFzcyBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIHRoaXMuZmFjZXMgPSBbXTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbG9yID0gW107XG4gICAgfVxuICAgIGNvbG9ySW5pdCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZhY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzQ29sb3IucHVzaChuZXcgUkdCQShyYW5kb20oKSwgcmFuZG9tKCksIHJhbmRvbSgpLCAyNTUpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCB7IE1vZGVsIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE5IDE2OjM3OjQ5XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMTY6NDU6NTVcbiAqL1xuY2xhc3MgUkdCQSB7XG4gICAgY29uc3RydWN0b3IociA9IDAsIGcgPSAwLCBiID0gMCwgYSA9IDI1NSkge1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmcgPSBnO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgIH1cbn1cbmV4cG9ydCB7IFJHQkEgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTcgMTQ6NDQ6MzJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAyMjo1MTo0MVxuICovXG4vKioqKioqKioqKioqKioqKioqKiogRklMTCBQSVhFTFMgKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgeyBFZGdlVGFibGVFbGVtZW50LCBSR0JBIH0gZnJvbSAnLi4vLi4vbGliL2luZGV4Jztcbi8vIGNvbnZlcnQgMmQgcG9pbnQgdG8gY2FudmFzIHBvaW50XG5jb25zdCB0b1BpeGVsID0gKHZhbHVlLCBoZWlnaHQsIHNob3J0dGVuID0gZmFsc2UpID0+IE1hdGguZmxvb3IoKHZhbHVlICsgMSkgKiBoZWlnaHQgLyAyKSAtIChzaG9ydHRlbiA/IDEgOiAwKTtcbmNvbnN0IHRvRmxvYXRQaXhlbCA9ICh2YWx1ZSwgaGVpZ2h0KSA9PiAodmFsdWUgKyAxKSAqIGhlaWdodCAvIDI7XG5jb25zdCBidWZmZXJJbml0ID0gKGhlaWdodCwgd2lkdGgpID0+IHtcbiAgICBjb25zdCBpQnVmZmVyID0gW107XG4gICAgY29uc3QgekJ1ZmZlciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgaUJ1ZmZlcltpXSA9IFtdO1xuICAgICAgICB6QnVmZmVyW2ldID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgaUJ1ZmZlcltpXVtqXSA9IG5ldyBSR0JBKCk7XG4gICAgICAgICAgICB6QnVmZmVyW2ldW2pdID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2lCdWZmZXIsIHpCdWZmZXJdO1xufTtcbmNvbnN0IGVkZ2VUYWJsZUluaXQgPSAoaGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgZWRnZVRhYmxlID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICBlZGdlVGFibGVbaV0gPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGVkZ2VUYWJsZTtcbn07XG4vKipcbiAqIFNjYW4gQ29udmVyc2lvblxuICogMS4gZm9yIGVhY2ggc2NhbiBsaW5lLCBkZXRlcm1pbmUgZWRnZXMgb2YgcG9seWdvbnMgdGhhdCBpbnRlcnNlY3RcbiAqIDIuIEZpbmQgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNwYW5cbiAqIDMuIFJlbHkgb24gc2NhbmxpbmUgYW5kIHBpeGVsIGNvaGVyZW5jZSB0byBsaW5lYXJseSBpbnRlcnBvbGF0ZSAoYmV0d2VlbiBzY2FubGluZXMgYW5kIGJldHdlZW4gcGl4ZWxzKVxuICovXG5jb25zdCBhZGRFZGdlVG9FVCA9IChsb3dlclBvaW50LCB1cHBlclBvaW50LCBlZGdlVGFibGUsIGhlaWdodCkgPT4ge1xuICAgIC8vIGlnbm9yZSBob3Jpem9udGFsIGVkZ2UgYW5kIG91dCBvZiByYW5nZSBwb2ludFxuICAgIGlmICh0b1BpeGVsKGxvd2VyUG9pbnQueSwgaGVpZ2h0KSA9PT0gdG9QaXhlbCh1cHBlclBvaW50LnksIGhlaWdodClcbiAgICAgICAgfHwgbG93ZXJQb2ludC55ID4gMSB8fCBsb3dlclBvaW50LnkgPCAtMSlcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIHN3YXAgdGhlIG9yZGVyIG9mIHR3byBwb2ludHNcbiAgICBpZiAobG93ZXJQb2ludC55ID4gdXBwZXJQb2ludC55KSB7XG4gICAgICAgIFtsb3dlclBvaW50LCB1cHBlclBvaW50XSA9IFt1cHBlclBvaW50LCBsb3dlclBvaW50XTtcbiAgICB9XG4gICAgLy8gY3JlYXRlIGVkZ2UgdGFibGUgZWxlbWVudCBhbmQgYWRkIGl0IGludG8gdGhlIGVkZ2UgdGFibGVcbiAgICBjb25zdCBFVEVsZW1lbnQgPSBuZXcgRWRnZVRhYmxlRWxlbWVudCh0b1BpeGVsKGxvd2VyUG9pbnQueSwgaGVpZ2h0KSwgdG9QaXhlbCh1cHBlclBvaW50LnksIGhlaWdodCwgdHJ1ZSksIHRvRmxvYXRQaXhlbChsb3dlclBvaW50LngsIGhlaWdodCksIChsb3dlclBvaW50LnggLSB1cHBlclBvaW50LngpIC8gKGxvd2VyUG9pbnQueSAtIHVwcGVyUG9pbnQueSksIHVwcGVyUG9pbnQueiwgbG93ZXJQb2ludC56KTtcbiAgICBpZiAoRVRFbGVtZW50LnlTdGFydCA+IEVURWxlbWVudC55TWF4KSB7XG4gICAgICAgIEVURWxlbWVudC55TWF4ID0gRVRFbGVtZW50LnlTdGFydDtcbiAgICB9XG4gICAgZWRnZVRhYmxlW01hdGguZmxvb3IoRVRFbGVtZW50LnlTdGFydCldLnB1c2goRVRFbGVtZW50KTtcbn07XG4vLyBDYWxjdWxhdGlvbiBvZiB6XG5jb25zdCBjYWxjWiA9IChlZGdlLCB5cykgPT4gZWRnZS55TWF4ID09PSBlZGdlLnlTdGFydCA/IGVkZ2UuelVwcGVyIDpcbiAgICBlZGdlLnpVcHBlciAtIChlZGdlLnpVcHBlciAtIGVkZ2Uuekxvd2VyKSAqIChlZGdlLnlNYXggLSB5cykgLyAoZWRnZS55TWF4IC0gZWRnZS55U3RhcnQpO1xuY29uc3Qgc2NhbkNvbnZlcnNpb24gPSAobW9kZWwsIGNhbGNQb2ludHMsIGJhY2tGYWNlU2V0LCBoZWlnaHQsIHdpZHRoKSA9PiB7XG4gICAgY29uc3QgW2lCdWZmZXIsIHpCdWZmZXJdID0gYnVmZmVySW5pdChoZWlnaHQsIHdpZHRoKTtcbiAgICBsZXQgYWN0aXZlRWRnZVRhYmxlID0gW107XG4gICAgLy8gZm9yIGVhY2ggZmFjZVxuICAgIG1vZGVsLmZhY2VzLmZvckVhY2goKGZhY2UsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGRvbid0IG5lZWQgdG8gY29uc2lkZXIgYmFjayBmYWNlXG4gICAgICAgIGlmIChiYWNrRmFjZVNldC5oYXMoaW5kZXgpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBidWlsZCBlZGdlIHRhYmxlXG4gICAgICAgIGNvbnN0IGVkZ2VUYWJsZSA9IGVkZ2VUYWJsZUluaXQoaGVpZ2h0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgYW4gZWRnZSBcbiAgICAgICAgICAgIGxldCBsb3dlclBvaW50ID0gY2FsY1BvaW50c1tmYWNlW2ldXTtcbiAgICAgICAgICAgIGxldCB1cHBlclBvaW50ID0gY2FsY1BvaW50c1tmYWNlWyhpICsgMSkgJSBmYWNlLmxlbmd0aF1dO1xuICAgICAgICAgICAgYWRkRWRnZVRvRVQobG93ZXJQb2ludCwgdXBwZXJQb2ludCwgZWRnZVRhYmxlLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZpbGwgcGl4ZWwgdG8gcGl4ZWwgYnVmZmVyXG4gICAgICAgIGxldCBjdXJyZW50U2NhbkxpbmUgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZWRnZVRhYmxlW2ldLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2NhbkxpbmUgPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50U2NhbkxpbmU7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgLy8gbW92ZSBlZGdlIGZyb20gRWRnZSBUYWJlbCB0byBBY3RpdmUgRWRnZSBUYWJsZVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlZGdlVGFibGVbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVFZGdlVGFibGUucHVzaChlZGdlVGFibGVbaV1bal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aXZlRWRnZVRhYmxlLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS54U3RhcnQgLSBiLnhTdGFydDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogKyAxIDwgYWN0aXZlRWRnZVRhYmxlLmxlbmd0aDsgaiArPSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IFthY3RpdmVFZGdlVGFibGVbal0sIGFjdGl2ZUVkZ2VUYWJsZVtqICsgMV1dO1xuICAgICAgICAgICAgICAgIGlmIChsZWZ0LnhTdGFydCA+IHJpZ2h0LnhTdGFydClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgW3phLCB6Yl0gPSBbY2FsY1oobGVmdCwgaSksIGNhbGNaKHJpZ2h0LCBpKV07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3IobGVmdC54U3RhcnQpKTsgayA8IE1hdGguZmxvb3IocmlnaHQueFN0YXJ0KSAmJiBrIDwgd2lkdGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGN1cnJlbnQgcG9pbnQncyB6IGNvb3JkaW5hdGVcbiAgICAgICAgICAgICAgICAgICAgbGV0IHpwID0gayA9PSBNYXRoLm1heCgwLCBsZWZ0LnhTdGFydCkgPyB6YSA6IHpiIC0gKHpiIC0gemEpICogKHJpZ2h0LnhTdGFydCAtIGspIC8gKHJpZ2h0LnhTdGFydCAtIGxlZnQueFN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHpwID4gekJ1ZmZlcltpXVtrXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB6QnVmZmVyW2ldW2tdID0genA7XG4gICAgICAgICAgICAgICAgICAgIGlCdWZmZXJbaV1ba10gPSBtb2RlbC5mYWNlc0NvbG9yW2luZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3RpdmVFZGdlVGFibGUgPSBhY3RpdmVFZGdlVGFibGVcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGVkZ2UgPT4gZWRnZS55TWF4ICE9PSBpKSAvLyByZW1vdmUgZWRnZSBmcm9tIEFjdGl2ZSBFZGdlIFRhYmxlIHdoaWxlIHkgPSB5TWF4XG4gICAgICAgICAgICAgICAgLm1hcChlZGdlID0+IHtcbiAgICAgICAgICAgICAgICBlZGdlLnhTdGFydCArPSBlZGdlLmRlbHRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBlZGdlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaUJ1ZmZlcjtcbn07XG5leHBvcnQgeyBidWZmZXJJbml0LCBzY2FuQ29udmVyc2lvbiB9O1xuIiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnLi4vbWF0aC9NYXRyaXgnO1xuY29uc3Qgd29ybGQyQ2FtZXJhID0gKGNhbWVyYSkgPT4ge1xuICAgIGNvbnN0IFIgPSBuZXcgTWF0cml4KFtcbiAgICAgICAgW2NhbWVyYS5VLngsIGNhbWVyYS5VLnksIGNhbWVyYS5VLnosIDBdLFxuICAgICAgICBbY2FtZXJhLlYueCwgY2FtZXJhLlYueSwgY2FtZXJhLlYueiwgMF0sXG4gICAgICAgIFtjYW1lcmEuTi54LCBjYW1lcmEuTi55LCBjYW1lcmEuTi56LCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDFdXG4gICAgXSk7XG4gICAgY29uc3QgVCA9IG5ldyBNYXRyaXgoW1xuICAgICAgICBbMSwgMCwgMCwgLWNhbWVyYS5wb3NpdGlvbi54XSxcbiAgICAgICAgWzAsIDEsIDAsIC1jYW1lcmEucG9zaXRpb24ueV0sXG4gICAgICAgIFswLCAwLCAxLCAtY2FtZXJhLnBvc2l0aW9uLnpdLFxuICAgICAgICBbMCwgMCwgMCwgMV1cbiAgICBdKTtcbiAgICByZXR1cm4gUi5tdWx0aXBseShUKTtcbn07XG5jb25zdCBwZXJzcGVjdGl2ZVRyYW5zZm9ybSA9IChoLCBkLCBmKSA9PiBuZXcgTWF0cml4KFtcbiAgICBbZCAvIGgsIDAsIDAsIDBdLFxuICAgIFswLCBkIC8gaCwgMCwgMF0sXG4gICAgWzAsIDAsIGYgLyAoZiAtIGQpLCAtZCAqIGYgLyAoZiAtIGQpXSxcbiAgICBbMCwgMCwgMSwgMF1cbl0pO1xuLyoqXG4gKiBCYWNrLWZhY2UgY3VsbGluZ1xuICogVmlzaWJsZSBpZiBOcCBkb3QgcHJvZHVjdCBOID4gMFxuICogTm90ZTogU29tZSB0aGUgcG9seWdvbnMgYXJlIGRlbm90ZWQgaW4gYW50aS1jbG9ja3dpc2Ugb3JkZXJcbiAqL1xuY29uc3QgYmFja0ZhY2VDdWxsaW5nID0gKG1vZGVsLCBjYW1lcmEpID0+IHtcbiAgICBjb25zdCBiYWNrRmFjZVNldCA9IG5ldyBTZXQoKTtcbiAgICBtb2RlbC5mYWNlcy5mb3JFYWNoKChmYWNlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB2MSA9IG1vZGVsLnBvaW50c1tmYWNlWzFdXS5zdWJ0cmFjdChtb2RlbC5wb2ludHNbZmFjZVswXV0pO1xuICAgICAgICBjb25zdCB2MiA9IG1vZGVsLnBvaW50c1tmYWNlWzJdXS5zdWJ0cmFjdChtb2RlbC5wb2ludHNbZmFjZVsxXV0pO1xuICAgICAgICBjb25zdCBOcCA9IHYxLmNyb3NzUHJvZHVjdCh2Mik7XG4gICAgICAgIGNvbnN0IE4gPSBjYW1lcmEucG9zaXRpb24uc3VidHJhY3QobW9kZWwucG9pbnRzW2ZhY2VbMF1dKTtcbiAgICAgICAgaWYgKE5wLmRvdFByb2R1Y3QoTikgPj0gMCkge1xuICAgICAgICAgICAgYmFja0ZhY2VTZXQuYWRkKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBiYWNrRmFjZVNldDtcbn07XG4vLyBDYWxjdWxhdGUgbW9kZWxcbmNvbnN0IGNhbGNNb2RlbCA9IChtb2RlbCwgY2FtZXJhLCBoLCBkLCBmKSA9PiB7XG4gICAgY29uc3QgY29tYm8gPSBwZXJzcGVjdGl2ZVRyYW5zZm9ybShoLCBkLCBmKS5tdWx0aXBseSh3b3JsZDJDYW1lcmEoY2FtZXJhKSk7XG4gICAgcmV0dXJuIG1vZGVsLnBvaW50cy5tYXAocG9pbnQgPT4ge1xuICAgICAgICByZXR1cm4gY29tYm8ubXVsdGlwbHkocG9pbnQuZXh0ZW5kKCkudG9NYXRyaXgoKSkudG9WZWN0b3IoKTtcbiAgICB9KTtcbn07XG5leHBvcnQgeyBiYWNrRmFjZUN1bGxpbmcsIGNhbGNNb2RlbCB9O1xuIiwiLyoqXG4gKiBHZXQgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgMjU1KGJvdGggaW5jbHVzaXZlKTtcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTEwIDAxOjMzOjQ1XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMTk6MTU6MDhcbiAqL1xuLy8gZGF0YSBmaWxlcyB0byBiZSBsb2FkZWRcbmNvbnN0IGZpbGVzID0gW1xuICAgICdhdGMnLFxuICAgICdiYWxsJyxcbiAgICAnYmVuY2gnLFxuICAgICdjb3cnLFxuICAgICdjb25lJyxcbiAgICAna25pZ2h0J1xuXTtcbmV4cG9ydCB7IGZpbGVzIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE4IDAxOjMzOjU2XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMjI6NTQ6MTRcbiAqL1xuaW1wb3J0IHsgQ2FtZXJhLCBNb2RlbCwgVmVjdG9yM2QgfSBmcm9tICcuLi8uLi9saWIvaW5kZXgnO1xuY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBoOiAxLFxuICAgIGQ6IDEsXG4gICAgZjogMTAwMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaUJ1ZmZlcjogW11cbn07XG5jb25zdCBjYW1lcmEgPSBuZXcgQ2FtZXJhKG5ldyBWZWN0b3IzZCgwLCAyMCwgMjApLCBuZXcgVmVjdG9yM2QoMCwgLTEsIDApLCBuZXcgVmVjdG9yM2QoMCwgMCwgMCkpO1xuY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoKTtcbmV4cG9ydCB7IHBhcmFtZXRlcnMsIGNhbWVyYSwgbW9kZWwgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTQgMTU6MTg6NTJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAyMjo1MjoxNVxuICovXG5pbXBvcnQgeyBtb2RlbCwgY2FtZXJhLCBwYXJhbWV0ZXJzIH0gZnJvbSAnLi9jb25maWdzL3BhcmFtZXRlcnMnO1xuaW1wb3J0IGxvYWRGaWxlIGZyb20gJy4vdXRpbHMvbG9hZEZpbGUnO1xuaW1wb3J0IHsgbG9hZE1lbnUsIGJpbmRTbGlkZXIsIHJlYWN0VG9PcGVyYXRpb24gfSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBjYWxjQWxsIH0gZnJvbSAnLi91dGlscy9jYWxjQWxsJztcbi8qKioqKioqKioqKioqKioqKioqKiBJbml0aWFsaXplIERPTSAqKioqKioqKioqKioqKioqKioqKi9cbi8vIEdldCBjYW52YXMgcmVhZHlcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuY29uc3Qgd2lkdGggPSBjYW52YXMud2lkdGg7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbi8vIExvYWQgYWxsIG1vZGVsIG9wdGlvbnMgdG8gbWVudVxuY29uc3QgY2hvb3NlX21vZGVsMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdC5jaG9vc2VfbW9kZWwxJyk7XG5jb25zdCBjaG9vc2VfbW9kZWwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0LmNob29zZV9tb2RlbDInKTtcbmxvYWRNZW51KGNob29zZV9tb2RlbDEpO1xubG9hZE1lbnUoY2hvb3NlX21vZGVsMik7XG4vLyAvLyBHZXQgdGhyZWUgc2xpZGVzIHJlYWR5IGJpbmRpbmcgd2l0aCBoLCBkLCBmIHBhcmFtZXRlclxuWydoJywgJ2QnLCAnZiddLmZvckVhY2goaXRlbSA9PiBiaW5kU2xpZGVyKGl0ZW0sIGRyYXcpKTtcbi8vIEJ1dHRvblxuLy8gQmluZCByZW5kZXIgYnV0dG9uIHdpdGggbG9hZCBmaWxlIGFuZCByZW5kZXIgb3BlcnRpb25cbmNvbnN0IHJlbmRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW5kZXInKTtcbnJlbmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBtb2RlbEluZGV4MSA9IGNob29zZV9tb2RlbDEuc2VsZWN0ZWRJbmRleDtcbiAgICBjb25zdCBtb2RlbEluZGV4MiA9IGNob29zZV9tb2RlbDIuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAobW9kZWxJbmRleDEgPT09IDAgfHwgbW9kZWxJbmRleDIgPT09IDApIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBtb2RlbCB0byByZW5kZXInKTtcbiAgICB9XG4gICAgbGV0IG1vZGVsTmFtZXMgPSBbXTtcbiAgICBtb2RlbE5hbWVzLnB1c2goY2hvb3NlX21vZGVsMS5vcHRpb25zW21vZGVsSW5kZXgxXS52YWx1ZSk7XG4gICAgbW9kZWxOYW1lcy5wdXNoKGNob29zZV9tb2RlbDIub3B0aW9uc1ttb2RlbEluZGV4Ml0udmFsdWUpO1xuICAgIG1vZGVsTmFtZXMgPSBtb2RlbE5hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gYC4vcHVibGljL21vZGVsLyR7bmFtZX0uZC50eHRgO1xuICAgIH0pO1xuICAgIGxvYWRGaWxlKG1vZGVsTmFtZXMsIGRyYXcpO1xuICAgIHJlbmRlckJ0bi5kaXNhYmxlZCA9IHRydWU7XG59KTtcbi8vIGJpbmQgcmVzZXQgYnV0dG9uIHdpdGggcmVmcmVzaCBmdW5jdGlvblxuY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKTtcbnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG4vKioqKioqKioqKioqKioqKioqKiogSW5pdGlhbGl6ZSBEYXRhICoqKioqKioqKioqKioqKioqKioqL1xucGFyYW1ldGVycy53aWR0aCA9IHdpZHRoO1xucGFyYW1ldGVycy5oZWlnaHQgPSBoZWlnaHQ7XG4vLyAvLyBCaW5kaW5nIG9wZXJhdGlvblxucmVhY3RUb09wZXJhdGlvbihjYW52YXMsIGRyYXcpO1xuZnVuY3Rpb24gZHJhdygpIHtcbiAgICAvLyBjbGVhciBiZWZvcmUgaW1hZ2VcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIC8vIGRyYXdcbiAgICBjb25zdCBpbWFnZURhdGEgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xuICAgIGNvbnN0IGlCdWZmZXIgPSBjYWxjQWxsKG1vZGVsLCBjYW1lcmEsIHBhcmFtZXRlcnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gaSAqIHdpZHRoICsgajtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gaUJ1ZmZlcltpXVtqXTtcbiAgICAgICAgICAgIGRhdGFbdCAqIDQgKyAwXSA9IGNvbG9yLnI7XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgMV0gPSBjb2xvci5nO1xuICAgICAgICAgICAgZGF0YVt0ICogNCArIDJdID0gY29sb3IuYjtcbiAgICAgICAgICAgIGRhdGFbdCAqIDQgKyAzXSA9IGNvbG9yLmE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW1hZ2VEYXRhLmRhdGEuc2V0KGRhdGEpO1xuICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcbn1cbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTkgMTg6MjU6MjRcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAyMjo1MjoxMlxuICovXG5pbXBvcnQgeyBiYWNrRmFjZUN1bGxpbmcsIGNhbGNNb2RlbCwgc2NhbkNvbnZlcnNpb24gfSBmcm9tICcuLi8uLi9saWIvaW5kZXgnO1xuY29uc3QgY2FsY0FsbCA9IChtb2RlbCwgY2FtZXJhLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgY2FtZXJhLmNhbGNOVVYoKTtcbiAgICBjb25zdCBiYWNrRmFjZVNldCA9IGJhY2tGYWNlQ3VsbGluZyhtb2RlbCwgY2FtZXJhKTtcbiAgICBjb25zdCBjYWxjUG9pbnRzID0gY2FsY01vZGVsKG1vZGVsLCBjYW1lcmEsIHBhcmFtZXRlcnMuaCwgcGFyYW1ldGVycy5kLCBwYXJhbWV0ZXJzLmYpO1xuICAgIHJldHVybiBzY2FuQ29udmVyc2lvbihtb2RlbCwgY2FsY1BvaW50cywgYmFja0ZhY2VTZXQsIHBhcmFtZXRlcnMuaGVpZ2h0LCBwYXJhbWV0ZXJzLndpZHRoKTtcbn07XG5leHBvcnQgeyBjYWxjQWxsIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE0IDE4OjU1OjUxXG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMjI6NTQ6MjlcbiAqL1xuLyoqKioqKioqKioqKioqKioqKioqIERPTSBPUEVSQVRJT04gKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgeyBwYXJhbWV0ZXJzLCBjYW1lcmEgfSBmcm9tICcuLi9jb25maWdzL3BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgZmlsZXMgfSBmcm9tICcuLi9jb25maWdzL2NvbnN0YW50cyc7XG4vKipcbiAqIExvYWQgbWVudVxuICogQHBhcmFtIHNlbGVjdERPTVxuICovXG5leHBvcnQgY29uc3QgbG9hZE1lbnUgPSAoc2VsZWN0RE9NKSA9PiB7XG4gICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBmaWxlKTtcbiAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZpbGUpKTtcbiAgICAgICAgc2VsZWN0RE9NLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBCaW5kIHRoZSB2YWx1ZSBvZiBzbGlkZXIgd2l0aCBjYW1lcmEgc2V0dGluZ1xuICogQHBhcmFtIG5hbWVcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRTbGlkZXIgPSAobmFtZSwgZHJhdykgPT4ge1xuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25hbWV9YCk7XG4gICAgY29uc3Qgc2xpZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25hbWV9X1ZgKTtcbiAgICBzbGlkZXIudmFsdWUgPSBwYXJhbWV0ZXJzW25hbWVdO1xuICAgIHNsaWRlclRleHQuaW5uZXJIVE1MID0gcGFyYW1ldGVyc1tuYW1lXTtcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBwYXJhbWV0ZXJzW25hbWVdID0gdGhpcy52YWx1ZTtcbiAgICAgICAgc2xpZGVyVGV4dC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBkcmF3KCk7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBCaW5kIG9wZXJhdGlvbiB0byBjb250cm9sIHRoZSBmaW5hbCBlZmZlY3RcbiAqL1xuY29uc3QgY2FtZXJhTGVuID0gMjtcbmV4cG9ydCBjb25zdCByZWFjdFRvT3BlcmF0aW9uID0gKGNhbnZhcywgZHJhdykgPT4ge1xuICAgIC8vIHpvb21pbmcgdGhlIG1vZGVsXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LndoZWVsRGVsdGEgPiAwKSB7XG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb24uc2NhbGUoNiAvIDUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uLnNjYWxlKDUgLyA2KTtcbiAgICAgICAgfVxuICAgICAgICBkcmF3KCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdpJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSArPSBjYW1lcmFMZW47XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnayc6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgLT0gY2FtZXJhTGVuO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2onOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54IC09IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCArPSBjYW1lcmFMZW47XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTIgMTU6MDg6NTFcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAyMjo1NDozNFxuICovXG5pbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4uL2NvbmZpZ3MvcGFyYW1ldGVycyc7XG5pbXBvcnQgeyBWZWN0b3IzZCB9IGZyb20gJy4uLy4uL2xpYi9pbmRleCc7XG4vKipcbiAqIFBhcnNlIHRoZSBkYXRhIGZyb20gdGhlIC5kIGZpbGUsIHJldHVybiBhIE1vZGVsXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIG9ialBvc2l0aW9uXG4gKi9cbmNvbnN0IHBhcnNlRmlsZSA9IChkYXRhLCBvYmpQb3NpdGlvbikgPT4ge1xuICAgIGxldCBsaW5lcyA9IGRhdGEubWF0Y2goL1teXFxyXFxuXSsvZyk7XG4gICAgbGV0IFtudW0sIHBvaW50c051bSwgZmFjZXNOdW1dID0gbGluZXNbMF0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgLy8gQ2F1c2UgaW4gc29tZSBmaWxlLCB0aGVyZSBhcmUganVzdCB0d28gbnVtYmVyIGluIGZpcnN0IGxpbmVcbiAgICBpZiAoZmFjZXNOdW0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZhY2VzTnVtID0gcG9pbnRzTnVtO1xuICAgICAgICBwb2ludHNOdW0gPSBudW07XG4gICAgfVxuICAgIGNvbnN0IFtwTnVtLCBmTnVtXSA9IFtwYXJzZUludChwb2ludHNOdW0sIDEwKSwgcGFyc2VJbnQoZmFjZXNOdW0pXTtcbiAgICAvLyBsb2FkIGRhdGEgdG8gbW9kZWxcbiAgICBjb25zdCBsYXN0TW9kZWxQb2ludHNOdW0gPSBtb2RlbC5wb2ludHMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBOdW07IGkrKykge1xuICAgICAgICBsZXQgW3gsIHksIHpdID0gbGluZXNbaV0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIG1vZGVsLnBvaW50cy5wdXNoKG5ldyBWZWN0b3IzZChwYXJzZUZsb2F0KHgpICsgb2JqUG9zaXRpb24ueCwgcGFyc2VGbG9hdCh5KSArIG9ialBvc2l0aW9uLnksIHBhcnNlRmxvYXQoeikgKyBvYmpQb3NpdGlvbi56KSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBwTnVtICsgMTsgaSA8PSBwTnVtICsgZk51bTsgaSsrKSB7XG4gICAgICAgIGxldCBbXywgLi4ucmVzXSA9IGxpbmVzW2ldLnRyaW0oKS5zcGxpdCgvXFxzKy8pO1xuICAgICAgICBpZiAocmVzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIG1vZGVsLmZhY2VzLnB1c2gocmVzLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCwgMTApIC0gMSArIGxhc3RNb2RlbFBvaW50c051bSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcbiAgICByZXR1cm4gbW9kZWw7XG59O1xuLyoqXG4gKiBSZWFkIHRoZSBjb250ZW50IG9mIGEgZmlsZVxuICogQHBhcmFtIGZpbGVQYXRoXG4gKi9cbmNvbnN0IHJlYWRGaWxlID0gKGZpbGVQYXRoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBmaWxlUGF0aCwgdHJ1ZSk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIExvYWQgYW5kIHJlbmRlciBzZWxlY3RlZCBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVQYXRoXG4gKi9cbmNvbnN0IGxvYWRGaWxlID0gKGZpbGVQYXRocywgZHJhdykgPT4ge1xuICAgIGlmIChmaWxlUGF0aHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgbW9kZWwuY29sb3JJbml0KCk7XG4gICAgICAgIGRyYXcoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlUGF0aHMucG9wKCk7XG4gICAgICAgIHJlYWRGaWxlKGZpbGUpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcGFyc2VGaWxlKGRhdGEsIG5ldyBWZWN0b3IzZCgwLCAwLCAwKSk7XG4gICAgICAgICAgICBsb2FkRmlsZShmaWxlUGF0aHMsIGRyYXcpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2FkIG9yIHBhcnNlIGZpbGUke2ZpbGV9IGVycm9yYCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2FkRmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=