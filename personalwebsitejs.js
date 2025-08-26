










// Typing effect for displaying text
var i = 0;
var txt = 'An aspiring student in the world of evergrowing technology.';
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("description").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Start typing after delay
setTimeout(typeWriter, 2500);
