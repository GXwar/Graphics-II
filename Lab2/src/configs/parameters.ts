/*
 * @Author: GXwar 
 * @Date: 2019-02-18 01:33:56 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 01:39:57
 */
import { Camera, Vector3d } from '../../lib/index';

interface parameterObj {
  h: number,
  d: number,
  f: number,
  camera: Camera,
  pRef: Vector3d,
  height: number,
  width: number,
  pointsNum: number,
  facesNum: number,
  points: Array<Vector3d>,
  faces: Array<Array<number>>,
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
  pointsNum: 10,
  facesNum: 7,
  points: [
    new Vector3d(8.0, 16.0, 30.0),
    new Vector3d(16.0, 10.0, 30.0),
    new Vector3d(16.0, 0.0, 30.0),
    new Vector3d(0.0, 0.0, 30.0),
    new Vector3d(0.0, 10.0, 30.0),
    new Vector3d(8.0, 16.0, 54.0),
    new Vector3d(16.0, 10.0, 54.0),
    new Vector3d(16.0, 0.0, 54.0),
    new Vector3d(0.0, 0.0, 54.0),
    new Vector3d(0.0, 10.0, 54.0)
  ],
  faces: [
    [0, 4, 3, 2, 1],
    [5, 6, 7, 8, 9],
    [6, 1, 2, 7],
    [9, 8, 3, 4],
    [3, 8, 7, 2],
    [5, 0, 1, 6],
    [5, 9, 4, 0]
  ],
  /******************** calculated model ********************/
  face_color_r_buffer: [],
  face_color_g_buffer: [],
  face_color_b_buffer: []
};

export { parameters };
