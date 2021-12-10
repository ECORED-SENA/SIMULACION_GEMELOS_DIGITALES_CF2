<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Este componente formativo tiene como objetivo guiar al estudiante en el desarrollo de habilidades y destrezas en el proceso de simulación y validación de gemelos digitales de sistemas mecatrónicos a través de la aplicación MCD (Mecatrónica Conceptual para Diseñadores). Desde la biblioteca de reutilización, podrá agregar cuerpos de movimiento, sensores, actuadores, cuerpos de colisión y otras propiedades físicas que le permitirán realizar análisis cinemático y dinámico de cada componente. Podrá definir un modelo conceptual del sistema mecánico, aplicar la física básica como la gravedad, la masa, la inercia, propiedades de colisión, aplicar las restricciones de movimiento, colocar actuadores, sensores y programar eventos en el tiempo a través del editor de secuencias, facilitando la verificación del funcionamiento de la máquina detectando y corrigiendo errores en el modelo digital.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/OmIturcluP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
