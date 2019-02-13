/******************** DOM OPERATION ********************/
import camera from '../configs/camera.js';
import { files } from '../configs/constants.js';
import { vectorAdd, vectorScale, vectorUnit, vector3dCrossProduct } from '../operate/vector.js';
import { matrixMultiplyVector } from '../operate/matrix.js';

/**
 * Bind the value of slider with camera setting
 * @param {String} name 
 */
export const bindSlider = (name, callback) => {
  const slider = document.querySelector(`#${name}`);
  const sliderText = document.querySelector(`#${name}_V`);
  slider.value = camera[name];
  sliderText.innerHTML = camera[name];
  slider.addEventListener('change', function() {
    camera[name] = this.value;
    sliderText.innerHTML = this.value;
    camera.pRef[0] -= 10;
    callback();
  });
};

/**
 * Load menu
 */
export const loadMenu = (selectDOM) => {
  files.forEach(file => {
    const option = document.createElement('option');
    option.setAttribute("value", file);
    option.appendChild(document.createTextNode(file));
    selectDOM.appendChild(option);
  });
};


/**
 * Bind operation to control the final effect
 */
const Rx = (alpha) => {
  return [[1, 0, 0],
   [0, Math.cos(alpha), -Math.sin(alpha)],
   [0, Math.sin(alpha), Math.cos(alpha)]
  ];
}
const Ry = (beta) => {
  return [[Math.cos(beta), 0, Math.sin(beta)],
   [0, 1, 0],
   [-Math.sin(beta), 0, Math.cos(beta)]
  ];
};
const stepLen = 1;
const degreeStepLen = Math.PI*2/180;
export const reactToOperation = (draw) => {
  const canvas = document.querySelector('#content');
  // zooming the model
  canvas.addEventListener('mousewheel', function(e) {
    if (e.wheelDelta > 0) {
      camera.C = vectorScale(camera.C, 6/5);
    } else {
      camera.C = vectorScale(camera.C, 5/6);
    }
    draw();
  });
  document.addEventListener('keypress', function(e) {
    switch (e.key) {
      case 'w': 
        camera.C = vectorAdd(camera.C, vectorScale(camera.V, -stepLen));
        draw();
        break;
      case 's':
        camera.C = vectorAdd(camera.C, vectorScale(camera.V, stepLen));
        draw();
        break;
      case 'a':
        camera.C = vectorAdd(camera.C, vectorScale(camera.U, stepLen));
        draw();
        break;
      case 'd':
        camera.C = vectorAdd(camera.C, vectorScale(camera.U, -stepLen));
        draw();
        break;
      case 'i':
        camera.V = vectorUnit(matrixMultiplyVector(Rx(-degreeStepLen), camera.V));
        camera.N = vectorUnit(vector3dCrossProduct(camera.V, camera.U));
        camera.U = vectorUnit(vector3dCrossProduct(camera.N, camera.V));
        draw();
        break;
      case 'k':
        camera.V = vectorUnit(matrixMultiplyVector(Rx(degreeStepLen), camera.V));
        camera.N = vectorUnit(vector3dCrossProduct(camera.V, camera.U));
        camera.U = vectorUnit(vector3dCrossProduct(camera.N, camera.V));
        draw();
        break;
      case 'j':
        camera.N = vectorUnit(matrixMultiplyVector(Ry(-degreeStepLen), camera.N));
        camera.U = vectorUnit(vector3dCrossProduct(camera.N, camera.V));
        camera.V = vectorUnit(vector3dCrossProduct(camera.U, camera.N));
        draw();
        break;
      case 'l':
        camera.N = vectorUnit(matrixMultiplyVector(Ry(degreeStepLen), camera.N));
        camera.U = vectorUnit(vector3dCrossProduct(camera.N, camera.V));
        camera.V = vectorUnit(vector3dCrossProduct(camera.U, camera.N));
        draw();
        break;
      default:
        break;
    }
  });
};
