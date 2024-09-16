let input = document.getElementById('textInput');
let textChange = document.getElementById('displayText');
input.addEventListener('input', () => {
  textChange.textContent = input.value;
});
