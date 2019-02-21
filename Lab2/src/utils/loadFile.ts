/*
 * @Author: GXwar 
 * @Date: 2019-02-12 15:08:51 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 22:54:34
 */
import { model } from '../configs/parameters';
import { 
  Vector3d, 
  Model
} from '../../lib/index';

/**
 * Parse the data from the .d file, return a Model
 * @param data 
 * @param objPosition 
 */
const parseFile = (data: string, objPosition: Vector3d): Model => {
  let lines: string = <any>data.match(/[^\r\n]+/g);
  let [num, pointsNum, facesNum] = lines[0].trim().split(/\s+/);
  // Cause in some file, there are just two number in first line
  if(facesNum == undefined) {
    facesNum = pointsNum;
    pointsNum = num;
  }
  const [pNum, fNum] = [parseInt(pointsNum, 10), parseInt(facesNum)];
  // load data to model
  const lastModelPointsNum = model.points.length;
  for (let i = 1; i <= pNum; i++) {
    let [x, y, z] = lines[i].trim().split(/\s+/);
    model.points.push(new Vector3d(
      parseFloat(x) + objPosition.x, 
      parseFloat(y) + objPosition.y, 
      parseFloat(z) + objPosition.z
    ));
  }

  for (let i = pNum + 1; i <= pNum + fNum; i++) {
    let [_, ...res] = lines[i].trim().split(/\s+/);
    if (res.length > 2) {
      model.faces.push(res.map((x: string): number => parseInt(x, 10) - 1 + lastModelPointsNum));
    }
  }
  console.log(model);
  return model;
};

/**
 * Read the content of a file
 * @param filePath 
 */
const readFile = (filePath: string): Promise<string> => {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          res(this.responseText);
        } else {
          rej();
        }
      }
    };
    xhr.send();
  });
};

/**
 * Load and render selected model
 * @param {String} filePath 
 */
const loadFile = (filePaths: Array<string>, draw: Function): void => {
  if (filePaths.length == 0) {
    model.colorInit();
    draw();
  } else {
    const file = filePaths.pop();
    readFile(file)
      .then((data: string): void => {
        parseFile(data, new Vector3d(0, 0, 0));
        loadFile(filePaths, draw);
      })
      .catch(() => {
        console.log(`Load or parse file${file} error`);
      });
  }
};

export default loadFile;
