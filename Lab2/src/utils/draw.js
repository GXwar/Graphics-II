import model from '../configs/model.js';
import { calcModel, backFaceCulling } from '../operate/transform.js';
import result, { adjustSizeAndPosition } from '../configs/result.js';
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
  let calcPoints = calcModel(model);
  // move model to suitable position due to canvas' coordinate
  calcPoints = adjustSizeAndPosition(calcPoints, Math.min(width, height));
  // clear canvas to redraw
  ctx.clearRect(0, 0, width, height);
  ctx.fillRect(0, 0, width, height);
  model.faces.forEach((face, index) => {
    // depend on user's choice to back face culling or not
    if (result.cullingPreference && result.backFaceSet.has(index)) return;
    let n = face.length;
    ctx.beginPath();
    ctx.moveTo(calcPoints[face[0]][0], calcPoints[face[0]][1]);
    for (let i = 1; i < n; i++) {
      ctx.lineTo(calcPoints[face[i]][0], calcPoints[face[i]][1]);
    }
    ctx.closePath();
    ctx.stroke();
  });
};

export default draw;
