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


const random = () => Math.floor(Math.random() * 256);

const scanConversion = () => {
  // clear before
  result.pixelBuffer = [];
  result.zBuffer = [];
  for (let i = 0; i < result.m; i++) {
    result.pixelBuffer.push([]);
    result.zBuffer.push(Array.from({length: result.n}, _ => 1));
    for (let j = 0; j < result.n; j++) {
      result.pixelBuffer[i][j] = Array.from({length: 3}, _ => 0);
    }
  }
  
  // scan conversion for each face
  for (let i = 0; i < model.facesNum; i++) {
    // only give color when first time render
    if (result.face_color_r_buffer.size() == i) {
      result.face_color_r_buffer.push(random());
      result.face_color_g_buffer.push(random());
      result.face_color_b_buffer.push(random());
    }
    // do not consider back face
    if (result.backFaceSet.has(i)) continue;

    const face = model.faces[i];
    // Clear this face's edge table and rebuild it

    for (let j = 0; j < face.length; j++) {
    }
  }
}