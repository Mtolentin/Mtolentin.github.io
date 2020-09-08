import * as level_util from "./level";

export default class EventListener_Revolution {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.displayMenu.bind(this);
    this.displayMenu();
    
  }
  
  displayMenu(){

    this.ctx.beginPath();
    this.ctx.rect(250, 350, 200, 100);
    this.ctx.fillStyle = 'green';
    this.ctx.fill();
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = '#000000';
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.font = '40pt Kremlin Pro Web';
    this.ctx.fillStyle = '#222222';
    this.ctx.fillText('Start', 300, 415);
    
    //var canvas = document.getElementById('dance-game');
    
  }

  play(canvas, eLF, chosenSong){ level_util.dibujar(canvas, eLF, chosenSong); }
  


}
