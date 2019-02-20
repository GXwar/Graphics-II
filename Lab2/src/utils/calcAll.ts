/*
 * @Author: GXwar 
 * @Date: 2019-02-19 18:25:24 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 18:30:05
 */
import { models, parameters } from '../configs/parameters';
import {
  Model,
  backFaceCulling,
  calcModel,
  scanConversion
} from '../../lib/index';

const calcAll = () => {
  models.forEach((model: Model) => {
    [model.N, model.U, model.V] = parameters.camera.calcNUV(model.position);
    model.backFaceSet = backFaceCulling(model, parameters.camera);
    model.calcPoints = calcModel(model, parameters.camera, parameters.h, parameters.d, parameters.f);
    [model.iBuffer, model.zBuffer] = scanConversion(model, parameters.height, parameters.width);
    model.ready = true;
  });
};

export { calcAll };
