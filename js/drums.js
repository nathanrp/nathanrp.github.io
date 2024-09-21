const heart = document.querySelector(".heart");
var beat = new Howl({src: ['sounds/kick.wav']})

function heartBeat() {
    beat.play()
    setTimeout(function() {
        beat.play()
    }, 550);
  }

let intervalId;

heart.addEventListener('mouseenter', () => {
    heartBeat();
    intervalId = setInterval(heartBeat, 1900);
});

heart.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
});