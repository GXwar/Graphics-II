/******************** DRAW IMAGE ********************/
import model from '../configs/model.js';
import result from '../configs/result.js';
import { calcModel, backFaceCulling } from '../operate/transform.js';
import scanConversion, { bufferInit } from './fillPixel.js';

/**
 * Draw model on the canvas
 * @param {Canvas context} ctx 
 * @param {Canvas' width} width 
 * @param {Canvas' height} height 
 */
const draw = (ctx, width, height) => () => {
  // back face culling, save it to model object
  backFaceCulling();
  // transform points from virtual world to 2d screen
  result.calcPoints = calcModel(model);
  // z-buffer algorithm
  bufferInit();
  scanConversion();
  // draw image
  ctx.clearRect(0, 0, width, height);
  const imageData = ctx.createImageData(width, height);
  const data = new Uint8Array(width * height * 4);
  for (let i = 0; i < result.height; i++) {
    for (let j = 0; j < result.width; j++) {
      const t = i * result.width + j;
      // r g b a
      data[t * 4 + 0] = result.pixelBuffer[i][j][0];
      data[t * 4 + 1] = result.pixelBuffer[i][j][1];
      data[t * 4 + 2] = result.pixelBuffer[i][j][2];
      data[t * 4 + 3] = 255;
    }
  }
  imageData.data.set(data);
  ctx.putImageData(imageData, 0, 0);
};

export default draw;
