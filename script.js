let values = [];
let button;
let sorting = false;
let i = 0;
let j = 0;

function setup() {
  createCanvas(800, 400);

  // Populate the array with random values
  for (let i = 0; i < width / 16; i++) {
    values.push(random(height));
  }

  button = createButton('Sort');
  button.position(10, height + 10);
  button.mousePressed(startSorting);

  //frameRate(5); // Adjust the frame rate as needed
}

function bubbleSortStep() {
  if (i < values.length - 1) {
    if (j < values.length - i - 1) {
      // Highlight the elements being compared

      if (values[j] > values[j + 1]) {
        // Swap values[j] and values[j + 1]
        let temp = values[j];
        values[j] = values[j + 1];
        values[j + 1] = temp;
      }

      // Move to the next pair
      j++;
    } else {
      // Reset the color after comparison for the last pair

      // Move to the next iteration
      i++;
      j = 0;
    }
  } else {
    // Sorting is complete
    sorting = false;
  }
}

function startSorting() {
  // Disable the button during sorting
  button.attribute('disabled', 'true');

  // Initialize sorting variables
  i = 0;
  j = 0;
  sorting = true;
}

function draw() {
  background(220);

  // If sorting is in progress, perform one step of bubble sort
  if (sorting) {
    bubbleSortStep();
  }

  // Draw the values
  for (let i = 0; i < values.length; i++) {
    fill(values[i]);
    rect(i * 8, height - values[i], 8, values[i]);
  }
}
