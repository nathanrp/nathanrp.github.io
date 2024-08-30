function darkMode() {
    var element = document.body;
    element.classList.toggle('dark');
}

const checkbox = document.getElementById('appearance');
const body = document.body;

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  });