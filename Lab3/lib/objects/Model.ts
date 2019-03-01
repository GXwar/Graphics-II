import { Vector3d } from "../math/Vector3d";
import { RGBA } from "./RGBA";
import { random } from '../utils/rand';

class Model {
  points: Array<Vector3d>;
  faces: Array<Array<number>>;
  facesColor: Array<RGBA>;

  constructor() {
    this.points = [];
    this.faces = [];
    this.facesColor = [];
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
