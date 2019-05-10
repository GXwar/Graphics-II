/*
 * @Author: GXwar 
 * @Date: 2019-02-19 14:37:03 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 14:40:25
 */
abstract class Vector {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export { Vector } ;
