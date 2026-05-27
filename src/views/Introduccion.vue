<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/introduccion/img-01.png', alt='')

    .bg-c2.px-md-5.px-4.mb-4
      p.mb-4 Las interfaces gráficas de usuario (GUI, por sus siglas en inglés) constituyen el medio a través del cual las personas interactúan con los sistemas informáticos. A través de elementos visuales como ventanas, menús, botones, formularios e íconos, las interfaces permiten que los usuarios accedan a las funcionalidades de una aplicación de manera intuitiva, facilitando la comprensión y el uso de los sistemas digitales en distintos contextos.
      .row.justify-content-center
        .col-lg-5.col-sm-7.col-10.mb-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/introduccion/img-02.png', alt='Imagen decorativa')
        .col-lg-7(data-aos="fade-left")
          p El diseño de interfaces gráficas ha evolucionado de forma significativa con el desarrollo de la tecnología. Inicialmente se orientaba a entornos de escritorio, pero actualmente también abarca aplicaciones <em>web</em> y plataformas digitales que requieren interfaces claras, accesibles y eficientes. En este contexto, los principios de usabilidad, organización visual de la información y experiencia de usuario adquieren un papel fundamental para garantizar que las aplicaciones sean fáciles de utilizar y respondan adecuadamente a las necesidades de los usuarios.
          .row.mb-4
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/introduccion/img-03.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 Comprender los fundamentos del diseño e implementación de interfaces gráficas permite estructurar correctamente los elementos visuales de una aplicación, definir formularios y controles de interacción, aplicar estándares <em>web</em>  y utilizar herramientas que facilitan la construcción de interfaces modernas.

      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-10.col-12
          .cajon.cajon.C01.color-primario.p-4
            p.mb-0 En este componente formativo se abordan los conceptos y elementos esenciales para el diseño e implementación de interfaces gráficas en aplicaciones de escritorio y <em>web</em> . Asimismo, se estudian los principios de usabilidad, el uso de formularios y componentes de interfaz, los estándares del W3C y los <em>frameworks</em> para el desarrollo de interfaces, así como la aplicación de hojas de estilo CSS para mejorar la presentación y organización visual de las páginas <em>web</em> .

    p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/CCfi6k0nmHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
