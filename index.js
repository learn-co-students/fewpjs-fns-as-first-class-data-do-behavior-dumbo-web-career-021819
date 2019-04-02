/* Given Code, don't edit */

function handleClick(e) {
	console.log("I was hit")
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function displayMessage(string){
	document.getElementById("greeting").textContent = string
}

function greet(time){
	let num1 = parseInt(time)
	if (num1 < 12) {
		return "Good Morning"
	}
	else if (num1 <= 17) {
		return "Good Afternoon"
	}
	else if (num1 > 17) {
		return "Good Evening"
	}

}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
