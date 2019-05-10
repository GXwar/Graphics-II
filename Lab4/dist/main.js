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
 * @Last Modified time: 2019-05-09 01:51:45
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
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-09 19:05:45
 */
class EdgeTableElement {
    constructor(yStart, yMax, xStart, delta, zStart, zDeltaToY, normalStart, normalEnd, textureStart, textureDeltaToY) {
        this.yStart = yStart;
        this.yMax = yMax;
        this.xStart = xStart;
        this.delta = delta;
        this.zStart = zStart;
        this.zDeltaToY = zDeltaToY;
        this.normalStart = normalStart;
        this.normalEnd = normalEnd;
        this.textureStart = textureStart;
        // console.log("init: " + this.textureStart[0] + " " + this.textureStart[1]);
        this.textureDeltaToY = textureDeltaToY;
        // console.log("created: ");
        // console.log(this.textureStart[0]);
        // console.log(this.textureStart[1]);
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
        this.texturePoints = [];
        this.faces = [];
        this.facesNormal = [];
        this.facesColor = [];
        this.textureMap = [];
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
 * @Last Modified time: 2019-05-09 19:51:48
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
const diffuseTrem = (kd, ILight, normal, light, power) => {
    const gradient = Math.pow(normal.dotProduct(light), power);
    return gradient > 0 ? gradient * kd * ILight : 0;
};
const addEdgeToEdgeTable = (model, indexStart, indexEnd, lowerPoint, upperPoint, edgeTable, height) => {
    // ignore horizontal edge and out of range point
    if (toPixel(lowerPoint.y, height) === toPixel(upperPoint.y, height)
        || lowerPoint.x < -1 || lowerPoint.x > 1 || lowerPoint.y < -1 || lowerPoint.y > 1
        || upperPoint.x < -1 || upperPoint.x > 1 || upperPoint.y < -1 || upperPoint.y > 1)
        return;
    // swap the order of two points
    if (lowerPoint.y > upperPoint.y) {
        [lowerPoint, upperPoint] = [upperPoint, lowerPoint];
        [indexStart, indexEnd] = [indexEnd, indexStart];
    }
    // create edge table element and add it into the edge table
    let textureDelta = [
        (model.texturePoints[indexEnd][0] - model.texturePoints[indexStart][0]) / (toPixel(upperPoint.y, height, true) - toPixel(lowerPoint.y, height, true)),
        (model.texturePoints[indexEnd][1] - model.texturePoints[indexStart][1]) / (toPixel(upperPoint.y, height, true) - toPixel(lowerPoint.y, height, true))
    ];
    const ETElement = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["EdgeTableElement"](toPixel(lowerPoint.y, height), toPixel(upperPoint.y, height), toFloatPixel(lowerPoint.x, height), (lowerPoint.x - upperPoint.x) / (lowerPoint.y - upperPoint.y), lowerPoint.z, (lowerPoint.z - upperPoint.z) / (toPixel(lowerPoint.y, height) - toPixel(upperPoint.y, height)), model.pointsNormal[indexStart], model.pointsNormal[indexEnd], model.texturePoints[indexStart], textureDelta);
    // console.log(" ----- edge table element");
    // console.log(lowerPoint.y + " " + indexStart);
    // console.log(ETElement);
    // console.log(ETElement.textureStart)
    edgeTable[Math.floor(ETElement.yStart)].push(ETElement);
};
const scanConversion = (model, lights, calcPoints, backFaceSet, height, width) => {
    const [iBuffer, zBuffer] = bufferInit(height, width);
    let activeEdgeTable = [];
    // for each face
    // console.log(backFaceSet);
    model.faces.forEach((face, index) => {
        // don't need to consider backface
        if (backFaceSet.has(index))
            return;
        // console.log("index: " + index);
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
        // console.log("------------------------------scan convert------------------------------");
        // console.log(currentScanLine);
        for (let i = currentScanLine; i < height; i++) {
            // move edge from Edge Tabel to Active Edge Table
            for (let j = 0; j < edgeTable[i].length; j++) {
                activeEdgeTable.push(edgeTable[i][j]);
            }
            edgeTable[i] = [];
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
                // phong shading
                const la = left.normalEnd.scale((i - left.yStart) / (left.yMax - left.yStart))
                    .add(left.normalStart.scale((left.yMax - i) / (left.yMax - left.yStart)));
                const lb = right.normalEnd.scale((i - right.yStart) / (right.yMax - right.yStart))
                    .add(right.normalStart.scale((right.yMax - i) / (right.yMax - right.yStart)));
                // console.log(left.xStart + " " + right.xStart);
                for (let k = Math.floor(left.xStart); k < Math.floor(right.xStart); k++) {
                    if (zCurrent <= zBuffer[i][k]) {
                        zBuffer[i][k] = zCurrent;
                        let curNormal = right.xStart - left.xStart === 0 ? la.unit() :
                            la.scale((right.xStart - k) / (right.xStart - left.xStart)).add(lb.scale((k - left.xStart) / (right.xStart - left.xStart))).unit();
                        // texture map coordinate
                        let realTextureX = k == Math.floor(left.xStart) ? left.textureStart[0]
                            : left.textureStart[0] * (Math.floor(right.xStart) - k) / (Math.floor(right.xStart) - Math.floor(left.xStart))
                                + right.textureStart[0] * (k - Math.floor(left.xStart)) / (Math.floor(right.xStart) - Math.floor(left.xStart));
                        let realTextureY = k == Math.floor(left.xStart) ? left.textureStart[1]
                            : left.textureStart[1] * (Math.floor(right.xStart) - k) / (Math.floor(right.xStart) - Math.floor(left.xStart))
                                + right.textureStart[1] * (k - Math.floor(left.xStart)) / (Math.floor(right.xStart) - Math.floor(left.xStart));
                        // console.log("texture position: " + realTextureX + " " + realTextureY);
                        if (k == Math.floor(left.xStart)) {
                            realTextureX = left.textureStart[0];
                            realTextureY = left.textureStart[1];
                            if (i == left.yStart) {
                                curNormal = left.normalStart;
                            }
                            else {
                                curNormal = la;
                            }
                        }
                        else {
                            curNormal = la.scale(right.xStart - k).add(lb.scale(k - left.xStart));
                        }
                        // console.log(realTextureX, realTextureY);
                        curNormal = curNormal.unit();
                        let lightVector = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](10, 10, 10).unit();
                        let gray = diffuseTrem(1, 100, curNormal, lightVector, 3);
                        if (gray < 0)
                            gray = 0;
                        if (gray > 255)
                            gray = 255;
                        let inten = gray / 100;
                        if (realTextureX > 1)
                            realTextureX = 0.99;
                        if (realTextureX < 0)
                            realTextureX = 0;
                        if (realTextureY > 1)
                            realTextureY = 0.99;
                        if (realTextureY < 0)
                            realTextureY = 0;
                        let textureX = Math.floor(realTextureX * model.textureMap.length);
                        let textureY = Math.floor(realTextureY * model.textureMap[0].length);
                        // console.log(textureX + " " + textureY);
                        iBuffer[i][k] = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["RGBA"](Math.max(Math.min(model.textureMap[textureX][textureY][0] * inten + 40, 255), 0), Math.max(Math.min(model.textureMap[textureX][textureY][1] * inten + 40, 255), 0), Math.max(Math.min(model.textureMap[textureX][textureY][2] * inten + 40, 255), 0), 255);
                    }
                    zCurrent += zDeltaToX;
                }
                // Update x and z
                left.xStart += left.delta;
                right.xStart += right.delta;
                left.zStart += left.zDeltaToY;
                right.zStart += right.zDeltaToY;
                // update texture map
                left.textureStart[0] += left.textureDeltaToY[0];
                left.textureStart[1] += left.textureDeltaToY[1];
                right.textureStart[0] += right.textureDeltaToY[0];
                right.textureStart[1] += right.textureDeltaToY[1];
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
        if (cos <= 0) {
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
/*! exports provided: files, textures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "files", function() { return files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textures", function() { return textures; });
/*
 * @Author: GXwar
 * @Date: 2019-02-10 01:33:45
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-09 21:45:06
 */
// data files to be loaded
const files = [
    'atc',
    'bench',
    'ball',
    'cow',
    'cone',
    'house',
    'knight'
];
const textures = [
    'rainbow'
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
 * @Last Modified time: 2019-05-09 15:21:43
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
const camera = new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Camera"](new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](10, 7, 5), new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 0, 3), new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 0, 1));
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
 * @Last Modified time: 2019-05-09 12:12:24
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
const choose_texture = document.querySelector('select.choose_texture');
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["loadMenu"])(choose_texture, _configs_constants__WEBPACK_IMPORTED_MODULE_1__["textures"]);
// // Get three slides ready binding with h, d, f parameter
['h', 'd', 'f'].forEach(item => Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bindSlider"])(item, draw));
// Button
// Bind render button with load file and render opertion
const renderBtn = document.querySelector('.render');
renderBtn.addEventListener('click', () => {
    const modelIndex = choose_model.selectedIndex;
    const textureIndex = choose_texture.selectedIndex;
    // Exception handling
    if (modelIndex === 0)
        alert('Please select a model to render');
    if (textureIndex === 0)
        alert('Please select a texture');
    // Process data
    let modelName = choose_model.options[modelIndex].value;
    modelName = `./public/model/${modelName}.d.txt`;
    let textureName = choose_texture.options[textureIndex].value;
    textureName = `./public/texture/${textureName}.bmp`;
    Object(_utils_loadFile__WEBPACK_IMPORTED_MODULE_2__["default"])(modelName, textureName, ctx, draw);
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
 * @Last Modified time: 2019-05-09 19:52:48
 */

const calcAll = (model, camera, parameters) => {
    camera.calcNUV();
    // console.log('------------------------------ camera ------------------------------');
    // console.log(camera);
    const backFaceSet = Object(_lib_index__WEBPACK_IMPORTED_MODULE_0__["backFaceCulling"])(model, camera);
    // console.log('------------------------------ backFaceSet ------------------------------');
    // console.log(backFaceSet);
    // console.log('------------------------------ points ------------------------------');
    // console.log(model.points);
    const calcPoints = Object(_lib_index__WEBPACK_IMPORTED_MODULE_0__["calcModel"])(model, camera, parameters.h, parameters.d, parameters.f);
    // console.log('------------------------------ screen points ------------------------------');
    // console.log(calcPoints);
    return Object(_lib_index__WEBPACK_IMPORTED_MODULE_0__["scanConversion"])(model, parameters.lights, calcPoints, backFaceSet, parameters.height, parameters.width);
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
 * @Last Modified time: 2019-05-06 01:22:26
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
    document.addEventListener('keypress', function (event) {
        switch (event.key) {
            case 'i':
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.y -= cameraLen;
                draw();
                break;
            case 'k':
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.y += cameraLen;
                draw();
                break;
            case 'j':
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.x += cameraLen;
                draw();
                break;
            case 'l':
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["camera"].position.x -= cameraLen;
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
/*! exports provided: getBMP, readBmpToBuffer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBMP", function() { return getBMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBmpToBuffer", function() { return readBmpToBuffer; });
/* harmony import */ var _configs_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/parameters */ "./src/configs/parameters.ts");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/index */ "./lib/index.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-12 15:08:51
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-09 20:06:24
 */


/**
 * Parse the data from the .d file, return a Model
 * @param data
 * @param objPosition
 */
const coToDegree = (cosaT, sinaT) => {
    let angleCandidate = Math.acos(cosaT);
    return Math.floor(100 * sinaT) == Math.floor(100 * Math.sin(angleCandidate)) ? angleCandidate * 180 / Math.PI : 360 - angleCandidate * 180 / Math.PI;
};
const parseFile = (data, objPosition) => {
    let lines = data.match(/[^\r\n]+/g);
    let [num, pointsNum, facesNum] = lines[0].trim().split(/\s+/);
    // Cause in some file, there are just two number in first line
    if (facesNum == undefined) {
        facesNum = pointsNum;
        pointsNum = num;
    }
    const [pNum, fNum] = [parseInt(pointsNum, 10), parseInt(facesNum)];
    // edge of the model
    let xMin = 0x7fffffff;
    let xMax = -0x7fffffff;
    let yMin = 0x7fffffff;
    let yMax = -0x7fffffff;
    let zMin = 0x7fffffff;
    let zMax = -0x7fffffff;
    // load data to model
    // 1. save all points
    for (let i = 1; i <= pNum; i++) {
        let [x, y, z] = lines[i].trim().split(/\s+/).map(item => parseFloat(item));
        xMin = Math.min(xMin, x);
        xMax = Math.max(xMax, x);
        yMin = Math.min(yMin, y);
        yMax = Math.max(yMin, y);
        zMin = Math.min(zMin, z);
        zMax = Math.max(zMax, z);
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].points.push(new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](x + objPosition.x, y + objPosition.y, z + objPosition.z));
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].pointsNormal.push(new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](0, 0, 0));
    }
    let xRange = xMax - xMin, yRange = yMax - yMin, zRange = zMax - zMin;
    // 2. texture map
    // console.log("------------------------------ texturePoints ------------------------------");
    for (let i = 0; i < pNum; i++) {
        let x = (_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].points[i].x - objPosition.x - xMin) / (xRange + 0.0001);
        let y = (_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].points[i].y - objPosition.y - yMin) / (yRange + 0.0001);
        let z = (_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].points[i].z - objPosition.z - zMin) / (zRange + 0.0001);
        // const thetaDegree = coToDegree(x / Math.sqrt(x * x + y * y), y / Math.sqrt(x * x + y * y));
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].texturePoints[i] = [x, z];
        // console.log(x + " " + z);
    }
    // 3. save all faces
    for (let i = pNum + 1; i <= pNum + fNum; i++) {
        let [_, ...res] = lines[i].trim().split(/\s+/);
        if (res.length <= 2)
            continue;
        let face = res.map((x) => parseInt(x, 10) - 1);
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].faces.push(face);
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].facesNormal.push(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].normalizeFace(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].faces.length - 1));
    }
    // 4. compute point normal
    for (let i = 0; i < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].facesNormal.length; i++) {
        for (let j = 0; j < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].faces[i].length; j++) {
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].pointsNormal[_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].faces[i][j]] = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].pointsNormal[_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].faces[i][j]].add(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].facesNormal[i]);
        }
    }
    for (let i = 0; i < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].points.length; i++) {
        if (_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].pointsNormal[i].abs()) {
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].pointsNormal[i] = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].pointsNormal[i].unit();
        }
    }
    return _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"];
};
/**
 * Read the content of a file
 * @param filePath
 */
const readFile = (filePath, readText) => {
    return new Promise((res, rej) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', filePath, true);
        if (!readText)
            xhr.responseType = 'blob';
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    res(readText ? this.responseText : this.response);
                }
                else {
                    rej();
                }
            }
        };
        xhr.send();
    });
};
const getBMP = (buffer) => {
    const datav = new DataView(buffer);
    const bitmap = {};
    bitmap.fileheader = {};
    bitmap.fileheader.bfType =
        datav.getUint16(0, true);
    bitmap.fileheader.bfSize =
        datav.getUint32(2, true);
    bitmap.fileheader.bfReserved1 =
        datav.getUint16(6, true);
    bitmap.fileheader.bfReserved2 =
        datav.getUint16(8, true);
    bitmap.fileheader.bfOffBits =
        datav.getUint32(10, true);
    bitmap.infoheader = {};
    bitmap.infoheader.biSize =
        datav.getUint32(14, true);
    bitmap.infoheader.biWidth =
        datav.getUint32(18, true);
    bitmap.infoheader.biHeight =
        datav.getUint32(22, true);
    bitmap.infoheader.biPlanes =
        datav.getUint16(26, true);
    bitmap.infoheader.biBitCount =
        datav.getUint16(28, true);
    bitmap.infoheader.biCompression =
        datav.getUint32(30, true);
    bitmap.infoheader.biSizeImage =
        datav.getUint32(34, true);
    bitmap.infoheader.biXPelsPerMeter =
        datav.getUint32(38, true);
    bitmap.infoheader.biYPelsPerMeter =
        datav.getUint32(42, true);
    bitmap.infoheader.biClrUsed =
        datav.getUint32(46, true);
    bitmap.infoheader.biClrImportant =
        datav.getUint32(50, true);
    const start = bitmap.fileheader.bfOffBits;
    bitmap.stride =
        Math.floor((bitmap.infoheader.biBitCount
            * bitmap.infoheader.biWidth + 31) / 32) * 4;
    bitmap.pixels = new Uint8Array(buffer, start);
    return bitmap;
};
const readBmpToBuffer = (ctx, bitmap) => {
    const Width = bitmap.infoheader.biWidth;
    const Height = bitmap.infoheader.biHeight;
    const imageData = ctx.createImageData(Width, Height);
    const data = imageData.data;
    const bmpdata = bitmap.pixels;
    // console.log(bmpdata);
    const stride = bitmap.stride;
    let tBuffer = [];
    let flag = 0;
    for (let i = 0; i < Height; i++) {
        let t = [];
        for (let j = 0; j < Width * 3; j += 3) {
            const index2 = j * 3 + stride * i;
            t.push([
                bmpdata[index2 + 2],
                bmpdata[index2 + 1],
                bmpdata[index2]
            ]);
        }
        tBuffer.push(t);
    }
    return tBuffer;
};
/**
 * Load and render selected model
 * @param {String} filePath
 */
const loadFile = (filePath, texturePath, ctx, draw) => {
    readFile(filePath, true)
        .then((modelData) => {
        readFile(texturePath, false)
            .then((textureData) => {
            parseFile(modelData, new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](0, 0, 0));
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].colorInit(false, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].lights);
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].computeScenePointNormal();
            var reader = new FileReader();
            reader.readAsArrayBuffer(textureData);
            reader.onload = () => {
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["model"].textureMap = readBmpToBuffer(ctx, getBMP(reader.result));
                // console.log("------------------------------ texture map ------------------------------");
                // console.log(model.textureMap.length + " " + model.textureMap[0].length + " " + model.textureMap[0][0].length);
                // console.log(model.textureMap);
                draw();
            };
        });
    })
        .catch(() => {
        console.log(`Load or parse file${filePath} error`);
    });
};
/* harmony default export */ __webpack_exports__["default"] = (loadFile);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NhbWVyYXMvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvbWF0aC9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL21hdGgvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXRoL1ZlY3RvcjNkLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXRoL1ZlY3RvcjRkLnRzIiwid2VicGFjazovLy8uL2xpYi9vYmplY3RzL0VkZ2VUYWJsZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvUkdCQS50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL2ZpbGxQaXhlbC50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL21vZGVsaW5nLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlscy9yYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy9wYXJhbWV0ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2FsY0FsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9sb2FkRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdD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QVkseURBQUssbUJBQW1CLHlEQUFLO0FBQ3pDO0FBQ0E7QUFDQSxXQUFXLHlEQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQSx1QkFBdUIsZUFBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsbURBQVE7QUFDN0MsWUFBWSx5REFBSyxrQkFBa0IsOERBQVU7QUFDN0MsWUFBWSx5REFBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseURBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRCxLQUFLO0FBQ0w7QUFDZSx1RUFBUSxFQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImNsYXNzIENhbWVyYSB7XG4gICAgY29uc3RydWN0b3IocG9zaXRpb24sIHZpZXdpbmdQb2ludCwgVVApIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnZpZXdpbmdQb2ludCA9IHZpZXdpbmdQb2ludDtcbiAgICAgICAgdGhpcy5VUCA9IFVQO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBjYWxjdWxhdGUgdGhlIE4sIFUsIFYgdmVjdG9yIG9mIHRoZSBjYW1lcmFcbiAgICAgKiBAcGFyYW0gb2JqZWN0UG9zaXRpb25cbiAgICAgKi9cbiAgICBjYWxjTlVWKCkge1xuICAgICAgICB0aGlzLk4gPSB0aGlzLnZpZXdpbmdQb2ludC5zdWJ0cmFjdCh0aGlzLnBvc2l0aW9uKS51bml0KCk7XG4gICAgICAgIHRoaXMuVSA9IHRoaXMuTi5jcm9zc1Byb2R1Y3QodGhpcy5VUCkudW5pdCgpO1xuICAgICAgICB0aGlzLlYgPSB0aGlzLlUuY3Jvc3NQcm9kdWN0KHRoaXMuTik7XG4gICAgfVxufVxuZXhwb3J0IHsgQ2FtZXJhIH07XG4iLCIvKioqKioqKioqKioqKioqKioqKiogLi9jYW1lcmFzICoqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IHsgQ2FtZXJhIH0gZnJvbSAnLi9jYW1lcmFzL0NhbWVyYSc7XG4vKioqKioqKioqKioqKioqKioqKiogLi9tYXRoICoqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IHsgTWF0cml4IH0gZnJvbSAnLi9tYXRoL01hdHJpeCc7XG5leHBvcnQgeyBWZWN0b3IzZCB9IGZyb20gJy4vbWF0aC9WZWN0b3IzZCc7XG5leHBvcnQgeyBWZWN0b3I0ZCB9IGZyb20gJy4vbWF0aC9WZWN0b3I0ZCc7XG4vKioqKioqKioqKioqKioqKioqKiogLi9vYmplY3RzICoqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IHsgRWRnZVRhYmxlRWxlbWVudCB9IGZyb20gJy4vb2JqZWN0cy9FZGdlVGFibGVFbGVtZW50JztcbmV4cG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9vYmplY3RzL01vZGVsJztcbmV4cG9ydCB7IFJHQkEgfSBmcm9tICcuL29iamVjdHMvUkdCQSc7XG4vKioqKioqKioqKioqKioqKioqKiogLi90cmFuc2Zvcm0gKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgeyBiYWNrRmFjZUN1bGxpbmcsIGNhbGNNb2RlbCB9IGZyb20gJy4vdHJhbnNmb3JtL21vZGVsaW5nJztcbmV4cG9ydCB7IGJ1ZmZlckluaXQsIHNjYW5Db252ZXJzaW9uIH0gZnJvbSAnLi90cmFuc2Zvcm0vZmlsbFBpeGVsJztcbiIsImltcG9ydCB7IFZlY3RvcjRkIH0gZnJvbSAnLi9WZWN0b3I0ZCc7XG5jbGFzcyBNYXRyaXgge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlc09yTSwgbikge1xuICAgICAgICBpZiAodmFsdWVzT3JNICE9PSB1bmRlZmluZWQgJiYgbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPck07IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzLnB1c2goQXJyYXkuZnJvbSh7IGxlbmd0aDogbiB9LCBfID0+IDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZXNPck0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXNPck07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIG11bHRpcGx5IHdpdGggb3RoZXIgbWF0cml4LCByZXR1cm4gYSBuZXcgbWF0cml4XG4gICAgICogQHBhcmFtIG90aGVyXG4gICAgICovXG4gICAgbXVsdGlwbHkob3RoZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzWzBdLmxlbmd0aCAhPT0gb3RoZXIudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgbXVsdGlwbHkgdGhlc2UgdHdvIG1hdHJpY2VzIScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG4gPSBvdGhlci52YWx1ZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBrID0gb3RoZXIudmFsdWVzWzBdLmxlbmd0aDtcbiAgICAgICAgLy8gbXVsdGlwbHlcbiAgICAgICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtLCBrKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCBuOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TWF0cml4LnZhbHVlc1tpXVtqXSArPSB0aGlzLnZhbHVlc1tpXVt0XSAqIG90aGVyLnZhbHVlc1t0XVtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgICB9XG4gICAgO1xuICAgIHRvVmVjdG9yKCkge1xuICAgICAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yNGQodGhpcy52YWx1ZXNbMF1bMF0sIHRoaXMudmFsdWVzWzFdWzBdLCB0aGlzLnZhbHVlc1syXVswXSwgdGhpcy52YWx1ZXNbM11bMF0pO1xuICAgICAgICByZXR1cm4gdmVjdG9yLmNvbGxhcHNlKCk7XG4gICAgfVxufVxuZXhwb3J0IHsgTWF0cml4IH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE5IDE0OjM3OjAzXG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMTQ6NDA6MjVcbiAqL1xuY2xhc3MgVmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxufVxuZXhwb3J0IHsgVmVjdG9yIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE1IDAxOjMyOjE2XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDUtMDkgMDE6NTE6NDVcbiAqL1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InO1xuaW1wb3J0IHsgVmVjdG9yNGQgfSBmcm9tIFwiLi9WZWN0b3I0ZFwiO1xuY2xhc3MgVmVjdG9yM2QgZXh0ZW5kcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHopIHtcbiAgICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3VwZXIoMCwgMCk7XG4gICAgICAgICAgICB0aGlzLnogPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIoeCwgeSk7XG4gICAgICAgICAgICB0aGlzLnogPSB6O1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4dGVuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0ZCh0aGlzLngsIHRoaXMueSwgdGhpcy56LCAxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZ2V0IHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiB0aGUgdmVjdG9yXG4gICAgICovXG4gICAgYWJzKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueik7XG4gICAgfVxuICAgIGFkZChvdGhlcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCArIG90aGVyLngsIHRoaXMueSArIG90aGVyLnksIHRoaXMueiArIG90aGVyLnopO1xuICAgIH1cbiAgICBzdWJ0cmFjdChvdGhlcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCAtIG90aGVyLngsIHRoaXMueSAtIG90aGVyLnksIHRoaXMueiAtIG90aGVyLnopO1xuICAgIH1cbiAgICBzY2FsZShuKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM2QodGhpcy54ICogbiwgdGhpcy55ICogbiwgdGhpcy56ICogbik7XG4gICAgfVxuICAgIHVuaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlKDEgLyB0aGlzLmFicygpKTtcbiAgICB9XG4gICAgY3Jvc3NQcm9kdWN0KG90aGVyKSB7XG4gICAgICAgIC8vIHJldHVybiBbXG4gICAgICAgIC8vICAgdmVjMVsxXSAqIHZlYzJbMl0gLSB2ZWMyWzFdICogdmVjMVsyXSxcbiAgICAgICAgLy8gICAtKHZlYzFbMF0gKiB2ZWMyWzJdIC0gdmVjMlswXSAqIHZlYzFbMl0pLFxuICAgICAgICAvLyAgIHZlYzFbMF0gKiB2ZWMyWzFdIC0gdmVjMlswXSAqIHZlYzFbMV1cbiAgICAgICAgLy8gXTtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnkgKiBvdGhlci56IC0gb3RoZXIueSAqIHRoaXMueiwgLSh0aGlzLnggKiBvdGhlci56IC0gb3RoZXIueCAqIHRoaXMueiksIHRoaXMueCAqIG90aGVyLnkgLSBvdGhlci54ICogdGhpcy55KTtcbiAgICB9XG4gICAgZG90UHJvZHVjdChvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogb3RoZXIueCArIHRoaXMueSAqIG90aGVyLnkgKyB0aGlzLnogKiBvdGhlci56O1xuICAgIH1cbn1cbmV4cG9ydCB7IFZlY3RvcjNkIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE1IDAxOjMxOjUzXG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMTQ6NDE6MzBcbiAqL1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InO1xuaW1wb3J0IHsgVmVjdG9yM2QgfSBmcm9tICcuL1ZlY3RvcjNkJztcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gJy4vTWF0cml4JztcbmNsYXNzIFZlY3RvcjRkIGV4dGVuZHMgVmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6LCB3KSB7XG4gICAgICAgIHN1cGVyKHgsIHkpO1xuICAgICAgICB0aGlzLnogPSB6O1xuICAgICAgICB0aGlzLncgPSB3O1xuICAgIH1cbiAgICBjb2xsYXBzZSgpIHtcbiAgICAgICAgbGV0IHQgPSB0aGlzLnc7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM2QodGhpcy54IC8gdCwgdGhpcy55IC8gdCwgdGhpcy56IC8gdCk7XG4gICAgfVxuICAgIHRvTWF0cml4KCkge1xuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeChbXG4gICAgICAgICAgICBbdGhpcy54XSxcbiAgICAgICAgICAgIFt0aGlzLnldLFxuICAgICAgICAgICAgW3RoaXMuel0sXG4gICAgICAgICAgICBbdGhpcy53XVxuICAgICAgICBdKTtcbiAgICB9XG59XG5leHBvcnQgeyBWZWN0b3I0ZCB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xNyAyMTozNzoxMFxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTA1LTA5IDE5OjA1OjQ1XG4gKi9cbmNsYXNzIEVkZ2VUYWJsZUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHlTdGFydCwgeU1heCwgeFN0YXJ0LCBkZWx0YSwgelN0YXJ0LCB6RGVsdGFUb1ksIG5vcm1hbFN0YXJ0LCBub3JtYWxFbmQsIHRleHR1cmVTdGFydCwgdGV4dHVyZURlbHRhVG9ZKSB7XG4gICAgICAgIHRoaXMueVN0YXJ0ID0geVN0YXJ0O1xuICAgICAgICB0aGlzLnlNYXggPSB5TWF4O1xuICAgICAgICB0aGlzLnhTdGFydCA9IHhTdGFydDtcbiAgICAgICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgICAgICB0aGlzLnpTdGFydCA9IHpTdGFydDtcbiAgICAgICAgdGhpcy56RGVsdGFUb1kgPSB6RGVsdGFUb1k7XG4gICAgICAgIHRoaXMubm9ybWFsU3RhcnQgPSBub3JtYWxTdGFydDtcbiAgICAgICAgdGhpcy5ub3JtYWxFbmQgPSBub3JtYWxFbmQ7XG4gICAgICAgIHRoaXMudGV4dHVyZVN0YXJ0ID0gdGV4dHVyZVN0YXJ0O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluaXQ6IFwiICsgdGhpcy50ZXh0dXJlU3RhcnRbMF0gKyBcIiBcIiArIHRoaXMudGV4dHVyZVN0YXJ0WzFdKTtcbiAgICAgICAgdGhpcy50ZXh0dXJlRGVsdGFUb1kgPSB0ZXh0dXJlRGVsdGFUb1k7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlZDogXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRleHR1cmVTdGFydFswXSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGV4dHVyZVN0YXJ0WzFdKTtcbiAgICB9XG59XG47XG5leHBvcnQgeyBFZGdlVGFibGVFbGVtZW50IH07XG4iLCJpbXBvcnQgeyBSR0JBIH0gZnJvbSBcIi4vUkdCQVwiO1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vdXRpbHMvcmFuZCc7XG5jbGFzcyBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIHRoaXMucG9pbnRzTm9ybWFsID0gW107XG4gICAgICAgIHRoaXMudGV4dHVyZVBvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLmZhY2VzID0gW107XG4gICAgICAgIHRoaXMuZmFjZXNOb3JtYWwgPSBbXTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbG9yID0gW107XG4gICAgICAgIHRoaXMudGV4dHVyZU1hcCA9IFtdO1xuICAgIH1cbiAgICBjb2xvckluaXQoc2luZ2xlTGlnaHRPbiwgbGlnaHRzKSB7XG4gICAgICAgIHRoaXMuZmFjZXNDb2xvciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmFjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaW5nbGVMaWdodE9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdyYXkgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBub3JtYWwgPSB0aGlzLmZhY2VzTm9ybWFsW2ldO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGxpZ2h0IG9mIGxpZ2h0cykge1xuICAgICAgICAgICAgICAgICAgICBncmF5ICs9ICgxMjggKyAxMjggKiBub3JtYWwudW5pdCgpLmRvdFByb2R1Y3QobGlnaHQudW5pdCgpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZmFjZXNDb2xvci5wdXNoKG5ldyBSR0JBKGdyYXksIGdyYXksIGdyYXksIDI1NSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWNlc0NvbG9yLnB1c2gobmV3IFJHQkEocmFuZG9tKCksIHJhbmRvbSgpLCByYW5kb20oKSwgMjU1KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm9ybWFsaXplRmFjZShmYWNlSW5kZXgpIHtcbiAgICAgICAgY29uc3QgZmFjZSA9IHRoaXMuZmFjZXNbZmFjZUluZGV4XTtcbiAgICAgICAgY29uc3QgW3AxLCBwMiwgcDNdID0gW3RoaXMucG9pbnRzW2ZhY2VbMF1dLCB0aGlzLnBvaW50c1tmYWNlWzFdXSwgdGhpcy5wb2ludHNbZmFjZVsyXV1dO1xuICAgICAgICByZXR1cm4gcDIuc3VidHJhY3QocDEpLmNyb3NzUHJvZHVjdChwMy5zdWJ0cmFjdChwMikpLnVuaXQoKTtcbiAgICB9XG4gICAgY29tcHV0ZVNjZW5lUG9pbnROb3JtYWwoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mYWNlc05vcm1hbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZhY2VzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMuZmFjZXNbaV1bal07XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludHNOb3JtYWxbdGVtcF0gPSB0aGlzLnBvaW50c05vcm1hbFt0ZW1wXS5hZGQodGhpcy5mYWNlc05vcm1hbFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRzTm9ybWFsW2ldLmFicygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludHNOb3JtYWxbaV0gPSB0aGlzLnBvaW50c05vcm1hbFtpXS51bml0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgeyBNb2RlbCB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xOSAxNjozNzo0OVxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDE2OjQ1OjU1XG4gKi9cbmNsYXNzIFJHQkEge1xuICAgIGNvbnN0cnVjdG9yKHIgPSAwLCBnID0gMCwgYiA9IDAsIGEgPSAyNTUpIHtcbiAgICAgICAgdGhpcy5yID0gcjtcbiAgICAgICAgdGhpcy5nID0gZztcbiAgICAgICAgdGhpcy5iID0gYjtcbiAgICAgICAgdGhpcy5hID0gYTtcbiAgICB9XG59XG5leHBvcnQgeyBSR0JBIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE3IDE0OjQ0OjMyXG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDUtMDkgMTk6NTE6NDhcbiAqL1xuLyoqKioqKioqKioqKioqKioqKioqIEZJTEwgUElYRUxTICoqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IHsgVmVjdG9yM2QsIEVkZ2VUYWJsZUVsZW1lbnQsIFJHQkEgfSBmcm9tICcuLi8uLi9saWIvaW5kZXgnO1xuLy8gY29udmVydCAyZCBwb2ludCB0byBjYW52YXMgcG9pbnRcbmNvbnN0IHRvUGl4ZWwgPSAodmFsdWUsIGhlaWdodCwgc2hvcnR0ZW4gPSBmYWxzZSkgPT4gTWF0aC5mbG9vcigodmFsdWUgKyAxKSAqIGhlaWdodCAvIDIpIC0gKHNob3J0dGVuID8gMSA6IDApO1xuY29uc3QgdG9GbG9hdFBpeGVsID0gKHZhbHVlLCBoZWlnaHQpID0+ICh2YWx1ZSArIDEpICogaGVpZ2h0IC8gMjtcbmNvbnN0IGJ1ZmZlckluaXQgPSAoaGVpZ2h0LCB3aWR0aCkgPT4ge1xuICAgIGNvbnN0IGlCdWZmZXIgPSBbXTtcbiAgICBjb25zdCB6QnVmZmVyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICBpQnVmZmVyW2ldID0gW107XG4gICAgICAgIHpCdWZmZXJbaV0gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICBpQnVmZmVyW2ldW2pdID0gbmV3IFJHQkEoMCwgMCwgMCwgMjU1KTtcbiAgICAgICAgICAgIHpCdWZmZXJbaV1bal0gPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbaUJ1ZmZlciwgekJ1ZmZlcl07XG59O1xuY29uc3QgZWRnZVRhYmxlSW5pdCA9IChoZWlnaHQpID0+IHtcbiAgICBjb25zdCBlZGdlVGFibGUgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGVkZ2VUYWJsZVtpXSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gZWRnZVRhYmxlO1xufTtcbi8qKlxuICogU2NhbiBDb252ZXJzaW9uXG4gKiAxLiBmb3IgZWFjaCBzY2FuIGxpbmUsIGRldGVybWluZSBlZGdlcyBvZiBwb2x5Z29ucyB0aGF0IGludGVyc2VjdFxuICogMi4gRmluZCB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgc3BhblxuICogMy4gUmVseSBvbiBzY2FubGluZSBhbmQgcGl4ZWwgY29oZXJlbmNlIHRvIGxpbmVhcmx5IGludGVycG9sYXRlIChiZXR3ZWVuIHNjYW5saW5lcyBhbmQgYmV0d2VlbiBwaXhlbHMpXG4gKi9cbmNvbnN0IGRpZmZ1c2VUcmVtID0gKGtkLCBJTGlnaHQsIG5vcm1hbCwgbGlnaHQsIHBvd2VyKSA9PiB7XG4gICAgY29uc3QgZ3JhZGllbnQgPSBNYXRoLnBvdyhub3JtYWwuZG90UHJvZHVjdChsaWdodCksIHBvd2VyKTtcbiAgICByZXR1cm4gZ3JhZGllbnQgPiAwID8gZ3JhZGllbnQgKiBrZCAqIElMaWdodCA6IDA7XG59O1xuY29uc3QgYWRkRWRnZVRvRWRnZVRhYmxlID0gKG1vZGVsLCBpbmRleFN0YXJ0LCBpbmRleEVuZCwgbG93ZXJQb2ludCwgdXBwZXJQb2ludCwgZWRnZVRhYmxlLCBoZWlnaHQpID0+IHtcbiAgICAvLyBpZ25vcmUgaG9yaXpvbnRhbCBlZGdlIGFuZCBvdXQgb2YgcmFuZ2UgcG9pbnRcbiAgICBpZiAodG9QaXhlbChsb3dlclBvaW50LnksIGhlaWdodCkgPT09IHRvUGl4ZWwodXBwZXJQb2ludC55LCBoZWlnaHQpXG4gICAgICAgIHx8IGxvd2VyUG9pbnQueCA8IC0xIHx8IGxvd2VyUG9pbnQueCA+IDEgfHwgbG93ZXJQb2ludC55IDwgLTEgfHwgbG93ZXJQb2ludC55ID4gMVxuICAgICAgICB8fCB1cHBlclBvaW50LnggPCAtMSB8fCB1cHBlclBvaW50LnggPiAxIHx8IHVwcGVyUG9pbnQueSA8IC0xIHx8IHVwcGVyUG9pbnQueSA+IDEpXG4gICAgICAgIHJldHVybjtcbiAgICAvLyBzd2FwIHRoZSBvcmRlciBvZiB0d28gcG9pbnRzXG4gICAgaWYgKGxvd2VyUG9pbnQueSA+IHVwcGVyUG9pbnQueSkge1xuICAgICAgICBbbG93ZXJQb2ludCwgdXBwZXJQb2ludF0gPSBbdXBwZXJQb2ludCwgbG93ZXJQb2ludF07XG4gICAgICAgIFtpbmRleFN0YXJ0LCBpbmRleEVuZF0gPSBbaW5kZXhFbmQsIGluZGV4U3RhcnRdO1xuICAgIH1cbiAgICAvLyBjcmVhdGUgZWRnZSB0YWJsZSBlbGVtZW50IGFuZCBhZGQgaXQgaW50byB0aGUgZWRnZSB0YWJsZVxuICAgIGxldCB0ZXh0dXJlRGVsdGEgPSBbXG4gICAgICAgIChtb2RlbC50ZXh0dXJlUG9pbnRzW2luZGV4RW5kXVswXSAtIG1vZGVsLnRleHR1cmVQb2ludHNbaW5kZXhTdGFydF1bMF0pIC8gKHRvUGl4ZWwodXBwZXJQb2ludC55LCBoZWlnaHQsIHRydWUpIC0gdG9QaXhlbChsb3dlclBvaW50LnksIGhlaWdodCwgdHJ1ZSkpLFxuICAgICAgICAobW9kZWwudGV4dHVyZVBvaW50c1tpbmRleEVuZF1bMV0gLSBtb2RlbC50ZXh0dXJlUG9pbnRzW2luZGV4U3RhcnRdWzFdKSAvICh0b1BpeGVsKHVwcGVyUG9pbnQueSwgaGVpZ2h0LCB0cnVlKSAtIHRvUGl4ZWwobG93ZXJQb2ludC55LCBoZWlnaHQsIHRydWUpKVxuICAgIF07XG4gICAgY29uc3QgRVRFbGVtZW50ID0gbmV3IEVkZ2VUYWJsZUVsZW1lbnQodG9QaXhlbChsb3dlclBvaW50LnksIGhlaWdodCksIHRvUGl4ZWwodXBwZXJQb2ludC55LCBoZWlnaHQpLCB0b0Zsb2F0UGl4ZWwobG93ZXJQb2ludC54LCBoZWlnaHQpLCAobG93ZXJQb2ludC54IC0gdXBwZXJQb2ludC54KSAvIChsb3dlclBvaW50LnkgLSB1cHBlclBvaW50LnkpLCBsb3dlclBvaW50LnosIChsb3dlclBvaW50LnogLSB1cHBlclBvaW50LnopIC8gKHRvUGl4ZWwobG93ZXJQb2ludC55LCBoZWlnaHQpIC0gdG9QaXhlbCh1cHBlclBvaW50LnksIGhlaWdodCkpLCBtb2RlbC5wb2ludHNOb3JtYWxbaW5kZXhTdGFydF0sIG1vZGVsLnBvaW50c05vcm1hbFtpbmRleEVuZF0sIG1vZGVsLnRleHR1cmVQb2ludHNbaW5kZXhTdGFydF0sIHRleHR1cmVEZWx0YSk7XG4gICAgLy8gY29uc29sZS5sb2coXCIgLS0tLS0gZWRnZSB0YWJsZSBlbGVtZW50XCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGxvd2VyUG9pbnQueSArIFwiIFwiICsgaW5kZXhTdGFydCk7XG4gICAgLy8gY29uc29sZS5sb2coRVRFbGVtZW50KTtcbiAgICAvLyBjb25zb2xlLmxvZyhFVEVsZW1lbnQudGV4dHVyZVN0YXJ0KVxuICAgIGVkZ2VUYWJsZVtNYXRoLmZsb29yKEVURWxlbWVudC55U3RhcnQpXS5wdXNoKEVURWxlbWVudCk7XG59O1xuY29uc3Qgc2NhbkNvbnZlcnNpb24gPSAobW9kZWwsIGxpZ2h0cywgY2FsY1BvaW50cywgYmFja0ZhY2VTZXQsIGhlaWdodCwgd2lkdGgpID0+IHtcbiAgICBjb25zdCBbaUJ1ZmZlciwgekJ1ZmZlcl0gPSBidWZmZXJJbml0KGhlaWdodCwgd2lkdGgpO1xuICAgIGxldCBhY3RpdmVFZGdlVGFibGUgPSBbXTtcbiAgICAvLyBmb3IgZWFjaCBmYWNlXG4gICAgLy8gY29uc29sZS5sb2coYmFja0ZhY2VTZXQpO1xuICAgIG1vZGVsLmZhY2VzLmZvckVhY2goKGZhY2UsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGRvbid0IG5lZWQgdG8gY29uc2lkZXIgYmFja2ZhY2VcbiAgICAgICAgaWYgKGJhY2tGYWNlU2V0LmhhcyhpbmRleCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5kZXg6IFwiICsgaW5kZXgpO1xuICAgICAgICAvLyBidWlsZCBlZGdlIHRhYmxlXG4gICAgICAgIGNvbnN0IGVkZ2VUYWJsZSA9IGVkZ2VUYWJsZUluaXQoaGVpZ2h0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgYW4gZWRnZSBcbiAgICAgICAgICAgIGxldCBbaW5kZXhTdGFydCwgaW5kZXhFbmRdID0gW2ZhY2VbaV0sIGZhY2VbKGkgKyAxKSAlIGZhY2UubGVuZ3RoXV07XG4gICAgICAgICAgICBsZXQgW2xvd2VyUG9pbnQsIHVwcGVyUG9pbnRdID0gW2NhbGNQb2ludHNbaW5kZXhTdGFydF0sIGNhbGNQb2ludHNbaW5kZXhFbmRdXTtcbiAgICAgICAgICAgIGFkZEVkZ2VUb0VkZ2VUYWJsZShtb2RlbCwgaW5kZXhTdGFydCwgaW5kZXhFbmQsIGxvd2VyUG9pbnQsIHVwcGVyUG9pbnQsIGVkZ2VUYWJsZSwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWxsIHBpeGVsIHRvIHBpeGVsIGJ1ZmZlclxuICAgICAgICBsZXQgY3VycmVudFNjYW5MaW5lID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVkZ2VUYWJsZVtpXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNjYW5MaW5lID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNjYW4gY29udmVydC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFNjYW5MaW5lKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGN1cnJlbnRTY2FuTGluZTsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIGVkZ2UgZnJvbSBFZGdlIFRhYmVsIHRvIEFjdGl2ZSBFZGdlIFRhYmxlXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGVkZ2VUYWJsZVtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5wdXNoKGVkZ2VUYWJsZVtpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlZGdlVGFibGVbaV0gPSBbXTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbGVhdmluZyBlZGdlXG4gICAgICAgICAgICBhY3RpdmVFZGdlVGFibGUgPSBhY3RpdmVFZGdlVGFibGVcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZWRnZSBmcm9tIEFjdGl2ZSBFZGdlIFRhYmxlIHdoaWxlIHkgPSB5TWF4XG4gICAgICAgICAgICAgICAgLmZpbHRlcihlZGdlID0+IGVkZ2UueU1heCAhPT0gaSlcbiAgICAgICAgICAgICAgICAvLyBzb3J0IEFFVCBieSB4U3RhcnRcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnhTdGFydCAtIGIueFN0YXJ0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiArIDEgPCBhY3RpdmVFZGdlVGFibGUubGVuZ3RoOyBqICs9IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbGVmdCwgcmlnaHRdID0gW2FjdGl2ZUVkZ2VUYWJsZVtqXSwgYWN0aXZlRWRnZVRhYmxlW2ogKyAxXV07XG4gICAgICAgICAgICAgICAgbGV0IHpDdXJyZW50ID0gbGVmdC56U3RhcnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgekRlbHRhVG9YID0gKGxlZnQuelN0YXJ0IC0gcmlnaHQuelN0YXJ0KSAvIChsZWZ0LnhTdGFydCAtIHJpZ2h0LnhTdGFydCk7XG4gICAgICAgICAgICAgICAgLy8gcGhvbmcgc2hhZGluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhID0gbGVmdC5ub3JtYWxFbmQuc2NhbGUoKGkgLSBsZWZ0LnlTdGFydCkgLyAobGVmdC55TWF4IC0gbGVmdC55U3RhcnQpKVxuICAgICAgICAgICAgICAgICAgICAuYWRkKGxlZnQubm9ybWFsU3RhcnQuc2NhbGUoKGxlZnQueU1heCAtIGkpIC8gKGxlZnQueU1heCAtIGxlZnQueVN0YXJ0KSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxiID0gcmlnaHQubm9ybWFsRW5kLnNjYWxlKChpIC0gcmlnaHQueVN0YXJ0KSAvIChyaWdodC55TWF4IC0gcmlnaHQueVN0YXJ0KSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZChyaWdodC5ub3JtYWxTdGFydC5zY2FsZSgocmlnaHQueU1heCAtIGkpIC8gKHJpZ2h0LnlNYXggLSByaWdodC55U3RhcnQpKSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobGVmdC54U3RhcnQgKyBcIiBcIiArIHJpZ2h0LnhTdGFydCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IE1hdGguZmxvb3IobGVmdC54U3RhcnQpOyBrIDwgTWF0aC5mbG9vcihyaWdodC54U3RhcnQpOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHpDdXJyZW50IDw9IHpCdWZmZXJbaV1ba10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHpCdWZmZXJbaV1ba10gPSB6Q3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJOb3JtYWwgPSByaWdodC54U3RhcnQgLSBsZWZ0LnhTdGFydCA9PT0gMCA/IGxhLnVuaXQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGEuc2NhbGUoKHJpZ2h0LnhTdGFydCAtIGspIC8gKHJpZ2h0LnhTdGFydCAtIGxlZnQueFN0YXJ0KSkuYWRkKGxiLnNjYWxlKChrIC0gbGVmdC54U3RhcnQpIC8gKHJpZ2h0LnhTdGFydCAtIGxlZnQueFN0YXJ0KSkpLnVuaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHR1cmUgbWFwIGNvb3JkaW5hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWFsVGV4dHVyZVggPSBrID09IE1hdGguZmxvb3IobGVmdC54U3RhcnQpID8gbGVmdC50ZXh0dXJlU3RhcnRbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxlZnQudGV4dHVyZVN0YXJ0WzBdICogKE1hdGguZmxvb3IocmlnaHQueFN0YXJ0KSAtIGspIC8gKE1hdGguZmxvb3IocmlnaHQueFN0YXJ0KSAtIE1hdGguZmxvb3IobGVmdC54U3RhcnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHJpZ2h0LnRleHR1cmVTdGFydFswXSAqIChrIC0gTWF0aC5mbG9vcihsZWZ0LnhTdGFydCkpIC8gKE1hdGguZmxvb3IocmlnaHQueFN0YXJ0KSAtIE1hdGguZmxvb3IobGVmdC54U3RhcnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWFsVGV4dHVyZVkgPSBrID09IE1hdGguZmxvb3IobGVmdC54U3RhcnQpID8gbGVmdC50ZXh0dXJlU3RhcnRbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxlZnQudGV4dHVyZVN0YXJ0WzFdICogKE1hdGguZmxvb3IocmlnaHQueFN0YXJ0KSAtIGspIC8gKE1hdGguZmxvb3IocmlnaHQueFN0YXJ0KSAtIE1hdGguZmxvb3IobGVmdC54U3RhcnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHJpZ2h0LnRleHR1cmVTdGFydFsxXSAqIChrIC0gTWF0aC5mbG9vcihsZWZ0LnhTdGFydCkpIC8gKE1hdGguZmxvb3IocmlnaHQueFN0YXJ0KSAtIE1hdGguZmxvb3IobGVmdC54U3RhcnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGV4dHVyZSBwb3NpdGlvbjogXCIgKyByZWFsVGV4dHVyZVggKyBcIiBcIiArIHJlYWxUZXh0dXJlWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoayA9PSBNYXRoLmZsb29yKGxlZnQueFN0YXJ0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxUZXh0dXJlWCA9IGxlZnQudGV4dHVyZVN0YXJ0WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxUZXh0dXJlWSA9IGxlZnQudGV4dHVyZVN0YXJ0WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IGxlZnQueVN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ck5vcm1hbCA9IGxlZnQubm9ybWFsU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJOb3JtYWwgPSBsYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJOb3JtYWwgPSBsYS5zY2FsZShyaWdodC54U3RhcnQgLSBrKS5hZGQobGIuc2NhbGUoayAtIGxlZnQueFN0YXJ0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWFsVGV4dHVyZVgsIHJlYWxUZXh0dXJlWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJOb3JtYWwgPSBjdXJOb3JtYWwudW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpZ2h0VmVjdG9yID0gbmV3IFZlY3RvcjNkKDEwLCAxMCwgMTApLnVuaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBncmF5ID0gZGlmZnVzZVRyZW0oMSwgMTAwLCBjdXJOb3JtYWwsIGxpZ2h0VmVjdG9yLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmF5IDwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmF5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmF5ID4gMjU1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXkgPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZW4gPSBncmF5IC8gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWxUZXh0dXJlWCA+IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbFRleHR1cmVYID0gMC45OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFsVGV4dHVyZVggPCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxUZXh0dXJlWCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhbFRleHR1cmVZID4gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVGV4dHVyZVkgPSAwLjk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWxUZXh0dXJlWSA8IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbFRleHR1cmVZID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlWCA9IE1hdGguZmxvb3IocmVhbFRleHR1cmVYICogbW9kZWwudGV4dHVyZU1hcC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmVZID0gTWF0aC5mbG9vcihyZWFsVGV4dHVyZVkgKiBtb2RlbC50ZXh0dXJlTWFwWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZXh0dXJlWCArIFwiIFwiICsgdGV4dHVyZVkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaUJ1ZmZlcltpXVtrXSA9IG5ldyBSR0JBKE1hdGgubWF4KE1hdGgubWluKG1vZGVsLnRleHR1cmVNYXBbdGV4dHVyZVhdW3RleHR1cmVZXVswXSAqIGludGVuICsgNDAsIDI1NSksIDApLCBNYXRoLm1heChNYXRoLm1pbihtb2RlbC50ZXh0dXJlTWFwW3RleHR1cmVYXVt0ZXh0dXJlWV1bMV0gKiBpbnRlbiArIDQwLCAyNTUpLCAwKSwgTWF0aC5tYXgoTWF0aC5taW4obW9kZWwudGV4dHVyZU1hcFt0ZXh0dXJlWF1bdGV4dHVyZVldWzJdICogaW50ZW4gKyA0MCwgMjU1KSwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgekN1cnJlbnQgKz0gekRlbHRhVG9YO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgeCBhbmQgelxuICAgICAgICAgICAgICAgIGxlZnQueFN0YXJ0ICs9IGxlZnQuZGVsdGE7XG4gICAgICAgICAgICAgICAgcmlnaHQueFN0YXJ0ICs9IHJpZ2h0LmRlbHRhO1xuICAgICAgICAgICAgICAgIGxlZnQuelN0YXJ0ICs9IGxlZnQuekRlbHRhVG9ZO1xuICAgICAgICAgICAgICAgIHJpZ2h0LnpTdGFydCArPSByaWdodC56RGVsdGFUb1k7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRleHR1cmUgbWFwXG4gICAgICAgICAgICAgICAgbGVmdC50ZXh0dXJlU3RhcnRbMF0gKz0gbGVmdC50ZXh0dXJlRGVsdGFUb1lbMF07XG4gICAgICAgICAgICAgICAgbGVmdC50ZXh0dXJlU3RhcnRbMV0gKz0gbGVmdC50ZXh0dXJlRGVsdGFUb1lbMV07XG4gICAgICAgICAgICAgICAgcmlnaHQudGV4dHVyZVN0YXJ0WzBdICs9IHJpZ2h0LnRleHR1cmVEZWx0YVRvWVswXTtcbiAgICAgICAgICAgICAgICByaWdodC50ZXh0dXJlU3RhcnRbMV0gKz0gcmlnaHQudGV4dHVyZURlbHRhVG9ZWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGlCdWZmZXI7XG59O1xuZXhwb3J0IHsgYnVmZmVySW5pdCwgc2NhbkNvbnZlcnNpb24gfTtcbiIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gJy4uL21hdGgvTWF0cml4JztcbmNvbnN0IHdvcmxkMkNhbWVyYSA9IChjYW1lcmEpID0+IHtcbiAgICBjb25zdCBSID0gbmV3IE1hdHJpeChbXG4gICAgICAgIFtjYW1lcmEuVS54LCBjYW1lcmEuVS55LCBjYW1lcmEuVS56LCAwXSxcbiAgICAgICAgW2NhbWVyYS5WLngsIGNhbWVyYS5WLnksIGNhbWVyYS5WLnosIDBdLFxuICAgICAgICBbY2FtZXJhLk4ueCwgY2FtZXJhLk4ueSwgY2FtZXJhLk4ueiwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAxXVxuICAgIF0pO1xuICAgIGNvbnN0IFQgPSBuZXcgTWF0cml4KFtcbiAgICAgICAgWzEsIDAsIDAsIC1jYW1lcmEucG9zaXRpb24ueF0sXG4gICAgICAgIFswLCAxLCAwLCAtY2FtZXJhLnBvc2l0aW9uLnldLFxuICAgICAgICBbMCwgMCwgMSwgLWNhbWVyYS5wb3NpdGlvbi56XSxcbiAgICAgICAgWzAsIDAsIDAsIDFdXG4gICAgXSk7XG4gICAgcmV0dXJuIFIubXVsdGlwbHkoVCk7XG59O1xuY29uc3QgcGVyc3BlY3RpdmVUcmFuc2Zvcm0gPSAoaCwgZCwgZikgPT4gbmV3IE1hdHJpeChbXG4gICAgW2QgLyBoLCAwLCAwLCAwXSxcbiAgICBbMCwgZCAvIGgsIDAsIDBdLFxuICAgIFswLCAwLCBmIC8gKGYgLSBkKSwgLWQgKiBmIC8gKGYgLSBkKV0sXG4gICAgWzAsIDAsIDEsIDBdXG5dKTtcbi8qKlxuICogQmFjay1mYWNlIGN1bGxpbmdcbiAqIFZpc2libGUgaWYgTnAgZG90IHByb2R1Y3QgTiA+IDBcbiAqIE5vdGU6IFNvbWUgdGhlIHBvbHlnb25zIGFyZSBkZW5vdGVkIGluIGFudGktY2xvY2t3aXNlIG9yZGVyXG4gKi9cbmNvbnN0IGJhY2tGYWNlQ3VsbGluZyA9IChtb2RlbCwgY2FtZXJhKSA9PiB7XG4gICAgY29uc3QgYmFja0ZhY2VTZXQgPSBuZXcgU2V0KCk7XG4gICAgbW9kZWwuZmFjZXMuZm9yRWFjaCgoZmFjZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmlldyA9IGNhbWVyYS5wb3NpdGlvbi5zdWJ0cmFjdChtb2RlbC5wb2ludHNbZmFjZVsxXV0pLnVuaXQoKTtcbiAgICAgICAgY29uc3QgY29zID0gbW9kZWwuZmFjZXNOb3JtYWxbaW5kZXhdLmRvdFByb2R1Y3Qodmlldyk7XG4gICAgICAgIGlmIChjb3MgPD0gMCkge1xuICAgICAgICAgICAgYmFja0ZhY2VTZXQuYWRkKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBiYWNrRmFjZVNldDtcbn07XG4vLyBDYWxjdWxhdGUgbW9kZWxcbmNvbnN0IGNhbGNNb2RlbCA9IChtb2RlbCwgY2FtZXJhLCBoLCBkLCBmKSA9PiB7XG4gICAgY29uc3QgY29tYm8gPSBwZXJzcGVjdGl2ZVRyYW5zZm9ybShoLCBkLCBmKS5tdWx0aXBseSh3b3JsZDJDYW1lcmEoY2FtZXJhKSk7XG4gICAgcmV0dXJuIG1vZGVsLnBvaW50cy5tYXAocG9pbnQgPT4ge1xuICAgICAgICByZXR1cm4gY29tYm8ubXVsdGlwbHkocG9pbnQuZXh0ZW5kKCkudG9NYXRyaXgoKSkudG9WZWN0b3IoKTtcbiAgICB9KTtcbn07XG5leHBvcnQgeyBiYWNrRmFjZUN1bGxpbmcsIGNhbGNNb2RlbCB9O1xuIiwiLyoqXG4gKiBHZXQgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgMjU1KGJvdGggaW5jbHVzaXZlKTtcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTEwIDAxOjMzOjQ1XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDUtMDkgMjE6NDU6MDZcbiAqL1xuLy8gZGF0YSBmaWxlcyB0byBiZSBsb2FkZWRcbmV4cG9ydCBjb25zdCBmaWxlcyA9IFtcbiAgICAnYXRjJyxcbiAgICAnYmVuY2gnLFxuICAgICdiYWxsJyxcbiAgICAnY293JyxcbiAgICAnY29uZScsXG4gICAgJ2hvdXNlJyxcbiAgICAna25pZ2h0J1xuXTtcbmV4cG9ydCBjb25zdCB0ZXh0dXJlcyA9IFtcbiAgICAncmFpbmJvdydcbl07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE4IDAxOjMzOjU2XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDUtMDkgMTU6MjE6NDNcbiAqL1xuaW1wb3J0IHsgQ2FtZXJhLCBNb2RlbCwgVmVjdG9yM2QgfSBmcm9tICcuLi8uLi9saWIvaW5kZXgnO1xuY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBoOiAxLFxuICAgIGQ6IDEsXG4gICAgZjogMTAwMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaUJ1ZmZlcjogW10sXG4gICAgbGlnaHRzOiBbXG4gICAgICAgIG5ldyBWZWN0b3IzZCgxMDAsIDEwMCwgMTAwKVxuICAgIF0sXG4gICAgc2hhZGluZ1R5cGU6ICdQaG9uZydcbn07XG5jb25zdCBjYW1lcmEgPSBuZXcgQ2FtZXJhKG5ldyBWZWN0b3IzZCgxMCwgNywgNSksIG5ldyBWZWN0b3IzZCgwLCAwLCAzKSwgbmV3IFZlY3RvcjNkKDAsIDAsIDEpKTtcbmNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCk7XG5leHBvcnQgeyBwYXJhbWV0ZXJzLCBjYW1lcmEsIG1vZGVsIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE0IDE1OjE4OjUyXG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDUtMDkgMTI6MTI6MjRcbiAqL1xuaW1wb3J0IHsgbW9kZWwsIGNhbWVyYSwgcGFyYW1ldGVycyB9IGZyb20gJy4vY29uZmlncy9wYXJhbWV0ZXJzJztcbmltcG9ydCB7IGZpbGVzLCB0ZXh0dXJlcyB9IGZyb20gJy4vY29uZmlncy9jb25zdGFudHMnO1xuaW1wb3J0IGxvYWRGaWxlIGZyb20gJy4vdXRpbHMvbG9hZEZpbGUnO1xuaW1wb3J0IHsgbG9hZE1lbnUsIGJpbmRTbGlkZXIsIHJlYWN0VG9PcGVyYXRpb24gfSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBjYWxjQWxsIH0gZnJvbSAnLi91dGlscy9jYWxjQWxsJztcbi8qKioqKioqKioqKioqKioqKioqKiBJbml0aWFsaXplIERPTSAqKioqKioqKioqKioqKioqKioqKi9cbi8vIEdldCBjYW52YXMgcmVhZHlcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuY29uc3Qgd2lkdGggPSBjYW52YXMud2lkdGg7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbi8vIExvYWQgYWxsIG1vZGVsIG9wdGlvbnMgdG8gbWVudVxuY29uc3QgY2hvb3NlX21vZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0LmNob29zZV9tb2RlbCcpO1xubG9hZE1lbnUoY2hvb3NlX21vZGVsLCBmaWxlcyk7XG4vLyBMb2FkIHNoYWRpbmcgdHlwZSBvcHRpb25zIHRvIG1lbnVcbmNvbnN0IGNob29zZV90ZXh0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0LmNob29zZV90ZXh0dXJlJyk7XG5sb2FkTWVudShjaG9vc2VfdGV4dHVyZSwgdGV4dHVyZXMpO1xuLy8gLy8gR2V0IHRocmVlIHNsaWRlcyByZWFkeSBiaW5kaW5nIHdpdGggaCwgZCwgZiBwYXJhbWV0ZXJcblsnaCcsICdkJywgJ2YnXS5mb3JFYWNoKGl0ZW0gPT4gYmluZFNsaWRlcihpdGVtLCBkcmF3KSk7XG4vLyBCdXR0b25cbi8vIEJpbmQgcmVuZGVyIGJ1dHRvbiB3aXRoIGxvYWQgZmlsZSBhbmQgcmVuZGVyIG9wZXJ0aW9uXG5jb25zdCByZW5kZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVuZGVyJyk7XG5yZW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbW9kZWxJbmRleCA9IGNob29zZV9tb2RlbC5zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IHRleHR1cmVJbmRleCA9IGNob29zZV90ZXh0dXJlLnNlbGVjdGVkSW5kZXg7XG4gICAgLy8gRXhjZXB0aW9uIGhhbmRsaW5nXG4gICAgaWYgKG1vZGVsSW5kZXggPT09IDApXG4gICAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgbW9kZWwgdG8gcmVuZGVyJyk7XG4gICAgaWYgKHRleHR1cmVJbmRleCA9PT0gMClcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSB0ZXh0dXJlJyk7XG4gICAgLy8gUHJvY2VzcyBkYXRhXG4gICAgbGV0IG1vZGVsTmFtZSA9IGNob29zZV9tb2RlbC5vcHRpb25zW21vZGVsSW5kZXhdLnZhbHVlO1xuICAgIG1vZGVsTmFtZSA9IGAuL3B1YmxpYy9tb2RlbC8ke21vZGVsTmFtZX0uZC50eHRgO1xuICAgIGxldCB0ZXh0dXJlTmFtZSA9IGNob29zZV90ZXh0dXJlLm9wdGlvbnNbdGV4dHVyZUluZGV4XS52YWx1ZTtcbiAgICB0ZXh0dXJlTmFtZSA9IGAuL3B1YmxpYy90ZXh0dXJlLyR7dGV4dHVyZU5hbWV9LmJtcGA7XG4gICAgbG9hZEZpbGUobW9kZWxOYW1lLCB0ZXh0dXJlTmFtZSwgY3R4LCBkcmF3KTtcbiAgICByZW5kZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xufSk7XG4vLyBiaW5kIHJlc2V0IGJ1dHRvbiB3aXRoIHJlZnJlc2ggZnVuY3Rpb25cbmNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XG5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuLyoqKioqKioqKioqKioqKioqKioqIEluaXRpYWxpemUgRGF0YSAqKioqKioqKioqKioqKioqKioqKi9cbnBhcmFtZXRlcnMud2lkdGggPSB3aWR0aDtcbnBhcmFtZXRlcnMuaGVpZ2h0ID0gaGVpZ2h0O1xuLy8gLy8gQmluZGluZyBvcGVyYXRpb25cbnJlYWN0VG9PcGVyYXRpb24oY2FudmFzLCBkcmF3KTtcbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgLy8gY2xlYXIgYmVmb3JlIGltYWdlXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAvLyBkcmF3XG4gICAgY29uc3QgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcbiAgICBjb25zdCBpQnVmZmVyID0gY2FsY0FsbChtb2RlbCwgY2FtZXJhLCBwYXJhbWV0ZXJzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgdCA9IGkgKiB3aWR0aCArIGo7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGlCdWZmZXJbaV1bal07XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgMF0gPSBjb2xvci5yO1xuICAgICAgICAgICAgZGF0YVt0ICogNCArIDFdID0gY29sb3IuZztcbiAgICAgICAgICAgIGRhdGFbdCAqIDQgKyAyXSA9IGNvbG9yLmI7XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgM10gPSBjb2xvci5hO1xuICAgICAgICB9XG4gICAgfVxuICAgIGltYWdlRGF0YS5kYXRhLnNldChkYXRhKTtcbiAgICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XG59XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE5IDE4OjI1OjI0XG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDUtMDkgMTk6NTI6NDhcbiAqL1xuaW1wb3J0IHsgYmFja0ZhY2VDdWxsaW5nLCBjYWxjTW9kZWwsIHNjYW5Db252ZXJzaW9uIH0gZnJvbSAnLi4vLi4vbGliL2luZGV4JztcbmNvbnN0IGNhbGNBbGwgPSAobW9kZWwsIGNhbWVyYSwgcGFyYW1ldGVycykgPT4ge1xuICAgIGNhbWVyYS5jYWxjTlVWKCk7XG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjYW1lcmEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgLy8gY29uc29sZS5sb2coY2FtZXJhKTtcbiAgICBjb25zdCBiYWNrRmFjZVNldCA9IGJhY2tGYWNlQ3VsbGluZyhtb2RlbCwgY2FtZXJhKTtcbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJhY2tGYWNlU2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGJhY2tGYWNlU2V0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBvaW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhtb2RlbC5wb2ludHMpO1xuICAgIGNvbnN0IGNhbGNQb2ludHMgPSBjYWxjTW9kZWwobW9kZWwsIGNhbWVyYSwgcGFyYW1ldGVycy5oLCBwYXJhbWV0ZXJzLmQsIHBhcmFtZXRlcnMuZik7XG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzY3JlZW4gcG9pbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNhbGNQb2ludHMpO1xuICAgIHJldHVybiBzY2FuQ29udmVyc2lvbihtb2RlbCwgcGFyYW1ldGVycy5saWdodHMsIGNhbGNQb2ludHMsIGJhY2tGYWNlU2V0LCBwYXJhbWV0ZXJzLmhlaWdodCwgcGFyYW1ldGVycy53aWR0aCk7XG59O1xuZXhwb3J0IHsgY2FsY0FsbCB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xNCAxODo1NTo1MVxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTA1LTA2IDAxOjIyOjI2XG4gKi9cbi8qKioqKioqKioqKioqKioqKioqKiBET00gT1BFUkFUSU9OICoqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IHsgcGFyYW1ldGVycywgY2FtZXJhIH0gZnJvbSAnLi4vY29uZmlncy9wYXJhbWV0ZXJzJztcbi8qKlxuICogTG9hZCBtZW51XG4gKiBAcGFyYW0gc2VsZWN0RE9NXG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkTWVudSA9IChzZWxlY3RET00sIGRhdGEpID0+IHtcbiAgICBkYXRhLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZmlsZSk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmaWxlKSk7XG4gICAgICAgIHNlbGVjdERPTS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xufTtcbi8qKlxuICogQmluZCB0aGUgdmFsdWUgb2Ygc2xpZGVyIHdpdGggY2FtZXJhIHNldHRpbmdcbiAqIEBwYXJhbSBuYW1lXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kU2xpZGVyID0gKG5hbWUsIGRyYXcpID0+IHtcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuYW1lfWApO1xuICAgIGNvbnN0IHNsaWRlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuYW1lfV9WYCk7XG4gICAgc2xpZGVyLnZhbHVlID0gcGFyYW1ldGVyc1tuYW1lXTtcbiAgICBzbGlkZXJUZXh0LmlubmVySFRNTCA9IHBhcmFtZXRlcnNbbmFtZV07XG4gICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGFyYW1ldGVyc1tuYW1lXSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHNsaWRlclRleHQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgZHJhdygpO1xuICAgIH0pO1xufTtcbi8qKlxuICogQmluZCBvcGVyYXRpb24gdG8gY29udHJvbCB0aGUgZmluYWwgZWZmZWN0XG4gKi9cbmNvbnN0IGNhbWVyYUxlbiA9IDI7XG5leHBvcnQgY29uc3QgcmVhY3RUb09wZXJhdGlvbiA9IChjYW52YXMsIGRyYXcpID0+IHtcbiAgICAvLyB6b29taW5nIHRoZSBtb2RlbFxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC53aGVlbERlbHRhID4gMCkge1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uLnNjYWxlKDYgLyA1KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbiA9IGNhbWVyYS5wb3NpdGlvbi5zY2FsZSg1IC8gNik7XG4gICAgICAgIH1cbiAgICAgICAgZHJhdygpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdpJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSAtPSBjYW1lcmFMZW47XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnayc6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgKz0gY2FtZXJhTGVuO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2onOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCAtPSBjYW1lcmFMZW47XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTIgMTU6MDg6NTFcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wNS0wOSAyMDowNjoyNFxuICovXG5pbXBvcnQgeyBtb2RlbCwgcGFyYW1ldGVycyB9IGZyb20gJy4uL2NvbmZpZ3MvcGFyYW1ldGVycyc7XG5pbXBvcnQgeyBWZWN0b3IzZCB9IGZyb20gJy4uLy4uL2xpYi9pbmRleCc7XG4vKipcbiAqIFBhcnNlIHRoZSBkYXRhIGZyb20gdGhlIC5kIGZpbGUsIHJldHVybiBhIE1vZGVsXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIG9ialBvc2l0aW9uXG4gKi9cbmNvbnN0IGNvVG9EZWdyZWUgPSAoY29zYVQsIHNpbmFUKSA9PiB7XG4gICAgbGV0IGFuZ2xlQ2FuZGlkYXRlID0gTWF0aC5hY29zKGNvc2FUKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigxMDAgKiBzaW5hVCkgPT0gTWF0aC5mbG9vcigxMDAgKiBNYXRoLnNpbihhbmdsZUNhbmRpZGF0ZSkpID8gYW5nbGVDYW5kaWRhdGUgKiAxODAgLyBNYXRoLlBJIDogMzYwIC0gYW5nbGVDYW5kaWRhdGUgKiAxODAgLyBNYXRoLlBJO1xufTtcbmNvbnN0IHBhcnNlRmlsZSA9IChkYXRhLCBvYmpQb3NpdGlvbikgPT4ge1xuICAgIGxldCBsaW5lcyA9IGRhdGEubWF0Y2goL1teXFxyXFxuXSsvZyk7XG4gICAgbGV0IFtudW0sIHBvaW50c051bSwgZmFjZXNOdW1dID0gbGluZXNbMF0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgLy8gQ2F1c2UgaW4gc29tZSBmaWxlLCB0aGVyZSBhcmUganVzdCB0d28gbnVtYmVyIGluIGZpcnN0IGxpbmVcbiAgICBpZiAoZmFjZXNOdW0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZhY2VzTnVtID0gcG9pbnRzTnVtO1xuICAgICAgICBwb2ludHNOdW0gPSBudW07XG4gICAgfVxuICAgIGNvbnN0IFtwTnVtLCBmTnVtXSA9IFtwYXJzZUludChwb2ludHNOdW0sIDEwKSwgcGFyc2VJbnQoZmFjZXNOdW0pXTtcbiAgICAvLyBlZGdlIG9mIHRoZSBtb2RlbFxuICAgIGxldCB4TWluID0gMHg3ZmZmZmZmZjtcbiAgICBsZXQgeE1heCA9IC0weDdmZmZmZmZmO1xuICAgIGxldCB5TWluID0gMHg3ZmZmZmZmZjtcbiAgICBsZXQgeU1heCA9IC0weDdmZmZmZmZmO1xuICAgIGxldCB6TWluID0gMHg3ZmZmZmZmZjtcbiAgICBsZXQgek1heCA9IC0weDdmZmZmZmZmO1xuICAgIC8vIGxvYWQgZGF0YSB0byBtb2RlbFxuICAgIC8vIDEuIHNhdmUgYWxsIHBvaW50c1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBOdW07IGkrKykge1xuICAgICAgICBsZXQgW3gsIHksIHpdID0gbGluZXNbaV0udHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGl0ZW0gPT4gcGFyc2VGbG9hdChpdGVtKSk7XG4gICAgICAgIHhNaW4gPSBNYXRoLm1pbih4TWluLCB4KTtcbiAgICAgICAgeE1heCA9IE1hdGgubWF4KHhNYXgsIHgpO1xuICAgICAgICB5TWluID0gTWF0aC5taW4oeU1pbiwgeSk7XG4gICAgICAgIHlNYXggPSBNYXRoLm1heCh5TWluLCB5KTtcbiAgICAgICAgek1pbiA9IE1hdGgubWluKHpNaW4sIHopO1xuICAgICAgICB6TWF4ID0gTWF0aC5tYXgoek1heCwgeik7XG4gICAgICAgIG1vZGVsLnBvaW50cy5wdXNoKG5ldyBWZWN0b3IzZCh4ICsgb2JqUG9zaXRpb24ueCwgeSArIG9ialBvc2l0aW9uLnksIHogKyBvYmpQb3NpdGlvbi56KSk7XG4gICAgICAgIG1vZGVsLnBvaW50c05vcm1hbC5wdXNoKG5ldyBWZWN0b3IzZCgwLCAwLCAwKSk7XG4gICAgfVxuICAgIGxldCB4UmFuZ2UgPSB4TWF4IC0geE1pbiwgeVJhbmdlID0geU1heCAtIHlNaW4sIHpSYW5nZSA9IHpNYXggLSB6TWluO1xuICAgIC8vIDIuIHRleHR1cmUgbWFwXG4gICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGV4dHVyZVBvaW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwTnVtOyBpKyspIHtcbiAgICAgICAgbGV0IHggPSAobW9kZWwucG9pbnRzW2ldLnggLSBvYmpQb3NpdGlvbi54IC0geE1pbikgLyAoeFJhbmdlICsgMC4wMDAxKTtcbiAgICAgICAgbGV0IHkgPSAobW9kZWwucG9pbnRzW2ldLnkgLSBvYmpQb3NpdGlvbi55IC0geU1pbikgLyAoeVJhbmdlICsgMC4wMDAxKTtcbiAgICAgICAgbGV0IHogPSAobW9kZWwucG9pbnRzW2ldLnogLSBvYmpQb3NpdGlvbi56IC0gek1pbikgLyAoelJhbmdlICsgMC4wMDAxKTtcbiAgICAgICAgLy8gY29uc3QgdGhldGFEZWdyZWUgPSBjb1RvRGVncmVlKHggLyBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSksIHkgLyBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkpO1xuICAgICAgICBtb2RlbC50ZXh0dXJlUG9pbnRzW2ldID0gW3gsIHpdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh4ICsgXCIgXCIgKyB6KTtcbiAgICB9XG4gICAgLy8gMy4gc2F2ZSBhbGwgZmFjZXNcbiAgICBmb3IgKGxldCBpID0gcE51bSArIDE7IGkgPD0gcE51bSArIGZOdW07IGkrKykge1xuICAgICAgICBsZXQgW18sIC4uLnJlc10gPSBsaW5lc1tpXS50cmltKCkuc3BsaXQoL1xccysvKTtcbiAgICAgICAgaWYgKHJlcy5sZW5ndGggPD0gMilcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBsZXQgZmFjZSA9IHJlcy5tYXAoKHgpID0+IHBhcnNlSW50KHgsIDEwKSAtIDEpO1xuICAgICAgICBtb2RlbC5mYWNlcy5wdXNoKGZhY2UpO1xuICAgICAgICBtb2RlbC5mYWNlc05vcm1hbC5wdXNoKG1vZGVsLm5vcm1hbGl6ZUZhY2UobW9kZWwuZmFjZXMubGVuZ3RoIC0gMSkpO1xuICAgIH1cbiAgICAvLyA0LiBjb21wdXRlIHBvaW50IG5vcm1hbFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWwuZmFjZXNOb3JtYWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb2RlbC5mYWNlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbW9kZWwucG9pbnRzTm9ybWFsW21vZGVsLmZhY2VzW2ldW2pdXSA9IG1vZGVsLnBvaW50c05vcm1hbFttb2RlbC5mYWNlc1tpXVtqXV0uYWRkKG1vZGVsLmZhY2VzTm9ybWFsW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobW9kZWwucG9pbnRzTm9ybWFsW2ldLmFicygpKSB7XG4gICAgICAgICAgICBtb2RlbC5wb2ludHNOb3JtYWxbaV0gPSBtb2RlbC5wb2ludHNOb3JtYWxbaV0udW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2RlbDtcbn07XG4vKipcbiAqIFJlYWQgdGhlIGNvbnRlbnQgb2YgYSBmaWxlXG4gKiBAcGFyYW0gZmlsZVBhdGhcbiAqL1xuY29uc3QgcmVhZEZpbGUgPSAoZmlsZVBhdGgsIHJlYWRUZXh0KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBmaWxlUGF0aCwgdHJ1ZSk7XG4gICAgICAgIGlmICghcmVhZFRleHQpXG4gICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyhyZWFkVGV4dCA/IHRoaXMucmVzcG9uc2VUZXh0IDogdGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWooKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldEJNUCA9IChidWZmZXIpID0+IHtcbiAgICBjb25zdCBkYXRhdiA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICAgIGNvbnN0IGJpdG1hcCA9IHt9O1xuICAgIGJpdG1hcC5maWxlaGVhZGVyID0ge307XG4gICAgYml0bWFwLmZpbGVoZWFkZXIuYmZUeXBlID1cbiAgICAgICAgZGF0YXYuZ2V0VWludDE2KDAsIHRydWUpO1xuICAgIGJpdG1hcC5maWxlaGVhZGVyLmJmU2l6ZSA9XG4gICAgICAgIGRhdGF2LmdldFVpbnQzMigyLCB0cnVlKTtcbiAgICBiaXRtYXAuZmlsZWhlYWRlci5iZlJlc2VydmVkMSA9XG4gICAgICAgIGRhdGF2LmdldFVpbnQxNig2LCB0cnVlKTtcbiAgICBiaXRtYXAuZmlsZWhlYWRlci5iZlJlc2VydmVkMiA9XG4gICAgICAgIGRhdGF2LmdldFVpbnQxNig4LCB0cnVlKTtcbiAgICBiaXRtYXAuZmlsZWhlYWRlci5iZk9mZkJpdHMgPVxuICAgICAgICBkYXRhdi5nZXRVaW50MzIoMTAsIHRydWUpO1xuICAgIGJpdG1hcC5pbmZvaGVhZGVyID0ge307XG4gICAgYml0bWFwLmluZm9oZWFkZXIuYmlTaXplID1cbiAgICAgICAgZGF0YXYuZ2V0VWludDMyKDE0LCB0cnVlKTtcbiAgICBiaXRtYXAuaW5mb2hlYWRlci5iaVdpZHRoID1cbiAgICAgICAgZGF0YXYuZ2V0VWludDMyKDE4LCB0cnVlKTtcbiAgICBiaXRtYXAuaW5mb2hlYWRlci5iaUhlaWdodCA9XG4gICAgICAgIGRhdGF2LmdldFVpbnQzMigyMiwgdHJ1ZSk7XG4gICAgYml0bWFwLmluZm9oZWFkZXIuYmlQbGFuZXMgPVxuICAgICAgICBkYXRhdi5nZXRVaW50MTYoMjYsIHRydWUpO1xuICAgIGJpdG1hcC5pbmZvaGVhZGVyLmJpQml0Q291bnQgPVxuICAgICAgICBkYXRhdi5nZXRVaW50MTYoMjgsIHRydWUpO1xuICAgIGJpdG1hcC5pbmZvaGVhZGVyLmJpQ29tcHJlc3Npb24gPVxuICAgICAgICBkYXRhdi5nZXRVaW50MzIoMzAsIHRydWUpO1xuICAgIGJpdG1hcC5pbmZvaGVhZGVyLmJpU2l6ZUltYWdlID1cbiAgICAgICAgZGF0YXYuZ2V0VWludDMyKDM0LCB0cnVlKTtcbiAgICBiaXRtYXAuaW5mb2hlYWRlci5iaVhQZWxzUGVyTWV0ZXIgPVxuICAgICAgICBkYXRhdi5nZXRVaW50MzIoMzgsIHRydWUpO1xuICAgIGJpdG1hcC5pbmZvaGVhZGVyLmJpWVBlbHNQZXJNZXRlciA9XG4gICAgICAgIGRhdGF2LmdldFVpbnQzMig0MiwgdHJ1ZSk7XG4gICAgYml0bWFwLmluZm9oZWFkZXIuYmlDbHJVc2VkID1cbiAgICAgICAgZGF0YXYuZ2V0VWludDMyKDQ2LCB0cnVlKTtcbiAgICBiaXRtYXAuaW5mb2hlYWRlci5iaUNsckltcG9ydGFudCA9XG4gICAgICAgIGRhdGF2LmdldFVpbnQzMig1MCwgdHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnQgPSBiaXRtYXAuZmlsZWhlYWRlci5iZk9mZkJpdHM7XG4gICAgYml0bWFwLnN0cmlkZSA9XG4gICAgICAgIE1hdGguZmxvb3IoKGJpdG1hcC5pbmZvaGVhZGVyLmJpQml0Q291bnRcbiAgICAgICAgICAgICogYml0bWFwLmluZm9oZWFkZXIuYmlXaWR0aCArIDMxKSAvIDMyKSAqIDQ7XG4gICAgYml0bWFwLnBpeGVscyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgc3RhcnQpO1xuICAgIHJldHVybiBiaXRtYXA7XG59O1xuZXhwb3J0IGNvbnN0IHJlYWRCbXBUb0J1ZmZlciA9IChjdHgsIGJpdG1hcCkgPT4ge1xuICAgIGNvbnN0IFdpZHRoID0gYml0bWFwLmluZm9oZWFkZXIuYmlXaWR0aDtcbiAgICBjb25zdCBIZWlnaHQgPSBiaXRtYXAuaW5mb2hlYWRlci5iaUhlaWdodDtcbiAgICBjb25zdCBpbWFnZURhdGEgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKFdpZHRoLCBIZWlnaHQpO1xuICAgIGNvbnN0IGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcbiAgICBjb25zdCBibXBkYXRhID0gYml0bWFwLnBpeGVscztcbiAgICAvLyBjb25zb2xlLmxvZyhibXBkYXRhKTtcbiAgICBjb25zdCBzdHJpZGUgPSBiaXRtYXAuc3RyaWRlO1xuICAgIGxldCB0QnVmZmVyID0gW107XG4gICAgbGV0IGZsYWcgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSGVpZ2h0OyBpKyspIHtcbiAgICAgICAgbGV0IHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBXaWR0aCAqIDM7IGogKz0gMykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXgyID0gaiAqIDMgKyBzdHJpZGUgKiBpO1xuICAgICAgICAgICAgdC5wdXNoKFtcbiAgICAgICAgICAgICAgICBibXBkYXRhW2luZGV4MiArIDJdLFxuICAgICAgICAgICAgICAgIGJtcGRhdGFbaW5kZXgyICsgMV0sXG4gICAgICAgICAgICAgICAgYm1wZGF0YVtpbmRleDJdXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgICB0QnVmZmVyLnB1c2godCk7XG4gICAgfVxuICAgIHJldHVybiB0QnVmZmVyO1xufTtcbi8qKlxuICogTG9hZCBhbmQgcmVuZGVyIHNlbGVjdGVkIG1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZVBhdGhcbiAqL1xuY29uc3QgbG9hZEZpbGUgPSAoZmlsZVBhdGgsIHRleHR1cmVQYXRoLCBjdHgsIGRyYXcpID0+IHtcbiAgICByZWFkRmlsZShmaWxlUGF0aCwgdHJ1ZSlcbiAgICAgICAgLnRoZW4oKG1vZGVsRGF0YSkgPT4ge1xuICAgICAgICByZWFkRmlsZSh0ZXh0dXJlUGF0aCwgZmFsc2UpXG4gICAgICAgICAgICAudGhlbigodGV4dHVyZURhdGEpID0+IHtcbiAgICAgICAgICAgIHBhcnNlRmlsZShtb2RlbERhdGEsIG5ldyBWZWN0b3IzZCgwLCAwLCAwKSk7XG4gICAgICAgICAgICBtb2RlbC5jb2xvckluaXQoZmFsc2UsIHBhcmFtZXRlcnMubGlnaHRzKTtcbiAgICAgICAgICAgIG1vZGVsLmNvbXB1dGVTY2VuZVBvaW50Tm9ybWFsKCk7XG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih0ZXh0dXJlRGF0YSk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGVsLnRleHR1cmVNYXAgPSByZWFkQm1wVG9CdWZmZXIoY3R4LCBnZXRCTVAocmVhZGVyLnJlc3VsdCkpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRleHR1cmUgbWFwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtb2RlbC50ZXh0dXJlTWFwLmxlbmd0aCArIFwiIFwiICsgbW9kZWwudGV4dHVyZU1hcFswXS5sZW5ndGggKyBcIiBcIiArIG1vZGVsLnRleHR1cmVNYXBbMF1bMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtb2RlbC50ZXh0dXJlTWFwKTtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgTG9hZCBvciBwYXJzZSBmaWxlJHtmaWxlUGF0aH0gZXJyb3JgKTtcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBsb2FkRmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=