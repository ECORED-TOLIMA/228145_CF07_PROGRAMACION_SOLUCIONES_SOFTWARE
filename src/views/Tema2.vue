<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Interfaces gráficas en aplicaciones de escritorio

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema2/img-01.png', alt='')

    p.mb-4 Las aplicaciones de escritorio son aquellas que se ejecutan directamente en un sistema operativo como Windows, macOS o Linux sin requerir un navegador <em>web</em> , han sido históricamente uno de los entornos más importantes para el desarrollo de interfaces gráficas. Este tipo de aplicaciones permiten a las personas interactuar con el <em>software</em> mediante elementos visuales como ventanas, botones, menús, formularios y cuadros de diálogo, facilitando la ejecución de tareas y el acceso a funcionalidades del sistema. Aunque en los últimos años las aplicaciones <em>web</em> han ganado gran popularidad, las aplicaciones de escritorio continúan siendo ampliamente utilizadas en contextos donde se requiere alto rendimiento, acceso directo al sistema operativo, trabajo sin conexión a internet o manejo de grandes volúmenes de información.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img-02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Desde el punto de vista técnico, las aplicaciones de escritorio ofrecen ventajas como el acceso al sistema de archivos local, la posibilidad de ejecutar procesos de manera más eficiente y una integración más profunda con los recursos del sistema operativo. Estas características permiten desarrollar herramientas robustas para ámbitos profesionales, industriales, educativos y administrativos. Sin embargo, también presentan desafíos relacionados con la instalación, actualización y compatibilidad entre diferentes sistemas operativos.

    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img-03.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") En el ámbito de la formación en desarrollo de <em>software</em>, comprender la estructura y funcionamiento de las interfaces gráficas de escritorio permite al aprendiz diseñar aplicaciones más intuitivas y funcionales. Para ello, se utilizan diferentes tecnologías y entornos de desarrollo que facilitan la creación de interfaces mediante componentes visuales organizados dentro de formularios.

    p.mb-4 A continuación, se presentan algunos de los elementos fundamentales que conforman las interfaces gráficas en aplicaciones de escritorio.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 3.
          span Elementos de interfaces gráficas en aplicaciones de escritorio
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFEEBC;") Elemento
                th(style="width: 50%; background-color: #FFEEBC;") Descripción
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Formularios.
                td(style="background-color: #F0F8FF;") Ventanas principales de la aplicación donde se organizan y presentan los diferentes componentes de la interfaz gráfica. Funcionan como contenedores que permiten estructurar la interacción con el usuario.
              tr(data-aos="fade-right")
                td Controles de interfaz.
                td Componentes visuales que permiten la interacción con el usuario, como botones, cuadros de texto, etiquetas, listas desplegables y casillas de verificación.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Cuadros de diálogo.
                td(style="background-color: #F0F8FF;") Ventanas secundarias que aparecen para solicitar información, mostrar mensajes o confirmar acciones realizadas por el usuario.
              tr(data-aos="fade-right")
                td Menús.
                td Elementos organizados generalmente en la parte superior de la ventana que agrupan comandos o funcionalidades de la aplicación.
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Barras de herramientas.
                td(style="background-color: #F0F8FF;") Conjuntos de iconos o botones que permiten acceder rápidamente a funciones comunes dentro de la aplicación.

    p En conjunto, estos elementos permiten estructurar la interacción entre el usuario y la aplicación, favoreciendo el desarrollo de interfaces claras, organizadas y fáciles de utilizar dentro de los entornos de <em>software</em> de escritorio.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1. Formularios en aplicaciones de escritorio

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img-04.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") En las aplicaciones de escritorio, el formulario constituye el elemento principal de la interfaz gráfica a través del cual el usuario interactúa con el sistema. Un formulario se entiende como una ventana que contiene diferentes componentes visuales, como botones, cuadros de texto, etiquetas o listas, los cuales permiten presentar información, ingresar datos y ejecutar acciones dentro de la aplicación.
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img-05.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Desde el punto de vista del desarrollo de <em>software</em>, el formulario actúa como un contenedor de controles y como un punto central para gestionar eventos generados por la interacción del usuario, como hacer clic en un botón, escribir información o seleccionar opciones. Cada acción realizada dentro del formulario puede activar un evento que desencadena una respuesta del sistema, lo que permite implementar la lógica funcional de la aplicación.
        p De esta manera, el formulario se convierte en la estructura básica sobre la cual se construye la interfaz de usuario en aplicaciones de escritorio, ya que organiza los elementos visuales, gestiona la interacción con el usuario y facilita la ejecución de las funcionalidades del sistema.

    .bg-c2.px-md-5.px-4
      p Ejemplo de un formulario en una aplicación de escritorio:
      .row.justify-content-center.mb-4
        .col-lg-7.order-lg-1.order-2
          .row.justify-content-center
            .col
              p Un sistema de registro de usuarios puede utilizar un formulario que contenga los siguientes elementos:
              ul.lista-ul--color.mt-4(data-aos="fade-down")
                li
                  i.fas.fa-laptop-code
                  p.mb-0 Campo de texto para nombre.
                li
                  i.fas.fa-laptop-code
                  p.mb-0 Campo de texto para correo electrónico.
                li
                  i.fas.fa-laptop-code
                  p.mb-0 Campo de texto para contraseña.
                li
                  i.fas.fa-laptop-code
                  p.mb-0 Botón #[b Registrar.]
                li
                  i.fas.fa-laptop-code
                  p.mb-0 Botón #[b Cancelar.]
              p Cuando el usuario hace clic en el botón #[b Registrar], el sistema valida la información ingresada y guarda los datos en la base de datos.
        .col-lg-5.col-8.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema2/img-06.png', alt='')

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2. Controles u objetos de un formulario

    .row.no-gutters.align-items-center.mb-4.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/tema2/img-07.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/tema2/img-08.svg' alt="")
        p.mb-0 En el desarrollo de aplicaciones de escritorio, los formularios constituyen el espacio principal de interacción entre el usuario y el sistema. Dentro de ellos se integran distintos controles u objetos, los cuales permiten mostrar información, recibir datos del usuario y ejecutar acciones dentro de la aplicación. Cada control cumple una función específica y cuenta con propiedades, métodos y eventos que el desarrollador puede utilizar para definir su comportamiento.

    p.mb-4 En entornos de desarrollo como Windows Forms del <em>framework</em> .NET, los controles derivan de una clase base denominada Control, lo que permite que compartan características comunes como tamaño, posición, visibilidad y manejo de eventos. A partir de esta clase base se extienden diferentes tipos de controles especializados que facilitan la construcción de interfaces gráficas.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-primario
          h5 Figura 1.
          span Jerarquía de controles en Windows Forms (Framework .NET)
        .row.justify-content-center
          .col-lg-12.col-12.mb-4
            figure
              img(src='@/assets/curso/tema2/figura-1-1v.svg', alt='En la figura 1 se presenta de manera general la jerarquía de controles utilizada en Windows Forms, donde se evidencia cómo los controles específicos heredan funcionalidades de la clase base.')
          .col-auto.movil(data-aos="fade-left")
            a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Jerarquia_de_controles_en_Windows_Forms.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo.] Jerarquía de controles en Windows Forms (Framework .NET)

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0 Los formularios pueden incorporar diferentes tipos de controles dependiendo de las necesidades de la aplicación. Algunos permiten mostrar información, otros permiten la entrada de datos y algunos ejecutan acciones cuando el usuario interactúa con ellos.

    p.mb-4 La siguiente tabla presenta algunos de los controles más utilizados en aplicaciones de escritorio, su propósito principal y ejemplos básicos de uso en código.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4.
          span Controles esenciales de formulario: propósito, eventos y ejemplos de código
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 18%; background-color: #FFEEBC;") Control
                th(style="width: 27%; background-color: #FFEEBC;") Propósito
                th(style="width: 22%; background-color: #FFEEBC;") Evento principal
                th(style="width: 33%; background-color: #FFEEBC;") Ejemplo de código (C# WinForms)
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Label
                td(style="background-color: #F0F8FF;") Presentar texto estático o identificador.
                td(style="background-color: #F0F8FF;") Ninguno (no interactivo)
                td(style="background-color: #F0F8FF;") lblNombre.Text = "Nombre completo:";
              tr(data-aos="fade-right")
                td TextBox
                td Entrada de texto de una o múltiples líneas.
                td TextChanged
                td string nombre = txtNombre.Text;
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Button
                td(style="background-color: #F0F8FF;") Ejecutar una acción.
                td(style="background-color: #F0F8FF;") Click
                td(style="background-color: #F0F8FF;") private void btnGuardar_Click(object sender, EventArgs e) { GuardarDatos(); }
              tr(data-aos="fade-right")
                td CheckBox
                td Selección sí/no (0 o más opciones).
                td CheckedChanged
                td bool aplicaDescuento = chkDescuento.Checked;
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") RadioButton
                td(style="background-color: #F0F8FF;") Selección de una opción dentro de un grupo.
                td(style="background-color: #F0F8FF;") CheckedChanged
                td(style="background-color: #F0F8FF;") if (rbMasculino.Checked) { genero = "Masculino"; }
              tr(data-aos="fade-right")
                td ListBox
                td Seleccionar uno o varios elementos de una lista visible.
                td SelectedIndexChanged
                td foreach(var item in lstProductos.SelectedItems)
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") DataGridView
                td(style="background-color: #F0F8FF;") Presentar datos tabulares.
                td(style="background-color: #F0F8FF;") CellClick, CellValueChanged
                td(style="background-color: #F0F8FF;") dataGrid.DataSource = dataTable;
              tr(data-aos="fade-right")
                td DateTimePicker
                td Seleccionar fecha y hora.
                td ValueChanged
                td DateTime fecha = dtpNacimiento.Value;
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") NumericUpDown
                td(style="background-color: #F0F8FF;") Entrada de valores numéricos.
                td(style="background-color: #F0F8FF;") ValueChanged.
                td(style="background-color: #F0F8FF;") int cantidad = (int)numCantidad.Value;
              tr(data-aos="fade-right") 
                td PictureBox
                td Presentar imágenes.
                td Click (opcional)
                td picLogo.Image = Image.FromFile("logo.png");
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Panel
                td(style="background-color: #F0F8FF;") Agrupar controles para organización.
                td(style="background-color: #F0F8FF;") Resize, Paint
                td(style="background-color: #F0F8FF;") pnlBotones.Controls.Add(btnAceptar);
              tr(data-aos="fade-right") 
                td GroupBox
                td Agrupar controles con borde y título.
                td No aplica
                td Agrupar RadioButtons dentro
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") TabControl
                td(style="background-color: #F0F8FF;") Organizar contenido en pestañas.
                td(style="background-color: #F0F8FF;") SelectedIndexChanged
                td(style="background-color: #F0F8FF;") tabProductos.SelectedTab = tabDetalles;
              tr(data-aos="fade-right") 
                td ErrorProvider
                td Presentar indicadores de error de validación.
                td Asociado a validación
                td errorProvider.SetError(txtEmail, "Email inválido");

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0 El uso adecuado de estos controles permite construir interfaces funcionales y fáciles de utilizar, facilitando la interacción del usuario con el sistema. No obstante, además de seleccionar los controles adecuados, también es fundamental organizarlos correctamente dentro del formulario, aspecto que se aborda en el siguiente apartado relacionado con la disposición y organización de los controles en la interfaz.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3. Organización y disposición de controles #[i (layout)]

    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img-09.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p La organización y disposición de controles, conocida como #[i layout], corresponde a la manera en que los diferentes elementos de un formulario se distribuyen dentro de la interfaz para facilitar la interacción del usuario con la aplicación. Un diseño adecuado permite estructurar los controles de forma clara y coherente, lo que contribuye a mejorar la comprensión de la información, la eficiencia en el uso del sistema y la experiencia general del usuario.
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img-10.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 En las aplicaciones de escritorio, el #[i layout] busca mantener un equilibrio visual entre los distintos componentes del formulario, evitando la saturación de elementos y garantizando que cada control tenga una ubicación lógica dentro de la interfaz. Para ello, se consideran aspectos como la alineación de los controles, el espaciado entre elementos, la agrupación de componentes relacionados y la jerarquía visual que orienta la atención del usuario hacia las funciones más importantes.

    p.mb-4 Entre las estrategias más utilizadas para organizar controles dentro de un formulario se encuentran:

    .row.mb-4
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mb-0 #[b Alineación de controles], que permite ubicar botones, campos de texto y etiquetas de manera ordenada en filas o columnas.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mb-0 #[b Agrupación de elementos relacionados], utilizando contenedores como paneles o GroupBox para reunir controles que pertenecen a una misma función.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.mb-0 #[b Uso de márgenes y espacios], con el fin de evitar interfaces recargadas y facilitar la lectura de la información.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-numerada.color-adicional-3.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.mb-0 #[b Distribución jerárquica], en la que los elementos más relevantes se ubican en posiciones destacadas dentro de la interfaz.

    p Una adecuada organización del #[i layout] contribuye a que las aplicaciones de escritorio resulten más intuitivas, permitiendo que los usuarios comprendan rápidamente cómo ingresar información, ejecutar acciones y navegar entre las diferentes funcionalidades del sistema.

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4. Cuadros de diálogo, menús y barras de herramientas

    p.mb-4 En las aplicaciones de escritorio existen diferentes elementos de la interfaz gráfica que permiten organizar funciones, ejecutar acciones y facilitar la interacción del usuario con el sistema. Entre los más utilizados se encuentran los cuadros de diálogo, los menús y las barras de herramientas.
    
    .acordion-color-01
      AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
        .row.justify-content-center(titulo="A. Cuadros de diálogo")
          .col-lg-7.order-lg-1.order-2
            p Son ventanas especializadas que se utilizan para realizar tareas específicas dentro de una aplicación. En muchos casos son modales, lo que significa que bloquean la interacción con la ventana principal hasta que el usuario finaliza la acción solicitada.
            p Estos cuadros permiten comunicar información al usuario o solicitar datos necesarios para ejecutar determinadas operaciones. Algunos ejemplos comunes son:
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                p Cuadros para comunicar mensajes o alertas al usuario.
              li.mb-0
                i.lista-ul__vineta
                p Ventanas para seleccionar un archivo que se desea abrir.
              li.mb-0
                i.lista-ul__vineta
                p Opciones para indicar la ubicación donde se guardará un archivo.
              li.mb-0
                i.lista-ul__vineta
                p Diálogos para configurar opciones de impresión o búsqueda de texto.
            p.mb-0 El uso de los cuadros de diálogo proporcionados por el sistema operativo favorece la consistencia visual de las aplicaciones, facilita su uso y contribuye al soporte de accesibilidad, ya que suelen ser compatibles con lectores de pantalla y configuraciones especiales del sistema.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img-11.png', alt='Imagen decorativa')
        .row.justify-content-center(titulo="B. Menús")
          .col-lg-7.order-lg-1.order-2
            p Constituyen uno de los mecanismos más tradicionales para organizar los comandos de una aplicación de escritorio. Permiten agrupar funciones de forma jerárquica, facilitando que los usuarios identifiquen y accedan a las diferentes opciones del sistema.
            p En muchas aplicaciones se utilizan menús estructurados en categorías como Archivo, Edición, Ver, Herramientas y Ayuda, donde se agrupan operaciones relacionadas con la gestión de archivos, la edición de información, la visualización de elementos o la configuración del sistema.
            p.mb-0 Existen diferentes tipos de menús, entre los que se encuentran el menú principal ubicado en la parte superior de la ventana, los menús contextuales que aparecen al interactuar con determinados elementos de la interfaz y los menús desplegables asociados a botones o herramientas específicas.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img-12.png', alt='Imagen decorativa')
        .row.justify-content-center(titulo="C. Barras de herramientas")
          .col-lg-7.order-lg-1.order-2
            p Ofrecen acceso rápido a las funciones más utilizadas dentro de una aplicación mediante botones o iconos. Su objetivo es facilitar la ejecución de acciones frecuentes sin necesidad de navegar por los menús.
            p Generalmente incluyen operaciones comunes como guardar información, copiar o pegar datos, imprimir documentos, realizar búsquedas o actualizar información. En algunos casos también pueden incorporar otros controles como listas desplegables, casillas de verificación o campos de búsqueda.
            p.mb-0 Un diseño adecuado de la barra de herramientas presenta únicamente las funciones más utilizadas, evitando saturar la interfaz con demasiados elementos y permitiendo que el usuario acceda de manera rápida a las acciones más relevantes.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img-13.png', alt='Imagen decorativa')

    p.mb-4 La siguiente figura presenta la estructura general de una ventana típica de aplicación de escritorio, donde se identifican componentes como la barra de título, el menú principal, la barra de herramientas, el área de trabajo y la barra de estado.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-primario
          h5 Figura 2.
          span Anatomía de una aplicación de escritorio típica (Windows)
        .row.justify-content-center
          .col-lg-12.col-12.mb-4
            figure
              img(src='@/assets/curso/tema2/figura-2-2v.svg', alt='La figura 2 presenta la estructura general de una ventana típica de aplicación de escritorio, donde se identifican componentes como la barra de título, el menú principal, la barra de herramientas, el área de trabajo y la barra de estado.')
          .col-auto.movil(data-aos="fade-left")
            a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Anatomia_de_una_aplicacion_de_escritorio_tipica.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo.] Jerarquía de controles en Windows Forms (Framework .NET[V)



























































</template>

<script>
export default {
  name: 'Tema2',
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
