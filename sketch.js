// Initial setup
const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);
let squaresPerSide = 4;
createGrid(squaresPerSide);

// Create the boxes, changed to a function to accommodate the requirements
function createGrid(squaresPerSide) {
  container.innerHTML = ""; // Clear the existing grid

  for (let i = 1; i <= squaresPerSide; i++) {
    const currentRow = document.createElement("div");
    currentRow.classList.add("row");
    currentRow.id = `row-${i}`;
    for (let j = 1; j <= squaresPerSide; j++) {
      const gridCell = document.createElement("div");
      gridCell.id = `col-${j}`;
      gridCell.classList.add("column");

      // Event if mouseover then color
      gridCell.addEventListener("mouseover", () => {
        changeColor(gridCell, "green");
      });

      //   // Event if mouse not over, then reset
      //   gridCell.addEventListener("mouseleave", () => {
      //     changeColor(gridCell, "white");
      //   });

      currentRow.appendChild(gridCell);
    }
    container.appendChild(currentRow);
  }
}

// Function to change color
function changeColor(element, color = "white") {
  element.style.backgroundColor = color; // Change to desired color
}

// Button to change size
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let newSPS = prompt("Enter new squares per side");
  if (isNaN(newSPS) || newSPS <= 0) {
    // Check if the input is a valid number
    alert("Please enter a valid number!");
  } else {
    squaresPerSide = parseInt(newSPS);
    createGrid(squaresPerSide);
  }
});
