import { Vector3d } from "../math/Vector3d";
import { RGBA } from "./RGBA";
import { random } from '../utils/rand';

class Model {
  position: Vector3d;
  points: Array<Vector3d>;
  faces: Array<Array<number>>;
  N: Vector3d;
  U: Vector3d;
  V: Vector3d;
  facesColor: Array<RGBA>;
  backFaceSet: Set<number>;
  calcPoints: Array<Vector3d>;
  iBuffer: Array<Array<RGBA>>;
  zBuffer: Array<Array<number>>;
  ready: boolean;

  constructor() {
    this.position = new Vector3d();
    this.points = [];
    this.faces = [];
    this.N = new Vector3d();
    this.U = new Vector3d();
    this.V = new Vector3d();
    this.facesColor = [];
    this.backFaceSet = new Set();
    this.calcPoints = [];
    this.iBuffer = [];
    this.zBuffer = [];
    this.ready = false;
  }

  setPosition(position: Vector3d): void {
    this.position = position;
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
