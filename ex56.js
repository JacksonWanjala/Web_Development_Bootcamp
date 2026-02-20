// Array of color names
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Select all span elements within the h1
const spans = document.querySelectorAll('h1 span');

// Iterate over each span and assign a color from the colors array
spans.forEach((span, index) => {
  // Set the color of each span using the index to match it with the colors array
  span.style.color = colors[index];
});

