// initial state: "we cannot draw"
var weCanDraw = false;
// initial state of the button: "not clicked"
var isClicked = false;
// here javascript finds and selects a button element
var button = document.getElementsByTagName('button')[0];

// when somebody clicks the button, script starts selecting
button.onclick = function() {
  if (isClicked) {
    // if the button state is "clicked", then do this
    button.classList = '';
    isClicked = false;
    weCanDraw = false;
  } else {
    // if the button state is "not clicked", then do this
    button.classList.add('clicked');
    isClicked = true;
    weCanDraw = true;
  }
}

function setup() {
  // creating the canvas for painting
  createCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
  // font size
  textSize(74);

  if (weCanDraw) {
    // if weCanDraw is true then start drawing
    text('🖤', mouseX, mouseY);
  }
}
