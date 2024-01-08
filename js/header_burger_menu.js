const btnSub = document.querySelector(".header-burger-container");
const list = document.querySelector(".header__menu-container");
const socials = document.querySelector(".header__social-container");

btnSub.addEventListener("click", () => {
    list.classList.toggle("menu-list-mobile");
    socials.classList.toggle("menu-list-mobile");

    if (btnSub.getAttribute('data-click') === 'close'){
        btnSub.setAttribute('data-click', 'open')
        btnSub.classList.add('header-burger-open')
    }
    else {
        btnSub.setAttribute('data-click', 'close')
        btnSub.classList.remove('header-burger-open')
    }
})
