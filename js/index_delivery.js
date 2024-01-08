const btn_office = document.querySelector(".delivery-accordion-office");
const btn_home = document.querySelector(".delivery-accordion-home");

const content_home = document.querySelector(".delivery-accordion__home");
const content_office = document.querySelector(".delivery-accordion__office");

btn_office.addEventListener("click", () => {
    
    if (btn_office.getAttribute('data-click') === 'close'){
        btn_office.setAttribute('data-click', 'open')
        content_office.classList.add('delivery-office-open')
    }
    else {
        btn_office.setAttribute('data-click', 'close')
        content_office.classList.remove('delivery-office-open')
    }
})

btn_home.addEventListener("click", () => {

    if (btn_home.getAttribute('data-click') === 'close'){
        btn_home.setAttribute('data-click', 'open')
        content_home.classList.add('delivery-home-open')
    }
    else {
        btn_home.setAttribute('data-click', 'close')
        content_home.classList.remove('delivery-home-open')
    }
})
