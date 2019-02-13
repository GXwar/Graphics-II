/******************** DOM OPERATION ********************/
import camera from '../configs/camera.js';
import { files } from '../configs/constants.js';

/**
 * Bind the value of slider with camera setting
 * @param {String} name 
 */
export const bindSlider = (name) => {
  const slider = document.querySelector(`#${name}`);
  const sliderText = document.querySelector(`#${name}_V`);
  sliderText.innerHTML = slider.value;
  slider.addEventListener('change', function() {
    camera[name] = this.value;
    sliderText.innerHTML = this.value;
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
