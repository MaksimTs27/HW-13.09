let localButton = document.getElementById('saveLocal');
let sessionButton = document.getElementById('saveSession');

localButton.addEventListener('click', () => {
  localStorage.setItem('userName', 'Maksim');
  alert('Cookies сохранены !');
});
localStorage.clear();
sessionButton.addEventListener('click', () => {
  sessionStorage.setItem('userName', 'Maksim');
  alert('Cookies сохранены !');
});
