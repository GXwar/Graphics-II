/******************** DRAW IMAGE ********************/
import { RGBA } from '../../lib/index';

/**
 * Draw model on the canvas
 * @param ctx 
 * @param width 
 * @param height 
 */
const draw = (ctx: CanvasRenderingContext2D, width: number, height: number): Function =>
             (iBuffer: Array<Array<RGBA>>): void => {
  // draw image
  ctx.clearRect(0, 0, width, height);
  const imageData = ctx.createImageData(width, height);
  const data = new Uint8Array(width * height * 4);
  console.log(iBuffer);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const t = i * width + j;
      const color: RGBA = iBuffer[i][j];
      data[t * 4 + 0] = color.r;
      data[t * 4 + 1] = color.g;
      data[t * 4 + 2] = color.b;
      data[t * 4 + 3] = color.a;
    }
  }
  imageData.data.set(data);
  ctx.putImageData(imageData, 0, 0);
};

export default draw;
