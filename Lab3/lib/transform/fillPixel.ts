/*
 * @Author: GXwar 
 * @Date: 2019-02-17 14:44:32 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-06 00:38:04
 */
/******************** FILL PIXELS ********************/
import { 
  Vector3d,
  EdgeTableElement,
  Model,
  RGBA
} from '../../lib/index';

// convert 2d point to canvas point
const toPixel = (value: number, height: number, shortten: boolean = false): number => 
                Math.floor((value + 1) * height / 2) - (shortten ? 1 : 0);
const toFloatPixel = (value: number, height: number): number => (value + 1) * height / 2;

const bufferInit = (height: number, width: number): [Array<Array<RGBA>>, Array<Array<number>>] => {
  const iBuffer = [];
  const zBuffer = [];
  for (let i = 0; i < height; i++) {
    iBuffer[i] = [];
    zBuffer[i] = [];
    for (let j = 0; j < width; j++) {
      iBuffer[i][j] = new RGBA(0, 0, 0, 255);
      zBuffer[i][j] = 1;
    }
  }
  return [iBuffer, zBuffer];
};

const edgeTableInit = (height: number): Array<Array<EdgeTableElement>> => {
  const edgeTable = [];
  for (let i = 0; i < height; i++) {
    edgeTable[i] = [];
  }
  return edgeTable;
};

/**
 * Scan Conversion
 * 1. for each scan line, determine edges of polygons that intersect
 * 2. Find the start and end of the span
 * 3. Rely on scanline and pixel coherence to linearly interpolate (between scanlines and between pixels)
 */
const diffuseTrem = (kd: number, ILight: number, normal: Vector3d, light: Vector3d) => {
  const gradient = normal.dotProduct(light);
  return gradient > 0 ? gradient * kd * ILight : 0;
}

const addEdgeToEdgeTable = (model: Model, indexStart: number, indexEnd: number, lowerPoint: Vector3d, upperPoint: Vector3d, 
                              edgeTable: Array<Array<EdgeTableElement>>, height: number): void => {
  // ignore horizontal edge and out of range point
  if (toPixel(lowerPoint.y, height) === toPixel(upperPoint.y, height) || lowerPoint.y > 1 || lowerPoint.y < -1) return;
  // swap the order of two points
  if (lowerPoint.y > upperPoint.y) {
    [lowerPoint, upperPoint] = [upperPoint, lowerPoint];
    [indexStart, indexEnd] = [indexEnd, indexStart];
  }
  // create edge table element and add it into the edge table
  const ETElement = new EdgeTableElement(toPixel(lowerPoint.y, height), toPixel(upperPoint.y, height), toFloatPixel(lowerPoint.x, height), 
                          (lowerPoint.x - upperPoint.x) / (lowerPoint.y - upperPoint.y), lowerPoint.z,
                          (lowerPoint.z - upperPoint.z) / (toPixel(lowerPoint.y, height) - toPixel(upperPoint.y, height)),
                          model.pointsNormal[indexStart], model.pointsNormal[indexEnd]);
  edgeTable[Math.floor(ETElement.yStart)].push(ETElement);
};

const scanConversion = (model: Model, lights: Array<Vector3d>, calcPoints: Array<Vector3d>, backFaceSet: Set<number>,
                         height: number, width: number, shadingType: string): Array<Array<RGBA>> => {
  const [iBuffer, zBuffer] = bufferInit(height, width);
  let activeEdgeTable: Array<EdgeTableElement> = [];
  const redSet = new Set();
  // for each face
  model.faces.forEach((face: Array<number>, index: number) => {
    // don't need to consider backface
    if (backFaceSet.has(index)) return;
    // build edge table
    const edgeTable = edgeTableInit(height);
    for (let i = 0; i < face.length; i++) {
      // get an edge 
      let [indexStart, indexEnd] = [face[i], face[(i + 1) % face.length]];
      let [lowerPoint, upperPoint] = [calcPoints[indexStart], calcPoints[indexEnd]];
      addEdgeToEdgeTable(model, indexStart, indexEnd, lowerPoint, upperPoint, edgeTable, height);
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

      // remove the leaving edge
      activeEdgeTable = activeEdgeTable
        // remove edge from Active Edge Table while y = yMax
        .filter(edge => edge.yMax !== i) 
        // sort AET by xStart
        .sort((a, b) => {
          return a.xStart - b.xStart;
        });

      for (let j = 0; j + 1 < activeEdgeTable.length; j += 2) {
        const [left, right] = [activeEdgeTable[j], activeEdgeTable[j + 1]];
        let zCurrent = left.zStart;
        const zDeltaToX = (left.zStart - right.zStart) / (left.xStart - right.xStart);
        if (shadingType == 'Constant') {
          // gray: constant shading color for each face
          let gray: number = 0;
          let curNormal: Vector3d = model.facesNormal[index];
          const org: Vector3d = new Vector3d(0, 0, 0);
          for(let light of lights) {
            light = org.subtract(light).unit();
            gray += diffuseTrem(1, 88, curNormal, light);
          }
          for (let k = Math.floor(left.xStart); k < Math.floor(right.xStart); k++) {
              if (zCurrent <= zBuffer[i][k]) {
                  zBuffer[i][k] = zCurrent;
                  iBuffer[i][k] = new RGBA(gray, gray, gray, 255);
              }
              zCurrent += zDeltaToX;
          }
        } else if(shadingType === 'Gouraud') {
          // according to intensity
          const la: Vector3d = left.normalEnd.scale((i - left.yStart) / (left.yMax - left.yStart))
                                              .add(left.normalStart.scale((left.yMax - i) / (left.yMax - left.yStart)));
          const lb: Vector3d = right.normalEnd.scale((i - right.yStart) / (right.yMax - right.yStart))
                                              .add(right.normalStart.scale((right.yMax - i) / (right.yMax - right.yStart)));
          const curNormal = right.xStart - left.xStart === 0 ? la.unit() : la.add(lb).unit();

          let gray = 0;
          const org: Vector3d = new Vector3d(0, 0, 0);
          for(let light of lights) {
            light = org.subtract(light).unit();
            gray += diffuseTrem(1, 88, curNormal, light);
          }
          for (let k = Math.floor(left.xStart); k < Math.floor(right.xStart); k++) {
              if (zCurrent <= zBuffer[i][k]) {
                  zBuffer[i][k] = zCurrent;
                  iBuffer[i][k] = new RGBA(gray, gray, gray, 255);
              }
              zCurrent += zDeltaToX;
          }

        } else if(shadingType === 'Phong') {
            // according to intensity
          const la: Vector3d = left.normalEnd.scale((i - left.yStart) / (left.yMax - left.yStart))
                                              .add(left.normalStart.scale((left.yMax - i) / (left.yMax - left.yStart)));
          const lb: Vector3d = right.normalEnd.scale((i - right.yStart) / (right.yMax - right.yStart))
                                              .add(right.normalStart.scale((right.yMax - i) / (right.yMax - right.yStart)));

          for (let k = Math.floor(left.xStart); k < Math.floor(right.xStart); k++) {
              if (zCurrent <= zBuffer[i][k]) {
                  zBuffer[i][k] = zCurrent;
                  const curNormal = right.xStart - left.xStart === 0 ? la.unit() :
                      la.scale((right.xStart - k) / (right.xStart - left.xStart)).add(
                        lb.scale((k - left.xStart) / (right.xStart - left.xStart))
                      ).unit();
                  let gray = 0;
                  const org: Vector3d = new Vector3d(0, 0, 0);
                  for(let light of lights) {
                    light = org.subtract(light).unit();
                    gray += diffuseTrem(1, 88, curNormal, light);
                  }
                  iBuffer[i][k] = new RGBA(gray, gray, gray, 255);
              }
              zCurrent += zDeltaToX;
          }
        }
        left.xStart += left.delta;
        right.xStart += right.delta;
        left.zStart += left.zDeltaToY;
        right.zStart += right.zDeltaToY;
      }
    }
  });
  return iBuffer;
};

export {
  bufferInit,
  scanConversion
};
