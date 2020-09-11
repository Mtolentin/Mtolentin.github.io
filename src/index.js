import EventListener_Revolution from './game';

let parentDiv = document.getElementById("theCanvas");
const canvas = document.getElementById('dance-game');
const fXStart = document.getElementById("fXSelect");

let introText1 = document.createElement("div");
introText1.className = "theIntro1";
introText1.innerText = "eventListener Revolution";

let introText2 = document.createElement("div");
introText2.className = "theIntro2";
introText2.innerText = "click to begin";

let game = new EventListener_Revolution(canvas);

setTimeout(function () { 
    parentDiv.appendChild(introText1);
    parentDiv.insertBefore(introText1, canvas);

}, 1500);

setTimeout(function () {
    parentDiv.appendChild(introText2);
    parentDiv.insertBefore(introText2, canvas);
    canvas.addEventListener('click', initButtonTest);

}, 6000);

fXStart.addEventListener("ended", function () {
    fXStart.load();
});
function initButtonTest(evt) {
    {
        fXStart.play();
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


            game.play(canvas, initButtonTest, "testSong");

        } else {
            console.log("Outside");
        }
    }
}



