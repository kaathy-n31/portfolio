export const portfolioContext = `
Nombre: Katherine Negrete.
Rol: Front-End Developer.
Ubicacion: Ciudad de Mexico, Mexico.
Correo mostrado en el portafolio: correo@ejemplo.com.
LinkedIn: https://www.linkedin.com/in/katherine-negrete-07b65b240/
GitHub: https://github.com/kaathy-n31

Perfil profesional:
Katherine Negrete es Front-End Developer con mas de 2 anos de experiencia construyendo aplicaciones web modernas, responsivas y centradas en el usuario. Se especializa en crear interfaces intuitivas, escribir codigo limpio y mantenible, y entregar experiencias digitales fluidas.
Es desarrolladora Front-End especializada en aplicaciones web modernas y escalables utilizando React, JavaScript y tecnologias del ecosistema web. Tiene experiencia en desarrollo de interfaces dinamicas, optimizacion de experiencia de usuario, integracion con APIs y mantenimiento de aplicaciones en entornos productivos.

Habilidades y tecnologias listadas en el portafolio:
JavaScript, TypeScript, HTML5, CSS3, Bootstrap, Tailwind CSS, Material UI, Next.js, .NET, Node.js, Git, VTEX, AWS, Firebase, GraphQL, SQL, Sass, Visual Studio, Visual Studio Code y React.

Experiencia profesional:
1. DR Security
Periodo: 2026 - Presente.
Rol: Software Developer.
Ubicacion: Ciudad de Mexico, Mexico.
Descripcion: Desarrolladora Frontend en proyectos como Visitax, SIVUFF e Intranet, creando interfaces responsivas, formularios dinamicos, paneles y componentes reutilizables. Participo en integracion de pasarelas de pago, visualizacion de datos en tiempo real, gestion de roles y permisos, automatizacion de procesos internos y mejoras continuas en colaboracion con equipos de backend y usuarios.
Tecnologias: React, TypeScript, Next, APIs, Tailwind, UI/UX, Testing, Prototipos de comunicacion, Redes, XAML, C#, WPF y SQL.
Sitio: https://drsecurity.net/

2. Vinneren Consulting
Periodo: Octubre 2022 - Marzo 2024.
Rol: Front-End Developer.
Ubicacion: Ciudad de Mexico, Mexico.
Descripcion: Desarrolladora Frontend con experiencia en plataformas de comercio electronico, creando interfaces responsivas y componentes reutilizables con React.js, Next.js, TypeScript y JavaScript. Participo en el ciclo completo de desarrollo, integracion de APIs, despliegues, mantenimiento, documentacion tecnica y revisiones de codigo, colaborando con equipos de diseño y backend.
Tecnologias: React, JavaScript, VTEX-IO, Contentful, CSS, Tailwind y Sass.
Sitio: https://www.vinneren.com/

3. Knowledgize
Periodo: Mayo 2022 - Octubre 2022.
Rol: IT Intern.
Ubicacion: Playa del Carmen, Mexico.
Descripcion: Experiencia en aseguramiento de calidad de software y soporte tecnico, incluyendo pruebas de funcionalidades, identificacion de errores, revision de documentacion y validacion de traducciones. Uso de Git y GitHub para control de versiones y colaboracion en equipo.
Tecnologias: HTML, CSS, JavaScript y Documentation.
Sitio: https://www.knowledgize.com

4. Genial Labs LLC
Periodo: Julio 2020 - Abril 2022.
Rol: Asistente Administrativa.
Ubicacion: Ciudad de Mexico, Mexico.
Descripcion: Apoyo en edicion de imagenes, captura de datos, documentacion, administracion de WordPress y manejo de herramientas de Google y Microsoft.
Tecnologias: WordPress, Microsoft Office y Maintenance.
Sitio: https://genial-labs.com/

Proyectos:
1. Puertas Automaticas SR.
Descripcion: Creacion de sitio web para una empresa de puertas automaticas, incluyendo diseño, desarrollo y optimizacion de la experiencia de usuario.
URL: https://puertasautomaticasjesr.com/

2. Swimwear Store.
Descripcion: Proyecto de tienda en linea para la venta de trajes de baño, con funcionalidades de carrito de compras, pasarela de pago y gestion de inventario.
URL: no especificada en el portafolio.

3. Libreria en Linea.
Descripcion: Desarrollo de una plataforma para la venta de libros en linea, con catalogo de productos y opciones de pago seguro.
URL: https://katherine-na.github.io/gallery-project/

Certificaciones:
- Introduction to HTML5, Coursera, 2022. Bases de HTML semantico para estructurar paginas web accesibles y bien organizadas.
- Introduction to CSS3, Coursera, 2022. Fundamentos de estilos, selectores, modelo de caja y diseño visual con CSS.
- Responsive Design, Coursera, 2022. Practicas para crear interfaces adaptables a distintos tamanos de pantalla.
- Introduction to JavaScript, Coursera, 2022. Conceptos iniciales de programacion web interactiva usando JavaScript.
- ReactJs + TypeScript + NextJs, Udemy, 2023. Desarrollo de aplicaciones modernas con React, tipado con TypeScript y rutas en Next.js.
- Google Analytics, Udemy, 2023. Configuracion y lectura de metricas para analizar comportamiento de usuarios en sitios web.
- Google Tag Mannager, Udemy, 2023. Implementacion de etiquetas y eventos para medicion digital sin cambios directos en codigo.
- VTEX IO, VTEX TECH, 2023. Fundamentos de desarrollo y personalizacion de experiencias ecommerce en VTEX IO.
- Cybersecurity Training, Delta Protect, 2024. Buenas practicas de seguridad digital, prevencion de riesgos y proteccion de informacion.
- APIs con .NET, Platzi, 2025. Creacion de APIs con .NET, manejo de endpoints y estructura de servicios backend.
- Diseno para programadores, Platzi, 2025. Principios de diseño visual aplicados a interfaces claras, consistentes y funcionales.
- Fundamentos de Entity Framework, Platzi, 2025. Uso de Entity Framework para modelar datos y trabajar con persistencia en .NET.
- Fundamentos de .NET, Platzi, 2025. Bases del ecosistema .NET, estructura de proyectos y desarrollo con C#.
- Introduccion a React Native, Platzi, 2025. Primer acercamiento al desarrollo de aplicaciones moviles con componentes React Native.
`.trim();

export const aiSystemPrompt = `
Eres el asistente oficial del portafolio de Katherine Negrete.

Tu trabajo consiste unicamente en responder preguntas relacionadas con la experiencia profesional de Katherine utilizando exclusivamente la informacion proporcionada en el contexto del portafolio.

No inventes informacion.
No asumas tecnologias.
No respondas preguntas fuera del contexto profesional.
No agregues experiencia, fechas, empresas, logros ni habilidades que no aparezcan en el contexto.
Si no existe la informacion responde indicando que no cuentas con datos suficientes, por ejemplo: "No encontre informacion suficiente sobre ese tema dentro del portafolio."

Responde en el mismo idioma de la pregunta cuando sea posible.
Se breve, claro y util para reclutadores.
`.trim();
