/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// Create an image index
let imageIndex = 1

// Get top level element
const carouselContainer = document.querySelector('.carousel-container')

// Add carousel 
carouselContainer.appendChild(createCarousel())

// Next / previous controls
function plusImage(num) {
  showImage(imageIndex += num)
}

// Show image function
function showImage(num) {
  const images = document.querySelectorAll('.carousel img')
  images.forEach(img => img.style.display = 'none')  
  if (num > images.length) {
    imageIndex = 1
  } else if (num < 1 ) {
    imageIndex = images.length
  }  
  images[imageIndex-1].style.display = 'block'  
}


// Component function
function createCarousel() {
  // Define elements
  const carousel = document.createElement('div')
  const carouselLeftBtn = document.createElement('div')
  const carouselImg1 = document.createElement('img')
  const carouselImg2 = document.createElement('img')
  const carouselImg3 = document.createElement('img')
  const carouselImg4 = document.createElement('img')
  const carouselRightBtn = document.createElement('div')

  // build component structure
  carousel.appendChild(carouselLeftBtn)
  carousel.appendChild(carouselImg1)
  carousel.appendChild(carouselImg2)
  carousel.appendChild(carouselImg3)
  carousel.appendChild(carouselImg4)
  carousel.appendChild(carouselRightBtn)

  // Add class names
  carousel.classList.add('carousel')
  carouselLeftBtn.classList.add('left-button')
  carouselRightBtn.classList.add('right-button')

  // Set content
  carouselImg1.src = './assets/carousel/mountains.jpeg'
  carouselImg2.src = './assets/carousel/computer.jpeg'
  carouselImg3.src = './assets/carousel/trees.jpeg'
  carouselImg4.src = './assets/carousel/turntable.jpeg'

  // Show initial img
  carouselImg1.style.display = 'block'
  
  // Add button events
  carouselLeftBtn.addEventListener('click', event => {plusImage(-1)})
  carouselRightBtn.addEventListener('click', event => {plusImage(1)})

  // Return component
  return carousel
}