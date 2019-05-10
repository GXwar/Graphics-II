/*
 * @Author: GXwar 
 * @Date: 2019-02-19 18:25:24 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-09 19:52:48
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
  // console.log('------------------------------ camera ------------------------------');
  // console.log(camera);
  const backFaceSet = backFaceCulling(model, camera);
  // console.log('------------------------------ backFaceSet ------------------------------');
  // console.log(backFaceSet);
  // console.log('------------------------------ points ------------------------------');
  // console.log(model.points);
  const calcPoints = calcModel(model, camera, parameters.h, parameters.d, parameters.f);
  // console.log('------------------------------ screen points ------------------------------');
  // console.log(calcPoints);
  return scanConversion(model, parameters.lights, calcPoints, backFaceSet, parameters.height, parameters.width);
};

export { calcAll };
