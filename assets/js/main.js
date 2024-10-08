document.getElementById("form-valid").onsubmit = (event) => {
  event.preventDefault();
  const EmailInput = document.getElementById("Email").value;
  const ErrorIcon = document.getElementById("ErrorImg");
  const ErrorMensaje = document.getElementById("ErrorMensa");
  const SuccessMsg = document.getElementById("ValidMsg");
  const form = document.getElementById("form-valid");

  if (EmailInput === "" || !EmailInput.includes("@")) {
    ErrorIcon.style.display = "block";
    ErrorMensaje.textContent = "Please provide a valid email.";
    ErrorMensaje.style.display = "block";
    SuccessMsg.style.display = "none";
  } else {
    ErrorIcon.style.display = "none";
    ErrorMensaje.style.display = "none";
    SuccessMsg.textContent = "Tu Correo ha sido enviado exitosamente.";
    SuccessMsg.style.display = "block";
    form.reset();
  }
};
