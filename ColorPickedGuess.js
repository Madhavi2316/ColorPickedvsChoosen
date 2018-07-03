var colors=[
	"rgb(255, 0, 255)",
	"rgb(215, 100, 155)",
	"rgb(215, 10, 245)",
	"rgb(5, 210, 215)",
	"rgb(2, 100, 245)",
	"rgb(255, 255, 2)"
];
var choose=document.querySelector("#pickColor");
//assigning a color to test
choose.textContent=colors[2];
var pickedColor=colors[2];
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
		if(clickedColor===pickedColor)
		{
			alert("correct");
		}
		else{alert("try agaign");}
	});
}