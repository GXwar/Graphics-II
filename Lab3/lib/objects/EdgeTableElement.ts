import { Vector3d } from "../math/Vector3d";

/*
 * @Author: GXwar 
 * @Date: 2019-02-17 21:37:10
 * @Last Modified by:   GXwar 
 * @Last Modified time: 2019-02-19 01:34:06 
 */
class EdgeTableElement {
  yStart: number;
  yMax: number;
  xStart: number;
  delta: number;
  zStart: number;
  zDeltaToY: number;
  normalStart: Vector3d;
  normalEnd: Vector3d;
  
  constructor(yStart: number, yMax: number, xStart: number, delta: number, 
              zStart: number, zDeltaToY: number, normalStart: Vector3d, normalEnd: Vector3d) {
    this.yStart = yStart;
    this.yMax = yMax;
    this.xStart = xStart;
    this.delta = delta;
    this.zStart = zStart;
    this.zDeltaToY = zDeltaToY;
    this.normalStart = normalStart;
    this.normalEnd = normalEnd;
  }
};

export { EdgeTableElement };
