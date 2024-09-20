const menuIcon = document.getElementById("burgerMenuIcon");
const burgerMenuContainer = document.querySelector(".burgerMenuContainer");
const burgerMenu = document.querySelector(".burger-menu");

let bars = document.querySelectorAll('.burger-menu-line')

function toggleBurgerMenu() {
  if (
    !burgerMenuContainer.classList.contains("display-block") &&
    window.innerWidth < 900
  ) {
    burgerMenuContainer.classList.add("display-block");
    burgerMenu.classList.add("display-block");
    setTimeout(() => {
      burgerMenu.classList.add("opacity-one");
    }, 20);
  } else {
    burgerMenu.classList.remove("opacity-one");
    setTimeout(() => {
      burgerMenu.classList.remove("display-block");
      burgerMenuContainer.classList.remove("display-block");
    }, 300);
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    burgerMenu.classList.remove("opacity-one");
    setTimeout(() => {
      burgerMenu.classList.remove("display-block");
      burgerMenuContainer.classList.remove("display-block");
    }, 300);
  }
})

function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('x'))
}

menuIcon.addEventListener("click", toggleBurgerMenu);

menuIcon.addEventListener('click', toggleHamburger)




