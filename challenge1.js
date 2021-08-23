class Challenge1 {
  constructor() {
    this.bedroom = loadImage("images/bedroom challenge1.jpg");
    this.boywImage = loadImage("images/boyw.jpg");

    this.lazyBoyImage = loadImage("images/challenge1 lazy boy.png");
    this.lazyBoy = createSprite(300, 380, 30, 30);
    this.lazyBoy.addImage(this.lazyBoyImage);
    this.lazyBoy.scale = 0.5;

    clock1 = new Clock(1150, 560, 10, 10);
    clock2 = new Clock(270, 170, 10, 10);
    clock3 = new Clock(895, 300, 10, 10);
    clock4 = new Clock(1340, 625, 10, 10);
    clock5 = new Clock(360, 330, 10, 10);
    clock6 = new Clock(685, 450, 10, 10);
    clock7 = new Clock(450, 65, 10, 10);
    clock8 = new Clock(550, 550, 10, 10);

    this.button = createButton("Next Challenge");
    this.heading = createElement("h2");
  }
  hide() {
    this.button.hide();
  }

  show() {
    this.button.show();
  }
  display() {
    console.log(clock, "clock");

    if (clock > 0) {
      background(this.bedroom);
      this.heading.html("Find all the 8 clocks to wake up lazy Jack...");
      this.heading.position(400, 10);
      fill("black");
      textSize(20);
      text("clock=" + clock, 1000, 100);
      drawSprites();
    }

    if (clock <= 0) {
      this.heading.hide();

      background(this.boywImage);

      this.button.position(700, 200);
      this.button.size(100, 50);
      this.button.style("background", "cyan");
      this.button.mousePressed(() => {
        // this.button.hide();
        score = 0;
        gameState = 2;
      });
    }

    clock1.display();
    clock2.display();
    clock3.display();
    clock4.display();
    clock5.display();
    clock6.display();
    clock7.display();
    clock8.display();
  }
}
