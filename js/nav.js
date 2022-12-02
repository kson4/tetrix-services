const navMenu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector("#nav-open");
const menu_items = document.querySelectorAll("nav .nav-menu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  navMenu.style.display = "flex";
  navMenu.style.top = "0";
}
function close() {
  navMenu.style.top = "-100%";
}
