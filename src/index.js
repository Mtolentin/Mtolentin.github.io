import EventListener_Revolution from './game';
import displaySongList_v1 from './songList_v1';

let parentDiv = document.getElementById("gameScreen");

let fXSelect = document.createElement("audio");
fXSelect.id = "fXSelect";
fXSelect.src = "./dist/assets/sounds/select.ogg";
parentDiv.appendChild(fXSelect);
fXSelect.addEventListener("ended", function () { fXSelect.load(); });

let introText1 = document.createElement("div");
introText1.id = "theIntro1";
introText1.innerText = "eventListener Revolution";

let introText2 = document.createElement("div");
introText2.id = "theIntro2";
introText2.innerText = "click to begin";

setTimeout(function () { parentDiv.appendChild(introText1); }, 1500);
setTimeout(function () { parentDiv.appendChild(introText2); }, 4500);
parentDiv.addEventListener('click', goToSongList, {once: true});



function goToSongList(evt) {
    fXSelect.play();
    screenFade();
    setTimeout( function() {
        playSelectMusic();
        introText1.remove();
        introText2.remove();
        let bgSongList = document.createElement("img");
        bgSongList.id = "menuBackground"
        bgSongList.src = "./dist/assets/gui/bg.png";
        parentDiv.appendChild(bgSongList);
        bgSongList
            .addEventListener("animationend", displaySongList_v1(parentDiv), {once: true}
        );        
    }, 2000);
}

function screenFade() {
    let bgFade = document.createElement("div");
    bgFade.id = "fader";
    parentDiv.appendChild(bgFade);
}

function playSelectMusic() {
    let fXSelectMusic = document.createElement("audio");
    fXSelectMusic.id = "fXSelectMusic";
    fXSelectMusic.src = "./dist/assets/sounds/selectMusic.ogg";
    parentDiv.appendChild(fXSelectMusic);
    fXSelectMusic.play();
}



// Testing Codes

{/* <script>
var currentPlayer;
function EvalSound(soundobj) {

 var thissound=document.getElementById(soundobj);
 if(currentPlayer  && currentPlayer != thissound) {
  currentPlayer.pause(); 
 }
 if (thissound.paused)
        thissound.play();
    else
    thissound.pause();
    thissound.currentTime = 0;
     currentPlayer = thissound;
}
</script> */}

// function initButtonTest(evt) {
//     fXSelect.play();
//     const offset = canvas.getBoundingClientRect();
//     let rect = {
//         x: 250 + offset.x,
//         y: 350 + offset.y,
//         width: 200,
//         height: 100
//     };
//     const pos = {
//         x: evt.clientX,
//         y: evt.clientY
//     };
    

//     if (pos.x > rect.x &&
//         pos.x < rect.x + rect.width &&
//         pos.y < rect.y + rect.height &&
//         pos.y > rect.y) {


//         game.play(canvas, initButtonTest, "testSong");

//     } else {
//         console.log("Outside");
//     }
// }



