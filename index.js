/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let i = parseInt(string)

  if (i < 12) {
    return "Good Morning"
  } else if (i > 12 && i < 17)  {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(inputString) {
  document.getElementById('greeting').textContent = `${inputString}`
}
