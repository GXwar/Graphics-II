import { parameters } from '../configs/parameters';
import { Matrix, Vector3d } from '../../lib/index';

const world2Camera = (): Matrix => {
  const camera = parameters.camera;
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

const perspectiveTrans = (): Matrix => {
  const a = parameters.f / (parameters.f - parameters.d);
  const b = parameters.d / parameters.h;
  return new Matrix([
    [b, 0, 0, 0          ],
    [0, b, 0, 0          ],
    [0, 0, a, -a*parameters.d],
    [0, 0, 1, 0          ]
  ]);
};

/**
 * Back-face culling
 * Visible if Np dot product N > 0
 * Note: Some the polygons are denoted in anti-clockwise order
 */
export const backFaceCulling = () => {
  parameters.backFaceSet = new Set();
  parameters.faces.forEach((x, index) => {
    // if (vector3dDotProduct(vector3dCrossProduct(vectorSubtract(model.points[x[0]], model.points[x[1]]), vectorSubtract(model.points[x[1]], model.points[x[2]])), 
    //     vectorSubtract(camera.C, model.points[x[0]])) >= 0) {
    //   result.backFaceSet.add(index);
    // }
    const v1 = parameters.points[x[0]].subtract(parameters.points[x[1]]);
    const v2 = parameters.points[x[1]].subtract(parameters.points[x[2]]);
    const Np = v1.crossProduct(v2);
    const N = parameters.camera.position.subtract(parameters.points[x[0]]);
    if (Np.dotProduct(N) >= 0) {
      parameters.backFaceSet.add(index);
    }
  });
};

// Calculate model
export const calcModel = (): Array<Vector3d> => {
  const combo: Matrix = perspectiveTrans().multiply(world2Camera());
  return parameters.points.map(point => {
    return combo.multiply(point.extend().toMatrix()).toVector();
  });
};
