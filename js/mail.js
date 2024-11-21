function validarFormulario() {
  
    var nombre = document.getElementById('nombre').value;
    var cedula = document.getElementById('cedula').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;


    if (nombre.trim() === '') {
        alert('Por favor, complete el campo nombre.');
        return false;
    }

   
if (cedula.trim() === '' || !/^\d{3}-?\d{3}-?\d{4}$/.test(cedula)) {
    alert("Por favor, complete el campo cédula con un número válido (de 11 dígitos, con dos guiones opcionales entre los 3 primeros dígitos y el quinto y entre el octavo y el noveno).");
    return false;
}
    
    if (telefono.trim() === '' || !/^\d+$/.test(telefono)) {
        alert('Por favor, complete el campo número de teléfono con un número válido.');
        return false;
    }

    
    if (direccion.trim() === '') {
        alert('Por favor, complete el campo dirección.');
        return false;
    }
    

    
    alert('Formulario enviado correctamente.');
    window.location.href = 'index.html';
    return false;
    
}


    
        
    
    
    

   
        



