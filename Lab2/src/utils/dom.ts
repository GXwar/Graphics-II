/*
 * @Author: GXwar 
 * @Date: 2019-02-14 18:55:51 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 22:54:29
 */
/******************** DOM OPERATION ********************/
import { parameters, camera } from '../configs/parameters';
import { files } from '../configs/constants';

/**
 * Load menu
 * @param selectDOM 
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
 * @param name 
 */
export const bindSlider = (name: string, draw: Function): void => {
  const slider: HTMLInputElement = <HTMLInputElement>document.querySelector(`#${name}`);
  const sliderText: HTMLSpanElement = <HTMLSpanElement>document.querySelector(`#${name}_V`);
  slider.value = parameters[name];
  sliderText.innerHTML = parameters[name];
  slider.addEventListener('change', function() {
    parameters[name] = this.value;
    sliderText.innerHTML = this.value;
    draw();
  });
};

/**
 * Bind operation to control the final effect
 */
const cameraLen = 2;
export const reactToOperation = (canvas: HTMLCanvasElement, draw: Function) => {
  // zooming the model
  canvas.addEventListener('mousewheel', function(event: any) {
    if (event.wheelDelta > 0) {
      camera.position = camera.position.scale(6/5);
    } else {
      camera.position = camera.position.scale(5/6);
    }
    draw();
  });
  document.addEventListener('keypress', function(e) {
    switch (e.key) {
      case 'i':
        camera.position.y += cameraLen;
        draw();
        break;
      case 'k': 
        camera.position.y -= cameraLen;
        draw();
        break;
      case 'j':
        camera.position.x -= cameraLen;
        draw();
        break;
      case 'l':
        camera.position.x += cameraLen;
        draw();
        break;
      default:
        break;
    }
  });
};
