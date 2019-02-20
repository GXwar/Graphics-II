/*
 * @Author: GXwar 
 * @Date: 2019-02-19 18:25:24 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 22:10:03
 */
import { model, camera, parameters } from '../configs/parameters';
import {
  backFaceCulling,
  calcModel,
  scanConversion
} from '../../lib/index';

const calcAll = () => {
  camera.calcNUV();
  model.backFaceSet = backFaceCulling(model, camera);
  model.calcPoints = calcModel(model, camera, parameters.h, parameters.d, parameters.f);
  parameters.iBuffer = scanConversion(model, parameters.height, parameters.width);
};

export { calcAll };
