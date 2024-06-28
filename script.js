//All-Button
function button_slides() {
    //home-page
    document.getElementById('btn-1').addEventListener('click', () => scrollToSlide(0));
    document.getElementById('btn-2').addEventListener('click', () => scrollToSlide(1));
    document.getElementById('btn-3').addEventListener('click', () => scrollToSlide(2));
    document.getElementById('btn-4').addEventListener('click', () => scrollToSlide(3));
    document.getElementById('btn-5').addEventListener('click', () => scrollToSlide(4));
    //page-2
    document.getElementById('btn-1-page-2').addEventListener('click', () => scrollToSlide_2(0));
    document.getElementById('btn-2-page-2').addEventListener('click', () => scrollToSlide_2(1));
    document.getElementById('btn-3-page-2').addEventListener('click', () => scrollToSlide_2(2));
    document.getElementById('btn-4-page-2').addEventListener('click', () => scrollToSlide_2(3));
    document.getElementById('btn-5-page-2').addEventListener('click', () => scrollToSlide_2(4));
}
button_slides()
//Cards-slides-Home-Page
function scrollToSlide(slideIndex) {
    const slidesContainer = document.querySelector('.cards-slides-home-page');
    slidesContainer.style.transform = `translateX(${slideIndex * -100}%)`;
    update_button(slideIndex)
}

function update_button(index_button) {
    const buttons = document.querySelectorAll('.w-3.h-3.rounded-full.cursor-pointer');
    buttons.forEach((button, index) => {
        if (index === index_button) {
            button.style.backgroundColor = '#dc2626'
        } else {
            button.style.backgroundColor = 'black'
        }
    });
}

//Cards-slides-Page-2
function scrollToSlide_2(slideIndex) {
    const slidesContainer = document.querySelector('.cards-slides-page-2');
    slidesContainer.style.transform = `translateX(${slideIndex * -100}%)`;
    update_button_2(slideIndex)
}

function update_button_2(index_button) {
    const buttons = document.querySelectorAll('.button-page-2');
    buttons.forEach((button, index) => {
        if (index === index_button) {
            button.style.color = '#fbb239'
        } else {
            button.style.color = 'black'
        }
    });
}

//cards-slides-page-2
var currentIndex1 = 0;
var currentIndex4 = 0;
var currentIndex5 = 0;

function cards_page_2_cards_1(direction) {
    const slides = document.querySelectorAll('.card-slides-1');
    const totalSlides = slides.length;
    currentIndex1 = moveSlide(direction, currentIndex1, totalSlides);
    document.querySelector('.cards-1').style.transform = `translateX(${currentIndex1 * -100}%)`;
}

function cards_page_2_cards_4(direction) {
    const slides = document.querySelectorAll('.card-slides-4');
    const totalSlides = slides.length;
    currentIndex4 = moveSlide(direction, currentIndex4, totalSlides);
    document.querySelector('.cards-4').style.transform = `translateX(${currentIndex4 * -100}%)`;
}

function cards_page_2_cards_5(direction) {
    const slides = document.querySelectorAll('.card-slides-5');
    const totalSlides = slides.length;
    currentIndex5 = moveSlide(direction, currentIndex5, totalSlides);
    document.querySelector('.cards-5').style.transform = `translateX(${currentIndex5 * -100}%)`;
}


//cards-slides-page-3
var currentIndex6 = 0;
const totalNumbers = 10;

function cards_page_3(direction) {
    const slides = document.querySelectorAll('.card-slides-page-3');
    const totalSlides = slides.length;

    currentIndex6 = moveSlide(direction, currentIndex6, totalSlides);
    document.querySelector('.cards-page-3').style.transform = `translateX(${currentIndex6 * -100}%)`;

    update_number(currentIndex6);
    update_tittle(currentIndex6)
}

function update_number(currentIndex) {
    const displayIndex = (currentIndex % totalNumbers) + 1;
    const numberslide = document.getElementById('number-slider')

    numberslide.textContent = `${displayIndex}`;

    if (displayIndex === 10) {
        numberslide.style.color = '#4b5563';
    } else {
        numberslide.style.color = '';
    }
}

function update_tittle(currentIndex) {
    const title_card = document.getElementById('tittle-card');
    const prix_card = document.getElementById('prix-card');
    const list_titles = ['Nike Air 1', 'Luka 2 Team ', 'Nike InfinityRN 4', 'ACG Mountain', 'Jordan Spizike ', 'Free Metcon', 'Air Jordan 5', 'Air MAX 90', 'Nike Mercurial', 'Air Force'];
    const list_prix = ['$32.99', '$80.5', '$150', '$130.99', '$45.99', '$60', '$180.99', '$60.99', '$200', '$110.99'];

    // Ensure currentIndex is within bounds of list_titles
    if (currentIndex >= 0 && currentIndex < list_titles.length && currentIndex < list_prix.length) {
        title_card.textContent = list_titles[currentIndex];
        prix_card.textContent = list_prix[currentIndex];
    }
}


//cards-slides-page-4
var currentIndex7 = 0;

function cards_page_4(direction) {
    const slides = document.querySelectorAll('.card-slides-page-4');
    const totalSlides = slides.length;
    currentIndex7 = moveSlide(direction, currentIndex7, totalSlides);
    document.querySelector('.cards-page-4').style.transform = `translateX(${currentIndex7 * -100}%)`;
}

// move-slide
function moveSlide(direction, currentIndex, totalSlides) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    return currentIndex;
}