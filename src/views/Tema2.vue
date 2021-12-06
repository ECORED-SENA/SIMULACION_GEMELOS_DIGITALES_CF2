<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Simulación basada en operaciones
    .row.bg-color1.px-5
      .col-12.pt-5
        .row.justify-content-end.bg-color7.mb-5(data-aos="slide-left")
          .col-12.d-block.d-lg-none.bg-color8
            br
            br
            br
            br
            br
            br
            br
            br
            br
            br
          .col-lg-7.p-4.bg-color4
            p.mb-0 Este tipo de simulación permite la programación de cada una de las actividades las cuales serán ejecutadas forma secuencial o simultánea creando un vínculo entre cada una de ellas. La programación puede ser basada en el tiempo o en eventos. Un evento podría ser que cuando se active un sensor se realice una actividad. Mientras que la programación en el tiempo una actividad se ejecuta directamente en un tiempo determinado, observe la figura 15.
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco1 Figura 15.] Simulación basada en operaciones
            figure
              img(src='@/assets/curso/img22.png', style="width: 1200px").m-auto
              figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
        #t_2_1
        .titulo-segundo.color-secundario
          h2 2.1 Bloque de expresiones
        p.mb-5 El bloque de expresiones es una herramienta que facilita la asignación de las variables de entrada, salida y la relación entre ellas durante la ejecución de un proceso. Por otra parte, permite establecer las condiciones de funcionamiento del sistema mecatrónico; detalla la figura 16.
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco1 Figura 16.] Bloque de expresiones
            figure
              img(src='@/assets/curso/img23.png', style="width: 1200px").m-auto
              figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
        separador.mb-5
        #t_2_2
        .titulo-segundo.color-secundario
          h2 2.2 Editor de secuencias
        .row.align-items-center.mb-5
          .col-lg-4.mb-4.mb-lg-0
            figure(data-aos="slide-right")
              img(src='@/assets/curso/img24.png', style="width: 450px").m-auto
          .col-lg-8
            p.mb-4 El editor de secuencias permite crear, modificar y editar cada una de las operaciones para realizar un proceso, estas actividades (operaciones) pueden estar encadenadas unas con otras o pueden ejecutarse en forma independiente. A su vez es posible ejecutarlas en forma secuencial o simultánea, así como se muestra en la figura 17.
            .row.align-items-center.justify-content-center.mb-5
              .col-2.d-none.d-xxl-block
                figure.img-position2
                  img(src='@/assets/curso/img15.png')
              .col-10.bg-color6.p-4
                .row.align-items-center.justify-content-end
                  .col-12.col-lg-7.mb-4.mb-lg-0
                    h3.text-deco4 Video tutorial
                    p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                  .col-lg-3
                    a.boton.color-primario.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                      span Ver video
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco1 Figura 17.] Editor de secuencias
            figure
              img(src='@/assets/curso/img25.png', style="width: 1200px").m-auto
              figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
    .bloque-texto-a.color-primario.p-4.p-md-5(data-aos="slide-down")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p.mb-0 Al concluir este componente formativo el aprendiz desarrolló habilidades y destrezas para simular un sistema mecatrónico incluyendo componentes mecánicos, eléctricos y de automatización, establecer señales con entradas y salidas para su posterior mapeo entre el MCD y TIA portal. A su vez, emplear el editor de secuencias para modificar la programación de las actividades de un proceso y visualizar el comportamiento de cada una de las variables del sistema en tiempo de ejecución para predecir y optimizar el comportamiento del gemelo digital antes de su implementación y puesta en marcha.
        .col-lg-4
          figure
            img(src='@/assets/curso/img26.png', style="width: 400px").m-auto
          

</template>

<script>
export default {
  name: 'Tema2',
  components: {},
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
