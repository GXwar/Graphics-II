import model from '../configs/model';

/**
 * Parse the data from the .d file
 * @param {*} data 
 */
const parseFile = (data: string) => {
  let lines: string = <any>data.match(/[^\r\n]+/g);
  let [num, pointsNum, facesNum] = lines[0].trim().split(/\s+/);

  // Cause in some file, there are just two number in first line
  if(facesNum == undefined) {
    facesNum = pointsNum;
    pointsNum = num;
  }

  // load data to model
  model.pointsNum = parseInt(pointsNum, 10);
  model.facesNum = parseInt(facesNum, 10);
  // here we refresh the object when load different model
  model.points = [];
  model.faces = [];

  for (let i = 1; i <= model.pointsNum; i++) {
    let [x, y, z] = lines[i].trim().split(/\s+/);
    model.points.push([parseFloat(x), parseFloat(y), parseFloat(z)]);
  }

  for (let i = model.pointsNum + 1; i <= model.pointsNum + model.facesNum; i++) {
    let [num, ...res] = lines[i].trim().split(/\s+/);
    if (res.length > 2) {
      model.faces.push(res.map((x: any) => parseInt(x) - 1));
    }
  }
};

/**
 * Read the content of a file
 * @param {String} filePath 
 * @param {Function} callback 
 */
const readFile = (filePath: string) => {
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
const loadFile = (filePath: string, draw: Function) => {
  // load model
  readFile(filePath)
    .then((data: string) => {
      parseFile(data);
      draw();
    })
    .catch(() => {
      console.log('Load or parse file error');
    });
};

export default loadFile;
