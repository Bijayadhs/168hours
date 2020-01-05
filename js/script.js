const cell = document.querySelectorAll("td.cell");

function editCell() {
  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", () => {
      cell[i].classList.toggle("edit");
      cell[i].innerHTML = "<button>x</button>";
      const x = document.querySelector("button");
      x.addEventListener("click", () => {
        x.parentElement.classList.remove("edit");
      });
    });
  }
}

editCell();
