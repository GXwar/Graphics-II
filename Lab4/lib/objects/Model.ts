import { Vector3d } from "../math/Vector3d";
import { RGBA } from "./RGBA";
import { random } from '../utils/rand';

class Model {
  points: Array<Vector3d>;
  pointsNormal: Array<Vector3d>;
  texturePoints: Array<Array<number>>;
  faces: Array<Array<number>>;
  facesNormal: Array<Vector3d>;
  facesColor: Array<RGBA>;
  textureMap: Array<Array<Array<number>>>;

  constructor() {
    this.points = [];
    this.pointsNormal = [];
    this.texturePoints = [];
    this.faces = [];
    this.facesNormal = [];
    this.facesColor = [];
    this.textureMap = [];
  }

  colorInit(singleLightOn: boolean, lights?: Array<Vector3d>): void {
    this.facesColor = [];
    for (let i = 0; i < this.faces.length; i++) {
      if (singleLightOn) {
        let gray = 0;
        let normal = this.facesNormal[i];
        for (let light of lights) {
          gray += (128 + 128 * normal.unit().dotProduct(light.unit()));
        }
        this.facesColor.push(new RGBA(gray, gray, gray, 255));
      } else {
        this.facesColor.push(new RGBA(random(), random(), random(), 255));
      }
    }
  }

  normalizeFace(faceIndex: number): Vector3d {
    const face = this.faces[faceIndex];
    const [p1, p2, p3] = [this.points[face[0]], this.points[face[1]], this.points[face[2]]];
    return p2.subtract(p1).crossProduct(p3.subtract(p2)).unit();
  }

  computeScenePointNormal(): void {
    for (let i = 0; i < this.facesNormal.length; i++) {
      for (let j = 0; j < this.faces[i].length; j++) {
        const temp = this.faces[i][j];
        this.pointsNormal[temp] = this.pointsNormal[temp].add(this.facesNormal[i]);
      }
    }
    for (let i = 0; i < this.points.length; i++) {
      if (this.pointsNormal[i].abs()) {
        this.pointsNormal[i] = this.pointsNormal[i].unit();
      }
    }
  }
}

export { Model };
