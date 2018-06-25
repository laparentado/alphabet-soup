document.addEventListener("turbolinks:load", function() {

  console.log('hello')
  var string1 = "orange";

  function test(string){
    Rails.ajax({
      url: "/posting",
      type: "POST",
      data: "word=" + string,
      success: function(data) {
        console.log(data)
        clear()
      }
    });
  }

  var banner = document.getElementById("banner")
  var banner2 = document.getElementById("banner2")
  var span = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close")[1];
  var trigger = document.getElementById("trigger")
  var trigger2 = document.getElementById("trigger2")

  trigger2.addEventListener("click",function(){
    banner.style.display = "none";
    setTimeout (function() {banner2.style.display = "block";}, 100);
  })
  trigger.addEventListener("click",function(){
    banner2.style.display = "none"
    setTimeout (function() {banner.style.display = "block";}, 100);
  })
  span.onclick = function() {
    banner2.style.display = "none";
  }
  span2.onclick = function() {
    banner.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == banner2 || event.target == banner) {
        banner2.style.display = "none";
        banner.style.display = "none";
    }
  }


var mainContent = document.getElementById("main-content")
var letterBoard = document.getElementById("letter-board")
var guessedWords = document.getElementById("guessed-words")
var letterSpoon = document.getElementById("letter-spoon")
var wordsCan = document.getElementById("words-can")
var gameScreen = document.getElementById("gamescreen-content")
var totalScore = document.getElementById("total-score")

//these are the cube letter arrays
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

//append cubes in random order with random letter from their corresponding array to board
var gridWrapper = document.createElement("div")
gridWrapper.classList.add("gridWrapper")
letterBoard.appendChild(gridWrapper)

for(let i=0; i<grid.length;i++){
  var die = document.createElement("li")
  die.innerHTML = grid[Math.floor(Math.random()*grid.length)][Math.floor(Math.random()*grid[i].length)]
  gridWrapper.appendChild(die)

  die = gridWrapper.getElementsByTagName("li")
  die[i].setAttribute("data-order", i)
  die[i].setAttribute("data-value", die[i].innerHTML)
}

  var guess = []
  var word = ""
  var used_index = []

  var createdWord = document.createElement("div")
  createdWord.classList.add("createdWord")
  letterBoard.appendChild(createdWord)

//disable or enable cubes according to if they have previously been used or are adjacent to current cube
  function valid(index){
    for(i=0; i < die.length; i++){
        die[i].classList.add("disabled");

    }if(index !=4 && index !=9 && index != 14 && index != 19 && index != 24){
      die[index + 1].classList.remove("disabled")
    }
    if(index !=5 && index !=10 && index != 15 && index != 20 && index != 25 && index !=0){
      die[index - 1].classList.remove("disabled")
    }
    if(index % 5 > 0){
      die[index - 1].classList.remove("disabled")
    }
    if(index > 4){
      die[index - 5].classList.remove("disabled")
    }
    if(index < 20){
      die[index + 5].classList.remove("disabled")
    }
    if(index < 19 && index != 4 && index != 9 && index != 14 && index != 19 && index !=24){
      die[index + 6].classList.remove("disabled")
    }
    if(index < 21 && index % 5 > 0){
      die[index + 4].classList.remove("disabled")
    }
    if(index > 5 && index % 5 > 0){
      die[index - 6].classList.remove("disabled")
    }
    if(index > 3 && index != 4 && index != 9 && index !=14 && index != 19 && index != 24){
      die[index - 4].classList.remove("disabled")
    }
    die[index].classList.add("selected")
  }

  function addLetter(param) {
  			return function() {
  				if (this.classList.contains("selected") || this.classList.contains("disabled")) {
  					return;
  				}
          var toGuess = param;
          guess.push(toGuess)
          word = guess.join("")
          createdWord.innerHTML = word

          valid(parseInt(this.getAttribute("data-order")))
  }
}

//submit & reset buttons, score shown, guessed words shown
var submit = document.createElement("button")
var reset = document.createElement("button")
var score = document.createElement("div")
var wordList = document.createElement("div")
var points = 0;
score.classList.add("score")
wordList.classList.add("wordList")
totalScore.appendChild(score)
guessedWords.appendChild(wordList)
submit.setAttribute("id", "submit")
submit.innerHTML = "submit"
letterBoard.appendChild(submit)
reset.setAttribute("id", "reset")
reset.innerHTML = "RESET"
wordsCan.appendChild(reset)
submit.addEventListener("click", function(){
  test(word)
  worth = parseInt(word.length)-2
  points = points+ worth
  score.innerHTML = points
  wordList.innerHTML += "<strong>" + word + "</strong>" + ":      " + worth + "<br>"
})
reset.addEventListener("click", function(){
  location.reload()
})

  var items = gridWrapper.getElementsByTagName("li")
  for(i=0;i<items.length;i++){
    var chosen = items[i].getAttribute("data-value")
    items[i].onclick = addLetter(chosen)
  }

  function clear(){
    for(i=0; i< die.length ; i++){
      die[i].classList.remove("disabled")
      die[i].classList.remove("selected")
    }
    createdWord.innerHTML = ""
    guess = []
    word = ""
    createdWord.value = ""
  }

//timer and modal functions
  document.getElementById('timer').innerHTML =
    03 + ":" + 01;
  startTimer();

  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    //if(m<0){alert('timer completed')}

    var modal = mainContent.getElementsByClassName("modal")[0];
    var reload = mainContent.getElementsByClassName("reload")[0];

    if(m == 0 && s == 00){
      modal.style.display="block";
      timer.style.display= "none";
      reload.onclick = function(){
        location.reload()
      }
    }

    document.getElementById('timer').innerHTML =
      m + ":" + s;
    setTimeout(startTimer, 1000);

  }



  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }



  })
