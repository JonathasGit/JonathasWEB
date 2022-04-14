class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this); // usar esse metoodo bind para resolver a linha 23
    }

    //Aqui vai gerar um erro de undefined, porque this perde referencia do objeto
    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation /*Verifica se tem o efeito*/ 
            ? (link.style.animation = "") /*Valor ternario, que retorna em um dos dois valores*/
            : (link.style.animation = `navLinkFade 0.5s ease forwards
             ${ /*Template*/
                index / 7 + 0.3
              }s`);
        });
      }
  

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass); /*Paara animar o x do menu*/
        this.animateLinks();
      }


    //Metodo que adiciona o clique ao menu
addClickEvent(){
    this.mobileMenu.addEventListener("click", this.handleClick);
} 

init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();



