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
  pixelBuffer: [],
  zBuffer: [],
  edgeTable: [],
  face_color_r_buffer: [],
  face_color_g_buffer: [],
  face_color_b_buffer: [],
  // Edge Table
  edgeTable: [],
  // Active Edge Table
  activeEdgeTable: []
};

export default result;
