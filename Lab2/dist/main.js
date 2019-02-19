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
        this.N = objectPosition.subtract(this.position).unit();
        this.U = this.N.crossProduct(this.UP).unit();
        this.V = this.U.crossProduct(this.N);
    }
}



/***/ }),

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/*! exports provided: Camera, Matrix, Vector3d, Vector4d, EdgeTableElement, backFaceCulling, calcModel */
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

/* harmony import */ var _transform_modeling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transform/modeling */ "./lib/transform/modeling.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backFaceCulling", function() { return _transform_modeling__WEBPACK_IMPORTED_MODULE_5__["backFaceCulling"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcModel", function() { return _transform_modeling__WEBPACK_IMPORTED_MODULE_5__["calcModel"]; });

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

/***/ "./lib/math/Vector3d.ts":
/*!******************************!*\
  !*** ./lib/math/Vector3d.ts ***!
  \******************************/
/*! exports provided: Vector3d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector3d", function() { return Vector3d; });
/* harmony import */ var _Vector4d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector4d */ "./lib/math/Vector4d.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-15 01:32:16
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 01:32:26
 */

class Vector3d {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    extend() {
        return new _Vector4d__WEBPACK_IMPORTED_MODULE_0__["Vector4d"](this.x, this.y, this.z, 1);
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
/* harmony import */ var _Vector3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector3d */ "./lib/math/Vector3d.ts");
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matrix */ "./lib/math/Matrix.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-15 01:31:53
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 01:32:33
 */


class Vector4d {
    constructor(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    collapse() {
        let t = this.w;
        return new _Vector3d__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](this.x / t, this.y / t, this.z / t);
    }
    toMatrix() {
        return new _Matrix__WEBPACK_IMPORTED_MODULE_1__["Matrix"]([
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
const backFaceCulling = (faces, points, camera) => {
    const backFaceSet = new Set();
    faces.forEach((face, index) => {
        const v1 = points[face[0]].subtract(points[face[1]]);
        const v2 = points[face[1]].subtract(points[face[2]]);
        const Np = v1.crossProduct(v2);
        const N = camera.position.subtract(points[face[0]]);
        if (Np.dotProduct(N) >= 0) {
            backFaceSet.add(index);
        }
    });
    return backFaceSet;
};
// Calculate model
const calcModel = (points, camera, h, d, f) => {
    const combo = perspectiveTransform(h, d, f).multiply(world2Camera(camera));
    return points.map(point => {
        return combo.multiply(point.extend().toMatrix()).toVector();
    });
};



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
 * @Last Modified by:   GXwar
 * @Last Modified time: 2019-02-19 01:33:45
 */
// data files to be loaded
const files = [
    'atc',
    'ball',
    'cow',
    'house',
    'knight'
];



/***/ }),

/***/ "./src/configs/parameters.ts":
/*!***********************************!*\
  !*** ./src/configs/parameters.ts ***!
  \***********************************/
/*! exports provided: parameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parameters", function() { return parameters; });
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/index */ "./lib/index.ts");
/*
 * @Author: GXwar
 * @Date: 2019-02-18 01:33:56
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 01:39:57
 */

const parameters = {
    /******************** setting ********************/
    h: 1,
    d: 1,
    f: 1000,
    camera: new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Camera"](new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 20, 20), new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, -1, 0)),
    pRef: new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0, 0, 0),
    width: 0,
    height: 0,
    /******************** model ********************/
    pointsNum: 10,
    facesNum: 7,
    points: [
        new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](8.0, 16.0, 30.0),
        new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](16.0, 10.0, 30.0),
        new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](16.0, 0.0, 30.0),
        new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0.0, 0.0, 30.0),
        new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0.0, 10.0, 30.0),
        new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](8.0, 16.0, 54.0),
        new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](16.0, 10.0, 54.0),
        new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](16.0, 0.0, 54.0),
        new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0.0, 0.0, 54.0),
        new _lib_index__WEBPACK_IMPORTED_MODULE_0__["Vector3d"](0.0, 10.0, 54.0)
    ],
    faces: [
        [0, 4, 3, 2, 1],
        [5, 6, 7, 8, 9],
        [6, 1, 2, 7],
        [9, 8, 3, 4],
        [3, 8, 7, 2],
        [5, 0, 1, 6],
        [5, 9, 4, 0]
    ],
    /******************** calculated model ********************/
    face_color_r_buffer: [],
    face_color_g_buffer: [],
    face_color_b_buffer: []
};



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
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/draw */ "./src/utils/draw.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "./src/utils/dom.ts");




/******************** Initialize DOM ********************/
// Get canvas ready
const canvas = document.querySelector('#content');
const height = canvas.height;
const width = canvas.width;
const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, width, height);
ctx.strokeStyle = 'green';
// Inject parameter to draw function
const drawCtx = Object(_utils_draw__WEBPACK_IMPORTED_MODULE_2__["default"])(ctx, width, height);
// Load all model options to menu
const choose_model = document.querySelector('select.choose_model');
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["loadMenu"])(choose_model);
// Get three slides ready binding with h, d, f parameter
['h', 'd', 'f'].forEach(item => Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bindSlider"])(item, drawCtx));
// Button
// Bind render button with load file and render opertion
const renderBtn = document.querySelector('.render');
renderBtn.addEventListener('click', () => {
    const modelIndex = choose_model.selectedIndex;
    if (modelIndex === 0) {
        alert('Please select a model to render');
    }
    const modelName = choose_model.options[modelIndex].value;
    Object(_utils_loadFile__WEBPACK_IMPORTED_MODULE_1__["default"])(`./public/model/${modelName}.d.txt`, drawCtx);
    renderBtn.disabled = true;
});
// bind reset button with refresh function
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    location.reload();
});
/******************** Initialize Data ********************/
// Binding operation
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["reactToOperation"])(canvas, drawCtx);
// Calculate N, U, V vector
_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].camera.calcNUV(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pRef);
_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].width = width;
_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height = height;


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
/******************** DOM OPERATION ********************/


/**
 * Load menu
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
 * @param {String} name
 */
const bindSlider = (name, draw) => {
    const slider = document.querySelector(`#${name}`);
    const sliderText = document.querySelector(`#${name}_V`);
    slider.value = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"][name];
    sliderText.innerHTML = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"][name];
    slider.addEventListener('change', function () {
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"][name] = this.value;
        sliderText.innerHTML = this.value;
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pRef[0] -= 10;
        draw();
    });
};
/**
 * Bind operation to control the final effect
 */
const objectLen = 1;
const cameraLen = 2;
const reactToOperation = (canvas, draw) => {
    // zooming the model
    const camera = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].camera;
    canvas.addEventListener('mousewheel', function (event) {
        if (event.wheelDelta > 0) {
            camera.position = camera.position.scale(6 / 5);
        }
        else {
            camera.position = camera.position.scale(5 / 6);
        }
        draw();
    });
    document.addEventListener('keypress', function (e) {
        switch (e.key) {
            case 'w':
                camera.position = camera.position.add(camera.V.scale(-objectLen));
                draw();
                break;
            case 's':
                camera.position = camera.position.add(camera.V.scale(objectLen));
                draw();
                break;
            case 'a':
                camera.position = camera.position.add(camera.U.scale(objectLen));
                draw();
                break;
            case 'd':
                camera.position = camera.position.add(camera.U.scale(-objectLen));
                draw();
                break;
            case 'i':
                camera.position.y -= cameraLen;
                camera.calcNUV(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pRef);
                draw();
                break;
            case 'k':
                camera.position.y += cameraLen;
                camera.calcNUV(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pRef);
                draw();
                break;
            case 'j':
                camera.position.x += cameraLen;
                camera.calcNUV(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pRef);
                draw();
                break;
            case 'l':
                camera.position.x -= cameraLen;
                camera.calcNUV(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pRef);
                draw();
                break;
            default:
                break;
        }
    });
};


/***/ }),

/***/ "./src/utils/draw.ts":
/*!***************************!*\
  !*** ./src/utils/draw.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configs_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/parameters */ "./src/configs/parameters.ts");
/* harmony import */ var _lib_transform_modeling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/transform/modeling */ "./lib/transform/modeling.ts");
/* harmony import */ var _fillPixel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillPixel */ "./src/utils/fillPixel.ts");
/******************** DRAW IMAGE ********************/



/**
 * Draw model on the canvas
 * @param ctx
 * @param width
 * @param height
 */
const draw = (ctx, width, height) => () => {
    // back face culling, save it to model object
    const backFaceSet = Object(_lib_transform_modeling__WEBPACK_IMPORTED_MODULE_1__["backFaceCulling"])(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].faces, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].points, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].camera);
    // transform points from virtual world to 2d screen
    const calcPoints = Object(_lib_transform_modeling__WEBPACK_IMPORTED_MODULE_1__["calcModel"])(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].points, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].camera, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].h, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].d, _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].f);
    // fill pixels
    Object(_fillPixel__WEBPACK_IMPORTED_MODULE_2__["colorInit"])();
    const pixelBuffer = Object(_fillPixel__WEBPACK_IMPORTED_MODULE_2__["scanConversion"])(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].faces, calcPoints, backFaceSet, height, width);
    // draw image
    ctx.clearRect(0, 0, width, height);
    const imageData = ctx.createImageData(width, height);
    const data = new Uint8Array(width * height * 4);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const t = i * width + j;
            // r g b a
            data[t * 4 + 0] = pixelBuffer[i][j][0];
            data[t * 4 + 1] = pixelBuffer[i][j][1];
            data[t * 4 + 2] = pixelBuffer[i][j][2];
            data[t * 4 + 3] = 255;
        }
    }
    imageData.data.set(data);
    ctx.putImageData(imageData, 0, 0);
};
/* harmony default export */ __webpack_exports__["default"] = (draw);


/***/ }),

/***/ "./src/utils/fillPixel.ts":
/*!********************************!*\
  !*** ./src/utils/fillPixel.ts ***!
  \********************************/
/*! exports provided: colorInit, scanConversion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorInit", function() { return colorInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanConversion", function() { return scanConversion; });
/* harmony import */ var _configs_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/parameters */ "./src/configs/parameters.ts");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/index */ "./lib/index.ts");
/******************** FILL PIXELS ********************/


// get a random integer in [0, 255]
const random = () => Math.floor(Math.random() * 256);
// convert 2d point to canvas point
const toPixel = (value, shortten = false) => Math.floor((value + 1) * _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height / 2) - (shortten ? 1 : 0);
const toFloatPixel = (value) => (value + 1) * _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height / 2;
const bufferInit = (height, width) => {
    const pixelBuffer = [];
    const zBuffer = [];
    for (let i = 0; i < height; i++) {
        pixelBuffer[i] = [];
        zBuffer[i] = [];
        for (let j = 0; j < width; j++) {
            pixelBuffer[i][j] = [0, 0, 0];
            zBuffer[i][j] = 1;
        }
    }
    return [pixelBuffer, zBuffer];
};
const edgeTableInit = (height) => {
    const edgeTable = [];
    for (let i = 0; i < height; i++) {
        edgeTable[i] = [];
    }
    return edgeTable;
};
const colorInit = () => {
    // give random color to each face
    for (let i = 0; i < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].facesNum; i++) {
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].face_color_r_buffer.push(random());
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].face_color_g_buffer.push(random());
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].face_color_b_buffer.push(random());
    }
};
/**
 * Scan Conversion
 * 1. for each scan line, determine edges of polygons that intersect
 * 2. Find the start and end of the span
 * 3. Rely on scanline and pixel coherence to linearly interpolate (between scanlines and between pixels)
 */
const addEdgeToET = (lowerPoint, upperPoint, edgeTable) => {
    // ignore horizontal edge and out of range point
    if (toPixel(lowerPoint.y) === toPixel(upperPoint.y)
        || lowerPoint.y > 1 || lowerPoint.y < -1)
        return;
    // swap the order of two points
    if (lowerPoint.y > upperPoint.y) {
        [lowerPoint, upperPoint] = [upperPoint, lowerPoint];
    }
    // create edge table element and add it into the edge table
    const ETElement = new _lib_index__WEBPACK_IMPORTED_MODULE_1__["EdgeTableElement"](toPixel(lowerPoint.y), toPixel(upperPoint.y, true), toFloatPixel(lowerPoint.x), (lowerPoint.x - upperPoint.x) / (lowerPoint.y - upperPoint.y), upperPoint.z, lowerPoint.z);
    if (ETElement.yStart > ETElement.yMax) {
        ETElement.yMax = ETElement.yStart;
    }
    edgeTable[Math.floor(ETElement.yStart)].push(ETElement);
};
// Calculation of z
const calcZ = (edge, ys) => edge.yMax === edge.yStart ? edge.zUpper :
    edge.zUpper - (edge.zUpper - edge.zLower) * (edge.yMax - ys) / (edge.yMax - edge.yStart);
const scanConversion = (faces, calcPoints, backFaceSet, height, width) => {
    const [pixelBuffer, zBuffer] = bufferInit(height, width);
    let activeEdgeTable = [];
    // for each face
    faces.forEach((face, index) => {
        // don't need to consider back face
        if (backFaceSet.has(index))
            return;
        // build edge table
        const edgeTable = edgeTableInit(height);
        for (let i = 0; i < face.length; i++) {
            // get an edge 
            let lowerPoint = calcPoints[face[i]];
            let upperPoint = calcPoints[face[(i + 1) % face.length]];
            addEdgeToET(lowerPoint, upperPoint, edgeTable);
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
                    pixelBuffer[i][k] = [_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].face_color_r_buffer[index], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].face_color_g_buffer[index], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].face_color_b_buffer[index]];
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
    return pixelBuffer;
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


/**
 * Parse the data from the .d file
 * @param {*} data
 */
const parseFile = (data) => {
    let lines = data.match(/[^\r\n]+/g);
    let [num, pointsNum, facesNum] = lines[0].trim().split(/\s+/);
    // Cause in some file, there are just two number in first line
    if (facesNum == undefined) {
        facesNum = pointsNum;
        pointsNum = num;
    }
    // load data to model
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pointsNum = parseInt(pointsNum, 10);
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].facesNum = parseInt(facesNum, 10);
    // here we refresh the object when load different model
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].points = [];
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].faces = [];
    for (let i = 1; i <= _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pointsNum; i++) {
        let [x, y, z] = lines[i].trim().split(/\s+/);
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].points.push(new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Vector3d"](parseFloat(x), parseFloat(y), parseFloat(z)));
    }
    for (let i = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pointsNum + 1; i <= _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pointsNum + _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].facesNum; i++) {
        let [num, ...res] = lines[i].trim().split(/\s+/);
        if (res.length > 2) {
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].faces.push(res.map((x) => parseInt(x) - 1));
        }
    }
};
/**
 * Read the content of a file
 * @param {String} filePath
 * @param {Function} callback
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
const loadFile = (filePath, draw) => {
    // load model
    readFile(filePath)
        .then((data) => {
        parseFile(data);
        draw();
    })
        .catch(() => {
        console.log('Load or parse file error');
    });
};
/* harmony default export */ __webpack_exports__["default"] = (loadFile);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NhbWVyYXMvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvbWF0aC9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL21hdGgvVmVjdG9yM2QudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL21hdGgvVmVjdG9yNGQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL29iamVjdHMvRWRnZVRhYmxlRWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtL21vZGVsaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy9wYXJhbWV0ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kcmF3LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9maWxsUGl4ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2xvYWRGaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5Qyxp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eUNBQXlDLDhEQUFVLDZCQUE2Qiw4REFBVSw2QkFBNkIsOERBQVU7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNxQzs7Ozs7Ozs7Ozs7OztBQ3JIckM7QUFBQTtBQUFBO0FBQW1EO0FBQ1I7QUFDM0M7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBVTtBQUNkLElBQUksOERBQVU7QUFDZDtBQUNBLElBQUksOERBQVU7QUFDZCxJQUFJLDhEQUFVO0FBQ2QsbUJBQW1CLE1BQU0sOERBQVUsV0FBVztBQUM5QztBQUNBLFFBQVEsOERBQVUsaUJBQWlCLG1EQUFRO0FBQzNDO0FBQ0EsaUJBQWlCLDhEQUFVLGVBQWUsTUFBTSw4REFBVSxhQUFhLDhEQUFVLFVBQVU7QUFDM0Y7QUFDQTtBQUNBLFlBQVksOERBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDZSx1RUFBUSxFQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImNsYXNzIENhbWVyYSB7XG4gICAgY29uc3RydWN0b3IocG9zaXRpb24sIFVQKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5VUCA9IFVQO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBjYWxjdWxhdGUgdGhlIE4sIFUsIFYgdmVjdG9yIG9mIHRoZSBjYW1lcmFcbiAgICAgKiBAcGFyYW0gb2JqZWN0UG9zaXRpb25cbiAgICAgKi9cbiAgICBjYWxjTlVWKG9iamVjdFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuTiA9IG9iamVjdFBvc2l0aW9uLnN1YnRyYWN0KHRoaXMucG9zaXRpb24pLnVuaXQoKTtcbiAgICAgICAgdGhpcy5VID0gdGhpcy5OLmNyb3NzUHJvZHVjdCh0aGlzLlVQKS51bml0KCk7XG4gICAgICAgIHRoaXMuViA9IHRoaXMuVS5jcm9zc1Byb2R1Y3QodGhpcy5OKTtcbiAgICB9XG59XG5leHBvcnQgeyBDYW1lcmEgfTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKiAuL2NhbWVyYXMgKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgeyBDYW1lcmEgfSBmcm9tICcuL2NhbWVyYXMvQ2FtZXJhJztcbi8qKioqKioqKioqKioqKioqKioqKiAuL21hdGggKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgeyBNYXRyaXggfSBmcm9tICcuL21hdGgvTWF0cml4JztcbmV4cG9ydCB7IFZlY3RvcjNkIH0gZnJvbSAnLi9tYXRoL1ZlY3RvcjNkJztcbmV4cG9ydCB7IFZlY3RvcjRkIH0gZnJvbSAnLi9tYXRoL1ZlY3RvcjRkJztcbi8qKioqKioqKioqKioqKioqKioqKiAuL29iamVjdHMgKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgeyBFZGdlVGFibGVFbGVtZW50IH0gZnJvbSAnLi9vYmplY3RzL0VkZ2VUYWJsZUVsZW1lbnQnO1xuLyoqKioqKioqKioqKioqKioqKioqIC4vdHJhbnNmb3JtICoqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IHsgYmFja0ZhY2VDdWxsaW5nLCBjYWxjTW9kZWwgfSBmcm9tICcuL3RyYW5zZm9ybS9tb2RlbGluZyc7XG4iLCJpbXBvcnQgeyBWZWN0b3I0ZCB9IGZyb20gJy4vVmVjdG9yNGQnO1xuY2xhc3MgTWF0cml4IHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXNPck0sIG4pIHtcbiAgICAgICAgaWYgKHZhbHVlc09yTSAhPT0gdW5kZWZpbmVkICYmIG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzT3JNOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKEFycmF5LmZyb20oeyBsZW5ndGg6IG4gfSwgXyA9PiAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWVzT3JNICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzT3JNO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBtdWx0aXBseSB3aXRoIG90aGVyIG1hdHJpeCwgcmV0dXJuIGEgbmV3IG1hdHJpeFxuICAgICAqIEBwYXJhbSBvdGhlclxuICAgICAqL1xuICAgIG11bHRpcGx5KG90aGVyKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlc1swXS5sZW5ndGggIT09IG90aGVyLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IG11bHRpcGx5IHRoZXNlIHR3byBtYXRyaWNlcyEnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtID0gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBuID0gb3RoZXIudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgayA9IG90aGVyLnZhbHVlc1swXS5sZW5ndGg7XG4gICAgICAgIC8vIG11bHRpcGx5XG4gICAgICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobSwgayk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGs7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgbjsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdHJpeC52YWx1ZXNbaV1bal0gKz0gdGhpcy52YWx1ZXNbaV1bdF0gKiBvdGhlci52YWx1ZXNbdF1bal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdNYXRyaXg7XG4gICAgfVxuICAgIDtcbiAgICB0b1ZlY3RvcigpIHtcbiAgICAgICAgY29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcjRkKHRoaXMudmFsdWVzWzBdWzBdLCB0aGlzLnZhbHVlc1sxXVswXSwgdGhpcy52YWx1ZXNbMl1bMF0sIHRoaXMudmFsdWVzWzNdWzBdKTtcbiAgICAgICAgcmV0dXJuIHZlY3Rvci5jb2xsYXBzZSgpO1xuICAgIH1cbn1cbmV4cG9ydCB7IE1hdHJpeCB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xNSAwMTozMjoxNlxuICogQExhc3QgTW9kaWZpZWQgYnk6IEdYd2FyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE5LTAyLTE5IDAxOjMyOjI2XG4gKi9cbmltcG9ydCB7IFZlY3RvcjRkIH0gZnJvbSBcIi4vVmVjdG9yNGRcIjtcbmNsYXNzIFZlY3RvcjNkIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMueiA9IHo7XG4gICAgfVxuICAgIGV4dGVuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0ZCh0aGlzLngsIHRoaXMueSwgdGhpcy56LCAxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZ2V0IHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiB0aGUgdmVjdG9yXG4gICAgICovXG4gICAgYWJzKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueik7XG4gICAgfVxuICAgIGFkZChvdGhlcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCArIG90aGVyLngsIHRoaXMueSArIG90aGVyLnksIHRoaXMueiArIG90aGVyLnopO1xuICAgIH1cbiAgICBzdWJ0cmFjdChvdGhlcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCAtIG90aGVyLngsIHRoaXMueSAtIG90aGVyLnksIHRoaXMueiAtIG90aGVyLnopO1xuICAgIH1cbiAgICBzY2FsZShuKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM2QodGhpcy54ICogbiwgdGhpcy55ICogbiwgdGhpcy56ICogbik7XG4gICAgfVxuICAgIHVuaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlKDEgLyB0aGlzLmFicygpKTtcbiAgICB9XG4gICAgY3Jvc3NQcm9kdWN0KG90aGVyKSB7XG4gICAgICAgIC8vIHJldHVybiBbXG4gICAgICAgIC8vICAgdmVjMVsxXSAqIHZlYzJbMl0gLSB2ZWMyWzFdICogdmVjMVsyXSxcbiAgICAgICAgLy8gICAtKHZlYzFbMF0gKiB2ZWMyWzJdIC0gdmVjMlswXSAqIHZlYzFbMl0pLFxuICAgICAgICAvLyAgIHZlYzFbMF0gKiB2ZWMyWzFdIC0gdmVjMlswXSAqIHZlYzFbMV1cbiAgICAgICAgLy8gXTtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnkgKiBvdGhlci56IC0gb3RoZXIueSAqIHRoaXMueiwgLSh0aGlzLnggKiBvdGhlci56IC0gb3RoZXIueCAqIHRoaXMueiksIHRoaXMueCAqIG90aGVyLnkgLSBvdGhlci54ICogdGhpcy55KTtcbiAgICB9XG4gICAgZG90UHJvZHVjdChvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogb3RoZXIueCArIHRoaXMueSAqIG90aGVyLnkgKyB0aGlzLnogKiBvdGhlci56O1xuICAgIH1cbn1cbmV4cG9ydCB7IFZlY3RvcjNkIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE1IDAxOjMxOjUzXG4gKiBATGFzdCBNb2RpZmllZCBieTogR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMDE6MzI6MzNcbiAqL1xuaW1wb3J0IHsgVmVjdG9yM2QgfSBmcm9tICcuL1ZlY3RvcjNkJztcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gJy4vTWF0cml4JztcbmNsYXNzIFZlY3RvcjRkIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6LCB3KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMueiA9IHo7XG4gICAgICAgIHRoaXMudyA9IHc7XG4gICAgfVxuICAgIGNvbGxhcHNlKCkge1xuICAgICAgICBsZXQgdCA9IHRoaXMudztcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnggLyB0LCB0aGlzLnkgLyB0LCB0aGlzLnogLyB0KTtcbiAgICB9XG4gICAgdG9NYXRyaXgoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4KFtcbiAgICAgICAgICAgIFt0aGlzLnhdLFxuICAgICAgICAgICAgW3RoaXMueV0sXG4gICAgICAgICAgICBbdGhpcy56XSxcbiAgICAgICAgICAgIFt0aGlzLnddXG4gICAgICAgIF0pO1xuICAgIH1cbn1cbmV4cG9ydCB7IFZlY3RvcjRkIH07XG4iLCIvKlxuICogQEF1dGhvcjogR1h3YXJcbiAqIEBEYXRlOiAyMDE5LTAyLTE3IDIxOjM3OjEwXG4gKiBATGFzdCBNb2RpZmllZCBieTogICBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAwMTozNDowNlxuICovXG5jbGFzcyBFZGdlVGFibGVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih5U3RhcnQsIHlNYXgsIHhTdGFydCwgZGVsdGEsIHpVcHBlciwgekxvd2VyKSB7XG4gICAgICAgIHRoaXMueVN0YXJ0ID0geVN0YXJ0O1xuICAgICAgICB0aGlzLnlNYXggPSB5TWF4O1xuICAgICAgICB0aGlzLnhTdGFydCA9IHhTdGFydDtcbiAgICAgICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgICAgICB0aGlzLnpVcHBlciA9IHpVcHBlcjtcbiAgICAgICAgdGhpcy56TG93ZXIgPSB6TG93ZXI7XG4gICAgfVxufVxuO1xuZXhwb3J0IHsgRWRnZVRhYmxlRWxlbWVudCB9O1xuIiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnLi4vbWF0aC9NYXRyaXgnO1xuY29uc3Qgd29ybGQyQ2FtZXJhID0gKGNhbWVyYSkgPT4ge1xuICAgIGNvbnN0IFIgPSBuZXcgTWF0cml4KFtcbiAgICAgICAgW2NhbWVyYS5VLngsIGNhbWVyYS5VLnksIGNhbWVyYS5VLnosIDBdLFxuICAgICAgICBbY2FtZXJhLlYueCwgY2FtZXJhLlYueSwgY2FtZXJhLlYueiwgMF0sXG4gICAgICAgIFtjYW1lcmEuTi54LCBjYW1lcmEuTi55LCBjYW1lcmEuTi56LCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDFdXG4gICAgXSk7XG4gICAgY29uc3QgVCA9IG5ldyBNYXRyaXgoW1xuICAgICAgICBbMSwgMCwgMCwgLWNhbWVyYS5wb3NpdGlvbi54XSxcbiAgICAgICAgWzAsIDEsIDAsIC1jYW1lcmEucG9zaXRpb24ueV0sXG4gICAgICAgIFswLCAwLCAxLCAtY2FtZXJhLnBvc2l0aW9uLnpdLFxuICAgICAgICBbMCwgMCwgMCwgMV1cbiAgICBdKTtcbiAgICByZXR1cm4gUi5tdWx0aXBseShUKTtcbn07XG5jb25zdCBwZXJzcGVjdGl2ZVRyYW5zZm9ybSA9IChoLCBkLCBmKSA9PiBuZXcgTWF0cml4KFtcbiAgICBbZCAvIGgsIDAsIDAsIDBdLFxuICAgIFswLCBkIC8gaCwgMCwgMF0sXG4gICAgWzAsIDAsIGYgLyAoZiAtIGQpLCAtZCAqIGYgLyAoZiAtIGQpXSxcbiAgICBbMCwgMCwgMSwgMF1cbl0pO1xuLyoqXG4gKiBCYWNrLWZhY2UgY3VsbGluZ1xuICogVmlzaWJsZSBpZiBOcCBkb3QgcHJvZHVjdCBOID4gMFxuICogTm90ZTogU29tZSB0aGUgcG9seWdvbnMgYXJlIGRlbm90ZWQgaW4gYW50aS1jbG9ja3dpc2Ugb3JkZXJcbiAqL1xuY29uc3QgYmFja0ZhY2VDdWxsaW5nID0gKGZhY2VzLCBwb2ludHMsIGNhbWVyYSkgPT4ge1xuICAgIGNvbnN0IGJhY2tGYWNlU2V0ID0gbmV3IFNldCgpO1xuICAgIGZhY2VzLmZvckVhY2goKGZhY2UsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHYxID0gcG9pbnRzW2ZhY2VbMF1dLnN1YnRyYWN0KHBvaW50c1tmYWNlWzFdXSk7XG4gICAgICAgIGNvbnN0IHYyID0gcG9pbnRzW2ZhY2VbMV1dLnN1YnRyYWN0KHBvaW50c1tmYWNlWzJdXSk7XG4gICAgICAgIGNvbnN0IE5wID0gdjEuY3Jvc3NQcm9kdWN0KHYyKTtcbiAgICAgICAgY29uc3QgTiA9IGNhbWVyYS5wb3NpdGlvbi5zdWJ0cmFjdChwb2ludHNbZmFjZVswXV0pO1xuICAgICAgICBpZiAoTnAuZG90UHJvZHVjdChOKSA+PSAwKSB7XG4gICAgICAgICAgICBiYWNrRmFjZVNldC5hZGQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGJhY2tGYWNlU2V0O1xufTtcbi8vIENhbGN1bGF0ZSBtb2RlbFxuY29uc3QgY2FsY01vZGVsID0gKHBvaW50cywgY2FtZXJhLCBoLCBkLCBmKSA9PiB7XG4gICAgY29uc3QgY29tYm8gPSBwZXJzcGVjdGl2ZVRyYW5zZm9ybShoLCBkLCBmKS5tdWx0aXBseSh3b3JsZDJDYW1lcmEoY2FtZXJhKSk7XG4gICAgcmV0dXJuIHBvaW50cy5tYXAocG9pbnQgPT4ge1xuICAgICAgICByZXR1cm4gY29tYm8ubXVsdGlwbHkocG9pbnQuZXh0ZW5kKCkudG9NYXRyaXgoKSkudG9WZWN0b3IoKTtcbiAgICB9KTtcbn07XG5leHBvcnQgeyBiYWNrRmFjZUN1bGxpbmcsIGNhbGNNb2RlbCB9O1xuIiwiLypcbiAqIEBBdXRob3I6IEdYd2FyXG4gKiBARGF0ZTogMjAxOS0wMi0xMCAwMTozMzo0NVxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgR1h3YXJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMTkgMDE6MzM6NDVcbiAqL1xuLy8gZGF0YSBmaWxlcyB0byBiZSBsb2FkZWRcbmNvbnN0IGZpbGVzID0gW1xuICAgICdhdGMnLFxuICAgICdiYWxsJyxcbiAgICAnY293JyxcbiAgICAnaG91c2UnLFxuICAgICdrbmlnaHQnXG5dO1xuZXhwb3J0IHsgZmlsZXMgfTtcbiIsIi8qXG4gKiBAQXV0aG9yOiBHWHdhclxuICogQERhdGU6IDIwMTktMDItMTggMDE6MzM6NTZcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBHWHdhclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0xOSAwMTozOTo1N1xuICovXG5pbXBvcnQgeyBDYW1lcmEsIFZlY3RvcjNkIH0gZnJvbSAnLi4vLi4vbGliL2luZGV4JztcbmNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgLyoqKioqKioqKioqKioqKioqKioqIHNldHRpbmcgKioqKioqKioqKioqKioqKioqKiovXG4gICAgaDogMSxcbiAgICBkOiAxLFxuICAgIGY6IDEwMDAsXG4gICAgY2FtZXJhOiBuZXcgQ2FtZXJhKG5ldyBWZWN0b3IzZCgwLCAyMCwgMjApLCBuZXcgVmVjdG9yM2QoMCwgLTEsIDApKSxcbiAgICBwUmVmOiBuZXcgVmVjdG9yM2QoMCwgMCwgMCksXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIC8qKioqKioqKioqKioqKioqKioqKiBtb2RlbCAqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwb2ludHNOdW06IDEwLFxuICAgIGZhY2VzTnVtOiA3LFxuICAgIHBvaW50czogW1xuICAgICAgICBuZXcgVmVjdG9yM2QoOC4wLCAxNi4wLCAzMC4wKSxcbiAgICAgICAgbmV3IFZlY3RvcjNkKDE2LjAsIDEwLjAsIDMwLjApLFxuICAgICAgICBuZXcgVmVjdG9yM2QoMTYuMCwgMC4wLCAzMC4wKSxcbiAgICAgICAgbmV3IFZlY3RvcjNkKDAuMCwgMC4wLCAzMC4wKSxcbiAgICAgICAgbmV3IFZlY3RvcjNkKDAuMCwgMTAuMCwgMzAuMCksXG4gICAgICAgIG5ldyBWZWN0b3IzZCg4LjAsIDE2LjAsIDU0LjApLFxuICAgICAgICBuZXcgVmVjdG9yM2QoMTYuMCwgMTAuMCwgNTQuMCksXG4gICAgICAgIG5ldyBWZWN0b3IzZCgxNi4wLCAwLjAsIDU0LjApLFxuICAgICAgICBuZXcgVmVjdG9yM2QoMC4wLCAwLjAsIDU0LjApLFxuICAgICAgICBuZXcgVmVjdG9yM2QoMC4wLCAxMC4wLCA1NC4wKVxuICAgIF0sXG4gICAgZmFjZXM6IFtcbiAgICAgICAgWzAsIDQsIDMsIDIsIDFdLFxuICAgICAgICBbNSwgNiwgNywgOCwgOV0sXG4gICAgICAgIFs2LCAxLCAyLCA3XSxcbiAgICAgICAgWzksIDgsIDMsIDRdLFxuICAgICAgICBbMywgOCwgNywgMl0sXG4gICAgICAgIFs1LCAwLCAxLCA2XSxcbiAgICAgICAgWzUsIDksIDQsIDBdXG4gICAgXSxcbiAgICAvKioqKioqKioqKioqKioqKioqKiogY2FsY3VsYXRlZCBtb2RlbCAqKioqKioqKioqKioqKioqKioqKi9cbiAgICBmYWNlX2NvbG9yX3JfYnVmZmVyOiBbXSxcbiAgICBmYWNlX2NvbG9yX2dfYnVmZmVyOiBbXSxcbiAgICBmYWNlX2NvbG9yX2JfYnVmZmVyOiBbXVxufTtcbmV4cG9ydCB7IHBhcmFtZXRlcnMgfTtcbiIsImltcG9ydCB7IHBhcmFtZXRlcnMgfSBmcm9tICcuL2NvbmZpZ3MvcGFyYW1ldGVycyc7XG5pbXBvcnQgbG9hZEZpbGUgZnJvbSAnLi91dGlscy9sb2FkRmlsZSc7XG5pbXBvcnQgZHJhdyBmcm9tICcuL3V0aWxzL2RyYXcnO1xuaW1wb3J0IHsgYmluZFNsaWRlciwgbG9hZE1lbnUsIHJlYWN0VG9PcGVyYXRpb24gfSBmcm9tICcuL3V0aWxzL2RvbSc7XG4vKioqKioqKioqKioqKioqKioqKiogSW5pdGlhbGl6ZSBET00gKioqKioqKioqKioqKioqKioqKiovXG4vLyBHZXQgY2FudmFzIHJlYWR5XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbmNvbnN0IHdpZHRoID0gY2FudmFzLndpZHRoO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5jdHguc3Ryb2tlU3R5bGUgPSAnZ3JlZW4nO1xuLy8gSW5qZWN0IHBhcmFtZXRlciB0byBkcmF3IGZ1bmN0aW9uXG5jb25zdCBkcmF3Q3R4ID0gZHJhdyhjdHgsIHdpZHRoLCBoZWlnaHQpO1xuLy8gTG9hZCBhbGwgbW9kZWwgb3B0aW9ucyB0byBtZW51XG5jb25zdCBjaG9vc2VfbW9kZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QuY2hvb3NlX21vZGVsJyk7XG5sb2FkTWVudShjaG9vc2VfbW9kZWwpO1xuLy8gR2V0IHRocmVlIHNsaWRlcyByZWFkeSBiaW5kaW5nIHdpdGggaCwgZCwgZiBwYXJhbWV0ZXJcblsnaCcsICdkJywgJ2YnXS5mb3JFYWNoKGl0ZW0gPT4gYmluZFNsaWRlcihpdGVtLCBkcmF3Q3R4KSk7XG4vLyBCdXR0b25cbi8vIEJpbmQgcmVuZGVyIGJ1dHRvbiB3aXRoIGxvYWQgZmlsZSBhbmQgcmVuZGVyIG9wZXJ0aW9uXG5jb25zdCByZW5kZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVuZGVyJyk7XG5yZW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbW9kZWxJbmRleCA9IGNob29zZV9tb2RlbC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChtb2RlbEluZGV4ID09PSAwKSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgbW9kZWwgdG8gcmVuZGVyJyk7XG4gICAgfVxuICAgIGNvbnN0IG1vZGVsTmFtZSA9IGNob29zZV9tb2RlbC5vcHRpb25zW21vZGVsSW5kZXhdLnZhbHVlO1xuICAgIGxvYWRGaWxlKGAuL3B1YmxpYy9tb2RlbC8ke21vZGVsTmFtZX0uZC50eHRgLCBkcmF3Q3R4KTtcbiAgICByZW5kZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xufSk7XG4vLyBiaW5kIHJlc2V0IGJ1dHRvbiB3aXRoIHJlZnJlc2ggZnVuY3Rpb25cbmNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XG5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuLyoqKioqKioqKioqKioqKioqKioqIEluaXRpYWxpemUgRGF0YSAqKioqKioqKioqKioqKioqKioqKi9cbi8vIEJpbmRpbmcgb3BlcmF0aW9uXG5yZWFjdFRvT3BlcmF0aW9uKGNhbnZhcywgZHJhd0N0eCk7XG4vLyBDYWxjdWxhdGUgTiwgVSwgViB2ZWN0b3JcbnBhcmFtZXRlcnMuY2FtZXJhLmNhbGNOVVYocGFyYW1ldGVycy5wUmVmKTtcbnBhcmFtZXRlcnMud2lkdGggPSB3aWR0aDtcbnBhcmFtZXRlcnMuaGVpZ2h0ID0gaGVpZ2h0O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqIERPTSBPUEVSQVRJT04gKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgeyBwYXJhbWV0ZXJzIH0gZnJvbSAnLi4vY29uZmlncy9wYXJhbWV0ZXJzJztcbmltcG9ydCB7IGZpbGVzIH0gZnJvbSAnLi4vY29uZmlncy9jb25zdGFudHMnO1xuLyoqXG4gKiBMb2FkIG1lbnVcbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRNZW51ID0gKHNlbGVjdERPTSkgPT4ge1xuICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZmlsZSk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmaWxlKSk7XG4gICAgICAgIHNlbGVjdERPTS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xufTtcbi8qKlxuICogQmluZCB0aGUgdmFsdWUgb2Ygc2xpZGVyIHdpdGggY2FtZXJhIHNldHRpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kU2xpZGVyID0gKG5hbWUsIGRyYXcpID0+IHtcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuYW1lfWApO1xuICAgIGNvbnN0IHNsaWRlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuYW1lfV9WYCk7XG4gICAgc2xpZGVyLnZhbHVlID0gcGFyYW1ldGVyc1tuYW1lXTtcbiAgICBzbGlkZXJUZXh0LmlubmVySFRNTCA9IHBhcmFtZXRlcnNbbmFtZV07XG4gICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGFyYW1ldGVyc1tuYW1lXSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHNsaWRlclRleHQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgcGFyYW1ldGVycy5wUmVmWzBdIC09IDEwO1xuICAgICAgICBkcmF3KCk7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBCaW5kIG9wZXJhdGlvbiB0byBjb250cm9sIHRoZSBmaW5hbCBlZmZlY3RcbiAqL1xuY29uc3Qgb2JqZWN0TGVuID0gMTtcbmNvbnN0IGNhbWVyYUxlbiA9IDI7XG5leHBvcnQgY29uc3QgcmVhY3RUb09wZXJhdGlvbiA9IChjYW52YXMsIGRyYXcpID0+IHtcbiAgICAvLyB6b29taW5nIHRoZSBtb2RlbFxuICAgIGNvbnN0IGNhbWVyYSA9IHBhcmFtZXRlcnMuY2FtZXJhO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC53aGVlbERlbHRhID4gMCkge1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uLnNjYWxlKDYgLyA1KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbiA9IGNhbWVyYS5wb3NpdGlvbi5zY2FsZSg1IC8gNik7XG4gICAgICAgIH1cbiAgICAgICAgZHJhdygpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uLmFkZChjYW1lcmEuVi5zY2FsZSgtb2JqZWN0TGVuKSk7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uLmFkZChjYW1lcmEuVi5zY2FsZShvYmplY3RMZW4pKTtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb24uYWRkKGNhbWVyYS5VLnNjYWxlKG9iamVjdExlbikpO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbiA9IGNhbWVyYS5wb3NpdGlvbi5hZGQoY2FtZXJhLlUuc2NhbGUoLW9iamVjdExlbikpO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2knOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55IC09IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBjYW1lcmEuY2FsY05VVihwYXJhbWV0ZXJzLnBSZWYpO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2snOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ICs9IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBjYW1lcmEuY2FsY05VVihwYXJhbWV0ZXJzLnBSZWYpO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2onOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBjYW1lcmEuY2FsY05VVihwYXJhbWV0ZXJzLnBSZWYpO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54IC09IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBjYW1lcmEuY2FsY05VVihwYXJhbWV0ZXJzLnBSZWYpO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG4iLCIvKioqKioqKioqKioqKioqKioqKiogRFJBVyBJTUFHRSAqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCB7IHBhcmFtZXRlcnMgfSBmcm9tICcuLi9jb25maWdzL3BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgY2FsY01vZGVsLCBiYWNrRmFjZUN1bGxpbmcgfSBmcm9tICcuLi8uLi9saWIvdHJhbnNmb3JtL21vZGVsaW5nJztcbmltcG9ydCB7IGNvbG9ySW5pdCwgc2NhbkNvbnZlcnNpb24gfSBmcm9tICcuL2ZpbGxQaXhlbCc7XG4vKipcbiAqIERyYXcgbW9kZWwgb24gdGhlIGNhbnZhc1xuICogQHBhcmFtIGN0eFxuICogQHBhcmFtIHdpZHRoXG4gKiBAcGFyYW0gaGVpZ2h0XG4gKi9cbmNvbnN0IGRyYXcgPSAoY3R4LCB3aWR0aCwgaGVpZ2h0KSA9PiAoKSA9PiB7XG4gICAgLy8gYmFjayBmYWNlIGN1bGxpbmcsIHNhdmUgaXQgdG8gbW9kZWwgb2JqZWN0XG4gICAgY29uc3QgYmFja0ZhY2VTZXQgPSBiYWNrRmFjZUN1bGxpbmcocGFyYW1ldGVycy5mYWNlcywgcGFyYW1ldGVycy5wb2ludHMsIHBhcmFtZXRlcnMuY2FtZXJhKTtcbiAgICAvLyB0cmFuc2Zvcm0gcG9pbnRzIGZyb20gdmlydHVhbCB3b3JsZCB0byAyZCBzY3JlZW5cbiAgICBjb25zdCBjYWxjUG9pbnRzID0gY2FsY01vZGVsKHBhcmFtZXRlcnMucG9pbnRzLCBwYXJhbWV0ZXJzLmNhbWVyYSwgcGFyYW1ldGVycy5oLCBwYXJhbWV0ZXJzLmQsIHBhcmFtZXRlcnMuZik7XG4gICAgLy8gZmlsbCBwaXhlbHNcbiAgICBjb2xvckluaXQoKTtcbiAgICBjb25zdCBwaXhlbEJ1ZmZlciA9IHNjYW5Db252ZXJzaW9uKHBhcmFtZXRlcnMuZmFjZXMsIGNhbGNQb2ludHMsIGJhY2tGYWNlU2V0LCBoZWlnaHQsIHdpZHRoKTtcbiAgICAvLyBkcmF3IGltYWdlXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zdCBpbWFnZURhdGEgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gaSAqIHdpZHRoICsgajtcbiAgICAgICAgICAgIC8vIHIgZyBiIGFcbiAgICAgICAgICAgIGRhdGFbdCAqIDQgKyAwXSA9IHBpeGVsQnVmZmVyW2ldW2pdWzBdO1xuICAgICAgICAgICAgZGF0YVt0ICogNCArIDFdID0gcGl4ZWxCdWZmZXJbaV1bal1bMV07XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgMl0gPSBwaXhlbEJ1ZmZlcltpXVtqXVsyXTtcbiAgICAgICAgICAgIGRhdGFbdCAqIDQgKyAzXSA9IDI1NTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbWFnZURhdGEuZGF0YS5zZXQoZGF0YSk7XG4gICAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGRyYXc7XG4iLCIvKioqKioqKioqKioqKioqKioqKiogRklMTCBQSVhFTFMgKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgeyBwYXJhbWV0ZXJzIH0gZnJvbSAnLi4vY29uZmlncy9wYXJhbWV0ZXJzJztcbmltcG9ydCB7IEVkZ2VUYWJsZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9saWIvaW5kZXgnO1xuLy8gZ2V0IGEgcmFuZG9tIGludGVnZXIgaW4gWzAsIDI1NV1cbmNvbnN0IHJhbmRvbSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XG4vLyBjb252ZXJ0IDJkIHBvaW50IHRvIGNhbnZhcyBwb2ludFxuY29uc3QgdG9QaXhlbCA9ICh2YWx1ZSwgc2hvcnR0ZW4gPSBmYWxzZSkgPT4gTWF0aC5mbG9vcigodmFsdWUgKyAxKSAqIHBhcmFtZXRlcnMuaGVpZ2h0IC8gMikgLSAoc2hvcnR0ZW4gPyAxIDogMCk7XG5jb25zdCB0b0Zsb2F0UGl4ZWwgPSAodmFsdWUpID0+ICh2YWx1ZSArIDEpICogcGFyYW1ldGVycy5oZWlnaHQgLyAyO1xuY29uc3QgYnVmZmVySW5pdCA9IChoZWlnaHQsIHdpZHRoKSA9PiB7XG4gICAgY29uc3QgcGl4ZWxCdWZmZXIgPSBbXTtcbiAgICBjb25zdCB6QnVmZmVyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICBwaXhlbEJ1ZmZlcltpXSA9IFtdO1xuICAgICAgICB6QnVmZmVyW2ldID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgcGl4ZWxCdWZmZXJbaV1bal0gPSBbMCwgMCwgMF07XG4gICAgICAgICAgICB6QnVmZmVyW2ldW2pdID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3BpeGVsQnVmZmVyLCB6QnVmZmVyXTtcbn07XG5jb25zdCBlZGdlVGFibGVJbml0ID0gKGhlaWdodCkgPT4ge1xuICAgIGNvbnN0IGVkZ2VUYWJsZSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgZWRnZVRhYmxlW2ldID0gW107XG4gICAgfVxuICAgIHJldHVybiBlZGdlVGFibGU7XG59O1xuY29uc3QgY29sb3JJbml0ID0gKCkgPT4ge1xuICAgIC8vIGdpdmUgcmFuZG9tIGNvbG9yIHRvIGVhY2ggZmFjZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5mYWNlc051bTsgaSsrKSB7XG4gICAgICAgIHBhcmFtZXRlcnMuZmFjZV9jb2xvcl9yX2J1ZmZlci5wdXNoKHJhbmRvbSgpKTtcbiAgICAgICAgcGFyYW1ldGVycy5mYWNlX2NvbG9yX2dfYnVmZmVyLnB1c2gocmFuZG9tKCkpO1xuICAgICAgICBwYXJhbWV0ZXJzLmZhY2VfY29sb3JfYl9idWZmZXIucHVzaChyYW5kb20oKSk7XG4gICAgfVxufTtcbi8qKlxuICogU2NhbiBDb252ZXJzaW9uXG4gKiAxLiBmb3IgZWFjaCBzY2FuIGxpbmUsIGRldGVybWluZSBlZGdlcyBvZiBwb2x5Z29ucyB0aGF0IGludGVyc2VjdFxuICogMi4gRmluZCB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgc3BhblxuICogMy4gUmVseSBvbiBzY2FubGluZSBhbmQgcGl4ZWwgY29oZXJlbmNlIHRvIGxpbmVhcmx5IGludGVycG9sYXRlIChiZXR3ZWVuIHNjYW5saW5lcyBhbmQgYmV0d2VlbiBwaXhlbHMpXG4gKi9cbmNvbnN0IGFkZEVkZ2VUb0VUID0gKGxvd2VyUG9pbnQsIHVwcGVyUG9pbnQsIGVkZ2VUYWJsZSkgPT4ge1xuICAgIC8vIGlnbm9yZSBob3Jpem9udGFsIGVkZ2UgYW5kIG91dCBvZiByYW5nZSBwb2ludFxuICAgIGlmICh0b1BpeGVsKGxvd2VyUG9pbnQueSkgPT09IHRvUGl4ZWwodXBwZXJQb2ludC55KVxuICAgICAgICB8fCBsb3dlclBvaW50LnkgPiAxIHx8IGxvd2VyUG9pbnQueSA8IC0xKVxuICAgICAgICByZXR1cm47XG4gICAgLy8gc3dhcCB0aGUgb3JkZXIgb2YgdHdvIHBvaW50c1xuICAgIGlmIChsb3dlclBvaW50LnkgPiB1cHBlclBvaW50LnkpIHtcbiAgICAgICAgW2xvd2VyUG9pbnQsIHVwcGVyUG9pbnRdID0gW3VwcGVyUG9pbnQsIGxvd2VyUG9pbnRdO1xuICAgIH1cbiAgICAvLyBjcmVhdGUgZWRnZSB0YWJsZSBlbGVtZW50IGFuZCBhZGQgaXQgaW50byB0aGUgZWRnZSB0YWJsZVxuICAgIGNvbnN0IEVURWxlbWVudCA9IG5ldyBFZGdlVGFibGVFbGVtZW50KHRvUGl4ZWwobG93ZXJQb2ludC55KSwgdG9QaXhlbCh1cHBlclBvaW50LnksIHRydWUpLCB0b0Zsb2F0UGl4ZWwobG93ZXJQb2ludC54KSwgKGxvd2VyUG9pbnQueCAtIHVwcGVyUG9pbnQueCkgLyAobG93ZXJQb2ludC55IC0gdXBwZXJQb2ludC55KSwgdXBwZXJQb2ludC56LCBsb3dlclBvaW50LnopO1xuICAgIGlmIChFVEVsZW1lbnQueVN0YXJ0ID4gRVRFbGVtZW50LnlNYXgpIHtcbiAgICAgICAgRVRFbGVtZW50LnlNYXggPSBFVEVsZW1lbnQueVN0YXJ0O1xuICAgIH1cbiAgICBlZGdlVGFibGVbTWF0aC5mbG9vcihFVEVsZW1lbnQueVN0YXJ0KV0ucHVzaChFVEVsZW1lbnQpO1xufTtcbi8vIENhbGN1bGF0aW9uIG9mIHpcbmNvbnN0IGNhbGNaID0gKGVkZ2UsIHlzKSA9PiBlZGdlLnlNYXggPT09IGVkZ2UueVN0YXJ0ID8gZWRnZS56VXBwZXIgOlxuICAgIGVkZ2UuelVwcGVyIC0gKGVkZ2UuelVwcGVyIC0gZWRnZS56TG93ZXIpICogKGVkZ2UueU1heCAtIHlzKSAvIChlZGdlLnlNYXggLSBlZGdlLnlTdGFydCk7XG5jb25zdCBzY2FuQ29udmVyc2lvbiA9IChmYWNlcywgY2FsY1BvaW50cywgYmFja0ZhY2VTZXQsIGhlaWdodCwgd2lkdGgpID0+IHtcbiAgICBjb25zdCBbcGl4ZWxCdWZmZXIsIHpCdWZmZXJdID0gYnVmZmVySW5pdChoZWlnaHQsIHdpZHRoKTtcbiAgICBsZXQgYWN0aXZlRWRnZVRhYmxlID0gW107XG4gICAgLy8gZm9yIGVhY2ggZmFjZVxuICAgIGZhY2VzLmZvckVhY2goKGZhY2UsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGRvbid0IG5lZWQgdG8gY29uc2lkZXIgYmFjayBmYWNlXG4gICAgICAgIGlmIChiYWNrRmFjZVNldC5oYXMoaW5kZXgpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBidWlsZCBlZGdlIHRhYmxlXG4gICAgICAgIGNvbnN0IGVkZ2VUYWJsZSA9IGVkZ2VUYWJsZUluaXQoaGVpZ2h0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgYW4gZWRnZSBcbiAgICAgICAgICAgIGxldCBsb3dlclBvaW50ID0gY2FsY1BvaW50c1tmYWNlW2ldXTtcbiAgICAgICAgICAgIGxldCB1cHBlclBvaW50ID0gY2FsY1BvaW50c1tmYWNlWyhpICsgMSkgJSBmYWNlLmxlbmd0aF1dO1xuICAgICAgICAgICAgYWRkRWRnZVRvRVQobG93ZXJQb2ludCwgdXBwZXJQb2ludCwgZWRnZVRhYmxlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWxsIHBpeGVsIHRvIHBpeGVsIGJ1ZmZlclxuICAgICAgICBsZXQgY3VycmVudFNjYW5MaW5lID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVkZ2VUYWJsZVtpXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNjYW5MaW5lID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudFNjYW5MaW5lOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1vdmUgZWRnZSBmcm9tIEVkZ2UgVGFiZWwgdG8gQWN0aXZlIEVkZ2UgVGFibGVcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWRnZVRhYmxlW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlRWRnZVRhYmxlLnB1c2goZWRnZVRhYmxlW2ldW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEueFN0YXJ0IC0gYi54U3RhcnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqICsgMSA8IGFjdGl2ZUVkZ2VUYWJsZS5sZW5ndGg7IGogKz0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSBbYWN0aXZlRWRnZVRhYmxlW2pdLCBhY3RpdmVFZGdlVGFibGVbaiArIDFdXTtcbiAgICAgICAgICAgICAgICBpZiAobGVmdC54U3RhcnQgPiByaWdodC54U3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IFt6YSwgemJdID0gW2NhbGNaKGxlZnQsIGkpLCBjYWxjWihyaWdodCwgaSldO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKGxlZnQueFN0YXJ0KSk7IGsgPCBNYXRoLmZsb29yKHJpZ2h0LnhTdGFydCkgJiYgayA8IHdpZHRoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBjdXJyZW50IHBvaW50J3MgeiBjb29yZGluYXRlXG4gICAgICAgICAgICAgICAgICAgIGxldCB6cCA9IGsgPT0gTWF0aC5tYXgoMCwgbGVmdC54U3RhcnQpID8gemEgOiB6YiAtICh6YiAtIHphKSAqIChyaWdodC54U3RhcnQgLSBrKSAvIChyaWdodC54U3RhcnQgLSBsZWZ0LnhTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh6cCA+IHpCdWZmZXJbaV1ba10pXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgekJ1ZmZlcltpXVtrXSA9IHpwO1xuICAgICAgICAgICAgICAgICAgICBwaXhlbEJ1ZmZlcltpXVtrXSA9IFtwYXJhbWV0ZXJzLmZhY2VfY29sb3Jfcl9idWZmZXJbaW5kZXhdLCBwYXJhbWV0ZXJzLmZhY2VfY29sb3JfZ19idWZmZXJbaW5kZXhdLCBwYXJhbWV0ZXJzLmZhY2VfY29sb3JfYl9idWZmZXJbaW5kZXhdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3RpdmVFZGdlVGFibGUgPSBhY3RpdmVFZGdlVGFibGVcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGVkZ2UgPT4gZWRnZS55TWF4ICE9PSBpKSAvLyByZW1vdmUgZWRnZSBmcm9tIEFjdGl2ZSBFZGdlIFRhYmxlIHdoaWxlIHkgPSB5TWF4XG4gICAgICAgICAgICAgICAgLm1hcChlZGdlID0+IHtcbiAgICAgICAgICAgICAgICBlZGdlLnhTdGFydCArPSBlZGdlLmRlbHRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBlZGdlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGl4ZWxCdWZmZXI7XG59O1xuZXhwb3J0IHsgY29sb3JJbml0LCBzY2FuQ29udmVyc2lvbiB9O1xuIiwiaW1wb3J0IHsgcGFyYW1ldGVycyB9IGZyb20gJy4uL2NvbmZpZ3MvcGFyYW1ldGVycyc7XG5pbXBvcnQgeyBWZWN0b3IzZCB9IGZyb20gJy4uLy4uL2xpYi9pbmRleCc7XG4vKipcbiAqIFBhcnNlIHRoZSBkYXRhIGZyb20gdGhlIC5kIGZpbGVcbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICovXG5jb25zdCBwYXJzZUZpbGUgPSAoZGF0YSkgPT4ge1xuICAgIGxldCBsaW5lcyA9IGRhdGEubWF0Y2goL1teXFxyXFxuXSsvZyk7XG4gICAgbGV0IFtudW0sIHBvaW50c051bSwgZmFjZXNOdW1dID0gbGluZXNbMF0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgLy8gQ2F1c2UgaW4gc29tZSBmaWxlLCB0aGVyZSBhcmUganVzdCB0d28gbnVtYmVyIGluIGZpcnN0IGxpbmVcbiAgICBpZiAoZmFjZXNOdW0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZhY2VzTnVtID0gcG9pbnRzTnVtO1xuICAgICAgICBwb2ludHNOdW0gPSBudW07XG4gICAgfVxuICAgIC8vIGxvYWQgZGF0YSB0byBtb2RlbFxuICAgIHBhcmFtZXRlcnMucG9pbnRzTnVtID0gcGFyc2VJbnQocG9pbnRzTnVtLCAxMCk7XG4gICAgcGFyYW1ldGVycy5mYWNlc051bSA9IHBhcnNlSW50KGZhY2VzTnVtLCAxMCk7XG4gICAgLy8gaGVyZSB3ZSByZWZyZXNoIHRoZSBvYmplY3Qgd2hlbiBsb2FkIGRpZmZlcmVudCBtb2RlbFxuICAgIHBhcmFtZXRlcnMucG9pbnRzID0gW107XG4gICAgcGFyYW1ldGVycy5mYWNlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBhcmFtZXRlcnMucG9pbnRzTnVtOyBpKyspIHtcbiAgICAgICAgbGV0IFt4LCB5LCB6XSA9IGxpbmVzW2ldLnRyaW0oKS5zcGxpdCgvXFxzKy8pO1xuICAgICAgICBwYXJhbWV0ZXJzLnBvaW50cy5wdXNoKG5ldyBWZWN0b3IzZChwYXJzZUZsb2F0KHgpLCBwYXJzZUZsb2F0KHkpLCBwYXJzZUZsb2F0KHopKSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBwYXJhbWV0ZXJzLnBvaW50c051bSArIDE7IGkgPD0gcGFyYW1ldGVycy5wb2ludHNOdW0gKyBwYXJhbWV0ZXJzLmZhY2VzTnVtOyBpKyspIHtcbiAgICAgICAgbGV0IFtudW0sIC4uLnJlc10gPSBsaW5lc1tpXS50cmltKCkuc3BsaXQoL1xccysvKTtcbiAgICAgICAgaWYgKHJlcy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzLmZhY2VzLnB1c2gocmVzLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCkgLSAxKSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gKiBSZWFkIHRoZSBjb250ZW50IG9mIGEgZmlsZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVQYXRoXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5jb25zdCByZWFkRmlsZSA9IChmaWxlUGF0aCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignR0VUJywgZmlsZVBhdGgsIHRydWUpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWooKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBMb2FkIGFuZCByZW5kZXIgc2VsZWN0ZWQgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlUGF0aFxuICovXG5jb25zdCBsb2FkRmlsZSA9IChmaWxlUGF0aCwgZHJhdykgPT4ge1xuICAgIC8vIGxvYWQgbW9kZWxcbiAgICByZWFkRmlsZShmaWxlUGF0aClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcGFyc2VGaWxlKGRhdGEpO1xuICAgICAgICBkcmF3KCk7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvYWQgb3IgcGFyc2UgZmlsZSBlcnJvcicpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGxvYWRGaWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==