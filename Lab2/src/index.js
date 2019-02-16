import { cameraInit } from './configs/camera.js';
import loadFile from './utils/loadFile.js';
import draw from './utils/draw.js';
import { 
  bindSlider,
  loadMenu,
  backFaceCullingDOM,
  reactToOperation } from './utils/dom.js';

/******************** Initialize DOM ********************/
// Get canvas ready
const canvas = document.querySelector('#content');
const [height, width] = [canvas.height, canvas.width];
const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, width, height);
ctx.strokeStyle = 'green';
// Inject parameter to draw function
const drawCtx = draw(ctx, width, height);
// Load all model options to menu
const choose_model = document.querySelector('select.choose_model');
loadMenu(choose_model);
// Bind select button with back face culling
backFaceCullingDOM('back-face-culling', drawCtx);
// Get three slides ready binding with h, d, f parameter
['h', 'd', 'f'].forEach(item => bindSlider(item, drawCtx));
// Bind render button with load file and render opertion
const renderBtn = document.querySelector('.render');
renderBtn.addEventListener('click', () => {
  const modelIndex = choose_model.selectedIndex;
  if (modelIndex === 0) {
    alert('Please select a model to render');
  }
  const modelName = choose_model.options[modelIndex].value;
  loadFile(`./public/model/${modelName}.d.txt`, drawCtx);
});

/******************** Initialize Data ********************/
// Binding
reactToOperation('content', drawCtx);
// Calculate N, U, V vector
cameraInit();
