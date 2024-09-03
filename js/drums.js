
const defibullators = document.querySelectorAll('.defibullator');
var beat = new Howl({src: ['sounds/kick.wav']})
var heart = document.querySelector(".heart");
var defibullator = document.getElementById('defibullator');
var pumps = 0
var heartBeat

function startHeart() {
    heartBeat = setTimeout(() => {
                    heart.classList.remove('beating');
                    heart.src='img/heart.gif';
                    pumps = 0
                }, pumps * 950);
    setTimeout(() => {
        defibullator.classList.remove('active');
    }, 100);
}

function pumpHeart() {
    clearTimeout(heartBeat); // Clear the existing timeout
    heartBeat = setTimeout(() => {
                    heart.classList.remove('beating');
                    heart.src='img/heart.gif';
                    pumps = 0
                }, pumps * 950);
    setTimeout(() => {
        defibullator.classList.remove('active');
    }, 100);            
}

function shock() {
    pumps++
    if (!(heart.classList.contains('beating'))) {
        heart.classList.add('beating');
        heart.src='img/heart-beating.gif';
        startHeart();
    } else {
        pumpHeart();
    }
}

defibullators.forEach(element => {
    element.addEventListener('mousedown', function() {
        beat.play();
        shock();
        defibullator.classList.add('active');
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
    } else if(e.keyCode == '27'){
        body.classList.remove('drawer-open');
        passwordDrawer.classList.remove('open');
    }
};

document.ontouchstart = function (e) {
    e = e || window.event;
    if (e.repeat) { return }
    // spacebar
};;

document.onkeypress = function (e) {
    e = e || window.event;
    if (e.repeat) { return }
    // spacebar
    if(e.keyCode == "32"){
        e.preventDefault();
    }
};

document.onkeyup = function (e) {
    e = e || window.event;
    if (e.repeat) { return }
    defibullator.classList.remove('active');
};

document.ontouchend = function (e) {
    e = e || window.event;
    if (e.repeat) { return }
    defibullator.classList.remove('active');
};