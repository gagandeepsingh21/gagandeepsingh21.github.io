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
    Mainmenu.style.top='-105%';
}
