// 🎬 Part 2: JavaScript Functions (parameters, return values, scope)

// Global variable
let globalMessage = "Hello from global scope!";

// Function with parameters and return value
function addNumbers(a, b) {
  let result = a + b; // local variable
  return result;
}

// Function that shows result on page
function showSum(x, y) {
  let sum = addNumbers(x, y);
  document.getElementById("sumResult").innerText = 
    `The sum of ${x} and ${y} is: ${sum}`;
}

// 🎨 Part 3: Triggering CSS Animation with JS
function triggerBoxAnimation() {
  const box = document.getElementById("animateBox");
  
  // Remove the class if it already exists (so animation can replay)
  box.classList.remove("animate");
  
  // Re-add class after small delay
  setTimeout(() => {
    box.classList.add("animate");
  }, 10);
}
