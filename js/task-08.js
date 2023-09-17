const formRegis = document.querySelector('form.login-form');

formRegis.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    alert("Por favor coloque los datos para continuar");
  }

  console.log(`Login: ${email}, Password: ${password}`);
  form.reset();
}
