/******************** DOM OPERATION ********************/
import camera, { cameraInit } from '../configs/camera.js';
import { files } from '../configs/constants.js';
import result from '../configs/result.js';
import { vectorAdd, vectorScale } from '../operate/vector.js';

/**
 * Bind the value of slider with camera setting
 * @param {String} name 
 */
export const bindSlider = (name, operation) => {
  const slider = document.querySelector(`#${name}`);
  const sliderText = document.querySelector(`#${name}_V`);
  slider.value = camera[name];
  sliderText.innerHTML = camera[name];
  slider.addEventListener('change', function() {
    camera[name] = this.value;
    sliderText.innerHTML = this.value;
    camera.pRef[0] -= 10;
    operation();
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
 * Bind selected DOM element with back face culling
 * @param {String} name
 * @param {Function} operation 
 */
export const backFaceCullingDOM = (name, draw) => {
  const backFaceDIV = document.querySelector(`.${name}`);
  backFaceDIV.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName.toUpperCase() == "INPUT") {
      result.cullingPreference = e.target.value === '1';
      draw();
    };
  });
};

/**
 * Bind operation to control the final effect
 */
const objectLen = 1;
const cameraLen = 2;
export const reactToOperation = (name, draw) => {
  const canvas = document.querySelector(`#${name}`);
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
        camera.C = vectorAdd(camera.C, vectorScale(camera.V, -objectLen));
        draw();
        break;
      case 's':
        camera.C = vectorAdd(camera.C, vectorScale(camera.V, objectLen));
        draw();
        break;
      case 'a':
        camera.C = vectorAdd(camera.C, vectorScale(camera.U, objectLen));
        draw();
        break;
      case 'd':
        camera.C = vectorAdd(camera.C, vectorScale(camera.U, -objectLen));
        draw();
        break;
      case 'i':
        camera.C[1] -= cameraLen;
        cameraInit();
        draw();
        break;
      case 'k': 
        camera.C[1] += cameraLen;
        cameraInit();
        draw();
        break;
      case 'j':
        camera.C[0] += cameraLen;
        cameraInit();
        draw();
        break;
      case 'l':
        camera.C[0] -= cameraLen;
        cameraInit();
        draw();
        break;
      default:
        break;
    }
  });
};
