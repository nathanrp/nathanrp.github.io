function darkMode() {
    var element = document.body;
    element.classList.toggle('dark');
}

const checkbox = document.getElementById('appearance');
const body = document.body;

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      body.classList.add('dark');
      window.history.replaceState({}, '', '?appearance=dark');
    } else {
      body.classList.remove('dark');
      window.history.replaceState({}, '', '?appearance=lite');
    }
  });

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

window.onload = function() {
  if (params.has('appearance','dark')) {
    body.classList.add('dark');
    checkbox.checked = true
  } else {
    body.classList.remove('dark');
  }
};

const passwordDrawer = document.getElementById('password-drawer');
const openPasswordDrawer = document.getElementById('open-password-drawer');

openPasswordDrawer.addEventListener('click', function(){
  body.classList.add('drawer-open');
  passwordDrawer.classList.add('open');
});

const closePasswordDrawers = document.querySelectorAll('.close-password-drawer');

closePasswordDrawers.forEach(element => {
  element.addEventListener('click', function() {
    body.classList.remove('drawer-open');
    passwordDrawer.classList.remove('open');
  });
});

document.onkeydown = function (e) {
  e = e || window.event;
  if (e.repeat) { return }
  // spacebar
  if(e.keyCode == '27'){
    body.classList.remove('drawer-open');
    passwordDrawer.classList.remove('open');
  }
};