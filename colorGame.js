var colors = pushColor(6);
var numSquares = 6;//to keep track of the mode,initially set to 6
var boxes = document.querySelectorAll(".square");
var winner = randomColor();
var colorDisplay = document.getElementById("display");
var textDisplay = document.getElementById("textDisplay");
var heading = document.querySelector("h1");
var reset = document.getElementById("reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquares = 3; //value changes to 3 when easy button clicked
	//generate all new colors
	colors = pushColor(numSquares);
	//pick a new random color from the array
	winner = randomColor();
	//change colorDsiplay to the match color
	colorDisplay.textContent = winner;
	//loop to vanish the bottom 3 colors
	for(var i=0;i<boxes.length;i++){
		if(colors[i]){
			boxes[i].style.backgroundColor = colors[i];
		}else{
			boxes[i].style.display = "none";
		}
	}
	heading.style.backgroundColor = "steelblue";//set the background of <h1> back to normal.
	textDisplay.textContent = "";
});
hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numSquares = 6;//value changes again to 6 when easy button clicked
	//generate all new colors
	colors = pushColor(numSquares);
	//pick a new random color from the array
	winner = randomColor();
	//change color display to matched winner
	colorDisplay.textContent = winner;
	//change colors of boxes
	for(var i = 0;i<boxes.length;i++){
		boxes[i].style.backgroundColor = colors[i];
		boxes[i].style.display = "block";
	}
	heading.style.backgroundColor = "steelblue";//set the background of <h1> back to normal.
	textDisplay.textContent = "";
});
colorDisplay.textContent = winner;
reset.addEventListener("click", function(){
	//generate all new colors
	colors = pushColor(numSquares);//when we click the reset button it will generate the squares according to easy and hard mode
	//pick a new random color from the array
	winner = randomColor();
	//change color display to matched winner
	colorDisplay.textContent = winner;
	//change colors of boxes
	for(var i = 0;i<boxes.length;i++){
		boxes[i].style.backgroundColor = colors[i];
	}
	heading.style.backgroundColor = "steelblue";//set the background of <h1> back to normal.
	textDisplay.textContent = "";
	this.textContent = "new colors";
});
// logic to determine correct and wrong color
for(var i = 0;i < boxes.length; i++){ 
	boxes[i].style.backgroundColor = colors[i];
	boxes[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === winner){
			textDisplay.textContent = "CORRECT";
			colorChange(winner);
			heading.style.backgroundColor = winner;//change the background color when correct color matched
			reset.textContent = "play again?"
		}else{
			this.style.backgroundColor = "white";
			textDisplay.textContent = "TRY AGAIN";
		}
	});	
}
function colorChange(color){
	//loop through the boxes and change the color of every box to the winner color
	for(var i = 0;i<boxes.length;i++){
		boxes[i].style.backgroundColor = winner;
	}
}
 function randomColor(){
 	//pick random color form the array[i] position
 	 var random = Math.floor(Math.random() * colors.length);
 	 	return colors[random];
 }
function pushColor(num){ //push color to the colors[] array
	//make an array
	var arr = [];
	//push random color to array
	for(var i=0;i<num;i++){
		arr.push(colorGenerate());
	}
	//return the ARRAY
	return arr;
}
function colorGenerate(){ //generate random colors for colors[] array
	//pick a red from 0-255
	 var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	 var g = Math.floor(Math.random() * 256);
	//pick a blue from p-255
	 var b = Math.floor(Math.random() * 256);
	//combine the color--- "rgb(r,g,b)""
	 return "rgb("+r+", "+g+", "+b+")";
}
