function toggleTheme() {
  let link = document.getElementById('theme');
  let theme = sessionStorage.getItem('theme');
  if (theme === 'dark') {
    link.setAttribute('href', 'css/light.css');
    sessionStorage.setItem('theme', 'light');
  } else {
    link.setAttribute('href', 'css/dark.css');
    sessionStorage.setItem('theme', 'dark');
  }
}
