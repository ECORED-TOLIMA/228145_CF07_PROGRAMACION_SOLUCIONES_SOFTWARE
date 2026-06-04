<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Explorando el mundo de las interfaces gráficas.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales de las interfaces gráficas de usuario, incluyendo su diseño, usabilidad, aplicaciones en escritorio y <em>web</em>, así como el uso de estándares, <em>frameworks</em> y hojas de estilo CSS en el desarrollo de interfaces.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es una interfaz gráfica de usuario (GUI)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un sistema que permite interactuar con un computador mediante comandos escritos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un entorno que permite interactuar con el sistema mediante elementos gráficos como ventanas, íconos y menús.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un lenguaje de programación para diseñar páginas <em>web.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un sistema operativo especializado en gráficos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes es una característica de las interfaces gráficas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso exclusivo de comandos de texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Funcionamiento únicamente en servidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminación de la interacción con el usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Interacción basada en elementos gráficos y eventos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es uno de los principales objetivos del diseño de interfaces?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la complejidad del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la interacción del usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facilitar la interacción y comprensión del sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar completamente la programación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'La usabilidad en una interfaz se refiere principalmente a:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de funciones disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La facilidad con la que los usuarios pueden aprender y utilizar un sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de ventanas abiertas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tamaño del programa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes principios contribuye a una buena usabilidad?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consistencia en el diseño.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Uso de comandos complejos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminación de ayudas al usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Interfaces desordenadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'En aplicaciones de escritorio, un formulario se utiliza para:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar el sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mostrar y organizar los elementos con los que interactúa el usuario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Guardar archivos del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar bases de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes es un control común en un formulario?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Botón.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Servidor <em>web.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Protocolo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Compilador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué función cumple el <em>layout</em> en una interfaz?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar código JavaScript.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gestionar redes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organizar y distribuir los elementos dentro de la interfaz.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'Los cuadros de diálogo en una aplicación permiten:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar procesos del sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mostrar información o solicitar acciones al usuario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear archivos de programación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Configurar el <em>hardware</em> del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué lenguaje se utiliza principalmente para estructurar el contenido de una página <em>web</em>?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CSS',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Java',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'HTML',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'SQL',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la función principal de los formularios en aplicaciones <em>web</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar el estilo visual de la página.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recoger información ingresada por el usuario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ejecutar el sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear animaciones gráficas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué organización desarrolla estándares para la <em>web</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'IEEE',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'UNESCO',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'W3C',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Linux Foundation', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Cuál es el objetivo de los estándares <em>web</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limitar el acceso a los navegadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar compatibilidad y funcionamiento consistente entre navegadores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el uso de HTML.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el uso de CSS.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'La validación de código HTML permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Convertir HTML en Java.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar gráficos vectoriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ejecutar el programa más rápido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Verificar que el código cumpla con los estándares establecidos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué es un <em>framework front-end</em>?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un sistema operativo para servidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de herramientas y estructuras que facilitan el desarrollo de interfaces <em>web.</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un compilador de lenguajes de programación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un tipo de base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la función principal de CSS en el desarrollo <em>web</em>?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir el estilo y la apariencia de los elementos de la interfaz.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Gestionar bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ejecutar <em>scripts</em> del servidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estructurar el contenido de la página.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Cuál es la sintaxis básica de una regla CSS?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'etiqueta → valor', esCorrecta: false },
            {
              id: 'b',
              texto: 'selector { propiedad: valor; }',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'propiedad = valor',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'variable: función',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la forma recomendada de aplicar CSS en un proyecto <em>web</em> profesional?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CSS en línea',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'CSS interno',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'CSS externo mediante un archivo .css',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'CSS dentro de JavaScript',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué propiedad CSS se utiliza para cambiar el color del texto?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>color</em>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>background</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>font-style</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>opacity</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué técnica permite adaptar el diseño de una página <em>web</em> a diferentes tamaños de pantalla?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programación orientada a objetos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Media <em>queries.</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compilación de código.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Programación concurrente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con las interfaces gráficas de usuario, su diseño, usabilidad y aplicación en entornos de escritorio y <em>web.</em>',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
