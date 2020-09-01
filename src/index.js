import EventListener_Revolution from './game';

const canvas = document.getElementById('dance-game');


function initButtonTest(evt) {
    {
        const offset = canvas.getBoundingClientRect();
        let rect = {
            x: 250 + offset.x,
            y: 350 + offset.y,
            width: 200,
            height: 100
        };
        const pos = {
            x: evt.clientX,
            y: evt.clientY
        };
        

        if (pos.x > rect.x &&
            pos.x < rect.x + rect.width &&
            pos.y < rect.y + rect.height &&
            pos.y > rect.y) {

            // alert('clicked inside rect');
            // console.log("Inside");
            game.hallAndOats(canvas);

        } else {
            console.log("Outside");
        }
    }
}

let game = new EventListener_Revolution(canvas);
canvas.addEventListener( 'click' , initButtonTest);

