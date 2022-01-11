document.addEventListener("keypress", function(e) {
    soundmaker(e.key);
    buttonanim(e.key);
});

var Number = document.querySelectorAll("button").length;
var i = 0;
for (i = 0; i < Number; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var butin = this.innerHTML;
        soundmaker(butin);
        buttonanim(butin);
    });
}

function buttonanim(currentkey) {
    var butt = document.querySelector("." + currentkey);
    butt.classList.add("p");
    setTimeout(function() {
        butt.classList.remove("p")
    }, 110);
}

function soundmaker(key) {
    switch (key) {
        case "w":
            var v = new Audio('sounds/crash.mp3');
            v.play();
            break;
        case "a":
            var v = new Audio('sounds/kick-bass.mp3');
            v.play();
            break;
        case "s":
            var v = new Audio('sounds/snare.mp3');
            v.play();
            break;
        case "d":
            var v = new Audio('sounds/tom-1.mp3');
            v.play();
            break;
        case "j":
            var v = new Audio('sounds/tom-2.mp3');
            v.play();
            break;
        case "k":
            var v = new Audio('sounds/tom-3.mp3');
            v.play();
            break;
        case "l":
            var v = new Audio('sounds/tom-4.mp3');
            v.play();
            break;
        default:
            console.log();
            break;
    }
}