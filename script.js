let currentIndex = 0;
const slides = document.querySelectorAll(".slide img");

function changeSlide(direction) {
    currentIndex += direction;

    // Wrap around if at the end or beginning of slides
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        if (i === currentIndex) {
            slides[i].classList.add("active");
        } else {
            slides[i].classList.remove("active");
        }
    }
}

// Add event listeners to the buttons
document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
document.querySelector(".next").addEventListener("click", () => changeSlide(1));

function hide() {
    var hiding = document.getElementsByClassName('slim').style.visibility;
    if (hiding = "hidden") {
        hiding = "visible";
    } else
        hiding = "hidden";
}



/*

//second slide

const slider = document.querySelector('.s-slider');
const sSlides = document.querySelectorAll('.s-slide');
const slideWidth = sSlides[0].clientWidth;


function updateSlidePosition() {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}


function nextSlide() {

    currentIndex = (currentIndex + 1) % sSlides.length;
    updateSlidePosition();
}

function prevSlide() {

    currentIndex = (currentIndex - 1 + sSlides.length) % sSlides.length;
    updateSlidePosition();
}

setInterval(nextSlide, 5000); // Auto slide every 5 seconds

*/