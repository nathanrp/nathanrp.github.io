var instruments = ['kick', 'snare', 'clap', 'open', 'closed', 'cymbal', 'cowbell'];
var sounds = {};
instruments.forEach(instrument => {
sounds[instrument] = new Howl({src: ['sounds/' + instrument + '.wav']})
});

function mouseHandler(inputSound) {
inputSound.querySelector(".drum-machine-item-key").classList.remove('sound-played');
inputSound.querySelector(".drum-machine-item-glyph").classList.remove('sound-played-glyph');
setTimeout(function(){
    inputSound.querySelector(".drum-machine-item-key").classList.add('sound-played');
    inputSound.querySelector(".drum-machine-item-glyph").classList.add('sound-played-glyph');
}, 0.5);
}

instruments.forEach(instrument => {
var domElement = document.querySelector(".drum-machine-item-" + instrument);
domElement.ontouchstart = e => {
    sounds[instrument].play();
    domElement.classList.add('drum-machine-item-touched');
};

domElement.ontouchend = e => {
    e.preventDefault();
    domElement.classList.remove('drum-machine-item-touched');
};

document.querySelector(".drum-machine-item-" + instrument).ontouchstart = function() {
    sounds[instrument].play();
    domElement.classList.add('drum-machine-item-touched');
    event.preventDefault();
};

document.querySelector(".drum-machine-item-" + instrument).onmousedown = function() {
    mouseHandler(this);
    sounds[instrument].play();
};
})

document.querySelector(".drum-machine").ontouchend = function() {
event.preventDefault();
};

document.onkeydown = function (e) {
e = e || window.event;
if (e.repeat) { return }
//clearTimeout(helperTimer);
// document.querySelector('.helper-text').classList.remove('helper-text--animated');
function keyHandler(inputSound) {
    // inputSound.classList.remove('sound-played');
    inputSound.querySelector(".drum-machine-item-key").classList.remove('key-pressed-hold');
    inputSound.querySelector(".drum-machine-item-glyph").classList.remove('sound-played-glyph');
    setTimeout(function(){
    // inputSound.classList.add('sound-played');
    inputSound.querySelector(".drum-machine-item-key").classList.add('key-pressed-hold');
    inputSound.querySelector(".drum-machine-item-glyph").classList.add('sound-played-glyph');
    }, 0.5);
}

// A
if(e.keyCode == "81"){
    sounds['kick'].play();
    keyHandler(document.getElementsByClassName("drum-machine-item-kick")[0]);
}
// S
if(e.keyCode == "87"){
    sounds['snare'].play();
    //keyHandler(key_snare);
    keyHandler(document.getElementsByClassName("drum-machine-item-snare")[0]);
}
// D
if(e.keyCode == "69"){
    sounds['clap'].play();
    //keyHandler(key_clap);
    keyHandler(document.getElementsByClassName("drum-machine-item-clap")[0]);
}
// F
if(e.keyCode == "82"){
    sounds['closed'].play();
    // keyHandler(key_closed);
    keyHandler(document.getElementsByClassName("drum-machine-item-closed")[0]);
}
// G
if(e.keyCode == "84"){
    sounds['open'].play();
    // keyHandler(key_open);
    keyHandler(document.getElementsByClassName("drum-machine-item-open")[0]);
}
// H
if(e.keyCode == "89"){
    sounds['cymbal'].play();
    // keyHandler(key_cymbal);
    keyHandler(document.getElementsByClassName("drum-machine-item-cymbal")[0]);
}
// J
if(e.keyCode == "85"){
    document.querySelector(".drum-machine-item-cowbell").classList.remove('hidden');
    //document.querySelector(".drum-machine-item-cowbell").classList.add("drum-intro");
    sounds['cowbell'].play();
    // keyHandler(key_cowbell);
    keyHandler(document.getElementsByClassName("drum-machine-item-cowbell")[0]);
}
};

document.onkeyup = function (e) {
e = e || window.event;
//clearTimeout(helperTimer);
// document.querySelector('.helper-text').classList.remove('helper-text--animated');
function keyHandler(inputSound) {
    // inputSound.classList.remove('sound-played');
    inputSound.querySelector(".drum-machine-item-key").classList.remove('key-pressed-hold');
}

// A
if(e.keyCode == "81"){
    keyHandler(document.getElementsByClassName("drum-machine-item-kick")[0]);
}
// S
if(e.keyCode == "87"){
    keyHandler(document.getElementsByClassName("drum-machine-item-snare")[0]);
}
// D
if(e.keyCode == "69"){
    keyHandler(document.getElementsByClassName("drum-machine-item-clap")[0]);
}
// F
if(e.keyCode == "82"){
    keyHandler(document.getElementsByClassName("drum-machine-item-closed")[0]);
}
// G
if(e.keyCode == "84"){
    keyHandler(document.getElementsByClassName("drum-machine-item-open")[0]);
}
// H
if(e.keyCode == "89"){
    keyHandler(document.getElementsByClassName("drum-machine-item-cymbal")[0]);
}
// J
if(e.keyCode == "85"){
    keyHandler(document.getElementsByClassName("drum-machine-item-cowbell")[0]);
}
};

var urlParams = new URLSearchParams(window.location.search);
var drums = document.getElementsByClassName("drum-machine-item");


if (!urlParams.has('back')) {
var helperTimer = setTimeout( function() {
    // document.querySelector('.helper-text').classList.add('helper-text--animated');
}, 2275);
for (var i = 0; i < drums.length - 1; i++) {
    let j = i;
    drums[j].style.opacity = 0;
    if (j == 6) {
    drums[j].classList.add("drum-intro-2");
    } else {
    drums[j].classList.add("drum-intro");
    }
}

setTimeout( function() {
    for (var i = 0; i < drums.length; i++) {
    let j = i;
    drums[j].style.opacity = 1;
    drums[j].classList.remove("drum-intro");
    if (j==5) {
        setTimeout( function() {
        drums[j].classList.remove("drum-intro-2");
        }, 210);
    }
    }
}, 351+(72*(drums.length+1)));
}

// ((((2**((i+2)*.4))/3)-.3333333)*400)+300)