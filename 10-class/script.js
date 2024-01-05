/** Classes são um forma de Organizar seu código em
 *  funções objetos metodos e propiedades 
 * a função smooth não funciona no navegador safary
 * OBS: está transição pode ser feita em css com tyrasition ou ...
 * */

// CRIANDO A CLASSE
class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links);

    this.addClickEvent();
  }
// CRIANDO O EVENTOS
  handleClick(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    // console.log(section.offsetTop);
        window.scrollTo({
            top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
            behavior: "smooth"
        })
  }
  addClickEvent() {
    this.linkElements.forEach((link) => {
      link.addEventListener("click", this.handleClick);
    });
  }
}

/** extendendo a classe 
 * USANDO SUPER PARA ACESSAR O ELEMENTO 
 * USANDO BIND PARA ACESSAR A CLASSE PAI
 * */ 
class ActiveSmoothScroll extends SmoothScroll {
    constructor(links, sections) {
        super(links);

        this.sectionElements = document.querySelectorAll(sections);
        this.handleScroll = this.handleScroll.bind(this);
        this.ActiveNavScroll();
        this.handleScroll();
    }
    handleScroll() {
        this.sectionElements.forEach((section, i) => {
            if(window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
                this.linkElements[i].classList.add("active");
            } else {
                this.linkElements[i].classList.remove("active");
            }
        });
    }
    ActiveNavScroll() {
        window.addEventListener("scroll", this.handleScroll);
        
    }
}

// acessando o DOM dos links internos. 
const scroll = new ActiveSmoothScroll("a[href^='#']", "section");

// console.log(scroll.linkElements);
