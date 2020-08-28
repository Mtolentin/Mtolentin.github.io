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


  //Function to check whether a point is inside a rectangle

  
  displayMenu() {
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
    
    var canvas = document.getElementById('dance-game');
    
    debugger
    //The rectangle should have x,y,width,height properties
    
    //Binding the click event on the canvas
    canvas.addEventListener('click', function (evt) {
      // let rect = {
      //   x: 250,
      //   y: 350,
      //   width: 200,
      //   height: 100
      // };
      debugger
      const rect = this.getBoundingClientRect();
      const mousePos = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
      // isInside(pos, rect) {
      //   return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
      // }
      if (isInside(mousePos, rect)) {
        // alert('clicked inside rect');
        console.log("Inside");
      } else {
        // alert('clicked outside rect');
        console.log("Outside");
      }
    }, false);
  }
  


}