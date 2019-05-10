/*
 * @Author: GXwar 
 * @Date: 2019-02-17 14:44:32 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-09 19:51:48
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
const diffuseTrem = (kd: number, ILight: number, normal: Vector3d, light: Vector3d, power: number) => {
  const gradient = Math.pow(normal.dotProduct(light), power);
  return gradient > 0 ? gradient * kd * ILight : 0;
}

const addEdgeToEdgeTable = (model: Model, indexStart: number, indexEnd: number, lowerPoint: Vector3d, upperPoint: Vector3d, 
                              edgeTable: Array<Array<EdgeTableElement>>, height: number): void => {
  // ignore horizontal edge and out of range point
  if (toPixel(lowerPoint.y, height) === toPixel(upperPoint.y, height)
        || lowerPoint.x < -1 || lowerPoint.x > 1 || lowerPoint.y < -1 || lowerPoint.y > 1
        || upperPoint.x < -1 || upperPoint.x > 1 || upperPoint.y < -1 || upperPoint.y > 1) return;
  // swap the order of two points
  if (lowerPoint.y > upperPoint.y) {
    [lowerPoint, upperPoint] = [upperPoint, lowerPoint];
    [indexStart, indexEnd] = [indexEnd, indexStart];
  }
  // create edge table element and add it into the edge table
  let textureDelta = [
    (model.texturePoints[indexEnd][0] - model.texturePoints[indexStart][0]) / (toPixel(upperPoint.y, height, true) - toPixel(lowerPoint.y, height, true)),
    (model.texturePoints[indexEnd][1] - model.texturePoints[indexStart][1]) / (toPixel(upperPoint.y, height, true) - toPixel(lowerPoint.y, height, true))
  ];
  const ETElement = new EdgeTableElement(toPixel(lowerPoint.y, height), toPixel(upperPoint.y, height), toFloatPixel(lowerPoint.x, height), 
                          (lowerPoint.x - upperPoint.x) / (lowerPoint.y - upperPoint.y), lowerPoint.z,
                          (lowerPoint.z - upperPoint.z) / (toPixel(lowerPoint.y, height) - toPixel(upperPoint.y, height)),
                          model.pointsNormal[indexStart], model.pointsNormal[indexEnd],
                          model.texturePoints[indexStart], textureDelta);
  // console.log(" ----- edge table element");
  // console.log(lowerPoint.y + " " + indexStart);
  // console.log(ETElement);
  // console.log(ETElement.textureStart)
  edgeTable[Math.floor(ETElement.yStart)].push(ETElement);
};

const scanConversion = (model: Model, lights: Array<Vector3d>, calcPoints: Array<Vector3d>, backFaceSet: Set<number>,
                         height: number, width: number): Array<Array<RGBA>> => {
  const [iBuffer, zBuffer] = bufferInit(height, width);
  let activeEdgeTable: Array<EdgeTableElement> = [];
  // for each face
  // console.log(backFaceSet);
  model.faces.forEach((face: Array<number>, index: number) => {
    // don't need to consider backface
    if (backFaceSet.has(index)) return;
    // console.log("index: " + index);
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
    // console.log("------------------------------scan convert------------------------------");
    // console.log(currentScanLine);
    
    for (let i = currentScanLine; i < height; i++) {
      // move edge from Edge Tabel to Active Edge Table
      for (let j = 0; j < edgeTable[i].length; j++) {
        activeEdgeTable.push(edgeTable[i][j]);
      }
      edgeTable[i] = [];
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
        // phong shading
        const la: Vector3d = left.normalEnd.scale((i - left.yStart) / (left.yMax - left.yStart))
                                            .add(left.normalStart.scale((left.yMax - i) / (left.yMax - left.yStart)));
        const lb: Vector3d = right.normalEnd.scale((i - right.yStart) / (right.yMax - right.yStart))
                                            .add(right.normalStart.scale((right.yMax - i) / (right.yMax - right.yStart)));
        // console.log(left.xStart + " " + right.xStart);
        for (let k = Math.floor(left.xStart); k < Math.floor(right.xStart); k++) {
            if (zCurrent <= zBuffer[i][k]) {
                zBuffer[i][k] = zCurrent;
                let curNormal = right.xStart - left.xStart === 0 ? la.unit() :
                    la.scale((right.xStart - k) / (right.xStart - left.xStart)).add(
                      lb.scale((k - left.xStart) / (right.xStart - left.xStart))
                    ).unit();
                // texture map coordinate
                let realTextureX = k == Math.floor(left.xStart) ? left.textureStart[0]
                                        : left.textureStart[0] * (Math.floor(right.xStart) - k) / (Math.floor(right.xStart) - Math.floor(left.xStart))
                                          + right.textureStart[0] * (k - Math.floor(left.xStart)) / (Math.floor(right.xStart) - Math.floor(left.xStart));
                let realTextureY = k == Math.floor(left.xStart) ? left.textureStart[1]
                                        : left.textureStart[1] * (Math.floor(right.xStart) - k) / (Math.floor(right.xStart) - Math.floor(left.xStart))
                                          + right.textureStart[1] * (k - Math.floor(left.xStart)) / (Math.floor(right.xStart) - Math.floor(left.xStart));
                // console.log("texture position: " + realTextureX + " " + realTextureY);
                if (k == Math.floor(left.xStart)) {
                  realTextureX = left.textureStart[0];
                  realTextureY = left.textureStart[1];
                  if (i == left.yStart) {
                    curNormal = left.normalStart;
                  } else {
                    curNormal = la;
                  }
                } else {
                  curNormal = la.scale(right.xStart - k).add(lb.scale(k - left.xStart));
                }
                // console.log(realTextureX, realTextureY);
                curNormal = curNormal.unit();

                let lightVector = new Vector3d(10, 10, 10).unit();
                let gray = diffuseTrem(1, 100, curNormal, lightVector, 3);
                if (gray < 0) gray = 0;
                if (gray > 255) gray = 255;
                let inten = gray / 100;
                if (realTextureX > 1) realTextureX = 0.99;
                if (realTextureX < 0) realTextureX = 0;
                if (realTextureY > 1) realTextureY = 0.99;
                if (realTextureY < 0) realTextureY = 0;
                let textureX = Math.floor(realTextureX * model.textureMap.length);
                let textureY = Math.floor(realTextureY * model.textureMap[0].length);
                // console.log(textureX + " " + textureY);
                iBuffer[i][k] = new RGBA(
                  Math.max(Math.min(model.textureMap[textureX][textureY][0] * inten + 40, 255), 0),
                  Math.max(Math.min(model.textureMap[textureX][textureY][1] * inten + 40, 255), 0),
                  Math.max(Math.min(model.textureMap[textureX][textureY][2] * inten + 40, 255), 0),
                  255
                )
            }
            zCurrent += zDeltaToX;
        }
        // Update x and z
        left.xStart += left.delta;
        right.xStart += right.delta;
        left.zStart += left.zDeltaToY;
        right.zStart += right.zDeltaToY;
        // update texture map
        left.textureStart[0] += left.textureDeltaToY[0];
        left.textureStart[1] += left.textureDeltaToY[1];
        right.textureStart[0] += right.textureDeltaToY[0];
        right.textureStart[1] += right.textureDeltaToY[1];
      }
    }
  });
  return iBuffer;
};

export {
  bufferInit,
  scanConversion
};
