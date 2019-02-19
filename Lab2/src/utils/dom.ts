/******************** DOM OPERATION ********************/
import { parameters } from '../configs/parameters';
import { files } from '../configs/constants';

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
  slider.value = parameters[name];
  sliderText.innerHTML = parameters[name];
  slider.addEventListener('change', function() {
    parameters[name] = this.value;
    sliderText.innerHTML = this.value;
    parameters.pRef[0] -= 10;
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
  const camera = parameters.camera;
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
        camera.calcNUV(parameters.pRef);
        draw();
        break;
      case 'k': 
      camera.position.y += cameraLen;
        camera.calcNUV(parameters.pRef);
        draw();
        break;
      case 'j':
      camera.position.x += cameraLen;
        camera.calcNUV(parameters.pRef);
        draw();
        break;
      case 'l':
      camera.position.x -= cameraLen;
        camera.calcNUV(parameters.pRef);
        draw();
        break;
      default:
        break;
    }
  });
};
