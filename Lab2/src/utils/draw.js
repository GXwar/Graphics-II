import model from '../configs/model.js';
import result from '../configs/result.js';
import { calcModel, backFaceCulling } from '../operate/transform.js';

/**
 * Resize the model and adjust to suitable position
 */
let factor;
let [xMax, yMax] = [-1, -1];
const adjustSizeAndPosition = (calcPoints, len) => {
  if (!factor) {
    calcPoints.forEach(point => {
      xMax = Math.max(xMax, Math.abs(point[0]));
      yMax = Math.max(yMax, Math.abs(point[1]));
    });
    factor = Math.floor(len / Math.max(xMax, yMax));
  }
  return calcPoints.map(point => [
    point[0] * factor / 3 + Math.max(xMax, yMax) * factor / 2,
    -point[1] * factor / 3 + Math.max(xMax, yMax) * factor / 2
  ]);
};

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
  // move model to suitable position due to canvas' coordinate
  let canvasPoints = adjustSizeAndPosition(result.calcPoints, Math.min(width, height));
  // clear canvas to redraw
  ctx.clearRect(0, 0, width, height);
  ctx.fillRect(0, 0, width, height);
  model.faces.forEach((face, index) => {
    // depend on user's choice to back face culling or not
    if (result.cullingPreference && result.backFaceSet.has(index)) return;
    let n = face.length;
    ctx.beginPath();
    ctx.moveTo(canvasPoints[face[0]][0], canvasPoints[face[0]][1]);
    for (let i = 1; i < n; i++) {
      ctx.lineTo(canvasPoints[face[i]][0], canvasPoints[face[i]][1]);
    }
    ctx.closePath();
    ctx.stroke();
  });
};

export default draw;
