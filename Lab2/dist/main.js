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

/***/ "./src/configs/camera.ts":
/*!*******************************!*\
  !*** ./src/configs/camera.ts ***!
  \*******************************/
/*! exports provided: default, cameraInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cameraInit", function() { return cameraInit; });
/* harmony import */ var _operate_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operate/vector */ "./src/operate/vector.ts");

;
const camera = {
    h: 1,
    d: 1,
    f: 1000,
    C: [0, 20, 20],
    pRef: [0, 0, 0],
    UP: [0, -1, 0],
    N: [0, 0, 0],
    U: [0, 0, 0],
    V: [0, 0, 0]
};
/**
 * Calculate N, U, V by camera position
 */
const cameraInit = () => {
    camera.N = Object(_operate_vector__WEBPACK_IMPORTED_MODULE_0__["vectorUnit"])(Object(_operate_vector__WEBPACK_IMPORTED_MODULE_0__["vectorSubtract"])(camera.pRef, camera.C));
    camera.U = Object(_operate_vector__WEBPACK_IMPORTED_MODULE_0__["vectorUnit"])(Object(_operate_vector__WEBPACK_IMPORTED_MODULE_0__["vector3dCrossProduct"])(camera.N, camera.UP));
    camera.V = Object(_operate_vector__WEBPACK_IMPORTED_MODULE_0__["vector3dCrossProduct"])(camera.U, camera.N);
};
/* harmony default export */ __webpack_exports__["default"] = (camera);



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
// data files to be loaded
const files = [
    'atc',
    'ball',
    'cow',
    'knight'
];



/***/ }),

/***/ "./src/configs/model.ts":
/*!******************************!*\
  !*** ./src/configs/model.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
const model = {
    pointsNum: 0,
    facesNum: 0,
    points: [],
    faces: []
};
/* harmony default export */ __webpack_exports__["default"] = (model);


/***/ }),

/***/ "./src/configs/result.ts":
/*!*******************************!*\
  !*** ./src/configs/result.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
const result = {
    // A set used to save back face index
    backFaceSet: new Set(),
    // transformed point
    calcPoints: [],
    // rendering
    width: 0,
    height: 0,
    pixelBuffer: [],
    zBuffer: [],
    face_color_r_buffer: [],
    face_color_g_buffer: [],
    face_color_b_buffer: [],
    // Edge Table
    edgeTable: [],
    // Active Edge Table
    activeEdgeTable: []
};
/* harmony default export */ __webpack_exports__["default"] = (result);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configs_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs/camera */ "./src/configs/camera.ts");
/* harmony import */ var _utils_loadFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/loadFile */ "./src/utils/loadFile.ts");
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/draw */ "./src/utils/draw.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "./src/utils/dom.ts");
/* harmony import */ var _configs_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configs/result */ "./src/configs/result.ts");





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
Object(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["cameraInit"])();
_configs_result__WEBPACK_IMPORTED_MODULE_4__["default"].width = width;
_configs_result__WEBPACK_IMPORTED_MODULE_4__["default"].height = height;


/***/ }),

/***/ "./src/obj/EdgeTableElement.ts":
/*!*************************************!*\
  !*** ./src/obj/EdgeTableElement.ts ***!
  \*************************************/
/*! exports provided: EdgeTableElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeTableElement", function() { return EdgeTableElement; });
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

/***/ "./src/operate/matrix.ts":
/*!*******************************!*\
  !*** ./src/operate/matrix.ts ***!
  \*******************************/
/*! exports provided: matrixMultiply, matrixMultiplyVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matrixMultiply", function() { return matrixMultiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matrixMultiplyVector", function() { return matrixMultiplyVector; });
/**
 * Multiply two matrices
 * @param {Matrix} m1
 * @param {Matrix} m2
 */
const matrixMultiply = (m1, m2) => {
    if (m1[0].length !== m2.length) {
        throw new Error('Cannot multiply these two matrices!');
    }
    const [m, n, k] = [m1.length, m2.length, m2[0].length];
    // initialize m * k matrix with 0
    const newMatrix = [];
    for (let i = 0; i < m; i++) {
        newMatrix.push(Array.from({ length: k }, _ => 0));
    }
    // multiply
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < k; j++) {
            for (let t = 0; t < n; t++) {
                newMatrix[i][j] += m1[i][t] * m2[t][j];
            }
        }
    }
    return newMatrix;
};
/**
 * Multiply matrix with vector
 * @param {Matrix} matrix
 * @param {Vector} vector
 */
const matrixMultiplyVector = (matrix, vector) => {
    let [m, n] = [matrix.length, vector.length];
    const ret = Array.from({ length: m }, _ => 0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ret[i] += matrix[i][j] * vector[j];
        }
    }
    return ret;
};


/***/ }),

/***/ "./src/operate/transform.ts":
/*!**********************************!*\
  !*** ./src/operate/transform.ts ***!
  \**********************************/
/*! exports provided: backFaceCulling, calcModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backFaceCulling", function() { return backFaceCulling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcModel", function() { return calcModel; });
/* harmony import */ var _configs_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/camera */ "./src/configs/camera.ts");
/* harmony import */ var _configs_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/model */ "./src/configs/model.ts");
/* harmony import */ var _configs_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/result */ "./src/configs/result.ts");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector */ "./src/operate/vector.ts");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matrix */ "./src/operate/matrix.ts");





const world2Camera = () => {
    const T = [
        [1, 0, 0, -_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C[0]],
        [0, 1, 0, -_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C[1]],
        [0, 0, 1, -_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C[2]],
        [0, 0, 0, 1]
    ];
    const R = [
        [_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].U[0], _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].U[1], _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].U[2], 0],
        [_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].V[0], _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].V[1], _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].V[2], 0],
        [_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].N[0], _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].N[1], _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].N[2], 0],
        [0, 0, 0, 1]
    ];
    const RT = Object(_matrix__WEBPACK_IMPORTED_MODULE_4__["matrixMultiply"])(R, T);
    return RT;
};
const perspectiveTrans = () => {
    const a = _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].f / (_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].f - _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].d);
    const b = _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].d / _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].h;
    const mPers = [
        [b, 0, 0, 0],
        [0, b, 0, 0],
        [0, 0, a, -a * _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].d],
        [0, 0, 1, 0]
    ];
    return mPers;
};
/**
 * Back-face culling
 * Visible if Np dot product N > 0
 * Note: Some the polygons are denoted in anti-clockwise order
 */
const backFaceCulling = () => {
    _configs_result__WEBPACK_IMPORTED_MODULE_2__["default"].backFaceSet = new Set();
    _configs_model__WEBPACK_IMPORTED_MODULE_1__["default"].faces.forEach((x, index) => {
        if (Object(_vector__WEBPACK_IMPORTED_MODULE_3__["vector3dDotProduct"])(Object(_vector__WEBPACK_IMPORTED_MODULE_3__["vector3dCrossProduct"])(Object(_vector__WEBPACK_IMPORTED_MODULE_3__["vectorSubtract"])(_configs_model__WEBPACK_IMPORTED_MODULE_1__["default"].points[x[0]], _configs_model__WEBPACK_IMPORTED_MODULE_1__["default"].points[x[1]]), Object(_vector__WEBPACK_IMPORTED_MODULE_3__["vectorSubtract"])(_configs_model__WEBPACK_IMPORTED_MODULE_1__["default"].points[x[1]], _configs_model__WEBPACK_IMPORTED_MODULE_1__["default"].points[x[2]])), Object(_vector__WEBPACK_IMPORTED_MODULE_3__["vectorSubtract"])(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C, _configs_model__WEBPACK_IMPORTED_MODULE_1__["default"].points[x[0]])) >= 0) {
            _configs_result__WEBPACK_IMPORTED_MODULE_2__["default"].backFaceSet.add(index);
        }
    });
};
// Calculate model
const calcModel = () => {
    const combo = Object(_matrix__WEBPACK_IMPORTED_MODULE_4__["matrixMultiply"])(perspectiveTrans(), world2Camera());
    return _configs_model__WEBPACK_IMPORTED_MODULE_1__["default"].points.map(point => {
        let t = Object(_matrix__WEBPACK_IMPORTED_MODULE_4__["matrixMultiplyVector"])(combo, Object(_vector__WEBPACK_IMPORTED_MODULE_3__["vectorExtend"])(point));
        return Object(_vector__WEBPACK_IMPORTED_MODULE_3__["vectorCollapse"])(t);
    });
};


/***/ }),

/***/ "./src/operate/vector.ts":
/*!*******************************!*\
  !*** ./src/operate/vector.ts ***!
  \*******************************/
/*! exports provided: vectorExtend, vectorCollapse, vectorAbs, vectorAdd, vectorSubtract, vectorScale, vectorUnit, vector3dCrossProduct, vector3dDotProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorExtend", function() { return vectorExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorCollapse", function() { return vectorCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorAbs", function() { return vectorAbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorAdd", function() { return vectorAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorSubtract", function() { return vectorSubtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorScale", function() { return vectorScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorUnit", function() { return vectorUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vector3dCrossProduct", function() { return vector3dCrossProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vector3dDotProduct", function() { return vector3dDotProduct; });
/**
 * Increasing vector with one dimension
 * @param {Vector} vector
 */
const vectorExtend = (vector) => {
    return [...vector, 1];
};
const vectorCollapse = (vector) => {
    let vec = Array.from(vector);
    let t = vec.pop();
    return vec.map((item) => item / t);
};
/**
 * Get the length of the vector
 * @param {Vector} vector
 */
const vectorAbs = (vector) => {
    return Math.sqrt(vector.reduce((pre, cur) => {
        return pre + cur * cur;
    }, 0));
};
/**
 * Add two vector
 * @param {Vector} vec1
 * @param {Vector} vec2
 */
const vectorAdd = (vec1, vec2) => {
    if (vec1.length !== vec2.length) {
        throw new Error('Invalid vector addition');
    }
    return vec1.map((value, index) => value + vec2[index]);
};
/**
 * Substract vector
 * @param {Vector} vec1
 * @param {Vector} vec2
 */
const vectorSubtract = (vec1, vec2) => {
    if (vec1.length !== vec2.length) {
        throw new Error('Invalid vector substraction');
    }
    return vec1.map((value, index) => value - vec2[index]);
};
/**
 * Scale vector
 * @param {Vector} vector
 * @param {Number} n
 */
const vectorScale = (vector, n) => {
    return vector.map(i => i * n);
};
/**
 * Get a unit of the vector
 * @param {Vector} vector
 */
const vectorUnit = (vector) => {
    return vectorScale(vector, 1 / vectorAbs(vector));
};
/**
 * Cross Proudct of two 3d vector
 * @param {*} vec1
 * @param {*} vec2
 */
const vector3dCrossProduct = (vec1, vec2) => {
    return [
        vec1[1] * vec2[2] - vec2[1] * vec1[2],
        -(vec1[0] * vec2[2] - vec2[0] * vec1[2]),
        vec1[0] * vec2[1] - vec2[0] * vec1[1]
    ];
};
const vector3dDotProduct = (vec1, vec2) => {
    return vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2];
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
/* harmony import */ var _configs_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/camera */ "./src/configs/camera.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/constants */ "./src/configs/constants.ts");
/* harmony import */ var _operate_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operate/vector */ "./src/operate/vector.ts");
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
    slider.value = _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"][name];
    sliderText.innerHTML = _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"][name];
    slider.addEventListener('change', function () {
        _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"][name] = this.value;
        sliderText.innerHTML = this.value;
        _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].pRef[0] -= 10;
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
    canvas.addEventListener('mousewheel', function (e) {
        if (e.wheelDelta > 0) {
            _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C = Object(_operate_vector__WEBPACK_IMPORTED_MODULE_2__["vectorScale"])(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C, 6 / 5);
        }
        else {
            _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C = Object(_operate_vector__WEBPACK_IMPORTED_MODULE_2__["vectorScale"])(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C, 5 / 6);
        }
        draw();
    });
    document.addEventListener('keypress', function (e) {
        switch (e.key) {
            case 'w':
                _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C = Object(_operate_vector__WEBPACK_IMPORTED_MODULE_2__["vectorAdd"])(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C, Object(_operate_vector__WEBPACK_IMPORTED_MODULE_2__["vectorScale"])(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].V, -objectLen));
                draw();
                break;
            case 's':
                _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C = Object(_operate_vector__WEBPACK_IMPORTED_MODULE_2__["vectorAdd"])(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C, Object(_operate_vector__WEBPACK_IMPORTED_MODULE_2__["vectorScale"])(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].V, objectLen));
                draw();
                break;
            case 'a':
                _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C = Object(_operate_vector__WEBPACK_IMPORTED_MODULE_2__["vectorAdd"])(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C, Object(_operate_vector__WEBPACK_IMPORTED_MODULE_2__["vectorScale"])(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].U, objectLen));
                draw();
                break;
            case 'd':
                _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C = Object(_operate_vector__WEBPACK_IMPORTED_MODULE_2__["vectorAdd"])(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C, Object(_operate_vector__WEBPACK_IMPORTED_MODULE_2__["vectorScale"])(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].U, -objectLen));
                draw();
                break;
            case 'i':
                _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C[1] -= cameraLen;
                Object(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["cameraInit"])();
                draw();
                break;
            case 'k':
                _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C[1] += cameraLen;
                Object(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["cameraInit"])();
                draw();
                break;
            case 'j':
                _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C[0] += cameraLen;
                Object(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["cameraInit"])();
                draw();
                break;
            case 'l':
                _configs_camera__WEBPACK_IMPORTED_MODULE_0__["default"].C[0] -= cameraLen;
                Object(_configs_camera__WEBPACK_IMPORTED_MODULE_0__["cameraInit"])();
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
/* harmony import */ var _configs_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/result */ "./src/configs/result.ts");
/* harmony import */ var _operate_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operate/transform */ "./src/operate/transform.ts");
/* harmony import */ var _fillPixel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillPixel */ "./src/utils/fillPixel.ts");



/**
 * Draw model on the canvas
 * @param {Canvas context} ctx
 * @param {Canvas' width} width
 * @param {Canvas' height} height
 */
const draw = (ctx, width, height) => () => {
    // back face culling, save it to model object
    Object(_operate_transform__WEBPACK_IMPORTED_MODULE_1__["backFaceCulling"])();
    // transform points from virtual world to 2d screen
    _configs_result__WEBPACK_IMPORTED_MODULE_0__["default"].calcPoints = Object(_operate_transform__WEBPACK_IMPORTED_MODULE_1__["calcModel"])();
    // z-buffer algorithm
    Object(_fillPixel__WEBPACK_IMPORTED_MODULE_2__["bufferInit"])();
    Object(_fillPixel__WEBPACK_IMPORTED_MODULE_2__["default"])();
    // draw image
    ctx.clearRect(0, 0, width, height);
    const imageData = ctx.createImageData(width, height);
    const data = new Uint8Array(width * height * 4);
    for (let i = 0; i < _configs_result__WEBPACK_IMPORTED_MODULE_0__["default"].height; i++) {
        for (let j = 0; j < _configs_result__WEBPACK_IMPORTED_MODULE_0__["default"].width; j++) {
            const t = i * _configs_result__WEBPACK_IMPORTED_MODULE_0__["default"].width + j;
            // r g b a
            data[t * 4 + 0] = _configs_result__WEBPACK_IMPORTED_MODULE_0__["default"].pixelBuffer[i][j][0];
            data[t * 4 + 1] = _configs_result__WEBPACK_IMPORTED_MODULE_0__["default"].pixelBuffer[i][j][1];
            data[t * 4 + 2] = _configs_result__WEBPACK_IMPORTED_MODULE_0__["default"].pixelBuffer[i][j][2];
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
/*! exports provided: bufferInit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufferInit", function() { return bufferInit; });
/* harmony import */ var _configs_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/model */ "./src/configs/model.ts");
/* harmony import */ var _configs_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/result */ "./src/configs/result.ts");
/* harmony import */ var _obj_EdgeTableElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../obj/EdgeTableElement */ "./src/obj/EdgeTableElement.ts");
/******************** FILL PIXELS ********************/



// get a random integer in [0, 255]
const random = () => Math.floor(Math.random() * 256);
// convert 2d point to canvas point
const toPixel = (value, shortten = false) => Math.floor((value + 1) * _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].height / 2) - (shortten ? 1 : 0);
const toFloatPixel = (value) => (value + 1) * _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].height / 2;
// reset pixel buffer and z buffer
const bufferReset = () => {
    for (let i = 0; i < _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].height; i++) {
        _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].pixelBuffer[i] = [];
        _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].zBuffer[i] = [];
        for (let j = 0; j < _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].width; j++) {
            _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].pixelBuffer[i][j] = [0, 0, 0];
            _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].zBuffer[i][j] = 1;
        }
    }
};
// reset edge table
const edgeTableReset = () => {
    for (let i = 0; i < _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].height; i++) {
        _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].edgeTable[i] = [];
    }
};
const bufferInit = () => {
    bufferReset();
    // give random color to each face
    for (let i = 0; i < _configs_model__WEBPACK_IMPORTED_MODULE_0__["default"].facesNum; i++) {
        _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].face_color_r_buffer.push(random());
        _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].face_color_g_buffer.push(random());
        _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].face_color_b_buffer.push(random());
    }
};
/**
 * Scan Conversion
 * 1. for each scan line, determine edges of polygons that intersect
 * 2. Find the start and end of the span
 * 3. Rely on scanline and pixel coherence to linearly interpolate (between scanlines and between pixels)
 */
const addEdgeToET = (lowerPoint, upperPoint) => {
    // ignore horizontal edge and out of range point
    if (toPixel(lowerPoint[1]) === toPixel(upperPoint[1])
        || lowerPoint[1] > 1 || lowerPoint[1] < -1)
        return;
    // swap the order of two points
    if (lowerPoint[1] > upperPoint[1]) {
        [lowerPoint, upperPoint] = [upperPoint, lowerPoint];
    }
    // create edge table element and add it into the edge table
    const ETElement = new _obj_EdgeTableElement__WEBPACK_IMPORTED_MODULE_2__["EdgeTableElement"](toPixel(lowerPoint[1]), toPixel(upperPoint[1], true), toFloatPixel(lowerPoint[0]), (lowerPoint[0] - upperPoint[0]) / (lowerPoint[1] - upperPoint[1]), upperPoint[2], lowerPoint[2]);
    if (ETElement.yStart > ETElement.yMax) {
        ETElement.yMax = ETElement.yStart;
    }
    _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].edgeTable[Math.floor(ETElement.yStart)].push(ETElement);
};
// Calculation of z
const calcZ = (edge, ys) => edge.yMax === edge.yStart ? edge.zUpper :
    edge.zUpper - (edge.zUpper - edge.zLower) * (edge.yMax - ys) / (edge.yMax - edge.yStart);
const scanConversion = () => {
    bufferReset();
    // for each face
    _configs_model__WEBPACK_IMPORTED_MODULE_0__["default"].faces.forEach((face, index) => {
        // don't need to consider back face
        if (_configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].backFaceSet.has(index))
            return;
        // build edge table
        edgeTableReset();
        for (let i = 0; i < face.length; i++) {
            // get an edge 
            let lowerPoint = _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].calcPoints[face[i]];
            let upperPoint = _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].calcPoints[face[(i + 1) % face.length]];
            addEdgeToET(lowerPoint, upperPoint);
        }
        // fill pixel to pixel buffer
        let currentScanLine = 0;
        for (let i = 0; i < _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].height; i++) {
            if (_configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].edgeTable[i].length > 0) {
                currentScanLine = i;
                break;
            }
        }
        for (let i = currentScanLine; i < _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].height; i++) {
            // move edge from Edge Tabel to Active Edge Table
            for (let j = 0; j < _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].edgeTable[i].length; j++) {
                _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].activeEdgeTable.push(_configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].edgeTable[i][j]);
            }
            _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].activeEdgeTable.sort((a, b) => {
                return a.xStart - b.xStart;
            });
            for (let j = 0; j + 1 < _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].activeEdgeTable.length; j += 2) {
                const [left, right] = [_configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].activeEdgeTable[j], _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].activeEdgeTable[j + 1]];
                if (left.xStart > right.xStart)
                    continue;
                const [za, zb] = [calcZ(left, i), calcZ(right, i)];
                for (let k = Math.max(0, Math.floor(left.xStart)); k < Math.floor(right.xStart) && k < _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].width; k++) {
                    // calculate the current point's z coordinate
                    let zp = k == Math.max(0, left.xStart) ? za : zb - (zb - za) * (right.xStart - k) / (right.xStart - left.xStart);
                    if (zp > _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].zBuffer[i][k])
                        continue;
                    _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].zBuffer[i][k] = zp;
                    _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].pixelBuffer[i][k] = [_configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].face_color_r_buffer[index], _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].face_color_g_buffer[index], _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].face_color_b_buffer[index]];
                }
            }
            _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].activeEdgeTable = _configs_result__WEBPACK_IMPORTED_MODULE_1__["default"].activeEdgeTable
                .filter(edge => edge.yMax !== i) // remove edge from Active Edge Table while y = yMax
                .map(edge => {
                edge.xStart += edge.delta;
                return edge;
            });
        }
    });
};
/* harmony default export */ __webpack_exports__["default"] = (scanConversion);


/***/ }),

/***/ "./src/utils/loadFile.ts":
/*!*******************************!*\
  !*** ./src/utils/loadFile.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configs_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/model */ "./src/configs/model.ts");

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
    _configs_model__WEBPACK_IMPORTED_MODULE_0__["default"].pointsNum = parseInt(pointsNum, 10);
    _configs_model__WEBPACK_IMPORTED_MODULE_0__["default"].facesNum = parseInt(facesNum, 10);
    // here we refresh the object when load different model
    _configs_model__WEBPACK_IMPORTED_MODULE_0__["default"].points = [];
    _configs_model__WEBPACK_IMPORTED_MODULE_0__["default"].faces = [];
    for (let i = 1; i <= _configs_model__WEBPACK_IMPORTED_MODULE_0__["default"].pointsNum; i++) {
        let [x, y, z] = lines[i].trim().split(/\s+/);
        _configs_model__WEBPACK_IMPORTED_MODULE_0__["default"].points.push([parseFloat(x), parseFloat(y), parseFloat(z)]);
    }
    for (let i = _configs_model__WEBPACK_IMPORTED_MODULE_0__["default"].pointsNum + 1; i <= _configs_model__WEBPACK_IMPORTED_MODULE_0__["default"].pointsNum + _configs_model__WEBPACK_IMPORTED_MODULE_0__["default"].facesNum; i++) {
        let [num, ...res] = lines[i].trim().split(/\s+/);
        if (res.length > 2) {
            _configs_model__WEBPACK_IMPORTED_MODULE_0__["default"].faces.push(res.map((x) => parseInt(x) - 1));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3MvY2FtZXJhLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlncy9yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9vYmovRWRnZVRhYmxlRWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3BlcmF0ZS9tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wZXJhdGUvdHJhbnNmb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9vcGVyYXRlL3ZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kcmF3LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9maWxsUGl4ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2xvYWRGaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FB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QUFtQix1REFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNlLDZFQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNsSDlCO0FBQUE7QUFBcUM7QUFDckM7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBSztBQUNULElBQUksc0RBQUs7QUFDVDtBQUNBLElBQUksc0RBQUs7QUFDVCxJQUFJLHNEQUFLO0FBQ1QsbUJBQW1CLE1BQU0sc0RBQUssV0FBVztBQUN6QztBQUNBLFFBQVEsc0RBQUs7QUFDYjtBQUNBLGlCQUFpQixzREFBSyxlQUFlLE1BQU0sc0RBQUssYUFBYSxzREFBSyxVQUFVO0FBQzVFO0FBQ0E7QUFDQSxZQUFZLHNEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ2UsdUVBQVEsRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyB2ZWN0b3JTdWJ0cmFjdCwgdmVjdG9yVW5pdCwgdmVjdG9yM2RDcm9zc1Byb2R1Y3QgfSBmcm9tICcuLi9vcGVyYXRlL3ZlY3Rvcic7XG47XG5jb25zdCBjYW1lcmEgPSB7XG4gICAgaDogMSxcbiAgICBkOiAxLFxuICAgIGY6IDEwMDAsXG4gICAgQzogWzAsIDIwLCAyMF0sXG4gICAgcFJlZjogWzAsIDAsIDBdLFxuICAgIFVQOiBbMCwgLTEsIDBdLFxuICAgIE46IFswLCAwLCAwXSxcbiAgICBVOiBbMCwgMCwgMF0sXG4gICAgVjogWzAsIDAsIDBdXG59O1xuLyoqXG4gKiBDYWxjdWxhdGUgTiwgVSwgViBieSBjYW1lcmEgcG9zaXRpb25cbiAqL1xuY29uc3QgY2FtZXJhSW5pdCA9ICgpID0+IHtcbiAgICBjYW1lcmEuTiA9IHZlY3RvclVuaXQodmVjdG9yU3VidHJhY3QoY2FtZXJhLnBSZWYsIGNhbWVyYS5DKSk7XG4gICAgY2FtZXJhLlUgPSB2ZWN0b3JVbml0KHZlY3RvcjNkQ3Jvc3NQcm9kdWN0KGNhbWVyYS5OLCBjYW1lcmEuVVApKTtcbiAgICBjYW1lcmEuViA9IHZlY3RvcjNkQ3Jvc3NQcm9kdWN0KGNhbWVyYS5VLCBjYW1lcmEuTik7XG59O1xuZXhwb3J0IGRlZmF1bHQgY2FtZXJhO1xuZXhwb3J0IHsgY2FtZXJhSW5pdCB9O1xuIiwiLy8gZGF0YSBmaWxlcyB0byBiZSBsb2FkZWRcbmNvbnN0IGZpbGVzID0gW1xuICAgICdhdGMnLFxuICAgICdiYWxsJyxcbiAgICAnY293JyxcbiAgICAna25pZ2h0J1xuXTtcbmV4cG9ydCB7IGZpbGVzIH07XG4iLCI7XG5jb25zdCBtb2RlbCA9IHtcbiAgICBwb2ludHNOdW06IDAsXG4gICAgZmFjZXNOdW06IDAsXG4gICAgcG9pbnRzOiBbXSxcbiAgICBmYWNlczogW11cbn07XG5leHBvcnQgZGVmYXVsdCBtb2RlbDtcbiIsIjtcbmNvbnN0IHJlc3VsdCA9IHtcbiAgICAvLyBBIHNldCB1c2VkIHRvIHNhdmUgYmFjayBmYWNlIGluZGV4XG4gICAgYmFja0ZhY2VTZXQ6IG5ldyBTZXQoKSxcbiAgICAvLyB0cmFuc2Zvcm1lZCBwb2ludFxuICAgIGNhbGNQb2ludHM6IFtdLFxuICAgIC8vIHJlbmRlcmluZ1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBwaXhlbEJ1ZmZlcjogW10sXG4gICAgekJ1ZmZlcjogW10sXG4gICAgZmFjZV9jb2xvcl9yX2J1ZmZlcjogW10sXG4gICAgZmFjZV9jb2xvcl9nX2J1ZmZlcjogW10sXG4gICAgZmFjZV9jb2xvcl9iX2J1ZmZlcjogW10sXG4gICAgLy8gRWRnZSBUYWJsZVxuICAgIGVkZ2VUYWJsZTogW10sXG4gICAgLy8gQWN0aXZlIEVkZ2UgVGFibGVcbiAgICBhY3RpdmVFZGdlVGFibGU6IFtdXG59O1xuZXhwb3J0IGRlZmF1bHQgcmVzdWx0O1xuIiwiaW1wb3J0IHsgY2FtZXJhSW5pdCB9IGZyb20gJy4vY29uZmlncy9jYW1lcmEnO1xuaW1wb3J0IGxvYWRGaWxlIGZyb20gJy4vdXRpbHMvbG9hZEZpbGUnO1xuaW1wb3J0IGRyYXcgZnJvbSAnLi91dGlscy9kcmF3JztcbmltcG9ydCB7IGJpbmRTbGlkZXIsIGxvYWRNZW51LCByZWFjdFRvT3BlcmF0aW9uIH0gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IHJlc3VsdCBmcm9tICcuL2NvbmZpZ3MvcmVzdWx0Jztcbi8qKioqKioqKioqKioqKioqKioqKiBJbml0aWFsaXplIERPTSAqKioqKioqKioqKioqKioqKioqKi9cbi8vIEdldCBjYW52YXMgcmVhZHlcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuY29uc3Qgd2lkdGggPSBjYW52YXMud2lkdGg7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbmN0eC5zdHJva2VTdHlsZSA9ICdncmVlbic7XG4vLyBJbmplY3QgcGFyYW1ldGVyIHRvIGRyYXcgZnVuY3Rpb25cbmNvbnN0IGRyYXdDdHggPSBkcmF3KGN0eCwgd2lkdGgsIGhlaWdodCk7XG4vLyBMb2FkIGFsbCBtb2RlbCBvcHRpb25zIHRvIG1lbnVcbmNvbnN0IGNob29zZV9tb2RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdC5jaG9vc2VfbW9kZWwnKTtcbmxvYWRNZW51KGNob29zZV9tb2RlbCk7XG4vLyBHZXQgdGhyZWUgc2xpZGVzIHJlYWR5IGJpbmRpbmcgd2l0aCBoLCBkLCBmIHBhcmFtZXRlclxuWydoJywgJ2QnLCAnZiddLmZvckVhY2goaXRlbSA9PiBiaW5kU2xpZGVyKGl0ZW0sIGRyYXdDdHgpKTtcbi8vIEJ1dHRvblxuLy8gQmluZCByZW5kZXIgYnV0dG9uIHdpdGggbG9hZCBmaWxlIGFuZCByZW5kZXIgb3BlcnRpb25cbmNvbnN0IHJlbmRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW5kZXInKTtcbnJlbmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBtb2RlbEluZGV4ID0gY2hvb3NlX21vZGVsLnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKG1vZGVsSW5kZXggPT09IDApIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBtb2RlbCB0byByZW5kZXInKTtcbiAgICB9XG4gICAgY29uc3QgbW9kZWxOYW1lID0gY2hvb3NlX21vZGVsLm9wdGlvbnNbbW9kZWxJbmRleF0udmFsdWU7XG4gICAgbG9hZEZpbGUoYC4vcHVibGljL21vZGVsLyR7bW9kZWxOYW1lfS5kLnR4dGAsIGRyYXdDdHgpO1xuICAgIHJlbmRlckJ0bi5kaXNhYmxlZCA9IHRydWU7XG59KTtcbi8vIGJpbmQgcmVzZXQgYnV0dG9uIHdpdGggcmVmcmVzaCBmdW5jdGlvblxuY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKTtcbnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG4vKioqKioqKioqKioqKioqKioqKiogSW5pdGlhbGl6ZSBEYXRhICoqKioqKioqKioqKioqKioqKioqL1xuLy8gQmluZGluZyBvcGVyYXRpb25cbnJlYWN0VG9PcGVyYXRpb24oY2FudmFzLCBkcmF3Q3R4KTtcbi8vIENhbGN1bGF0ZSBOLCBVLCBWIHZlY3RvclxuY2FtZXJhSW5pdCgpO1xucmVzdWx0LndpZHRoID0gd2lkdGg7XG5yZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuIiwiY2xhc3MgRWRnZVRhYmxlRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoeVN0YXJ0LCB5TWF4LCB4U3RhcnQsIGRlbHRhLCB6VXBwZXIsIHpMb3dlcikge1xuICAgICAgICB0aGlzLnlTdGFydCA9IHlTdGFydDtcbiAgICAgICAgdGhpcy55TWF4ID0geU1heDtcbiAgICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgICAgIHRoaXMuZGVsdGEgPSBkZWx0YTtcbiAgICAgICAgdGhpcy56VXBwZXIgPSB6VXBwZXI7XG4gICAgICAgIHRoaXMuekxvd2VyID0gekxvd2VyO1xuICAgIH1cbn1cbjtcbmV4cG9ydCB7IEVkZ2VUYWJsZUVsZW1lbnQgfTtcbiIsIi8qKlxuICogTXVsdGlwbHkgdHdvIG1hdHJpY2VzXG4gKiBAcGFyYW0ge01hdHJpeH0gbTFcbiAqIEBwYXJhbSB7TWF0cml4fSBtMlxuICovXG5leHBvcnQgY29uc3QgbWF0cml4TXVsdGlwbHkgPSAobTEsIG0yKSA9PiB7XG4gICAgaWYgKG0xWzBdLmxlbmd0aCAhPT0gbTIubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IG11bHRpcGx5IHRoZXNlIHR3byBtYXRyaWNlcyEnKTtcbiAgICB9XG4gICAgY29uc3QgW20sIG4sIGtdID0gW20xLmxlbmd0aCwgbTIubGVuZ3RoLCBtMlswXS5sZW5ndGhdO1xuICAgIC8vIGluaXRpYWxpemUgbSAqIGsgbWF0cml4IHdpdGggMFxuICAgIGNvbnN0IG5ld01hdHJpeCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgIG5ld01hdHJpeC5wdXNoKEFycmF5LmZyb20oeyBsZW5ndGg6IGsgfSwgXyA9PiAwKSk7XG4gICAgfVxuICAgIC8vIG11bHRpcGx5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgbjsgdCsrKSB7XG4gICAgICAgICAgICAgICAgbmV3TWF0cml4W2ldW2pdICs9IG0xW2ldW3RdICogbTJbdF1bal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld01hdHJpeDtcbn07XG4vKipcbiAqIE11bHRpcGx5IG1hdHJpeCB3aXRoIHZlY3RvclxuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvclxuICovXG5leHBvcnQgY29uc3QgbWF0cml4TXVsdGlwbHlWZWN0b3IgPSAobWF0cml4LCB2ZWN0b3IpID0+IHtcbiAgICBsZXQgW20sIG5dID0gW21hdHJpeC5sZW5ndGgsIHZlY3Rvci5sZW5ndGhdO1xuICAgIGNvbnN0IHJldCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IG0gfSwgXyA9PiAwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgcmV0W2ldICs9IG1hdHJpeFtpXVtqXSAqIHZlY3RvcltqXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcbiIsImltcG9ydCBjYW1lcmEgZnJvbSAnLi4vY29uZmlncy9jYW1lcmEnO1xuaW1wb3J0IG1vZGVsIGZyb20gJy4uL2NvbmZpZ3MvbW9kZWwnO1xuaW1wb3J0IHJlc3VsdCBmcm9tICcuLi9jb25maWdzL3Jlc3VsdCc7XG5pbXBvcnQgeyB2ZWN0b3JFeHRlbmQsIHZlY3RvckNvbGxhcHNlLCB2ZWN0b3JTdWJ0cmFjdCwgdmVjdG9yM2RDcm9zc1Byb2R1Y3QsIHZlY3RvcjNkRG90UHJvZHVjdCB9IGZyb20gJy4vdmVjdG9yJztcbmltcG9ydCB7IG1hdHJpeE11bHRpcGx5LCBtYXRyaXhNdWx0aXBseVZlY3RvciB9IGZyb20gJy4vbWF0cml4JztcbmNvbnN0IHdvcmxkMkNhbWVyYSA9ICgpID0+IHtcbiAgICBjb25zdCBUID0gW1xuICAgICAgICBbMSwgMCwgMCwgLWNhbWVyYS5DWzBdXSxcbiAgICAgICAgWzAsIDEsIDAsIC1jYW1lcmEuQ1sxXV0sXG4gICAgICAgIFswLCAwLCAxLCAtY2FtZXJhLkNbMl1dLFxuICAgICAgICBbMCwgMCwgMCwgMV1cbiAgICBdO1xuICAgIGNvbnN0IFIgPSBbXG4gICAgICAgIFtjYW1lcmEuVVswXSwgY2FtZXJhLlVbMV0sIGNhbWVyYS5VWzJdLCAwXSxcbiAgICAgICAgW2NhbWVyYS5WWzBdLCBjYW1lcmEuVlsxXSwgY2FtZXJhLlZbMl0sIDBdLFxuICAgICAgICBbY2FtZXJhLk5bMF0sIGNhbWVyYS5OWzFdLCBjYW1lcmEuTlsyXSwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAxXVxuICAgIF07XG4gICAgY29uc3QgUlQgPSBtYXRyaXhNdWx0aXBseShSLCBUKTtcbiAgICByZXR1cm4gUlQ7XG59O1xuY29uc3QgcGVyc3BlY3RpdmVUcmFucyA9ICgpID0+IHtcbiAgICBjb25zdCBhID0gY2FtZXJhLmYgLyAoY2FtZXJhLmYgLSBjYW1lcmEuZCk7XG4gICAgY29uc3QgYiA9IGNhbWVyYS5kIC8gY2FtZXJhLmg7XG4gICAgY29uc3QgbVBlcnMgPSBbXG4gICAgICAgIFtiLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIGIsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgYSwgLWEgKiBjYW1lcmEuZF0sXG4gICAgICAgIFswLCAwLCAxLCAwXVxuICAgIF07XG4gICAgcmV0dXJuIG1QZXJzO1xufTtcbi8qKlxuICogQmFjay1mYWNlIGN1bGxpbmdcbiAqIFZpc2libGUgaWYgTnAgZG90IHByb2R1Y3QgTiA+IDBcbiAqIE5vdGU6IFNvbWUgdGhlIHBvbHlnb25zIGFyZSBkZW5vdGVkIGluIGFudGktY2xvY2t3aXNlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBiYWNrRmFjZUN1bGxpbmcgPSAoKSA9PiB7XG4gICAgcmVzdWx0LmJhY2tGYWNlU2V0ID0gbmV3IFNldCgpO1xuICAgIG1vZGVsLmZhY2VzLmZvckVhY2goKHgsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh2ZWN0b3IzZERvdFByb2R1Y3QodmVjdG9yM2RDcm9zc1Byb2R1Y3QodmVjdG9yU3VidHJhY3QobW9kZWwucG9pbnRzW3hbMF1dLCBtb2RlbC5wb2ludHNbeFsxXV0pLCB2ZWN0b3JTdWJ0cmFjdChtb2RlbC5wb2ludHNbeFsxXV0sIG1vZGVsLnBvaW50c1t4WzJdXSkpLCB2ZWN0b3JTdWJ0cmFjdChjYW1lcmEuQywgbW9kZWwucG9pbnRzW3hbMF1dKSkgPj0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LmJhY2tGYWNlU2V0LmFkZChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG4vLyBDYWxjdWxhdGUgbW9kZWxcbmV4cG9ydCBjb25zdCBjYWxjTW9kZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tYm8gPSBtYXRyaXhNdWx0aXBseShwZXJzcGVjdGl2ZVRyYW5zKCksIHdvcmxkMkNhbWVyYSgpKTtcbiAgICByZXR1cm4gbW9kZWwucG9pbnRzLm1hcChwb2ludCA9PiB7XG4gICAgICAgIGxldCB0ID0gbWF0cml4TXVsdGlwbHlWZWN0b3IoY29tYm8sIHZlY3RvckV4dGVuZChwb2ludCkpO1xuICAgICAgICByZXR1cm4gdmVjdG9yQ29sbGFwc2UodCk7XG4gICAgfSk7XG59O1xuIiwiLyoqXG4gKiBJbmNyZWFzaW5nIHZlY3RvciB3aXRoIG9uZSBkaW1lbnNpb25cbiAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IHZlY3RvckV4dGVuZCA9ICh2ZWN0b3IpID0+IHtcbiAgICByZXR1cm4gWy4uLnZlY3RvciwgMV07XG59O1xuZXhwb3J0IGNvbnN0IHZlY3RvckNvbGxhcHNlID0gKHZlY3RvcikgPT4ge1xuICAgIGxldCB2ZWMgPSBBcnJheS5mcm9tKHZlY3Rvcik7XG4gICAgbGV0IHQgPSB2ZWMucG9wKCk7XG4gICAgcmV0dXJuIHZlYy5tYXAoKGl0ZW0pID0+IGl0ZW0gLyB0KTtcbn07XG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSB2ZWN0b3JcbiAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IHZlY3RvckFicyA9ICh2ZWN0b3IpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHZlY3Rvci5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmUgKyBjdXIgKiBjdXI7XG4gICAgfSwgMCkpO1xufTtcbi8qKlxuICogQWRkIHR3byB2ZWN0b3JcbiAqIEBwYXJhbSB7VmVjdG9yfSB2ZWMxXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjMlxuICovXG5leHBvcnQgY29uc3QgdmVjdG9yQWRkID0gKHZlYzEsIHZlYzIpID0+IHtcbiAgICBpZiAodmVjMS5sZW5ndGggIT09IHZlYzIubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2ZWN0b3IgYWRkaXRpb24nKTtcbiAgICB9XG4gICAgcmV0dXJuIHZlYzEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlICsgdmVjMltpbmRleF0pO1xufTtcbi8qKlxuICogU3Vic3RyYWN0IHZlY3RvclxuICogQHBhcmFtIHtWZWN0b3J9IHZlYzFcbiAqIEBwYXJhbSB7VmVjdG9yfSB2ZWMyXG4gKi9cbmV4cG9ydCBjb25zdCB2ZWN0b3JTdWJ0cmFjdCA9ICh2ZWMxLCB2ZWMyKSA9PiB7XG4gICAgaWYgKHZlYzEubGVuZ3RoICE9PSB2ZWMyLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmVjdG9yIHN1YnN0cmFjdGlvbicpO1xuICAgIH1cbiAgICByZXR1cm4gdmVjMS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgLSB2ZWMyW2luZGV4XSk7XG59O1xuLyoqXG4gKiBTY2FsZSB2ZWN0b3JcbiAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKi9cbmV4cG9ydCBjb25zdCB2ZWN0b3JTY2FsZSA9ICh2ZWN0b3IsIG4pID0+IHtcbiAgICByZXR1cm4gdmVjdG9yLm1hcChpID0+IGkgKiBuKTtcbn07XG4vKipcbiAqIEdldCBhIHVuaXQgb2YgdGhlIHZlY3RvclxuICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvclxuICovXG5leHBvcnQgY29uc3QgdmVjdG9yVW5pdCA9ICh2ZWN0b3IpID0+IHtcbiAgICByZXR1cm4gdmVjdG9yU2NhbGUodmVjdG9yLCAxIC8gdmVjdG9yQWJzKHZlY3RvcikpO1xufTtcbi8qKlxuICogQ3Jvc3MgUHJvdWRjdCBvZiB0d28gM2QgdmVjdG9yXG4gKiBAcGFyYW0geyp9IHZlYzFcbiAqIEBwYXJhbSB7Kn0gdmVjMlxuICovXG5leHBvcnQgY29uc3QgdmVjdG9yM2RDcm9zc1Byb2R1Y3QgPSAodmVjMSwgdmVjMikgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICAgIHZlYzFbMV0gKiB2ZWMyWzJdIC0gdmVjMlsxXSAqIHZlYzFbMl0sXG4gICAgICAgIC0odmVjMVswXSAqIHZlYzJbMl0gLSB2ZWMyWzBdICogdmVjMVsyXSksXG4gICAgICAgIHZlYzFbMF0gKiB2ZWMyWzFdIC0gdmVjMlswXSAqIHZlYzFbMV1cbiAgICBdO1xufTtcbmV4cG9ydCBjb25zdCB2ZWN0b3IzZERvdFByb2R1Y3QgPSAodmVjMSwgdmVjMikgPT4ge1xuICAgIHJldHVybiB2ZWMxWzBdICogdmVjMlswXSArIHZlYzFbMV0gKiB2ZWMyWzFdICsgdmVjMVsyXSAqIHZlYzJbMl07XG59O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqIERPTSBPUEVSQVRJT04gKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgY2FtZXJhLCB7IGNhbWVyYUluaXQgfSBmcm9tICcuLi9jb25maWdzL2NhbWVyYSc7XG5pbXBvcnQgeyBmaWxlcyB9IGZyb20gJy4uL2NvbmZpZ3MvY29uc3RhbnRzJztcbmltcG9ydCB7IHZlY3RvckFkZCwgdmVjdG9yU2NhbGUgfSBmcm9tICcuLi9vcGVyYXRlL3ZlY3Rvcic7XG4vKipcbiAqIExvYWQgbWVudVxuICovXG5leHBvcnQgY29uc3QgbG9hZE1lbnUgPSAoc2VsZWN0RE9NKSA9PiB7XG4gICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBmaWxlKTtcbiAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZpbGUpKTtcbiAgICAgICAgc2VsZWN0RE9NLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBCaW5kIHRoZSB2YWx1ZSBvZiBzbGlkZXIgd2l0aCBjYW1lcmEgc2V0dGluZ1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRTbGlkZXIgPSAobmFtZSwgZHJhdykgPT4ge1xuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25hbWV9YCk7XG4gICAgY29uc3Qgc2xpZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25hbWV9X1ZgKTtcbiAgICBzbGlkZXIudmFsdWUgPSBjYW1lcmFbbmFtZV07XG4gICAgc2xpZGVyVGV4dC5pbm5lckhUTUwgPSBjYW1lcmFbbmFtZV07XG4gICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FtZXJhW25hbWVdID0gdGhpcy52YWx1ZTtcbiAgICAgICAgc2xpZGVyVGV4dC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBjYW1lcmEucFJlZlswXSAtPSAxMDtcbiAgICAgICAgZHJhdygpO1xuICAgIH0pO1xufTtcbi8qKlxuICogQmluZCBvcGVyYXRpb24gdG8gY29udHJvbCB0aGUgZmluYWwgZWZmZWN0XG4gKi9cbmNvbnN0IG9iamVjdExlbiA9IDE7XG5jb25zdCBjYW1lcmFMZW4gPSAyO1xuZXhwb3J0IGNvbnN0IHJlYWN0VG9PcGVyYXRpb24gPSAoY2FudmFzLCBkcmF3KSA9PiB7XG4gICAgLy8gem9vbWluZyB0aGUgbW9kZWxcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLndoZWVsRGVsdGEgPiAwKSB7XG4gICAgICAgICAgICBjYW1lcmEuQyA9IHZlY3RvclNjYWxlKGNhbWVyYS5DLCA2IC8gNSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW1lcmEuQyA9IHZlY3RvclNjYWxlKGNhbWVyYS5DLCA1IC8gNik7XG4gICAgICAgIH1cbiAgICAgICAgZHJhdygpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAgY2FtZXJhLkMgPSB2ZWN0b3JBZGQoY2FtZXJhLkMsIHZlY3RvclNjYWxlKGNhbWVyYS5WLCAtb2JqZWN0TGVuKSk7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgY2FtZXJhLkMgPSB2ZWN0b3JBZGQoY2FtZXJhLkMsIHZlY3RvclNjYWxlKGNhbWVyYS5WLCBvYmplY3RMZW4pKTtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEuQyA9IHZlY3RvckFkZChjYW1lcmEuQywgdmVjdG9yU2NhbGUoY2FtZXJhLlUsIG9iamVjdExlbikpO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5DID0gdmVjdG9yQWRkKGNhbWVyYS5DLCB2ZWN0b3JTY2FsZShjYW1lcmEuVSwgLW9iamVjdExlbikpO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2knOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5DWzFdIC09IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBjYW1lcmFJbml0KCk7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnayc6XG4gICAgICAgICAgICAgICAgY2FtZXJhLkNbMV0gKz0gY2FtZXJhTGVuO1xuICAgICAgICAgICAgICAgIGNhbWVyYUluaXQoKTtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdqJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEuQ1swXSArPSBjYW1lcmFMZW47XG4gICAgICAgICAgICAgICAgY2FtZXJhSW5pdCgpO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5DWzBdIC09IGNhbWVyYUxlbjtcbiAgICAgICAgICAgICAgICBjYW1lcmFJbml0KCk7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbiIsImltcG9ydCByZXN1bHQgZnJvbSAnLi4vY29uZmlncy9yZXN1bHQnO1xuaW1wb3J0IHsgY2FsY01vZGVsLCBiYWNrRmFjZUN1bGxpbmcgfSBmcm9tICcuLi9vcGVyYXRlL3RyYW5zZm9ybSc7XG5pbXBvcnQgc2NhbkNvbnZlcnNpb24sIHsgYnVmZmVySW5pdCB9IGZyb20gJy4vZmlsbFBpeGVsJztcbi8qKlxuICogRHJhdyBtb2RlbCBvbiB0aGUgY2FudmFzXG4gKiBAcGFyYW0ge0NhbnZhcyBjb250ZXh0fSBjdHhcbiAqIEBwYXJhbSB7Q2FudmFzJyB3aWR0aH0gd2lkdGhcbiAqIEBwYXJhbSB7Q2FudmFzJyBoZWlnaHR9IGhlaWdodFxuICovXG5jb25zdCBkcmF3ID0gKGN0eCwgd2lkdGgsIGhlaWdodCkgPT4gKCkgPT4ge1xuICAgIC8vIGJhY2sgZmFjZSBjdWxsaW5nLCBzYXZlIGl0IHRvIG1vZGVsIG9iamVjdFxuICAgIGJhY2tGYWNlQ3VsbGluZygpO1xuICAgIC8vIHRyYW5zZm9ybSBwb2ludHMgZnJvbSB2aXJ0dWFsIHdvcmxkIHRvIDJkIHNjcmVlblxuICAgIHJlc3VsdC5jYWxjUG9pbnRzID0gY2FsY01vZGVsKCk7XG4gICAgLy8gei1idWZmZXIgYWxnb3JpdGhtXG4gICAgYnVmZmVySW5pdCgpO1xuICAgIHNjYW5Db252ZXJzaW9uKCk7XG4gICAgLy8gZHJhdyBpbWFnZVxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgY29uc3QgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5oZWlnaHQ7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdC53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gaSAqIHJlc3VsdC53aWR0aCArIGo7XG4gICAgICAgICAgICAvLyByIGcgYiBhXG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgMF0gPSByZXN1bHQucGl4ZWxCdWZmZXJbaV1bal1bMF07XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgMV0gPSByZXN1bHQucGl4ZWxCdWZmZXJbaV1bal1bMV07XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgMl0gPSByZXN1bHQucGl4ZWxCdWZmZXJbaV1bal1bMl07XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgM10gPSAyNTU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW1hZ2VEYXRhLmRhdGEuc2V0KGRhdGEpO1xuICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcbn07XG5leHBvcnQgZGVmYXVsdCBkcmF3O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqIEZJTEwgUElYRUxTICoqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IG1vZGVsIGZyb20gJy4uL2NvbmZpZ3MvbW9kZWwnO1xuaW1wb3J0IHJlc3VsdCBmcm9tICcuLi9jb25maWdzL3Jlc3VsdCc7XG5pbXBvcnQgeyBFZGdlVGFibGVFbGVtZW50IH0gZnJvbSAnLi4vb2JqL0VkZ2VUYWJsZUVsZW1lbnQnO1xuLy8gZ2V0IGEgcmFuZG9tIGludGVnZXIgaW4gWzAsIDI1NV1cbmNvbnN0IHJhbmRvbSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XG4vLyBjb252ZXJ0IDJkIHBvaW50IHRvIGNhbnZhcyBwb2ludFxuY29uc3QgdG9QaXhlbCA9ICh2YWx1ZSwgc2hvcnR0ZW4gPSBmYWxzZSkgPT4gTWF0aC5mbG9vcigodmFsdWUgKyAxKSAqIHJlc3VsdC5oZWlnaHQgLyAyKSAtIChzaG9ydHRlbiA/IDEgOiAwKTtcbmNvbnN0IHRvRmxvYXRQaXhlbCA9ICh2YWx1ZSkgPT4gKHZhbHVlICsgMSkgKiByZXN1bHQuaGVpZ2h0IC8gMjtcbi8vIHJlc2V0IHBpeGVsIGJ1ZmZlciBhbmQgeiBidWZmZXJcbmNvbnN0IGJ1ZmZlclJlc2V0ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0LmhlaWdodDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5waXhlbEJ1ZmZlcltpXSA9IFtdO1xuICAgICAgICByZXN1bHQuekJ1ZmZlcltpXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdC53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICByZXN1bHQucGl4ZWxCdWZmZXJbaV1bal0gPSBbMCwgMCwgMF07XG4gICAgICAgICAgICByZXN1bHQuekJ1ZmZlcltpXVtqXSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gcmVzZXQgZWRnZSB0YWJsZVxuY29uc3QgZWRnZVRhYmxlUmVzZXQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgcmVzdWx0LmVkZ2VUYWJsZVtpXSA9IFtdO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgYnVmZmVySW5pdCA9ICgpID0+IHtcbiAgICBidWZmZXJSZXNldCgpO1xuICAgIC8vIGdpdmUgcmFuZG9tIGNvbG9yIHRvIGVhY2ggZmFjZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWwuZmFjZXNOdW07IGkrKykge1xuICAgICAgICByZXN1bHQuZmFjZV9jb2xvcl9yX2J1ZmZlci5wdXNoKHJhbmRvbSgpKTtcbiAgICAgICAgcmVzdWx0LmZhY2VfY29sb3JfZ19idWZmZXIucHVzaChyYW5kb20oKSk7XG4gICAgICAgIHJlc3VsdC5mYWNlX2NvbG9yX2JfYnVmZmVyLnB1c2gocmFuZG9tKCkpO1xuICAgIH1cbn07XG4vKipcbiAqIFNjYW4gQ29udmVyc2lvblxuICogMS4gZm9yIGVhY2ggc2NhbiBsaW5lLCBkZXRlcm1pbmUgZWRnZXMgb2YgcG9seWdvbnMgdGhhdCBpbnRlcnNlY3RcbiAqIDIuIEZpbmQgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNwYW5cbiAqIDMuIFJlbHkgb24gc2NhbmxpbmUgYW5kIHBpeGVsIGNvaGVyZW5jZSB0byBsaW5lYXJseSBpbnRlcnBvbGF0ZSAoYmV0d2VlbiBzY2FubGluZXMgYW5kIGJldHdlZW4gcGl4ZWxzKVxuICovXG5jb25zdCBhZGRFZGdlVG9FVCA9IChsb3dlclBvaW50LCB1cHBlclBvaW50KSA9PiB7XG4gICAgLy8gaWdub3JlIGhvcml6b250YWwgZWRnZSBhbmQgb3V0IG9mIHJhbmdlIHBvaW50XG4gICAgaWYgKHRvUGl4ZWwobG93ZXJQb2ludFsxXSkgPT09IHRvUGl4ZWwodXBwZXJQb2ludFsxXSlcbiAgICAgICAgfHwgbG93ZXJQb2ludFsxXSA+IDEgfHwgbG93ZXJQb2ludFsxXSA8IC0xKVxuICAgICAgICByZXR1cm47XG4gICAgLy8gc3dhcCB0aGUgb3JkZXIgb2YgdHdvIHBvaW50c1xuICAgIGlmIChsb3dlclBvaW50WzFdID4gdXBwZXJQb2ludFsxXSkge1xuICAgICAgICBbbG93ZXJQb2ludCwgdXBwZXJQb2ludF0gPSBbdXBwZXJQb2ludCwgbG93ZXJQb2ludF07XG4gICAgfVxuICAgIC8vIGNyZWF0ZSBlZGdlIHRhYmxlIGVsZW1lbnQgYW5kIGFkZCBpdCBpbnRvIHRoZSBlZGdlIHRhYmxlXG4gICAgY29uc3QgRVRFbGVtZW50ID0gbmV3IEVkZ2VUYWJsZUVsZW1lbnQodG9QaXhlbChsb3dlclBvaW50WzFdKSwgdG9QaXhlbCh1cHBlclBvaW50WzFdLCB0cnVlKSwgdG9GbG9hdFBpeGVsKGxvd2VyUG9pbnRbMF0pLCAobG93ZXJQb2ludFswXSAtIHVwcGVyUG9pbnRbMF0pIC8gKGxvd2VyUG9pbnRbMV0gLSB1cHBlclBvaW50WzFdKSwgdXBwZXJQb2ludFsyXSwgbG93ZXJQb2ludFsyXSk7XG4gICAgaWYgKEVURWxlbWVudC55U3RhcnQgPiBFVEVsZW1lbnQueU1heCkge1xuICAgICAgICBFVEVsZW1lbnQueU1heCA9IEVURWxlbWVudC55U3RhcnQ7XG4gICAgfVxuICAgIHJlc3VsdC5lZGdlVGFibGVbTWF0aC5mbG9vcihFVEVsZW1lbnQueVN0YXJ0KV0ucHVzaChFVEVsZW1lbnQpO1xufTtcbi8vIENhbGN1bGF0aW9uIG9mIHpcbmNvbnN0IGNhbGNaID0gKGVkZ2UsIHlzKSA9PiBlZGdlLnlNYXggPT09IGVkZ2UueVN0YXJ0ID8gZWRnZS56VXBwZXIgOlxuICAgIGVkZ2UuelVwcGVyIC0gKGVkZ2UuelVwcGVyIC0gZWRnZS56TG93ZXIpICogKGVkZ2UueU1heCAtIHlzKSAvIChlZGdlLnlNYXggLSBlZGdlLnlTdGFydCk7XG5jb25zdCBzY2FuQ29udmVyc2lvbiA9ICgpID0+IHtcbiAgICBidWZmZXJSZXNldCgpO1xuICAgIC8vIGZvciBlYWNoIGZhY2VcbiAgICBtb2RlbC5mYWNlcy5mb3JFYWNoKChmYWNlLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBkb24ndCBuZWVkIHRvIGNvbnNpZGVyIGJhY2sgZmFjZVxuICAgICAgICBpZiAocmVzdWx0LmJhY2tGYWNlU2V0LmhhcyhpbmRleCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGJ1aWxkIGVkZ2UgdGFibGVcbiAgICAgICAgZWRnZVRhYmxlUmVzZXQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgYW4gZWRnZSBcbiAgICAgICAgICAgIGxldCBsb3dlclBvaW50ID0gcmVzdWx0LmNhbGNQb2ludHNbZmFjZVtpXV07XG4gICAgICAgICAgICBsZXQgdXBwZXJQb2ludCA9IHJlc3VsdC5jYWxjUG9pbnRzW2ZhY2VbKGkgKyAxKSAlIGZhY2UubGVuZ3RoXV07XG4gICAgICAgICAgICBhZGRFZGdlVG9FVChsb3dlclBvaW50LCB1cHBlclBvaW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWxsIHBpeGVsIHRvIHBpeGVsIGJ1ZmZlclxuICAgICAgICBsZXQgY3VycmVudFNjYW5MaW5lID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZWRnZVRhYmxlW2ldLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2NhbkxpbmUgPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50U2NhbkxpbmU7IGkgPCByZXN1bHQuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1vdmUgZWRnZSBmcm9tIEVkZ2UgVGFiZWwgdG8gQWN0aXZlIEVkZ2UgVGFibGVcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0LmVkZ2VUYWJsZVtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5hY3RpdmVFZGdlVGFibGUucHVzaChyZXN1bHQuZWRnZVRhYmxlW2ldW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5hY3RpdmVFZGdlVGFibGUuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnhTdGFydCAtIGIueFN0YXJ0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiArIDEgPCByZXN1bHQuYWN0aXZlRWRnZVRhYmxlLmxlbmd0aDsgaiArPSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IFtyZXN1bHQuYWN0aXZlRWRnZVRhYmxlW2pdLCByZXN1bHQuYWN0aXZlRWRnZVRhYmxlW2ogKyAxXV07XG4gICAgICAgICAgICAgICAgaWYgKGxlZnQueFN0YXJ0ID4gcmlnaHQueFN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBbemEsIHpiXSA9IFtjYWxjWihsZWZ0LCBpKSwgY2FsY1oocmlnaHQsIGkpXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihsZWZ0LnhTdGFydCkpOyBrIDwgTWF0aC5mbG9vcihyaWdodC54U3RhcnQpICYmIGsgPCByZXN1bHQud2lkdGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGN1cnJlbnQgcG9pbnQncyB6IGNvb3JkaW5hdGVcbiAgICAgICAgICAgICAgICAgICAgbGV0IHpwID0gayA9PSBNYXRoLm1heCgwLCBsZWZ0LnhTdGFydCkgPyB6YSA6IHpiIC0gKHpiIC0gemEpICogKHJpZ2h0LnhTdGFydCAtIGspIC8gKHJpZ2h0LnhTdGFydCAtIGxlZnQueFN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHpwID4gcmVzdWx0LnpCdWZmZXJbaV1ba10pXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnpCdWZmZXJbaV1ba10gPSB6cDtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnBpeGVsQnVmZmVyW2ldW2tdID0gW3Jlc3VsdC5mYWNlX2NvbG9yX3JfYnVmZmVyW2luZGV4XSwgcmVzdWx0LmZhY2VfY29sb3JfZ19idWZmZXJbaW5kZXhdLCByZXN1bHQuZmFjZV9jb2xvcl9iX2J1ZmZlcltpbmRleF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5hY3RpdmVFZGdlVGFibGUgPSByZXN1bHQuYWN0aXZlRWRnZVRhYmxlXG4gICAgICAgICAgICAgICAgLmZpbHRlcihlZGdlID0+IGVkZ2UueU1heCAhPT0gaSkgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBBY3RpdmUgRWRnZSBUYWJsZSB3aGlsZSB5ID0geU1heFxuICAgICAgICAgICAgICAgIC5tYXAoZWRnZSA9PiB7XG4gICAgICAgICAgICAgICAgZWRnZS54U3RhcnQgKz0gZWRnZS5kZWx0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWRnZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2NhbkNvbnZlcnNpb247XG4iLCJpbXBvcnQgbW9kZWwgZnJvbSAnLi4vY29uZmlncy9tb2RlbCc7XG4vKipcbiAqIFBhcnNlIHRoZSBkYXRhIGZyb20gdGhlIC5kIGZpbGVcbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICovXG5jb25zdCBwYXJzZUZpbGUgPSAoZGF0YSkgPT4ge1xuICAgIGxldCBsaW5lcyA9IGRhdGEubWF0Y2goL1teXFxyXFxuXSsvZyk7XG4gICAgbGV0IFtudW0sIHBvaW50c051bSwgZmFjZXNOdW1dID0gbGluZXNbMF0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgLy8gQ2F1c2UgaW4gc29tZSBmaWxlLCB0aGVyZSBhcmUganVzdCB0d28gbnVtYmVyIGluIGZpcnN0IGxpbmVcbiAgICBpZiAoZmFjZXNOdW0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZhY2VzTnVtID0gcG9pbnRzTnVtO1xuICAgICAgICBwb2ludHNOdW0gPSBudW07XG4gICAgfVxuICAgIC8vIGxvYWQgZGF0YSB0byBtb2RlbFxuICAgIG1vZGVsLnBvaW50c051bSA9IHBhcnNlSW50KHBvaW50c051bSwgMTApO1xuICAgIG1vZGVsLmZhY2VzTnVtID0gcGFyc2VJbnQoZmFjZXNOdW0sIDEwKTtcbiAgICAvLyBoZXJlIHdlIHJlZnJlc2ggdGhlIG9iamVjdCB3aGVuIGxvYWQgZGlmZmVyZW50IG1vZGVsXG4gICAgbW9kZWwucG9pbnRzID0gW107XG4gICAgbW9kZWwuZmFjZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtb2RlbC5wb2ludHNOdW07IGkrKykge1xuICAgICAgICBsZXQgW3gsIHksIHpdID0gbGluZXNbaV0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIG1vZGVsLnBvaW50cy5wdXNoKFtwYXJzZUZsb2F0KHgpLCBwYXJzZUZsb2F0KHkpLCBwYXJzZUZsb2F0KHopXSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBtb2RlbC5wb2ludHNOdW0gKyAxOyBpIDw9IG1vZGVsLnBvaW50c051bSArIG1vZGVsLmZhY2VzTnVtOyBpKyspIHtcbiAgICAgICAgbGV0IFtudW0sIC4uLnJlc10gPSBsaW5lc1tpXS50cmltKCkuc3BsaXQoL1xccysvKTtcbiAgICAgICAgaWYgKHJlcy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBtb2RlbC5mYWNlcy5wdXNoKHJlcy5tYXAoKHgpID0+IHBhcnNlSW50KHgpIC0gMSkpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogUmVhZCB0aGUgY29udGVudCBvZiBhIGZpbGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlUGF0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuY29uc3QgcmVhZEZpbGUgPSAoZmlsZVBhdGgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGZpbGVQYXRoLCB0cnVlKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXModGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH0pO1xufTtcbi8qKlxuICogTG9hZCBhbmQgcmVuZGVyIHNlbGVjdGVkIG1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZVBhdGhcbiAqL1xuY29uc3QgbG9hZEZpbGUgPSAoZmlsZVBhdGgsIGRyYXcpID0+IHtcbiAgICAvLyBsb2FkIG1vZGVsXG4gICAgcmVhZEZpbGUoZmlsZVBhdGgpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHBhcnNlRmlsZShkYXRhKTtcbiAgICAgICAgZHJhdygpO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkIG9yIHBhcnNlIGZpbGUgZXJyb3InKTtcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBsb2FkRmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=