import EventListener_Revolution from './game';

const canvas = document.getElementById('dance-game');
new EventListener_Revolution(canvas);

initButtonTest = function (evt) => {
    {
        const offset = this.getBoundingClientRect();
        console.log(offset);
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
        console.log(rect);
        console.log(pos);

        // isInside(pos, rect) {
        //   return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
        // }
        // if (isInside(mousePos, rect)) {

        if (pos.x > rect.x &&
            pos.x < rect.x + rect.width &&
            pos.y < rect.y + rect.height &&
            pos.y > rect.y) {
            // alert('clicked inside rect');
            console.log("Inside");
        } else {
            // alert('clicked outside rect');
            console.log("Outside");
        }
    })
};