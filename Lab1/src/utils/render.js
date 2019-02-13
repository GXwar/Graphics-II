import { readFile } from './io.js';
import { parseFile } from './parse.js';

import { vectorUnit, vectorSubtract, vector3dCrossProduct } from '../operate/vector.js';
import camera from '../configs/camera.js';

/**
 * Load and render selected model
 * @param {String} filePath 
 */
export const render = (filePath, draw) => {
  // load model
  readFile(filePath)
    .then(data => {
      parseFile(data);
      draw();
    })
    .catch(() => {
      console.log('Load or parse file error');
    });
};
