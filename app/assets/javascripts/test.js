window.addEventListener("DOMContentLoaded", function(){
  var test = document.getElementById("test")

  test.addEventListener("click", function(){
    test.style.backgroundColor = "red";
  })

var cube1 = new Array('a','a','e','e','g','n');
var cube2 = new Array('a','b','b','j','o','o');
var cube3 = new Array('a','c','h','o','p','s');
var cube4 = new Array('a','f','f','k','p','s');
var cube5 = new Array('a','o','o','t','t','w');
var cube6 = new Array('c','i','m','o','t','u');
var cube7 = new Array('d','e','i','l','r','x');
var cube8 = new Array('d','e','l','r','v','y');
var cube9 = new Array('d','i','s','t','t','y');
var cube10 = new Array('e','e','g','h','n','w');
var cube11 = new Array('e','e','i','n','s','u');
var cube12 = new Array('e','h','r','t','v','w');
var cube13 = new Array('e','i','o','s','s','t');
var cube14 = new Array('e','l','r','t','t','y');
var cube15 = new Array('h','i','m','n','u','qu');
var cube16 = new Array('h','l','n','n','r','z');

var grid = new Array(cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10,
					 cube11, cube12, cube13, cube14, cube15, cube16);

var gridWrapper = document.createElement("div")
gridWrapper.style.width = "300px"
gridWrapper.style.border = "1px solid"
document.body.appendChild(gridWrapper)

for(let i=0; i<grid.length;i++){
  var dice = document.createElement("div")
  dice.classList.add("die")
  dice.innerHTML = grid[i][Math.floor(Math.random()*grid[i].length)]
  gridWrapper.appendChild(dice)
}
})
