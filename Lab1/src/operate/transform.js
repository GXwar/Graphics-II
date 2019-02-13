import camera from '../configs/camera.js';
import model from '../configs/model.js';
import { vectorExtend, vectorCollapse, vectorSubtract, vector3dCrossProduct } from './vector.js';
import { matrixMultiply, matrixMultiplyVector } from './matrix.js';

export const model2World = (model) => {
  return {
    points: model.points,
    faces: model.faces
  };
};

export const world2Camera = (model) => {
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
  return {
    points: model.points.map(point3d => matrixMultiplyVector(RT, vectorExtend(point3d))),
    faces: model.faces
  };
};

export const perspectiveTrans = (model) => {
  const a = camera.f / (camera.f - camera.d);
  const b = camera.d / camera.h;
  const mPers = [
    [b, 0, 0, 0          ],
    [0, b, 0, 0          ],
    [0, 0, a, -a*camera.d],
    [0, 0, 1, 0          ]
  ];
  return {
    points: model.points.map(item => vectorCollapse(matrixMultiplyVector(mPers, item))),
    faces: model.faces
  };
};

export const backFaceCulling = (model) => {
  return {
    points: model.points,
    faces: model.faces.filter(x => vector3dCrossProduct(
      vectorSubtract(model.points[x[1]], model.points[x[0]]),
      vectorSubtract(model.points[x[2]], model.points[x[1]])
    )[2] <= 0)
  };
};
