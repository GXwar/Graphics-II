import { EdgeTableElement } from '../obj/EdgeTableElement';

interface ResultObject {
  backFaceSet: Set<number>,
  calcPoints: Array<Array<number>>,
  width: number,
  height: number,
  pixelBuffer: Array<Array<Array<number>>>,
  zBuffer: Array<Array<number>>,
  face_color_r_buffer: Array<number>,
  face_color_g_buffer: Array<number>,
  face_color_b_buffer: Array<number>,
  edgeTable: Array<Array<EdgeTableElement>>,
  activeEdgeTable: Array<EdgeTableElement>
};

const result: ResultObject = {
  // A set used to save back face index
  backFaceSet: new Set(),
  // transformed point
  calcPoints: [],
  // rendering
  width: 0,
  height: 0,
  pixelBuffer: [],
  zBuffer: [],
  face_color_r_buffer: [],
  face_color_g_buffer: [],
  face_color_b_buffer: [],
  // Edge Table
  edgeTable: [],
  // Active Edge Table
  activeEdgeTable: []
};

export default result;
