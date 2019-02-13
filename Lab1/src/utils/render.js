import { readFile } from './io.js';
import { parseFile } from './parse.js';

import { vectorUnit, vectorSubtract, vector3dCrossProduct } from '../operate/vector.js';
import camera from '../configs/camera.js';

const cameraInit = () => {
  camera.N = vectorUnit(vectorSubtract(camera.pRef, camera.C));
  camera.U = vectorUnit(vector3dCrossProduct(camera.N, camera.UP));
  camera.V = vector3dCrossProduct(camera.U, camera.N);
};

/**
 * Load and render selected model
 * @param {String} filePath 
 */
export const render = (filePath, draw) => {
  // load model
  readFile(filePath)
    .then(data => {
      parseFile(data);
      cameraInit();
      draw();
    })
    .catch(() => {
      console.log('Load or parse file error');
    });
};
