/******************** DOM OPERATION ********************/
import camera, { cameraInit } from '../configs/camera';
import { files } from '../configs/constants';
import { vectorAdd, vectorScale } from '../operate/vector';

/**
 * Load menu
 */
export const loadMenu = (selectDOM: HTMLSelectElement) => {
  files.forEach(file => {
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
export const bindSlider = (name: string, draw: Function) => {
  const slider: HTMLInputElement = <HTMLInputElement>document.querySelector(`#${name}`);
  const sliderText: HTMLSpanElement = <HTMLSpanElement>document.querySelector(`#${name}_V`);
  slider.value = camera[name];
  sliderText.innerHTML = camera[name];
  slider.addEventListener('change', function() {
    camera[name] = this.value;
    sliderText.innerHTML = this.value;
    camera.pRef[0] -= 10;
    draw();
  });
};

/**
 * Bind operation to control the final effect
 */
const objectLen = 1;
const cameraLen = 2;
export const reactToOperation = (canvas: HTMLCanvasElement, draw: Function) => {
  // zooming the model
  canvas.addEventListener('mousewheel', function(e: any) {
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
