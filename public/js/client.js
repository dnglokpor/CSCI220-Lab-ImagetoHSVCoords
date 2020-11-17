// parameter
let WINDOW; // canvas window
let FPS = 60; // fps
let side = 6; // 6pixels sized boxes
let img; // image holder

// array of xybc
let xybcImage = [];

// get integer for position (x_,y_)
// from documentation
function getIndex(width, x_, y_){
    return 4 * ((width * x_ + y_)); // get index of red value
}

function preload(){
    // Load an image
    img = loadImage("img/image20.png");
}

function setup(){ // before execution
    
    // xybc stands for x coordinate, y coordinate, brightness
    // color
    class xybc {
        coordX = 0;
        coordY = 0;
        brightness = 0;
        color;
        
        // methods
        constructor(x_, y_, c){
            colorMode(RGB, 255);
            this.coordX = x_;
            this.coordY = y_;
            this.color = c;
            // extract brightness
            this.brightness = brightness(this.color) * 4;
        }
    }

    // set picture space in html page
    rectMode(CENTER);
    WINDOW = {width:800, height:800};
    let canvas = createCanvas(WINDOW.width, WINDOW.height, WEBGL);
    canvas.parent("sketch-holder");

    // set framerate
    frameRate(FPS);
    
    // deconstruction
    //image(img, 0, 0, imgWidth, imgHeight);
    img.loadPixels();
    let d = pixelDensity();
    for(let x = 0; x < img.width; x++){
        for(let y = 0; y < img.height; y++){
            // (x,y) is the pixel position
            let index = getIndex(img.width, x, y);
            xybcImage.push(new xybc(x, y,
                [img.pixels[index], img.pixels[index + 1], img.pixels[index + 2],
                 img.pixels[index + 3]
                ])
            );
        }
    }
}

function draw(){ // everytime the screen is refreshed
    background(0); // white background
    // draw 3D representation
    for(let i = 0; i < xybcImage.length; i++){
        let item = xybcImage[i];
        push();
            translate(item.coordY, item.coordX, item.brightness);
            stroke(item.color[0], item.color[1], item.color[2], item.color[3]);
            fill(item.color[0], item.color[1], item.color[2], item.color[3]);
            box(1);
        pop();
    }
}