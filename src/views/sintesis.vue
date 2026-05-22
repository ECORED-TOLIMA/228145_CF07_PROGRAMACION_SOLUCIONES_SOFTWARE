<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos de las interfaces gráficas de usuario, partiendo de sus características, principios de diseño y la importancia de la usabilidad como eje central en la interacción persona–sistema. Se estudian las interfaces gráficas en aplicaciones de escritorio, incluyendo la creación de formularios, el uso de controles u objetos, la organización y disposición de elementos mediante #[i layouts], así como la implementación de cuadros de diálogo, menús y barras de herramientas. De igual manera, se analizan las interfaces en aplicaciones #[i web], considerando la estructura de páginas mediante etiquetas HTML y el diseño de formularios y sus componentes. Además, se revisan estándares y #[i frameworks] para el desarrollo #[i web], con énfasis en las normas del W3C, la validación de código y el uso de #[i frameworks front-end]. Finalmente, se exploran las hojas de estilo CSS como herramienta fundamental para la definición y aplicación de estilos que mejoran la presentación y coherencia visual de las interfaces #[i web].

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta el diseño e implementación de interfaces gráficas de usuario, explicando sus fundamentos, su aplicación en entornos de escritorio y web, y el uso de estándares, frameworks y CSS para su diseño y usabilidad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
