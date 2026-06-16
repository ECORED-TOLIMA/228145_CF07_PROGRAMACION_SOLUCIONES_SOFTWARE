<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de las interfaces gráficas de usuario

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Una interfaz gráfica de usuario (GUI) es un sistema de componentes visuales interactivos que permite a las personas comunicarse con un dispositivo electrónico, como una computadora, tableta o teléfono inteligente, mediante elementos gráficos como ventanas, iconos, botones, casillas de verificación, campos de texto y punteros controlados por dispositivos de entrada como el ratón o las pantallas táctiles. A diferencia de las interfaces de línea de comandos (CLI), que requieren que el usuario memorice y escriba instrucciones textuales específicas, las interfaces gráficas facilitan la interacción al presentar de manera visible las opciones disponibles, lo que reduce la curva de aprendizaje y permite explorar las funciones del sistema de forma más intuitiva.

    .bg-c2.px-md-5.px-4.mb-4
      .row.justify-content-center
        .col-lg-4.col-sm-7.col-10.mb-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema1/img-02.png', alt='')
        .col-lg-8(data-aos="fade-left")
          p El concepto de interfaz gráfica se relaciona directamente con el campo de la interacción humano–computadora, conocido como HCI (Human-Computer Interaction). Esta disciplina integra conocimientos de áreas como la informática, la psicología cognitiva, el diseño y la ergonomía, con el fin de mejorar la forma en que las personas interactúan con los sistemas tecnológicos. Dentro de este campo, autores como Don Norman han planteado principios fundamentales para el diseño de interfaces. Entre ellos se destacan el concepto de #[i affordance], que se refiere a las características visuales que sugieren cómo interactuar con un elemento; el #[i feedback], que implica que cada acción realizada por el usuario debe generar una respuesta perceptible; y la visibilidad, que plantea que las funciones más importantes deben ser fácilmente identificables.
          .cajon.cajon.C02.color-secundario.p-4.mb-2
            p.mb-0(data-aos="fade-down") En el desarrollo de #[i software] es importante diferenciar entre el diseño de la interfaz y su implementación. El diseño se enfoca en aspectos como la organización de los elementos en pantalla, el orden de importancia y el uso de colores, tipografías e iconos que faciliten la comprensión y la navegación. La implementación, por su parte, consiste en traducir ese diseño en una interfaz funcional mediante el uso de tecnologías y lenguajes de programación específicos. Entre las tecnologías más utilizadas se encuentran HTML, CSS y JavaScript para el desarrollo <em>web</em>, así como diversas herramientas y <em>frameworks</em> empleados en aplicaciones de escritorio o móviles.

    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img-03.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") El desarrollo de las interfaces gráficas de usuario ha evolucionado de manera significativa a lo largo del tiempo, impulsado por los avances tecnológicos y por la necesidad de facilitar la interacción entre las personas y los sistemas informáticos. Desde los primeros experimentos en laboratorios de investigación hasta las interfaces actuales presentes en computadores, dispositivos móviles y aplicaciones <em>web</em>, las GUI han incorporado nuevos elementos visuales, formas de interacción y criterios de diseño orientados a mejorar la experiencia del usuario.

    p.mb-4 Con el fin de comprender este proceso de transformación, a continuación, se presenta una síntesis de algunos hitos representativos en la evolución de las interfaces gráficas de usuario.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-04.svg' alt='AvatarTop')
          h4.text-center 1973 Xerox Alto
          p.mb-0 Primera interfaz gráfica funcional basada en ventanas, iconos, menús y puntero.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-05.svg' alt='AvatarTop')
          h4.text-center 1981 Xerox Star
          p.mb-0 Primer sistema comercial que incorporó una interfaz gráfica de usuario.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-06.svg' alt='AvatarTop')
          h4.text-center 1984 Apple Macintosh
          p.mb-0 Popularización del uso de interfaces gráficas en computadores personales.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-07.svg' alt='AvatarTop')
          h4.text-center 1990 Windows 3.0
          p.mb-0 Consolidación de las GUI en computadores compatibles con IBM.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-08.svg' alt='AvatarTop')
          h4.text-center 1995 Windows 95
          p.mb-0 Introducción del menú Inicio y la barra de tareas como elementos centrales de navegación.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-09.svg' alt='AvatarTop')
          h4.text-center 2001 Windows XP
          p.mb-0 Mejoras en la experiencia visual, personalización y accesibilidad.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-10.svg' alt='AvatarTop')
          h4.text-center 2007 iPhone (iOS)
          p.mb-0 Popularización de las interfaces táctiles basadas en gestos.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-11.svg' alt='AvatarTop')
          h4.text-center 2012 Windows 8
          p.mb-0 Introducción de la interfaz Metro basada en mosaicos (tiles), diseñada para interacción táctil y dispositivos híbridos.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-12.svg' alt='AvatarTop')
          h4.text-center 2015 Windows 10
          p.mb-0 Integración de elementos de escritorio y táctiles para facilitar el uso en múltiples dispositivos.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-13.svg' alt='AvatarTop')
          h4.text-center 2017 Fluent Design System
          p.mb-0 Sistema de diseño de Microsoft que incorpora principios visuales como luz, profundidad, movimiento, material y escala.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-14.svg' alt='AvatarTop')
          h4.text-center 2020 Interfaces inteligentes
          p.mb-0 Integración de asistentes virtuales, interacción por voz y sistemas basados en inteligencia artificial en las interfaces digitales.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-15.svg' alt='AvatarTop')
          h4.text-center 2025+ Interfaces predictivas
          p.mb-0 Desarrollo de interfaces capaces de anticipar acciones y necesidades del usuario mediante análisis de datos y aprendizaje automático.

    p.mb-4 A continuación, se presentan algunas características generales de las interfaces gráficas de usuario en comparación con las interfaces de línea de comandos (CLI).

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          span Características fundamentales de las GUI y las CLI
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Característica
                th(style="width: 20%; background-color: #FFEEBC;") GUI (Interfaz gráfica)
                th(style="width: 20%; background-color: #FFEEBC;") CLI (Línea de comandos)
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Curva de aprendizaje.
                td(style="background-color: #F0F8FF;") Baja, debido a la exploración visual.
                td(style="background-color: #F0F8FF;") Alta, requiere memorizar comandos.
              tr(data-aos="fade-right")
                td Velocidad en tareas frecuentes.
                td Media, depende de la navegación por menús.
                td Alta, permite ejecutar comandos directos.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Prevención de errores.
                td(style="background-color: #F0F8FF;") Mayor, las opciones suelen ser visibles.
                td(style="background-color: #F0F8FF;") Menor, los errores de sintaxis pueden afectar la ejecución.
              tr(data-aos="fade-right")
                td Uso del espacio en pantalla
                td Mayor, requiere elementos visuales.
                td Menor, utiliza comandos de texto.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Descubrimiento de funciones.
                td(style="background-color: #F0F8FF;") Alto, las opciones son visibles.
                td(style="background-color: #F0F8FF;") Bajo, depende del conocimiento previo.
              tr(data-aos="fade-right")
                td Uso principal.
                td Aplicaciones para usuarios finales.
                td Administración de sistemas y automatización.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1. Características de las interfaces gráficas

    p.mb-4 Las interfaces gráficas de usuario se estructuran a partir de diversos elementos que permiten la interacción entre las personas y los sistemas informáticos. Entre los más importantes se encuentran los siguientes:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img-16.png', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .acordion-color-01
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
            .row(titulo="Metáfora visual")
              .col-12.mb-0.mb-md-0
                p.mb-0 Consiste en representar conceptos del sistema mediante elementos gráficos inspirados en objetos del mundo real. Por ejemplo, una carpeta permite organizar archivos, la papelera representa la eliminación de documentos y el escritorio funciona como el espacio principal de trabajo. Estas representaciones facilitan la comprensión del sistema y permiten que el usuario se oriente con mayor facilidad.
            .row(titulo="Modelo de interacción")
              .col-12.mb-0.mb-md-0
                p.mb-0 Define la forma en que el usuario se comunica con el sistema mediante dispositivos de entrada y salida, como el teclado, el ratón, las pantallas táctiles, los lápices digitales o los sistemas de reconocimiento de voz. A través de estos dispositivos se ejecutan acciones que permiten navegar, introducir información y manipular los elementos de la interfaz.
            .row(titulo="Componentes de interfaz")
              .col-12.mb-0.mb-md-0
                p.mb-0 Corresponden a los elementos visuales que conforman la estructura de la aplicación, como ventanas, botones, campos de texto, listas, menús, barras de herramientas y pestañas. Estos componentes permiten organizar la información y facilitan la ejecución de diferentes funciones dentro del sistema.
            .row(titulo="Retroalimentación o <em>feedback</em>")
              .col-12.mb-0.mb-md-0
                p.mb-0 Hace referencia a los mecanismos mediante los cuales el sistema informa al usuario sobre el estado de una acción. Esta retroalimentación puede presentarse mediante mensajes en pantalla, cambios visuales, animaciones, barras de progreso o notificaciones sonoras o táctiles.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0 En las aplicaciones actuales, las interfaces gráficas también incorporan nuevos patrones de interacción orientados a mejorar la experiencia del usuario, como arrastrar y soltar elementos, desplazamiento táctil, gestos multitáctiles o comandos de voz. Estas formas de interacción permiten que el uso de las aplicaciones sea más natural e intuitivo, especialmente en dispositivos móviles.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2. Principios de diseño en interfaces gráficas

    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema1/img-17.png', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p El diseño de interfaces gráficas se orienta a organizar los elementos visuales de un sistema de manera que la interacción entre el usuario y la aplicación sea clara, comprensible y eficiente. Un buen diseño de interfaz no solo busca una apariencia estética adecuada, sino que también facilita la comprensión de la información, reduce la posibilidad de errores y permite que el usuario navegue por el sistema de forma intuitiva.
        .row.mb-4
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img-18.svg', alt='')
          .col-lg-10.col-12
            p.mb-0 En el campo de la interacción humano-computadora se han establecido diversos principios que orientan el diseño de interfaces. Entre los más influyentes se encuentran los propuestos por Don Norman, quien plantea que las interfaces deben comunicar de forma clara cómo pueden utilizarse los elementos disponibles y qué ocurre cuando el usuario interactúa con ellos.
        p Entre los principios más relevantes se encuentran:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Visibilidad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Las funciones importantes del sistema deben ser fácilmente identificables para el usuario. Los elementos interactivos, como botones o enlaces, deben destacarse visualmente para indicar que pueden ser utilizados.
          .row(numero="2" titulo="<em>Affordance</em>")
            .col-12.mb-4.mb-md-0
              p.mb-0 Los elementos de la interfaz deben sugerir cómo pueden utilizarse. Por ejemplo, un botón con relieve sugiere que puede presionarse, mientras que un campo de texto indica que se puede escribir en él.
          .row(numero="3" titulo="Retroalimentación (<em>feedback</em>)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Cada acción realizada por el usuario debe generar una respuesta perceptible del sistema, como un cambio visual, un mensaje de confirmación o una animación que indique que la acción fue procesada correctamente.
          .row(numero="4" titulo="Consistencia")
            .col-12.mb-4.mb-md-0
              p.mb-0 Los elementos de la interfaz deben mantener comportamientos y apariencias similares en todo el sistema. Esto permite que el usuario aprenda rápidamente cómo interactuar con la aplicación.
          .row(numero="5" titulo="Jerarquía visual")
            .col-12.mb-4.mb-md-0
              p.mb-0 La organización de los elementos en pantalla debe permitir que el usuario identifique fácilmente la información más importante. El uso adecuado de tamaños, colores, espacios y tipografías facilita la lectura y la navegación.
          .row(numero="6" titulo="Simplicidad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Una interfaz debe presentar únicamente la información y las opciones necesarias para realizar una tarea. La sobrecarga visual puede generar confusión y dificultar la interacción.

    p La aplicación de estos principios contribuye a diseñar interfaces más claras, coherentes y fáciles de utilizar, favoreciendo una interacción eficiente entre el usuario y el sistema informático. Estos fundamentos constituyen la base para el desarrollo de aplicaciones de escritorio, <em>web</em>  y móviles orientadas a mejorar la experiencia del usuario.

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3. Usabilidad en interfaces

    p.mb-4 La usabilidad se refiere al grado en que una interfaz permite que los usuarios interactúen con un sistema de manera efectiva, eficiente y satisfactoria para alcanzar determinados objetivos. De acuerdo con la norma #[b ISO 9241-11], la usabilidad constituye un atributo de calidad que evalúa qué tan fácil resulta utilizar un producto en un contexto específico de uso.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img-19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En el desarrollo de #[i software], la usabilidad es un aspecto fundamental, ya que una interfaz difícil de comprender o utilizar puede generar errores frecuentes, aumentar la necesidad de capacitación y disminuir la aceptación del sistema por parte de los usuarios. Por esta razón, el diseño de interfaces debe considerar desde el inicio las características, necesidades y expectativas de quienes utilizarán la aplicación.

    p.mb-4 La evaluación de la usabilidad suele considerar tres dimensiones principales:  

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img-20.svg', alt='')(style="width: 100%")
            h4.text-center Eficacia
            p.mb-0(data-aos="fade-down") Se refiere al grado en que los usuarios logran completar correctamente las tareas que desean realizar dentro del sistema.
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img-21.svg', alt='')(style="width: 100%")
            h4.text-center Eficiencia
            p.mb-0(data-aos="fade-down") Hace referencia a los recursos utilizados para completar una tarea, como el tiempo requerido, el número de pasos o la cantidad de acciones necesarias.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img-22.svg', alt='')(style="width: 100%")
            h4.text-center Satisfacción
            p.mb-0(data-aos="fade-down") Corresponde a la percepción positiva que experimenta el usuario al interactuar con el sistema, relacionada con la comodidad, la confianza y la facilidad de uso.

    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4 Para mejorar la usabilidad de una interfaz es común aplicar principios de diseño centrados en el usuario, realizar pruebas de interacción con usuarios reales y analizar la forma en que las personas utilizan el sistema en situaciones reales. Estas prácticas permiten identificar dificultades en la navegación, errores frecuentes o elementos de diseño que pueden generar confusión.
        .cajon.cajon.C01.p-4
          p.mb-0 De esta manera, la usabilidad se convierte en un elemento clave para el éxito de las aplicaciones informáticas, ya que contribuye a que los sistemas sean comprensibles, accesibles y eficientes para las personas que los utilizan.

    p.mb-4 A continuación, se presenta una síntesis de las heurísticas de usabilidad propuestas por Jakob Nielsen, junto con algunos ejemplos de violaciones frecuentes en el diseño de interfaces y posibles estrategias de corrección durante la implementación.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          span Heurísticas de Nielsen: violaciones frecuentes y estrategias de corrección
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Heurística
                th(style="width: 20%; background-color: #FFEEBC;") Violación común
                th(style="width: 20%; background-color: #FFEEBC;") Corrección en implementación
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") 1. Visibilidad del estado del sistema.
                td(style="background-color: #F0F8FF;") No mostrar indicador cuando una operación tarda en ejecutarse.
                td(style="background-color: #F0F8FF;") Mostrar barra de progreso, indicador de carga o mensajes de estado.
              tr(data-aos="fade-right")
                td 2. Relación con el mundo real.
                td Uso de términos técnicos difíciles de comprender.
                td Utilizar lenguaje claro y familiar para el usuario.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") 3. Control y libertad del usuario.
                td(style="background-color: #F0F8FF;") No permitir cancelar o deshacer acciones.
                td(style="background-color: #F0F8FF;") Incluir opciones como cancelar, deshacer o rehacer.
              tr(data-aos="fade-right")
                td 4. Consistencia y estándares.
                td Ubicación o comportamiento diferente de los mismos elementos.
                td Mantener estructura y comportamiento uniforme en toda la interfaz.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") 5. Prevención de errores.
                td(style="background-color: #F0F8FF;") Permitir acciones críticas sin confirmación.
                td(style="background-color: #F0F8FF;") Incorporar mensajes de confirmación o validaciones previas.
              tr(data-aos="fade-right")
                td 6. Reconocimiento antes que recuerdo.
                td Obligar al usuario a memorizar comandos.
                td Mostrar menús, iconos o sugerencias visibles.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") 7. Flexibilidad y eficiencia de uso.
                td(style="background-color: #F0F8FF;") No incluir atajos para usuarios avanzados.
                td(style="background-color: #F0F8FF;") Implementar teclas rápidas o accesos directos.
              tr(data-aos="fade-right")
                td 8. Diseño estético y minimalista.
                td Pantallas saturadas de información.
                td Presentar solo los elementos necesarios para la tarea.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") 9. Ayudar a reconocer, diagnosticar y recuperarse de errores.
                td(style="background-color: #F0F8FF;") Mensajes de error confusos o con códigos técnicos.
                td(style="background-color: #F0F8FF;") Mostrar mensajes claros que indiquen el problema y posible solución.
              tr(data-aos="fade-right")
                td 10. Ayuda y documentación.
                td Ausencia de guía o soporte dentro del sistema.
                td Incluir ayuda contextual, tutoriales o documentación breve.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0 En conjunto, la aplicación de estas heurísticas permite orientar el diseño de interfaces hacia soluciones más comprensibles, eficientes y centradas en las necesidades de los usuarios. Su uso durante las etapas de diseño, desarrollo y evaluación del #[i software] contribuye a identificar problemas de interacción de manera temprana y a mejorar la calidad de la experiencia de uso en los sistemas informáticos.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
