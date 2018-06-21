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


var createdWord = document.createElement("div")
createdWord.classList.add("createdWord")
mainContent.appendChild(createdWord)

var gridWrapper = document.createElement("div")
gridWrapper.classList.add("gridWrapper")
mainContent.appendChild(gridWrapper)

for(let i=0; i<grid.length;i++){
  var dice = document.createElement("div")
  dice.classList.add("die")
  dice.innerHTML = grid[Math.floor(Math.random()*grid.length)][Math.floor(Math.random()*grid[i].length)]
  gridWrapper.appendChild(dice)

  var die = document.getElementsByClassName("die")
  var word = ""
  var used_index = []

// function available(){
// die[i].addEventListener("mousedown", function(){
//   var pressed = die[i]
//   if (pressed == die[0] && i == 0 || i == 1 || i == 5 || i ==6){
//     word+= event.target.innerHTML
//     createdWord.innerHTML = word
//   }else if(pressed == die[1] && i == 1 || i ==0 || i ==2 ||i ==5 || i ==6 || i ==7) {
//     word += event.target.innerHTML
//     createdWord.innerHTML = word
//       console.log("die 1")
//     }else if(pressed == die[24] && i == 24 || i == 23 || i == 19 || i ==18){
//       word += event.target.innerHTML
//       createdWord.innerHTML = word
//       console.log("die 24")
//     }else{
//       die[i].removeEventListener("mousedown", function(){
//
//     })
//   }
// })
// }
//
// available()

var pressed;
die[i].addEventListener("mousedown", function(){
  word += event.target.innerHTML
  createdWord.innerHTML = word
  if(i == 0){
    pressed = i;
    console.log(pressed);
    die[i].style.backgroundColor = "purple";
    die[i+1].style.backgroundColor = "purple";
    die[i+5].style.backgroundColor = "purple";
    die[i+6].style.backgroundColor = "purple";
  }
  else if( i % 5 == 0 && i !== 20){
    die[i].style.backgroundColor = "red";
    pressed = i;
    console.log(pressed);
    die[i].style.backgroundColor = "mediumpurple";
    die[i+1].style.backgroundColor = "mediumpurple";
    die[i+5].style.backgroundColor = "mediumpurple";
    die[i+6].style.backgroundColor = "mediumpurple";
    die[i-4].style.backgroundColor = "mediumpurple";
    die[i-5].style.backgroundColor = "mediumpurple";
  }
  else if(i == 4){
    pressed = i;
    console.log(pressed);
    die[i].style.backgroundColor = "green";
    die[i-1].style.backgroundColor = "green";
    die[i+4].style.backgroundColor = "green";
    die[i+5].style.backgroundColor = "green";
  }
  else if( i == 9 || i == 14 || i == 19){
    pressed = i;
    console.log(pressed);
    die[i].style.backgroundColor = "lightgreen";
    die[i-1].style.backgroundColor = "lightgreen";
    die[i+4].style.backgroundColor = "lightgreen";
    die[i+5].style.backgroundColor = "lightgreen";
    die[i-5].style.backgroundColor = "lightgreen";
    die[i-6].style.backgroundColor = "lightgreen";

  }
  else if (i == 24){
    pressed = i;
    console.log(pressed);
    die[i].style.backgroundColor = "yellow";
    die[i-1].style.backgroundColor = "yellow";
    die[i-5].style.backgroundColor = "yellow";
    die[i-6].style.backgroundColor = "yellow";
  }
  else if (i == 21 || i == 22 || i == 23){
    pressed = i;
    console.log(pressed);
    die[i].style.backgroundColor = "silver";
    die[i-1].style.backgroundColor = "silver";
    die[i+1].style.backgroundColor = "silver";
    die[i-4].style.backgroundColor = "silver";
    die[i-5].style.backgroundColor = "silver";
    die[i-6].style.backgroundColor = "silver";
  }
  else if (i == 20){
    pressed = i;
    console.log(pressed);
    die[i].style.backgroundColor = "white";
    die[i+1].style.backgroundColor = "white";
    die[i-4].style.backgroundColor = "white";
    die[i-5].style.backgroundColor = "white";
  }
  else if (i==1 || i==2 || i==3){
    pressed = i;
    console.log(pressed);
    die[i].style.backgroundColor = "teal";
    die[i-1].style.backgroundColor = "teal";
    die[i+1].style.backgroundColor = "teal";
    die[i+4].style.backgroundColor = "teal";
    die[i+5].style.backgroundColor = "teal";
    die[i+6].style.backgroundColor = "teal";
  }
  else{
    pressed = i;
    console.log(pressed);
    die[i].style.backgroundColor = "powderblue";
    die[i-1].style.backgroundColor = "powderblue";
    die[i+1].style.backgroundColor = "powderblue";
    die[i+4].style.backgroundColor = "powderblue";
    die[i+5].style.backgroundColor = "powderblue";
    die[i+6].style.backgroundColor = "powderblue";
    die[i-4].style.backgroundColor = "powderblue";
    die[i-5].style.backgroundColor = "powderblue";
    die[i-6].style.backgroundColor = "powderblue";
  }
})



  // die[i].addEventListener("mousedown", function(){
  //   die[i].style.backgroundColor = "gold";
  //   word += event.target.innerHTML
  //   used_index.push(i)
  //   previous = i
  //   console.log(previous)
  //
  //   die[i].addEventListener("mouseup", function(){
  //     if(word.length >= 3)
  //     console.log(word)
  //     console.log(used_index)
  //
  //   })
  //
  // })

}

})
