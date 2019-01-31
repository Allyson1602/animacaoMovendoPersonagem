var canWidth = 650;
var canHeight = 300;

// posição onde o frame vai estar
var x = 0;
var y = 0;

var left = false;

var trackLeft = 1;
var trackRight = 0;

var srcX;
var srcY;

var sheetWidth = 864;
var sheetHeight = 280;

var cols = 8;
var rows = 2;

var width = sheetWidth / cols;
var height = sheetHeight / rows;

// movimento atual
var currentFrame = 0;

// pegando imagem
var character = new Image();
character.src = "img/character.png";

// canvas
var canvas = document.getElementById('canvas');
canvas.width = canWidth;
canvas.height = canHeight;
var ctx = canvas.getContext('2d');

function moveRight(){
    left = false;
}
function moveLeft(){
    left = true;
}

function updateFrame(){
    ctx.clearRect(x, y, width, height);
    currentFrame = ++currentFrame % cols; // 1 % 8 = 1
    srcX = currentFrame * width;
    if(left){
        x -= 5;
        srcY = trackLeft * height;
    }else{
        x += 5;
        srcY = trackRight * height;
    }
}
function drawImage(){
    updateFrame();
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}

setInterval(function(){
    drawImage();
}, 100);