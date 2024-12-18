const menuOpener = document.getElementById("mobile-menu");
const openMenuBttn = document.getElementById("open-menu");
const closeMenuBttn = document.getElementById("close-menu");
const linksMob = document.querySelectorAll('#mobile-menu a');

openMenuBttn.addEventListener("click", () => {
  menuOpener.classList.add("is-open");
});

closeMenuBttn.addEventListener("click", () => {
  menuOpener.classList.remove("is-open");
});

linksMob.forEach(link => {
  link.addEventListener('click', () => {
    menuOpener.classList.remove('is-open');
    });
});