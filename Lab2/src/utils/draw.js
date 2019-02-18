import model from '../configs/model.js';
import result from '../configs/result.js';
import { calcModel, backFaceCulling } from '../operate/transform.js';
import EdgeTableElement from '../obj/EdgeTableElement.js';



const random = () => Math.floor(Math.random() * 256);

const toPixel = (value, shortten) => {
  return Math.floor((value + 1) * result.height / 2) - (shortten ? 1 : 0);
}
const toFloatPixel = (value) => {
  return (value + 1) * result.height / 2;
}

// Initialize refresh buffer, 3 channels
// Initialize zBuffer, the value is between 0 ~ 1
const bufferReset = () => {
  for (let i = 0; i < result.height; i++) {
    result.pixelBuffer[i] = [];
    result.zBuffer[i] = [];
    for (let j = 0; j < result.width; j++) {
      result.pixelBuffer[i][j] = [0, 0, 0];
      result.zBuffer[i][j] = 1;
    }
  }
};

const bufferInit = () => {
  bufferReset();
  // give random color to each face
  for (let i = 0; i < model.facesNum; i++) {
    result.face_color_r_buffer.push(random());
    result.face_color_g_buffer.push(random());
    result.face_color_b_buffer.push(random());
  }
};

const edgeTableReset = () => {
  for (let i = 0; i < result.height; i++) {
    result.edgeTable[i] = [];
  }
};

const scanConversion = (height, width) => {
  // clear before scan
  bufferReset();
  model.faces.forEach((face, index) => {
    // do not consider back face
    if (result.backFaceSet.has(index)) return;
    // console.log(`---------${index}--------`)

    // build the edge table for each face
    edgeTableReset();
    const pointNum = face.length;
    for (let i = 0; i < pointNum; i++) {
      // add edge to edge table 
      let lowerPoint = result.calcPoints[face[i]];
      let upperPoint = result.calcPoints[face[(i+1)%pointNum]];
      // handle exception
      // ignore horizontal edge
      if (toPixel(lowerPoint[1]) === toPixel(upperPoint[1])) continue;
      // swap the order of two points
      if (lowerPoint[1] > upperPoint[1]) {
        [lowerPoint, upperPoint] = [upperPoint, lowerPoint];
      }
      // ignore the point which is out of the screen
      if (lowerPoint[1] > 1 || lowerPoint[1] < -1) continue;
      // create edge table element and add it into the edge table
      const ETElement = new EdgeTableElement(toPixel(lowerPoint[1]), toPixel(upperPoint[1], true), toFloatPixel(lowerPoint[0]), 
                                    (lowerPoint[0] - upperPoint[0]) / (lowerPoint[1] - upperPoint[1]), upperPoint[2], lowerPoint[2]);
      if (ETElement.yStart > ETElement.yMax) {
        ETElement.yMax = ETElement.yStart;
      }
      result.edgeTable[Math.floor(ETElement.yStart)].push(ETElement);
    }
    // decide pixel's color
    let currentScanLine = 0;
    for (let i = 0; i < result.height; i++) {
      if (result.edgeTable[i].length > 0) {
        currentScanLine = i;
        break;
      }
    }
    // console.log("scan line: ", currentScanLine);
    
    for (let i = currentScanLine; i < result.height; i++) {
      // move edge from Edge Tabel to Active Edge Table
      for (let j = 0; j < result.edgeTable[i].length; j++) {
        result.activeEdgeTable.push(result.edgeTable[i][j]);
      }
      result.activeEdgeTable.sort((a, b) => {
        return a.xStart - b.xStart;
      });

      for (let j = 0; j + 1 < result.activeEdgeTable.length; j += 2) {
        const left = result.activeEdgeTable[j];
        const right = result.activeEdgeTable[j + 1];
        // console.log(left, right);
        if (left.xStart > right.xStart) continue;

        // const za = left.yMax === left.yStart ? left.zUpper :
        //             left.zUpper - (left.zUpper - left.zLower) * (left.yMax - i) / (left.yMax - left.yStart);
        // const zb = right.yMax === right.yStart ? right.zUpper :
        //             right.zUpper - (right.zUpper - right.zLower) * (right.yMax - i) / (right.yMax - right.yStart);
        
        for (let k = Math.max(0, Math.floor(left.xStart)); k < Math.floor(right.xStart) && k < result.width; k++) {
          // calculate the current point's z coordinate
          // let zp = k == Math.max(0, left.xStart) ? za : zb - (zb - za) * (right.xStart - k) / (right.xStart - left.xStart);
          // if (zp > result.zBuffer[i][k]) continue;
          // result.zBuffer[i][k] = zp;
          result.pixelBuffer[i][k] = [result.face_color_r_buffer[index], result.face_color_g_buffer[index], result.face_color_b_buffer[index]];
        }
      }
      // remove edge from AET while y = yMax
      // replace x by increment
      result.activeEdgeTable = result.activeEdgeTable
        .filter(edge => edge.yMax !== i)
        .map(edge => {
          edge.xStart += edge.delta;
          return edge;
        });
    }
  });
};

/**
 * Draw model on the canvas
 * @param {Canvas context} ctx 
 * @param {Canvas' width} width 
 * @param {Canvas' height} height 
 */
const draw = (ctx, width, height) => () => {
  // back face culling, save it to model object
  backFaceCulling();
  // transform points from virtual world to 2d screen
  result.calcPoints = calcModel(model);
  // z-buffer algorithm
  bufferInit();
  scanConversion();
  // draw image
  ctx.clearRect(0, 0, width, height);
  const imageData = ctx.createImageData(width, height);
  const data = new Uint8Array(width * height * 4);
  for (let i = 0; i < result.height; i++) {
    for (let j = 0; j < result.width; j++) {
      const t = i * result.width + j;
      // r g b a
      data[t * 4 + 0] = result.pixelBuffer[i][j][0];
      data[t * 4 + 1] = result.pixelBuffer[i][j][1];
      data[t * 4 + 2] = result.pixelBuffer[i][j][2];
      data[t * 4 + 3] = 255;
    }
  }
  imageData.data.set(data);
  ctx.putImageData(imageData, 0, 0);
};

export default draw;
