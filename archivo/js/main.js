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
    //Active Link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //Remove menu mobile
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
/*link active servicios */
const linkServicios = document.querySelectorAll('.servicio__item');

function activeServicio(){
    if(linkServicios){
        linkServicios.forEach(l => l.classList.remove('active-servicios'))
        this.classList.add('active-servicios')
    }
}
linkServicios.forEach(l => l.addEventListener('click', activeServicio))
//MIXIT UP
var docWidth = document.documentElement.offsetWidth;