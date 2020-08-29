import Nirvana from "./nirvana";

export default class EventListener_Revolution {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    this.displayMenu.bind(this);
    this.displayMenu();
    
  }
  
  displayMenu(){
    debugger
    this.ctx.clearRect();
    this.ctx.beginPath();
    this.ctx.rect(250, 350, 200, 100);
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(25, 72, 32, 32);
    this.ctx.fill();
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = '#000000';
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.font = '40pt Kremlin Pro Web';
    this.ctx.fillStyle = '#000000';
    this.ctx.fillText('Start', 345, 415);
    
    //var canvas = document.getElementById('dance-game');



  }
  


}