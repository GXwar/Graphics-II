import camera from '../configs/camera';
import model from '../configs/model';
import result from '../configs/result';
import { vectorExtend, vectorCollapse, vectorSubtract, vector3dCrossProduct, vector3dDotProduct } from './vector';
import { matrixMultiply, matrixMultiplyVector } from './matrix';

const world2Camera = () => {
  const T = [
    [1, 0, 0, -camera.C[0]],
    [0, 1, 0, -camera.C[1]],
    [0, 0, 1, -camera.C[2]],
    [0, 0, 0, 1           ]
  ];
  const R = [
    [camera.U[0], camera.U[1], camera.U[2], 0],
    [camera.V[0], camera.V[1], camera.V[2], 0],
    [camera.N[0], camera.N[1], camera.N[2], 0],
    [0          , 0          , 0          , 1]
  ];
  const RT = matrixMultiply(R, T);
  return RT;
};

const perspectiveTrans = () => {
  const a = camera.f / (camera.f - camera.d);
  const b = camera.d / camera.h;
  const mPers = [
    [b, 0, 0, 0          ],
    [0, b, 0, 0          ],
    [0, 0, a, -a*camera.d],
    [0, 0, 1, 0          ]
  ];
  return mPers;
};

/**
 * Back-face culling
 * Visible if Np dot product N > 0
 * Note: Some the polygons are denoted in anti-clockwise order
 */
export const backFaceCulling = () => {
  result.backFaceSet = new Set();
  model.faces.forEach((x, index) => {
    if (vector3dDotProduct(vector3dCrossProduct(vectorSubtract(model.points[x[0]], model.points[x[1]]), vectorSubtract(model.points[x[1]], model.points[x[2]])), 
        vectorSubtract(camera.C, model.points[x[0]])) >= 0) {
      result.backFaceSet.add(index);
    }
  });
};

// Calculate model
export const calcModel = model => {
  const combo = matrixMultiply(perspectiveTrans(), world2Camera());
  return model.points.map(point => {
    let t = matrixMultiplyVector(combo, vectorExtend(point));
    return vectorCollapse(t);
  });
};
