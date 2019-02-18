/**
 * Multiply two matrices
 * @param {Matrix} m1 
 * @param {Matrix} m2 
 */

export const matrixMultiply = (m1: Array<Array<number>>, m2: Array<Array<number>>): Array<Array<number>> => {
  if (m1[0].length !== m2.length) {
    throw new Error('Cannot multiply these two matrices!');
  }
  const [m, n, k] = [m1.length, m2.length, m2[0].length];
  // initialize m * k matrix with 0
  const newMatrix: Array<Array<number>> = [];
  for (let i = 0; i < m; i++) {
    newMatrix.push(Array.from({length: k}, _ => 0));
  }
  // multiply
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < k; j++) {
      for (let t = 0; t < n; t++) {
        newMatrix[i][j] += m1[i][t] * m2[t][j]
      }
    }
  }
  return newMatrix;
};

/**
 * Multiply matrix with vector
 * @param {Matrix} matrix 
 * @param {Vector} vector 
 */
export const matrixMultiplyVector = (matrix: Array<Array<number>>, vector: Array<number>) => {
  let [m, n] = [matrix.length, vector.length];
  const ret = Array.from({length: m}, _ => 0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ret[i] += matrix[i][j] * vector[j];
    }
  }
  return ret;
};
