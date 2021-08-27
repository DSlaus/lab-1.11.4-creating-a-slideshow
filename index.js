const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
let imagesIndex = 0
let bubbles = document.querySelectorAll(".bubble")
let image = document.querySelector("img")

//Sets up page on load
changeImage()
fillInBubble()

//Next arrow
let nextArrow = document.querySelector(".next")
nextArrow.addEventListener("click", function() {
    nextSlide()
})

//Previous arrow
let previousArrow = document.querySelector(".previous")
previousArrow.addEventListener("click", function() {
    previousSlide()
})

//On bubble click
bubbles.forEach(addBubbleEventListener)

function nextSlide() {
    imagesIndex++
    if(imagesIndex === images.length) {
        imagesIndex = 0
    }
    changeImage()
    fillInBubble()
}

function previousSlide() {
    imagesIndex--
    if(imagesIndex === -1) {
        imagesIndex = (images.length - 1)
    }
    changeImage()
    fillInBubble()
}

function fillInBubble() {
    for(let i = 0; i < bubbles.length; i++) {
        bubbles[i].textContent = "○"
    }
    let fillBubble = document.querySelector("#button-" + (imagesIndex))
    fillBubble.textContent = "●"
}

function addBubbleEventListener(item, index) {
    bubbles[index].addEventListener("click", function() {
        imagesIndex = index 
        changeImage()
        fillInBubble()
    })
}

function changeImage() {
    image.setAttribute("src", images[imagesIndex])
}


