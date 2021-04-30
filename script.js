class Component{
    constructor(id){
        this.id = id;
        this.element = null;
    }

    getElement(){
        this.element = document.getElementById(this.id);
    }

    getHTML(){
        return this.element.innerHTML;
    }

    setHTML(inHTML){
        this.element.innerHTML = inHTML;
        return this.element.innerHTML;
    }
}


class Event{
    constructor(Element = Component, kind, types){
        this.element = Element;
        this.element.setHTML("<p>Carajo</p>")
        this.kind = kind
        }
    listen(){
        document.addEventListener(this.kind, () => {
            
            types[this.kind]();
        });
    }
}


const gameContainer = new Component("container2");
gameContainer.getElement();
gameContainer.setHTML("<h2> Spasibo </h2");
let ht = gameContainer.getHTML();
console.log(ht)

const elemento = new Clic(gameContainer);

// Intentaremos crear una clase de eventos y luego inyectar la clase elemento dentro de eventos
//El elemento fichado por el evento será su objetivo
// gameContainer.halo();