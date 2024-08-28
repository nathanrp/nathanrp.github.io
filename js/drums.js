
const defibullators = document.querySelectorAll('.defibullator');
var beat = new Howl({src: ['sounds/kick.wav']})
var heart = document.querySelector(".heart");
var defibullator = document.getElementById('defibullator');

function shock() {
    if (!(heart.classList.contains('beating'))) {
        heart.classList.add('beating');
        heart.src='img/heart-beating.gif';
        setTimeout(function(){
            heart.classList.remove('beating');
            heart.src='img/heart.gif';
        }, 920);
    } else {
        
    }
}

defibullators.forEach(element => {
    element.addEventListener('mousedown', function() {
        beat.play();
        shock();
    });
});

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.repeat) { return }
    // spacebar
    if(e.keyCode == "32"){
        beat.play();
        shock();
        defibullator.classList.add('active');
        e.preventDefault();
    }
};

document.onkeypress = function (e) {
    e = e || window.event;
    if (e.repeat) { return }
    // spacebar
    if(e.keyCode == "32"){
        event.preventDefault();
    }
};

document.onkeyup = function (e) {
    e = e || window.event;
    if (e.repeat) { return }
    defibullator.classList.remove('active');
};