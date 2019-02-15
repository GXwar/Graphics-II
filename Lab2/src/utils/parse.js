import model from '../configs/model.js';

/**
 * Parse the data from the .d file
 * @param {*} data 
 */
export const parseFile = (data) => {
  let lines = data.match(/[^\r\n]+/g);
  let [num, pointsNum, facesNum] = lines[0].trim().split(/\s+/);

  // Cause in some file, there are just two number in first line
  if(facesNum == undefined) {
    facesNum = pointsNum;
    pointsNum = num;
  }

  // load data to model
  model.pointsNum = parseInt(pointsNum, 10);
  model.facesNum = parseInt(facesNum, 10);
  // here we clear these two arrays to refresh the object when load different model
  model.points = [];
  model.faces = [];

  for (let i = 1; i <= model.pointsNum; i++) {
    let [x, y, z] = lines[i].trim().split(/\s+/);
    
    model.points.push([parseFloat(x), parseFloat(y), parseFloat(z)]);
  }

  for (let i = model.pointsNum + 1; i <= model.pointsNum + model.facesNum; i++) {
    let [num, ...res] = lines[i].trim().split(/\s+/);
    if (res.length > 2) {
      model.faces.push(res.map(x => parseInt(x) - 1));
    }
  }
};
