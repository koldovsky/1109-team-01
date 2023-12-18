const btnSub = document.querySelector(".header-burger-container");
const list = document.querySelector(".header__menu-container");
const socials = document.querySelector(".header__social-container");

btnSub.addEventListener("click", () => {
    list.classList.toggle("menu-list-mobile");
    socials.classList.toggle("menu-list-mobile");
})

// bgcont.addEventListener("click", () => {
//     // header.classList.toggle("responsive");
//     console.log('Add');
// });

// navLinks.addEventListener("click", () => {
//     // body.classList.remove("fixed");
//     // header.classList.remove("responsive");
//     console.log('remove')
// });

// function handleClick() {
//     console.log('Add');
// }