class Challenge2 {
  constructor() {
    this.image = loadImage("images/background.jpg");
  }
  display() {
    background(this.image);
    clues();
    security.display();
  }
}
