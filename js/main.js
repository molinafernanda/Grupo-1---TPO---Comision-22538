function validarEntero(valor){
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor)
 
    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
       //entonces (no es numero) devuelvo el valor cadena vacia
       return ""
    }else{
       //En caso contrario (Si era un número) devuelvo el valor
       return valor
    }
 }

 function validarform(){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
       alert("Tiene que escribir su nombre")
       document.fvalida.nombre.focus()
       return 0;
    }
        //valido el apellido
    if (document.fvalida.apellido.value.length==0){
        alert("Tiene que escribir su apellido")
        document.fvalida.apellido.focus()
        return 0;
     }
         //valido el telefono
         if (document.fvalida.telefono.value.length==0){
            alert("Tiene que ingresar su teléfono")
            document.fvalida.email.focus()
            return 0;
         }

         valor = document.getElementById("telefono").value;
         if( isNaN(valor) ) {
            alert("Tiene que escribir solo los números de su teléfono")
            document.fvalida.telefono.focus() 
           return false;
         }   

         //valido el email
     if (document.fvalida.email.value.length==0){
        alert("Tiene que escribir su e-mail")
        document.fvalida.email.focus()
        return 0;
     }
         //valido el email
      valor = document.getElementById("email").value;
      if( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor))){
         alert("Escriba un e-mail valido")
         document.fvalida.email.focus()
         return false;
      }
         
    //valido el interés
    if (document.fvalida.interes.selectedIndex==0){
       alert("Debe seleccionar un motivo de su contacto.")
       document.fvalida.interes.focus()
       return 0;
     }
 
    //valido el comentario

     if (document.fvalida.comentario.value.length==""){
        alert("Tiene que escribir su comentario")
        document.fvalida.comentario.focus()
        return 0;
     }
     //el formulario se envia
     alert("¡ Muchas gracias por enviar el formulario !");
     document.fvalida.submit();
 }