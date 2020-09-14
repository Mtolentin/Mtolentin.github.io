export default function displaySongList_v1(parentDiv) {

    document.getElementById("fader").remove();
    let fXClick = document.createElement("audio");
    fXClick.id = "fXClick";
    fXClick.src = "./dist/assets/sounds/click.ogg";
    document.getElementById("audioChannel").appendChild(fXClick);

    let menuTitle = document.createElement("div");
    menuTitle.id = "txtSelectMusic";
    menuTitle.innerText = "Select Music";
    parentDiv.appendChild(menuTitle);
    
    let subTxt = document.createElement("div");
    subTxt.id = "txtSubTxt";
    subTxt.innerText = "Hover to preview and click to begin!";
    parentDiv.appendChild(subTxt);

    let trackList = [];
    trackList.push(createTrack("nirvana", "trackNirvana"));
    setTimeout( () => {
        trackList.push(createTrack("danzaKaduro", "trackDanzaKaduro"));
    }, 1500);
    setTimeout( () => {
        trackList.push(createTrack("cebuana", "trackCebuana"));
    }, 3000);    

    function createTrack(tSrc, tID) {
        let newTrack = document.createElement("img");
        newTrack.src = "./dist/assets/gui/banners/" + tSrc + ".png";
        newTrack.className = "trackImg";
        newTrack.id = tID;
        parentDiv.appendChild(newTrack);
        parentDiv.insertBefore(newTrack, menuTitle);
        this.beginStage.bind(this);
    }

    return trackList;
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


