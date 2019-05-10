import { Vector3d } from "../math/Vector3d";

/*
 * @Author: GXwar 
 * @Date: 2019-02-17 21:37:10
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-09 19:05:45
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
  textureStart: Array<number>;
  textureDeltaToY: Array<number>;
  
  constructor(yStart: number, yMax: number, xStart: number, delta: number, zStart: number, zDeltaToY: number, 
              normalStart: Vector3d, normalEnd: Vector3d, textureStart: Array<number>, textureDeltaToY: Array<number>) {
    this.yStart = yStart;
    this.yMax = yMax;
    this.xStart = xStart;
    this.delta = delta;
    this.zStart = zStart;
    this.zDeltaToY = zDeltaToY;
    this.normalStart = normalStart;
    this.normalEnd = normalEnd;
    this.textureStart = textureStart;
    // console.log("init: " + this.textureStart[0] + " " + this.textureStart[1]);
    this.textureDeltaToY = textureDeltaToY;
    // console.log("created: ");
    // console.log(this.textureStart[0]);
    // console.log(this.textureStart[1]);
  }
};

export { EdgeTableElement };
