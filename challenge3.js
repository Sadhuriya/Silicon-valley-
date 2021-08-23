class Challenge3 {
  constructor() {
    this.background3Img = loadImage("images/background3.jpg");
    this.brinjalImg = loadImage("images/brinjal.png");
    this.burgerImg = loadImage("images/burger.png");
    this.capsicumImg = loadImage("images/capsicum.png");
    this.donutImg = loadImage("images/donut.png");
    this.hotdogImg = loadImage("images/hotdog.png");
    this.onionImg = loadImage("images/onion.png");
    this.pizzaImg = loadImage("images/pizza.png");
    this.potatoImg = loadImage("images/potato2.png");
    this.sickBoy = loadImage("images/sick boy.png");
    this.healthyBoy = loadImage("images/healthyboy.png");
    this.winImage = loadImage("images/win2.jpg");

    this.health = 100;
    this.junkGroup;
    this.healthyFood = [];
    this.junkFood = [];
    this.gameState = 0;

    this.player = new Player(150, 500, 25);

    this.bg = createSprite(
      windowWidth / 2 + 270,
      150,
      windowWidth,
      windowHeight
    );
    this.bg.visible = false;
    this.bg.scale = 3.1;
    this.bg.addImage(this.background3Img);

    this.junkGroup = new Group();
  }
  display() {
    this.bg.visible = true;
    background("white");
    drawSprites();
    textSize(50);
    fill("white");
    text("Health: " + this.health, 200, 50);
    console.log(this.gameState);

    if (this.gameState === 0) {
      this.bg.velocityX = -4;

      this.player.display();

      if (keyDown(UP_ARROW) && this.player.body.position.y > 90) {
        this.player.move(0, -8);
      }

      if (keyDown(DOWN_ARROW) && this.player.body.position.y < 510) {
        this.player.move(0, 8);
      }

      if (this.bg.x < 370) {
        console.log("backGround", this.bg.x);
        this.bg.x = windowWidth / 2 + 270;
      }
      if (this.health <= 50) {
        this.gameState = 1;
      }
      if (this.health >= 200) {
        this.gameState = 2;
      }

      if (frameCount % 75 === 0) {
        var rand = Math.round(random(1, 4));
        switch (rand) {
          case 1:
            img = this.brinjalImg;
            break;
          case 2:
            img = this.capsicumImg;
            break;
          case 3:
            img = this.onionImg;
            break;
          case 4:
            img = this.potatoImg;
            break;
          default:
            break;
        }

        this.healthyFood.push(new HealthyFood(1320, random(50, 550), 50, img));
      }
      if (frameCount % 50 === 0) {
        var rand = Math.round(random(1, 4));
        switch (rand) {
          case 1:
            img = this.pizzaImg;
            break;
          case 2:
            img = this.hotdogImg;
            break;
          case 3:
            img = this.donutImg;
            break;
          case 4:
            img = this.burgerImg;
            break;
          default:
            break;
        }

        this.junkFood.push(new JunkFood(1320, random(50, 550), 50, img));
      }

      for (var i = 0; i < this.healthyFood.length; i++) {
        if (this.healthyFood[i] != null) {
          this.healthyFood[i].display();
          this.healthyFood[i].body.position.x += -18;
          if (this.healthyFood[i].body.position.x <= -100) {
            this.healthyFood[i] = null;
          }
          if (detectollision(this.player, this.healthyFood[i])) {
            this.healthyFood[i] = null;
            this.health = this.health + 10;
          }
        }
      }

      for (var i = 0; i < this.junkFood.length; i++) {
        if (this.junkFood[i] != null) {
          this.junkFood[i].display();
          this.junkFood[i].body.position.x += -18;
          if (this.junkFood[i].body.position.x <= -100) {
            this.junkFood[i] = null;
          }
          if (detectollision(this.player, this.junkFood[i])) {
            this.junkFood[i] = null;
            this.health = this.health - 10;
          }
        }
      }
    }

    if (this.gameState === 1) {
      this.bg.velocityX = 0;
      textSize(50);
      text("YOU'RE SICK...", 500, 300);
      image(this.sickBoy, 550, 400, 200, 200);
    }
    if (this.gameState === 2) {
      this.bg.velocityX = 0;
      background(this.winImage);
      textSize(50);
      text("YOU'RE SO HEALTHY NOW!!!", 350, 300);
      image(this.healthyBoy, 550, 370, 200, 200);
    }
  }
}
