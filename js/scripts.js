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