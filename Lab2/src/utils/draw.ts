/******************** DRAW IMAGE ********************/
import { parameters } from '../configs/parameters';
import { calcModel, backFaceCulling } from '../operate/transform';
import scanConversion, { bufferInit } from './fillPixel';

/**
 * Draw model on the canvas
 * @param ctx 
 * @param width 
 * @param height 
 */
const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => () => {
  // back face culling, save it to model object
  backFaceCulling();
  // transform points from virtual world to 2d screen
  parameters.calcPoints = calcModel();
  // z-buffer algorithm
  bufferInit();
  scanConversion();
  // draw image
  ctx.clearRect(0, 0, width, height);
  const imageData = ctx.createImageData(width, height);
  const data = new Uint8Array(width * height * 4);
  for (let i = 0; i < parameters.height; i++) {
    for (let j = 0; j < parameters.width; j++) {
      const t = i * parameters.width + j;
      // r g b a
      data[t * 4 + 0] = parameters.pixelBuffer[i][j][0];
      data[t * 4 + 1] = parameters.pixelBuffer[i][j][1];
      data[t * 4 + 2] = parameters.pixelBuffer[i][j][2];
      data[t * 4 + 3] = 255;
    }
  }
  imageData.data.set(data);
  ctx.putImageData(imageData, 0, 0);
};

export default draw;
