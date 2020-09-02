export function dibujar(canvas, eLF) {

    debugger
    canvas.removeEventListener( 'click', eLF );
    let stageArrow = new Image();
 
    stageArrow.src = "./dist/assets/arrows/aStage.png";


    stageArrow.addEventListener("load", loadImage);


    let context = canvas.getContext("2d");

    function loadImage(evt) {
        let bg = document.getElementsByClassName("songList");
        bg[0].id = "playing";
        while(bg[0].readyState != 4) {}
        bg[0].play();
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

        function registerPress(evt) {
            evt.preventDefault();
            console.log([(Date.now() - origin) / 1000, evt.key]);
        }

        setInterval(function()
        {
            // console.log(currentFrame);
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
            


        }, 15);


    }



}
