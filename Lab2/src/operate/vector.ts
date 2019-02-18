/**
 * Increasing vector with one dimension
 * @param {Vector} vector 
 */
export const vectorExtend = (vector) => {
  return [...vector, 1];
};

export const vectorCollapse = (vector) => {
  let vec = Array.from(vector);
  let t: any = vec.pop();
  return vec.map((item: number) => item / t);
};

/**
 * Get the length of the vector
 * @param {Vector} vector 
 */
export const vectorAbs = (vector) => {
  return Math.sqrt(vector.reduce((pre, cur) => {
    return pre + cur * cur;
  }, 0));
};

/**
 * Add two vector
 * @param {Vector} vec1 
 * @param {Vector} vec2 
 */
export const vectorAdd = (vec1, vec2) => {
  if (vec1.length !== vec2.length) {
    console.log('Invalid vector addition');
    return;
  }
  return vec1.map((value, index) => value + vec2[index]);
};

/**
 * Substract vector
 * @param {Vector} vec1 
 * @param {Vector} vec2 
 */
export const vectorSubtract = (vec1, vec2) => {
  if (vec1.length !== vec2.length) {
    console.log('Invalid vector substraction');
    return;
  }
  return vec1.map((value, index) => value - vec2[index]);
};

/**
 * Scale vector
 * @param {Vector} vector 
 * @param {Number} n 
 */
export const vectorScale = (vector, n) => {
  return vector.map(i => i * n);
};

/**
 * Get a unit of the vector
 * @param {Vector} vector 
 */
export const vectorUnit = (vector) => {
  return vectorScale(vector, 1 / vectorAbs(vector));
};

/**
 * Cross Proudct of two 3d vector
 * @param {*} vec1 
 * @param {*} vec2 
 */
export const vector3dCrossProduct = (vec1, vec2) => {
  return [
    vec1[1] * vec2[2] - vec2[1] * vec1[2],
    -(vec1[0] * vec2[2] - vec2[0] * vec1[2]),
    vec1[0] * vec2[1] - vec2[0] * vec1[1]
  ];
};

export const vector3dDotProduct = (vec1, vec2) => {
  return vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2];
}
