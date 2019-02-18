export default class EdgeTableElement {
  yStart: number;
  yMax: number;
  xStart: number;
  delta: number;
  zUpper: number;
  zLower: number;
  constructor(yStart, yMax, xStart, delta, zUpper, zLower) {
    this.yStart = yStart;
    this.yMax = yMax;
    this.xStart = xStart;
    this.delta = delta;
    this.zUpper = zUpper;
    this.zLower = zLower;
  }
};
