const aboutBtn = document.getElementById("about")
const contactBtn = document.getElementById("contact")
const aboutMessage = document.getElementById("about-message")
const form = document.getElementById("form-contact")



aboutBtn.addEventListener("click", function(){ 
aboutMessage.style.display = "block"
})

contactBtn.addEventListener("click", function(){ 
form.style.display = "flex"
})