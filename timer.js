export default class cronometro{
    constructor(parent){
        this.s = 0;
        this.time;
        this.parent = parent;
    }
    start(){    
        this.time = setInterval(()=>{this.s+=1; this.parent.innerHTML=`${this.s}`}, 1000);

    }
    stop(){
        clearInterval(this.time)
        console.log(this.s)
    }
    restart(){
        this.parent.innerHTML = `00`
        this.s=0;
    }
    getSeconds(){
        return this.s;
    }
}


// var timer = new cronometro()
// timer.start();
// setTimeout(()=>{timer.stop()},6000)


