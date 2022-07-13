const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

const navbar = document.querySelector('.container');
let sticky = navbar.offsetTop;
const navbarScroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
};

window.onscroll = navbarScroll;



window.addEventListener("scroll",function(){
    var scroll = document.querySelector(".scrollTop");
    scroll.classList.toggle("active",window.scrollY>500)
})

function scrollToTop(){
    window.scrollTo({
        top:0
    })
}




hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});



menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});