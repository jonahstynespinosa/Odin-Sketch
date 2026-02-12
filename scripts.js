const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
const grid = document.getElementById('grid');
const colorBtn = document.getElementById('color');
const mixColorBtn = document.getElementById('mixColor');
const eraseBtn = document.getElementById('erase');
const clearBtn = document.getElementById('clear');

let currentColor = 'black';

function createGrid(size) {
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

createGrid(sizeSlider.value);

sizeSlider.addEventListener('input', () => {
  sizeValue.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
  createGrid(sizeSlider.value);
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
} 
