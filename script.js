const themeBall = document.querySelector('.theme-ball');
const body = document.querySelector('body');

themeBall.addEventListener('click', function () {
    body.classList.toggle('active');
});