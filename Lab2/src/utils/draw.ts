/******************** DRAW IMAGE ********************/
import { parameters } from '../configs/parameters';
import { calcModel, backFaceCulling } from '../../lib/transform/modeling';
import { colorInit, scanConversion } from './fillPixel';

/**
 * Draw model on the canvas
 * @param ctx 
 * @param width 
 * @param height 
 */
const draw = (ctx: CanvasRenderingContext2D, width: number, height: number): Function => () : void => {
  // back face culling, save it to model object
  const backFaceSet = backFaceCulling(parameters.faces, parameters.points, parameters.camera);
  // transform points from virtual world to 2d screen
  const calcPoints = calcModel(parameters.points, parameters.camera, parameters.h, parameters.d, parameters.f);
  // fill pixels
  colorInit();
  const pixelBuffer = scanConversion(parameters.faces, calcPoints, backFaceSet, height, width);
  // draw image
  ctx.clearRect(0, 0, width, height);
  const imageData = ctx.createImageData(width, height);
  const data = new Uint8Array(width * height * 4);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const t = i * width + j;
      // r g b a
      data[t * 4 + 0] = pixelBuffer[i][j][0];
      data[t * 4 + 1] = pixelBuffer[i][j][1];
      data[t * 4 + 2] = pixelBuffer[i][j][2];
      data[t * 4 + 3] = 255;
    }
  }
  imageData.data.set(data);
  ctx.putImageData(imageData, 0, 0);
};

export default draw;
