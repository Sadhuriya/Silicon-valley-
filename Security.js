class Security {
  constructor() {
    this.access1 = createInput("answer");
    this.access2 = createInput("answer");
    this.access3 = createInput("answer");
    this.access4 = createInput("answer");
    this.button = createButton("SUBMIT");
    this.challenge3 = createButton("Next Challenge");
    this.heading = createElement("h1");
    this.image = loadImage("images/win2.jpg");
    this.system = new System();
  }

  hide() {
    this.heading.hide();
    this.button.hide();
    this.access1.hide();
    this.access2.hide();
    this.access3.hide();
    this.access4.hide();
    this.challenge3.hide();
  }
  show() {
    this.heading.show();
    this.button.show();
    this.access1.show();
    this.access2.show();
    this.access3.show();
    this.access4.show();
    this.challenge3.show();
  }

  display() {
    this.heading.html("CHALLENGE 2");
    this.heading.position(600, 0);

    this.access1.position(220, 260);
    this.access1.style("background", "white");

    this.access2.position(220, 530);
    this.access2.style("background", "white");
    //add code for creating and positioning the third input box and button

    this.access3.position(750, 260);
    this.access3.style("background", "white");

    this.access4.position(750, 410);
    this.access4.style("background", "white");

    this.button.position(750, 500);
    this.button.size(200, 50);
    this.button.style("background", "gold");
    this.button.mousePressed(() => {
      if (this.system.authenticate(accessCode1, this.access1.value())) {
        score++;
      }
      if (this.system.authenticate(accessCode2, this.access2.value())) {
        score++;
      }
      if (this.system.authenticate(accessCode3, this.access3.value())) {
        score++;
      }
      if (this.system.authenticate(accessCode4, this.access4.value())) {
        score++;
      }
    });

    if (score == 4) {
      background(this.image);
      this.heading.hide();
      this.button.hide();
      this.access1.hide();
      this.access2.hide();
      this.access3.hide();
      this.access4.hide();
      this.challenge3.position(750, 500);
      this.challenge3.size(200, 50);
      this.challenge3.style("background", "gold");
    }

    this.challenge3.mousePressed(() => {
      this.challenge3.hide();
      gameState = 3;
    });
  }
}
