/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let arr = timeString.split(":")
  let num = parseInt(arr[0])
  if ( num < 12) return "Good Morning"
  if ( num > 17) return "Good Evening"
  return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
 greeting = document.getElementById('greeting');
 greeting.textContent = message;


};
