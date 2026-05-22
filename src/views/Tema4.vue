<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Estándares y #[i frameworks] para interfaces #[i web]

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema4/img-01.png', alt='')

    p.mb-4 El desarrollo de interfaces <em>web</em> modernas se fundamenta en el uso de #[b estándares abiertos] que garantizan la interoperabilidad, accesibilidad y funcionamiento de las páginas <em>web</em> en diferentes navegadores y dispositivos. Estos estándares son definidos y mantenidos principalmente por organizaciones internacionales como el World Wide <em>web</em> Consortium (W3C), entidad fundada en 1994 por Tim Berners-Lee, creador de la <em>web</em>. Su objetivo es establecer recomendaciones técnicas que permitan construir sitios y aplicaciones <em>web</em> compatibles, accesibles y sostenibles en el tiempo.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0 Además del W3C, existen otras organizaciones que participan en la evolución de los estándares <em>web</em>, como el <em>web</em> Hypertext Application Technology Working Group (WHATWG), responsable del desarrollo continuo de especificaciones relacionadas con HTML y el modelo de objetos del documento (DOM), y la International Organization for Standardization (ISO), que define normas técnicas utilizadas en diferentes tecnologías digitales, como el formato de fechas ISO 8601 empleado en campos de formularios HTML5.

    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img-02.png', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p El cumplimiento de estos estándares permite que una página <em>web</em> construida correctamente funcione de manera consistente en distintos navegadores, como Google Chrome, Mozilla Firefox, Safari o Microsoft Edge, así como en diversos sistemas operativos y dispositivos. De esta forma, los desarrolladores pueden crear aplicaciones <em>web</em> que no dependan de una plataforma específica y que ofrezcan una experiencia de usuario uniforme.
        p.mb-0 No obstante, el uso de estándares por sí solo no siempre resulta suficiente para desarrollar aplicaciones <em>web</em> complejas de forma eficiente. A medida que los proyectos crecen en tamaño y funcionalidad, aumenta también la complejidad del código y la gestión de la interacción entre componentes de la interfaz. Para abordar estos desafíos surgieron los <em>frameworks</em> front-end, que proporcionan estructuras de desarrollo organizadas, reutilización de componentes y herramientas que facilitan la construcción de aplicaciones dinámicas.

    p Los <em>frameworks</em> front-end permiten trabajar con componentes reutilizables, gestionar el estado de la aplicación, implementar sistemas de navegación entre vistas y facilitar la comunicación con servicios externos mediante APIs. Además, simplifican la manipulación del DOM y contribuyen a mejorar el rendimiento y la mantenibilidad del código. Entre los <em>frameworks</em> y bibliotecas más utilizadas en el desarrollo de interfaces <em>web</em> modernas se encuentran React, Angular y Vue.js, los cuales se emplean ampliamente en la construcción de aplicaciones <em>web</em> interactivas y escalables.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1. Estándares del W3C y validación de código

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img-03.png', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Los estándares <em>web</em> son especificaciones técnicas que garantizan que los sitios y aplicaciones <em>web</em> funcionen de manera consistente en diferentes navegadores, sistemas operativos y dispositivos. Estas especificaciones son desarrolladas principalmente por el World Wide <em>web</em> Consortium (W3C), organización internacional fundada por Tim Berners-Lee en 1994 con el propósito de asegurar el crecimiento abierto y la interoperabilidad de la <em>web</em>.
        p El W3C publica #[b recomendaciones], que son documentos técnicos que describen cómo deben implementarse las tecnologías <em>web</em>. Estas recomendaciones pasan por un riguroso proceso de revisión que involucra a empresas tecnológicas, instituciones académicas y comunidades de desarrolladores. Entre las especificaciones más relevantes para el desarrollo de interfaces <em>web</em> se encuentran:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="HTML Living Standard")
            .col-12.mb-4.mb-md-0
              p.mb-0 Desarrollado junto con el <em>web</em> Hypertext Application Technology Working Group (WHATWG), que define el lenguaje de marcado utilizado para estructurar el contenido de las páginas <em>web</em>.
          .row(numero="2" titulo="CSS Snapshot")
            .col-12.mb-4.mb-md-0
              p.mb-0 Que recopila las especificaciones estables y en desarrollo del lenguaje CSS utilizado para definir la presentación visual de las páginas.
          .row(numero="3" titulo="DOM (Document Object Model)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Que establece la representación estructural de un documento HTML o XML en forma de árbol y proporciona la interfaz de programación que permite manipularlo mediante JavaScript.
          .row(numero="4" titulo="SVG (Scalable Vector Graphics)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Estándar para gráficos vectoriales escalables utilizados en diagramas, iconos o ilustraciones que pueden ampliarse sin pérdida de calidad.
          .row(numero="5" titulo="Canvas 2D")
            .col-12.mb-4.mb-md-0
              p.mb-0 Una interfaz de programación que permite generar gráficos dinámicos o animaciones mediante dibujo programático en el navegador.
          .row(numero="6" titulo="Web APIs")
            .col-12.mb-4.mb-md-0
              p.mb-0 Conjunto de interfaces que proporcionan funcionalidades del navegador como almacenamiento local, acceso a red, notificaciones o comunicación en tiempo real.
          .row(numero="7" titulo="WCAG (Web Content Accessibility Guidelines)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Que establecen criterios de accesibilidad para garantizar que las aplicaciones <em>web</em> puedan ser utilizadas por personas con discapacidad. En Colombia, estas directrices se relacionan con normativas como la Ley 1680 de 2013 y el Decreto 1078 de 2015, que promueven la accesibilidad digital en entidades públicas.
          .row(numero="8" titulo="WebAuthn (Web Authentication)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Estándar moderno para autenticación segura sin contraseña mediante biometría o dispositivos físicos de seguridad.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img-04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Además de seguir los estándares, es fundamental realizar #[b validación de código], que consiste en verificar que un documento HTML, CSS o SVG cumpla estrictamente con las especificaciones establecidas por el W3C. Este proceso permite identificar errores de sintaxis, anidación incorrecta de etiquetas, uso de atributos no permitidos, valores inválidos o duplicación de identificadores dentro del documento.

    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img-05.svg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p La herramienta oficial para este propósito es el #[b W3C Markup Validation Service], disponible en línea y capaz de analizar documentos <em>web</em> para detectar posibles errores estructurales. Una página que supera el proceso de validación tiene mayores probabilidades de:
        ul.lista-ul--color.mt-4(data-aos="fade-down")
          li
            i.fas.fa-laptop-code
            p.mb-0 Visualizarse correctamente en diferentes navegadores.
          li
            i.fas.fa-laptop-code
            p.mb-0 Ser indexada adecuadamente por motores de búsqueda.
          li
            i.fas.fa-laptop-code
            p.mb-0 Cumplir criterios de accesibilidad para tecnologías asistivas.
          li
            i.fas.fa-laptop-code
            p.mb-0 Mejorar el rendimiento al evitar procesos de corrección automática del navegador.
          li
            i.fas.fa-laptop-code
            p.mb-0 Facilitar el mantenimiento del código al seguir estructuras estandarizadas.

    p.mb-4 En entornos de desarrollo profesional, la validación de código suele integrarse en procesos automatizados de revisión mediante herramientas como HTMLHint, stylelint para CSS y ESLint para JavaScript. Estas herramientas permiten detectar errores durante la escritura del código en editores como Visual Studio Code o WebStorm, antes de que los cambios sean incorporados al repositorio del proyecto.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-primario
          h5 Figura 3.
          span Arquitectura de una aplicación <em>web</em> moderna (cliente-servidor)
        .row.justify-content-center
          .col-lg-12.col-12.mb-4
            figure
              img(src='@/assets/curso/tema4/figura-1-1v.svg', alt='En la figura 3 se presenta la arquitectura general de una aplicación web moderna, donde se identifica la interacción entre el navegador del usuario (cliente), el servidor web, las bases de datos y los servicios externos que participan en el funcionamiento del sistema.')
          .col-auto.movil(data-aos="fade-left")
            a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Arquitectura_de_una_aplicacion_web_moderna.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo.] Arquitectura de una aplicación web moderna (cliente-servidor)

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2. #[i Frameworks front-end] para el desarrollo de interfaces

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img-06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Los <em>frameworks front-end</em> son herramientas de desarrollo que facilitan la construcción de interfaces <em>web</em> modernas mediante el uso de componentes reutilizables, organización estructurada del código y mecanismos eficientes para actualizar la interfaz del usuario. Estas tecnologías permiten desarrollar aplicaciones <em>web</em> más escalables, mantenibles y eficientes.

    p En la actualidad, los <em>frameworks</em> más utilizados para el desarrollo de interfaces <em>web</em> son React, Vue.js y Angular. Cada uno de ellos ofrece diferentes enfoques para estructurar una aplicación <em>web</em> y gestionar su funcionamiento.
    p.mb-4 La siguiente tabla presenta una comparación general entre estos <em>frameworks.</em>

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 8.
          span Comparación general de <em>frameworks front-end</em>
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Característica
                th(style="width: 20%; background-color: #FFEEBC;") React
                th(style="width: 20%; background-color: #FFEEBC;") Vue.js
                th(style="width: 20%; background-color: #FFEEBC;") Angular
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Tipo de herramienta.
                td(style="background-color: #F0F8FF;") Biblioteca para construir interfaces.
                td(style="background-color: #F0F8FF;") #[i Framework] progresivo.
                td(style="background-color: #F0F8FF;") #[i Framework] completo.
              tr(data-aos="fade-right")
                td Organización del desarrollo.
                td Basado en componentes reutilizables.
                td Componentes con estructura simple.
                td Arquitectura completa para aplicaciones.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Lenguaje principal.
                td(style="background-color: #F0F8FF;") JavaScript o TypeScript.
                td(style="background-color: #F0F8FF;") JavaScript o TypeScript.
                td(style="background-color: #F0F8FF;") TypeScript.
              tr(data-aos="fade-right")
                td Curva de aprendizaje.
                td Baja a media.
                td Baja.
                td Media a alta.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Uso frecuente.
                td(style="background-color: #F0F8FF;") Aplicaciones dinámicas y escalables.
                td(style="background-color: #F0F8FF;") Aplicaciones pequeñas y medianas.
                td(style="background-color: #F0F8FF;") Aplicaciones empresariales grandes.

    p.mb-4 Además de estos <em>frameworks</em> principales, existen herramientas que permiten mejorar la experiencia de desarrollo y la organización de la interfaz. Entre sus características más importantes se encuentran las siguientes:

    .row.mb-4
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h4 Componentes reutilizables
          p.mb-0 Permiten encapsular estructura, estilo y comportamiento en una unidad independiente que puede utilizarse en diferentes partes de la aplicación.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h4 Enrutamiento del lado del cliente
          p.mb-0 Facilita cambiar entre diferentes vistas de la aplicación sin recargar la página.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h4 Gestión de estado
          p.mb-0 Permite compartir información entre diferentes componentes de la interfaz de manera organizada.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-numerada.color-adicional-3.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          h4 Comunicación con servicios externos
          p.mb-0 Los <em>frameworks</em> permiten consumir APIs para obtener o enviar información a servidores y bases de datos.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0 Adicionalmente, en el desarrollo de interfaces <em>web</em> también se utilizan <em>frameworks</em> de estilos que facilitan el diseño visual de las páginas. Entre los más conocidos se encuentran Bootstrap, Tailwind CSS y Bulma, los cuales proporcionan componentes visuales, sistemas de diseño responsivo y utilidades que permiten crear interfaces de forma más rápida y consistente.

        p.mb-4 El uso de estas herramientas permite a los desarrolladores construir interfaces más organizadas, accesibles y adaptables a diferentes dispositivos, optimizando los procesos de desarrollo de aplicaciones <em>web</em> modernas.

        .tarjeta.tarjeta--gris2.p-4(data-aos="fade-left")
          .row.justify-content-around
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema4/icono-01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1(style="color:#000") #[i Frameworks] del #[i Front-end]
                  p Para complementar la información sobre <em>frameworks</em> del <em>front-ent</em>, se recomienda acceder al siguiente video: 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=Z-YzV72qq4o " target="_blank" rel="noopener noreferrer")
                    span Enlace web
                    i.fas.fa-file-code

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
