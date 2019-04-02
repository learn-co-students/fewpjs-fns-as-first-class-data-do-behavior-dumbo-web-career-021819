/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {

  // let a = time.split(":");
  //
  // let b = a.map(function (number) {
  //   return parseInt(number);
  // });
  //
  // console.log(b);

  let newTime = parseInt(time);

  switch (true) {

    case (newTime < 12):
      return "Good Morning";
    case (newTime >= 12 && newTime <= 17):
      return "Good Afternoon";
    default:
      return "Good Evening"

  }
}
// console.log(greet("17:30"));

//-------------------------------

function displayMessage(string) {

  let element = document.querySelector('h1');
  element.innerHTML = string;

}
