<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Interfaces gráficas en aplicaciones #[i web]

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img-01.png', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.p-4.mb-2
          p.mb-0(data-aos="fade-down") Las aplicaciones <em>web</em> son sistemas informáticos que se ejecutan dentro de un navegador <em>web</em> como Google Chrome, Microsoft Edge, Mozilla Firefox o Safari, y que se cargan desde un servidor remoto mediante los protocolos HTTP o HTTPS. Durante la última década, este tipo de aplicaciones ha adquirido gran relevancia en entornos empresariales, gubernamentales y de consumo, desplazando en muchos casos a las aplicaciones de escritorio tradicionales.
        p Una de las principales razones de este cambio es de carácter operativo. En una aplicación <em>web</em>, el <em>software</em> se despliega una sola vez en el servidor y queda disponible inmediatamente para todos los usuarios. De esta manera, las personas pueden acceder al sistema sin necesidad de realizar instalaciones, actualizaciones o configuraciones adicionales en sus equipos. Este modelo reduce los costos de mantenimiento del <em>software</em>, evita problemas asociados a diferentes versiones de la aplicación y facilita el acceso desde distintos dispositivos y ubicaciones, siempre que exista conexión a Internet.

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img-02.png', alt='')

    p.mb-4 Desde el punto de vista técnico, el desarrollo de interfaces <em>web</em> se fundamenta en tres tecnologías esenciales. #[b HTML5 (HyperText Markup Language)] define la estructura y el contenido de la página web, como títulos, párrafos, tablas, imágenes, enlaces y formularios. #[b CSS3 (Cascading Style Sheets)] se encarga de la presentación visual, incluyendo colores, tipografías, márgenes, tamaños, posicionamiento de elementos y diseño adaptable a diferentes tamaños de pantalla. Por su parte, JavaScript (ECMAScript) permite incorporar interactividad en la interfaz, facilitando acciones como la validación de formularios, la actualización dinámica del contenido sin recargar la página, la manipulación del DOM y la comunicación con servicios o APIs externas.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img-03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En la actualidad, muchas aplicaciones <em>web</em> utilizan <em>frameworks</em> de JavaScript como React, Angular o Vue, que facilitan la creación de interfaces basadas en componentes reutilizables y en modelos de programación más estructurados. Estas herramientas permiten desarrollar aplicaciones más escalables, mantenibles y eficientes, especialmente en proyectos de mediana y gran complejidad.

    .row.justify-content-center
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img-04.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") El desarrollo de interfaces <em>web</em> constituye una de las habilidades más demandadas en el mercado laboral actual. Los perfiles profesionales relacionados con el desarrollo front-end o full stack requieren dominio de HTML5 semántico, CSS3 avanzado (incluyendo técnicas como flexbox y grid), manejo de <em>frameworks</em> modernos de JavaScript, comprensión de principios de diseño responsivo y conocimiento de estándares de accesibilidad <em>web</em>, con el fin de crear interfaces inclusivas, eficientes y funcionales para diferentes tipos de usuarios.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1. Estructura de páginas #[i web] y uso de etiquetas HTML

    .row.no-gutters.align-items-center.mb-4.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/tema3/img-05.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/tema3/img-06.svg' alt="")
        p.mb-0 HTML (HyperText Markup Language) es el lenguaje de marcado utilizado para definir la estructura de las páginas <em>web</em> mediante etiquetas, también conocidas como tags o elementos. Estas etiquetas permiten organizar el contenido de una página y establecer cómo se relacionan los diferentes elementos que la componen, como títulos, párrafos, imágenes, enlaces o formularios.

    p.mb-4 De manera general, una etiqueta HTML tiene la forma &lt;nombre&gt;contenido&lt;/nombre&gt; aunque también puede incluir atributos que proporcionan información adicional sobre el elemento. Por ejemplo, en la etiqueta &lt;img&gt; se utilizan atributos como src para indicar la ubicación de la imagen y alt para describir su contenido, lo cual contribuye a mejorar la accesibilidad de la página.

    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img-07.png', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Las etiquetas HTML pueden clasificarse según su función dentro de la estructura del documento. En primer lugar, se encuentran las etiquetas estructurales, que definen la organización básica de la página web. Entre ellas se encuentran &lt;html&gt;, que representa la raíz del documento; &lt;head&gt;, que contiene información del documento como el título o enlaces a hojas de estilo; y body, donde se ubica el contenido perceptible para el usuario.
        p Por otra parte, HTML5 incorpora etiquetas semánticas, que permiten describir con mayor claridad el propósito del contenido dentro de la página. Estas etiquetas facilitan la comprensión de la estructura por parte de navegadores, motores de búsqueda y tecnologías de asistencia utilizadas por personas con discapacidad visual.
    
    p.mb-4 A continuación, se presentan algunas de las etiquetas semánticas más utilizadas en HTML5 y su propósito dentro de la estructura de una página <em>web</em>.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 5.
          span Etiquetas semánticas de HTML5 y su propósito
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Etiqueta
                th(style="width: 20%; background-color: #FFEEBC;") Propósito
                th(style="width: 20%; background-color: #FFEEBC;") Ejemplo de uso
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") &lt;header&gt;
                td(style="background-color: #F0F8FF;") Cabecera de una página o sección.
                td(style="background-color: #F0F8FF;") Logo, título o menú principal.
              tr(data-aos="fade-right")
                td &lt;nav&gt;
                td Bloque de navegación con enlaces.
                td Menú de navegación del sitio
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") &lt;main&gt;
                td(style="background-color: #F0F8FF;") Contenido principal de la página.
                td(style="background-color: #F0F8FF;") Área central con la información principal.
              tr(data-aos="fade-right")
                td.text-center &lt;article&gt;
                td Contenido independiente o reutilizable.
                td Entrada de blog o noticia.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") &lt;section&gt;
                td.text-center(style="background-color: #F0F8FF;") Agrupación temática de contenido.
                td.text-center(style="background-color: #F0F8FF;") Sección de productos o servicios.
              tr(data-aos="fade-right")
                td.text-center &lt;aside&gt;
                td Contenido complementario.
                td Barra lateral con información adicional.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") &lt;footer&gt;
                td.text-center(style="background-color: #F0F8FF;") Pie de página.
                td.text-center(style="background-color: #F0F8FF;") Información de contacto o derechos de autor.
              tr(data-aos="fade-right")
                td.text-center &lt;figure&gt; y &lt;figcaption&gt;
                td Elemento ilustrativo con descripción.
                td Imagen o gráfico con texto explicativo.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") &lt;time&gt;
                td.text-center(style="background-color: #F0F8FF;") Representación de fechas u horas.
                td.text-center(style="background-color: #F0F8FF;") Fecha de publicación de un artículo.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0 Además de las etiquetas, HTML utiliza atributos que permiten añadir información adicional a los elementos de la página. Algunos de estos atributos pueden aplicarse a la mayoría de las etiquetas y se conocen como atributos globales.

    p.mb-4 A continuación, se presentan algunos de los atributos más utilizados en el desarrollo de interfaces <em>web</em>.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 6.
          span Atributos globales de HTML utilizados en interfaces <em>web</em>
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Atributo
                th(style="width: 20%; background-color: #FFEEBC;") Propósito
                th(style="width: 20%; background-color: #FFEEBC;") Ejemplo
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") id
                td(style="background-color: #F0F8FF;") Identificador único de un elemento.
                td(style="background-color: #F0F8FF;") &lt;div id="contenedor"&gt;
              tr(data-aos="fade-right")
                td class
                td Clasificación de elementos para aplicar estilos.
                td &lt;button class="boton principal"&gt;
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") style
                td(style="background-color: #F0F8FF;") Aplicación de estilos directamente en el elemento.
                td(style="background-color: #F0F8FF;") &lt;p style="color:red;"&gt;Texto&lt;/p&gt;
              tr(data-aos="fade-right")
                td.text-center data-*
                td Almacenamiento de datos personalizados.
                td &lt;div data-id="123"&gt;
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") hidden
                td.text-center(style="background-color: #F0F8FF;") Oculta un elemento en la interfaz.
                td.text-center(style="background-color: #F0F8FF;") &lt;div hidden&gt;Contenido&lt;/div&gt;
              tr(data-aos="fade-right")
                td.text-center title
                td Texto informativo asociado al elemento.
                td &lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt;
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") lang
                td.text-center(style="background-color: #F0F8FF;") Indica el idioma del contenido.
                td.text-center(style="background-color: #F0F8FF;") &lt;p lang="es"&gt;Hola&lt;/p&gt;
              tr(data-aos="fade-right")
                td.text-center tabindex
                td.text-center Controla el orden de navegación con el teclado.
                td.text-center &lt;input tabindex="1"&gt;
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") aria-*
                td(style="background-color: #F0F8FF;") Mejora la accesibilidad para tecnologías de asistencia.
                td(style="background-color: #F0F8FF;") &lt;div aria-label="Cerrar"&gt;X&lt;/div&gt;

    p El uso adecuado de etiquetas y atributos en HTML permite construir páginas <em>web</em> organizadas, comprensibles y accesibles. Además, facilita el trabajo conjunto con otras tecnologías como CSS y JavaScript, que se encargan de la presentación visual y la interactividad de la interfaz.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2. Formularios y componentes de formularios en aplicaciones #[i web]

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img-08.png', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-2
          p.mb-0(data-aos="fade-down") Los formularios HTML constituyen uno de los mecanismos fundamentales mediante los cuales las aplicaciones <em>web</em> permiten la interacción con los usuarios y la captura de información. A través de ellos es posible registrar usuarios, iniciar sesión en una plataforma, realizar búsquedas, ingresar datos de contacto o facturación, enviar comentarios, responder encuestas o configurar preferencias dentro de un sistema.
        p Un formulario se define mediante la etiqueta &lt;form&gt;, la cual agrupa los elementos encargados de recibir los datos introducidos por el usuario. Esta etiqueta incluye atributos que determinan la forma en que la información será enviada al servidor para su procesamiento. Entre los más importantes se encuentran #[i #[b action]], que indica la dirección del servidor que recibirá los datos; #[i #[b method]], que define el método de envío de la información, generalmente GET o POST; #[i #[b enctype]], que establece el tipo de codificación utilizado cuando se envían archivos; autocomplete, que permite al navegador completar automáticamente campos con información previamente registrada; y #[i #[b novalidate]], que desactiva la validación automática del navegador cuando se implementan mecanismos personalizados mediante JavaScript.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img-09.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Dentro de un formulario se encuentran los #[b componentes o controles de entrada], que son los elementos que permiten ingresar o seleccionar información. Entre los más utilizados se encuentra la etiqueta &lt;input&gt;, que puede adoptar diferentes tipos según el atributo #[i #[b type]], como texto, contraseña, correo electrónico, número, fecha, archivo o selección mediante casillas o botones de opción. También se utilizan elementos como &lt;textarea&gt; para ingresar texto de varias líneas, &lt;select&gt; para crear listas desplegables con opciones seleccionables y &lt;button&gt; para ejecutar acciones dentro del formulario.
    
    p.mb-4 Otros elementos importantes son &lt;fieldset&gt;, que permite agrupar controles relacionados dentro de un mismo formulario, y &lt;legend&gt;, que describe el grupo de campos incluidos en ese conjunto. Estas etiquetas facilitan la organización visual y lógica de los formularios, lo cual mejora la comprensión de la interfaz por parte de los usuarios.

    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img-10.png', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p Un aspecto clave en el desarrollo de formularios <em>web</em> es la #[b validación de los datos introducidos por el usuario]. HTML5 incorpora atributos que permiten verificar la información antes de enviarla al servidor. Entre los más utilizados se encuentran #[i #[b required]], que indica que un campo es obligatorio; minlength y #[i #[b maxlength]], que establecen la longitud permitida para un texto; #[i #[b min]] y #[i #[b max]], que determinan valores mínimos y máximos en campos numéricos o de fecha; y #[i #[b pattern]], que permite definir reglas de validación mediante expresiones regulares.
        .cajon.cajon.C02.color-secundario.p-4.mb-2
          p.mb-0(data-aos="fade-down") Estas validaciones se realizan en el navegador y contribuyen a mejorar la experiencia del usuario al proporcionar retroalimentación inmediata cuando los datos ingresados no cumplen con el formato esperado. No obstante, en aplicaciones reales también se requiere validar la información en el servidor para garantizar la seguridad y la integridad de los datos.
        
    p.mb-4 A continuación, se presentan algunos de los tipos de campos &lt;input&gt; más utilizados en los formularios <em>web</em> modernos y su propósito dentro de las interfaces de usuario.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 7.
          span Tipos de input HTML5 utilizados en formularios <em>web</em>
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Tipo
                th(style="width: 20%; background-color: #FFEEBC;") Propósito
                th(style="width: 20%; background-color: #FFEEBC;") Ejemplo
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") text
                td(style="background-color: #F0F8FF;") Campo de texto de una línea.
                td(style="background-color: #F0F8FF;") &lt;input type="text" name="nombre" required&gt;
              tr(data-aos="fade-right")
                td password
                td Campo para contraseñas con caracteres ocultos.
                td &lt;input type="password" name="clave"&gt;
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") email
                td(style="background-color: #F0F8FF;") Ingreso de correo electrónico.
                td(style="background-color: #F0F8FF;") &lt;input type="email" name="email"&gt;
              tr(data-aos="fade-right")
                td.text-center tel
                td Número telefónico.
                td &lt;input type="tel" name="telefono"&gt;
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") number
                td.text-center(style="background-color: #F0F8FF;") Valores numéricos.
                td.text-center(style="background-color: #F0F8FF;") &lt;input type="number" name="edad" min="18"&gt;
              tr(data-aos="fade-right")
                td.text-center date
                td Selección de fecha.
                td &lt;input type="date" name="fecha"&gt;
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") checkbox
                td.text-center(style="background-color: #F0F8FF;") Selección de opción sí o no.
                td.text-center(style="background-color: #F0F8FF;") &lt;input type="checkbox" name="terminos"&gt;
              tr(data-aos="fade-right")
                td.text-center radio
                td.text-center Selección única entre varias opciones.
                td.text-center &lt;input type="radio" name="genero"&gt;
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") file
                td(style="background-color: #F0F8FF;") Carga de archivos.
                td(style="background-color: #F0F8FF;") &lt;input type="file" name="documento"&gt;
              tr(data-aos="fade-right")
                td.text-center color
                td.text-center Selección de color.
                td.text-center &lt;input type="color" name="color"&gt;
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") range
                td(style="background-color: #F0F8FF;") Selección mediante control deslizante.
                td(style="background-color: #F0F8FF;") &lt;input type="range" name="valor" min="0" max="100"&gt;
              tr(data-aos="fade-right")
                td.text-center hidden
                td.text-center Campo invisible que envía datos al servidor.
                td.text-center &lt;input type="hidden" name="id"&gt;

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .tarjeta.tarjeta--gris2.p-4.mb-4(data-aos="fade-left")
          .row.justify-content-around
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/icono-01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1(style="color:#000") HTML5
                  p Para complementar la información de HTML5, se recomienda acceder al siguiente video: 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=utbiQXbo9PY&t=4s" target="_blank" rel="noopener noreferrer")
                    span Enlace web
                    i.fas.fa-file-code

</template>

<script>
export default {
  name: 'Tema3',
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
