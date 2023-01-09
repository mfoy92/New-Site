const aboutBtn = document.getElementById("about")
const contactBtn = document.getElementById("contact")
const aboutMessage = document.getElementById("about-message")
const form = document.getElementById("form-contact")
const container = document.getElementById("container")


aboutBtn.addEventListener("click", function(){ 
aboutMessage.style.display = "block"
})

contactBtn.addEventListener("click", function(){ 
form.style.display = "flex"
})

const images = [
    {
        name: 'seiser-alm-trees',
        image: 'https://i.imgur.com/MFs11po.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'seiser-alm-huts',
        image: 'https://i.imgur.com/LAKwO7w.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'scottish-lake',
        image: 'https://i.imgur.com/UTve0lH.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'seiser-alm-peaks',
        image: 'https://i.imgur.com/iGaDpXz.jpg',
        id: 'img',
        class: 'img-item wide'
    },
    {
        name: 'lomond-mist-one',
        image: 'https://i.imgur.com/gowNhb2.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'italy-lake',
        image: 'https://i.imgur.com/A8zm9Jh.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'italy-hills',
        image: 'https://i.imgur.com/g62LHdd.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'lomond-mist-two',
        image: 'https://i.imgur.com/YPt6gNF.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'scottish-hills',
        image: 'https://i.imgur.com/7B6kUkU.jpg',
        id: 'img',
        class: 'img-item wide'
    },
    {
        name: 'scottish-castle',
        image: 'https://i.imgur.com/6YXA7p4.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'scottish-street',
        image: 'https://i.imgur.com/hjabjpb.jpg',
        id: 'img',
        class: 'img-item'
    },
    {
        name: 'kilchurn',
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
        <img src="${image.image}">
        <button id="${image.id}">Buy</button>
    </div>
    `
}
container.innerHTML = imagesHtml