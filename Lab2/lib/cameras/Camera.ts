/*
 * @Author: GXwar 
 * @Date: 2019-02-15 11:37:10
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 15:20:14
 */
import { Vector3d } from '../math/Vector3d';

class Camera {
  position: Vector3d;
  UP: Vector3d;
  constructor(position: Vector3d, UP: Vector3d) {
    this.position = position;
    this.UP = UP;
  }

  /**
   * calculate the N, U, V vector of the camera
   * @param objectPosition 
   */
  calcNUV(objectPosition: Vector3d): Array<Vector3d> {
    const N: Vector3d = objectPosition.subtract(this.position).unit();
    const U: Vector3d = N.crossProduct(this.UP).unit();
    const V: Vector3d = U.crossProduct(N);
    return [N, U, V];
  }
}

export { Camera };
