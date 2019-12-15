

const slider= document.querySelector("#slider");
const sliderText= document.querySelector("#sliderText");

const slides = slider.getElementsByTagName('img');
const slidesText = sliderText.getElementsByTagName('div');

let index = 0;

function nextSlide(forward_backward){
    slides[index].classList.remove('active');
    slidesText[index].classList.remove('active');
    index = (index+forward_backward) % slides.length;
    if (index < 0){
        index = slides.length-1;
    }
    slides[index].classList.add('active');
    slidesText[index].classList.add('active');
}

function menuToggle(){
    const nav = document.querySelector('#navbar');
    nav.classList.toggle('active')

}




