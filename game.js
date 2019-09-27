var score = 1; // Create a variable to store the score in

var title = new Title('the junk yard of texas'); // Create a title element
var button = new Button('cars', btnPress);   // Create a button element
var cars = new Button('parts!', btnPress);
var dino = new Button(score)

var scr = new Text('thats old!');                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {

  }
  if(score > 15) {

  }
  dino.edit(score);
}
