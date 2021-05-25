//Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener('click', function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}


//detecting keyboards press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {

        case "w":
            var audio = new Audio('sounds/0.mp3');
            audio.play();
            break;

        case "a":
            var kickBass = new Audio('sounds/1.mp3');
            kickBass.play();
            break;

        case "s":
            var snare = new Audio('sounds/2.mp3');
            snare.play();
            break;

        case "d":
            var tom1 = new Audio('sounds/3.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('sounds/4.mp3');
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio('sounds/5.mp3');
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('sounds/6.mp3');
            tom4.play();
            break;

        default:
            console.log();
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);
}
