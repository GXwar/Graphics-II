/*
 * @Author: GXwar 
 * @Date: 2019-02-15 01:31:53 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 01:32:33
 */
import { Vector3d } from './Vector3d';
import { Vector4d } from './Vector4d';

class Matrix {
  values: Array<Array<number>>;

  constructor();
  constructor(values: Array<Array<number>>);
  constructor(m: number, n: number);
  constructor(valuesOrM?: Array<Array<number>> | number, n?: number) {
    if (valuesOrM !== undefined && n !== undefined) {
      this.values = []
      for (let i = 0; i < valuesOrM; i++) {
        this.values.push(Array.from({length: n}, _ => 0));
      }
    } else if (valuesOrM !== undefined) {
      this.values = valuesOrM as Array<Array<number>>;
    } else {
      this.values = [];
    }
  }
  
  /**
   * multiply with other matrix, return a new matrix
   * @param other 
   */
  multiply (other: Matrix): Matrix {
    if (this.values[0].length !== other.values.length) {
      throw new Error('Cannot multiply these two matrices!');
    }
    const m: number = this.values.length;
    const n: number = other.values.length;
    const k: number = other.values[0].length;
    // multiply
    const newMatrix: Matrix = new Matrix(m, k);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < k; j++) {
        for (let t = 0; t < n; t++) {
          newMatrix.values[i][j] += this.values[i][t] * other.values[t][j]
        }
      }
    }
    return newMatrix;
  };

  toVector(): Vector3d {
    const vector = new Vector4d(this.values[0][0], this.values[1][0], this.values[2][0], this.values[3][0]);
    return vector.collapse();
  }
}

export { Matrix };
