/*
 * @Author: GXwar 
 * @Date: 2019-02-19 16:37:49 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 16:45:55
 */
class RGBA {
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r: number = 0, g: number = 0, b: number = 0, a:number = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}

export { RGBA };
