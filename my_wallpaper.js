//your parameter variables go here!
let penguinx = 80; // 30 or 80
let penguiny = 60; //60
//chase the fish! or let the fish chase you;p

let fishx = 180;
let fishy = 100;
let fishColour = [105, 36, 242]

let bodySizex = 85; // between 75 - 95
let bodySizey = 70; //between 60 - 80  
// keep bodySizex and bodySizey 15 apart

let penguinColour = [73, 35, 148] 
let feetColour = [127, 86, 209] 

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(167, 124, 252); 
  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  

  drawPenguin(penguinx, penguiny);
 
  if(penguinx > 50){

  drawFish(fishx - 150, fishy);
}
else{
  drawFish(fishx, fishy)
}

}


function drawPenguin(penguinx, penguiny){ // x = 30, y = 75
  fill(penguinColour);
  noStroke();
  rect(penguinx, penguiny, bodySizex, bodySizey, 15, 15, 5, 5);

// beak
  fill(feetColour);
  triangle(bodySizex + penguinx, bodySizey + penguiny - 30, bodySizex + penguinx + 10, bodySizey + penguiny - 35, bodySizex + penguinx, bodySizey + penguiny - 40);
  triangle(bodySizex + penguinx, bodySizey + penguiny - 28, bodySizex + penguinx + 5, bodySizey + penguiny - 27, bodySizex + penguinx, bodySizey + penguiny - 37);
  
//fluffy white bit
  fill(255);
  rect(penguinx, penguiny + 40, bodySizex, bodySizey - 40, 15, 15, 5, 5);
  rect(penguinx + 55, penguiny + 10, bodySizex - 55, bodySizey - 10, 15, 15, 5, 5)

//foot
  fill(feetColour)
  ellipse(penguinx - 5, bodySizey + 55, bodySizex - 40, bodySizey - 55);
//fin
  fill(penguinColour);
ellipse(penguinx + 40, penguiny + 40, bodySizex - 65, bodySizey - 20);
//eye
  fill(0, 0, 0)
  ellipse(penguinx + bodySizex - 15, penguiny + 25, 10)
}

function drawFish(fishx, fishy){ //x = 170, y = 120
  fill(fishColour);
  noStroke()
  ellipse(fishx, fishy, 30, 10); 
  triangle(fishx - 25, fishy - 10, fishx - 15, fishy, fishx - 25, fishy + 10);

  fill(0, 0, 0);
  ellipse(fishx + 10, fishy, 2);
 

}




