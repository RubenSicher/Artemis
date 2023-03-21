
// 1: English
// 2: Spanish

function language(lang){
    if (lang==1){
        // $("#txtMenuLamguage").text("LANGUAGE")
        $("#txtMenuAboutus").text("ABOUT US")
        $("#txtMenuProject").text("PROJECT")
        $("#txtMenuPartners").text("PARTNERS")
        $("#txtMenuContact").text("CONTACT")

        $("#btnKnowMore").text("Know more...")

        // Seccion About us
        $(".spanAboutus").text("ABOUT US")
        $("#txtTitulo").text("Real State Development")
        $("#txtAboutus1").text("We are a real estate developer that offers its services to the construction sector in the southern United States, made up of a team of experts with more than 15 years in the disciplines of construction, risk assessment and administrative and financial management; both in the United States and in Mexico.")
        $("#txtAboutus2").text("Our formula is based on knowing exactly what our clients want; And thus, by understanding what they are looking for, knowing their real needs and adjusting every detail to their tastes, it allows us to offer them the projects they have dreamed of, automatically generating a better quality of life for them.")
        // $("#txtAboutus3").text("Search for land, form a team (architects, engineers, etc.), coordinate the design, process licenses and permits, seek financing, coordinate the construction and delivery of the properties.")

        // Seccion MaryGold
        $(".spanProjects").text("PROJECTS")
        $("#txtProject1").text("MaryGold is a housing complex construction project on Loop 336 in the city of Conroe; The project is designed to be marketed under the 'Build to Rent' model.")
        $("#txtProject2").text("The subdivision will have a construction of 200 units distributed in buildings with 1, 2 and 3 bedrooms; each unit will be independent and will have a size between 750 and 1,200 square feet, and will also have different amenities for the tastes of the whole family.")
        $("#txtProjectKnowmore").text("KNOW MORE...")

        // Seccion Partners
        $(".spanPartners").text("PARTNERS")
        $("#txtAdds").text("Development, management and construction company of real estate projects formed from the strategic association of ADD Valant and MALLK Management LLC. The company's partners have successfully operated in the Houston area for the past fifteen years working on small to medium scale construction, repair and remodeling projects on residential, commercial and office contracts.")
        $("#txtOnboard").text("Company backed by a trajectory of more than thirty years, during which they have perfected their expertise and developed the necessary tools and relationships that allow us to guarantee security and stability for the growth of your assets.")
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
        // $("#txtMenuLamguage").text("IDIOMA")
        $("#txtMenuAboutus").text("NOSOTROS")
        $("#txtMenuProject").text("PROYECTOS")
        $("#txtMenuPartners").text("SOCIOS")
        $("#txtMenuContact").text("CONTACTO")

        $("#btnKnowMore").text("Saber más...")

        // Seccion About us
        $(".spanAboutus").text("NOSOTROS")
        $("#txtTitulo").text("Desarrollo Inmobiliario")
        $("#txtAboutus1").text("Somos una desarrolladora inmobiliaria que ofrece sus servicios al sector de la contrucción al sur de los Estados Unidos, conformada por un equipo de expertos con más de 15 años en las disciplinas de construcción, evaluación de riesgos y gestión administrativa y financiera; tanto en estados unidos como en México.")
        $("#txtAboutus2").text("Nuestra fórmula parte de saber exactamente lo que nuestros clientes quieren; y así, al entender lo que buscan, conocer sus necesidades reales y ajustar cada detalle a sus gustos, nos permite brindarles los proyectos como los han soñado, generándoles automáticamente una mejor calidad de vida.")
        // $("#txtAboutus3").text("Buscar terrenos, formar equipo (arquitectos, ingenieros, etc.), coordinar el diseño, tramitar licencias y permisos, buscar financiamiento, coordinar la construcción y entrega de las propiedades.")

        // Seccion MaryGold
        $(".spanProjects").text("PROYECTOS")
        $("#txtProject1").text("MaryGold es un proyecto de construcción de un complejo habitacional sobre el Loop 336 de la ciudad de Conroe; el proyecto está diseñado para comercializarse bajo el modelo 'Build to Rent'.")
        $("#txtProject2").text("La subdivisión contará con una construcción de 200 unidades distribuidas en inmuebles de 1, 2 y 3 recámaras; cada unidad será independiente y tendrán un tamaño de entre 750 y 1,200 pies cuadrados, además contará con diferentes amenidades para gustos de toda la familia.")
        $("#txtProjectKnowmore").text("Saber más...")

        // Seccion Partners
        $(".spanPartners").text("SOCIOS")
        $("#txtAdds").text("Empresa de desarrollo, gestión y construcción de proyectos inmobiliarios formada a partir de la asociación estratégica de ADD Valant y MALLK Management LLC. Los socios de la compañia han operado con éxito en el área de Houston durante los últimos quince años trabajando en proyectps de construcción, reparación y remodelación a pequeña y mediana escala en contratos residenciales, comerciales y oficinas.")
        $("#txtOnboard").text("Compañía respaldada por una trayectoria de más de treinta años, durante los cuales han perfeccionado el expertise y desarrollando las herramientas y las relaciones necesarias que nos permitan garantizar seguridad y estabilidad para el crecimiento de tu patrimonio.")
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
