let win;
let fps = 60; // fps
let imgWidth = 0;
let imgHeight = 0;
let img;

function setup(){ // before execution
    rectMode(CENTER);
    win = {width:600, height:600};

    let canvas = createCanvas(win.width, win.height, WEBGL);
    canvas.parent("sketch-holder");

    frameRate(fps);

    // Load an image
    img = loadImage("img/pp_adorable-animal-1198802.jpg");
}

function draw(){ // everytime the screen is refreshed
    background(0); // black background
    
    push();
//        rotateZ(frameCount * 0.01);
//        rotateX(frameCount * 0.01);
        // translate(0,0,frameCount * .3);
        texture(img);
        box(280);
    pop();
}