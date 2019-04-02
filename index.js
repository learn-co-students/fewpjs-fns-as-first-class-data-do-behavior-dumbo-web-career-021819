/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  time = time.replace(':', '.');
  time = parseFloat(time);

  if (time < 12) {
    return 'Good Morning';
  } else if ( (time > 12) && (time <= 17) ) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }

}

let h1 = document.querySelector('#greeting');

function displayMessage(string) {
  h1.textContent = string;
}
