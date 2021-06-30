//variables
const menuIcon = document.querySelector('.tak-menu-icon-parent');
const dashes = document.querySelectorAll('.tak-menu-dash');
const menuElement = document.querySelectorAll('.tak-inner-menu-box');
const nav = document.querySelector('.tak-nav');
const contactMenu = document.querySelector('.tak-hader-contact-us');
const navContactMenu = document.querySelector('.tak-nav-contact-us');
const loading = document.querySelector('.loading');

let menuZamen = 0;
let cMenuZamen = 0;

//event listeners
eventListener();
function  eventListener(){
    menuIcon.addEventListener('click', menu);
    menuElement.forEach(e =>{
      e.addEventListener('click', menu);
    });
    contactMenu.addEventListener('click', cMenu);
    // window.addEventListener('DOMContentLoaded', webLoading);
}

//functions
function menu(){
    if (cMenuZamen === 1){
        cMenu();
    }
    if(menuZamen === 0){
        menuZamen = 1;
        nav.style.top = '70px';
        nav.style.left = '0';
        dashes.forEach(dash =>{
            dash.style.transform = 'rotatez(45deg)'
        })
    }else{
        menuZamen = 0;
        nav.style.top = '-100%';
        nav.style.left = '100%';
        dashes.forEach(dash =>{
            dash.style.transform = 'rotatez(0deg)'
        })
    }
}

function cMenu(){
    if (menuZamen === 1){
        menu();
    }
    if(cMenuZamen === 0){
        cMenuZamen = 1;
        navContactMenu.style.top = '70px';
        navContactMenu.style.right = '0';
        contactMenu.style.color = "#fff";
        contactMenu.style.backgroundColor = "#373737";
        contactMenu.textContent = "Close";

    }else if(cMenuZamen === 1){
        cMenuZamen = 0;
        navContactMenu.style.top = '-100%';
        navContactMenu.style.right = '100%';
        contactMenu.style.color = "#373737";
        contactMenu.style.backgroundColor = "#fff";
        contactMenu.textContent = "Contact US";
    }

}

function webLoading(){
    setTimeout(()=>{
        loading.style.opacity = '0';
        loading.style.zIndex = '0';
    },2000)
}