const modalOpener = document.getElementById("modal-window");
const openBttn = document.getElementById("open-modal");
const closeBttn = document.getElementById("close-modal");

openBttn.addEventListener("click", () => {
  modalOpener.classList.add("is-open");
});

closeBttn.addEventListener("click", () => {
  modalOpener.classList.remove("is-open");
});
window.addEventListener("click", (event) => {
  if (event.target === modalOpener) {
  modalOpener.classList.remove("is-open");
  }
});
