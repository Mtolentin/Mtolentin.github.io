export default function displaySongList_v1(parentDiv) {

    document.getElementById("fader").remove();
    document.getElementById("menuBackground")
        .removeEventListener('click', displaySongList_v1
    );

    let fXClick = document.createElement("audio");
    fXClick.id = "fXClick";
    fXClick.src = "./dist/assets/sounds/click.ogg";
    parentDiv.appendChild(fXClick);

    let menuTitle = document.createElement("div");
    menuTitle.id = "txtSelectMusic";
    menuTitle.innerText = "Select Music";
    parentDiv.appendChild(menuTitle);
    
    let subTxt = document.createElement("div");
    subTxt.id = "txtSubTxt";
    subTxt.innerText = "Hover to preview and click to begin!";
    parentDiv.appendChild(subTxt);

    createTrack("nirvana", "trackNirvana", 0);
    createTrack("danzaKaduro", "trackDanzaKaduro", 1500);
    createTrack("cebuana, trackCebuana", 3000);

    function createTrack(tSrc, tID, tDelay) {
        let newTrack = document.createElement("div");
        newTrack.src = "./dist/assets/gui/banners/" + tSrc + ".png";
        newTrack.id = tID;
        setTimeout(function () { parentDiv.appendChild(newTrack); }, tDelay);
        newTrack.onclick = function () {dibujar(tSrc)};
        return newTrack;
    }

}


    // let nirvana = document.createElement("img");
    // nirvana.src = "./dist/assets/gui/banners/nirvana.png";
    // nirvana.className = "trackImg";
    // nirvana.id = "trackNirvana";
    
    // let danzaKaduro = document.createElement("img");
    // danzaKaduro.src = "./dist/assets/gui/banners/danzaKaduro.png";
    // danzaKaduro.className = "trackImg";
    // danzaKaduro.id = "trackDanzaKaduro";
    
    // let cebuana = document.createElement("img");
    // cebuana.src = "./dist/assets/gui/banners/cebuana.png";
    // cebuana.className = "trackImg";
    // cebuana.id = "trackCebuana";

    // parentDiv.appendChild(nirvana);

    // setTimeout(function () { parentDiv.appendChild(danzaKaduro); }, 2000);

    // setTimeout(function () { parentDiv.appendChild(cebuana); }, 4000);


