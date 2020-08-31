export function dibujar(canvas) {

    let arrowLeft = new Image();
    let arrowDown = new Image();
    let arrowUp = new Image();
    let arrowRight = new Image();

    arrowLeft.src = "./dist/assets/arrows/aStage3.png"
    // arrowDown.src = "../dist/aStage2.png"
    // arrowUp.src = "../dist/aStage3.png"
    // arrowRight.src = "../dist/aStage4.png"

    arrowLeft.addEventListener("load", loadImage, false);
    // arrowDown.addEventListener("load", loadImage, false);
    // arrowUp.addEventListener("load", loadImage, false);
    // arrowRight.addEventListener("load", loadImage, false);

    let context = canvas.getContext("2d");

    function loadImage(evt) {
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
        let frameWidth = arrowLeft.width / numColumns;;
        let frameHeight = arrowLeft.height / numRows;;

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

            // Clear and draw
            // context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(arrowLeft, column * frameWidth, row * frameHeight, frameWidth, frameHeight, 10, 30, frameWidth, frameHeight);

        //Wait for next step in the loop
        }, 30);

        // context.clearRect(120, 25, 300, 300);
    
        //draw each frame + place them in the middle
        // context.drawImage(arrowLeft, shift, 0, frameWidth, frameHeight,
        //                 120, 25, frameWidth, frameHeight);
    
        // shift += frameWidth + 1;
    
        // if (currentFrame == totalFrames) {
        // shift = 0;
        // currentFrame = 0;
        // }
        // currentFrame++;
        
        // requestAnimationFrame(animate);
    }

}
