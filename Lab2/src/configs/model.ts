/**
 * Inputed Model
 */
interface ModelObject {
  pointsNum: number,
  facesNum: number,
  points: Array<Array<number>>,
  faces: Array<Array<number>>
};

const model: ModelObject = {
  pointsNum: 0,
  facesNum: 0,
  points: [],
  faces: []
};

export default model;
