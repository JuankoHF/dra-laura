// Obtén una referencia al botón por su ID
const emailButton = document.getElementById('emailButton');
const emailButton2 = document.getElementById('emailButton2');

// Agrega un manejador de evento clic al botón
emailButton.addEventListener('click', function() {
    // Definimos la dirección de correo electrónico a la que se enviará el correo
    const emailAddress = 'laura080421@gmail.com';
    
    // Abre el cliente de correo electrónico del usuario con un nuevo correo
    window.location.href = 'mailto:' + emailAddress;
});
emailButton2.addEventListener('click', function() {
    // Definimos la dirección de correo electrónico a la que se enviará el correo
    const emailAddress = 'laura080421@gmail.com';
    
    // Abre el cliente de correo electrónico del usuario con un nuevo correo
    window.location.href = 'mailto:' + emailAddress;
});