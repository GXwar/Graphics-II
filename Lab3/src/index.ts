/*
 * @Author: GXwar 
 * @Date: 2019-02-14 15:18:52 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-05-06 01:01:07
 */
import { model, camera, parameters } from './configs/parameters';
import { files, shadingModels } from './configs/constants';
import loadFile from './utils/loadFile';
import {
  loadMenu,
  bindSlider,
  reactToOperation
} from './utils/dom';
import { RGBA } from '../lib/index';
import { calcAll } from './utils/calcAll';

/******************** Initialize DOM ********************/
// Get canvas ready
const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('#content');
const height: number = canvas.height;
const width: number = canvas.width;
const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext('2d');
ctx.fillRect(0, 0, width, height);
// Load all model options to menu
const choose_model: HTMLSelectElement = <HTMLSelectElement>document.querySelector('select.choose_model');
loadMenu(choose_model, files);
// Load shading type options to menu
const shading_type: HTMLSelectElement = <HTMLSelectElement>document.querySelector('.shading_type');
loadMenu(shading_type, shadingModels);

// // Get three slides ready binding with h, d, f parameter
['h', 'd', 'f'].forEach(item => bindSlider(item, draw));

// Button
// Bind render button with load file and render opertion
const renderBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector('.render');
renderBtn.addEventListener('click', () => {
  const modelIndex = choose_model.selectedIndex;
  const shadingTypeIndex = shading_type.selectedIndex;
  // Exception handling
  if (modelIndex === 0) alert('Please select a model to render');
  if (shadingTypeIndex === 0) alert('Please select a shading type');

  // Process data
  let modelName = choose_model.options[modelIndex].value;
  modelName = `./public/model/${modelName}.d.txt`
  let shadingTypeName = shading_type.options[shadingTypeIndex].value;
  loadFile(modelName, shadingTypeName, draw);
  renderBtn.disabled = true;
});
// bind reset button with refresh function
const resetBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
  location.reload();
})

/******************** Initialize Data ********************/
parameters.width = width;
parameters.height = height;
// // Binding operation
reactToOperation(canvas, draw);

function draw(): void {
  // clear before image
  ctx.clearRect(0, 0, width, height);
  // draw
  const imageData: ImageData = ctx.createImageData(width, height);
  const data: Uint8Array = new Uint8Array(width * height * 4);
  const iBuffer: Array<Array<RGBA>> = calcAll(model, camera, parameters);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const t = i * width + j;
      const color: RGBA = iBuffer[i][j];
      data[t * 4 + 0] = color.r;
      data[t * 4 + 1] = color.g;
      data[t * 4 + 2] = color.b;
      data[t * 4 + 3] = color.a;
    }
  }
  imageData.data.set(data);
  ctx.putImageData(imageData, 0, 0);
}
