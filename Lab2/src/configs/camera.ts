import { vectorSubtract, vectorUnit, vector3dCrossProduct } from '../operate/vector';

interface CameraObject {
  h: number,
  d: number,
  f: number,
  C: Array<number>,
  pRef: Array<number>,
  UP: Array<number>,
  N: Array<number>,
  U: Array<number>,
  V: Array<number>,
  [key:string]: any
};

const camera: CameraObject = {
  h: 1,
  d: 1,
  f: 1000,
  C: [0, 20, 20],
  pRef: [0, 0, 0],
  UP: [0, -1, 0],
  N: [0, 0, 0],
  U: [0, 0, 0],
  V: [0, 0, 0]
};

/**
 * Calculate N, U, V by camera position
 */
const cameraInit = (): void => {
  camera.N = vectorUnit(vectorSubtract(camera.pRef, camera.C));
  camera.U = vectorUnit(vector3dCrossProduct(camera.N, camera.UP));
  camera.V = vector3dCrossProduct(camera.U, camera.N);
};

export default camera;
export { cameraInit };
