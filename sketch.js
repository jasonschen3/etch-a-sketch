const container = document.createElement("div");
container.classList.add("container");

// Create the boxes
for (let i = 1; i <= 4; i++) {
  const currentRow = document.createElement("div");
  currentRow.classList.add("row");
  currentRow.id = `row-${i}`;
  for (let j = 1; j <= 4; j++) {
    const gridCell = document.createElement("div");
    gridCell.id = `col-${j}`;
    gridCell.classList.add("column");

    // Event
    gridCell.addEventListener("mouseover", () => {
      changeColor(gridCell, "red");
    });

    currentRow.appendChild(gridCell);
  }
  container.appendChild(currentRow);
}

document.body.append(container);

// Function to change color
function changeColor(element, color = "black") {
  element.style.backgroundColor = color; // Change to desired color
}
