/******************** DOM OPERATION ********************/
import camera from '../configs/camera.js';
import { files } from '../configs/constants.js';
import { vectorAdd, vectorScale } from '../operate/vector.js';

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

export const react2Key = (draw) => {
  document.addEventListener('keypress', function(e) {
    if (e.key === 'w') {
      
      draw();
    }
    switch (e.key) {
      case 'w': 
        camera.C = vectorAdd(camera.C, vectorScale(camera.N, 1));
        draw();
        break;
      case 's':
        camera.C = vectorAdd(camera.C, vectorScale(camera.N, -1));
        draw();
        break;
      case 'a':
        camera.C = vectorAdd(camera.C, vectorScale(camera.U, -1));
        draw();
        break;
      case 'd':
        camera.C = vectorAdd(camera.C, vectorScale(camera.U, 1));
        draw();
        break;
      case 'i':

      case 'k':

      case 'j':

      case 'l':
        
      default:
        break;
    }
  });
};
