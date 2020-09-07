const ArrowQueue = require("./arrowQueue");

export function dibujar(canvas, eLF, chosenSong) {

    canvas.removeEventListener( 'click', eLF );
    let context = canvas.getContext("2d");
    let newVideo = document.createElement("video");
    newVideo.id = "playing";
    newVideo.controls = false;
    newVideo.width = "800";
    newVideo.height = "600";

    switch (chosenSong) {
        default:
            newVideo.src = "./dist/assets/songs/danzaKaduro.mp4";
    }
    let parentDiv = document.getElementById("theCanvas");
    parentDiv.appendChild(newVideo);
    parentDiv.insertBefore(newVideo, canvas);

    let stageArrow = new Image();
    let queueArrow = new Image();
 
    stageArrow.src = "./dist/assets/arrows/aStage.png";
    queueArrow.src = "./dist/assets/arrows/aNote.png"

    newVideo.onloadeddata = function () {

        newVideo.play();
        console.log(Date.now());
        animate();
    }
    
    var shift = 0;
    // var frameWidth = 118;
    // var frameHeight = 118;
    var totalFrames = 100;
    // var currentFrame = 0;
    
    function animate() {
        let origin = Date.now();
        console.log(Date.now() - origin);
        document.addEventListener("keydown", registerPress);
        let numColumns = 5;
        let numRows = 20;
        let frameWidth = stageArrow.width / numColumns;;
        let frameHeight = stageArrow.height / numRows;;
        let currentFrame = 0;
        let maxFrame = numColumns * numRows - 1;
        let column = currentFrame % numColumns;
        let row = Math.floor(currentFrame / numColumns);

        function registerPress(evt) {
            evt.preventDefault();
            console.log([(Date.now() - origin) / 1000, evt.key]);
        }
        function drawArrow(type, direction, pos = 0) {
            let arrowParams = [];

            switch (direction) {
                case "left":
                    arrowParams.push([206, 69, Math.PI * 3 / 2, -59, -42]);
                    break;
                case "down":
                    arrowParams.push([335, 69, Math.PI, -66, -59]);
                    break;
                case "up":
                    arrowParams.push([400, 10, 0, 0, 0]);
                    break;
                default:
                    arrowParams.push([592, 69, Math.PI / 2, -59, -44]);
                    break;
            }

            context.save();
            context.translate(arrowParams[0][0], arrowParams[0][1]);
            context.rotate(arrowParams[0][2]);
            context.translate(arrowParams[0][3], arrowParams[0][4]);
            context.drawImage(
                type, column * frameWidth, row * frameHeight,
                frameWidth, frameHeight, 0, pos, frameWidth, frameHeight);
            context.restore();
        }

        let theQueue = new ArrowQueue(context);
        //timed arrow array


        setInterval(function() {
            console.log((Date.now() - origin) / 1000);
            // console.log(currentFrame);
            // Pick a new frame
            currentFrame++;

            // Make the frames loop

            if (currentFrame > maxFrame){
                currentFrame = 0;
            }

            // Update rows and columns
            column = currentFrame % numColumns;
            row = Math.floor(currentFrame / numColumns);

            context.clearRect(0, 0, canvas.width, canvas.height);



            drawArrow(stageArrow, "left");
            drawArrow(stageArrow, "down");
            drawArrow(stageArrow, "up");
            drawArrow(stageArrow, "right");

            
            // context.save();
            // context.translate(206, 69);
            // context.rotate(Math.PI*3/2);
            // context.translate(-59, -42);
            // context.drawImage(
            //     stageArrow, column * frameWidth, row * frameHeight,
            //     frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
            // context.restore();

            // context.save();
            // context.translate(335, 69);
            // context.rotate(Math.PI);
            // context.translate(-66, -59);
            // context.drawImage(
            //     stageArrow, column * frameWidth, row * frameHeight,
            //     frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
            // context.restore();

            // context.save();
            // context.translate(400, 10);
            // context.drawImage(
            //     stageArrow, column * frameWidth, row * frameHeight,
            //     frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
            // context.restore();

            // context.save();
            // context.translate(592, 69);
            // context.rotate(Math.PI / 2);
            // context.translate(-59, -44);
            // context.drawImage(
            //     stageArrow, column * frameWidth, row * frameHeight,
            //     frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
            // context.restore();  
            
            // theQueue.forEach( arrow => {
                
            // })


        }, 15);


    }



}
