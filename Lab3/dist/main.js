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
    constructor(position, viewingPoint, UP) {
        this.position = position;
        this.viewingPoint = viewingPoint;
        this.UP = UP;
    }
    /**
     * calculate the N, U, V vector of the camera
     * @param objectPosition
     */
    calcNUV() {
        this.N = this.viewingPoint.subtract(this.position).unit();
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
 * @Last Modified time: 2019-05-06 00:22:52
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
    constructor(yStart, yMax, xStart, delta, zStart, zDeltaToY, normalStart, normalEnd) {
        this.yStart = yStart;
        this.yMax = yMax;
        this.xStart = xStart;
        this.delta = delta;
        this.zStart = zStart;
        this.zDeltaToY = zDeltaToY;
        this.normalStart = normalStart;
        this.normalEnd = normalEnd;
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
        this.pointsNormal = [];
        this.faces = [];
        this.facesNormal = [];
        this.facesColor = [];
    }
    colorInit(singleLightOn, lights) {
        this.facesColor = [];
        for (let i = 0; i < this.faces.length; i++) {
            if (singleLightOn) {
                let gray = 0;
                let normal = this.facesNormal[i];
                for (let light of lights) {
                    gray += (128 + 128 * normal.unit().dotProduct(light.unit()));
                }
                this.facesColor.push(new _RGBA__WEBPACK_IMPORTED_MODULE_0__["RGBA"](gray, gray, gray, 255));
            }
            else {
                this.facesColor.push(new _RGBA__WEBPACK_IMPORTED_MODULE_0__["RGBA"](Object(_utils_rand__WEBPACK_IMPORTED_MODULE_1__["random"])(), Object(_utils_rand__WEBPACK_IMPORTED_MODULE_1__["random"])(), Object(_utils_rand__WEBPACK_IMPORTED_MODULE_1__["random"])(), 255));
            }
        }
    }
    normalizeFace(faceIndex) {
        const face = this.faces[faceIndex];
        const [p1, p2, p3] = [this.points[face[0]], this.points[face[1]], this.points[face[2]]];
        return p2.subtract(p1).crossProduct(p3.subtract(p2)).unit();
    }
    computeScenePointNormal() {
        for (let i = 0; i < this.facesNormal.length; i++) {
            for (let j = 0; j < this.faces[i].length; j++) {
                const temp = this.faces[i][j];
                this.pointsNormal[temp] = this.pointsNormal[temp].add(this.facesNormal[i]);
            }
        }
        for (let i = 0; i < this.points.length; i++) {
            if (this.pointsNormal[i].abs()) {
                this.pointsNormal[i] = this.pointsNormal[i].unit();
            }
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
 * @Last Modified time: 2019-05-06 00:38:04
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
            iBuffer[i][j] = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["RGBA"](0, 0, 0, 255);
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
const diffuseTrem = (kd, ILight, normal, light) => {
    const gradient = normal.dotProduct(light);
    return gradient > 0 ? gradient * kd * ILight : 0;
};
const addEdgeToEdgeTable = (model, indexStart, indexEnd, lowerPoint, upperPoint, edgeTable, height) => {
    // ignore horizontal edge and out of range point
    if (toPixel(lowerPoint.y, height) === toPixel(upperPoint.y, height) || lowerPoint.y > 1 || lowerPoint.y < -1)
        return;
    // swap the order of two points
    if (lowerPoint.y > upperPoint.y) {
        [lowerPoint, upperPoint] = [upperPoint, lowerPoint];
        [indexStart, indexEnd] = [indexEnd, indexStart];
    }
    // create edge table element and add it into the edge table
    const ETElement = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["EdgeTableElement"](toPixel(lowerPoint.y, height), toPixel(upperPoint.y, height), toFloatPixel(lowerPoint.x, height), (lowerPoint.x - upperPoint.x) / (lowerPoint.y - upperPoint.y), lowerPoint.z, (lowerPoint.z - upperPoint.z) / (toPixel(lowerPoint.y, height) - toPixel(upperPoint.y, height)), model.pointsNormal[indexStart], model.pointsNormal[indexEnd]);
    edgeTable[Math.floor(ETElement.yStart)].push(ETElement);
};
const scanConversion = (model, lights, calcPoints, backFaceSet, height, width, shadingType) => {
    const [iBuffer, zBuffer] = bufferInit(height, width);
    let activeEdgeTable = [];
    const redSet = new Set();
    // for each face
    model.faces.forEach((face, index) => {
        // don't need to consider backface
        if (backFaceSet.has(index))
            return;
        // build edge table
        const edgeTable = edgeTableInit(height);
        for (let i = 0; i < face.length; i++) {
            // get an edge 
            let [indexStart, indexEnd] = [face[i], face[(i + 1) % face.length]];
            let [lowerPoint, upperPoint] = [calcPoints[indexStart], calcPoints[indexEnd]];
            addEdgeToEdgeTable(model, indexStart, indexEnd, lowerPoint, upperPoint, edgeTable, height);
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
            // remove the leaving edge
            activeEdgeTable = activeEdgeTable
                // remove edge from Active Edge Table while y = yMax
                .filter(edge => edge.yMax !== i)
                // sort AET by xStart
                .sort((a, b) => {
                return a.xStart - b.xStart;
            });
            for (let j = 0; j + 1 < activeEdgeTable.length; j += 2) {
                const [left, right] = [activeEdgeTable[j], activeEdgeTable[j + 1]];
                let zCurrent = left.zStart;
                const zDeltaToX = (left.zStart - right.zStart) / (left.xStart - right.xStart);
                if (shadingType == 'Constant') {
                    // gray: constant shading color for each face
                    let gray = 0;
                    let curNormal = model.facesNormal[index];
                    const org = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 0, 0);
                    for (let light of lights) {
                        light = org.subtract(light).unit();
                        gray += diffuseTrem(1, 88, curNormal, light);
                    }
                    for (let k = Math.floor(left.xStart); k < Math.floor(right.xStart); k++) {
                        if (zCurrent <= zBuffer[i][k]) {
                            zBuffer[i][k] = zCurrent;
                            iBuffer[i][k] = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["RGBA"](gray, gray, gray, 255);
                        }
                        zCurrent += zDeltaToX;
                    }
                }
                else if (shadingType === 'Gouraud') {
                    // according to intensity
                    const la = left.normalEnd.scale((i - left.yStart) / (left.yMax - left.yStart))
                        .add(left.normalStart.scale((left.yMax - i) / (left.yMax - left.yStart)));
                    const lb = right.normalEnd.scale((i - right.yStart) / (right.yMax - right.yStart))
                        .add(right.normalStart.scale((right.yMax - i) / (right.yMax - right.yStart)));
                    const curNormal = right.xStart - left.xStart === 0 ? la.unit() : la.add(lb).unit();
                    let gray = 0;
                    const org = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 0, 0);
                    for (let light of lights) {
                        light = org.subtract(light).unit();
                        gray += diffuseTrem(1, 88, curNormal, light);
                    }
                    for (let k = Math.floor(left.xStart); k < Math.floor(right.xStart); k++) {
                        if (zCurrent <= zBuffer[i][k]) {
                            zBuffer[i][k] = zCurrent;
                            iBuffer[i][k] = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["RGBA"](gray, gray, gray, 255);
                        }
                        zCurrent += zDeltaToX;
                    }
                }
                else if (shadingType === 'Phong') {
                    // according to intensity
                    const la = left.normalEnd.scale((i - left.yStart) / (left.yMax - left.yStart))
                        .add(left.normalStart.scale((left.yMax - i) / (left.yMax - left.yStart)));
                    const lb = right.normalEnd.scale((i - right.yStart) / (right.yMax - right.yStart))
                        .add(right.normalStart.scale((right.yMax - i) / (right.yMax - right.yStart)));
                    for (let k = Math.floor(left.xStart); k < Math.floor(right.xStart); k++) {
                        if (zCurrent <= zBuffer[i][k]) {
                            zBuffer[i][k] = zCurrent;
                            const curNormal = right.xStart - left.xStart === 0 ? la.unit() :
                                la.scale((right.xStart - k) / (right.xStart - left.xStart)).add(lb.scale((k - left.xStart) / (right.xStart - left.xStart))).unit();
                            let gray = 0;
                            const org = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 0, 0);
                            for (let light of lights) {
                                light = org.subtract(light).unit();
                                gray += diffuseTrem(1, 88, curNormal, light);
                            }
                            iBuffer[i][k] = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["RGBA"](gray, gray, gray, 255);
                        }
                        zCurrent += zDeltaToX;
                    }
                }
                left.xStart += left.delta;
                right.xStart += right.delta;
                left.zStart += left.zDeltaToY;
                right.zStart += right.zDeltaToY;
            }
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
        const view = camera.position.subtract(model.points[face[1]]).unit();
        const cos = model.facesNormal[index].dotProduct(view);
        if (cos >= 0) {
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
/*! exports provided: files, shadingModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "files", function() { return files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadingModels", function() { return shadingModels; });
/*
 * @Author: GXwar
 * @Date: 2019-02-10 01:33:45
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 19:15:08
 */
// data files to be loaded
const files = [
    'atc',
    'bench',
    'cow',
    'cone',
    'house',
    'knight'
];
const shadingModels = [
    'Constant',
    'Gouraud',
    'Phong'
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
 * @Last Modified time: 2019-05-06 01:00:36
 */

const parameters = {
    h: 1,
    d: 1,
    f: 1000,
    height: 0,
    width: 0,
    iBuffer: [],
    lights: [
        new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](100, 100, 100)
    ],
    shadingType: 'Phong'
};
const camera = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Camera"](new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](10, 10, 10), new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 0, 0), new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, -1, 0));
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
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs/constants */ "./src/configs/constants.ts");
/* harmony import */ var _utils_loadFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/loadFile */ "./src/utils/loadFile.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "./src/utils/dom.ts");
/* harmony import */ var _utils_calcAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/calcAll */ "./src/utils/calcAll.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-14 15:18:52
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-06 01:01:07
 */





/******************** Initialize DOM ********************/
// Get canvas ready
const canvas = document.querySelector('#content');
const height = canvas.height;
const width = canvas.width;
const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, width, height);
// Load all model options to menu
const choose_model = document.querySelector('select.choose_model');
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["loadMenu"])(choose_model, _configs_constants__WEBPACK_IMPORTED_MODULE_1__["files"]);
// Load shading type options to menu
const shading_type = document.querySelector('.shading_type');
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["loadMenu"])(shading_type, _configs_constants__WEBPACK_IMPORTED_MODULE_1__["shadingModels"]);
// // Get three slides ready binding with h, d, f parameter
['h', 'd', 'f'].forEach(item => Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bindSlider"])(item, draw));
// Button
// Bind render button with load file and render opertion
const renderBtn = document.querySelector('.render');
renderBtn.addEventListener('click', () => {
    const modelIndex = choose_model.selectedIndex;
    const shadingTypeIndex = shading_type.selectedIndex;
    // Exception handling
    if (modelIndex === 0)
        alert('Please select a model to render');
    if (shadingTypeIndex === 0)
        alert('Please select a shading type');
    // Process data
    let modelName = choose_model.options[modelIndex].value;
    modelName = `./public/model/${modelName}.d.txt`;
    let shadingTypeName = shading_type.options[shadingTypeIndex].value;
    Object(_utils_loadFile__WEBPACK_IMPORTED_MODULE_2__["default"])(modelName, shadingTypeName, draw);
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
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["reactToOperation"])(canvas, draw);
function draw() {
    // clear before image
    ctx.clearRect(0, 0, width, height);
    // draw
    const imageData = ctx.createImageData(width, height);
    const data = new Uint8Array(width * height * 4);
    const iBuffer = Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_4__["calcAll"])(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"]);
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
 * @Last Modified time: 2019-05-06 01:01:16
 */

const calcAll = (model, camera, parameters) => {
    camera.calcNUV();
    const backFaceSet = Object(_lib_index__WEBPACK_IMPORTED_MODULE_0__["backFaceCulling"])(model, camera);
    const calcPoints = Object(_lib_index__WEBPACK_IMPORTED_MODULE_0__["calcModel"])(model, camera, parameters.h, parameters.d, parameters.f);
    return Object(_lib_index__WEBPACK_IMPORTED_MODULE_0__["scanConversion"])(model, parameters.lights, calcPoints, backFaceSet, parameters.height, parameters.width, parameters.shadingType);
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
/*
 * @Author: GXwar
 * @Date: 2019-02-14 18:55:51
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-06 01:06:23
 */
/******************** DOM OPERATION ********************/

/**
 * Load menu
 * @param selectDOM
 */
const loadMenu = (selectDOM, data) => {
    data.forEach(file => {
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
        event.preventDefault();
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
 * @Last Modified time: 2019-05-06 01:00:47
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
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].pointsNormal.push(new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](0, 0, 0));
    }
    for (let i = pNum + 1; i <= pNum + fNum; i++) {
        let [_, ...res] = lines[i].trim().split(/\s+/);
        if (res.length <= 2)
            continue;
        let face = res.map((x) => parseInt(x, 10) - 1 + lastModelPointsNum);
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].faces.push(face);
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].facesNormal.push(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].normalizeFace(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].faces.length - 1));
    }
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
const loadFile = (filePath, shadingType, draw) => {
    readFile(filePath)
        .then((data) => {
        parseFile(data, new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](0, 0, 0));
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].colorInit(false, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].lights);
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].computeScenePointNormal();
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].shadingType = shadingType;
        draw();
    })
        .catch(() => {
        console.log(`Load or parse file${filePath} error`);
    });
};
/* harmony default export */ __webpack_exports__["default"] = (loadFile);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NhbWVyYXMvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvbWF0aC9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL21hdGgvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXRoL1ZlY3RvcjNkLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXRoL1ZlY3RvcjRkLnRzIiwid2VicGFjazovLy8uL2xpYi9vYmplY3RzL0VkZ2VUYWJsZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvUkdCQS50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL2ZpbGxQaXhlbC50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL21vZGVsaW5nLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlscy9yYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy9wYXJhbWV0ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2FsY0FsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9sb2FkRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdD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LGdCQUFnQiwwREFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwRDtBQUNmO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix5REFBSztBQUNwQyxtQkFBbUIsV0FBVztBQUM5QjtBQUNBLFFBQVEseURBQUssaUJBQWlCLG1EQUFRO0FBQ3RDLFFBQVEseURBQUssdUJBQXVCLG1EQUFRO0FBQzVDO0FBQ0EsMEJBQTBCLGtCQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQUs7QUFDYixRQUFRLHlEQUFLLGtCQUFrQix5REFBSyxlQUFlLHlEQUFLO0FBQ3hEO0FBQ0EsV0FBVyx5REFBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtREFBUTtBQUNwQyxRQUFRLHlEQUFLLGtCQUFrQiw4REFBVTtBQUN6QyxRQUFRLHlEQUFLO0FBQ2IsUUFBUSw4REFBVTtBQUNsQjtBQUNBLEtBQUs7QUFDTDtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xELEtBQUs7QUFDTDtBQUNlLHVFQUFRLEVBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiY2xhc3MgQ2FtZXJhIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgdmlld2luZ1BvaW50LCBVUCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMudmlld2luZ1BvaW50ID0gdmlld2luZ1BvaW50O1xuICAgICAgICB0aGlzLlVQID0gVVA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGNhbGN1bGF0ZSB0aGUgTiwgVSwgViB2ZWN0b3Igb2YgdGhlIGNhbWVyYVxuICAgICAqIEBwYXJhbSBvYmplY3RQb3NpdGlvblxuICAgICAqL1xuICAgIGNhbGNOVVYoKSB7XG4gICAgICAgIHRoaXMuTiA9IHRoaXMudmlld2luZ1BvaW50LnN1YnRyYWN0KHRoaXMucG9zaXRpb24pLnVuaXQoKTtcbiAgICAgICAgdGhpcy5VID0gdGhpcy5OLmNyb3NzUHJvZHVjdCh0aGlzLlVQKS51bml0KCk7XG4gICAgICAgIHRoaXMuViA9IHRoaXMuVS5jcm9zc1Byb2R1Y3QodGhpcy5OKTtcbiAgICB9XG59XG5leHBvcnQgeyBDYW1lcmEgfTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKiAuL2NhbWVyYXMgKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgeyBDYW1lcmEgfSBmcm9tICcuL2NhbWVyYXMvQ2FtZXJhJztcbi8qKioqKioqKioqKioqKioqKioqKiAuL21hdGggKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgeyBNYXRyaXggfSBmcm9tICcuL21hdGgvTWF0cml4JztcbmV4cG9ydCB7IFZlY3RvcjNkIH0gZnJvbSAnLi9tYXRoL1ZlY3RvcjNkJztcbmV4cG9ydCB7IFZlY3RvcjRkIH0gZnJvbSAnLi9tYXRoL1ZlY3RvcjRkJztcbi8qKioqKioqKioqKioqKioqKioqKiAuL29iamVjdHMgKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgeyBFZGdlVGFibGVFbGVtZW50IH0gZnJvbSAnLi9vYmplY3RzL0VkZ2VUYWJsZUVsZW1lbnQnO1xuZXhwb3J0IHsgTW9kZWwgfSBmcm9tICcuL29iamVjdHMvTW9kZWwnO1xuZXhwb3J0IHsgUkdCQSB9IGZyb20gJy4vb2JqZWN0cy9SR0JBJztcbi8qKioqKioqKioqKioqKioqKioqKiAuL3RyYW5zZm9ybSAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IGJhY2tGYWNlQ3VsbGluZywgY2FsY01vZGVsIH0gZnJvbSAnLi90cmFuc2Zvcm0vbW9kZWxpbmcnO1xuZXhwb3J0IHsgYnVmZmVySW5pdCwgc2NhbkNvbnZlcnNpb24gfSBmcm9tICcuL3RyYW5zZm9ybS9maWxsUGl4ZWwnO1xuIiwiaW1wb3J0IHsgVmVjdG9yNGQgfSBmcm9tICcuL1ZlY3RvcjRkJztcbmNsYXNzIE1hdHJpeCB7XG4gICAgY29uc3RydWN0b3IodmFsdWVzT3JNLCBuKSB7XG4gICAgICAgIGlmICh2YWx1ZXNPck0gIT09IHVuZGVmaW5lZCAmJiBuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlc09yTTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMucHVzaChBcnJheS5mcm9tKHsgbGVuZ3RoOiBuIH0sIF8gPT4gMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlc09yTSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlc09yTTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogbXVsdGlwbHkgd2l0aCBvdGhlciBtYXRyaXgsIHJldHVybiBhIG5ldyBtYXRyaXhcbiAgICAgKiBAcGFyYW0gb3RoZXJcbiAgICAgKi9cbiAgICBtdWx0aXBseShvdGhlcikge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXNbMF0ubGVuZ3RoICE9PSBvdGhlci52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBtdWx0aXBseSB0aGVzZSB0d28gbWF0cmljZXMhJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbSA9IHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbiA9IG90aGVyLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGsgPSBvdGhlci52YWx1ZXNbMF0ubGVuZ3RoO1xuICAgICAgICAvLyBtdWx0aXBseVxuICAgICAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG0sIGspO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IG47IHQrKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdNYXRyaXgudmFsdWVzW2ldW2pdICs9IHRoaXMudmFsdWVzW2ldW3RdICogb3RoZXIudmFsdWVzW3RdW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgIH1cbiAgICA7XG4gICAgdG9WZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHZlY3RvciA9IG5ldyBWZWN0b3I0ZCh0aGlzLnZhbHVlc1swXVswXSwgdGhpcy52YWx1ZXNbMV1bMF0sIHRoaXMudmFsdWVzWzJdWzBdLCB0aGlzLnZhbHVlc1szXVswXSk7XG4gICAgICAgIHJldHVybiB2ZWN0b3IuY29sbGFwc2UoKTtcbiAgICB9XG59XG5leHBvcnQgeyBNYXRyaXggfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTkgMTQ6Mzc6MDNcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAxNDo0MDoyNVxuICovXG5jbGFzcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59XG5leHBvcnQgeyBWZWN0b3IgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTUgMDE6MzI6MTZcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wNS0wNiAwMDoyMjo1MlxuICovXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL1ZlY3Rvcic7XG5pbXBvcnQgeyBWZWN0b3I0ZCB9IGZyb20gXCIuL1ZlY3RvcjRkXCI7XG5jbGFzcyBWZWN0b3IzZCBleHRlbmRzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgeikge1xuICAgICAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdXBlcigwLCAwKTtcbiAgICAgICAgICAgIHRoaXMueiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdXBlcih4LCB5KTtcbiAgICAgICAgICAgIHRoaXMueiA9IHo7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXh0ZW5kKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjRkKHRoaXMueCwgdGhpcy55LCB0aGlzLnosIDEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBnZXQgdGhlIGFic29sdXRlIHZhbHVlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKi9cbiAgICBhYnMoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56KTtcbiAgICB9XG4gICAgYWRkKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM2QodGhpcy54ICsgb3RoZXIueCwgdGhpcy55ICsgb3RoZXIueSwgdGhpcy56ICsgb3RoZXIueik7XG4gICAgfVxuICAgIHN1YnRyYWN0KG90aGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM2QodGhpcy54IC0gb3RoZXIueCwgdGhpcy55IC0gb3RoZXIueSwgdGhpcy56IC0gb3RoZXIueik7XG4gICAgfVxuICAgIHNjYWxlKG4pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnggKiBuLCB0aGlzLnkgKiBuLCB0aGlzLnogKiBuKTtcbiAgICB9XG4gICAgdW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUoMSAvIHRoaXMuYWJzKCkpO1xuICAgIH1cbiAgICBjcm9zc1Byb2R1Y3Qob3RoZXIpIHtcbiAgICAgICAgLy8gcmV0dXJuIFtcbiAgICAgICAgLy8gICB2ZWMxWzFdICogdmVjMlsyXSAtIHZlYzJbMV0gKiB2ZWMxWzJdLFxuICAgICAgICAvLyAgIC0odmVjMVswXSAqIHZlYzJbMl0gLSB2ZWMyWzBdICogdmVjMVsyXSksXG4gICAgICAgIC8vICAgdmVjMVswXSAqIHZlYzJbMV0gLSB2ZWMyWzBdICogdmVjMVsxXVxuICAgICAgICAvLyBdO1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueSAqIG90aGVyLnogLSBvdGhlci55ICogdGhpcy56LCAtKHRoaXMueCAqIG90aGVyLnogLSBvdGhlci54ICogdGhpcy56KSwgdGhpcy54ICogb3RoZXIueSAtIG90aGVyLnggKiB0aGlzLnkpO1xuICAgIH1cbiAgICBkb3RQcm9kdWN0KG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiBvdGhlci54ICsgdGhpcy55ICogb3RoZXIueSArIHRoaXMueiAqIG90aGVyLno7XG4gICAgfVxufVxuZXhwb3J0IHsgVmVjdG9yM2QgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTUgMDE6MzE6NTNcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAxNDo0MTozMFxuICovXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL1ZlY3Rvcic7XG5pbXBvcnQgeyBWZWN0b3IzZCB9IGZyb20gJy4vVmVjdG9yM2QnO1xuaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnLi9NYXRyaXgnO1xuY2xhc3MgVmVjdG9yNGQgZXh0ZW5kcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHosIHcpIHtcbiAgICAgICAgc3VwZXIoeCwgeSk7XG4gICAgICAgIHRoaXMueiA9IHo7XG4gICAgICAgIHRoaXMudyA9IHc7XG4gICAgfVxuICAgIGNvbGxhcHNlKCkge1xuICAgICAgICBsZXQgdCA9IHRoaXMudztcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnggLyB0LCB0aGlzLnkgLyB0LCB0aGlzLnogLyB0KTtcbiAgICB9XG4gICAgdG9NYXRyaXgoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4KFtcbiAgICAgICAgICAgIFt0aGlzLnhdLFxuICAgICAgICAgICAgW3RoaXMueV0sXG4gICAgICAgICAgICBbdGhpcy56XSxcbiAgICAgICAgICAgIFt0aGlzLnddXG4gICAgICAgIF0pO1xuICAgIH1cbn1cbmV4cG9ydCB7IFZlY3RvcjRkIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE3IDIxOjM3OjEwXG4gKiBATGFzdCBNb2RpZmllZCBieTogICBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAwMTozNDowNlxuICovXG5jbGFzcyBFZGdlVGFibGVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih5U3RhcnQsIHlNYXgsIHhTdGFydCwgZGVsdGEsIHpTdGFydCwgekRlbHRhVG9ZLCBub3JtYWxTdGFydCwgbm9ybWFsRW5kKSB7XG4gICAgICAgIHRoaXMueVN0YXJ0ID0geVN0YXJ0O1xuICAgICAgICB0aGlzLnlNYXggPSB5TWF4O1xuICAgICAgICB0aGlzLnhTdGFydCA9IHhTdGFydDtcbiAgICAgICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgICAgICB0aGlzLnpTdGFydCA9IHpTdGFydDtcbiAgICAgICAgdGhpcy56RGVsdGFUb1kgPSB6RGVsdGFUb1k7XG4gICAgICAgIHRoaXMubm9ybWFsU3RhcnQgPSBub3JtYWxTdGFydDtcbiAgICAgICAgdGhpcy5ub3JtYWxFbmQgPSBub3JtYWxFbmQ7XG4gICAgfVxufVxuO1xuZXhwb3J0IHsgRWRnZVRhYmxlRWxlbWVudCB9O1xuIiwiaW1wb3J0IHsgUkdCQSB9IGZyb20gXCIuL1JHQkFcIjtcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4uL3V0aWxzL3JhbmQnO1xuY2xhc3MgTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLnBvaW50c05vcm1hbCA9IFtdO1xuICAgICAgICB0aGlzLmZhY2VzID0gW107XG4gICAgICAgIHRoaXMuZmFjZXNOb3JtYWwgPSBbXTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbG9yID0gW107XG4gICAgfVxuICAgIGNvbG9ySW5pdChzaW5nbGVMaWdodE9uLCBsaWdodHMpIHtcbiAgICAgICAgdGhpcy5mYWNlc0NvbG9yID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mYWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNpbmdsZUxpZ2h0T24pIHtcbiAgICAgICAgICAgICAgICBsZXQgZ3JheSA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IG5vcm1hbCA9IHRoaXMuZmFjZXNOb3JtYWxbaV07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGlnaHQgb2YgbGlnaHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyYXkgKz0gKDEyOCArIDEyOCAqIG5vcm1hbC51bml0KCkuZG90UHJvZHVjdChsaWdodC51bml0KCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mYWNlc0NvbG9yLnB1c2gobmV3IFJHQkEoZ3JheSwgZ3JheSwgZ3JheSwgMjU1KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhY2VzQ29sb3IucHVzaChuZXcgUkdCQShyYW5kb20oKSwgcmFuZG9tKCksIHJhbmRvbSgpLCAyNTUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBub3JtYWxpemVGYWNlKGZhY2VJbmRleCkge1xuICAgICAgICBjb25zdCBmYWNlID0gdGhpcy5mYWNlc1tmYWNlSW5kZXhdO1xuICAgICAgICBjb25zdCBbcDEsIHAyLCBwM10gPSBbdGhpcy5wb2ludHNbZmFjZVswXV0sIHRoaXMucG9pbnRzW2ZhY2VbMV1dLCB0aGlzLnBvaW50c1tmYWNlWzJdXV07XG4gICAgICAgIHJldHVybiBwMi5zdWJ0cmFjdChwMSkuY3Jvc3NQcm9kdWN0KHAzLnN1YnRyYWN0KHAyKSkudW5pdCgpO1xuICAgIH1cbiAgICBjb21wdXRlU2NlbmVQb2ludE5vcm1hbCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZhY2VzTm9ybWFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZmFjZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy5mYWNlc1tpXVtqXTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50c05vcm1hbFt0ZW1wXSA9IHRoaXMucG9pbnRzTm9ybWFsW3RlbXBdLmFkZCh0aGlzLmZhY2VzTm9ybWFsW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludHNOb3JtYWxbaV0uYWJzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50c05vcm1hbFtpXSA9IHRoaXMucG9pbnRzTm9ybWFsW2ldLnVuaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCB7IE1vZGVsIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE5IDE2OjM3OjQ5XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMTY6NDU6NTVcbiAqL1xuY2xhc3MgUkdCQSB7XG4gICAgY29uc3RydWN0b3IociA9IDAsIGcgPSAwLCBiID0gMCwgYSA9IDI1NSkge1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmcgPSBnO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgIH1cbn1cbmV4cG9ydCB7IFJHQkEgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTcgMTQ6NDQ6MzJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wNS0wNiAwMDozODowNFxuICovXG4vKioqKioqKioqKioqKioqKioqKiogRklMTCBQSVhFTFMgKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgeyBWZWN0b3IzZCwgRWRnZVRhYmxlRWxlbWVudCwgUkdCQSB9IGZyb20gJy4uLy4uL2xpYi9pbmRleCc7XG4vLyBjb252ZXJ0IDJkIHBvaW50IHRvIGNhbnZhcyBwb2ludFxuY29uc3QgdG9QaXhlbCA9ICh2YWx1ZSwgaGVpZ2h0LCBzaG9ydHRlbiA9IGZhbHNlKSA9PiBNYXRoLmZsb29yKCh2YWx1ZSArIDEpICogaGVpZ2h0IC8gMikgLSAoc2hvcnR0ZW4gPyAxIDogMCk7XG5jb25zdCB0b0Zsb2F0UGl4ZWwgPSAodmFsdWUsIGhlaWdodCkgPT4gKHZhbHVlICsgMSkgKiBoZWlnaHQgLyAyO1xuY29uc3QgYnVmZmVySW5pdCA9IChoZWlnaHQsIHdpZHRoKSA9PiB7XG4gICAgY29uc3QgaUJ1ZmZlciA9IFtdO1xuICAgIGNvbnN0IHpCdWZmZXIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGlCdWZmZXJbaV0gPSBbXTtcbiAgICAgICAgekJ1ZmZlcltpXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgIGlCdWZmZXJbaV1bal0gPSBuZXcgUkdCQSgwLCAwLCAwLCAyNTUpO1xuICAgICAgICAgICAgekJ1ZmZlcltpXVtqXSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtpQnVmZmVyLCB6QnVmZmVyXTtcbn07XG5jb25zdCBlZGdlVGFibGVJbml0ID0gKGhlaWdodCkgPT4ge1xuICAgIGNvbnN0IGVkZ2VUYWJsZSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgZWRnZVRhYmxlW2ldID0gW107XG4gICAgfVxuICAgIHJldHVybiBlZGdlVGFibGU7XG59O1xuLyoqXG4gKiBTY2FuIENvbnZlcnNpb25cbiAqIDEuIGZvciBlYWNoIHNjYW4gbGluZSwgZGV0ZXJtaW5lIGVkZ2VzIG9mIHBvbHlnb25zIHRoYXQgaW50ZXJzZWN0XG4gKiAyLiBGaW5kIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGFuXG4gKiAzLiBSZWx5IG9uIHNjYW5saW5lIGFuZCBwaXhlbCBjb2hlcmVuY2UgdG8gbGluZWFybHkgaW50ZXJwb2xhdGUgKGJldHdlZW4gc2NhbmxpbmVzIGFuZCBiZXR3ZWVuIHBpeGVscylcbiAqL1xuY29uc3QgZGlmZnVzZVRyZW0gPSAoa2QsIElMaWdodCwgbm9ybWFsLCBsaWdodCkgPT4ge1xuICAgIGNvbnN0IGdyYWRpZW50ID0gbm9ybWFsLmRvdFByb2R1Y3QobGlnaHQpO1xuICAgIHJldHVybiBncmFkaWVudCA+IDAgPyBncmFkaWVudCAqIGtkICogSUxpZ2h0IDogMDtcbn07XG5jb25zdCBhZGRFZGdlVG9FZGdlVGFibGUgPSAobW9kZWwsIGluZGV4U3RhcnQsIGluZGV4RW5kLCBsb3dlclBvaW50LCB1cHBlclBvaW50LCBlZGdlVGFibGUsIGhlaWdodCkgPT4ge1xuICAgIC8vIGlnbm9yZSBob3Jpem9udGFsIGVkZ2UgYW5kIG91dCBvZiByYW5nZSBwb2ludFxuICAgIGlmICh0b1BpeGVsKGxvd2VyUG9pbnQueSwgaGVpZ2h0KSA9PT0gdG9QaXhlbCh1cHBlclBvaW50LnksIGhlaWdodCkgfHwgbG93ZXJQb2ludC55ID4gMSB8fCBsb3dlclBvaW50LnkgPCAtMSlcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIHN3YXAgdGhlIG9yZGVyIG9mIHR3byBwb2ludHNcbiAgICBpZiAobG93ZXJQb2ludC55ID4gdXBwZXJQb2ludC55KSB7XG4gICAgICAgIFtsb3dlclBvaW50LCB1cHBlclBvaW50XSA9IFt1cHBlclBvaW50LCBsb3dlclBvaW50XTtcbiAgICAgICAgW2luZGV4U3RhcnQsIGluZGV4RW5kXSA9IFtpbmRleEVuZCwgaW5kZXhTdGFydF07XG4gICAgfVxuICAgIC8vIGNyZWF0ZSBlZGdlIHRhYmxlIGVsZW1lbnQgYW5kIGFkZCBpdCBpbnRvIHRoZSBlZGdlIHRhYmxlXG4gICAgY29uc3QgRVRFbGVtZW50ID0gbmV3IEVkZ2VUYWJsZUVsZW1lbnQodG9QaXhlbChsb3dlclBvaW50LnksIGhlaWdodCksIHRvUGl4ZWwodXBwZXJQb2ludC55LCBoZWlnaHQpLCB0b0Zsb2F0UGl4ZWwobG93ZXJQb2ludC54LCBoZWlnaHQpLCAobG93ZXJQb2ludC54IC0gdXBwZXJQb2ludC54KSAvIChsb3dlclBvaW50LnkgLSB1cHBlclBvaW50LnkpLCBsb3dlclBvaW50LnosIChsb3dlclBvaW50LnogLSB1cHBlclBvaW50LnopIC8gKHRvUGl4ZWwobG93ZXJQb2ludC55LCBoZWlnaHQpIC0gdG9QaXhlbCh1cHBlclBvaW50LnksIGhlaWdodCkpLCBtb2RlbC5wb2ludHNOb3JtYWxbaW5kZXhTdGFydF0sIG1vZGVsLnBvaW50c05vcm1hbFtpbmRleEVuZF0pO1xuICAgIGVkZ2VUYWJsZVtNYXRoLmZsb29yKEVURWxlbWVudC55U3RhcnQpXS5wdXNoKEVURWxlbWVudCk7XG59O1xuY29uc3Qgc2NhbkNvbnZlcnNpb24gPSAobW9kZWwsIGxpZ2h0cywgY2FsY1BvaW50cywgYmFja0ZhY2VTZXQsIGhlaWdodCwgd2lkdGgsIHNoYWRpbmdUeXBlKSA9PiB7XG4gICAgY29uc3QgW2lCdWZmZXIsIHpCdWZmZXJdID0gYnVmZmVySW5pdChoZWlnaHQsIHdpZHRoKTtcbiAgICBsZXQgYWN0aXZlRWRnZVRhYmxlID0gW107XG4gICAgY29uc3QgcmVkU2V0ID0gbmV3IFNldCgpO1xuICAgIC8vIGZvciBlYWNoIGZhY2VcbiAgICBtb2RlbC5mYWNlcy5mb3JFYWNoKChmYWNlLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBkb24ndCBuZWVkIHRvIGNvbnNpZGVyIGJhY2tmYWNlXG4gICAgICAgIGlmIChiYWNrRmFjZVNldC5oYXMoaW5kZXgpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBidWlsZCBlZGdlIHRhYmxlXG4gICAgICAgIGNvbnN0IGVkZ2VUYWJsZSA9IGVkZ2VUYWJsZUluaXQoaGVpZ2h0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgYW4gZWRnZSBcbiAgICAgICAgICAgIGxldCBbaW5kZXhTdGFydCwgaW5kZXhFbmRdID0gW2ZhY2VbaV0sIGZhY2VbKGkgKyAxKSAlIGZhY2UubGVuZ3RoXV07XG4gICAgICAgICAgICBsZXQgW2xvd2VyUG9pbnQsIHVwcGVyUG9pbnRdID0gW2NhbGNQb2ludHNbaW5kZXhTdGFydF0sIGNhbGNQb2ludHNbaW5kZXhFbmRdXTtcbiAgICAgICAgICAgIGFkZEVkZ2VUb0VkZ2VUYWJsZShtb2RlbCwgaW5kZXhTdGFydCwgaW5kZXhFbmQsIGxvd2VyUG9pbnQsIHVwcGVyUG9pbnQsIGVkZ2VUYWJsZSwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWxsIHBpeGVsIHRvIHBpeGVsIGJ1ZmZlclxuICAgICAgICBsZXQgY3VycmVudFNjYW5MaW5lID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVkZ2VUYWJsZVtpXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNjYW5MaW5lID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudFNjYW5MaW5lOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1vdmUgZWRnZSBmcm9tIEVkZ2UgVGFiZWwgdG8gQWN0aXZlIEVkZ2UgVGFibGVcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWRnZVRhYmxlW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlRWRnZVRhYmxlLnB1c2goZWRnZVRhYmxlW2ldW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbGVhdmluZyBlZGdlXG4gICAgICAgICAgICBhY3RpdmVFZGdlVGFibGUgPSBhY3RpdmVFZGdlVGFibGVcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZWRnZSBmcm9tIEFjdGl2ZSBFZGdlIFRhYmxlIHdoaWxlIHkgPSB5TWF4XG4gICAgICAgICAgICAgICAgLmZpbHRlcihlZGdlID0+IGVkZ2UueU1heCAhPT0gaSlcbiAgICAgICAgICAgICAgICAvLyBzb3J0IEFFVCBieSB4U3RhcnRcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnhTdGFydCAtIGIueFN0YXJ0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiArIDEgPCBhY3RpdmVFZGdlVGFibGUubGVuZ3RoOyBqICs9IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbGVmdCwgcmlnaHRdID0gW2FjdGl2ZUVkZ2VUYWJsZVtqXSwgYWN0aXZlRWRnZVRhYmxlW2ogKyAxXV07XG4gICAgICAgICAgICAgICAgbGV0IHpDdXJyZW50ID0gbGVmdC56U3RhcnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgekRlbHRhVG9YID0gKGxlZnQuelN0YXJ0IC0gcmlnaHQuelN0YXJ0KSAvIChsZWZ0LnhTdGFydCAtIHJpZ2h0LnhTdGFydCk7XG4gICAgICAgICAgICAgICAgaWYgKHNoYWRpbmdUeXBlID09ICdDb25zdGFudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ3JheTogY29uc3RhbnQgc2hhZGluZyBjb2xvciBmb3IgZWFjaCBmYWNlXG4gICAgICAgICAgICAgICAgICAgIGxldCBncmF5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1ck5vcm1hbCA9IG1vZGVsLmZhY2VzTm9ybWFsW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JnID0gbmV3IFZlY3RvcjNkKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBsaWdodCBvZiBsaWdodHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0ID0gb3JnLnN1YnRyYWN0KGxpZ2h0KS51bml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmF5ICs9IGRpZmZ1c2VUcmVtKDEsIDg4LCBjdXJOb3JtYWwsIGxpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gTWF0aC5mbG9vcihsZWZ0LnhTdGFydCk7IGsgPCBNYXRoLmZsb29yKHJpZ2h0LnhTdGFydCk7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHpDdXJyZW50IDw9IHpCdWZmZXJbaV1ba10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6QnVmZmVyW2ldW2tdID0gekN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaUJ1ZmZlcltpXVtrXSA9IG5ldyBSR0JBKGdyYXksIGdyYXksIGdyYXksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB6Q3VycmVudCArPSB6RGVsdGFUb1g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2hhZGluZ1R5cGUgPT09ICdHb3VyYXVkJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBhY2NvcmRpbmcgdG8gaW50ZW5zaXR5XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhID0gbGVmdC5ub3JtYWxFbmQuc2NhbGUoKGkgLSBsZWZ0LnlTdGFydCkgLyAobGVmdC55TWF4IC0gbGVmdC55U3RhcnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZChsZWZ0Lm5vcm1hbFN0YXJ0LnNjYWxlKChsZWZ0LnlNYXggLSBpKSAvIChsZWZ0LnlNYXggLSBsZWZ0LnlTdGFydCkpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGIgPSByaWdodC5ub3JtYWxFbmQuc2NhbGUoKGkgLSByaWdodC55U3RhcnQpIC8gKHJpZ2h0LnlNYXggLSByaWdodC55U3RhcnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZChyaWdodC5ub3JtYWxTdGFydC5zY2FsZSgocmlnaHQueU1heCAtIGkpIC8gKHJpZ2h0LnlNYXggLSByaWdodC55U3RhcnQpKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ck5vcm1hbCA9IHJpZ2h0LnhTdGFydCAtIGxlZnQueFN0YXJ0ID09PSAwID8gbGEudW5pdCgpIDogbGEuYWRkKGxiKS51bml0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBncmF5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JnID0gbmV3IFZlY3RvcjNkKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBsaWdodCBvZiBsaWdodHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0ID0gb3JnLnN1YnRyYWN0KGxpZ2h0KS51bml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmF5ICs9IGRpZmZ1c2VUcmVtKDEsIDg4LCBjdXJOb3JtYWwsIGxpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gTWF0aC5mbG9vcihsZWZ0LnhTdGFydCk7IGsgPCBNYXRoLmZsb29yKHJpZ2h0LnhTdGFydCk7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHpDdXJyZW50IDw9IHpCdWZmZXJbaV1ba10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6QnVmZmVyW2ldW2tdID0gekN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaUJ1ZmZlcltpXVtrXSA9IG5ldyBSR0JBKGdyYXksIGdyYXksIGdyYXksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB6Q3VycmVudCArPSB6RGVsdGFUb1g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2hhZGluZ1R5cGUgPT09ICdQaG9uZycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWNjb3JkaW5nIHRvIGludGVuc2l0eVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYSA9IGxlZnQubm9ybWFsRW5kLnNjYWxlKChpIC0gbGVmdC55U3RhcnQpIC8gKGxlZnQueU1heCAtIGxlZnQueVN0YXJ0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQobGVmdC5ub3JtYWxTdGFydC5zY2FsZSgobGVmdC55TWF4IC0gaSkgLyAobGVmdC55TWF4IC0gbGVmdC55U3RhcnQpKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxiID0gcmlnaHQubm9ybWFsRW5kLnNjYWxlKChpIC0gcmlnaHQueVN0YXJ0KSAvIChyaWdodC55TWF4IC0gcmlnaHQueVN0YXJ0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQocmlnaHQubm9ybWFsU3RhcnQuc2NhbGUoKHJpZ2h0LnlNYXggLSBpKSAvIChyaWdodC55TWF4IC0gcmlnaHQueVN0YXJ0KSkpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gTWF0aC5mbG9vcihsZWZ0LnhTdGFydCk7IGsgPCBNYXRoLmZsb29yKHJpZ2h0LnhTdGFydCk7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHpDdXJyZW50IDw9IHpCdWZmZXJbaV1ba10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6QnVmZmVyW2ldW2tdID0gekN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyTm9ybWFsID0gcmlnaHQueFN0YXJ0IC0gbGVmdC54U3RhcnQgPT09IDAgPyBsYS51bml0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYS5zY2FsZSgocmlnaHQueFN0YXJ0IC0gaykgLyAocmlnaHQueFN0YXJ0IC0gbGVmdC54U3RhcnQpKS5hZGQobGIuc2NhbGUoKGsgLSBsZWZ0LnhTdGFydCkgLyAocmlnaHQueFN0YXJ0IC0gbGVmdC54U3RhcnQpKSkudW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBncmF5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmcgPSBuZXcgVmVjdG9yM2QoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbGlnaHQgb2YgbGlnaHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0ID0gb3JnLnN1YnRyYWN0KGxpZ2h0KS51bml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXkgKz0gZGlmZnVzZVRyZW0oMSwgODgsIGN1ck5vcm1hbCwgbGlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpQnVmZmVyW2ldW2tdID0gbmV3IFJHQkEoZ3JheSwgZ3JheSwgZ3JheSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHpDdXJyZW50ICs9IHpEZWx0YVRvWDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0LnhTdGFydCArPSBsZWZ0LmRlbHRhO1xuICAgICAgICAgICAgICAgIHJpZ2h0LnhTdGFydCArPSByaWdodC5kZWx0YTtcbiAgICAgICAgICAgICAgICBsZWZ0LnpTdGFydCArPSBsZWZ0LnpEZWx0YVRvWTtcbiAgICAgICAgICAgICAgICByaWdodC56U3RhcnQgKz0gcmlnaHQuekRlbHRhVG9ZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGlCdWZmZXI7XG59O1xuZXhwb3J0IHsgYnVmZmVySW5pdCwgc2NhbkNvbnZlcnNpb24gfTtcbiIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gJy4uL21hdGgvTWF0cml4JztcbmNvbnN0IHdvcmxkMkNhbWVyYSA9IChjYW1lcmEpID0+IHtcbiAgICBjb25zdCBSID0gbmV3IE1hdHJpeChbXG4gICAgICAgIFtjYW1lcmEuVS54LCBjYW1lcmEuVS55LCBjYW1lcmEuVS56LCAwXSxcbiAgICAgICAgW2NhbWVyYS5WLngsIGNhbWVyYS5WLnksIGNhbWVyYS5WLnosIDBdLFxuICAgICAgICBbY2FtZXJhLk4ueCwgY2FtZXJhLk4ueSwgY2FtZXJhLk4ueiwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAxXVxuICAgIF0pO1xuICAgIGNvbnN0IFQgPSBuZXcgTWF0cml4KFtcbiAgICAgICAgWzEsIDAsIDAsIC1jYW1lcmEucG9zaXRpb24ueF0sXG4gICAgICAgIFswLCAxLCAwLCAtY2FtZXJhLnBvc2l0aW9uLnldLFxuICAgICAgICBbMCwgMCwgMSwgLWNhbWVyYS5wb3NpdGlvbi56XSxcbiAgICAgICAgWzAsIDAsIDAsIDFdXG4gICAgXSk7XG4gICAgcmV0dXJuIFIubXVsdGlwbHkoVCk7XG59O1xuY29uc3QgcGVyc3BlY3RpdmVUcmFuc2Zvcm0gPSAoaCwgZCwgZikgPT4gbmV3IE1hdHJpeChbXG4gICAgW2QgLyBoLCAwLCAwLCAwXSxcbiAgICBbMCwgZCAvIGgsIDAsIDBdLFxuICAgIFswLCAwLCBmIC8gKGYgLSBkKSwgLWQgKiBmIC8gKGYgLSBkKV0sXG4gICAgWzAsIDAsIDEsIDBdXG5dKTtcbi8qKlxuICogQmFjay1mYWNlIGN1bGxpbmdcbiAqIFZpc2libGUgaWYgTnAgZG90IHByb2R1Y3QgTiA+IDBcbiAqIE5vdGU6IFNvbWUgdGhlIHBvbHlnb25zIGFyZSBkZW5vdGVkIGluIGFudGktY2xvY2t3aXNlIG9yZGVyXG4gKi9cbmNvbnN0IGJhY2tGYWNlQ3VsbGluZyA9IChtb2RlbCwgY2FtZXJhKSA9PiB7XG4gICAgY29uc3QgYmFja0ZhY2VTZXQgPSBuZXcgU2V0KCk7XG4gICAgbW9kZWwuZmFjZXMuZm9yRWFjaCgoZmFjZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmlldyA9IGNhbWVyYS5wb3NpdGlvbi5zdWJ0cmFjdChtb2RlbC5wb2ludHNbZmFjZVsxXV0pLnVuaXQoKTtcbiAgICAgICAgY29uc3QgY29zID0gbW9kZWwuZmFjZXNOb3JtYWxbaW5kZXhdLmRvdFByb2R1Y3Qodmlldyk7XG4gICAgICAgIGlmIChjb3MgPj0gMCkge1xuICAgICAgICAgICAgYmFja0ZhY2VTZXQuYWRkKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBiYWNrRmFjZVNldDtcbn07XG4vLyBDYWxjdWxhdGUgbW9kZWxcbmNvbnN0IGNhbGNNb2RlbCA9IChtb2RlbCwgY2FtZXJhLCBoLCBkLCBmKSA9PiB7XG4gICAgY29uc3QgY29tYm8gPSBwZXJzcGVjdGl2ZVRyYW5zZm9ybShoLCBkLCBmKS5tdWx0aXBseSh3b3JsZDJDYW1lcmEoY2FtZXJhKSk7XG4gICAgcmV0dXJuIG1vZGVsLnBvaW50cy5tYXAocG9pbnQgPT4ge1xuICAgICAgICByZXR1cm4gY29tYm8ubXVsdGlwbHkocG9pbnQuZXh0ZW5kKCkudG9NYXRyaXgoKSkudG9WZWN0b3IoKTtcbiAgICB9KTtcbn07XG5leHBvcnQgeyBiYWNrRmFjZUN1bGxpbmcsIGNhbGNNb2RlbCB9O1xuIiwiLyoqXG4gKiBHZXQgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgMjU1KGJvdGggaW5jbHVzaXZlKTtcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTEwIDAxOjMzOjQ1XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMTk6MTU6MDhcbiAqL1xuLy8gZGF0YSBmaWxlcyB0byBiZSBsb2FkZWRcbmV4cG9ydCBjb25zdCBmaWxlcyA9IFtcbiAgICAnYXRjJyxcbiAgICAnYmVuY2gnLFxuICAgICdjb3cnLFxuICAgICdjb25lJyxcbiAgICAnaG91c2UnLFxuICAgICdrbmlnaHQnXG5dO1xuZXhwb3J0IGNvbnN0IHNoYWRpbmdNb2RlbHMgPSBbXG4gICAgJ0NvbnN0YW50JyxcbiAgICAnR291cmF1ZCcsXG4gICAgJ1Bob25nJ1xuXTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTggMDE6MzM6NTZcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wNS0wNiAwMTowMDozNlxuICovXG5pbXBvcnQgeyBDYW1lcmEsIE1vZGVsLCBWZWN0b3IzZCB9IGZyb20gJy4uLy4uL2xpYi9pbmRleCc7XG5jb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgIGg6IDEsXG4gICAgZDogMSxcbiAgICBmOiAxMDAwLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBpQnVmZmVyOiBbXSxcbiAgICBsaWdodHM6IFtcbiAgICAgICAgbmV3IFZlY3RvcjNkKDEwMCwgMTAwLCAxMDApXG4gICAgXSxcbiAgICBzaGFkaW5nVHlwZTogJ1Bob25nJ1xufTtcbmNvbnN0IGNhbWVyYSA9IG5ldyBDYW1lcmEobmV3IFZlY3RvcjNkKDEwLCAxMCwgMTApLCBuZXcgVmVjdG9yM2QoMCwgMCwgMCksIG5ldyBWZWN0b3IzZCgwLCAtMSwgMCkpO1xuY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoKTtcbmV4cG9ydCB7IHBhcmFtZXRlcnMsIGNhbWVyYSwgbW9kZWwgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTQgMTU6MTg6NTJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wNS0wNiAwMTowMTowN1xuICovXG5pbXBvcnQgeyBtb2RlbCwgY2FtZXJhLCBwYXJhbWV0ZXJzIH0gZnJvbSAnLi9jb25maWdzL3BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgZmlsZXMsIHNoYWRpbmdNb2RlbHMgfSBmcm9tICcuL2NvbmZpZ3MvY29uc3RhbnRzJztcbmltcG9ydCBsb2FkRmlsZSBmcm9tICcuL3V0aWxzL2xvYWRGaWxlJztcbmltcG9ydCB7IGxvYWRNZW51LCBiaW5kU2xpZGVyLCByZWFjdFRvT3BlcmF0aW9uIH0gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IHsgY2FsY0FsbCB9IGZyb20gJy4vdXRpbHMvY2FsY0FsbCc7XG4vKioqKioqKioqKioqKioqKioqKiogSW5pdGlhbGl6ZSBET00gKioqKioqKioqKioqKioqKioqKiovXG4vLyBHZXQgY2FudmFzIHJlYWR5XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbmNvbnN0IHdpZHRoID0gY2FudmFzLndpZHRoO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4vLyBMb2FkIGFsbCBtb2RlbCBvcHRpb25zIHRvIG1lbnVcbmNvbnN0IGNob29zZV9tb2RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdC5jaG9vc2VfbW9kZWwnKTtcbmxvYWRNZW51KGNob29zZV9tb2RlbCwgZmlsZXMpO1xuLy8gTG9hZCBzaGFkaW5nIHR5cGUgb3B0aW9ucyB0byBtZW51XG5jb25zdCBzaGFkaW5nX3R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hhZGluZ190eXBlJyk7XG5sb2FkTWVudShzaGFkaW5nX3R5cGUsIHNoYWRpbmdNb2RlbHMpO1xuLy8gLy8gR2V0IHRocmVlIHNsaWRlcyByZWFkeSBiaW5kaW5nIHdpdGggaCwgZCwgZiBwYXJhbWV0ZXJcblsnaCcsICdkJywgJ2YnXS5mb3JFYWNoKGl0ZW0gPT4gYmluZFNsaWRlcihpdGVtLCBkcmF3KSk7XG4vLyBCdXR0b25cbi8vIEJpbmQgcmVuZGVyIGJ1dHRvbiB3aXRoIGxvYWQgZmlsZSBhbmQgcmVuZGVyIG9wZXJ0aW9uXG5jb25zdCByZW5kZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVuZGVyJyk7XG5yZW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbW9kZWxJbmRleCA9IGNob29zZV9tb2RlbC5zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IHNoYWRpbmdUeXBlSW5kZXggPSBzaGFkaW5nX3R5cGUuc2VsZWN0ZWRJbmRleDtcbiAgICAvLyBFeGNlcHRpb24gaGFuZGxpbmdcbiAgICBpZiAobW9kZWxJbmRleCA9PT0gMClcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBtb2RlbCB0byByZW5kZXInKTtcbiAgICBpZiAoc2hhZGluZ1R5cGVJbmRleCA9PT0gMClcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBzaGFkaW5nIHR5cGUnKTtcbiAgICAvLyBQcm9jZXNzIGRhdGFcbiAgICBsZXQgbW9kZWxOYW1lID0gY2hvb3NlX21vZGVsLm9wdGlvbnNbbW9kZWxJbmRleF0udmFsdWU7XG4gICAgbW9kZWxOYW1lID0gYC4vcHVibGljL21vZGVsLyR7bW9kZWxOYW1lfS5kLnR4dGA7XG4gICAgbGV0IHNoYWRpbmdUeXBlTmFtZSA9IHNoYWRpbmdfdHlwZS5vcHRpb25zW3NoYWRpbmdUeXBlSW5kZXhdLnZhbHVlO1xuICAgIGxvYWRGaWxlKG1vZGVsTmFtZSwgc2hhZGluZ1R5cGVOYW1lLCBkcmF3KTtcbiAgICByZW5kZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xufSk7XG4vLyBiaW5kIHJlc2V0IGJ1dHRvbiB3aXRoIHJlZnJlc2ggZnVuY3Rpb25cbmNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XG5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuLyoqKioqKioqKioqKioqKioqKioqIEluaXRpYWxpemUgRGF0YSAqKioqKioqKioqKioqKioqKioqKi9cbnBhcmFtZXRlcnMud2lkdGggPSB3aWR0aDtcbnBhcmFtZXRlcnMuaGVpZ2h0ID0gaGVpZ2h0O1xuLy8gLy8gQmluZGluZyBvcGVyYXRpb25cbnJlYWN0VG9PcGVyYXRpb24oY2FudmFzLCBkcmF3KTtcbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgLy8gY2xlYXIgYmVmb3JlIGltYWdlXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAvLyBkcmF3XG4gICAgY29uc3QgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcbiAgICBjb25zdCBpQnVmZmVyID0gY2FsY0FsbChtb2RlbCwgY2FtZXJhLCBwYXJhbWV0ZXJzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgdCA9IGkgKiB3aWR0aCArIGo7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGlCdWZmZXJbaV1bal07XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgMF0gPSBjb2xvci5yO1xuICAgICAgICAgICAgZGF0YVt0ICogNCArIDFdID0gY29sb3IuZztcbiAgICAgICAgICAgIGRhdGFbdCAqIDQgKyAyXSA9IGNvbG9yLmI7XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgM10gPSBjb2xvci5hO1xuICAgICAgICB9XG4gICAgfVxuICAgIGltYWdlRGF0YS5kYXRhLnNldChkYXRhKTtcbiAgICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XG59XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE5IDE4OjI1OjI0XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDUtMDYgMDE6MDE6MTZcbiAqL1xuaW1wb3J0IHsgYmFja0ZhY2VDdWxsaW5nLCBjYWxjTW9kZWwsIHNjYW5Db252ZXJzaW9uIH0gZnJvbSAnLi4vLi4vbGliL2luZGV4JztcbmNvbnN0IGNhbGNBbGwgPSAobW9kZWwsIGNhbWVyYSwgcGFyYW1ldGVycykgPT4ge1xuICAgIGNhbWVyYS5jYWxjTlVWKCk7XG4gICAgY29uc3QgYmFja0ZhY2VTZXQgPSBiYWNrRmFjZUN1bGxpbmcobW9kZWwsIGNhbWVyYSk7XG4gICAgY29uc3QgY2FsY1BvaW50cyA9IGNhbGNNb2RlbChtb2RlbCwgY2FtZXJhLCBwYXJhbWV0ZXJzLmgsIHBhcmFtZXRlcnMuZCwgcGFyYW1ldGVycy5mKTtcbiAgICByZXR1cm4gc2NhbkNvbnZlcnNpb24obW9kZWwsIHBhcmFtZXRlcnMubGlnaHRzLCBjYWxjUG9pbnRzLCBiYWNrRmFjZVNldCwgcGFyYW1ldGVycy5oZWlnaHQsIHBhcmFtZXRlcnMud2lkdGgsIHBhcmFtZXRlcnMuc2hhZGluZ1R5cGUpO1xufTtcbmV4cG9ydCB7IGNhbGNBbGwgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTQgMTg6NTU6NTFcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wNS0wNiAwMTowNjoyM1xuICovXG4vKioqKioqKioqKioqKioqKioqKiogRE9NIE9QRVJBVElPTiAqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCB7IHBhcmFtZXRlcnMsIGNhbWVyYSB9IGZyb20gJy4uL2NvbmZpZ3MvcGFyYW1ldGVycyc7XG4vKipcbiAqIExvYWQgbWVudVxuICogQHBhcmFtIHNlbGVjdERPTVxuICovXG5leHBvcnQgY29uc3QgbG9hZE1lbnUgPSAoc2VsZWN0RE9NLCBkYXRhKSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGZpbGUpO1xuICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZmlsZSkpO1xuICAgICAgICBzZWxlY3RET00uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIEJpbmQgdGhlIHZhbHVlIG9mIHNsaWRlciB3aXRoIGNhbWVyYSBzZXR0aW5nXG4gKiBAcGFyYW0gbmFtZVxuICovXG5leHBvcnQgY29uc3QgYmluZFNsaWRlciA9IChuYW1lLCBkcmF3KSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bmFtZX1gKTtcbiAgICBjb25zdCBzbGlkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bmFtZX1fVmApO1xuICAgIHNsaWRlci52YWx1ZSA9IHBhcmFtZXRlcnNbbmFtZV07XG4gICAgc2xpZGVyVGV4dC5pbm5lckhUTUwgPSBwYXJhbWV0ZXJzW25hbWVdO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBhcmFtZXRlcnNbbmFtZV0gPSB0aGlzLnZhbHVlO1xuICAgICAgICBzbGlkZXJUZXh0LmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGRyYXcoKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIEJpbmQgb3BlcmF0aW9uIHRvIGNvbnRyb2wgdGhlIGZpbmFsIGVmZmVjdFxuICovXG5jb25zdCBjYW1lcmFMZW4gPSAyO1xuZXhwb3J0IGNvbnN0IHJlYWN0VG9PcGVyYXRpb24gPSAoY2FudmFzLCBkcmF3KSA9PiB7XG4gICAgLy8gem9vbWluZyB0aGUgbW9kZWxcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQud2hlZWxEZWx0YSA+IDApIHtcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbiA9IGNhbWVyYS5wb3NpdGlvbi5zY2FsZSg2IC8gNSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb24uc2NhbGUoNSAvIDYpO1xuICAgICAgICB9XG4gICAgICAgIGRyYXcoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2knOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ICs9IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdrJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSAtPSBjYW1lcmFMZW47XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaic6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggLT0gY2FtZXJhTGVuO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xMiAxNTowODo1MVxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTA1LTA2IDAxOjAwOjQ3XG4gKi9cbmltcG9ydCB7IG1vZGVsLCBwYXJhbWV0ZXJzIH0gZnJvbSAnLi4vY29uZmlncy9wYXJhbWV0ZXJzJztcbmltcG9ydCB7IFZlY3RvcjNkIH0gZnJvbSAnLi4vLi4vbGliL2luZGV4Jztcbi8qKlxuICogUGFyc2UgdGhlIGRhdGEgZnJvbSB0aGUgLmQgZmlsZSwgcmV0dXJuIGEgTW9kZWxcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0gb2JqUG9zaXRpb25cbiAqL1xuY29uc3QgcGFyc2VGaWxlID0gKGRhdGEsIG9ialBvc2l0aW9uKSA9PiB7XG4gICAgbGV0IGxpbmVzID0gZGF0YS5tYXRjaCgvW15cXHJcXG5dKy9nKTtcbiAgICBsZXQgW251bSwgcG9pbnRzTnVtLCBmYWNlc051bV0gPSBsaW5lc1swXS50cmltKCkuc3BsaXQoL1xccysvKTtcbiAgICAvLyBDYXVzZSBpbiBzb21lIGZpbGUsIHRoZXJlIGFyZSBqdXN0IHR3byBudW1iZXIgaW4gZmlyc3QgbGluZVxuICAgIGlmIChmYWNlc051bSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZmFjZXNOdW0gPSBwb2ludHNOdW07XG4gICAgICAgIHBvaW50c051bSA9IG51bTtcbiAgICB9XG4gICAgY29uc3QgW3BOdW0sIGZOdW1dID0gW3BhcnNlSW50KHBvaW50c051bSwgMTApLCBwYXJzZUludChmYWNlc051bSldO1xuICAgIC8vIGxvYWQgZGF0YSB0byBtb2RlbFxuICAgIGNvbnN0IGxhc3RNb2RlbFBvaW50c051bSA9IG1vZGVsLnBvaW50cy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcE51bTsgaSsrKSB7XG4gICAgICAgIGxldCBbeCwgeSwgel0gPSBsaW5lc1tpXS50cmltKCkuc3BsaXQoL1xccysvKTtcbiAgICAgICAgbW9kZWwucG9pbnRzLnB1c2gobmV3IFZlY3RvcjNkKHBhcnNlRmxvYXQoeCkgKyBvYmpQb3NpdGlvbi54LCBwYXJzZUZsb2F0KHkpICsgb2JqUG9zaXRpb24ueSwgcGFyc2VGbG9hdCh6KSArIG9ialBvc2l0aW9uLnopKTtcbiAgICAgICAgbW9kZWwucG9pbnRzTm9ybWFsLnB1c2gobmV3IFZlY3RvcjNkKDAsIDAsIDApKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IHBOdW0gKyAxOyBpIDw9IHBOdW0gKyBmTnVtOyBpKyspIHtcbiAgICAgICAgbGV0IFtfLCAuLi5yZXNdID0gbGluZXNbaV0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIGlmIChyZXMubGVuZ3RoIDw9IDIpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgbGV0IGZhY2UgPSByZXMubWFwKCh4KSA9PiBwYXJzZUludCh4LCAxMCkgLSAxICsgbGFzdE1vZGVsUG9pbnRzTnVtKTtcbiAgICAgICAgbW9kZWwuZmFjZXMucHVzaChmYWNlKTtcbiAgICAgICAgbW9kZWwuZmFjZXNOb3JtYWwucHVzaChtb2RlbC5ub3JtYWxpemVGYWNlKG1vZGVsLmZhY2VzLmxlbmd0aCAtIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGVsO1xufTtcbi8qKlxuICogUmVhZCB0aGUgY29udGVudCBvZiBhIGZpbGVcbiAqIEBwYXJhbSBmaWxlUGF0aFxuICovXG5jb25zdCByZWFkRmlsZSA9IChmaWxlUGF0aCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignR0VUJywgZmlsZVBhdGgsIHRydWUpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWooKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBMb2FkIGFuZCByZW5kZXIgc2VsZWN0ZWQgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlUGF0aFxuICovXG5jb25zdCBsb2FkRmlsZSA9IChmaWxlUGF0aCwgc2hhZGluZ1R5cGUsIGRyYXcpID0+IHtcbiAgICByZWFkRmlsZShmaWxlUGF0aClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcGFyc2VGaWxlKGRhdGEsIG5ldyBWZWN0b3IzZCgwLCAwLCAwKSk7XG4gICAgICAgIG1vZGVsLmNvbG9ySW5pdChmYWxzZSwgcGFyYW1ldGVycy5saWdodHMpO1xuICAgICAgICBtb2RlbC5jb21wdXRlU2NlbmVQb2ludE5vcm1hbCgpO1xuICAgICAgICBwYXJhbWV0ZXJzLnNoYWRpbmdUeXBlID0gc2hhZGluZ1R5cGU7XG4gICAgICAgIGRyYXcoKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgTG9hZCBvciBwYXJzZSBmaWxlJHtmaWxlUGF0aH0gZXJyb3JgKTtcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBsb2FkRmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=