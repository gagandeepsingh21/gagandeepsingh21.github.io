const Mainmenu = document.querySelector(".mynav_ul");
const closemenu = document.querySelector(".closeMenu");
const Openmenu = document.querySelector(".Openmenu");

Openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);
function show(){
    Mainmenu.style.display ='flex';
    Mainmenu.style.top='0';
    

}
function close(){
    Mainmenu.style.top='-110%';
    
}
// const observerOptions = {
//   root: null,
//   rootMargin: "100px",
//   threshold: 0.7
// };

// function observerCallback(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // fade in observed elements that are in view
//       entry.target.classList.replace('fadeOut', 'faderight');
//     } else {
//       // fade out observed elements that are not in view
//       entry.target.classList.replace('faderight', 'fadeOut');
//     }
//   });
// }
// const Fade = document.querySelectorAll('.fade');

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// Fade.forEach(el => {observer.observe(el)});

const obseverOption = {

    root: null,
    rootMargin: "100px",
    threshold: 0.7
};
function observerCallback(entries, observer){
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.replace('fadeOut','faderight');
        }else{
            entry.target.classList.replace('faderight','fadeOut');
        }
    });
}
const observer = new IntersectionObserver(observerCallback, obseverOption)
const Fade = document.querySelectorAll('.fade');
Fade.forEach(a => {observer.observe(a)})


//scroll
 var scroll = document.querySelector('.scrollTop');
window.addEventListener('scroll', function(){
   
    scroll.classList.toggle("active" , window.scrollY > 300)
})
