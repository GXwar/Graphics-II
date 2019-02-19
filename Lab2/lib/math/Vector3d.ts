import { Vector4d } from "./Vector4d";

class Vector3d {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  extend(): Vector4d {
    return new Vector4d(this.x, this.y, this.z, 1);
  }

  /**
   * get the absolute value of the vector
   */
  abs(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  add(other: Vector3d): Vector3d {
    return new Vector3d(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  subtract(other: Vector3d): Vector3d {
    return new Vector3d(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  scale(n: number): Vector3d {
    return new Vector3d(this.x * n, this.y * n, this.z * n);
  }

  unit(): Vector3d {
    return this.scale(1 / this.abs());
  }

  crossProduct(other: Vector3d): Vector3d {
    // return [
    //   vec1[1] * vec2[2] - vec2[1] * vec1[2],
    //   -(vec1[0] * vec2[2] - vec2[0] * vec1[2]),
    //   vec1[0] * vec2[1] - vec2[0] * vec1[1]
    // ];
    return new Vector3d(
      this.y * other.z - other.y * this.z,
      -(this.x * other.z - other.x * this.z),
      this.x * other.y - other.x * this.y
    );
  }

  dotProduct(other: Vector3d): number {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }
}

export { Vector3d };
