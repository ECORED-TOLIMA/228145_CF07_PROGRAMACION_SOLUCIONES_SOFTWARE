<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Hojas de estilo para el diseño de interfaces

    .row.no-gutters.align-items-center.mb-4.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/tema5/img-01.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/tema5/img-02.svg' alt="")
        p.mb-0 Las hojas de estilo en cascada, conocidas como CSS (Cascading Style Sheets), son el lenguaje utilizado para definir la presentación visual de las páginas #[i web]. Mientras que HTML se encarga de estructurar el contenido de un documento, CSS permite controlar aspectos como colores, tipografías, tamaños, alineaciones, espacios, bordes, animaciones y la distribución de los elementos en la interfaz.

    .row.justify-content-center
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img-03.png', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p El uso de CSS es fundamental en el desarrollo de interfaces #[i web] modernas porque permite separar el contenido de la presentación visual. Esta separación facilita la organización del código, mejora la mantenibilidad del proyecto y permite aplicar cambios de diseño de manera global sin necesidad de modificar la estructura HTML de cada página.
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Además, CSS hace posible la creación de interfaces adaptables a diferentes dispositivos, como computadores, tabletas y teléfonos móviles, mediante técnicas de diseño responsivo. Para ello se utilizan herramientas como Flexbox, Grid, Media Queries y sistemas de diseño que permiten reorganizar los elementos de la interfaz según el tamaño de la pantalla.
        p El desarrollo de CSS forma parte de los estándares definidos por el World Wide #[i Web Consortium] (W3C), lo que garantiza que las reglas de estilo se interpreten de forma consistente en los distintos navegadores #[i web]. Gracias a estos estándares, los desarrolladores pueden crear interfaces visualmente atractivas, accesibles y compatibles con múltiples plataformas.

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1. Concepto y sintaxis de hojas de estilo CSS

    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img-04.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Las hojas de estilo en cascada o CSS (Cascading Style Sheets) son un lenguaje utilizado para definir la apariencia y el diseño visual de los documentos #[i web]. Mientras que HTML se encarga de estructurar el contenido de una página, CSS permite controlar aspectos como colores, tipografías, tamaños, márgenes, posiciones y distribución de los elementos en la interfaz.

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img-05.png', alt='')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") El uso de CSS permite separar la estructura del contenido de su presentación visual, lo que facilita el mantenimiento del código, mejora la reutilización de estilos y contribuye a la creación de interfaces más consistentes y adaptables a diferentes dispositivos.
        .row.mb-4.ms-0
          .col-12(data-aos="fade-left")
            .titulo-css-regla
              .titulo-css-regla__icono
              .titulo-css-regla__texto
                h3.mb-0 Una regla CSS está compuesta por dos partes principales:
        ul.lista-ul--color.mt-4(data-aos="fade-down")
          li
            i.fas.fa-laptop-code
            p.mb-0 El selector.
          li
            i.fas.fa-laptop-code
            p.mb-0 El bloque de declaración.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        p El selector identifica el elemento HTML al que se aplicará el estilo. El bloque de declaración contiene una o varias propiedades acompañadas de sus respectivos valores, las cuales definen cómo se representará el elemento.
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img-06.png', alt='')
      .col.col-lg-5.col-12.order-lg-1.order-2
        .row.mb-4.ms-0
          .col-auto.bg-c1(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/tema5/ico.svg', alt='', style='width: 9.4px')
              .col
                h3.mb-0 Ejemplo de una regla CSS:
        .tarjeta.fondo_code.mb-3
          br
          br
          .row.justify-content-center.align-items-center
            .col-12.p-5 
              p.mb-0 p &lbrace;
              p.mb-0 color: blue; 
              p.mb-0 font-size: 16px;
              p.mb-0 &rbrace; 
        p En este caso, el selector #[b p] indica que las reglas se aplican a los elementos de párrafo. Las propiedades #[b color] y #[b font-size] determinan el color del texto y el tamaño de la fuente.

    p.mb-4 CSS ofrece una amplia variedad de propiedades que permiten controlar la apariencia de los elementos de una interfaz #[i web]. Algunas de las más utilizadas incluyen:

    .bg-c2.px-md-5.px-4.mb-4
      .row.justify-content-center
        .col-lg-4.col-sm-7.col-10.mb-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema5/img-07.svg', alt='')
        .col-lg-6(data-aos="fade-left")
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              span #[b color:] define el color del texto.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              span #[b background-color:] establece el color de fondo de un elemento.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              span #[b font-size:] determina el tamaño del texto.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              span #[b margin:] controla el espacio externo alrededor de un elemento.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              span #[b padding:] define el espacio interno entre el contenido y el borde del elemento.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 6
              span #[b border:] permite definir bordes alrededor de los elementos.

      p Estas propiedades permiten ajustar la presentación visual de la página para lograr interfaces más organizadas, legibles y atractivas.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img-08.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p #[b Cascada y prioridad de reglas:] el término cascada hace referencia al mecanismo mediante el cual CSS determina qué reglas se aplican cuando existen múltiples estilos definidos para un mismo elemento. Este proceso tiene en cuenta factores como el origen de la hoja de estilo, la especificidad del selector y el orden en que aparecen las reglas en el código.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0 Gracias a este sistema, es posible definir estilos generales para toda la página y posteriormente aplicar estilos más específicos para determinados elementos o secciones de la interfaz.

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2. Aplicación de estilos en interfaces #[i web]

    p CSS permite definir la apariencia de una interfaz #[i web] y puede aplicarse a los documentos HTML de diferentes maneras. Cada método tiene implicaciones en la organización del código, la reutilización de estilos y el mantenimiento de la aplicación.
    p.mb-4 Existen tres formas principales de aplicar estilos en una página #[i web].
    
    .acordion-color-01
      AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
        .row.justify-content-center(titulo="A. CSS externo")
          .col-lg-6.order-lg-1.order-2
            p Se utiliza un archivo independiente con extensión .css que se enlaza al documento HTML mediante la etiqueta &lt;link&gt; dentro del &lt;head&gt;. Por ejemplo:
            p #[b &lt;link rel="stylesheet" href="estilos.css"&gt;]
            p.mb-0 Este es el método más utilizado en proyectos profesionales porque permite reutilizar estilos en múltiples páginas, mejora el rendimiento gracias al almacenamiento en caché del navegador y mantiene separadas la estructura del contenido y la presentación visual.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img-09.png', alt='Imagen decorativa')
        .row.justify-content-center(titulo="B. CSS interno")
          .col-lg-6.order-lg-1.order-2
            p Los estilos se definen dentro del mismo documento HTML mediante la etiqueta &lt;style&gt; ubicada en el &lt;head&gt;. Por ejemplo:
            p.mb-0 #[b &lt;style&gt;]
            p.mb-0 #[b p &lbrace;]
            p.mb-0 #[b color: blue;]
            p.mb-0 #[b &lbrace;]
            p #[b &lt;/style&gt;]
            p.mb-0 Se utiliza principalmente en páginas pequeñas o cuando se requiere aplicar estilos específicos que no serán reutilizados en otros documentos.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img-10.png', alt='Imagen decorativa')
        .row.justify-content-center(titulo="C. CSS en línea")
          .col-lg-6.order-lg-1.order-2
            p Los estilos se aplican directamente dentro de una etiqueta HTML utilizando el atributo style. Por ejemplo:
            p #[b &lt;p style="color:red;"&gt;Texto de ejemplo&lt;/p&gt;]
            p.mb-0 Este método no es recomendable para proyectos grandes, ya que dificulta el mantenimiento del código y rompe la separación entre estructura y presentación.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img-11.png', alt='Imagen decorativa')

    .bg-c3.px-md-5.px-4.mb-4
      .row.justify-content-center
        .col-lg-3.col-sm-7.col-10.mb-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema5/img-12.png', alt='')
        .col-lg-9(data-aos="fade-left")
          p.mb-4 Las versiones modernas de CSS han incorporado múltiples funcionalidades que permiten crear interfaces dinámicas y visualmente atractivas sin necesidad de utilizar JavaScript o imágenes adicionales. Entre las más utilizadas se encuentran:
          ol.lista-ol--cuadro.lista-ol--separador.mb-4
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Gradientes para fondos dinámicos.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Sombras en textos y elementos.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Bordes redondeados para mejorar la estética de los componentes.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Transformaciones para rotar, escalar o mover elementos.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Transiciones y animaciones que generan cambios visuales suaves cuando el usuario interactúa con la interfaz.
          p Estas características permiten mejorar la experiencia del usuario y aportar mayor dinamismo al diseño de las páginas #[i web].

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img-13.png', alt='')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") El diseño responsivo permite que una interfaz #[i web] se adapte a diferentes tamaños de pantalla, como teléfonos móviles, tabletas y computadores de escritorio. Esto se logra principalmente mediante el uso de #[i media queries], que aplican estilos diferentes dependiendo de las características del dispositivo.
        .row.mb-4.ms-0
          .col-auto.bg-c1(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/tema5/ico.svg', alt='', style='width: 9.4px')
              .col
                h3.mb-0 Por ejemplo
        .tarjeta.fondo_code2.mb-3
          br
          br
          .row.justify-content-center.align-items-center
            .col-12.p-5
              p.mb-0 @media (max-width: 768px) &lbrace;
              p.mb-0 .menu &lbrace;
              p.mb-0 display: none;
              p.mb-0 &lbrace;
              p.mb-0 &rbrace; 

    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img-14.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Una práctica común en el desarrollo #[i web] es el enfoque #[b mobile-first], en el cual se diseñan primero los estilos para dispositivos móviles y posteriormente se añaden ajustes para pantallas más grandes utilizando #[i media queries] con min-width.

    p.mb-4 La siguiente tabla presenta algunas de las propiedades más utilizadas en el desarrollo de interfaces #[i web] modernas, organizadas por categoría funcional.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 9.
          span Propiedades CSS esenciales para el desarrollo de interfaces #[i web]
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 10%; background-color: #FFEEBC;") Categoría
                th(style="width: 10%; background-color: #FFEEBC;") Propiedad
                th(style="width: 20%; background-color: #FFEEBC;") Sintaxis de ejemplo
                th(style="width: 20%; background-color: #FFEEBC;") Efecto
            tbody
              tr(data-aos="fade-right")
                td.text-center.align-middle(rowspan="3"  style="background-color: #F0F8FF;") Modelo de caja
                td(style="background-color: #F0F8FF;") margin
                td(style="background-color: #F0F8FF;") margin: 10px 20px;
                td(style="background-color: #F0F8FF;") Define el espacio externo alrededor del elemento.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") padding
                td(style="background-color: #F0F8FF;") padding: 8px 12px;
                td(style="background-color: #F0F8FF;") Define el espacio interno entre el contenido y el borde del elemento.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") border
                td(style="background-color: #F0F8FF;") border: 1px solid #ccc;
                td(style="background-color: #F0F8FF;") Establece el borde del elemento indicando grosor, estilo y color.
              tr(data-aos="fade-right")
                td.text-center.align-middle(rowspan="2") Dimensionamiento
                td width, height
                td width: 100 %; height: auto;
                td Define el ancho y alto del elemento.
              tr(data-aos="fade-right")
                td max-width
                td max-width: 1200px;
                td Establece el ancho máximo que puede tener un elemento.
              tr(data-aos="fade-right")
                td.text-center.align-middle(rowspan="3"  style="background-color: #F0F8FF;") Color y fondo
                td(style="background-color: #F0F8FF;") color
                td(style="background-color: #F0F8FF;") color: #333333;
                td(style="background-color: #F0F8FF;") Define el color del texto.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") background
                td(style="background-color: #F0F8FF;") background: linear-gradient(#fff, #eee);
                td(style="background-color: #F0F8FF;") Define el color, imagen o gradiente del fondo.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") opacity
                td(style="background-color: #F0F8FF;") opacity: 0.8;
                td(style="background-color: #F0F8FF;") Controla el nivel de transparencia del elemento.
              tr(data-aos="fade-right")
                td.text-center.align-middle(rowspan="4") Tipografía
                td font-family
                td font-family: 'Segoe UI', Tahoma, sans-serif;
                td Define la familia tipográfica del texto.
              tr(data-aos="fade-right")
                td font-size
                td font-size: 1rem;
                td Establece el tamaño de la fuente.
              tr(data-aos="fade-right")
                td font-weight
                td font-weight: bold;
                td Define el grosor de la fuente.
              tr(data-aos="fade-right")
                td text-align
                td text-align: center;
                td Define la alineación horizontal del texto.
              tr(data-aos="fade-right")
                td.text-center.align-middle(rowspan="2"  style="background-color: #F0F8FF;") Posicionamiento
                td(style="background-color: #F0F8FF;") position
                td(style="background-color: #F0F8FF;") position: absolute; top: 10px; left: 20px;
                td(style="background-color: #F0F8FF;") Permite posicionar el elemento dentro del documento.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") z-index
                td(style="background-color: #F0F8FF;") z-index: 100;
                td(style="background-color: #F0F8FF;") Define el orden de superposición de los elementos.
              tr(data-aos="fade-right")
                td Flexbox
                td display: flex
                td display: flex; justify-content: center; align-items: center;
                td Permite organizar y alinear elementos en una dimensión (fila o columna).
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") CSS Grid
                td(style="background-color: #F0F8FF;") display: grid
                td(style="background-color: #F0F8FF;") display: grid; grid-template-columns: 1fr 2fr; gap: 20px;
                td(style="background-color: #F0F8FF;") Permite crear diseños bidimensionales con filas y columnas.
              tr(data-aos="fade-right")
                td Diseño responsivo
                td @media
                td @media (max-width: 768px) { .menu { display: none; } }
                td Aplica estilos según características del dispositivo o tamaño de pantalla.
              tr(data-aos="fade-right")
                td.text-center.align-middle(rowspan="4"  style="background-color: #F0F8FF;") Efectos visuales
                td(style="background-color: #F0F8FF;") transition
                td(style="background-color: #F0F8FF;") transition: all 0.3s ease;
                td(style="background-color: #F0F8FF;") Permite animar cambios de propiedades CSS.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") transform
                td(style="background-color: #F0F8FF;") transform: scale(1.05);
                td(style="background-color: #F0F8FF;") Permite rotar, escalar o mover elementos visualmente.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") box-shadow
                td(style="background-color: #F0F8FF;") box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                td(style="background-color: #F0F8FF;") Añade sombra a un elemento para generar profundidad visual.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") border-radius
                td(style="background-color: #F0F8FF;") border-radius: 8px;
                td(style="background-color: #F0F8FF;") Redondea las esquinas del borde de un elemento.

    p.mb-4 CSS también permite crear estructuras de diseño complejas mediante sistemas de distribución como Flexbox y CSS Grid, que facilitan la organización de los elementos en filas y columnas.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-primario
          h5 Figura 4.
          span Diseño responsivo con CSS Grid y Flexbox en dispositivos móviles y de escritorio
        .row.justify-content-center
          .col-lg-12.col-12.mb-4
            figure
              img(src='@/assets/curso/tema5/figura-1-1v.svg', alt='La Figura 4 presenta un ejemplo de diseño responsivo donde la interfaz se organiza en una sola columna en dispositivos móviles y en varias columnas en pantallas de escritorio.')
          .col-auto.movil(data-aos="fade-left")
            a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Arquitectura_de_una_aplicacion_web_moderna.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo.] Diseño responsivo con CSS Grid y Flexbox en dispositivos móviles y de escritorio

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img-06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En dispositivos móviles, los componentes suelen organizarse en una sola columna para facilitar la lectura y la navegación táctil, mientras que en pantallas de escritorio es posible distribuir el contenido en varias columnas y aprovechar mejor el espacio disponible. Este enfoque responsivo contribuye a mejorar la experiencia del usuario en diferentes dispositivos y contextos de uso, permitiendo que una misma interfaz mantenga su funcionalidad, claridad y accesibilidad independientemente del tamaño de la pantalla.

    .row.justify-content-center
      .col-lg-10
        .tarjeta.tarjeta--gris2.p-4.mb-4
          .row.justify-content-around
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema5/icono-01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1(style="color:#000") Aplicando el CSS
                  p Para complementar la información sobre CSS, se recomienda acceder al siguiente video:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=_qlj_FyUR-w" target="_blank" rel="noopener noreferrer")
                    span Enlace web
                    i.fas.fa-file-code


</template>

<script>
export default {
  name: 'Tema5',
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
