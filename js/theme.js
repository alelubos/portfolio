let link = document.getElementById('theme');
let theme = sessionStorage.getItem('theme');
theme === 'light'
  ? link.setAttribute('href', 'css/light.css')
  : link.setAttribute('href', 'css/dark.css');
