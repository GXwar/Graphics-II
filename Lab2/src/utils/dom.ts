/*
 * @Author: GXwar 
 * @Date: 2019-02-14 18:55:51 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 19:01:16
 */
/******************** DOM OPERATION ********************/
import { parameters } from '../configs/parameters';
import { files } from '../configs/constants';
import { calcAll } from '../utils/calcAll';

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
export const bindSlider = (name: string): void => {
  const slider: HTMLInputElement = <HTMLInputElement>document.querySelector(`#${name}`);
  const sliderText: HTMLSpanElement = <HTMLSpanElement>document.querySelector(`#${name}_V`);
  slider.value = parameters[name];
  sliderText.innerHTML = parameters[name];
  slider.addEventListener('change', function() {
    parameters[name] = this.value;
    sliderText.innerHTML = this.value;
    calcAll();
  });
};

/**
 * Bind operation to control the final effect
 */
const objectLen = 1;
const cameraLen = 2;
export const reactToOperation = (canvas: HTMLCanvasElement) => {
  // zooming the model
  const camera = parameters.camera;
  canvas.addEventListener('mousewheel', function(event: any) {
    if (event.wheelDelta > 0) {
      camera.position = camera.position.scale(6/5);
    } else {
      camera.position = camera.position.scale(5/6);
    }
    calcAll();
  });
  document.addEventListener('keypress', function(e) {
    switch (e.key) {
      // case 'w': 
      //   camera.position = camera.position.add(camera.V.scale(-objectLen));
      //   draw();
      //   break;
      // case 's':
      //   camera.position = camera.position.add(camera.V.scale(objectLen));
      //   draw();
      //   break;
      // case 'a':
      //   camera.position = camera.position.add(camera.U.scale(objectLen));
      //   draw();
      //   break;
      // case 'd':
      //   camera.position = camera.position.add(camera.U.scale(-objectLen));
      //   draw();
      //   break;
      case 'i':
        camera.position.y += cameraLen;
        calcAll();
        break;
      case 'k': 
        camera.position.y -= cameraLen;
        calcAll();
        break;
      case 'j':
        camera.position.x -= cameraLen;
        calcAll();
        break;
      case 'l':
        camera.position.x += cameraLen;
        calcAll();
        break;
      default:
        break;
    }
  });
};
