/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str) {
  let timeArr = str.split(':');
  let hourStr = timeArr[0];
  let hour = parseInt(hourStr, 10);
  console.log(hour);

  if (hour < 12) {
    return "Good Morning";
  } else if (hour > 12 && hour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  };

};

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  document.getElementById('greeting').innerHTML = str;
}
