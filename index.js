/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  let timeInt = parseInt(string.split());
  if (timeInt < 12) {return "Good Morning";}
  if (timeInt >= 17) {return "Good Evening";}
  if (12 < timeInt < 17 ) {return "Good Afternoon";}
};

function displayMessage(string) {
  document.getElementById('greeting').textContent = string
};
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
