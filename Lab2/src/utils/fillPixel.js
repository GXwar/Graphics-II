/******************** FILL PIXELS ********************/
import model from '../configs/model.js';
import result from '../configs/result.js';
import EdgeTableElement from '../obj/EdgeTableElement.js';

// get a random integer in [0, 255]
const random = () => Math.floor(Math.random() * 256);
// convert 2d point to canvas point
const toPixel = (value, shortten) => Math.floor((value + 1) * result.height / 2) - (shortten ? 1 : 0);
const toFloatPixel = (value) => (value + 1) * result.height / 2;

// reset pixel buffer and z buffer
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

// reset edge table
const edgeTableReset = () => {
  for (let i = 0; i < result.height; i++) {
    result.edgeTable[i] = [];
  }
};

export const bufferInit = () => {
  bufferReset();
  // give random color to each face
  for (let i = 0; i < model.facesNum; i++) {
    result.face_color_r_buffer.push(random());
    result.face_color_g_buffer.push(random());
    result.face_color_b_buffer.push(random());
  }
};

/**
 * Scan Conversion
 * 1. for each scan line, determine edges of polygons that intersect
 * 2. Find the start and end of the span
 * 3. Rely on scanline and pixel coherence to linearly interpolate (between scanlines and between pixels)
 */
const addEdgeToET = (lowerPoint, upperPoint) => {
  // ignore horizontal edge and out of range point
  if (toPixel(lowerPoint[1]) === toPixel(upperPoint[1])
      || lowerPoint[1] > 1 || lowerPoint[1] < -1) return;
  // swap the order of two points
  if (lowerPoint[1] > upperPoint[1]) {
    [lowerPoint, upperPoint] = [upperPoint, lowerPoint];
  }
  // create edge table element and add it into the edge table
  const ETElement = new EdgeTableElement(toPixel(lowerPoint[1]), toPixel(upperPoint[1], true), toFloatPixel(lowerPoint[0]), 
                                (lowerPoint[0] - upperPoint[0]) / (lowerPoint[1] - upperPoint[1]), upperPoint[2], lowerPoint[2]);
  if (ETElement.yStart > ETElement.yMax) {
    ETElement.yMax = ETElement.yStart;
  }
  result.edgeTable[Math.floor(ETElement.yStart)].push(ETElement);
};

// Calculation of z
const calcZ = (edge, ys) => edge.yMax === edge.yStart ? edge.zUpper : 
                        edge.zUpper - (edge.zUpper - edge.zLower) * (edge.yMax - ys) / (edge.yMax - edge.yStart);

const scanConversion = () => {
  bufferReset();
  // for each face
  model.faces.forEach((face, index) => {
    // don't need to consider back face
    if (result.backFaceSet.has(index)) return;
    // build edge table
    edgeTableReset();
    for (let i = 0; i < face.length; i++) {
      // get an edge 
      let lowerPoint = result.calcPoints[face[i]];
      let upperPoint = result.calcPoints[face[(i + 1) % face.length]];
      addEdgeToET(lowerPoint, upperPoint);
    }
    
    // fill pixel to pixel buffer
    let currentScanLine = 0;
    for (let i = 0; i < result.height; i++) {
      if (result.edgeTable[i].length > 0) {
        currentScanLine = i;
        break;
      }
    }
    for (let i = currentScanLine; i < result.height; i++) {
      // move edge from Edge Tabel to Active Edge Table
      for (let j = 0; j < result.edgeTable[i].length; j++) {
        result.activeEdgeTable.push(result.edgeTable[i][j]);
      }
      result.activeEdgeTable.sort((a, b) => {
        return a.xStart - b.xStart;
      });

      for (let j = 0; j + 1 < result.activeEdgeTable.length; j += 2) {
        const [left, right] = [result.activeEdgeTable[j], result.activeEdgeTable[j + 1]];
        if (left.xStart > right.xStart) continue;
        const [za, zb] = [calcZ(left, i), calcZ(right, i)];
        for (let k = Math.max(0, Math.floor(left.xStart)); k < Math.floor(right.xStart) && k < result.width; k++) {
          // calculate the current point's z coordinate
          let zp = k == Math.max(0, left.xStart) ? za : zb - (zb - za) * (right.xStart - k) / (right.xStart - left.xStart);
          if (zp > result.zBuffer[i][k]) continue;
          result.zBuffer[i][k] = zp;
          result.pixelBuffer[i][k] = [result.face_color_r_buffer[index], result.face_color_g_buffer[index], result.face_color_b_buffer[index]];
        }
      }
      
      result.activeEdgeTable = result.activeEdgeTable
        .filter(edge => edge.yMax !== i) // remove edge from Active Edge Table while y = yMax
        .map(edge => {  // increase x with delta because y increased with 1
          edge.xStart += edge.delta;
          return edge;
        });
    }
  });
};

export default scanConversion;
