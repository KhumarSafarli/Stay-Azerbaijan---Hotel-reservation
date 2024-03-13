const delay = 6000;
const loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.classList.add("hide-preloader");
  }, delay);
});

let noteCount = 0;
let filter = "all";
noteFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const noteTitleElement = e.target.querySelector(".noteTitle");
  if (!noteTitleElement.value.trim()) {
    return alert("Note title must be filled!");
  }
  const newNote = {
    title: noteTitleElement.value,
  };
  createNoteElement(newNote);
  noteTitleElement.value = "";
  noteCount++;
  updateItemsLeft();
  applyFilter();
});
