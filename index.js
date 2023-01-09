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
        name: 'Seiser Alm Tees',
        image: 'https://i.imgur.com/MFs11po.jpg',
        id: 'img',
        class: 'img-item', 'cursor-pointer'
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
        <a href="${image.name}.html"><img src="${image.image}">
    </div>
    `
}
container.innerHTML = imagesHtml

