function validate() {      
    if(document.contacto.field1.value == ""){
       alert("Por favor ingresar nombre");
       document.contacto.field1.focus() ;
       return false;
    }
    if(document.contacto.field2.value == ""){
        alert("Por favor ingresar apellido");
        document.contacto.field2.focus() ;
        return false;
    }
    if(document.contacto.field3.value == ""){
        alert("Por favor ingresar e-mail");
        document.contacto.field3.focus() ;
        return false;
    }
    if(document.contacto.field4.value == ""){
        alert("Por favor ingresar mensaje");
        document.contacto.field4.focus() ;
        return false;
    }
    }
    return(true);