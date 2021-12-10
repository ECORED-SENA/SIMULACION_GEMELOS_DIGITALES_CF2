<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Configuración de componentes del sistema mecatrónico
    .row.bg-color1.px-5
      .col-12.pt-5
        .row.align-items-center.mb-4
          .col-lg-6.mb-4.mb-lg-0
            figure(data-aos="slide-right")
              img(src='@/assets/curso/img1.png', style="width: 450px").m-auto
          .col-lg-6
            p.mb-4 En la forma como se intenta generar los movimientos en los diferentes sistemas se presenta la mecatrónica conceptual para diseñadores (MCD) la cual se define como una aplicación que se utiliza para diseñar y simular de forma interactiva el movimiento complejo de los sistemas electromecánicos. Es compatible con la fase inicial de diseño de la máquina que proporciona el concepto básico de la máquina, incluidos los aspectos mecánicos, eléctricos, de fluidos y de automatización.
            .cajon.color-primario.p-4
              p.mb-0 Es una solución que transforma el proceso de creación de la máquina en un enfoque de diseño de mecatrónica eficiente. (Siemens, 2021)
        p.mb-5 Por otro lado, el proporcionar un entorno de desarrollo colaborativo que permita simular, la definición de componentes mecánicos, eléctricos y de automatización se le reconoce como Interface del entorno MCD, la cual a su vez facilita.
        figure.mb-5(data-aos="slide-up")
          img(src='@/assets/curso/img1.svg', style="width: 1050px").m-auto
        p.mb-5 Teniendo en cuenta lo anterior observa como se evidencia dichos elementos en la figura 1.
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco1 Figura 1.] Interface del MCD
            figure
              img(src='@/assets/curso/img2.png', style="width: 1200px").m-auto
              figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/pDtQ1nO3yhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        #t_1_1
        .titulo-segundo.color-secundario
          h2 1.1 Panel de herramientas
        p.mb-5 Para reconocer el panel de herramientas, es preciso tener en cuenta que contiene los comandos agrupados en:
        .row.mb-5
          .col-6.col-lg-3
            figure.mb-4.mb-lg-0
              img(src='@/assets/curso/img3.svg', style="width: 350px").m-auto
          .col-6.col-lg-3
            figure.mb-4.mb-lg-0
              img(src='@/assets/curso/img4.svg', style="width: 350px").m-auto
          .col-6.col-lg-3
            figure
              img(src='@/assets/curso/img5.svg', style="width: 350px").m-auto
          .col-6.col-lg-3
            figure
              img(src='@/assets/curso/img6.svg', style="width: 350px").m-auto
        .row.justify-content-end.bg-color2.mb-5(data-aos="slide-left")
          .col-12.d-block.d-lg-none.bg-color3
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
            p.mb-0 A través de estos comandos el MCD permite la creación de cuerpos rígidos, cuerpos de colisión, juntas básicas de movimiento, en la definición de los componentes mecánicos. Por su parte, sensores de colisión, controles de posición, velocidad y superficies de transporte en los componentes eléctricos y finalmente disponer de componentes que facilitan el acople de elementos de automatización. Para ello observa la figura 2.
        .row.justify-content-center(data-aos="fade-left")
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco1 Figura 2.] Panel de herramientas
            figure
              img(src='@/assets/curso/img5.png', style="width: 1200px").m-auto
              figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
    separador.mb-5
    #t_1_2
    .titulo-segundo.color-secundario
      h2 1.2 Comandos para la configuración de componentes mecánicos
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .titulo-sexto.color-acento-contenido
            h5 #[span.txt-deco1 Figura 3.] Comandos de curva
          figure
            img(src='@/assets/curso/img6.png', style="width: 500px").m-auto
            figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Este grupo contiene las herramientas para creación de formas geométricas en 3D como: punto, línea, arco/círculo, spline, hélice, texto y curva sobre superficie, así como se muestra en la figura 3.
    .row.bg-color5.px-5
      .col-12.pt-5#menu1
        p Para ampliar la información que se busca desarrollar a través de este componente, se presentan algunos cortos videos que explican e ilustran algunos comandos y herramientas de uso para la simulación de gemelos digitales de sistemas mecatrónicos.
        .row.justify-content-evenly.img-position1
          .col-5.col-lg-3.mb-4.mb-lg-0
            a(href="#1A")
              figure.efect1
                img(src="@/assets/curso/img8.svg", style="width:200px").m-auto
          .col-5.col-lg-3.mb-4.mb-lg-0
            a(href="#2A")
              figure.efect1
                img(src="@/assets/curso/img9.svg", style="width:200px").m-auto
          .col-5.col-lg-3
            a(href="#3A")
              figure.efect1
                img(src="@/assets/curso/img10.svg", style="width:200px").m-auto
          .col-5.col-lg-3
            a(href="#4A")
              figure.efect1
                img(src="@/assets/curso/img11.svg", style="width:200px").m-auto
    #1A
    br
    br
    .row.py-5.align-items-center.justify-content-between
      .col-4
        h3.text-white.mb-0.text-deco2 #[b Cuerpo rígido]
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/img12.svg", style="width:50px").m-auto
    .row.bg-color1.px-5
      .col-12.pt-5
        p.mb-5 A través de comando se definen las propiedades físicas como la masa, inercia a un componente mecánico del modelo funcional a través de cuerpos rígidos, tal como se comparte en la figura 4.
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco1 Figura 4.] Cuerpo rígido
            figure
              img(src='@/assets/curso/img7.png', style="width: 1200px").m-auto
              figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/iXInTUwPypw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        hr
        #2A
        br
        br
        .row.py-5.align-items-center.justify-content-between.mb-5
          .col-4
            h3.text-white.mb-0.text-deco2 #[b Cuerpo de colisón]
          .col-2
            a(href="#menu1")
              figure.efect1
                img(src="@/assets/curso/img12.svg", style="width:50px").m-auto
        p.mb-5 A través de este comando el sistema define un cuerpo con propiedades físicas que permiten detectar la colisión con otro cuerpo rígido, así como se muestra en la figura 5.
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco1 Figura 5.] Comando línea
            figure
              img(src='@/assets/curso/img8.png', style="width: 1200px").m-auto
              figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/JBNR44fJ7M4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        hr
        #3A
        br
        br
        .row.py-5.align-items-center.justify-content-between.mb-5
          .col-4
            h3.text-white.mb-0.text-deco2 #[b Juntas de unión]
          .col-2
            a(href="#menu1")
              figure.efect1
                img(src="@/assets/curso/img12.svg", style="width:50px").m-auto
        p.mb-5 Las juntas de unión permiten definir grados de libertad a cada componente, es decir definen el tipo de movimiento entre los componentes de un sistema mecánico. Estas juntas pueden ser de revolución, deslizantes, cilíndricas, esféricas entre otras. Detalla estos elementos en la figura 6.
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco1 Figura 6.] Juntas de unión
            figure
              img(src='@/assets/curso/img9.png', style="width: 1200px").m-auto
              figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/6lGVWiIvNTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        hr
        #4A
        br
        br
        .row.py-5.align-items-center.justify-content-between.mb-5
          .col-4
            h3.text-white.mb-0.text-deco2 #[b Restricciones]
          .col-2
            a(href="#menu1")
              figure.efect1
                img(src="@/assets/curso/img12.svg", style="width:50px").m-auto
        p.mb-5 Dentro de esta familia de comandos se encuentran justas de resorte, junta de límite, amortiguador de resorte etc, las cuales permiten crear o asignar elementos mecánicos que limitan el movimiento, así como se muestra en la figura 7.
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco1 Figura 7.] Restricciones
            figure
              img(src='@/assets/curso/img10.png', style="width: 1200px").m-auto
              figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
        p.mb-4.text-deco3 #[b #[u Acopladores]]
        p.mb-5 A través de este grupo de comandos se pueden definir elementos mecánicos que permiten transmitir movimiento entre componentes de una máquina. Entre estos se encuentran engranajes el sistema cremallera piñón, poleas y correas y levas mecánicas.  Observa la figura 8.
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco1 Figura 8.] Acopladores
            figure
              img(src='@/assets/curso/img11.png', style="width: 1200px").m-auto
              figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/aV-BKY_MXlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador.mb-5
    #t_1_3
    .titulo-segundo.color-secundario
      h2 1.3 Configuración de sistema eléctrico
    .row.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        p.mb-5 En este grupo de herramientas se encuentran funciones que permiten definir sensores de posición, colisión, controles de velocidad, posición, superficies de transporte y adaptadores de señales entre otros. Detalla la figura 9.
        .row.justify-content-center.mb-5(data-aos="fade-right")
          .col-lg-12
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco1 Figura 9.] Sistema eléctrico
            figure
              img(src='@/assets/curso/img12.png', style="width: 700px").m-auto
              figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
      .col-lg-6
        figure(data-aos="slide-left")
          img(src='@/assets/curso/img13.png', style="width: 450px").m-auto
    TabsC.color-primario
      .py-3.py-md-4(titulo="Sensores de colisión")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            .row
              .col-lg-12
                .titulo-sexto.color-acento-contenido
                  h5 #[span.txt-deco1 Figura 10.] Sensores de colisión
                figure
                  img(src='@/assets/curso/img14.png', style="width: 700px").m-auto
                  figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
          .col-lg-7
            h3 Sensores de colisión
            p.mb-4 Este tipo de herramienta permite detectar el momento que dos cuerpos entran en contacto y activar una señal, observa el ejemplo en al figura 10.
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
                    a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=FMptMIpzzB4" target="_blank" type="application/pdf")
                      span Ver video
      .py-3.py-md-4(titulo="Control de posición")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            .row
              .col-lg-12
                .titulo-sexto.color-acento-contenido
                  h5 #[span.txt-deco1 Figura 11.] Control de posición
                figure
                  img(src='@/assets/curso/img16.png', style="width: 700px").m-auto
                  figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
          .col-lg-7
            h3 Control de posición
            p.mb-4 Este comando permite limitar la posición de un cuerpo rígido a través de una junta de movimiento, las dos variables cinemáticas controladas con esta herramienta son posición y velocidad, así como se muestra en la figura 11.
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
                    a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=XnbohOhFcLA" target="_blank" type="application/pdf")
                      span Ver video
      .py-3.py-md-4(titulo="Control de velocidad")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            .row
              .col-lg-12
                .titulo-sexto.color-acento-contenido
                  h5 #[span.txt-deco1 Figura 12.] Control de velocidad
                figure
                  img(src='@/assets/curso/img17.png', style="width: 700px").m-auto
                  figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
          .col-lg-7
            h3 Control de velocidad
            p.mb-4 Esta herramienta permite limitar la velocidad de un componente mecánico dependiendo el tipo de junta definida entre los cuerpos rígidos, así como se muestra en la figura 12.
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
                    a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=dQD1CXIDQk4" target="_blank" type="application/pdf")
                      span Ver video
      .py-3.py-md-4(titulo="Superficie de transporte")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            .row
              .col-lg-12
                .titulo-sexto.color-acento-contenido
                  h5 #[span.txt-deco1 Figura 13.] Superficie de transporte
                figure
                  img(src='@/assets/curso/img18.png', style="width: 700px").m-auto
                  figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
          .col-lg-7
            h3 Superficie de transporte
            p.mb-4 Este comando permite definir un sistema de transmisión por banda, para esto es necesario definir la superficie como un cuerpo de colisión, ten en cuenta la figura 13 para reconocer estos aspectos mencionados.
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
                    a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=vclrM22Gp6M" target="_blank" type="application/pdf")
                      span Ver video
      .py-3.py-md-4(titulo="Adaptador de señales")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            .row
              .col-lg-12
                .titulo-sexto.color-acento-contenido
                  h5 #[span.txt-deco1 Figura 14.] Adaptador de señales
                figure
                  img(src='@/assets/curso/img19.png', style="width: 700px").m-auto
                  figcaption.mt-3 #[b Nota.] Adaptada del sistema CAD NX 12.
          .col-lg-7
            h3 Adaptador de señales
            p.mb-4 Esta herramienta permite convertir a través de señales un tipo de movimiento a otro y crear señales de entrada y salida para la comunicación con el PLC_SIMAdvanced, ver la figura 14.
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
                    a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=kCnD4uZt6yA" target="_blank" type="application/pdf")
                      span Ver video
  
</template>

<script>
export default {
  name: 'Tema1',
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
