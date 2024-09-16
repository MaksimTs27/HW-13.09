let button = document.getElementById('button');
button.style.width = 'auto';

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = 'red';
  button.textContent = 'Нажми на меня !';
  button.style.borderRadius = '5px';
});
