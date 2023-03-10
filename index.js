const aboutBtn = document.getElementById("about")
const contactBtn = document.getElementById("contact")
const aboutMessage = document.getElementById("about-message")
const Contactform = document.getElementById("form-contact")
const container = document.getElementById("container")
const addToCartBtn = document.getElementById("add-to-cart-btn")
const sizeSmallRadio = document.getElementById("input-size-small")
const sizeLargeRadio = document.getElementById("input-size-large")

aboutBtn.addEventListener("click", function(){ 
aboutMessage.style.display = "block"
})

contactBtn.addEventListener("click", function(){ 
Contactform.style.display = "flex"
})



const images = [
    {
        name: 'Seiser Alm Trees V2',
        image: 'https://i.imgur.com/MFs11po.jpg',
        id: 'img',
        class: 'img-item', 
        priceSmall: '$50',
        priceLarge: '$110'
    },
    {
        name: 'Seiser Alm Huts',
        image: 'https://i.imgur.com/LAKwO7w.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'Loch Katrine, Scotland',
        image: 'https://i.imgur.com/UTve0lH.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'Seiser Alm Peaks',
        image: 'https://i.imgur.com/iGaDpXz.jpg',
        id: 'img',
        class: 'img-item wide'
    },
    {
        name: 'Loch Lomond Mist',
        image: 'https://i.imgur.com/gowNhb2.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'Lake of Carezza',
        image: 'https://i.imgur.com/A8zm9Jh.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'Vineyards',
        image: 'https://i.imgur.com/g62LHdd.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'Above Scottish Clouds',
        image: 'https://i.imgur.com/YPt6gNF.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'Scottish Hills',
        image: 'https://i.imgur.com/7B6kUkU.jpg',
        id: 'img',
        class: 'img-item wide'
    },
    {
        name: 'Kilchurn Castle, Scotland',
        image: 'https://i.imgur.com/6YXA7p4.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'Culross, Scotland',
        image: 'https://i.imgur.com/hjabjpb.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'Kilchurn from across Loch Awe',
        image: 'https://i.imgur.com/GrRfnCx.jpg',
        id: 'img',
        class: 'img-item wide'
    }
]

let imagesHtml = ``

for (let image of images){
    imagesHtml += `
    <div class="container">
        <h3>${image.name}</h3>
        <a href="${image.name}.html"><img id="img-item" src="${image.image}"></a>
    </div>
    `
}
container.innerHTML = imagesHtml

sizeSmallRadio.addEventListener("click", function(){ 
    addToCartBtn.innerHTML = "${image.priceSmall}"
    })

sizeLargeRadio.addEventListener("click", function(){
    addToCartBtn.innerHTML = '${image.priceLarge}'
})

//for version two 

function displayPrice() {
    var size = document.getElementById("size");
    var price = size.options[size.selectedIndex].getAttribute("data-price");
    document.getElementById("price").value = price;
    document.getElementById("display-price").innerHTML = "$" + price;
}

let cart = [
    { size: '8x10', quantity: 0, price: 50 },
    { size: '16x20', quantity: 0, price: 110 }
];

let form = document.getElementById("add-to-cart-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let size = form.querySelector("#size-select").value;
    let item = cart.find(i => i.size === size);
    if (item) {
        item.quantity += 1;
    } else {
        let price = (size === "8x10") ? 50 : 110;
        cart.push({ size: size, quantity: 1, price: price });
    }
});




function addToCart(size, price) {
    cart.push({size:size, quantity: 1, price: price});
    cart[size] += 1;
    cart.totalCost += price;
}


