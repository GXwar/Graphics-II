import { Camera, Vector3d } from '../../lib/index';
import { EdgeTableElement } from '../obj/EdgeTableElement';

interface parameterObj {
  h: number,
  d: number,
  f: number,
  camera: Camera,
  pRef: Vector3d,
  width: number,
  height: number,
  pointsNum: number,
  facesNum: number,
  points: Array<Vector3d>,
  faces: Array<Array<number>>,
  backFaceSet: Set<number>,
  calcPoints: Array<Vector3d>,
  edgeTable: Array<Array<EdgeTableElement>>,
  activeEdgeTable: Array<EdgeTableElement>,
  pixelBuffer: Array<Array<Array<number>>>,
  zBuffer: Array<Array<number>>,
  face_color_r_buffer: Array<number>,
  face_color_g_buffer: Array<number>,
  face_color_b_buffer: Array<number>
}

const parameters: parameterObj = {
  /******************** setting ********************/
  h: 1,
  d: 1,
  f: 1000,
  camera: new Camera(new Vector3d(0, 20, 20), new Vector3d(0, -1, 0)),
  pRef: new Vector3d(0, 0, 0),
  width: 0,
  height: 0,
  /******************** model ********************/
  pointsNum: 0,
  points: [],
  facesNum: 0,
  faces: [],
  /******************** calculated model ********************/
  // A set used to save back face index
  backFaceSet: new Set(),
  // transformed point
  calcPoints: [],
  edgeTable: [],
  activeEdgeTable: [],
  // rending
  pixelBuffer: [],
  zBuffer: [],
  face_color_r_buffer: [],
  face_color_g_buffer: [],
  face_color_b_buffer: []
};

export { parameters };
