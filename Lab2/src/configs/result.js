/**
 * Resize the model and adjust to suitable position
 */
let factor;
let [xMax, yMax] = [-1, -1];
export const adjustSizeAndPosition = (calcPoints, len) => {
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
 * Result 
 */
let result = {
  // A set used to save back face index
  backFaceSet: new Set(),
  // Back-face culling or not
  cullingPreference: false,
};

export default result;
