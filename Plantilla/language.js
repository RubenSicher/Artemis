
// 1: English
// 2: Spanish

function language(lang){
    if (lang==1){
        $("#txtMenuLamguage").text("LANGUAGE")
        $("#txtMenuAboutus").text("ABOUT US")
        $("#txtMenuProject").text("PROJECT")
        $("#txtMenuPartners").text("PARTNERS")
        $("#txtMenuContact").text("CONTACT")

        $("#btnKnowMore").text("Know more...")

        // Seccion About us
        $(".spanAboutus").text("ABOUT US")
        $("#txtTitulo").text("Real State Development")
        $("#txtAboutus1").text("A real estate developer carries out the integral planning of a project, prepares the business plan, ensures the sources of financing, coordinates the marketing and sales strategy, supervises the construction, coordinates the deliveries of the properties.")
        $("#txtAboutus2").text("The developer converts, through processes of innovation and creativity, ideas on paper and Excel proformas, into real estate projects.")
        $("#txtAboutus3").text("Search for land, form a team (architects, engineers, etc.), coordinate the design, process licenses and permits, seek financing, coordinate the construction and delivery of the properties.")

        // Seccion MaryGold
        $("#txtProject1").text("Currently, commercial development in the area is focused on the I-45 North corridor, so visitors or residents have to travel more than 4 miles or more to access shopping centers in The Woodlands.")
        $("#txtProject2").text("The subject market area is approximately 40% developed, with a general mix of low-density and predominantly residential supporting commercial interests. Commercial uses are generally along major traffic arteries or in nearby planned business parks within The Woodlands-Conroe.")
        $("#txtProjectKnowmore").text("KNOW MORE...")

        // Seccion Partners
        $(".spanPartners").text("PARTNERS")
        $("#txtAdds").text("In Real Estate, we create communities. As a leading company in our sector, we develop innovative proposals that integrate with the environment and offer luxury, high quality and sustainability options.")
        $("#txtOnboard").text("Group in constant growth, with extensive knowledge of the market where it invests and with the direct participation of the owners in the operation and administration of the businesses.")
        $("#txtJerry").text("Outstanding leaders of the Spanish real estate industry, who have extensive experience in the real estate sector in Mexico and Spain.")

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
        $("#txtMenuAboutus").text("ACERCA DE")
        $("#txtMenuProject").text("PROYECTOS")
        $("#txtMenuPartners").text("SOCIOS")
        $("#txtMenuContact").text("CONTACTO")

        $("#btnKnowMore").text("Saber más...")

        // Seccion About us
        $(".spanAboutus").text("NOSOTROS")
        $("#txtTitulo").text("Desarrollo Inmobiliario")
        $("#txtAboutus1").text("Un promotor inmobiliario realiza la planificación integral de un proyecto, elabora el plan de negocio, asegura las fuentes de financiación, coordina la estrategia de marketing y ventas, supervisa la construcción, coordina las entregas de los inmuebles.")
        $("#txtAboutus2").text("El promotor convierte, a través de procesos de innovación y creatividad, ideas en papel y proformas de Excel, en proyectos inmobiliarios.")
        $("#txtAboutus3").text("Buscar terrenos, formar equipo (arquitectos, ingenieros, etc.), coordinar el diseño, tramitar licencias y permisos, buscar financiamiento, coordinar la construcción y entrega de las propiedades.")

        // Seccion MaryGold
        $("#txtProject1").text("Actualmente, el desarrollo comercial en el área se concentra en el corredor I-45 Norte, por lo que los visitantes o residentes deben viajar más de 4 millas o más para acceder a los centros comerciales en The Woodlands.")
        $("#txtProject2").text("El área de mercado en cuestión está desarrollada aproximadamente en un 40 %, con una combinación general de intereses comerciales de apoyo predominantemente residenciales y de baja densidad. Los usos comerciales generalmente se encuentran a lo largo de las principales arterias de tráfico o en parques comerciales planificados cercanos dentro de The Woodlands-Conroe.")
        $("#txtProjectKnowmore").text("Saber más...")

        // Seccion Partners
        $(".spanPartners").text("SOCIOS")
        $("#txtAdds").text("En Real Estate creamos comunidades. Como empresa líder en nuestro sector, desarrollamos propuestas innovadoras que se integran con el entorno y ofrecen opciones de lujo, alta calidad y sostenibilidad.")
        $("#txtOnboard").text("Grupo en constante crecimiento, con amplio conocimiento del mercado donde invierte y con participación directa de los propietarios en la operación y administración de los negocios.")
        $("#txtJerry").text("Destacados líderes de la industria inmobiliaria española, que cuentan con una amplia experiencia en el sector inmobiliario en México y España.")

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
