let form = document.getElementById('myForm');

form.addEventListener('click', (event) => {
  event.preventDefault();

  let name = document.getElementById('userName');
  let sendName = name.value;
  console.log(sendName);
});
