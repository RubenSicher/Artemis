
function languageMG(lang){
    if(lang==1){
        $("#txtMenuLamguage").text("LANGUAGE")
        $("#txtMenuHome").text("HOME")
        $("#txtMenuContact").text("CONTACT")

        $("#txtTextoMarygold").html("The property consists of 19 acres located on the eastern portion of Loop 336, which surrounds Conroe. The circuit has an average daily traffic of 20 to 30 thousand cars. The property has 872 feet of frontage on Loop 336, <mark><b> so road visibility is exceptional.</b></mark>")

         // Contacto
         $(".spanContact").text("Contact")
         $("#txtDireccion").text("Our Address")
         $("#txtEmail").text("Email Us")
         $("#txtTelefono").text("Call Us")
 
         $("#name").attr("placeholder","Your Name")
         $("#email").attr("placeholder","Your Email")
         $("#subject").attr("placeholder","Subject")
         $("#message").attr("placeholder","Message")
         $("#btnEnviarMensaje").text("Send Message")

    }else if(lang==2){
        $("#txtMenuLamguage").text("IDIOMA")
        $("#txtMenuHome").text("INICIO")
        $("#txtMenuContact").text("CONTACTO")

        $("#txtTextoMarygold").html("La propiedad consta de 19 acres ubicados en la parte este del Loop 336, que rodea a Conroe. El circuito tiene un tráfico promedio diario de 20 a 30 mil autos. La propiedad tiene 872 pies de frente en Loop 336, <mark><b>por lo que la visibilidad de la carretera es excepcional.</b></mark>")


         // Contacto
         $(".spanContact").text("Contacto")
         $("#txtDireccion").text("Dirección")
         $("#txtEmail").text("Email")
         $("#txtTelefono").text("Teléfono")
 
         $("#name").attr("placeholder","Nombre")
         $("#email").attr("placeholder","Email")
         $("#subject").attr("placeholder","Titulo")
         $("#message").attr("placeholder","Mensaje")
         $("#btnEnviarMensaje").text("Enviar")
    }
}