//your parameter variables go here!
let bodySizex = 95; //65
let bodySizey = 80; //50
let footSizex = 40; //20
let footSizey = 25; //10

let penguinx = 30
let penguiny = 60

let fishx = 170;
let fishy = 100;



function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(200, 250, 255); //light icy blue colour
  
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  

  drawBody(penguinx, penguiny);

  drawBeak(penguinx, penguiny);
  
  Fluffy(penguinx, penguiny);

  drawFoot(penguinx, penguiny);

  drawFin(penguinx, penguiny);

  drawEye(penguinx, penguiny);
 
  if(penguinx > 50){

Fishy(fishx - 130, fishy)

}
else{
  Fishy(fishx, fishy)
}

}


function drawBody(penguinx, penguiny){ // x = 30, y = 75
  fill(50, 55, 100);
  noStroke();
  rect(penguinx, penguiny, bodySizex, bodySizey, 15, 15, 5, 5);
}

function drawBeak(penguinx, penguiny){
  fill(255, 200, 85);
  triangle(penguinx + 85, penguiny + 30, penguinx + 95, penguiny + 35, penguinx + 85, penguiny + 40);
  triangle(penguinx + 85, penguiny + 30, penguinx + 90, penguiny + 43, penguinx + 85, penguiny + 43);
  
}

function Fluffy(penguinx, penguiny){
  fill(255);
  rect(penguinx, penguiny + 40, bodySizex, bodySizey - 40, 15, 15, 5, 5);
  rect(penguinx + 55, penguiny + 10, 30, 50, 15, 15, 5, 5)

}

function drawFoot(penguinx, penguiny){
  fill(255, 200, 85)
  ellipse(penguinx - 5, penguiny + 65, footSizex, footSizey);
}


function drawFin(penguinx, penguiny){
  fill(50, 55, 100);
ellipse(penguinx + 48, penguiny + 55, 20, 50);
}

function drawEye(penguinx, penguiny){
  fill(0, 0, 0)
  ellipse(penguinx + 75, penguiny + 25, 10)
}

function Fishy(fishx, fishy){ //x = 170, y = 120
  fill(120, 190, 200);
  noStroke()
  ellipse(fishx, fishy, 30, 10); 
  triangle(fishx - 25, fishy - 10, fishx - 15, fishy, fishx - 25, fishy + 10);

  fill(0, 0, 0);
  ellipse(fishx + 10, fishy, 2);
 

}




