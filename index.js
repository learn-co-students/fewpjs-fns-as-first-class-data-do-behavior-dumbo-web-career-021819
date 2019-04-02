/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  const hour = parseInt(timeString, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
  // if (timeString < 12){
  //   return 'Good Morning'
  // } else if (("12:00" < timeString)&& (timeString < "17:00")){
  //   return 'Good Afternoon'
  // } else if (timeString > "17:00"){
  //   return 'Good Evening'
  // }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").textContent = msg;
}
