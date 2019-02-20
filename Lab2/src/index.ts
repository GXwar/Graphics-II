/*
 * @Author: GXwar 
 * @Date: 2019-02-14 15:18:52 
 * @Last Modified by: GXwar
 * @Last Modified time: 2019-02-19 22:39:18
 */
import { parameters } from './configs/parameters';
import loadFile from './utils/loadFile';
import {
  loadMenu,
  bindSlider,
  reactToOperation
} from './utils/dom';
import { RGBA } from '../lib/index';

/******************** Initialize DOM ********************/
// Get canvas ready
const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('#content');
const height: number = canvas.height;
const width: number = canvas.width;
const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext('2d');
ctx.fillRect(0, 0, width, height);
// Load all model options to menu
const choose_model1: HTMLSelectElement = <HTMLSelectElement>document.querySelector('select.choose_model1');
const choose_model2: HTMLSelectElement = <HTMLSelectElement>document.querySelector('select.choose_model2');
loadMenu(choose_model1);
loadMenu(choose_model2);
// // Get three slides ready binding with h, d, f parameter
['h', 'd', 'f'].forEach(item => bindSlider(item, draw));

// Button
// Bind render button with load file and render opertion
const renderBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector('.render');
renderBtn.addEventListener('click', () => {
  const modelIndex1 = choose_model1.selectedIndex;
  const modelIndex2 = choose_model2.selectedIndex;
  if (modelIndex1 === 0 || modelIndex2 === 0) {
    alert('Please select a model to render');
  }
  let modelNames: Array<string> = [];
  modelNames.push(choose_model1.options[modelIndex1].value);
  modelNames.push(choose_model2.options[modelIndex2].value);
  modelNames = modelNames.map((name: string): string => {
    return `./public/model/${name}.d.txt`;
  });
  loadFile(modelNames, draw);
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
  const iBuffer: Array<Array<RGBA>> = parameters.iBuffer;
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
