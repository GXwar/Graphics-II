// Save the data of the model
// let model = {
//   name: '',
//   pointsNum: 0,
//   facesNum: 0,
//   points: [],
//   faces: [],
//   backFaceCullingFaces: []
// };

let model = {
  name: 'house',
  backFaceCulling: false,
  pointsNum: 10,
  facesNum: 7,
  points: [
    [8.0, 16.0, 30.0],
    [16.0, 10.0, 30.0],
    [16.0, 0.0, 30.0],
    [0.0, 0.0, 30.0],
    [0.0, 10.0, 30.0],
    [8.0, 16.0, 54.0],
    [16.0, 10.0, 54.0],
    [16.0, 0.0, 54.0],
    [0.0, 0.0, 54.0],
    [0.0, 10.0, 54.0]
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
  cullingFaces: []
};

export default model;
