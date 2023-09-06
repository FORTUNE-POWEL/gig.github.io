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


//  the service pricing designs
console.clear();

const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
    const overlayEl = e.currentTarget;
    const x = e.pageX - cardsContainer.offsetLeft;
    const y = e.pageY - cardsContainer.offsetTop;

    overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
    const overlayCta = document.createElement("div");
    overlayCta.classList.add("cta");
    overlayCta.textContent = ctaEl.textContent;
    overlayCta.setAttribute("aria-hidden", true);
    overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target);
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        if (cardIndex >= 0) {
            overlay.children[cardIndex].style.width = `${width}px`;
            overlay.children[cardIndex].style.height = `${height}px`;
        }
    });
});

const initOverlayCard = (cardEl) => {
    const overlayCard = document.createElement("div");
    overlayCard.classList.add("card");
    createOverlayCta(overlayCard, cardEl.lastElementChild);
    overlay.append(overlayCard);
    observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask, false);

var listItems = document.getElementsByClassName("card__price").innerHTML;

function dollars() {
    listItems = "$...";
}

listItems.addEventListener("onload", dollars, false);

// the work page content display


const bigGuy = querySelector(".portfo");

function display() {
    var page = document.getElementById("content1");
    if (page.style.display === "none" || page.style.display === "") {
        page.style.display = "block";
    } else {
        page.style.display = "none";
    }
    console.log(display());
}

bigGuy.addEventListener("click", display, false);