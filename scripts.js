// Pseudocode for creating a sketch grid:
// 1. Select the container element where the grid will be placed (e.g., a div with a specific id or class).
// 2. Define the number of rows and columns for the grid (e.g., 16x16 for a standard sketch grid).
// 3. Use nested loops to create the required number of cell elements (e.g., divs for each cell).
// 4. For each cell:
//    a. Create a new div element.
//    b. Add a class for styling (e.g., 'cell').
//    c. Set the width and height based on the grid size.
//    d. Append the cell to the container.
// 5. Add event listeners to each cell for drawing (e.g., on mouseover or mousedown, change the cell's background color).
// 6. Optionally, add controls to clear the grid or change the grid size.
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
const grid = document.getElementById('grid');
const darkBtn = document.getElementById('dark');
const mixColorBtn = document.getElementById('mixColor');
const eraseBtn = document.getElementById('erase');
const clearBtn = document.getElementById('clear');

let currentColor = 'black';

function createGrid(size) {
    // Clear existing grid
    grid.innerHTML = "";

    // Set grid layout (number of columns and rows)
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create size * size cells
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
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


darkBtn.addEventListener('click', () => {
  currentColor = 'black';
});

mixColorBtn.addEventListener('click', () => {
  currentColor = 'random';
});
