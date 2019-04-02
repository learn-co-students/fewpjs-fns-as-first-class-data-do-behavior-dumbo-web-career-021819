/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let strTime = string.slice(0, 2);
  let newTime = parseInt(strTime);

  if (newTime < 12) {
    return "Good Morning";
  } else if (newTime >= 12 && newTime <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  let greeting = document.getElementById('greeting');
  greeting.textContent = str;
}