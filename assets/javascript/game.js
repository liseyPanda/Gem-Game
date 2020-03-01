//define variables
var num;
var value = [];
var min = 19;
var max = 112;
var newNum;
var currentNum;
var sum;
//assign random number to each gem
for(var i = 0; i < 4; i++){
  value[i] = random();
}

//create random value for each gem
function random(){
  num = Math.floor(Math.random()*(max - min) + min);
  console.log(num);
  return num;
}

function add(num1, num2){
  var sum = parseInt(currentNum) + parseInt(newNum);
  console.log(sum);
  return sum;
}

$(document).ready(function(){
  $("#gem1").click(function(){
    console.log("pink clicked");
    newNum = document.getElementById("score").innerHTML = value[0];
    currentNum = document.getElementById("score").innerHTML;
    add(currentNum, newNum);
    document.getElementById("score").innerHTML;
    console.log("woo");
  });
  $("#gem2").click(function(){
    random();
  });
  $("#gem3").click(function(){
    random();
  });
  $("#gem4").click(function(){
    random();
  });
});
