//1. Select the elements
//2. Add Listerner to import
//3. write a function which performs job when event occurs
//
//document.querySelector("selector").addEventListener("click",function (){
//    
//})

class MobileMenu{
    constructor(){
        //Select the elements
        this.menuIcon = document.querySelector(".mobile-header-icon");
        this.mobileHeader = document.querySelector(".mobile-menu");
        this.events();
    }
    events(){
        this.menuIcon.addEventListener("click", ()=>this.toggleMenu());
    }
    toggleMenu(){
        this.mobileHeader.classList.toggle("mobile-menu-active");
        this.menuIcon.classList.toggle("mobile-header-icon-close");
    }
}

export default MobileMenu;