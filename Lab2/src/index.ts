import { cameraInit } from './configs/camera';
import loadFile from './utils/loadFile';
import draw from './utils/draw';
import { 
  bindSlider,
  loadMenu,
  reactToOperation } from './utils/dom';
import result from './configs/result';

/******************** Initialize DOM ********************/
// Get canvas ready
const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('#content');
const height: number = canvas.height;
const width: number = canvas.width;
const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext('2d');
ctx.fillRect(0, 0, width, height);
ctx.strokeStyle = 'green';
// Inject parameter to draw function
const drawCtx = draw(ctx, width, height);
// Load all model options to menu
const choose_model: HTMLSelectElement = <HTMLSelectElement>document.querySelector('select.choose_model');
loadMenu(choose_model);
// Get three slides ready binding with h, d, f parameter
['h', 'd', 'f'].forEach(item => bindSlider(item, drawCtx));

// Button
// Bind render button with load file and render opertion
const renderBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector('.render');
renderBtn.addEventListener('click', () => {
  const modelIndex = choose_model.selectedIndex;
  if (modelIndex === 0) {
    alert('Please select a model to render');
  }
  const modelName = choose_model.options[modelIndex].value;
  loadFile(`./public/model/${modelName}.d.txt`, drawCtx);
  renderBtn.disabled = true;
});
// bind reset button with refresh function
const resetBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
  location.reload();
})

/******************** Initialize Data ********************/
// Binding operation
reactToOperation(canvas, drawCtx);
// Calculate N, U, V vector
cameraInit();
result.width = width;
result.height = height;
