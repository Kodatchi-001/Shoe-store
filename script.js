//Cards-slides
document.getElementById('btn-1').addEventListener('click', () => scrollToSlide(0));
document.getElementById('btn-2').addEventListener('click', () => scrollToSlide(1));
document.getElementById('btn-3').addEventListener('click', () => scrollToSlide(2));
document.getElementById('btn-4').addEventListener('click', () => scrollToSlide(3));
document.getElementById('btn-5').addEventListener('click', () => scrollToSlide(4));

function scrollToSlide(slideIndex) {
    const slidesContainer = document.querySelector('.cards-slides');
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