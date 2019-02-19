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
/*! exports provided: Camera, Matrix, Vector3d, Vector4d */
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

/******************** ./cameras ********************/

/******************** ./math ********************/





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
    pointsNum: 0,
    points: [],
    facesNum: 0,
    faces: [],
    /******************** calculated model ********************/
    // A set used to save back face index
    backFaceSet: new Set(),
    // transformed point
    calcPoints: [],
    edgeTable: [],
    activeEdgeTable: [],
    // rending
    pixelBuffer: [],
    zBuffer: [],
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
drawCtx();


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
/* harmony import */ var _configs_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/parameters */ "./src/configs/parameters.ts");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/index */ "./lib/index.ts");


const world2Camera = () => {
    const camera = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].camera;
    const R = new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Matrix"]([
        [camera.U.x, camera.U.y, camera.U.z, 0],
        [camera.V.x, camera.V.y, camera.V.z, 0],
        [camera.N.x, camera.N.y, camera.N.z, 0],
        [0, 0, 0, 1]
    ]);
    const T = new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Matrix"]([
        [1, 0, 0, -camera.position.x],
        [0, 1, 0, -camera.position.y],
        [0, 0, 1, -camera.position.z],
        [0, 0, 0, 1]
    ]);
    return R.multiply(T);
};
const perspectiveTrans = () => {
    const a = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].f / (_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].f - _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].d);
    const b = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].d / _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].h;
    return new _lib_index__WEBPACK_IMPORTED_MODULE_1__["Matrix"]([
        [b, 0, 0, 0],
        [0, b, 0, 0],
        [0, 0, a, -a * _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].d],
        [0, 0, 1, 0]
    ]);
};
/**
 * Back-face culling
 * Visible if Np dot product N > 0
 * Note: Some the polygons are denoted in anti-clockwise order
 */
const backFaceCulling = () => {
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].backFaceSet = new Set();
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].faces.forEach((x, index) => {
        // if (vector3dDotProduct(vector3dCrossProduct(vectorSubtract(model.points[x[0]], model.points[x[1]]), vectorSubtract(model.points[x[1]], model.points[x[2]])), 
        //     vectorSubtract(camera.C, model.points[x[0]])) >= 0) {
        //   result.backFaceSet.add(index);
        // }
        const v1 = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].points[x[0]].subtract(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].points[x[1]]);
        const v2 = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].points[x[1]].subtract(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].points[x[2]]);
        const Np = v1.crossProduct(v2);
        const N = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].camera.position.subtract(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].points[x[0]]);
        if (Np.dotProduct(N) >= 0) {
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].backFaceSet.add(index);
        }
    });
};
// Calculate model
const calcModel = () => {
    const combo = perspectiveTrans().multiply(world2Camera());
    return _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].points.map(point => {
        return combo.multiply(point.extend().toMatrix()).toVector();
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
/* harmony import */ var _operate_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operate/transform */ "./src/operate/transform.ts");
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
    Object(_operate_transform__WEBPACK_IMPORTED_MODULE_1__["backFaceCulling"])();
    // transform points from virtual world to 2d screen
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].calcPoints = Object(_operate_transform__WEBPACK_IMPORTED_MODULE_1__["calcModel"])();
    // z-buffer algorithm
    Object(_fillPixel__WEBPACK_IMPORTED_MODULE_2__["bufferInit"])();
    Object(_fillPixel__WEBPACK_IMPORTED_MODULE_2__["default"])();
    // draw image
    ctx.clearRect(0, 0, width, height);
    const imageData = ctx.createImageData(width, height);
    const data = new Uint8Array(width * height * 4);
    for (let i = 0; i < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height; i++) {
        for (let j = 0; j < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].width; j++) {
            const t = i * _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].width + j;
            // r g b a
            data[t * 4 + 0] = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pixelBuffer[i][j][0];
            data[t * 4 + 1] = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pixelBuffer[i][j][1];
            data[t * 4 + 2] = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pixelBuffer[i][j][2];
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
/* harmony import */ var _configs_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/parameters */ "./src/configs/parameters.ts");
/* harmony import */ var _obj_EdgeTableElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../obj/EdgeTableElement */ "./src/obj/EdgeTableElement.ts");
/******************** FILL PIXELS ********************/


// get a random integer in [0, 255]
const random = () => Math.floor(Math.random() * 256);
// convert 2d point to canvas point
const toPixel = (value, shortten = false) => Math.floor((value + 1) * _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height / 2) - (shortten ? 1 : 0);
const toFloatPixel = (value) => (value + 1) * _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height / 2;
// reset pixel buffer and z buffer
const bufferReset = () => {
    for (let i = 0; i < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height; i++) {
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pixelBuffer[i] = [];
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].zBuffer[i] = [];
        for (let j = 0; j < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].width; j++) {
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pixelBuffer[i][j] = [0, 0, 0];
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].zBuffer[i][j] = 1;
        }
    }
};
// reset edge table
const edgeTableReset = () => {
    for (let i = 0; i < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height; i++) {
        _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].edgeTable[i] = [];
    }
};
const bufferInit = () => {
    bufferReset();
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
const addEdgeToET = (lowerPoint, upperPoint) => {
    // ignore horizontal edge and out of range point
    if (toPixel(lowerPoint.y) === toPixel(upperPoint.y)
        || lowerPoint.y > 1 || lowerPoint.y < -1)
        return;
    // swap the order of two points
    if (lowerPoint.y > upperPoint.y) {
        [lowerPoint, upperPoint] = [upperPoint, lowerPoint];
    }
    // create edge table element and add it into the edge table
    const ETElement = new _obj_EdgeTableElement__WEBPACK_IMPORTED_MODULE_1__["EdgeTableElement"](toPixel(lowerPoint.y), toPixel(upperPoint.y, true), toFloatPixel(lowerPoint.x), (lowerPoint.x - upperPoint.x) / (lowerPoint.y - upperPoint.y), upperPoint.z, lowerPoint.z);
    if (ETElement.yStart > ETElement.yMax) {
        ETElement.yMax = ETElement.yStart;
    }
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].edgeTable[Math.floor(ETElement.yStart)].push(ETElement);
};
// Calculation of z
const calcZ = (edge, ys) => edge.yMax === edge.yStart ? edge.zUpper :
    edge.zUpper - (edge.zUpper - edge.zLower) * (edge.yMax - ys) / (edge.yMax - edge.yStart);
const scanConversion = () => {
    bufferReset();
    // for each face
    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].faces.forEach((face, index) => {
        // don't need to consider back face
        if (_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].backFaceSet.has(index))
            return;
        // build edge table
        edgeTableReset();
        for (let i = 0; i < face.length; i++) {
            // get an edge 
            let lowerPoint = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].calcPoints[face[i]];
            let upperPoint = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].calcPoints[face[(i + 1) % face.length]];
            addEdgeToET(lowerPoint, upperPoint);
        }
        // fill pixel to pixel buffer
        let currentScanLine = 0;
        for (let i = 0; i < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height; i++) {
            if (_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].edgeTable[i].length > 0) {
                currentScanLine = i;
                break;
            }
        }
        for (let i = currentScanLine; i < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].height; i++) {
            // move edge from Edge Tabel to Active Edge Table
            for (let j = 0; j < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].edgeTable[i].length; j++) {
                _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].activeEdgeTable.push(_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].edgeTable[i][j]);
            }
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].activeEdgeTable.sort((a, b) => {
                return a.xStart - b.xStart;
            });
            for (let j = 0; j + 1 < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].activeEdgeTable.length; j += 2) {
                const [left, right] = [_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].activeEdgeTable[j], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].activeEdgeTable[j + 1]];
                if (left.xStart > right.xStart)
                    continue;
                const [za, zb] = [calcZ(left, i), calcZ(right, i)];
                for (let k = Math.max(0, Math.floor(left.xStart)); k < Math.floor(right.xStart) && k < _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].width; k++) {
                    // calculate the current point's z coordinate
                    let zp = k == Math.max(0, left.xStart) ? za : zb - (zb - za) * (right.xStart - k) / (right.xStart - left.xStart);
                    if (zp > _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].zBuffer[i][k])
                        continue;
                    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].zBuffer[i][k] = zp;
                    _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].pixelBuffer[i][k] = [_configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].face_color_r_buffer[index], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].face_color_g_buffer[index], _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].face_color_b_buffer[index]];
                }
            }
            _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].activeEdgeTable = _configs_parameters__WEBPACK_IMPORTED_MODULE_0__["parameters"].activeEdgeTable
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NhbWVyYXMvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvbWF0aC9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL21hdGgvVmVjdG9yM2QudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL21hdGgvVmVjdG9yNGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3MvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWdzL3BhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9vYmovRWRnZVRhYmxlRWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3BlcmF0ZS90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RvbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZHJhdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZmlsbFBpeGVsLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9sb2FkRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlD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QUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiY2xhc3MgQ2FtZXJhIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgVVApIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLlVQID0gVVA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGNhbGN1bGF0ZSB0aGUgTiwgVSwgViB2ZWN0b3Igb2YgdGhlIGNhbWVyYVxuICAgICAqIEBwYXJhbSBvYmplY3RQb3NpdGlvblxuICAgICAqL1xuICAgIGNhbGNOVVYob2JqZWN0UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5OID0gb2JqZWN0UG9zaXRpb24uc3VidHJhY3QodGhpcy5wb3NpdGlvbikudW5pdCgpO1xuICAgICAgICB0aGlzLlUgPSB0aGlzLk4uY3Jvc3NQcm9kdWN0KHRoaXMuVVApLnVuaXQoKTtcbiAgICAgICAgdGhpcy5WID0gdGhpcy5VLmNyb3NzUHJvZHVjdCh0aGlzLk4pO1xuICAgIH1cbn1cbmV4cG9ydCB7IENhbWVyYSB9O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqIC4vY2FtZXJhcyAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IENhbWVyYSB9IGZyb20gJy4vY2FtZXJhcy9DYW1lcmEnO1xuLyoqKioqKioqKioqKioqKioqKioqIC4vbWF0aCAqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCB7IE1hdHJpeCB9IGZyb20gJy4vbWF0aC9NYXRyaXgnO1xuZXhwb3J0IHsgVmVjdG9yM2QgfSBmcm9tICcuL21hdGgvVmVjdG9yM2QnO1xuZXhwb3J0IHsgVmVjdG9yNGQgfSBmcm9tICcuL21hdGgvVmVjdG9yNGQnO1xuIiwiaW1wb3J0IHsgVmVjdG9yNGQgfSBmcm9tICcuL1ZlY3RvcjRkJztcbmNsYXNzIE1hdHJpeCB7XG4gICAgY29uc3RydWN0b3IodmFsdWVzT3JNLCBuKSB7XG4gICAgICAgIGlmICh2YWx1ZXNPck0gIT09IHVuZGVmaW5lZCAmJiBuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlc09yTTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMucHVzaChBcnJheS5mcm9tKHsgbGVuZ3RoOiBuIH0sIF8gPT4gMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlc09yTSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlc09yTTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogbXVsdGlwbHkgd2l0aCBvdGhlciBtYXRyaXgsIHJldHVybiBhIG5ldyBtYXRyaXhcbiAgICAgKiBAcGFyYW0gb3RoZXJcbiAgICAgKi9cbiAgICBtdWx0aXBseShvdGhlcikge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXNbMF0ubGVuZ3RoICE9PSBvdGhlci52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBtdWx0aXBseSB0aGVzZSB0d28gbWF0cmljZXMhJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbSA9IHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbiA9IG90aGVyLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGsgPSBvdGhlci52YWx1ZXNbMF0ubGVuZ3RoO1xuICAgICAgICAvLyBtdWx0aXBseVxuICAgICAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG0sIGspO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IG47IHQrKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdNYXRyaXgudmFsdWVzW2ldW2pdICs9IHRoaXMudmFsdWVzW2ldW3RdICogb3RoZXIudmFsdWVzW3RdW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xuICAgIH1cbiAgICA7XG4gICAgdG9WZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHZlY3RvciA9IG5ldyBWZWN0b3I0ZCh0aGlzLnZhbHVlc1swXVswXSwgdGhpcy52YWx1ZXNbMV1bMF0sIHRoaXMudmFsdWVzWzJdWzBdLCB0aGlzLnZhbHVlc1szXVswXSk7XG4gICAgICAgIHJldHVybiB2ZWN0b3IuY29sbGFwc2UoKTtcbiAgICB9XG59XG5leHBvcnQgeyBNYXRyaXggfTtcbiIsImltcG9ydCB7IFZlY3RvcjRkIH0gZnJvbSBcIi4vVmVjdG9yNGRcIjtcbmNsYXNzIFZlY3RvcjNkIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMueiA9IHo7XG4gICAgfVxuICAgIGV4dGVuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0ZCh0aGlzLngsIHRoaXMueSwgdGhpcy56LCAxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZ2V0IHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiB0aGUgdmVjdG9yXG4gICAgICovXG4gICAgYWJzKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueik7XG4gICAgfVxuICAgIGFkZChvdGhlcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCArIG90aGVyLngsIHRoaXMueSArIG90aGVyLnksIHRoaXMueiArIG90aGVyLnopO1xuICAgIH1cbiAgICBzdWJ0cmFjdChvdGhlcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCAtIG90aGVyLngsIHRoaXMueSAtIG90aGVyLnksIHRoaXMueiAtIG90aGVyLnopO1xuICAgIH1cbiAgICBzY2FsZShuKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yM2QodGhpcy54ICogbiwgdGhpcy55ICogbiwgdGhpcy56ICogbik7XG4gICAgfVxuICAgIHVuaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlKDEgLyB0aGlzLmFicygpKTtcbiAgICB9XG4gICAgY3Jvc3NQcm9kdWN0KG90aGVyKSB7XG4gICAgICAgIC8vIHJldHVybiBbXG4gICAgICAgIC8vICAgdmVjMVsxXSAqIHZlYzJbMl0gLSB2ZWMyWzFdICogdmVjMVsyXSxcbiAgICAgICAgLy8gICAtKHZlYzFbMF0gKiB2ZWMyWzJdIC0gdmVjMlswXSAqIHZlYzFbMl0pLFxuICAgICAgICAvLyAgIHZlYzFbMF0gKiB2ZWMyWzFdIC0gdmVjMlswXSAqIHZlYzFbMV1cbiAgICAgICAgLy8gXTtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzZCh0aGlzLnkgKiBvdGhlci56IC0gb3RoZXIueSAqIHRoaXMueiwgLSh0aGlzLnggKiBvdGhlci56IC0gb3RoZXIueCAqIHRoaXMueiksIHRoaXMueCAqIG90aGVyLnkgLSBvdGhlci54ICogdGhpcy55KTtcbiAgICB9XG4gICAgZG90UHJvZHVjdChvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogb3RoZXIueCArIHRoaXMueSAqIG90aGVyLnkgKyB0aGlzLnogKiBvdGhlci56O1xuICAgIH1cbn1cbmV4cG9ydCB7IFZlY3RvcjNkIH07XG4iLCJpbXBvcnQgeyBWZWN0b3IzZCB9IGZyb20gJy4vVmVjdG9yM2QnO1xuaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnLi9NYXRyaXgnO1xuY2xhc3MgVmVjdG9yNGQge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHosIHcpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy56ID0gejtcbiAgICAgICAgdGhpcy53ID0gdztcbiAgICB9XG4gICAgY29sbGFwc2UoKSB7XG4gICAgICAgIGxldCB0ID0gdGhpcy53O1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjNkKHRoaXMueCAvIHQsIHRoaXMueSAvIHQsIHRoaXMueiAvIHQpO1xuICAgIH1cbiAgICB0b01hdHJpeCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoW1xuICAgICAgICAgICAgW3RoaXMueF0sXG4gICAgICAgICAgICBbdGhpcy55XSxcbiAgICAgICAgICAgIFt0aGlzLnpdLFxuICAgICAgICAgICAgW3RoaXMud11cbiAgICAgICAgXSk7XG4gICAgfVxufVxuZXhwb3J0IHsgVmVjdG9yNGQgfTtcbiIsIi8vIGRhdGEgZmlsZXMgdG8gYmUgbG9hZGVkXG5jb25zdCBmaWxlcyA9IFtcbiAgICAnYXRjJyxcbiAgICAnYmFsbCcsXG4gICAgJ2NvdycsXG4gICAgJ2hvdXNlJyxcbiAgICAna25pZ2h0J1xuXTtcbmV4cG9ydCB7IGZpbGVzIH07XG4iLCJpbXBvcnQgeyBDYW1lcmEsIFZlY3RvcjNkIH0gZnJvbSAnLi4vLi4vbGliL2luZGV4JztcbmNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgLyoqKioqKioqKioqKioqKioqKioqIHNldHRpbmcgKioqKioqKioqKioqKioqKioqKiovXG4gICAgaDogMSxcbiAgICBkOiAxLFxuICAgIGY6IDEwMDAsXG4gICAgY2FtZXJhOiBuZXcgQ2FtZXJhKG5ldyBWZWN0b3IzZCgwLCAyMCwgMjApLCBuZXcgVmVjdG9yM2QoMCwgLTEsIDApKSxcbiAgICBwUmVmOiBuZXcgVmVjdG9yM2QoMCwgMCwgMCksXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIC8qKioqKioqKioqKioqKioqKioqKiBtb2RlbCAqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwb2ludHNOdW06IDAsXG4gICAgcG9pbnRzOiBbXSxcbiAgICBmYWNlc051bTogMCxcbiAgICBmYWNlczogW10sXG4gICAgLyoqKioqKioqKioqKioqKioqKioqIGNhbGN1bGF0ZWQgbW9kZWwgKioqKioqKioqKioqKioqKioqKiovXG4gICAgLy8gQSBzZXQgdXNlZCB0byBzYXZlIGJhY2sgZmFjZSBpbmRleFxuICAgIGJhY2tGYWNlU2V0OiBuZXcgU2V0KCksXG4gICAgLy8gdHJhbnNmb3JtZWQgcG9pbnRcbiAgICBjYWxjUG9pbnRzOiBbXSxcbiAgICBlZGdlVGFibGU6IFtdLFxuICAgIGFjdGl2ZUVkZ2VUYWJsZTogW10sXG4gICAgLy8gcmVuZGluZ1xuICAgIHBpeGVsQnVmZmVyOiBbXSxcbiAgICB6QnVmZmVyOiBbXSxcbiAgICBmYWNlX2NvbG9yX3JfYnVmZmVyOiBbXSxcbiAgICBmYWNlX2NvbG9yX2dfYnVmZmVyOiBbXSxcbiAgICBmYWNlX2NvbG9yX2JfYnVmZmVyOiBbXVxufTtcbmV4cG9ydCB7IHBhcmFtZXRlcnMgfTtcbiIsImltcG9ydCB7IHBhcmFtZXRlcnMgfSBmcm9tICcuL2NvbmZpZ3MvcGFyYW1ldGVycyc7XG5pbXBvcnQgbG9hZEZpbGUgZnJvbSAnLi91dGlscy9sb2FkRmlsZSc7XG5pbXBvcnQgZHJhdyBmcm9tICcuL3V0aWxzL2RyYXcnO1xuaW1wb3J0IHsgYmluZFNsaWRlciwgbG9hZE1lbnUsIHJlYWN0VG9PcGVyYXRpb24gfSBmcm9tICcuL3V0aWxzL2RvbSc7XG4vKioqKioqKioqKioqKioqKioqKiogSW5pdGlhbGl6ZSBET00gKioqKioqKioqKioqKioqKioqKiovXG4vLyBHZXQgY2FudmFzIHJlYWR5XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbmNvbnN0IHdpZHRoID0gY2FudmFzLndpZHRoO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5jdHguc3Ryb2tlU3R5bGUgPSAnZ3JlZW4nO1xuLy8gSW5qZWN0IHBhcmFtZXRlciB0byBkcmF3IGZ1bmN0aW9uXG5jb25zdCBkcmF3Q3R4ID0gZHJhdyhjdHgsIHdpZHRoLCBoZWlnaHQpO1xuLy8gTG9hZCBhbGwgbW9kZWwgb3B0aW9ucyB0byBtZW51XG5jb25zdCBjaG9vc2VfbW9kZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QuY2hvb3NlX21vZGVsJyk7XG5sb2FkTWVudShjaG9vc2VfbW9kZWwpO1xuLy8gR2V0IHRocmVlIHNsaWRlcyByZWFkeSBiaW5kaW5nIHdpdGggaCwgZCwgZiBwYXJhbWV0ZXJcblsnaCcsICdkJywgJ2YnXS5mb3JFYWNoKGl0ZW0gPT4gYmluZFNsaWRlcihpdGVtLCBkcmF3Q3R4KSk7XG4vLyBCdXR0b25cbi8vIEJpbmQgcmVuZGVyIGJ1dHRvbiB3aXRoIGxvYWQgZmlsZSBhbmQgcmVuZGVyIG9wZXJ0aW9uXG5jb25zdCByZW5kZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVuZGVyJyk7XG5yZW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbW9kZWxJbmRleCA9IGNob29zZV9tb2RlbC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChtb2RlbEluZGV4ID09PSAwKSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgbW9kZWwgdG8gcmVuZGVyJyk7XG4gICAgfVxuICAgIGNvbnN0IG1vZGVsTmFtZSA9IGNob29zZV9tb2RlbC5vcHRpb25zW21vZGVsSW5kZXhdLnZhbHVlO1xuICAgIGxvYWRGaWxlKGAuL3B1YmxpYy9tb2RlbC8ke21vZGVsTmFtZX0uZC50eHRgLCBkcmF3Q3R4KTtcbiAgICByZW5kZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xufSk7XG4vLyBiaW5kIHJlc2V0IGJ1dHRvbiB3aXRoIHJlZnJlc2ggZnVuY3Rpb25cbmNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XG5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuLyoqKioqKioqKioqKioqKioqKioqIEluaXRpYWxpemUgRGF0YSAqKioqKioqKioqKioqKioqKioqKi9cbi8vIEJpbmRpbmcgb3BlcmF0aW9uXG5yZWFjdFRvT3BlcmF0aW9uKGNhbnZhcywgZHJhd0N0eCk7XG4vLyBDYWxjdWxhdGUgTiwgVSwgViB2ZWN0b3JcbnBhcmFtZXRlcnMuY2FtZXJhLmNhbGNOVVYocGFyYW1ldGVycy5wUmVmKTtcbnBhcmFtZXRlcnMud2lkdGggPSB3aWR0aDtcbnBhcmFtZXRlcnMuaGVpZ2h0ID0gaGVpZ2h0O1xuZHJhd0N0eCgpO1xuIiwiY2xhc3MgRWRnZVRhYmxlRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoeVN0YXJ0LCB5TWF4LCB4U3RhcnQsIGRlbHRhLCB6VXBwZXIsIHpMb3dlcikge1xuICAgICAgICB0aGlzLnlTdGFydCA9IHlTdGFydDtcbiAgICAgICAgdGhpcy55TWF4ID0geU1heDtcbiAgICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgICAgIHRoaXMuZGVsdGEgPSBkZWx0YTtcbiAgICAgICAgdGhpcy56VXBwZXIgPSB6VXBwZXI7XG4gICAgICAgIHRoaXMuekxvd2VyID0gekxvd2VyO1xuICAgIH1cbn1cbjtcbmV4cG9ydCB7IEVkZ2VUYWJsZUVsZW1lbnQgfTtcbiIsImltcG9ydCB7IHBhcmFtZXRlcnMgfSBmcm9tICcuLi9jb25maWdzL3BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnLi4vLi4vbGliL2luZGV4JztcbmNvbnN0IHdvcmxkMkNhbWVyYSA9ICgpID0+IHtcbiAgICBjb25zdCBjYW1lcmEgPSBwYXJhbWV0ZXJzLmNhbWVyYTtcbiAgICBjb25zdCBSID0gbmV3IE1hdHJpeChbXG4gICAgICAgIFtjYW1lcmEuVS54LCBjYW1lcmEuVS55LCBjYW1lcmEuVS56LCAwXSxcbiAgICAgICAgW2NhbWVyYS5WLngsIGNhbWVyYS5WLnksIGNhbWVyYS5WLnosIDBdLFxuICAgICAgICBbY2FtZXJhLk4ueCwgY2FtZXJhLk4ueSwgY2FtZXJhLk4ueiwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAxXVxuICAgIF0pO1xuICAgIGNvbnN0IFQgPSBuZXcgTWF0cml4KFtcbiAgICAgICAgWzEsIDAsIDAsIC1jYW1lcmEucG9zaXRpb24ueF0sXG4gICAgICAgIFswLCAxLCAwLCAtY2FtZXJhLnBvc2l0aW9uLnldLFxuICAgICAgICBbMCwgMCwgMSwgLWNhbWVyYS5wb3NpdGlvbi56XSxcbiAgICAgICAgWzAsIDAsIDAsIDFdXG4gICAgXSk7XG4gICAgcmV0dXJuIFIubXVsdGlwbHkoVCk7XG59O1xuY29uc3QgcGVyc3BlY3RpdmVUcmFucyA9ICgpID0+IHtcbiAgICBjb25zdCBhID0gcGFyYW1ldGVycy5mIC8gKHBhcmFtZXRlcnMuZiAtIHBhcmFtZXRlcnMuZCk7XG4gICAgY29uc3QgYiA9IHBhcmFtZXRlcnMuZCAvIHBhcmFtZXRlcnMuaDtcbiAgICByZXR1cm4gbmV3IE1hdHJpeChbXG4gICAgICAgIFtiLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIGIsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgYSwgLWEgKiBwYXJhbWV0ZXJzLmRdLFxuICAgICAgICBbMCwgMCwgMSwgMF1cbiAgICBdKTtcbn07XG4vKipcbiAqIEJhY2stZmFjZSBjdWxsaW5nXG4gKiBWaXNpYmxlIGlmIE5wIGRvdCBwcm9kdWN0IE4gPiAwXG4gKiBOb3RlOiBTb21lIHRoZSBwb2x5Z29ucyBhcmUgZGVub3RlZCBpbiBhbnRpLWNsb2Nrd2lzZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgYmFja0ZhY2VDdWxsaW5nID0gKCkgPT4ge1xuICAgIHBhcmFtZXRlcnMuYmFja0ZhY2VTZXQgPSBuZXcgU2V0KCk7XG4gICAgcGFyYW1ldGVycy5mYWNlcy5mb3JFYWNoKCh4LCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBpZiAodmVjdG9yM2REb3RQcm9kdWN0KHZlY3RvcjNkQ3Jvc3NQcm9kdWN0KHZlY3RvclN1YnRyYWN0KG1vZGVsLnBvaW50c1t4WzBdXSwgbW9kZWwucG9pbnRzW3hbMV1dKSwgdmVjdG9yU3VidHJhY3QobW9kZWwucG9pbnRzW3hbMV1dLCBtb2RlbC5wb2ludHNbeFsyXV0pKSwgXG4gICAgICAgIC8vICAgICB2ZWN0b3JTdWJ0cmFjdChjYW1lcmEuQywgbW9kZWwucG9pbnRzW3hbMF1dKSkgPj0gMCkge1xuICAgICAgICAvLyAgIHJlc3VsdC5iYWNrRmFjZVNldC5hZGQoaW5kZXgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IHYxID0gcGFyYW1ldGVycy5wb2ludHNbeFswXV0uc3VidHJhY3QocGFyYW1ldGVycy5wb2ludHNbeFsxXV0pO1xuICAgICAgICBjb25zdCB2MiA9IHBhcmFtZXRlcnMucG9pbnRzW3hbMV1dLnN1YnRyYWN0KHBhcmFtZXRlcnMucG9pbnRzW3hbMl1dKTtcbiAgICAgICAgY29uc3QgTnAgPSB2MS5jcm9zc1Byb2R1Y3QodjIpO1xuICAgICAgICBjb25zdCBOID0gcGFyYW1ldGVycy5jYW1lcmEucG9zaXRpb24uc3VidHJhY3QocGFyYW1ldGVycy5wb2ludHNbeFswXV0pO1xuICAgICAgICBpZiAoTnAuZG90UHJvZHVjdChOKSA+PSAwKSB7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzLmJhY2tGYWNlU2V0LmFkZChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG4vLyBDYWxjdWxhdGUgbW9kZWxcbmV4cG9ydCBjb25zdCBjYWxjTW9kZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tYm8gPSBwZXJzcGVjdGl2ZVRyYW5zKCkubXVsdGlwbHkod29ybGQyQ2FtZXJhKCkpO1xuICAgIHJldHVybiBwYXJhbWV0ZXJzLnBvaW50cy5tYXAocG9pbnQgPT4ge1xuICAgICAgICByZXR1cm4gY29tYm8ubXVsdGlwbHkocG9pbnQuZXh0ZW5kKCkudG9NYXRyaXgoKSkudG9WZWN0b3IoKTtcbiAgICB9KTtcbn07XG4iLCIvKioqKioqKioqKioqKioqKioqKiogRE9NIE9QRVJBVElPTiAqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCB7IHBhcmFtZXRlcnMgfSBmcm9tICcuLi9jb25maWdzL3BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgZmlsZXMgfSBmcm9tICcuLi9jb25maWdzL2NvbnN0YW50cyc7XG4vKipcbiAqIExvYWQgbWVudVxuICovXG5leHBvcnQgY29uc3QgbG9hZE1lbnUgPSAoc2VsZWN0RE9NKSA9PiB7XG4gICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBmaWxlKTtcbiAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZpbGUpKTtcbiAgICAgICAgc2VsZWN0RE9NLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBCaW5kIHRoZSB2YWx1ZSBvZiBzbGlkZXIgd2l0aCBjYW1lcmEgc2V0dGluZ1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRTbGlkZXIgPSAobmFtZSwgZHJhdykgPT4ge1xuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25hbWV9YCk7XG4gICAgY29uc3Qgc2xpZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25hbWV9X1ZgKTtcbiAgICBzbGlkZXIudmFsdWUgPSBwYXJhbWV0ZXJzW25hbWVdO1xuICAgIHNsaWRlclRleHQuaW5uZXJIVE1MID0gcGFyYW1ldGVyc1tuYW1lXTtcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBwYXJhbWV0ZXJzW25hbWVdID0gdGhpcy52YWx1ZTtcbiAgICAgICAgc2xpZGVyVGV4dC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBwYXJhbWV0ZXJzLnBSZWZbMF0gLT0gMTA7XG4gICAgICAgIGRyYXcoKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIEJpbmQgb3BlcmF0aW9uIHRvIGNvbnRyb2wgdGhlIGZpbmFsIGVmZmVjdFxuICovXG5jb25zdCBvYmplY3RMZW4gPSAxO1xuY29uc3QgY2FtZXJhTGVuID0gMjtcbmV4cG9ydCBjb25zdCByZWFjdFRvT3BlcmF0aW9uID0gKGNhbnZhcywgZHJhdykgPT4ge1xuICAgIC8vIHpvb21pbmcgdGhlIG1vZGVsXG4gICAgY29uc3QgY2FtZXJhID0gcGFyYW1ldGVycy5jYW1lcmE7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LndoZWVsRGVsdGEgPiAwKSB7XG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb24uc2NhbGUoNiAvIDUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uLnNjYWxlKDUgLyA2KTtcbiAgICAgICAgfVxuICAgICAgICBkcmF3KCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb24uYWRkKGNhbWVyYS5WLnNjYWxlKC1vYmplY3RMZW4pKTtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb24uYWRkKGNhbWVyYS5WLnNjYWxlKG9iamVjdExlbikpO1xuICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbiA9IGNhbWVyYS5wb3NpdGlvbi5hZGQoY2FtZXJhLlUuc2NhbGUob2JqZWN0TGVuKSk7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uLmFkZChjYW1lcmEuVS5zY2FsZSgtb2JqZWN0TGVuKSk7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaSc6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgLT0gY2FtZXJhTGVuO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5jYWxjTlVWKHBhcmFtZXRlcnMucFJlZik7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnayc6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgKz0gY2FtZXJhTGVuO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5jYWxjTlVWKHBhcmFtZXRlcnMucFJlZik7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaic6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggKz0gY2FtZXJhTGVuO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5jYWxjTlVWKHBhcmFtZXRlcnMucFJlZik7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggLT0gY2FtZXJhTGVuO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5jYWxjTlVWKHBhcmFtZXRlcnMucFJlZik7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKiBEUkFXIElNQUdFICoqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IHsgcGFyYW1ldGVycyB9IGZyb20gJy4uL2NvbmZpZ3MvcGFyYW1ldGVycyc7XG5pbXBvcnQgeyBjYWxjTW9kZWwsIGJhY2tGYWNlQ3VsbGluZyB9IGZyb20gJy4uL29wZXJhdGUvdHJhbnNmb3JtJztcbmltcG9ydCBzY2FuQ29udmVyc2lvbiwgeyBidWZmZXJJbml0IH0gZnJvbSAnLi9maWxsUGl4ZWwnO1xuLyoqXG4gKiBEcmF3IG1vZGVsIG9uIHRoZSBjYW52YXNcbiAqIEBwYXJhbSBjdHhcbiAqIEBwYXJhbSB3aWR0aFxuICogQHBhcmFtIGhlaWdodFxuICovXG5jb25zdCBkcmF3ID0gKGN0eCwgd2lkdGgsIGhlaWdodCkgPT4gKCkgPT4ge1xuICAgIC8vIGJhY2sgZmFjZSBjdWxsaW5nLCBzYXZlIGl0IHRvIG1vZGVsIG9iamVjdFxuICAgIGJhY2tGYWNlQ3VsbGluZygpO1xuICAgIC8vIHRyYW5zZm9ybSBwb2ludHMgZnJvbSB2aXJ0dWFsIHdvcmxkIHRvIDJkIHNjcmVlblxuICAgIHBhcmFtZXRlcnMuY2FsY1BvaW50cyA9IGNhbGNNb2RlbCgpO1xuICAgIC8vIHotYnVmZmVyIGFsZ29yaXRobVxuICAgIGJ1ZmZlckluaXQoKTtcbiAgICBzY2FuQ29udmVyc2lvbigpO1xuICAgIC8vIGRyYXcgaW1hZ2VcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IGltYWdlRGF0YSA9IGN0eC5jcmVhdGVJbWFnZURhdGEod2lkdGgsIGhlaWdodCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogNCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmhlaWdodDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGFyYW1ldGVycy53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gaSAqIHBhcmFtZXRlcnMud2lkdGggKyBqO1xuICAgICAgICAgICAgLy8gciBnIGIgYVxuICAgICAgICAgICAgZGF0YVt0ICogNCArIDBdID0gcGFyYW1ldGVycy5waXhlbEJ1ZmZlcltpXVtqXVswXTtcbiAgICAgICAgICAgIGRhdGFbdCAqIDQgKyAxXSA9IHBhcmFtZXRlcnMucGl4ZWxCdWZmZXJbaV1bal1bMV07XG4gICAgICAgICAgICBkYXRhW3QgKiA0ICsgMl0gPSBwYXJhbWV0ZXJzLnBpeGVsQnVmZmVyW2ldW2pdWzJdO1xuICAgICAgICAgICAgZGF0YVt0ICogNCArIDNdID0gMjU1O1xuICAgICAgICB9XG4gICAgfVxuICAgIGltYWdlRGF0YS5kYXRhLnNldChkYXRhKTtcbiAgICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZHJhdztcbiIsIi8qKioqKioqKioqKioqKioqKioqKiBGSUxMIFBJWEVMUyAqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCB7IHBhcmFtZXRlcnMgfSBmcm9tICcuLi9jb25maWdzL3BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgRWRnZVRhYmxlRWxlbWVudCB9IGZyb20gJy4uL29iai9FZGdlVGFibGVFbGVtZW50Jztcbi8vIGdldCBhIHJhbmRvbSBpbnRlZ2VyIGluIFswLCAyNTVdXG5jb25zdCByYW5kb20gPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpO1xuLy8gY29udmVydCAyZCBwb2ludCB0byBjYW52YXMgcG9pbnRcbmNvbnN0IHRvUGl4ZWwgPSAodmFsdWUsIHNob3J0dGVuID0gZmFsc2UpID0+IE1hdGguZmxvb3IoKHZhbHVlICsgMSkgKiBwYXJhbWV0ZXJzLmhlaWdodCAvIDIpIC0gKHNob3J0dGVuID8gMSA6IDApO1xuY29uc3QgdG9GbG9hdFBpeGVsID0gKHZhbHVlKSA9PiAodmFsdWUgKyAxKSAqIHBhcmFtZXRlcnMuaGVpZ2h0IC8gMjtcbi8vIHJlc2V0IHBpeGVsIGJ1ZmZlciBhbmQgeiBidWZmZXJcbmNvbnN0IGJ1ZmZlclJlc2V0ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5oZWlnaHQ7IGkrKykge1xuICAgICAgICBwYXJhbWV0ZXJzLnBpeGVsQnVmZmVyW2ldID0gW107XG4gICAgICAgIHBhcmFtZXRlcnMuekJ1ZmZlcltpXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhcmFtZXRlcnMud2lkdGg7IGorKykge1xuICAgICAgICAgICAgcGFyYW1ldGVycy5waXhlbEJ1ZmZlcltpXVtqXSA9IFswLCAwLCAwXTtcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuekJ1ZmZlcltpXVtqXSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gcmVzZXQgZWRnZSB0YWJsZVxuY29uc3QgZWRnZVRhYmxlUmVzZXQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmhlaWdodDsgaSsrKSB7XG4gICAgICAgIHBhcmFtZXRlcnMuZWRnZVRhYmxlW2ldID0gW107XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBidWZmZXJJbml0ID0gKCkgPT4ge1xuICAgIGJ1ZmZlclJlc2V0KCk7XG4gICAgLy8gZ2l2ZSByYW5kb20gY29sb3IgdG8gZWFjaCBmYWNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmZhY2VzTnVtOyBpKyspIHtcbiAgICAgICAgcGFyYW1ldGVycy5mYWNlX2NvbG9yX3JfYnVmZmVyLnB1c2gocmFuZG9tKCkpO1xuICAgICAgICBwYXJhbWV0ZXJzLmZhY2VfY29sb3JfZ19idWZmZXIucHVzaChyYW5kb20oKSk7XG4gICAgICAgIHBhcmFtZXRlcnMuZmFjZV9jb2xvcl9iX2J1ZmZlci5wdXNoKHJhbmRvbSgpKTtcbiAgICB9XG59O1xuLyoqXG4gKiBTY2FuIENvbnZlcnNpb25cbiAqIDEuIGZvciBlYWNoIHNjYW4gbGluZSwgZGV0ZXJtaW5lIGVkZ2VzIG9mIHBvbHlnb25zIHRoYXQgaW50ZXJzZWN0XG4gKiAyLiBGaW5kIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGFuXG4gKiAzLiBSZWx5IG9uIHNjYW5saW5lIGFuZCBwaXhlbCBjb2hlcmVuY2UgdG8gbGluZWFybHkgaW50ZXJwb2xhdGUgKGJldHdlZW4gc2NhbmxpbmVzIGFuZCBiZXR3ZWVuIHBpeGVscylcbiAqL1xuY29uc3QgYWRkRWRnZVRvRVQgPSAobG93ZXJQb2ludCwgdXBwZXJQb2ludCkgPT4ge1xuICAgIC8vIGlnbm9yZSBob3Jpem9udGFsIGVkZ2UgYW5kIG91dCBvZiByYW5nZSBwb2ludFxuICAgIGlmICh0b1BpeGVsKGxvd2VyUG9pbnQueSkgPT09IHRvUGl4ZWwodXBwZXJQb2ludC55KVxuICAgICAgICB8fCBsb3dlclBvaW50LnkgPiAxIHx8IGxvd2VyUG9pbnQueSA8IC0xKVxuICAgICAgICByZXR1cm47XG4gICAgLy8gc3dhcCB0aGUgb3JkZXIgb2YgdHdvIHBvaW50c1xuICAgIGlmIChsb3dlclBvaW50LnkgPiB1cHBlclBvaW50LnkpIHtcbiAgICAgICAgW2xvd2VyUG9pbnQsIHVwcGVyUG9pbnRdID0gW3VwcGVyUG9pbnQsIGxvd2VyUG9pbnRdO1xuICAgIH1cbiAgICAvLyBjcmVhdGUgZWRnZSB0YWJsZSBlbGVtZW50IGFuZCBhZGQgaXQgaW50byB0aGUgZWRnZSB0YWJsZVxuICAgIGNvbnN0IEVURWxlbWVudCA9IG5ldyBFZGdlVGFibGVFbGVtZW50KHRvUGl4ZWwobG93ZXJQb2ludC55KSwgdG9QaXhlbCh1cHBlclBvaW50LnksIHRydWUpLCB0b0Zsb2F0UGl4ZWwobG93ZXJQb2ludC54KSwgKGxvd2VyUG9pbnQueCAtIHVwcGVyUG9pbnQueCkgLyAobG93ZXJQb2ludC55IC0gdXBwZXJQb2ludC55KSwgdXBwZXJQb2ludC56LCBsb3dlclBvaW50LnopO1xuICAgIGlmIChFVEVsZW1lbnQueVN0YXJ0ID4gRVRFbGVtZW50LnlNYXgpIHtcbiAgICAgICAgRVRFbGVtZW50LnlNYXggPSBFVEVsZW1lbnQueVN0YXJ0O1xuICAgIH1cbiAgICBwYXJhbWV0ZXJzLmVkZ2VUYWJsZVtNYXRoLmZsb29yKEVURWxlbWVudC55U3RhcnQpXS5wdXNoKEVURWxlbWVudCk7XG59O1xuLy8gQ2FsY3VsYXRpb24gb2YgelxuY29uc3QgY2FsY1ogPSAoZWRnZSwgeXMpID0+IGVkZ2UueU1heCA9PT0gZWRnZS55U3RhcnQgPyBlZGdlLnpVcHBlciA6XG4gICAgZWRnZS56VXBwZXIgLSAoZWRnZS56VXBwZXIgLSBlZGdlLnpMb3dlcikgKiAoZWRnZS55TWF4IC0geXMpIC8gKGVkZ2UueU1heCAtIGVkZ2UueVN0YXJ0KTtcbmNvbnN0IHNjYW5Db252ZXJzaW9uID0gKCkgPT4ge1xuICAgIGJ1ZmZlclJlc2V0KCk7XG4gICAgLy8gZm9yIGVhY2ggZmFjZVxuICAgIHBhcmFtZXRlcnMuZmFjZXMuZm9yRWFjaCgoZmFjZSwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byBjb25zaWRlciBiYWNrIGZhY2VcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuYmFja0ZhY2VTZXQuaGFzKGluZGV4KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gYnVpbGQgZWRnZSB0YWJsZVxuICAgICAgICBlZGdlVGFibGVSZXNldCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZhY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGdldCBhbiBlZGdlIFxuICAgICAgICAgICAgbGV0IGxvd2VyUG9pbnQgPSBwYXJhbWV0ZXJzLmNhbGNQb2ludHNbZmFjZVtpXV07XG4gICAgICAgICAgICBsZXQgdXBwZXJQb2ludCA9IHBhcmFtZXRlcnMuY2FsY1BvaW50c1tmYWNlWyhpICsgMSkgJSBmYWNlLmxlbmd0aF1dO1xuICAgICAgICAgICAgYWRkRWRnZVRvRVQobG93ZXJQb2ludCwgdXBwZXJQb2ludCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmlsbCBwaXhlbCB0byBwaXhlbCBidWZmZXJcbiAgICAgICAgbGV0IGN1cnJlbnRTY2FuTGluZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMuZWRnZVRhYmxlW2ldLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2NhbkxpbmUgPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50U2NhbkxpbmU7IGkgPCBwYXJhbWV0ZXJzLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIGVkZ2UgZnJvbSBFZGdlIFRhYmVsIHRvIEFjdGl2ZSBFZGdlIFRhYmxlXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhcmFtZXRlcnMuZWRnZVRhYmxlW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycy5hY3RpdmVFZGdlVGFibGUucHVzaChwYXJhbWV0ZXJzLmVkZ2VUYWJsZVtpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJhbWV0ZXJzLmFjdGl2ZUVkZ2VUYWJsZS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEueFN0YXJ0IC0gYi54U3RhcnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqICsgMSA8IHBhcmFtZXRlcnMuYWN0aXZlRWRnZVRhYmxlLmxlbmd0aDsgaiArPSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IFtwYXJhbWV0ZXJzLmFjdGl2ZUVkZ2VUYWJsZVtqXSwgcGFyYW1ldGVycy5hY3RpdmVFZGdlVGFibGVbaiArIDFdXTtcbiAgICAgICAgICAgICAgICBpZiAobGVmdC54U3RhcnQgPiByaWdodC54U3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IFt6YSwgemJdID0gW2NhbGNaKGxlZnQsIGkpLCBjYWxjWihyaWdodCwgaSldO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKGxlZnQueFN0YXJ0KSk7IGsgPCBNYXRoLmZsb29yKHJpZ2h0LnhTdGFydCkgJiYgayA8IHBhcmFtZXRlcnMud2lkdGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGN1cnJlbnQgcG9pbnQncyB6IGNvb3JkaW5hdGVcbiAgICAgICAgICAgICAgICAgICAgbGV0IHpwID0gayA9PSBNYXRoLm1heCgwLCBsZWZ0LnhTdGFydCkgPyB6YSA6IHpiIC0gKHpiIC0gemEpICogKHJpZ2h0LnhTdGFydCAtIGspIC8gKHJpZ2h0LnhTdGFydCAtIGxlZnQueFN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHpwID4gcGFyYW1ldGVycy56QnVmZmVyW2ldW2tdKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMuekJ1ZmZlcltpXVtrXSA9IHpwO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLnBpeGVsQnVmZmVyW2ldW2tdID0gW3BhcmFtZXRlcnMuZmFjZV9jb2xvcl9yX2J1ZmZlcltpbmRleF0sIHBhcmFtZXRlcnMuZmFjZV9jb2xvcl9nX2J1ZmZlcltpbmRleF0sIHBhcmFtZXRlcnMuZmFjZV9jb2xvcl9iX2J1ZmZlcltpbmRleF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmFtZXRlcnMuYWN0aXZlRWRnZVRhYmxlID0gcGFyYW1ldGVycy5hY3RpdmVFZGdlVGFibGVcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGVkZ2UgPT4gZWRnZS55TWF4ICE9PSBpKSAvLyByZW1vdmUgZWRnZSBmcm9tIEFjdGl2ZSBFZGdlIFRhYmxlIHdoaWxlIHkgPSB5TWF4XG4gICAgICAgICAgICAgICAgLm1hcChlZGdlID0+IHtcbiAgICAgICAgICAgICAgICBlZGdlLnhTdGFydCArPSBlZGdlLmRlbHRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBlZGdlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBzY2FuQ29udmVyc2lvbjtcbiIsImltcG9ydCB7IHBhcmFtZXRlcnMgfSBmcm9tICcuLi9jb25maWdzL3BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgVmVjdG9yM2QgfSBmcm9tICcuLi8uLi9saWIvaW5kZXgnO1xuLyoqXG4gKiBQYXJzZSB0aGUgZGF0YSBmcm9tIHRoZSAuZCBmaWxlXG4gKiBAcGFyYW0geyp9IGRhdGFcbiAqL1xuY29uc3QgcGFyc2VGaWxlID0gKGRhdGEpID0+IHtcbiAgICBsZXQgbGluZXMgPSBkYXRhLm1hdGNoKC9bXlxcclxcbl0rL2cpO1xuICAgIGxldCBbbnVtLCBwb2ludHNOdW0sIGZhY2VzTnVtXSA9IGxpbmVzWzBdLnRyaW0oKS5zcGxpdCgvXFxzKy8pO1xuICAgIC8vIENhdXNlIGluIHNvbWUgZmlsZSwgdGhlcmUgYXJlIGp1c3QgdHdvIG51bWJlciBpbiBmaXJzdCBsaW5lXG4gICAgaWYgKGZhY2VzTnVtID09IHVuZGVmaW5lZCkge1xuICAgICAgICBmYWNlc051bSA9IHBvaW50c051bTtcbiAgICAgICAgcG9pbnRzTnVtID0gbnVtO1xuICAgIH1cbiAgICAvLyBsb2FkIGRhdGEgdG8gbW9kZWxcbiAgICBwYXJhbWV0ZXJzLnBvaW50c051bSA9IHBhcnNlSW50KHBvaW50c051bSwgMTApO1xuICAgIHBhcmFtZXRlcnMuZmFjZXNOdW0gPSBwYXJzZUludChmYWNlc051bSwgMTApO1xuICAgIC8vIGhlcmUgd2UgcmVmcmVzaCB0aGUgb2JqZWN0IHdoZW4gbG9hZCBkaWZmZXJlbnQgbW9kZWxcbiAgICBwYXJhbWV0ZXJzLnBvaW50cyA9IFtdO1xuICAgIHBhcmFtZXRlcnMuZmFjZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwYXJhbWV0ZXJzLnBvaW50c051bTsgaSsrKSB7XG4gICAgICAgIGxldCBbeCwgeSwgel0gPSBsaW5lc1tpXS50cmltKCkuc3BsaXQoL1xccysvKTtcbiAgICAgICAgcGFyYW1ldGVycy5wb2ludHMucHVzaChuZXcgVmVjdG9yM2QocGFyc2VGbG9hdCh4KSwgcGFyc2VGbG9hdCh5KSwgcGFyc2VGbG9hdCh6KSkpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gcGFyYW1ldGVycy5wb2ludHNOdW0gKyAxOyBpIDw9IHBhcmFtZXRlcnMucG9pbnRzTnVtICsgcGFyYW1ldGVycy5mYWNlc051bTsgaSsrKSB7XG4gICAgICAgIGxldCBbbnVtLCAuLi5yZXNdID0gbGluZXNbaV0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIGlmIChyZXMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgcGFyYW1ldGVycy5mYWNlcy5wdXNoKHJlcy5tYXAoKHgpID0+IHBhcnNlSW50KHgpIC0gMSkpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogUmVhZCB0aGUgY29udGVudCBvZiBhIGZpbGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlUGF0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuY29uc3QgcmVhZEZpbGUgPSAoZmlsZVBhdGgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGZpbGVQYXRoLCB0cnVlKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXModGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH0pO1xufTtcbi8qKlxuICogTG9hZCBhbmQgcmVuZGVyIHNlbGVjdGVkIG1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZVBhdGhcbiAqL1xuY29uc3QgbG9hZEZpbGUgPSAoZmlsZVBhdGgsIGRyYXcpID0+IHtcbiAgICAvLyBsb2FkIG1vZGVsXG4gICAgcmVhZEZpbGUoZmlsZVBhdGgpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHBhcnNlRmlsZShkYXRhKTtcbiAgICAgICAgZHJhdygpO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkIG9yIHBhcnNlIGZpbGUgZXJyb3InKTtcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBsb2FkRmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=