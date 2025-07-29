//your parameter variables go here!
let bodySizex = 85; //65
let bodySizey = 70; //50
let footSizex = 30; //20
let footSizey = 15; //10






function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(200, 250, 255); //light honeydew green colour
  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  drawBody();

  drawBeak();
  
  Fluffy();

  drawFoot();

  drawFin();

  drawEye();

  Fishy(160, 120);
}

function drawBody(){
  fill(50, 55, 100);
  noStroke();
  rect(30, 75, bodySizex, bodySizey, 15, 15, 5, 5);
}

function drawBeak(){
  fill(255, 200, 85);
  triangle(115, 105, 125, 110, 115, 115);
  triangle(115, 105, 120, 118, 115, 118);
  
}

function Fluffy(){
  fill(255);
  rect(30, 115, 85, 30, 15, 15, 5, 5);
  rect(85, 85, 30, 50, 15, 15, 5, 5)

}

function drawFoot(){
  fill(255, 200, 85)
  ellipse(25, 140, footSizex, footSizey);
}


function drawFin(){
  fill(50, 55, 100);
ellipse(78, 130, 20, 50);
}

function drawEye(){
  fill(0, 0, 0)
  ellipse(105, 100, 10)
}

function Fishy(x, y){ //x = 170, y = 120
  fill(120, 190, 200);
  ellipse(x, y, 30, 10); 
  triangle(x - 25, y - 10, x - 15, y, x - 25, y + 10);

  fill(0, 0, 0);
  ellipse(x + 10, y, 2);
 
}
