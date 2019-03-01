/*
 * @Author: GXwar 
 * @Date: 2019-02-19 18:25:24 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-21 20:16:52
 */
import {
  backFaceCulling,
  calcModel,
  scanConversion,
  Model,
  Camera
} from '../../lib/index';

const calcAll = (model: Model, camera: Camera, parameters: any) => {
  camera.calcNUV();
  const backFaceSet = backFaceCulling(model, camera);
  const calcPoints = calcModel(model, camera, parameters.h, parameters.d, parameters.f);
  return scanConversion(model, calcPoints, backFaceSet, parameters.height, parameters.width);
};

export { calcAll };
