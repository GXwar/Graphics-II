/*
 * @Author: GXwar 
 * @Date: 2019-02-18 01:33:56 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-06 01:00:36
 */
import { 
  Camera, 
  Model,
  RGBA,
  Vector3d
} from '../../lib/index';

interface parameterObj {
  h: number,
  d: number,
  f: number,
  height: number,
  width: number,
  iBuffer: Array<Array<RGBA>>,
  lights: Array<Vector3d>,
  shadingType: string
}

const parameters: parameterObj = {
  h: 1,
  d: 1,
  f: 1000,
  height: 0,
  width: 0,
  iBuffer: [],
  lights: [
    new Vector3d(100, 100, 100)
  ],
  shadingType: 'Phong'
};

const camera: Camera = new Camera(new Vector3d(10, 10, 10), new Vector3d(0, 0, 0), new Vector3d(0, -1, 0));

const model: Model = new Model();

export { 
  parameters,
  camera,
  model
};
