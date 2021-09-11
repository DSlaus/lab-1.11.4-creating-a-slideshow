const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
let imagesIndex = 0
const bubbles = document.querySelectorAll(".bubble")
const image = document.querySelector("img")

//Sets up page on load
changeImage()
fillInBubble()

//Next arrow
const nextArrow = document.querySelector(".next")
nextArrow.addEventListener("click", () => {
    imagesIndex++
    if(imagesIndex === images.length) {
        imagesIndex = 0
    }
    changeImage()
    fillInBubble()
})

//Previous arrow
const previousArrow = document.querySelector(".previous")
previousArrow.addEventListener("click", () => {
    imagesIndex--
    if(imagesIndex === -1) {
        imagesIndex = (images.length - 1)
    }
    changeImage()
    fillInBubble()
})

//On bubble click
bubbles.forEach(addBubbleEventListener)

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

function fillInBubble() {
    for(let i = 0; i < bubbles.length; i++) {
        bubbles[i].textContent = "○"
    }
    let fillBubble = document.querySelector("#button-" + (imagesIndex))
    fillBubble.textContent = "●"
}


