/**
 * Result 
 */
let result = {
  // Back-face culling or not
  cullingPreference: false,
  // A set used to save back face index
  backFaceSet: new Set(),
  // transformed point
  calcPoints: [],
  // rendering
  m: 768,
  n: 768,
  pixelBuffer: [],
  zBuffer: [],
  edgeTable: [],
  face_color_r_buffer: [],
  face_color_g_buffer: [],
  face_color_b_buffer: [],
  // Edge Table
  edgeTable: []
};

// Initialize refresh buffer, 3 channels
// Initialize zBuffer, the value is between 0 ~ 1, double */
// for (let i = 0; i < result.m; i++) {
//   result.pixelBuffer.push([]);
//   result.zBuffer.push([]);
//   for (let j = 0; j < result.n; j++) {
//     result.pixelBuffer[i][j] = Array.from({length: 3}, _ => 0);
//     result.zBuffer[i][j] = 1;
//   }
// }

export default result;
