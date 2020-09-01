export function dibujar(canvas) {

    let stageArrow = new Image();
 
    stageArrow.src = "./dist/assets/arrows/aStage.png";


    stageArrow.addEventListener("load", loadImage, false);


    let context = canvas.getContext("2d");

    function loadImage(evt) {
        let bg = document.getElementsByClassName("songList");
        bg[1].id = "playing";
        bg[1].play();
        animate();
    }
    
    var shift = 0;
    // var frameWidth = 118;
    // var frameHeight = 118;
    var totalFrames = 100;
    // var currentFrame = 0;
    
    function animate() {
        // Define the number of columns and rows in the sprite
        let numColumns = 5;
        let numRows = 20;

        // Define the size of a frame
        let frameWidth = stageArrow.width / numColumns;;
        let frameHeight = stageArrow.height / numRows;;

        // The sprite image frame starts from 0
        let currentFrame = 0;

        setInterval(function()
        {
            console.log(currentFrame);
            // Pick a new frame
            currentFrame++;

            // Make the frames loop
            let maxFrame = numColumns * numRows - 1;
            if (currentFrame > maxFrame){
                currentFrame = 0;
            }

            // Update rows and columns
            let column = currentFrame % numColumns;
            let row = Math.floor(currentFrame / numColumns);

            context.clearRect(0, 0, canvas.width, canvas.height);

            // Save the current context  
            // Translate to the center point of our image  
            // Perform the rotation  
            // Translate back to the top left of our image  
            // Finally we draw the image  
            //context.drawImage(stageArrow, 0, 0);
            // And restore the context ready for the next loop  
            
            context.save();
            context.translate(206, 69);
            context.rotate(Math.PI*3/2);
            context.translate(-59, -42);
            context.drawImage(
                stageArrow, column * frameWidth, row * frameHeight,
                frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
            context.restore();

            context.save();
            context.translate(335, 69);
            context.rotate(Math.PI);
            context.translate(-66, -59);
            context.drawImage(
                stageArrow, column * frameWidth, row * frameHeight,
                frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
            context.restore();

            context.save();
            context.translate(400, 10);
            context.drawImage(
                stageArrow, column * frameWidth, row * frameHeight,
                frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
            context.restore();

            context.save();
            context.translate(592, 69);
            context.rotate(Math.PI / 2);
            context.translate(-59, -44);
            context.drawImage(
                stageArrow, column * frameWidth, row * frameHeight,
                frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
            context.restore();  
            
            //Wait for next step in the loop
        }, 15);


    }

}
