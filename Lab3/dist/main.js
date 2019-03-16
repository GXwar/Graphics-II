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
        console.log('---------- points_normal -----------');
        // this.pointsNormal.forEach((pointNormal: Vector3d) => {
        //   console.log(pointNormal);
        // })
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
            iBuffer[i][j] = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["RGBA"](200, 200, 200, 255);
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
const scanConversion = (model, lights, calcPoints, backFaceSet, height, width) => {
    const [iBuffer, zBuffer] = bufferInit(height, width);
    let activeEdgeTable = [];
    const redSet = new Set();
    // for each face
    model.faces.forEach((face, index) => {
        // build edge table
        const edgeTable = edgeTableInit(height);
        for (let i = 0; i < face.length; i++) {
            // get an edge 
            let [indexStart, indexEnd] = [face[i], face[(i + 1) % face.length]];
            let [lowerPoint, upperPoint] = [calcPoints[indexStart], calcPoints[indexEnd]];
            // ignore horizontal edge and out of range point
            if (toPixel(lowerPoint.y, height) === toPixel(upperPoint.y, height)
                || lowerPoint.y > 1 || lowerPoint.y < -1)
                continue;
            // swap the order of two points
            if (lowerPoint.y > upperPoint.y) {
                [lowerPoint, upperPoint] = [upperPoint, lowerPoint];
                [indexStart, indexEnd] = [indexEnd, indexStart];
            }
            // create edge table element and add it into the edge table
            const ETElement = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["EdgeTableElement"](toPixel(lowerPoint.y, height), toPixel(upperPoint.y, height), toFloatPixel(lowerPoint.x, height), (lowerPoint.x - upperPoint.x) / (lowerPoint.y - upperPoint.y), lowerPoint.z, (lowerPoint.z - upperPoint.z) / (toPixel(lowerPoint.y, height) - toPixel(upperPoint.y, height)), model.pointsNormal[indexStart], model.pointsNormal[indexEnd]);
            edgeTable[Math.floor(ETElement.yStart)].push(ETElement);
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
                // console.log(`----- ${j} ${j + 1} -----`)
                // according to intensity
                const la = left.normalEnd.scale((i - left.yStart) / (left.yMax - left.yStart)).add(left.normalStart.scale((left.yMax - i) / (left.yMax - left.yStart)));
                const lb = right.normalEnd.scale((i - right.yStart) / (right.yMax - right.yStart)).add(right.normalStart.scale((right.yMax - i) / (right.yMax - right.yStart)));
                for (let k = Math.floor(left.xStart); k < Math.floor(right.xStart); k++) {
                    let covered = false;
                    if (zCurrent <= zBuffer[i][k]) {
                        if (zBuffer[i][k] != 1)
                            covered = true;
                        zBuffer[i][k] = zCurrent;
                        const curNormal = right.xStart - left.xStart == 0 ? la.unit() :
                            la.scale((right.xStart - k) / (right.xStart - left.xStart)).add(lb.scale((k - left.xStart) / (right.xStart - left.xStart))).unit();
                        let gray = 0;
                        const org = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 0, 0);
                        for (let light of lights) {
                            light = org.subtract(light).unit();
                            gray += diffuseTrem(1, 88, curNormal, light);
                        }
                        if (backFaceSet.has(index)) {
                            iBuffer[i][k] = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["RGBA"](covered ? 255 : 0, covered ? 0 : 255, 0, 255);
                            redSet.add(index);
                        }
                        else {
                            iBuffer[i][k] = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["RGBA"](gray, gray, gray, 255);
                        }
                    }
                    zCurrent += zDeltaToX;
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
    'house',
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
    iBuffer: [],
    lights: [
        new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](100, 100, 100)
    ]
};
const camera = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Camera"](new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](10, 10, 10), new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 0, 0), new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 1, 0));
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
    // if (modelIndex1 === 0 || modelIndex2 === 0) {
    //   alert('Please select a model to render');
    // }
    let modelNames = [];
    modelNames.push(choose_model1.options[modelIndex1].value);
    modelNames.push(choose_model2.options[modelIndex2].value);
    modelNames = modelNames
        .filter((name) => name.length != 0)
        .map((name) => {
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
    const iBuffer = Object(_utils_calcAll__WEBPACK_IMPORTED_MODULE_3__["calcAll"])(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].lights, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"]);
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
 * @Last Modified time: 2019-02-21 20:16:52
 */

const calcAll = (model, lights, camera, parameters) => {
    camera.calcNUV();
    const backFaceSet = Object(_lib_index__WEBPACK_IMPORTED_MODULE_0__["backFaceCulling"])(model, camera);
    const calcPoints = Object(_lib_index__WEBPACK_IMPORTED_MODULE_0__["calcModel"])(model, camera, parameters.h, parameters.d, parameters.f);
    return Object(_lib_index__WEBPACK_IMPORTED_MODULE_0__["scanConversion"])(model, lights, calcPoints, backFaceSet, parameters.height, parameters.width);
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
    console.log('---------- points ----------');
    for (let i = 1; i <= pNum; i++) {
        let [x, y, z] = lines[i].trim().split(/\s+/);
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].points.push(new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](parseFloat(x) + objPosition.x, parseFloat(y) + objPosition.y, parseFloat(z) + objPosition.z));
        // console.log(new Vector3d(
        //   parseFloat(x) + objPosition.x, 
        //   parseFloat(y) + objPosition.y, 
        //   parseFloat(z) + objPosition.z
        // ));
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].pointsNormal.push(new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](0, 0, 0));
    }
    console.log('---------- faces ----------');
    for (let i = pNum + 1; i <= pNum + fNum; i++) {
        let [_, ...res] = lines[i].trim().split(/\s+/);
        if (res.length <= 2)
            continue;
        let face = res.map((x) => parseInt(x, 10) - 1 + lastModelPointsNum);
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].faces.push(face);
        // console.log(face);
        // console.log(`face_normal:`);
        // console.log(model.normalizeFace(model.faces.length - 1))
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
const loadFile = (filePaths, draw) => {
    if (filePaths.length == 0) {
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].colorInit(false, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].lights);
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].computeScenePointNormal();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NhbWVyYXMvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvbWF0aC9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL21hdGgvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXRoL1ZlY3RvcjNkLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXRoL1ZlY3RvcjRkLnRzIiwid2VicGFjazovLy8uL2xpYi9vYmplY3RzL0VkZ2VUYWJsZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvUkdCQS50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL2ZpbGxQaXhlbC50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL21vZGVsaW5nLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlscy9yYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy9wYXJhbWV0ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2FsY0FsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9sb2FkRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQjs7Ozs7Ozs7Ozs7OztBQ2hCbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzBDO0FBQzFDO0FBQ3VDO0FBQ0k7QUFDQTtBQUMzQztBQUM4RDtBQUN0QjtBQUNGO0FBQ3RDO0FBQ2tFO0FBQ0M7Ozs7Ozs7Ozs7Ozs7QUNabkU7QUFBQTtBQUFBO0FBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUMsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QiwyQkFBMkIsT0FBTztBQUNsQywrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtEQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNrQjs7Ozs7Ozs7Ozs7OztBQzVDbEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQjs7Ozs7Ozs7Ozs7OztBQ1psQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNJO0FBQ3RDLHVCQUF1Qiw4Q0FBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29COzs7Ozs7Ozs7Ozs7O0FDcERwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ0k7QUFDSjtBQUNsQyx1QkFBdUIsOENBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQVE7QUFDM0I7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQjs7Ozs7Ozs7Ozs7OztBQzVCcEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRCOzs7Ozs7Ozs7Ozs7O0FDbkI1QjtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUNTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMENBQUk7QUFDN0M7QUFDQTtBQUNBLHlDQUF5QywwQ0FBSSxDQUFDLDBEQUFNLElBQUksMERBQU0sSUFBSSwwREFBTTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkJBQTZCO0FBQ3BELDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDaUI7Ozs7Ozs7Ozs7Ozs7QUNqRGpCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dCOzs7Ozs7Ozs7Ozs7O0FDZGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDLGdDQUFnQywrQ0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywyREFBZ0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQ7QUFDQSwyQkFBMkIseUJBQXlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiwyQkFBMkIsZ0NBQWdDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxFQUFFLEdBQUcsTUFBTTtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsOEJBQThCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbURBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCwrQ0FBSTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsK0NBQUk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNzQzs7Ozs7Ozs7Ozs7OztBQ2hJdEM7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDeEM7QUFDQSxrQkFBa0IsbURBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtREFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxtREFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDc0M7Ozs7Ozs7Ozs7Ozs7QUM3Q3RDO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpQjs7Ozs7Ozs7Ozs7OztBQ2hCakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBUTtBQUNwQjtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFNLEtBQUssbURBQVEsa0JBQWtCLG1EQUFRLGVBQWUsbURBQVE7QUFDdkYsa0JBQWtCLGdEQUFLO0FBQ2M7Ozs7Ozs7Ozs7Ozs7QUNwQnJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUU7QUFDekI7QUFDNkI7QUFDM0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBUTtBQUNSLDJEQUFRO0FBQ1I7QUFDQSxnQ0FBZ0MsNkRBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEtBQUs7QUFDdEMsS0FBSztBQUNMLElBQUksK0RBQVE7QUFDWjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDhEQUFVO0FBQ1YsOERBQVU7QUFDVjtBQUNBLG1FQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOERBQU8sQ0FBQyx5REFBSyxFQUFFLDhEQUFVLFNBQVMsMERBQU0sRUFBRSw4REFBVTtBQUN4RSxtQkFBbUIsWUFBWTtBQUMvQix1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RTtBQUM3RTtBQUNBO0FBQ0Esd0JBQXdCLGtFQUFlO0FBQ3ZDLHVCQUF1Qiw0REFBUztBQUNoQyxXQUFXLGlFQUFjO0FBQ3pCO0FBQ21COzs7Ozs7Ozs7Ozs7O0FDYm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJEO0FBQ2Q7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLElBQUksd0RBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw4Q0FBOEMsS0FBSztBQUNuRCxrREFBa0QsS0FBSztBQUN2RCxtQkFBbUIsOERBQVU7QUFDN0IsMkJBQTJCLDhEQUFVO0FBQ3JDO0FBQ0EsUUFBUSw4REFBVTtBQUNsQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQU0sWUFBWSwwREFBTTtBQUNwQztBQUNBO0FBQ0EsWUFBWSwwREFBTSxZQUFZLDBEQUFNO0FBQ3BDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBEO0FBQ2Y7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlEQUFLO0FBQ3BDO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQSxRQUFRLHlEQUFLLGlCQUFpQixtREFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBSyx1QkFBdUIsbURBQVE7QUFDNUM7QUFDQTtBQUNBLDBCQUEwQixrQkFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBSyxrQkFBa0IseURBQUssZUFBZSx5REFBSztBQUN4RDtBQUNBLFdBQVcseURBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBSyxrQkFBa0IsOERBQVU7QUFDekMsUUFBUSx5REFBSztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtREFBUTtBQUN4QztBQUNBLFNBQVM7QUFDVDtBQUNBLDZDQUE2QyxLQUFLO0FBQ2xELFNBQVM7QUFDVDtBQUNBO0FBQ2UsdUVBQVEsRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJjbGFzcyBDYW1lcmEge1xuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCB2aWV3aW5nUG9pbnQsIFVQKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy52aWV3aW5nUG9pbnQgPSB2aWV3aW5nUG9pbnQ7XG4gICAgICAgIHRoaXMuVVAgPSBVUDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogY2FsY3VsYXRlIHRoZSBOLCBVLCBWIHZlY3RvciBvZiB0aGUgY2FtZXJhXG4gICAgICogQHBhcmFtIG9iamVjdFBvc2l0aW9uXG4gICAgICovXG4gICAgY2FsY05VVigpIHtcbiAgICAgICAgdGhpcy5OID0gdGhpcy52aWV3aW5nUG9pbnQuc3VidHJhY3QodGhpcy5wb3NpdGlvbikudW5pdCgpO1xuICAgICAgICB0aGlzLlUgPSB0aGlzLk4uY3Jvc3NQcm9kdWN0KHRoaXMuVVApLnVuaXQoKTtcbiAgICAgICAgdGhpcy5WID0gdGhpcy5VLmNyb3NzUHJvZHVjdCh0aGlzLk4pO1xuICAgIH1cbn1cbmV4cG9ydCB7IENhbWVyYSB9O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqIC4vY2FtZXJhcyAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IENhbWVyYSB9IGZyb20gJy4vY2FtZXJhcy9DYW1lcmEnO1xuLyoqKioqKioqKioqKioqKioqKioqIC4vbWF0aCAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IE1hdHJpeCB9IGZyb20gJy4vbWF0aC9NYXRyaXgnO1xuZXhwb3J0IHsgVmVjdG9yM2QgfSBmcm9tICcuL21hdGgvVmVjdG9yM2QnO1xuZXhwb3J0IHsgVmVjdG9yNGQgfSBmcm9tICcuL21hdGgvVmVjdG9yNGQnO1xuLyoqKioqKioqKioqKioqKioqKioqIC4vb2JqZWN0cyAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IEVkZ2VUYWJsZUVsZW1lbnQgfSBmcm9tICcuL29iamVjdHMvRWRnZVRhYmxlRWxlbWVudCc7XG5leHBvcnQgeyBNb2RlbCB9IGZyb20gJy4vb2JqZWN0cy9Nb2RlbCc7XG5leHBvcnQgeyBSR0JBIH0gZnJvbSAnLi9vYmplY3RzL1JHQkEnO1xuLyoqKioqKioqKioqKioqKioqKioqIC4vdHJhbnNmb3JtICoqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IHsgYmFja0ZhY2VDdWxsaW5nLCBjYWxjTW9kZWwgfSBmcm9tICcuL3RyYW5zZm9ybS9tb2RlbGluZyc7XG5leHBvcnQgeyBidWZmZXJJbml0LCBzY2FuQ29udmVyc2lvbiB9IGZyb20gJy4vdHJhbnNmb3JtL2ZpbGxQaXhlbCc7XG4iLCJpbXBvcnQgeyBWZWN0b3I0ZCB9IGZyb20gJy4vVmVjdG9yNGQnO1xuY2xhc3MgTWF0cml4IHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXNPck0sIG4pIHtcbiAgICAgICAgaWYgKHZhbHVlc09yTSAhPT0gdW5kZWZpbmVkICYmIG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzT3JNOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKEFycmF5LmZyb20oeyBsZW5ndGg6IG4gfSwgXyA9PiAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWVzT3JNICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzT3JNO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBtdWx0aXBseSB3aXRoIG90aGVyIG1hdHJpeCwgcmV0dXJuIGEgbmV3IG1hdHJpeFxuICAgICAqIEBwYXJhbSBvdGhlclxuICAgICAqL1xuICAgIG11bHRpcGx5KG90aGVyKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlc1swXS5sZW5ndGggIT09IG90aGVyLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IG11bHRpcGx5IHRoZXNlIHR3byBtYXRyaWNlcyEnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtID0gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBuID0gb3RoZXIudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgayA9IG90aGVyLnZhbHVlc1swXS5sZW5ndGg7XG4gICAgICAgIC8vIG11bHRpcGx5XG4gICAgICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobSwgayk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGs7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgbjsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeC52YWx1ZXNbaV1bal0gKz0gdGhpcy52YWx1ZXNbaV1bdF0gKiBvdGhlci52YWx1ZXNbdF1bal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgfVxuICAgIDtcbiAgICB0b1ZlY3RvcigpIHtcbiAgICAgICAgY29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcjRkKHRoaXMudmFsdWVzWzBdWzBdLCB0aGlzLnZhbHVlc1sxXVswXSwgdGhpcy52YWx1ZXNbMl1bMF0sIHRoaXMudmFsdWVzWzNdWzBdKTtcbiAgICAgICAgcmV0dXJuIHZlY3Rvci5jb2xsYXBzZSgpO1xuICAgIH1cbn1cbmV4cG9ydCB7IE1hdHJpeCB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xOSAxNDozNzowM1xuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE0OjQwOjI1XG4gKi9cbmNsYXNzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cbmV4cG9ydCB7IFZlY3RvciB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xNSAwMTozMjoxNlxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE1OjMwOjIxXG4gKi9cbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJztcbmltcG9ydCB7IFZlY3RvcjRkIH0gZnJvbSBcIi4vVmVjdG9yNGRcIjtcbmNsYXNzIFZlY3RvcjNkIGV4dGVuZHMgVmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XG4gICAgICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN1cGVyKDAsIDApO1xuICAgICAgICAgICAgdGhpcy56ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyKHgsIHkpO1xuICAgICAgICAgICAgdGhpcy56ID0gejtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHRlbmQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNGQodGhpcy54LCB0aGlzLnksIHRoaXMueiwgMSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCB0aGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhlIHZlY3RvclxuICAgICAqL1xuICAgIGFicygpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnopO1xuICAgIH1cbiAgICBhZGQob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnggKyBvdGhlci54LCB0aGlzLnkgKyBvdGhlci55LCB0aGlzLnogKyBvdGhlci56KTtcbiAgICB9XG4gICAgc3VidHJhY3Qob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnggLSBvdGhlci54LCB0aGlzLnkgLSBvdGhlci55LCB0aGlzLnogLSBvdGhlci56KTtcbiAgICB9XG4gICAgc2NhbGUobikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCAqIG4sIHRoaXMueSAqIG4sIHRoaXMueiAqIG4pO1xuICAgIH1cbiAgICB1bml0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZSgxIC8gdGhpcy5hYnMoKSk7XG4gICAgfVxuICAgIGNyb3NzUHJvZHVjdChvdGhlcikge1xuICAgICAgICAvLyByZXR1cm4gW1xuICAgICAgICAvLyAgIHZlYzFbMV0gKiB2ZWMyWzJdIC0gdmVjMlsxXSAqIHZlYzFbMl0sXG4gICAgICAgIC8vICAgLSh2ZWMxWzBdICogdmVjMlsyXSAtIHZlYzJbMF0gKiB2ZWMxWzJdKSxcbiAgICAgICAgLy8gICB2ZWMxWzBdICogdmVjMlsxXSAtIHZlYzJbMF0gKiB2ZWMxWzFdXG4gICAgICAgIC8vIF07XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM2QodGhpcy55ICogb3RoZXIueiAtIG90aGVyLnkgKiB0aGlzLnosIC0odGhpcy54ICogb3RoZXIueiAtIG90aGVyLnggKiB0aGlzLnopLCB0aGlzLnggKiBvdGhlci55IC0gb3RoZXIueCAqIHRoaXMueSk7XG4gICAgfVxuICAgIGRvdFByb2R1Y3Qob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIG90aGVyLnggKyB0aGlzLnkgKiBvdGhlci55ICsgdGhpcy56ICogb3RoZXIuejtcbiAgICB9XG59XG5leHBvcnQgeyBWZWN0b3IzZCB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xNSAwMTozMTo1M1xuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE0OjQxOjMwXG4gKi9cbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJztcbmltcG9ydCB7IFZlY3RvcjNkIH0gZnJvbSAnLi9WZWN0b3IzZCc7XG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tICcuL01hdHJpeCc7XG5jbGFzcyBWZWN0b3I0ZCBleHRlbmRzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgeiwgdykge1xuICAgICAgICBzdXBlcih4LCB5KTtcbiAgICAgICAgdGhpcy56ID0gejtcbiAgICAgICAgdGhpcy53ID0gdztcbiAgICB9XG4gICAgY29sbGFwc2UoKSB7XG4gICAgICAgIGxldCB0ID0gdGhpcy53O1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCAvIHQsIHRoaXMueSAvIHQsIHRoaXMueiAvIHQpO1xuICAgIH1cbiAgICB0b01hdHJpeCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoW1xuICAgICAgICAgICAgW3RoaXMueF0sXG4gICAgICAgICAgICBbdGhpcy55XSxcbiAgICAgICAgICAgIFt0aGlzLnpdLFxuICAgICAgICAgICAgW3RoaXMud11cbiAgICAgICAgXSk7XG4gICAgfVxufVxuZXhwb3J0IHsgVmVjdG9yNGQgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTcgMjE6Mzc6MTBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDAxOjM0OjA2XG4gKi9cbmNsYXNzIEVkZ2VUYWJsZUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHlTdGFydCwgeU1heCwgeFN0YXJ0LCBkZWx0YSwgelN0YXJ0LCB6RGVsdGFUb1ksIG5vcm1hbFN0YXJ0LCBub3JtYWxFbmQpIHtcbiAgICAgICAgdGhpcy55U3RhcnQgPSB5U3RhcnQ7XG4gICAgICAgIHRoaXMueU1heCA9IHlNYXg7XG4gICAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgICB0aGlzLmRlbHRhID0gZGVsdGE7XG4gICAgICAgIHRoaXMuelN0YXJ0ID0gelN0YXJ0O1xuICAgICAgICB0aGlzLnpEZWx0YVRvWSA9IHpEZWx0YVRvWTtcbiAgICAgICAgdGhpcy5ub3JtYWxTdGFydCA9IG5vcm1hbFN0YXJ0O1xuICAgICAgICB0aGlzLm5vcm1hbEVuZCA9IG5vcm1hbEVuZDtcbiAgICB9XG59XG47XG5leHBvcnQgeyBFZGdlVGFibGVFbGVtZW50IH07XG4iLCJpbXBvcnQgeyBSR0JBIH0gZnJvbSBcIi4vUkdCQVwiO1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vdXRpbHMvcmFuZCc7XG5jbGFzcyBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIHRoaXMucG9pbnRzTm9ybWFsID0gW107XG4gICAgICAgIHRoaXMuZmFjZXMgPSBbXTtcbiAgICAgICAgdGhpcy5mYWNlc05vcm1hbCA9IFtdO1xuICAgICAgICB0aGlzLmZhY2VzQ29sb3IgPSBbXTtcbiAgICB9XG4gICAgY29sb3JJbml0KHNpbmdsZUxpZ2h0T24sIGxpZ2h0cykge1xuICAgICAgICB0aGlzLmZhY2VzQ29sb3IgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZhY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2luZ2xlTGlnaHRPbikge1xuICAgICAgICAgICAgICAgIGxldCBncmF5ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgbm9ybWFsID0gdGhpcy5mYWNlc05vcm1hbFtpXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBsaWdodCBvZiBsaWdodHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JheSArPSAoMTI4ICsgMTI4ICogbm9ybWFsLnVuaXQoKS5kb3RQcm9kdWN0KGxpZ2h0LnVuaXQoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZhY2VzQ29sb3IucHVzaChuZXcgUkdCQShncmF5LCBncmF5LCBncmF5LCAyNTUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFjZXNDb2xvci5wdXNoKG5ldyBSR0JBKHJhbmRvbSgpLCByYW5kb20oKSwgcmFuZG9tKCksIDI1NSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG5vcm1hbGl6ZUZhY2UoZmFjZUluZGV4KSB7XG4gICAgICAgIGNvbnN0IGZhY2UgPSB0aGlzLmZhY2VzW2ZhY2VJbmRleF07XG4gICAgICAgIGNvbnN0IFtwMSwgcDIsIHAzXSA9IFt0aGlzLnBvaW50c1tmYWNlWzBdXSwgdGhpcy5wb2ludHNbZmFjZVsxXV0sIHRoaXMucG9pbnRzW2ZhY2VbMl1dXTtcbiAgICAgICAgcmV0dXJuIHAyLnN1YnRyYWN0KHAxKS5jcm9zc1Byb2R1Y3QocDMuc3VidHJhY3QocDIpKS51bml0KCk7XG4gICAgfVxuICAgIGNvbXB1dGVTY2VuZVBvaW50Tm9ybWFsKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmFjZXNOb3JtYWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5mYWNlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLmZhY2VzW2ldW2pdO1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRzTm9ybWFsW3RlbXBdID0gdGhpcy5wb2ludHNOb3JtYWxbdGVtcF0uYWRkKHRoaXMuZmFjZXNOb3JtYWxbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50c05vcm1hbFtpXS5hYnMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRzTm9ybWFsW2ldID0gdGhpcy5wb2ludHNOb3JtYWxbaV0udW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tIHBvaW50c19ub3JtYWwgLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgLy8gdGhpcy5wb2ludHNOb3JtYWwuZm9yRWFjaCgocG9pbnROb3JtYWw6IFZlY3RvcjNkKSA9PiB7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2cocG9pbnROb3JtYWwpO1xuICAgICAgICAvLyB9KVxuICAgIH1cbn1cbmV4cG9ydCB7IE1vZGVsIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE5IDE2OjM3OjQ5XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMTY6NDU6NTVcbiAqL1xuY2xhc3MgUkdCQSB7XG4gICAgY29uc3RydWN0b3IociA9IDAsIGcgPSAwLCBiID0gMCwgYSA9IDI1NSkge1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmcgPSBnO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgIH1cbn1cbmV4cG9ydCB7IFJHQkEgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTcgMTQ6NDQ6MzJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAyMjo1MTo0MVxuICovXG4vKioqKioqKioqKioqKioqKioqKiogRklMTCBQSVhFTFMgKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgeyBWZWN0b3IzZCwgRWRnZVRhYmxlRWxlbWVudCwgUkdCQSB9IGZyb20gJy4uLy4uL2xpYi9pbmRleCc7XG4vLyBjb252ZXJ0IDJkIHBvaW50IHRvIGNhbnZhcyBwb2ludFxuY29uc3QgdG9QaXhlbCA9ICh2YWx1ZSwgaGVpZ2h0LCBzaG9ydHRlbiA9IGZhbHNlKSA9PiBNYXRoLmZsb29yKCh2YWx1ZSArIDEpICogaGVpZ2h0IC8gMikgLSAoc2hvcnR0ZW4gPyAxIDogMCk7XG5jb25zdCB0b0Zsb2F0UGl4ZWwgPSAodmFsdWUsIGhlaWdodCkgPT4gKHZhbHVlICsgMSkgKiBoZWlnaHQgLyAyO1xuY29uc3QgYnVmZmVySW5pdCA9IChoZWlnaHQsIHdpZHRoKSA9PiB7XG4gICAgY29uc3QgaUJ1ZmZlciA9IFtdO1xuICAgIGNvbnN0IHpCdWZmZXIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGlCdWZmZXJbaV0gPSBbXTtcbiAgICAgICAgekJ1ZmZlcltpXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgIGlCdWZmZXJbaV1bal0gPSBuZXcgUkdCQSgyMDAsIDIwMCwgMjAwLCAyNTUpO1xuICAgICAgICAgICAgekJ1ZmZlcltpXVtqXSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtpQnVmZmVyLCB6QnVmZmVyXTtcbn07XG5jb25zdCBlZGdlVGFibGVJbml0ID0gKGhlaWdodCkgPT4ge1xuICAgIGNvbnN0IGVkZ2VUYWJsZSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgZWRnZVRhYmxlW2ldID0gW107XG4gICAgfVxuICAgIHJldHVybiBlZGdlVGFibGU7XG59O1xuLyoqXG4gKiBTY2FuIENvbnZlcnNpb25cbiAqIDEuIGZvciBlYWNoIHNjYW4gbGluZSwgZGV0ZXJtaW5lIGVkZ2VzIG9mIHBvbHlnb25zIHRoYXQgaW50ZXJzZWN0XG4gKiAyLiBGaW5kIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGFuXG4gKiAzLiBSZWx5IG9uIHNjYW5saW5lIGFuZCBwaXhlbCBjb2hlcmVuY2UgdG8gbGluZWFybHkgaW50ZXJwb2xhdGUgKGJldHdlZW4gc2NhbmxpbmVzIGFuZCBiZXR3ZWVuIHBpeGVscylcbiAqL1xuY29uc3QgZGlmZnVzZVRyZW0gPSAoa2QsIElMaWdodCwgbm9ybWFsLCBsaWdodCkgPT4ge1xuICAgIGNvbnN0IGdyYWRpZW50ID0gbm9ybWFsLmRvdFByb2R1Y3QobGlnaHQpO1xuICAgIHJldHVybiBncmFkaWVudCA+IDAgPyBncmFkaWVudCAqIGtkICogSUxpZ2h0IDogMDtcbn07XG5jb25zdCBzY2FuQ29udmVyc2lvbiA9IChtb2RlbCwgbGlnaHRzLCBjYWxjUG9pbnRzLCBiYWNrRmFjZVNldCwgaGVpZ2h0LCB3aWR0aCkgPT4ge1xuICAgIGNvbnN0IFtpQnVmZmVyLCB6QnVmZmVyXSA9IGJ1ZmZlckluaXQoaGVpZ2h0LCB3aWR0aCk7XG4gICAgbGV0IGFjdGl2ZUVkZ2VUYWJsZSA9IFtdO1xuICAgIGNvbnN0IHJlZFNldCA9IG5ldyBTZXQoKTtcbiAgICAvLyBmb3IgZWFjaCBmYWNlXG4gICAgbW9kZWwuZmFjZXMuZm9yRWFjaCgoZmFjZSwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gYnVpbGQgZWRnZSB0YWJsZVxuICAgICAgICBjb25zdCBlZGdlVGFibGUgPSBlZGdlVGFibGVJbml0KGhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IGFuIGVkZ2UgXG4gICAgICAgICAgICBsZXQgW2luZGV4U3RhcnQsIGluZGV4RW5kXSA9IFtmYWNlW2ldLCBmYWNlWyhpICsgMSkgJSBmYWNlLmxlbmd0aF1dO1xuICAgICAgICAgICAgbGV0IFtsb3dlclBvaW50LCB1cHBlclBvaW50XSA9IFtjYWxjUG9pbnRzW2luZGV4U3RhcnRdLCBjYWxjUG9pbnRzW2luZGV4RW5kXV07XG4gICAgICAgICAgICAvLyBpZ25vcmUgaG9yaXpvbnRhbCBlZGdlIGFuZCBvdXQgb2YgcmFuZ2UgcG9pbnRcbiAgICAgICAgICAgIGlmICh0b1BpeGVsKGxvd2VyUG9pbnQueSwgaGVpZ2h0KSA9PT0gdG9QaXhlbCh1cHBlclBvaW50LnksIGhlaWdodClcbiAgICAgICAgICAgICAgICB8fCBsb3dlclBvaW50LnkgPiAxIHx8IGxvd2VyUG9pbnQueSA8IC0xKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy8gc3dhcCB0aGUgb3JkZXIgb2YgdHdvIHBvaW50c1xuICAgICAgICAgICAgaWYgKGxvd2VyUG9pbnQueSA+IHVwcGVyUG9pbnQueSkge1xuICAgICAgICAgICAgICAgIFtsb3dlclBvaW50LCB1cHBlclBvaW50XSA9IFt1cHBlclBvaW50LCBsb3dlclBvaW50XTtcbiAgICAgICAgICAgICAgICBbaW5kZXhTdGFydCwgaW5kZXhFbmRdID0gW2luZGV4RW5kLCBpbmRleFN0YXJ0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBlZGdlIHRhYmxlIGVsZW1lbnQgYW5kIGFkZCBpdCBpbnRvIHRoZSBlZGdlIHRhYmxlXG4gICAgICAgICAgICBjb25zdCBFVEVsZW1lbnQgPSBuZXcgRWRnZVRhYmxlRWxlbWVudCh0b1BpeGVsKGxvd2VyUG9pbnQueSwgaGVpZ2h0KSwgdG9QaXhlbCh1cHBlclBvaW50LnksIGhlaWdodCksIHRvRmxvYXRQaXhlbChsb3dlclBvaW50LngsIGhlaWdodCksIChsb3dlclBvaW50LnggLSB1cHBlclBvaW50LngpIC8gKGxvd2VyUG9pbnQueSAtIHVwcGVyUG9pbnQueSksIGxvd2VyUG9pbnQueiwgKGxvd2VyUG9pbnQueiAtIHVwcGVyUG9pbnQueikgLyAodG9QaXhlbChsb3dlclBvaW50LnksIGhlaWdodCkgLSB0b1BpeGVsKHVwcGVyUG9pbnQueSwgaGVpZ2h0KSksIG1vZGVsLnBvaW50c05vcm1hbFtpbmRleFN0YXJ0XSwgbW9kZWwucG9pbnRzTm9ybWFsW2luZGV4RW5kXSk7XG4gICAgICAgICAgICBlZGdlVGFibGVbTWF0aC5mbG9vcihFVEVsZW1lbnQueVN0YXJ0KV0ucHVzaChFVEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZpbGwgcGl4ZWwgdG8gcGl4ZWwgYnVmZmVyXG4gICAgICAgIGxldCBjdXJyZW50U2NhbkxpbmUgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZWRnZVRhYmxlW2ldLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2NhbkxpbmUgPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50U2NhbkxpbmU7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgLy8gbW92ZSBlZGdlIGZyb20gRWRnZSBUYWJlbCB0byBBY3RpdmUgRWRnZSBUYWJsZVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlZGdlVGFibGVbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVFZGdlVGFibGUucHVzaChlZGdlVGFibGVbaV1bal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBsZWF2aW5nIGVkZ2VcbiAgICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZSA9IGFjdGl2ZUVkZ2VUYWJsZVxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBlZGdlIGZyb20gQWN0aXZlIEVkZ2UgVGFibGUgd2hpbGUgeSA9IHlNYXhcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGVkZ2UgPT4gZWRnZS55TWF4ICE9PSBpKVxuICAgICAgICAgICAgICAgIC8vIHNvcnQgQUVUIGJ5IHhTdGFydFxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEueFN0YXJ0IC0gYi54U3RhcnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqICsgMSA8IGFjdGl2ZUVkZ2VUYWJsZS5sZW5ndGg7IGogKz0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSBbYWN0aXZlRWRnZVRhYmxlW2pdLCBhY3RpdmVFZGdlVGFibGVbaiArIDFdXTtcbiAgICAgICAgICAgICAgICBsZXQgekN1cnJlbnQgPSBsZWZ0LnpTdGFydDtcbiAgICAgICAgICAgICAgICBjb25zdCB6RGVsdGFUb1ggPSAobGVmdC56U3RhcnQgLSByaWdodC56U3RhcnQpIC8gKGxlZnQueFN0YXJ0IC0gcmlnaHQueFN0YXJ0KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgLS0tLS0gJHtqfSAke2ogKyAxfSAtLS0tLWApXG4gICAgICAgICAgICAgICAgLy8gYWNjb3JkaW5nIHRvIGludGVuc2l0eVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhID0gbGVmdC5ub3JtYWxFbmQuc2NhbGUoKGkgLSBsZWZ0LnlTdGFydCkgLyAobGVmdC55TWF4IC0gbGVmdC55U3RhcnQpKS5hZGQobGVmdC5ub3JtYWxTdGFydC5zY2FsZSgobGVmdC55TWF4IC0gaSkgLyAobGVmdC55TWF4IC0gbGVmdC55U3RhcnQpKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGIgPSByaWdodC5ub3JtYWxFbmQuc2NhbGUoKGkgLSByaWdodC55U3RhcnQpIC8gKHJpZ2h0LnlNYXggLSByaWdodC55U3RhcnQpKS5hZGQocmlnaHQubm9ybWFsU3RhcnQuc2NhbGUoKHJpZ2h0LnlNYXggLSBpKSAvIChyaWdodC55TWF4IC0gcmlnaHQueVN0YXJ0KSkpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSBNYXRoLmZsb29yKGxlZnQueFN0YXJ0KTsgayA8IE1hdGguZmxvb3IocmlnaHQueFN0YXJ0KTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3ZlcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh6Q3VycmVudCA8PSB6QnVmZmVyW2ldW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoekJ1ZmZlcltpXVtrXSAhPSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgekJ1ZmZlcltpXVtrXSA9IHpDdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyTm9ybWFsID0gcmlnaHQueFN0YXJ0IC0gbGVmdC54U3RhcnQgPT0gMCA/IGxhLnVuaXQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGEuc2NhbGUoKHJpZ2h0LnhTdGFydCAtIGspIC8gKHJpZ2h0LnhTdGFydCAtIGxlZnQueFN0YXJ0KSkuYWRkKGxiLnNjYWxlKChrIC0gbGVmdC54U3RhcnQpIC8gKHJpZ2h0LnhTdGFydCAtIGxlZnQueFN0YXJ0KSkpLnVuaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBncmF5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZyA9IG5ldyBWZWN0b3IzZCgwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGxpZ2h0IG9mIGxpZ2h0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0ID0gb3JnLnN1YnRyYWN0KGxpZ2h0KS51bml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JheSArPSBkaWZmdXNlVHJlbSgxLCA4OCwgY3VyTm9ybWFsLCBsaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFja0ZhY2VTZXQuaGFzKGluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlCdWZmZXJbaV1ba10gPSBuZXcgUkdCQShjb3ZlcmVkID8gMjU1IDogMCwgY292ZXJlZCA/IDAgOiAyNTUsIDAsIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkU2V0LmFkZChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpQnVmZmVyW2ldW2tdID0gbmV3IFJHQkEoZ3JheSwgZ3JheSwgZ3JheSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB6Q3VycmVudCArPSB6RGVsdGFUb1g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnQueFN0YXJ0ICs9IGxlZnQuZGVsdGE7XG4gICAgICAgICAgICAgICAgcmlnaHQueFN0YXJ0ICs9IHJpZ2h0LmRlbHRhO1xuICAgICAgICAgICAgICAgIGxlZnQuelN0YXJ0ICs9IGxlZnQuekRlbHRhVG9ZO1xuICAgICAgICAgICAgICAgIHJpZ2h0LnpTdGFydCArPSByaWdodC56RGVsdGFUb1k7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaUJ1ZmZlcjtcbn07XG5leHBvcnQgeyBidWZmZXJJbml0LCBzY2FuQ29udmVyc2lvbiB9O1xuIiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnLi4vbWF0aC9NYXRyaXgnO1xuY29uc3Qgd29ybGQyQ2FtZXJhID0gKGNhbWVyYSkgPT4ge1xuICAgIGNvbnN0IFIgPSBuZXcgTWF0cml4KFtcbiAgICAgICAgW2NhbWVyYS5VLngsIGNhbWVyYS5VLnksIGNhbWVyYS5VLnosIDBdLFxuICAgICAgICBbY2FtZXJhLlYueCwgY2FtZXJhLlYueSwgY2FtZXJhLlYueiwgMF0sXG4gICAgICAgIFtjYW1lcmEuTi54LCBjYW1lcmEuTi55LCBjYW1lcmEuTi56LCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDFdXG4gICAgXSk7XG4gICAgY29uc3QgVCA9IG5ldyBNYXRyaXgoW1xuICAgICAgICBbMSwgMCwgMCwgLWNhbWVyYS5wb3NpdGlvbi54XSxcbiAgICAgICAgWzAsIDEsIDAsIC1jYW1lcmEucG9zaXRpb24ueV0sXG4gICAgICAgIFswLCAwLCAxLCAtY2FtZXJhLnBvc2l0aW9uLnpdLFxuICAgICAgICBbMCwgMCwgMCwgMV1cbiAgICBdKTtcbiAgICByZXR1cm4gUi5tdWx0aXBseShUKTtcbn07XG5jb25zdCBwZXJzcGVjdGl2ZVRyYW5zZm9ybSA9IChoLCBkLCBmKSA9PiBuZXcgTWF0cml4KFtcbiAgICBbZCAvIGgsIDAsIDAsIDBdLFxuICAgIFswLCBkIC8gaCwgMCwgMF0sXG4gICAgWzAsIDAsIGYgLyAoZiAtIGQpLCAtZCAqIGYgLyAoZiAtIGQpXSxcbiAgICBbMCwgMCwgMSwgMF1cbl0pO1xuLyoqXG4gKiBCYWNrLWZhY2UgY3VsbGluZ1xuICogVmlzaWJsZSBpZiBOcCBkb3QgcHJvZHVjdCBOID4gMFxuICogTm90ZTogU29tZSB0aGUgcG9seWdvbnMgYXJlIGRlbm90ZWQgaW4gYW50aS1jbG9ja3dpc2Ugb3JkZXJcbiAqL1xuY29uc3QgYmFja0ZhY2VDdWxsaW5nID0gKG1vZGVsLCBjYW1lcmEpID0+IHtcbiAgICBjb25zdCBiYWNrRmFjZVNldCA9IG5ldyBTZXQoKTtcbiAgICBtb2RlbC5mYWNlcy5mb3JFYWNoKChmYWNlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB2aWV3ID0gY2FtZXJhLnBvc2l0aW9uLnN1YnRyYWN0KG1vZGVsLnBvaW50c1tmYWNlWzFdXSkudW5pdCgpO1xuICAgICAgICBjb25zdCBjb3MgPSBtb2RlbC5mYWNlc05vcm1hbFtpbmRleF0uZG90UHJvZHVjdCh2aWV3KTtcbiAgICAgICAgaWYgKGNvcyA+PSAwKSB7XG4gICAgICAgICAgICBiYWNrRmFjZVNldC5hZGQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGJhY2tGYWNlU2V0O1xufTtcbi8vIENhbGN1bGF0ZSBtb2RlbFxuY29uc3QgY2FsY01vZGVsID0gKG1vZGVsLCBjYW1lcmEsIGgsIGQsIGYpID0+IHtcbiAgICBjb25zdCBjb21ibyA9IHBlcnNwZWN0aXZlVHJhbnNmb3JtKGgsIGQsIGYpLm11bHRpcGx5KHdvcmxkMkNhbWVyYShjYW1lcmEpKTtcbiAgICByZXR1cm4gbW9kZWwucG9pbnRzLm1hcChwb2ludCA9PiB7XG4gICAgICAgIHJldHVybiBjb21iby5tdWx0aXBseShwb2ludC5leHRlbmQoKS50b01hdHJpeCgpKS50b1ZlY3RvcigpO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IGJhY2tGYWNlQ3VsbGluZywgY2FsY01vZGVsIH07XG4iLCIvKipcbiAqIEdldCBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAwIGFuZCAyNTUoYm90aCBpbmNsdXNpdmUpO1xuICovXG5leHBvcnQgY29uc3QgcmFuZG9tID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTAgMDE6MzM6NDVcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAxOToxNTowOFxuICovXG4vLyBkYXRhIGZpbGVzIHRvIGJlIGxvYWRlZFxuY29uc3QgZmlsZXMgPSBbXG4gICAgJ2F0YycsXG4gICAgJ2JhbGwnLFxuICAgICdiZW5jaCcsXG4gICAgJ2NvdycsXG4gICAgJ2NvbmUnLFxuICAgICdob3VzZScsXG4gICAgJ2tuaWdodCdcbl07XG5leHBvcnQgeyBmaWxlcyB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xOCAwMTozMzo1NlxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDIyOjU0OjE0XG4gKi9cbmltcG9ydCB7IENhbWVyYSwgTW9kZWwsIFZlY3RvcjNkIH0gZnJvbSAnLi4vLi4vbGliL2luZGV4JztcbmNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgaDogMSxcbiAgICBkOiAxLFxuICAgIGY6IDEwMDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGlCdWZmZXI6IFtdLFxuICAgIGxpZ2h0czogW1xuICAgICAgICBuZXcgVmVjdG9yM2QoMTAwLCAxMDAsIDEwMClcbiAgICBdXG59O1xuY29uc3QgY2FtZXJhID0gbmV3IENhbWVyYShuZXcgVmVjdG9yM2QoMTAsIDEwLCAxMCksIG5ldyBWZWN0b3IzZCgwLCAwLCAwKSwgbmV3IFZlY3RvcjNkKDAsIDEsIDApKTtcbmNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCk7XG5leHBvcnQgeyBwYXJhbWV0ZXJzLCBjYW1lcmEsIG1vZGVsIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE0IDE1OjE4OjUyXG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMjI6NTI6MTVcbiAqL1xuaW1wb3J0IHsgbW9kZWwsIGNhbWVyYSwgcGFyYW1ldGVycyB9IGZyb20gJy4vY29uZmlncy9wYXJhbWV0ZXJzJztcbmltcG9ydCBsb2FkRmlsZSBmcm9tICcuL3V0aWxzL2xvYWRGaWxlJztcbmltcG9ydCB7IGxvYWRNZW51LCBiaW5kU2xpZGVyLCByZWFjdFRvT3BlcmF0aW9uIH0gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IHsgY2FsY0FsbCB9IGZyb20gJy4vdXRpbHMvY2FsY0FsbCc7XG4vKioqKioqKioqKioqKioqKioqKiogSW5pdGlhbGl6ZSBET00gKioqKioqKioqKioqKioqKioqKiovXG4vLyBHZXQgY2FudmFzIHJlYWR5XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbmNvbnN0IHdpZHRoID0gY2FudmFzLndpZHRoO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4vLyBMb2FkIGFsbCBtb2RlbCBvcHRpb25zIHRvIG1lbnVcbmNvbnN0IGNob29zZV9tb2RlbDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QuY2hvb3NlX21vZGVsMScpO1xuY29uc3QgY2hvb3NlX21vZGVsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdC5jaG9vc2VfbW9kZWwyJyk7XG5sb2FkTWVudShjaG9vc2VfbW9kZWwxKTtcbmxvYWRNZW51KGNob29zZV9tb2RlbDIpO1xuLy8gLy8gR2V0IHRocmVlIHNsaWRlcyByZWFkeSBiaW5kaW5nIHdpdGggaCwgZCwgZiBwYXJhbWV0ZXJcblsnaCcsICdkJywgJ2YnXS5mb3JFYWNoKGl0ZW0gPT4gYmluZFNsaWRlcihpdGVtLCBkcmF3KSk7XG4vLyBCdXR0b25cbi8vIEJpbmQgcmVuZGVyIGJ1dHRvbiB3aXRoIGxvYWQgZmlsZSBhbmQgcmVuZGVyIG9wZXJ0aW9uXG5jb25zdCByZW5kZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVuZGVyJyk7XG5yZW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbW9kZWxJbmRleDEgPSBjaG9vc2VfbW9kZWwxLnNlbGVjdGVkSW5kZXg7XG4gICAgY29uc3QgbW9kZWxJbmRleDIgPSBjaG9vc2VfbW9kZWwyLnNlbGVjdGVkSW5kZXg7XG4gICAgLy8gaWYgKG1vZGVsSW5kZXgxID09PSAwIHx8IG1vZGVsSW5kZXgyID09PSAwKSB7XG4gICAgLy8gICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIG1vZGVsIHRvIHJlbmRlcicpO1xuICAgIC8vIH1cbiAgICBsZXQgbW9kZWxOYW1lcyA9IFtdO1xuICAgIG1vZGVsTmFtZXMucHVzaChjaG9vc2VfbW9kZWwxLm9wdGlvbnNbbW9kZWxJbmRleDFdLnZhbHVlKTtcbiAgICBtb2RlbE5hbWVzLnB1c2goY2hvb3NlX21vZGVsMi5vcHRpb25zW21vZGVsSW5kZXgyXS52YWx1ZSk7XG4gICAgbW9kZWxOYW1lcyA9IG1vZGVsTmFtZXNcbiAgICAgICAgLmZpbHRlcigobmFtZSkgPT4gbmFtZS5sZW5ndGggIT0gMClcbiAgICAgICAgLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gYC4vcHVibGljL21vZGVsLyR7bmFtZX0uZC50eHRgO1xuICAgIH0pO1xuICAgIGxvYWRGaWxlKG1vZGVsTmFtZXMsIGRyYXcpO1xuICAgIHJlbmRlckJ0bi5kaXNhYmxlZCA9IHRydWU7XG59KTtcbi8vIGJpbmQgcmVzZXQgYnV0dG9uIHdpdGggcmVmcmVzaCBmdW5jdGlvblxuY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKTtcbnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG4vKioqKioqKioqKioqKioqKioqKiogSW5pdGlhbGl6ZSBEYXRhICoqKioqKioqKioqKioqKioqKioqL1xucGFyYW1ldGVycy53aWR0aCA9IHdpZHRoO1xucGFyYW1ldGVycy5oZWlnaHQgPSBoZWlnaHQ7XG4vLyAvLyBCaW5kaW5nIG9wZXJhdGlvblxucmVhY3RUb09wZXJhdGlvbihjYW52YXMsIGRyYXcpO1xuZnVuY3Rpb24gZHJhdygpIHtcbiAgICAvLyBjbGVhciBiZWZvcmUgaW1hZ2VcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIC8vIGRyYXdcbiAgICBjb25zdCBpbWFnZURhdGEgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xuICAgIGNvbnN0IGlCdWZmZXIgPSBjYWxjQWxsKG1vZGVsLCBwYXJhbWV0ZXJzLmxpZ2h0cywgY2FtZXJhLCBwYXJhbWV0ZXJzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgdCA9IGkgKiB3aWR0aCArIGo7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGlCdWZmZXJbaV1bal07XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgMF0gPSBjb2xvci5yO1xuICAgICAgICAgICAgZGF0YVt0ICogNCArIDFdID0gY29sb3IuZztcbiAgICAgICAgICAgIGRhdGFbdCAqIDQgKyAyXSA9IGNvbG9yLmI7XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgM10gPSBjb2xvci5hO1xuICAgICAgICB9XG4gICAgfVxuICAgIGltYWdlRGF0YS5kYXRhLnNldChkYXRhKTtcbiAgICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XG59XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE5IDE4OjI1OjI0XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMjEgMjA6MTY6NTJcbiAqL1xuaW1wb3J0IHsgYmFja0ZhY2VDdWxsaW5nLCBjYWxjTW9kZWwsIHNjYW5Db252ZXJzaW9uIH0gZnJvbSAnLi4vLi4vbGliL2luZGV4JztcbmNvbnN0IGNhbGNBbGwgPSAobW9kZWwsIGxpZ2h0cywgY2FtZXJhLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgY2FtZXJhLmNhbGNOVVYoKTtcbiAgICBjb25zdCBiYWNrRmFjZVNldCA9IGJhY2tGYWNlQ3VsbGluZyhtb2RlbCwgY2FtZXJhKTtcbiAgICBjb25zdCBjYWxjUG9pbnRzID0gY2FsY01vZGVsKG1vZGVsLCBjYW1lcmEsIHBhcmFtZXRlcnMuaCwgcGFyYW1ldGVycy5kLCBwYXJhbWV0ZXJzLmYpO1xuICAgIHJldHVybiBzY2FuQ29udmVyc2lvbihtb2RlbCwgbGlnaHRzLCBjYWxjUG9pbnRzLCBiYWNrRmFjZVNldCwgcGFyYW1ldGVycy5oZWlnaHQsIHBhcmFtZXRlcnMud2lkdGgpO1xufTtcbmV4cG9ydCB7IGNhbGNBbGwgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTQgMTg6NTU6NTFcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAyMjo1NDoyOVxuICovXG4vKioqKioqKioqKioqKioqKioqKiogRE9NIE9QRVJBVElPTiAqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCB7IHBhcmFtZXRlcnMsIGNhbWVyYSB9IGZyb20gJy4uL2NvbmZpZ3MvcGFyYW1ldGVycyc7XG5pbXBvcnQgeyBmaWxlcyB9IGZyb20gJy4uL2NvbmZpZ3MvY29uc3RhbnRzJztcbi8qKlxuICogTG9hZCBtZW51XG4gKiBAcGFyYW0gc2VsZWN0RE9NXG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkTWVudSA9IChzZWxlY3RET00pID0+IHtcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGZpbGUpO1xuICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZmlsZSkpO1xuICAgICAgICBzZWxlY3RET00uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIEJpbmQgdGhlIHZhbHVlIG9mIHNsaWRlciB3aXRoIGNhbWVyYSBzZXR0aW5nXG4gKiBAcGFyYW0gbmFtZVxuICovXG5leHBvcnQgY29uc3QgYmluZFNsaWRlciA9IChuYW1lLCBkcmF3KSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bmFtZX1gKTtcbiAgICBjb25zdCBzbGlkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bmFtZX1fVmApO1xuICAgIHNsaWRlci52YWx1ZSA9IHBhcmFtZXRlcnNbbmFtZV07XG4gICAgc2xpZGVyVGV4dC5pbm5lckhUTUwgPSBwYXJhbWV0ZXJzW25hbWVdO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBhcmFtZXRlcnNbbmFtZV0gPSB0aGlzLnZhbHVlO1xuICAgICAgICBzbGlkZXJUZXh0LmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGRyYXcoKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIEJpbmQgb3BlcmF0aW9uIHRvIGNvbnRyb2wgdGhlIGZpbmFsIGVmZmVjdFxuICovXG5jb25zdCBjYW1lcmFMZW4gPSAyO1xuZXhwb3J0IGNvbnN0IHJlYWN0VG9PcGVyYXRpb24gPSAoY2FudmFzLCBkcmF3KSA9PiB7XG4gICAgLy8gem9vbWluZyB0aGUgbW9kZWxcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQud2hlZWxEZWx0YSA+IDApIHtcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbiA9IGNhbWVyYS5wb3NpdGlvbi5zY2FsZSg2IC8gNSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb24uc2NhbGUoNSAvIDYpO1xuICAgICAgICB9XG4gICAgICAgIGRyYXcoKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2knOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ICs9IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdrJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSAtPSBjYW1lcmFMZW47XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaic6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggLT0gY2FtZXJhTGVuO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xMiAxNTowODo1MVxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDIyOjU0OjM0XG4gKi9cbmltcG9ydCB7IG1vZGVsLCBwYXJhbWV0ZXJzIH0gZnJvbSAnLi4vY29uZmlncy9wYXJhbWV0ZXJzJztcbmltcG9ydCB7IFZlY3RvcjNkIH0gZnJvbSAnLi4vLi4vbGliL2luZGV4Jztcbi8qKlxuICogUGFyc2UgdGhlIGRhdGEgZnJvbSB0aGUgLmQgZmlsZSwgcmV0dXJuIGEgTW9kZWxcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0gb2JqUG9zaXRpb25cbiAqL1xuY29uc3QgcGFyc2VGaWxlID0gKGRhdGEsIG9ialBvc2l0aW9uKSA9PiB7XG4gICAgbGV0IGxpbmVzID0gZGF0YS5tYXRjaCgvW15cXHJcXG5dKy9nKTtcbiAgICBsZXQgW251bSwgcG9pbnRzTnVtLCBmYWNlc051bV0gPSBsaW5lc1swXS50cmltKCkuc3BsaXQoL1xccysvKTtcbiAgICAvLyBDYXVzZSBpbiBzb21lIGZpbGUsIHRoZXJlIGFyZSBqdXN0IHR3byBudW1iZXIgaW4gZmlyc3QgbGluZVxuICAgIGlmIChmYWNlc051bSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZmFjZXNOdW0gPSBwb2ludHNOdW07XG4gICAgICAgIHBvaW50c051bSA9IG51bTtcbiAgICB9XG4gICAgY29uc3QgW3BOdW0sIGZOdW1dID0gW3BhcnNlSW50KHBvaW50c051bSwgMTApLCBwYXJzZUludChmYWNlc051bSldO1xuICAgIC8vIGxvYWQgZGF0YSB0byBtb2RlbFxuICAgIGNvbnN0IGxhc3RNb2RlbFBvaW50c051bSA9IG1vZGVsLnBvaW50cy5sZW5ndGg7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0gcG9pbnRzIC0tLS0tLS0tLS0nKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwTnVtOyBpKyspIHtcbiAgICAgICAgbGV0IFt4LCB5LCB6XSA9IGxpbmVzW2ldLnRyaW0oKS5zcGxpdCgvXFxzKy8pO1xuICAgICAgICBtb2RlbC5wb2ludHMucHVzaChuZXcgVmVjdG9yM2QocGFyc2VGbG9hdCh4KSArIG9ialBvc2l0aW9uLngsIHBhcnNlRmxvYXQoeSkgKyBvYmpQb3NpdGlvbi55LCBwYXJzZUZsb2F0KHopICsgb2JqUG9zaXRpb24ueikpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXcgVmVjdG9yM2QoXG4gICAgICAgIC8vICAgcGFyc2VGbG9hdCh4KSArIG9ialBvc2l0aW9uLngsIFxuICAgICAgICAvLyAgIHBhcnNlRmxvYXQoeSkgKyBvYmpQb3NpdGlvbi55LCBcbiAgICAgICAgLy8gICBwYXJzZUZsb2F0KHopICsgb2JqUG9zaXRpb24uelxuICAgICAgICAvLyApKTtcbiAgICAgICAgbW9kZWwucG9pbnRzTm9ybWFsLnB1c2gobmV3IFZlY3RvcjNkKDAsIDAsIDApKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0gZmFjZXMgLS0tLS0tLS0tLScpO1xuICAgIGZvciAobGV0IGkgPSBwTnVtICsgMTsgaSA8PSBwTnVtICsgZk51bTsgaSsrKSB7XG4gICAgICAgIGxldCBbXywgLi4ucmVzXSA9IGxpbmVzW2ldLnRyaW0oKS5zcGxpdCgvXFxzKy8pO1xuICAgICAgICBpZiAocmVzLmxlbmd0aCA8PSAyKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIGxldCBmYWNlID0gcmVzLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCwgMTApIC0gMSArIGxhc3RNb2RlbFBvaW50c051bSk7XG4gICAgICAgIG1vZGVsLmZhY2VzLnB1c2goZmFjZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZhY2UpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgZmFjZV9ub3JtYWw6YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1vZGVsLm5vcm1hbGl6ZUZhY2UobW9kZWwuZmFjZXMubGVuZ3RoIC0gMSkpXG4gICAgICAgIG1vZGVsLmZhY2VzTm9ybWFsLnB1c2gobW9kZWwubm9ybWFsaXplRmFjZShtb2RlbC5mYWNlcy5sZW5ndGggLSAxKSk7XG4gICAgfVxuICAgIHJldHVybiBtb2RlbDtcbn07XG4vKipcbiAqIFJlYWQgdGhlIGNvbnRlbnQgb2YgYSBmaWxlXG4gKiBAcGFyYW0gZmlsZVBhdGhcbiAqL1xuY29uc3QgcmVhZEZpbGUgPSAoZmlsZVBhdGgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGZpbGVQYXRoLCB0cnVlKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXModGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH0pO1xufTtcbi8qKlxuICogTG9hZCBhbmQgcmVuZGVyIHNlbGVjdGVkIG1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZVBhdGhcbiAqL1xuY29uc3QgbG9hZEZpbGUgPSAoZmlsZVBhdGhzLCBkcmF3KSA9PiB7XG4gICAgaWYgKGZpbGVQYXRocy5sZW5ndGggPT0gMCkge1xuICAgICAgICBtb2RlbC5jb2xvckluaXQoZmFsc2UsIHBhcmFtZXRlcnMubGlnaHRzKTtcbiAgICAgICAgbW9kZWwuY29tcHV0ZVNjZW5lUG9pbnROb3JtYWwoKTtcbiAgICAgICAgZHJhdygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVQYXRocy5wb3AoKTtcbiAgICAgICAgcmVhZEZpbGUoZmlsZSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBwYXJzZUZpbGUoZGF0YSwgbmV3IFZlY3RvcjNkKDAsIDAsIDApKTtcbiAgICAgICAgICAgIGxvYWRGaWxlKGZpbGVQYXRocywgZHJhdyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWQgb3IgcGFyc2UgZmlsZSR7ZmlsZX0gZXJyb3JgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvYWRGaWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==