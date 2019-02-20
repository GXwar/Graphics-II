/*
 * @Author: GXwar 
 * @Date: 2019-02-15 01:31:53 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 14:41:30
 */
import { Vector } from './Vector';
import { Vector3d } from './Vector3d';
import { Matrix } from './Matrix';

class Vector4d extends Vector {
  z: number;
  w: number;

  constructor(x: number, y: number, z: number, w: number) {
    super(x, y);
    this.z = z;
    this.w = w;
  }

  collapse(): Vector3d {
    let t: number = this.w;
    return new Vector3d(this.x / t, this.y / t, this.z / t);
  }

  toMatrix(): Matrix {
    return new Matrix([
      [this.x],
      [this.y],
      [this.z],
      [this.w]
    ]);
  }
}

export { Vector4d };
