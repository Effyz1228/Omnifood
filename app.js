const button = document.querySelector('.btn-mobile-nav');
const mainNav=document.querySelector('.header');

button.addEventListener('click',()=>{
mainNav.classList.toggle('nav-open');
})