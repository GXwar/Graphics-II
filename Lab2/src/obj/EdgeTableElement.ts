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
