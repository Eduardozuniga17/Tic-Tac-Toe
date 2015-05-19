
$('img').attr('src', 'e.png');

$('img').on('click', onClickSquare);

var turn = "x";

function getSquare(element) {
   var path = element.src;
   return path.charAt(path.length - 5);
}

function setSquare(element, turn)  {
   element.src = turn + ".png";
}

function onClickSquare(event) {
   var element = event.target;

   if (getSquare(element) == "e") {
     setSquare(element, turn);
     checkWin();
      if (turn == "x") {
         turn = "o";
      }
      else {
         turn = "x";
      }
   }
}
var a = $('img');

function allSame(x,y,z) {

if (getSquare(a[x]) == getSquare(a[y]) &&
    getSquare(a[y]) == getSquare(a[z]) &&
    getSquare(a[x]) != "e") {
    alert(getSquare(a[x]) + " wins");
  }
}
var combinations = [

  //row
  [0,1,2],
  [3,4,5],
  [6,7,8],

    //colums
  [0,3,6],
  [2,5,8],
  [1,4,7],

  //diagnol
  [6,4,2],
  [0,4,8],
];

function checkWin() {

for (var i in combinations) {
var combo = combinations[i];
console.log(combo);
allSame(combo[0], combo[1], combo[2]);
  }
}
