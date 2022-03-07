const navToggle = document.querySelector('.nav-toggle');
//this will look for the document to be linked to
const navLink = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click',()=> {
    document.body.classList.toggle('nav-open');
});
//when we click we want to do a function on 'nav-open' is a class that has just been created in JS script above.This means that every time we click the button, JS adds the class and applies the properties design to the class in css.

navLinks.forEachListener(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
//removes nav after clicking nav link