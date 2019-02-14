import { vectorSubtract, vectorUnit, vector3dCrossProduct } from '../operate/vector.js';
// Save the info of camera
const camera = {
  h: 1,
  d: 1,
  f: 10,
  C: [50, 50, 100],
  pRef: [0, 0, 0],
  UP: [0, 1, 0],
  N: [0, 0, 0],
  U: [0, 0, 0],
  V: [0, 0, 0]
};

/**
 * Calculate N, U, V by camera position
 */
export const cameraInit = () => {
  camera.N = vectorUnit(vectorSubtract(camera.pRef, camera.C));
  camera.U = vectorUnit(vector3dCrossProduct(camera.N, camera.UP));
  camera.V = vector3dCrossProduct(camera.U, camera.N);
};

export default camera;
