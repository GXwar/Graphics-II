/******************** FILL PIXELS ********************/
import { parameters } from '../configs/parameters';
import { 
  Vector3d,
  EdgeTableElement
} from '../../lib/index';

// get a random integer in [0, 255]
const random = (): number => Math.floor(Math.random() * 256);
// convert 2d point to canvas point
const toPixel = (value: number, shortten: boolean = false): number => 
                Math.floor((value + 1) * parameters.height / 2) - (shortten ? 1 : 0);
const toFloatPixel = (value: number): number => (value + 1) * parameters.height / 2;

const bufferInit = (height: number, width: number): [Array<Array<Array<number>>>, Array<Array<number>>] => {
  const pixelBuffer = [];
  const zBuffer = [];
  for (let i = 0; i < height; i++) {
    pixelBuffer[i] = [];
    zBuffer[i] = [];
    for (let j = 0; j < width; j++) {
      pixelBuffer[i][j] = [0, 0, 0];
      zBuffer[i][j] = 1;
    }
  }
  return [pixelBuffer, zBuffer];
};

const edgeTableInit = (height: number): Array<Array<EdgeTableElement>> => {
  const edgeTable = [];
  for (let i = 0; i < height; i++) {
    edgeTable[i] = [];
  }
  return edgeTable;
};

const colorInit = () => {
  // give random color to each face
  for (let i = 0; i < parameters.facesNum; i++) {
    parameters.face_color_r_buffer.push(random());
    parameters.face_color_g_buffer.push(random());
    parameters.face_color_b_buffer.push(random());
  }
};

/**
 * Scan Conversion
 * 1. for each scan line, determine edges of polygons that intersect
 * 2. Find the start and end of the span
 * 3. Rely on scanline and pixel coherence to linearly interpolate (between scanlines and between pixels)
 */
const addEdgeToET = (lowerPoint: Vector3d, upperPoint: Vector3d, edgeTable: Array<Array<EdgeTableElement>>) => {
  // ignore horizontal edge and out of range point
  if (toPixel(lowerPoint.y) === toPixel(upperPoint.y)
      || lowerPoint.y > 1 || lowerPoint.y < -1) return;
  // swap the order of two points
  if (lowerPoint.y > upperPoint.y) {
    [lowerPoint, upperPoint] = [upperPoint, lowerPoint];
  }
  // create edge table element and add it into the edge table
  const ETElement = new EdgeTableElement(toPixel(lowerPoint.y), toPixel(upperPoint.y, true), toFloatPixel(lowerPoint.x), 
                                (lowerPoint.x - upperPoint.x) / (lowerPoint.y - upperPoint.y), upperPoint.z, lowerPoint.z);
  if (ETElement.yStart > ETElement.yMax) {
    ETElement.yMax = ETElement.yStart;
  }
  edgeTable[Math.floor(ETElement.yStart)].push(ETElement);
};

// Calculation of z
const calcZ = (edge: EdgeTableElement, ys: number): number => edge.yMax === edge.yStart ? edge.zUpper : 
                        edge.zUpper - (edge.zUpper - edge.zLower) * (edge.yMax - ys) / (edge.yMax - edge.yStart);

const scanConversion = (faces: Array<Array<number>>, calcPoints: Array<Vector3d>, backFaceSet: Set<number>,
                        height: number, width: number): Array<Array<Array<number>>> => {
  const [pixelBuffer, zBuffer] = bufferInit(height, width);
  let activeEdgeTable: Array<EdgeTableElement> = [];
  // for each face
  faces.forEach((face: Array<number>, index: number) => {
    // don't need to consider back face
    if (backFaceSet.has(index)) return;
    // build edge table
    const edgeTable = edgeTableInit(height);
    for (let i = 0; i < face.length; i++) {
      // get an edge 
      let lowerPoint = calcPoints[face[i]];
      let upperPoint = calcPoints[face[(i + 1) % face.length]];
      addEdgeToET(lowerPoint, upperPoint, edgeTable);
    }
    
    // fill pixel to pixel buffer
    let currentScanLine = 0;
    for (let i = 0; i < height; i++) {
      if (edgeTable[i].length > 0) {
        currentScanLine = i;
        break;
      }
    }
    for (let i = currentScanLine; i < height; i++) {
      // move edge from Edge Tabel to Active Edge Table
      for (let j = 0; j < edgeTable[i].length; j++) {
        activeEdgeTable.push(edgeTable[i][j]);
      }
      activeEdgeTable.sort((a, b) => {
        return a.xStart - b.xStart;
      });

      for (let j = 0; j + 1 < activeEdgeTable.length; j += 2) {
        const [left, right] = [activeEdgeTable[j], activeEdgeTable[j + 1]];
        if (left.xStart > right.xStart) continue;
        const [za, zb] = [calcZ(left, i), calcZ(right, i)];
        for (let k = Math.max(0, Math.floor(left.xStart)); k < Math.floor(right.xStart) && k < width; k++) {
          // calculate the current point's z coordinate
          let zp = k == Math.max(0, left.xStart) ? za : zb - (zb - za) * (right.xStart - k) / (right.xStart - left.xStart);
          if (zp > zBuffer[i][k]) continue;
          zBuffer[i][k] = zp;
          pixelBuffer[i][k] = [parameters.face_color_r_buffer[index], parameters.face_color_g_buffer[index], parameters.face_color_b_buffer[index]];
        }
      }
      
      activeEdgeTable = activeEdgeTable
        .filter(edge => edge.yMax !== i) // remove edge from Active Edge Table while y = yMax
        .map(edge => {  // increase x with delta because y increased with 1
          edge.xStart += edge.delta;
          return edge;
        });
    }
  });
  return pixelBuffer;
};

export {
  colorInit,
  scanConversion
};
