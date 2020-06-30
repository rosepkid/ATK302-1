let cars = []; // an array for the objects

function setup() {
  createCanvas(windowWidth, windowHeight);

  // spawn the objects
  for (let i = 0; i < 10; i++) {
    cars.push(new Car());  // put the objects onto the cars array
  }
}


function draw() {

  background('white');

  // iterate through the array, display them, update them
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].update();
  }

  // draw a "frog" here

}




// this is the Car class!
class Car {
  constructor() {
    // attributes
    this.pos = createVector(width / 2, height / 2); // where it starts
    this.vel = createVector(random(-3, 3), random(-3, 3)); // direction

  }

  // methods

  display() { // this displays the object

     ellipse(this.pos.x, this.pos.y, 30, 30);
    // image(img1, this.pos.x, this.pos.y, 100, 100) ;
  }

  update() { // this moves the object
    this.pos.add(this.vel);  // add the velocity to the position

    // loop the objects around the screen
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
