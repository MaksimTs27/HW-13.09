let button = document.getElementById('setCookie');

button.addEventListener('click', () => {
  document.cookie = 'username = JohnDoe; path = /';
  sessionStorage.setItem('userName', 'Maksim');
  alert('Cookie установлены');
});
