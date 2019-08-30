//alert("working");
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
var drumButtons = document.querySelectorAll(".drum").length;

var soundExtension = {

  w: "tom-1.mp3",

  a: "tom-2.mp3",

  s: "tom-3.mp3",

  d: "tom-4.mp3",

  j: "snare.mp3",

  k: "crash.mp3",

  l: "kick-bass.mp3"

};

for (var i = 0; i < drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {


    var soundFolder = "sounds/" + soundExtension[this.innerHTML];

    var audio = new Audio(soundFolder);

    //buttonAnimation(this.innerHTML);

    audio.play();

    buttonAnimation(this.innerHTML);

  });
}


document.addEventListener("keydown", function(event)
{
  var pressKey = event.key;

  var soundFolder = "sounds/" + soundExtension[pressKey];

  var audio = new Audio(soundFolder);

  audio.play();

  buttonAnimation(pressKey);
});


function buttonAnimation(key) {

  var activeButton = document.querySelector( "." + key );

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
