/*
 * @Author: GXwar 
 * @Date: 2019-02-19 18:25:24 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-06 01:25:08
 */
import {
  backFaceCulling,
  calcModel,
  scanConversion,
  Model,
  Camera,
  RGBA
} from '../../lib/index';

const calcAll = (model: Model, camera: Camera, parameters: any): Array<Array<RGBA>> => {
  camera.calcNUV();
  const backFaceSet = backFaceCulling(model, camera);
  const calcPoints = calcModel(model, camera, parameters.h, parameters.d, parameters.f);
  return scanConversion(model, parameters.lights, calcPoints, backFaceSet, parameters.height, parameters.width, parameters.shadingType);
};

export { calcAll };
