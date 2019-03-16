/*
 * @Author: GXwar 
 * @Date: 2019-02-19 00:20:21 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 22:37:19
 */
import { Camera } from '../cameras/Camera';
import { Matrix } from '../math/Matrix';
import { Vector3d } from '../math/Vector3d';
import { Model } from '../objects/Model';

const world2Camera = (camera: Camera): Matrix => {
  const R: Matrix = new Matrix([
    [camera.U.x, camera.U.y, camera.U.z, 0],
    [camera.V.x, camera.V.y, camera.V.z, 0],
    [camera.N.x, camera.N.y, camera.N.z, 0],
    [0          , 0          , 0          , 1]
  ]);
  const T: Matrix = new Matrix([
    [1, 0, 0, -camera.position.x],
    [0, 1, 0, -camera.position.y],
    [0, 0, 1, -camera.position.z],
    [0, 0, 0, 1           ]
  ]);
  return R.multiply(T);
};

const perspectiveTransform = (h: number, d: number, f: number): Matrix => new Matrix([
  [d / h, 0,     0,           0                ],
  [0,     d / h, 0,           0                ],
  [0,     0,     f / (f - d), - d * f / (f - d)],
  [0,     0,     1,           0                ]
]);

/**
 * Back-face culling
 * Visible if Np dot product N > 0
 * Note: Some the polygons are denoted in anti-clockwise order
 */
const backFaceCulling = (model: Model, camera: Camera): Set<number> => {
  const backFaceSet: Set<number> = new Set();
  model.faces.forEach((face: Array<number>, index: number) => {
    const view = camera.position.subtract(model.points[face[1]]).unit();
    const cos = model.facesNormal[index].dotProduct(view);
    if (cos >= 0) {
      backFaceSet.add(index);
    }
  });
  return backFaceSet;
};

// Calculate model
const calcModel = (model: Model, camera: Camera, h: number, d: number, f: number): Array<Vector3d> => {
  const combo: Matrix = perspectiveTransform(h, d, f).multiply(world2Camera(camera));
  return model.points.map(point => {
    return combo.multiply(point.extend().toMatrix()).toVector();
  });
};


export {
  backFaceCulling,
  calcModel
};
