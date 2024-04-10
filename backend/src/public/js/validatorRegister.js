window.onload = function () {

  const formulario = document.querySelector(".formR");

  const nameInput = document.querySelector('.nameRegister');

  const pError1 = document.querySelector('.error-input-firstName');
  const pError2 = document.querySelector('.error-input-lastName');
  const pError3 = document.querySelector('.error-input-email');
  const pError31 = document.querySelector('.error-input-email2');
  const pError4 = document.querySelector('.error-input-password');
  const pError5 = document.querySelector('.error-input-imageUser');


  formulario.addEventListener('submit', (e) => {

    if ((formulario.firstName.value.length) < 2) {
      e.preventDefault();
      pError1.innerHTML = 'Debe tener al menos 2 caracteres'
    } else {
      pError1.innerHTML = ''
    }
  }),

    formulario.addEventListener('submit', (e) => {

      if ((formulario.lastName.value.length) < 2) {
        e.preventDefault();
        pError2.innerHTML = 'El apellido debe tener al menos 2 caracteres'
      } else {
        pError2.innerHTML = ''
      }
    }),

//Email
    formulario.addEventListener('submit', (e) => {
      const emailV = formulario.email.value;
      console.log(emailV);
      
      if (formulario.email.value === '') {
        pError3.innerHTML = 'No puede ser vacio'
        e.preventDefault();
      }

      function validarEmail(emailV) {
        var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
        return expresionRegular.test(emailV);
      }

      if(validarEmail(emailV) === false) {
      pError31.innerHTML = 'Email invalido'
      e.preventDefault();
        } else {
          formulario.submit();
          pError31.innerHTML = ''
        }   
});


    formulario.addEventListener('submit', (e) => {

      if ((formulario.password).value === '') {
        alert(pError4.innerHTML = 'Debes colocar una contraseña')
        e.preventDefault();
      } else {
        alert(pError4.innerHTML = '')
      }
    }),

    formulario.addEventListener('submit', (e) => {

      if (formulario.imageUser.value && !/\.(jpg|jpeg|png|gif)$/i.test(formulario.imageUser.value)) {
        pError5.innerHTML = 'Formato de imagen no válido. Puedes utilizar JPG, JPEG, PNG o GIF'
        e.preventDefault();
      } else {
        pError5.innerHTML = ''
      }
    })
}





