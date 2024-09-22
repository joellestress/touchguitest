let d = 60; // Diameter of the circle
let deg = 180; // Initial rotation for the rectangle
let outline = true; // Toggle for outline

let gui;
let diameterSlider, degSlider, outlineCheckbox;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeWeight(10);

  // Initialize the GUI
  gui = createGui();
  gui.setRounding(5); // Slight rounding for a smoother look

  // Create sliders with improved labels and custom styles
  diameterSlider = createSlider("Circle Diameter", 200, 10, 100, 20, 10, 100);
  diameterSlider.setStyle({
    fillBg: color("#FF6F61"),   // Soft red background for slider
    strokeWeight: 4,            // Thin border
    handleColor: color("#00A1E4"), // Light blue handle
    trackColor: color("#E0F7FA")   // Light cyan track
  });

  degSlider = createSlider("Rotation Angle", 200, 40, 100, 20, 0, 180);
  degSlider.isInteger = true;
  degSlider.val = 45; // Start at 45 degrees for a more visible rotation
  degSlider.setStyle({
    handleColor: color("#8BC34A"),  // Green handle
    trackColor: color("#DCEDC8")    // Light green track
  });

  // Create checkbox with custom style
  outlineCheckbox = createCheckbox("Enable Outline", 340, 10, 20, 20, true);
  outlineCheckbox.setStyle({
    handleColor: color("#FFB74D"),  // Orange handle
    trackColor: color("#FFF176")    // Yellow track
  });

  // Add event listener for diameter slider
  diameterSlider.onChange = diameterSliderChange;
}

function draw() {
  background(255); // White background for a clean look
  drawGui(); // Render GUI controls

  // Check outline checkbox state
  if (outlineCheckbox.val) {
    stroke("#424242");  // Dark gray outline for shapes
  } else {
    noStroke();  // No outline if checkbox is unchecked
  }

  // Draw circle with the updated diameter
  fill("#64B5F6"); // Soft blue fill for the circle
  circle(100, 200, d);

  // Draw rotating rectangle
  push();
  translate(200, 200); // Move origin to the center of canvas
  rotate(radians(degSlider.val)); // Rotate by the selected angle
  fill("#AB47BC"); // Purple fill for the rectangle
  rect(0, 0, 60, 60);
  pop();

  // Display label for the diameter slider
  noStroke();
  fill("#212121"); // Dark text for better contrast
  textSize(14);
  textAlign(LEFT);
  text(diameterSlider.label, 140, 25);
}

// Update the circle diameter when the slider value changes
function diameterSliderChange() {
  d = diameterSlider.val;
}
