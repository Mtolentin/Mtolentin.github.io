import EventListener_Revolution from './game';

let parentDiv = document.getElementById("theCanvas");
const canvas = document.getElementById('dance-game');

let fXSelect = document.createElement("audio");
fXSelect.id = "fXSelect";
fXSelect.src = "./dist/assets/sounds/select.ogg";
fXSelect.load();
parentDiv.appendChild(fXSelect);
parentDiv.insertBefore(fXSelect, canvas);
fXSelect.addEventListener("ended", function () {
    fXSelect.load();
});

let introText1 = document.createElement("div");
introText1.id = "theIntro1";
introText1.innerText = "eventListener Revolution";

let introText2 = document.createElement("div");
introText2.id = "theIntro2";
introText2.innerText = "click to begin";

let game = new EventListener_Revolution(canvas);

setTimeout(function () { 
    parentDiv.appendChild(introText1);
    parentDiv.insertBefore(introText1, canvas);
}, 1500);

setTimeout(function () {
    let initialClick = canvas.addEventListener('click', goToSongList);
    parentDiv.appendChild(introText2);
    parentDiv.insertBefore(introText2, canvas);
}, 4500);

function goToSongList(evt) {
    fXSelect.play();
    screenFade();
    setTimeout( function() {
        introText1.remove();
        introText2.remove();
        let bgSongList = document.createElement("img");
        bgSongList.id = "menuBackground"
        bgSongList.src = "./dist/assets/gui/bg.png";
        bgSongList.alt = "Error loading SongList background";
        parentDiv.appendChild(bgSongList);
        parentDiv.insertBefore(bgSongList, canvas);
        let loadSongs = bgSongList.addEventListener("animationend", function() {
            document.getElementById("fader").remove();
            displaySongList();
        });    
    }, 2000);
}

function screenFade() {
    let bgFade = document.createElement("div");
    bgFade.id = "fader";
    parentDiv.appendChild(bgFade);
    parentDiv.insertBefore(bgFade, canvas);
}

function displaySongList() {

    let nirvana = document.createElement("img");
    let danzaKaduro = document.createElement("img");
    let cebuana = document.createElement("img");



    nirvana.src = "./dist/assets/gui/banners/nirvana.png";
    danzaKaduro.src = "./dist/assets/gui/banners/danzaKaduro.png";
    cebuana.src = "./dist/assets/gui/banners/bamBamBam.png";

    nirvana.className= "trackImg";
    danzaKaduro.className = "trackImg";
    cebuana.className = "trackImg";

    nirvana.id= "trackNirvana";
    danzaKaduro.id = "trackDanzaKaduro";
    cebuana.id = "trackCebuana";

    parentDiv.appendChild(nirvana);
    parentDiv.insertBefore(nirvana, canvas);

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



