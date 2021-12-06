export default {
  global: {
    componenteFormativo:
      'Simulación de gemelos digitales de sistemas mecatrónicos',
    descripcionCurso:
      'Este componente formativo tiene como objetivo guiar al estudiante en el desarrollo de habilidades y destrezas en el proceso de simulación y validación de gemelos digitales de sistemas mecatrónicos a través de la aplicación MCD (Mecatrónica Conceptual para Diseñadores). Desde la biblioteca de reutilización, podrá agregar cuerpos de movimiento, sensores, actuadores, cuerpos de colisión y otras propiedades físicas que le permitirán realizar análisis cinemático y dinámico de cada componente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Configuración de componentes del sistema mecatrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Panel de herramientas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Comandos para la configuración de componentes mecánicos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Configuración de sistema eléctrico',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Simulación basada en operaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Bloque de expresiones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Editor de secuencias',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  icono: 'fas fa-sitemap',
      //  titulo: 'Sintesis',
      //  nombreRuta: 'sintesis',
      //},
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alcrudo, J. (19 de Abril de 2021 ). Academia.edu. Obtenido de ',
      link: 'https://www.academia.edu/29809639/FORMACION_NX_CAD_BASICO',
    },
    {
      referencia:
        '3splus. (16 de Julio de 2018). Tutorial Básico introductorio a modelado CAD NX 10. Obtenido de ',
      link: 'https://youtu.be/iGTENoC7ryg',
    },
    {
      referencia:
        'Aguilar, L. J. (2017). INDUSTRIA 4.0 "LA CUARTA REVOLUCION INDUSTRIAL". Mexico: Alfaomega. Canal de youtube Jonathan Andres Graciano Uribe. (21 de 10 de 2021). Obtenido de ',
      link: 'https://youtu.be/IhRoPvrUmbw',
    },
    {
      referencia:
        'Canal de Youtube roger restrepo. (21 de 10 de 2021). Obtenido de ',
      link: 'https://youtu.be/h9zrCpJwVyQ',
    },
    {
      referencia:
        'Inge, L. (s.f.). unidad 2 ensambles utilizando NX. Obtenido de ',
      link: 'https://youtu.be/J5h38RBj_hI',
    },
    {
      referencia:
        'Instituto-Mariano. (20 de Noviembre de 2019). NX Curso drawing y acotado FMC0 M01. Obtenido de ',
      link: 'https://youtu.be/pFcMlBL5Ps0',
    },
    {
      referencia:
        'Ming, C. L., Wenjin , T., Amir, G., & Krishna, K. (2019). NX 12 for Engineering Design. MO 65409, USA. ',
    },
    {
      referencia:
        'Mundo-Turorial/Turorial-world. (10 de Octubre de 2017). Siemens NX. Pieza 3D. Tutorial. Obtenido de ',
      link: 'https://youtu.be/UeJ1Yegal9E',
    },
    {
      referencia:
        'Sham, T. (2018). Siemens NX 12.0 for Designers (11th Edition). Schererville, Indiana 46375, USA: CADCIM Technologies. ',
    },
    {
      referencia: 'Siemens. (2019). Introduccion a NX MCD: Course:DI-VIRTCOM. ',
    },
    {
      referencia:
        'Siemens. (Abril de 2020). Documentación didactica para cursos de formación "DigitalTwin@Education Module 150-004" ',
    },
    {
      referencia: 'Siemens. (21 de 10 de 2021). Obtenido de ',
      link:
        'https://docs.sw.siemens.com/es-ES/product/209349590/doc/PL20200507135732916.mechatronics/html/id1101745',
    },
  ],
  glosario: [
    {
      termino: 'Acopladores',
      significado:
        'Elementos mecánicos que permiten transmitir movimiento entre componentes de una máquina. Entre estos se encuentran engranajes el sistema cremallera piñón, poleas y correas y levas mecánicas.',
    },
    {
      termino: 'Adaptador de señales',
      significado:
        'Convierte a través de señales un tipo de movimiento a otro y crea señales de entrada y salida para la comunicación con el PLC_SIMAdvanced.',
    },
    {
      termino: 'Bloque de expresiones',
      significado:
        'Facilita la asignación de las variables de entrada, salida y la relación entre ellas durante la ejecución de un proceso.',
    },
    {
      termino: 'Cuerpo Rígido',
      significado:
        'Define las propiedades físicas como la masa, inercia a un componente mecánico del modelo funcional.',
    },
    {
      termino: 'Cuerpo de colisión',
      significado:
        'Define un cuerpo con propiedades físicas que permiten detectar la colisión con otro cuerpo rígido.',
    },
    {
      termino: 'Control de posición',
      significado:
        'Permite limitar la posición de un cuerpo rígido a través de una junta de movimiento, las dos variables cinemáticas controladas con esta herramienta son posición y velocidad.',
    },
    {
      termino: 'Control de velocidad',
      significado:
        'Limita la velocidad de un componente mecánico dependiendo del tipo de junta definida entre los cuerpos rígidos.',
    },
    {
      termino: 'Editor de secuencias',
      significado:
        'Modifica y edita cada una de las operaciones para realizar un proceso, estas actividades (operaciones) pueden estar encadenadas unas con otras o pueden ejecutarse en forma independiente.',
    },
    {
      termino: 'MCD',
      significado:
        'Mecatrónica conceptual para diseñadores (MCD) es una aplicación que se utiliza para diseñar y simular de forma interactiva el movimiento complejo de los sistemas electromecánicos.',
    },
    {
      termino: 'Juntas de unión',
      significado:
        'Definen el tipo de movimiento entre los componentes de un sistema mecánico. Estas juntas pueden ser de revolución, deslizantes, cilíndricas, esféricas entre otras.',
    },
    {
      termino: 'Sensores de colisión',
      significado:
        'Activador de eventos que permite detectar el momento que dos cuerpos entran en contacto y activar una señal.',
    },
    {
      termino: 'Superficie de transporte',
      significado:
        'Define un sistema de transmisión por banda, para esto es necesario definir la superficie como un cuerpo de colisión.',
    },
  ],
  complementario: [
    {
      texto:
        '<b>Tema 1</b>: Configuración de componentes del sistema mecatrónico.<br>(Canal de youtube Jonathan Andres Graciano Uribe, 2021)',
      tipo: 'Video',
      link: 'https://youtu.be/IhRoPvrUmbw',
    },
    {
      texto:
        '<b>Tema 1</b>: Configuración de componentes del sistema mecatrónico.<br>(Canal de youtube Jonathan Andres Graciano Uribe, 2021)',
      tipo: 'Video',
      link: 'https://youtu.be/tgHJ6E6tVwc',
    },
    {
      texto:
        '<b>Tema 2</b>: Simulación basada en operaciones.<br>(Canal de Youtube roger restrepo, 2021)',
      tipo: 'Video',
      link: 'https://youtu.be/h9zrCpJwVyQ',
    },
    {
      texto:
        '<b>Tema 2</b>: Simulación basada en operaciones.<br>(Canal de Youtube roger restrepo, 2021)',
      tipo: 'Video',
      link: 'https://youtu.be/_6rF0kI6tBk',
    },
    {
      texto:
        '<b>Tema 1</b>: Configuración de componentes del sistema mecatrónico.<br><b>Tema 2</b>: Simulación basada en operaciones.<br>(Siemens, Documentación didáctica /para cursos de formación)',
      tipo: 'Documento electrónico',
      link:
        'https://docplayer.es/187820804-Documentacion-didactica-para-cursos-de-formacion.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Riveros',
        cargo: 'Experto Temático',
        centro: 'Centro diseño y metrología',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejia',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de gestión industrial',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de gestión industrial - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
