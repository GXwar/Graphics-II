import { Vector3d } from "../math/Vector3d";
import { RGBA } from "./RGBA";
import { random } from '../utils/rand';

class Model {
  points: Array<Vector3d>;
  faces: Array<Array<number>>;
  facesColor: Array<RGBA>;
  backFaceSet: Set<number>;
  calcPoints: Array<Vector3d>;

  constructor() {
    this.points = [];
    this.faces = [];
    this.facesColor = [];
    this.backFaceSet = new Set();
    this.calcPoints = [];
  }

  colorInit(): void {
    for (let i = 0; i < this.faces.length; i++) {
      this.facesColor.push(new RGBA(
        random(),
        random(),
        random(),
        255
      ));
    }
  }
}

export { Model };
