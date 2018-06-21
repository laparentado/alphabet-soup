document.addEventListener("turbolinks:load", function() {

  console.log('hello')
  var string1 = "orange";

  function test(string){
    Rails.ajax({
      url: "/posting",
      type: "POST",
      data: "word=" + string,
      success: function(data) {
        console.log(string)
      }
    });
  }

  var banner = document.getElementById("banner")
  var trigger = document.getElementById("trigger")

  trigger.addEventListener("click",function(){
    banner.style.display = "block";
  })




  // test(string1)

var mainContent = document.getElementById("main-content")

var cube1 = new Array('a','a','a','f','r','s');
var cube2 = new Array('a','a','e','e','e','e');
var cube3 = new Array('a','a','f','i','r','s');
var cube4 = new Array('a','d','e','n','n','n');
var cube5 = new Array('a','e','e','e','e','m');
var cube6 = new Array('a','e','e','g','m','u');
var cube7 = new Array('a','e','g','m','n','n');
var cube8 = new Array('a','f','i','r','s','y');
var cube9 = new Array('b','b','j','k','x','z');
var cube10 = new Array('c','c','e','n','s','t');
var cube11 = new Array('e','i','i','l','s','t');
var cube12 = new Array('c','e','i','p','s','t');
var cube13 = new Array('d','d','h','n','o','t');
var cube14 = new Array('d','h','h','l','o','r');
var cube15 = new Array('d','h','h','n','o','w');
var cube16 = new Array('d','h','l','n','o','r');
var cube17 = new Array('e','i','i','i','t','t');
var cube18 = new Array('e','i','l','p','s','t');
var cube19 = new Array('e','m','o','t','t','t');
var cube20 = new Array('e','n','s','s','s','u');
var cube21 = new Array('f','i','p','r','s','y');
var cube22 = new Array('g','o','r','r','v','w');
var cube23 = new Array('i','p','r','s','s','y');
var cube24 = new Array('n','o','o','t','u','w');
var cube25 = new Array('o','o','o','t','t','u');


var grid = new Array(cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10,
					 cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18, cube19, cube20, cube21, cube22, cube23, cube24, cube25);

var previous; //stores

var gridWrapper = document.createElement("div")
gridWrapper.classList.add("gridWrapper")
mainContent.appendChild(gridWrapper)

for(let i=0; i<grid.length;i++){
  var dice = document.createElement("div")
  dice.classList.add("die")
  dice.innerHTML = grid[Math.floor(Math.random()*grid.length)][Math.floor(Math.random()*grid[i].length)]
  gridWrapper.appendChild(dice)

  var die = document.getElementsByClassName("die")
  var word = []
  var used_index = []
  die[i].addEventListener("mousedown", function(){
    word.push(event.target.innerHTML)
    used_index.push(i)

    die[i].addEventListener("mouseup", function(){
      console.log(word)
      console.log(used_index)

    })

  })
}
})
