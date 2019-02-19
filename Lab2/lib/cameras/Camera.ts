import { Vector3d } from '../math/Vector3d';

class Camera {
  position: Vector3d;
  UP: Vector3d;
  N: Vector3d;
  U: Vector3d;
  V: Vector3d;
  constructor(position: Vector3d, UP: Vector3d) {
    this.position = position;
    this.UP = UP;
  }

  /**
   * calculate the N, U, V vector of the camera
   * @param objectPosition 
   */
  calcNUV(objectPosition: Vector3d): void {
    this.N = objectPosition.subtract(this.position).unit();
    this.U = this.N.crossProduct(this.UP).unit();
    this.V = this.U.crossProduct(this.N);
  }
}

export { Camera };
