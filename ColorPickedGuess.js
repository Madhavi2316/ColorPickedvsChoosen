//easy button selector
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");
var numColor;

//easy button code
easyBtn.addEventListener("click", function(){
	messageDisplay.textContent=" ";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	//generate random colors
	numColor=3;
	colors= generateRandomColor(numColor);
	//set picked color
	pickedColor=colorPicked();
	//displayed color to guess
	choose.textContent=colorPicked();
	for(var i=0;i<squares.length;i++)
	{	//assing colors from colors array to sqaures
		if(colors[i]){
		squares[i].style.background=colors[i];
			}
		else{
			squares[i].style.display="none";
		}
	}
	console.log(colors);
	
	
	});


///hard buton code
hardBtn.addEventListener("click", function(){
	messageDisplay.textContent=" ";
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numColor=6;
	//generate random colors
	colors= generateRandomColor(numColor);
	for(var i=0;i<squares.length;i++)
	{	//assing colors from colors array to sqaures
	
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
			}
	console.log(colors);
	//displayed color to guess
	choose.textContent=colorPicked();
	
	//set picked color
pickedColor=colorPicked();});

var colors= generateRandomColor(6);
var messageDisplay=document.querySelector("#message");
var choose=document.querySelector("#pickColor");
//assigning a color to test
choose.textContent=colorPicked();
var pickedColor=colorPicked();

//h1 selecting to change the background when user selects the right oner
var h1= document.querySelector("h1");

//reset by new colors link
var resetDisplay= document.querySelector("#reset");
//newcolor button code
resetDisplay.addEventListener("click", function(){
	//generate random colors
		colors= generateRandomColor(numColor);
		message.textContent=" ";
		resetDisplay.textContent="New Color";
		for(var i=0;i<squares.length;i++)
		{	//assing colors from colors array to sqaures
		squares[i].style.background=colors[i];}
			console.log(colors);
			//h1.style.background="bluesteel";
			//displayed color to guess
			choose.textContent=colorPicked();
			//h1.style.background:"steelblue";
			//set picked color
			pickedColor=colorPicked();
		});

		console.log(pickedColor);
//selecting by class name
var squares=document.querySelectorAll(".colorBox");

//loop to assign colors to squares
for(var i=0;i<squares.length;i++)
{	//assing colors from colors array to sqaures
	squares[i].style.background=colors[i];
	
	//check whether clicked color is what we picked
	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;
		console.log(clickedColor);
		//choose.textContent=colorPicked();
		//conditon to check colo user clicked is what picked color
		if(clickedColor===pickedColor)
		{
			changeColor(clickedColor);
			h1.style.background=clickedColor;
			resetDisplay.textContent="Play Again";
			messageDisplay.textContent="Correct";
		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again";
			resetDisplay.textContent="New Colors";
			h1.style.background="bluesteel";
			}
	});
}

//change colors of sqaures when right color is picked
function changeColor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
		
	}
}

//genereate random color picked
function colorPicked()
{
	var random=Math.floor(Math.random() * numColor);
	return colors[random];
}


//generate random colors
function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{	
		arr.push(randomColor());
		
	}return arr;
}
function randomColor(){
	var r= Math.floor(Math.random() * 256);//red(0-255)
	var g= Math.floor(Math.random() * 256); //green (0-255)
	var b= Math.floor(Math.random() * 256); //blue (0-255)
	return "rgb(" + r + ", " + g +", "+b +")";
}