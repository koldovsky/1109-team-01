const products = [
    {
        id: "1",
        image: "img/5-gallon-bottle.png",
        alt: "Five gallon bottle of water",
        title: "Bottled water",
        description: `5-gallon or 3-gallon bottles are a perfect option to enjoy healthy and tasty
        spring water at home or office.`
    },
    {
        id: "2",
        image: "img/1-gallon-bottle.png",
        alt: "One gallon bottle of water",
        title: "Bulk Water",
        description: `1-gallon, 16.9 oz., 33,8 oz., etc. Feel free to order a lot of spring water in
        one order. Also, you will get a discount.`
    },
    {
        id: "3",
        image: "img/2-liter-battle.png",
        alt: "Two liter bottle of water",
        title: "Water for Coffee",
        description: `Coffee is only as good as the water used for it. If you want to really enjoy
        your cup, order spring water.`
    },
    {
        id: "4",
        image: "img/0_5-liter-bottle.png",
        alt: "Half liter bottle of water",
        title: "Private Label",
        description: `5-gallon or 3-gallon bottles are a perfect option to enjoy healthy and tasty
        spring water at home or office.`
    },
]

function renderProducts(products) {
    let productsDomString = "";
    for (const product of products) {
        productsDomString += `
        <article class="products__card-item">
            <div class="card__image">
                <img src="${product.image}" alt="${product.alt}">
            </div>
            <h3 class="card__title">${product.title}</h3>
            <p class="card__description">${product.description}</p>
            <a class="button" href="single-product.html">Lern More</a>
        </article>`;
    }
    const productsContainer = document.querySelector(".products__cards");
    productsContainer.innerHTML = productsDomString;
}

renderProducts(products);