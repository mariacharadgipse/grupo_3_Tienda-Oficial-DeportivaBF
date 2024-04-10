window.onload = function () {
        const formulario = document.querySelector(".formCE");

    const pErrorCE1 = document.querySelector('.error-input-name');
    const pErrorCE2 = document.querySelector('.error-input-price');
    const pErrorCE3 = document.querySelector('.error-input-discount');
    const pErrorCE4 = document.querySelector('.error-input-description');
    const pErrorCE5 = document.querySelector('.error-input-imageCE');


    formulario.addEventListener('submit', (e) => {
        if (formulario.name.value.length < 5) {
            e.preventDefault();
            pErrorCE1.innerHTML = 'El nombre del producto debe tener al menos 5 caracteres'
        } else {
            pErrorCE1.innerHTML = ''
        }
    });

    formulario.addEventListener('submit', (e) => {
    // Validar el campo de números
    var priceValue = formulario.price.value.trim();
    if (numeroValue === '') {
        e.preventDefault(); // Evitar el envío del formulario
        pErrorCE2.innerHTML = 'Por favor, introduce solo números en este campo.';
    } else {
        pErrorCE2.innerHTML = '';
    }
});

   

formulario.addEventListener('submit', (e) => {
    const discountV = formulario.discount.value;
    console.log(discountV);

    function validarDescuento(discountV) {
        var expresionDescuentoRegular = /^[0-9]+$/;
        return expresionDescuentoRegular.test(discountV);
    }

    if (validarDescuento(discountV) === false) {
        pErrorCE3.innerHTML = 'Solo puedes asignar un descuento utilizando numeros'
    } else {
        pErrorCE3.innerHTML = 'Solo puedes asignar un descuento utilizando numeros'
    }
});


formulario.addEventListener('submit', (e) => {

    if ((formulario.description.value.length) < 20) {
         e.preventDefault();
        pErrorCE4.innerHTML = 'La decripcion debe tener al menos 20 caracteres'
    } else {
        pErrorCE4.innerHTML = ''
    }
});

formulario.addEventListener('submit', (e) => {

    if (formulario.imageCE.value && !/\.(jpg|jpeg|png|gif)$/i.test(formulario.imageCE.value)) {
        e.preventDefault();
        pErrorCE5.innerHTML = 'Formato de imagen no válido. Puedes utilizar JPG, JPEG, PNG o GIF'
    } else {
        pErrorCE5.innerHTML = ''
    }
})
}





     