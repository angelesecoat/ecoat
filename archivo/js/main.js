/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {nav.classList.toggle('show');})
    }
}

showMenu('nav__toggle','nav-menu');

/*===== REMOVE MENU MOBILE =====*/
//code that prevents deleting or adding items to the header list to stop
//the toggle from functioning
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    //Removes then Active Link
    //navLink.forEach(n => n.classList.remove('active'));
    //this.classList.add('active');

    //Hides menu mobile when element clicked
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== MIXIT UP =====*/
const mixer = mixitup('.servicios__container', {
    selectors: {
        target: '.servicios__content'
    },
    animation: {
        duration: 400
    }
});
//MIXIT UP
var docWidth = document.documentElement.offsetWidth;

/*link active servicios */
const linkServicios = document.querySelectorAll('.servicio__item');

function activeServicio(){
    if(linkServicios){
        linkServicios.forEach(l => l.classList.remove('active-servicios'))
        this.classList.add('active-servicios')
    }
}
linkServicios.forEach(l => l.addEventListener('click', activeServicio))

/////////////////////////////////////////////////////////
//////////////////// WEB PAGE MANAGER ///////////////////
/////////////////////////////////////////////////////////
const links = document.querySelectorAll('.content__link');
links.forEach(l => l.addEventListener('click', managePages));
//pages 
const pages = document.querySelectorAll('.web__content');
const web = document.getElementById('web');
const aviso = document.getElementById('aviso-legal');
const cookies = document.getElementById('politica-cookies');
const privacidad = document.getElementById('politica-privacidad');

/**
 * When clicked element of footer shows up the selected content 
 * @param link 
 */
function managePages(){
    if(pages){
        pages.forEach(l => l.classList.remove('display-show'))
        if(this.id === 'web-link'){
            //console.log(this);
            web.classList.add('display-show')            
        }
        else if(this.id === 'aviso-legal-link'){
            //console.log(this);
            aviso.classList.add('display-show')
        }
        else if(this.id === 'politica-cookies-link'){
            //console.log(this);
            cookies.classList.add('display-show')
        }
        else if(this.id === 'politica-privacidad-link'){
            //console.log(this);
            privacidad.classList.add('display-show')
        }
    }
}


