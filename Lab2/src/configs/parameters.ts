/*
 * @Author: GXwar 
 * @Date: 2019-02-18 01:33:56 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 18:29:45
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
  camera: Camera
}

const parameters: parameterObj = {
  /******************** setting ********************/
  h: 1,
  d: 1,
  f: 1000,
  height: 0,
  width: 0,
  camera: new Camera(new Vector3d(0, 20, 20), new Vector3d(0, -1, 0))
};

const models: Array<Model> = [];

export { 
  parameters,
  models
};
