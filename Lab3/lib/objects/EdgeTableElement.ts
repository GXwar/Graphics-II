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
  zUpper: number;
  zLower: number;
  constructor(yStart: number, yMax: number, xStart: number, 
              delta: number, zUpper: number, zLower: number) {
    this.yStart = yStart;
    this.yMax = yMax;
    this.xStart = xStart;
    this.delta = delta;
    this.zUpper = zUpper;
    this.zLower = zLower;
  }
};

export { EdgeTableElement };
