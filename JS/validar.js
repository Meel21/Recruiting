function validar () {
   var nombre,apellido,correo,mensaje;
    nombre = document.getElementById ("nombre").value;
    apellido = document.getElementById ("apellido").value;
    correo = document.getElementById ("correo").value;
    mensaje = document.getElementById ("mensaje").value;


    if (nombre === "" || apellido === "" || correo === "" || mensaje === ""){

        alert ("todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert ("el nombre es muy largo");
        return false;
    }
    else if(apellido.length >70){
        alert("el apellido es muy extenso");
        return false;
    }
    else if(correo.length >100){
        alert("el correo es muy extenso");
        return false;
    }
    else if (mensaje.length>50){
        alert("el mensaje excede el limite");
    }
    }

