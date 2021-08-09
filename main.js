const questionsList = document.querySelectorAll('.header-wrapper').forEach((item) => {
    item.addEventListener('click', showAnswer);
});


loadEventListeners();

function loadEventListeners() {}

function showAnswer(e) {
    if (e.target !== e.currentTarget) {
        console.log(e.target.parentElement.parentElement.nextElementSibling.classList.toggle('answer'));
        console.log(e.target.parentElement.classList.toggle('header-active'));
    }

}