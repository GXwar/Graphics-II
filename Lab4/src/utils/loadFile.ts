/*
 * @Author: GXwar 
 * @Date: 2019-02-12 15:08:51 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-09 20:06:24
 */
import { model, parameters } from '../configs/parameters';
import { 
  Vector3d, 
  Model
} from '../../lib/index';

/**
 * Parse the data from the .d file, return a Model
 * @param data 
 * @param objPosition 
 */

const coToDegree = (cosaT, sinaT) => {
  let angleCandidate = Math.acos(cosaT);
  return Math.floor(100 * sinaT) == Math.floor(100 * Math.sin(angleCandidate)) ? angleCandidate * 180 / Math.PI : 360 - angleCandidate * 180 / Math.PI;
}
const parseFile = (data: string, objPosition: Vector3d): Model => {
  let lines: string = <any>data.match(/[^\r\n]+/g);
  let [num, pointsNum, facesNum] = lines[0].trim().split(/\s+/);
  // Cause in some file, there are just two number in first line
  if(facesNum == undefined) {
    facesNum = pointsNum;
    pointsNum = num;
  }
  const [pNum, fNum] = [parseInt(pointsNum, 10), parseInt(facesNum)];
  // edge of the model
  let xMin = 0x7fffffff;
  let xMax = -0x7fffffff;
  let yMin = 0x7fffffff;
  let yMax = -0x7fffffff;
  let zMin = 0x7fffffff;
  let zMax = -0x7fffffff;

  // load data to model
  // 1. save all points
  for (let i = 1; i <= pNum; i++) {
    let [x, y, z] = lines[i].trim().split(/\s+/).map(item => parseFloat(item));
    xMin = Math.min(xMin, x);
    xMax = Math.max(xMax, x);
    yMin = Math.min(yMin, y);
    yMax = Math.max(yMin, y);
    zMin = Math.min(zMin, z);
    zMax = Math.max(zMax, z);
    model.points.push(new Vector3d(
      x + objPosition.x,
      y + objPosition.y,
      z + objPosition.z
    ));
    model.pointsNormal.push(new Vector3d(0, 0, 0));
  }
  let xRange = xMax - xMin, yRange = yMax - yMin, zRange = zMax - zMin;
  // 2. texture map
  // console.log("------------------------------ texturePoints ------------------------------");
  for (let i = 0; i < pNum; i++) {
    let x = (model.points[i].x - objPosition.x - xMin) / (xRange + 0.0001);
    let y = (model.points[i].y - objPosition.y - yMin) / (yRange + 0.0001);
    let z = (model.points[i].z - objPosition.z - zMin) / (zRange + 0.0001);
    // const thetaDegree = coToDegree(x / Math.sqrt(x * x + y * y), y / Math.sqrt(x * x + y * y));
    model.texturePoints[i] = [x, z];
    // console.log(x + " " + z);
  }
  // 3. save all faces
  for (let i = pNum + 1; i <= pNum + fNum; i++) {
    let [_, ...res] = lines[i].trim().split(/\s+/);
    if (res.length <= 2) continue;
    let face: Array<number> = res.map((x: string): number => parseInt(x, 10) - 1);
    model.faces.push(face);
    model.facesNormal.push(model.normalizeFace(model.faces.length - 1));
  }
  // 4. compute point normal
  for (let i = 0; i < model.facesNormal.length; i++) {
    for (let j = 0; j < model.faces[i].length; j++) {
      model.pointsNormal[model.faces[i][j]] = model.pointsNormal[model.faces[i][j]].add(model.facesNormal[i]);
    }
  }
  for (let i = 0; i < model.points.length; i++) {
    if (model.pointsNormal[i].abs()) {
      model.pointsNormal[i] = model.pointsNormal[i].unit();
    }
  }
  return model;
};

/**
 * Read the content of a file
 * @param filePath 
 */
const readFile = (filePath: string, readText: boolean): Promise<any> => {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
    if (!readText) xhr.responseType = 'blob';
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          res(readText ? this.responseText : this.response);
        } else {
          rej();
        }
      }
    };
    xhr.send();
  });
};

export const getBMP = (buffer) => {
  const datav = new DataView(buffer);
  const bitmap: any = {};
  bitmap.fileheader = {};
  bitmap.fileheader.bfType =
      datav.getUint16(0, true);
  bitmap.fileheader.bfSize =
      datav.getUint32(2, true);
  bitmap.fileheader.bfReserved1 =
      datav.getUint16(6, true);
  bitmap.fileheader.bfReserved2 =
      datav.getUint16(8, true);
  bitmap.fileheader.bfOffBits =
      datav.getUint32(10, true);
  bitmap.infoheader = {};
  bitmap.infoheader.biSize =
      datav.getUint32(14, true);
  bitmap.infoheader.biWidth =
      datav.getUint32(18, true);
  bitmap.infoheader.biHeight =
      datav.getUint32(22, true);
  bitmap.infoheader.biPlanes =
      datav.getUint16(26, true);
  bitmap.infoheader.biBitCount =
      datav.getUint16(28, true);
  bitmap.infoheader.biCompression =
      datav.getUint32(30, true);
  bitmap.infoheader.biSizeImage =
      datav.getUint32(34, true);
  bitmap.infoheader.biXPelsPerMeter =
      datav.getUint32(38, true);
  bitmap.infoheader.biYPelsPerMeter =
      datav.getUint32(42, true);
  bitmap.infoheader.biClrUsed =
      datav.getUint32(46, true);
  bitmap.infoheader.biClrImportant = 
      datav.getUint32(50, true);
  const start = bitmap.fileheader.bfOffBits;
  bitmap.stride =
      Math.floor((bitmap.infoheader.biBitCount
          * bitmap.infoheader.biWidth + 31) / 32) * 4;
  bitmap.pixels = new Uint8Array(buffer, start);
  return bitmap;
};

export const readBmpToBuffer = (ctx: CanvasRenderingContext2D, bitmap: any) => {
  const Width = bitmap.infoheader.biWidth;
  const Height = bitmap.infoheader.biHeight;
  const imageData = ctx.createImageData(Width, Height);
  const data = imageData.data;
  const bmpdata = bitmap.pixels;
  // console.log(bmpdata);
  const stride = bitmap.stride;

  let tBuffer: Array<Array<Array<number>>> = [];
  
  let flag = 0;
  for (let i = 0; i < Height; i++) {
    let t = [];
    for (let j = 0; j < Width * 3; j += 3) {
      const index2 = j * 3 + stride * i;
      t.push([
        bmpdata[index2 + 2],
        bmpdata[index2 + 1],
        bmpdata[index2]
      ])
    }
    tBuffer.push(t);
  }
  return tBuffer;
};

/**
 * Load and render selected model
 * @param {String} filePath 
 */
const loadFile = (filePath: string, texturePath: string, ctx: CanvasRenderingContext2D, draw: Function): void => {
  readFile(filePath, true)
    .then((modelData) => {
      readFile(texturePath, false)
        .then((textureData) => {
          parseFile(modelData, new Vector3d(0, 0, 0));
          model.colorInit(false, parameters.lights);
          model.computeScenePointNormal();
          var reader = new FileReader();
          reader.readAsArrayBuffer(textureData);
          reader.onload = () => {
            model.textureMap = readBmpToBuffer(ctx, getBMP(reader.result));
            // console.log("------------------------------ texture map ------------------------------");
            // console.log(model.textureMap.length + " " + model.textureMap[0].length + " " + model.textureMap[0][0].length);
            // console.log(model.textureMap);
            draw();
          };
        });
    })
    .catch(() => {
      console.log(`Load or parse file${filePath} error`);
    });
};

export default loadFile;
