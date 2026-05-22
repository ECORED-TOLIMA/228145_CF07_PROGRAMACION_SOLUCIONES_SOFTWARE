export default {
  global: {
    Name: 'Diseño e implementación de interfaces gráficas',
    Description:
      'Este componente aborda los fundamentos del diseño e implementación de interfaces gráficas de usuario en aplicaciones de escritorio y <em>web</em>. Se analizan principios de usabilidad, formularios, elementos de interacción, estructura de páginas <em>web</em>, estándares de desarrollo y uso de hojas de estilo CSS, con el fin de comprender cómo construir interfaces funcionales, organizadas y perceptiblemente adecuadas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de las interfaces gráficas de usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características de las interfaces gráficas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios de diseño en interfaces gráficas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Usabilidad en interfaces',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Interfaces gráficas en aplicaciones de escritorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Formularios en aplicaciones de escritorio',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Controles u objetos de un formulario',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Organización y disposición de controles <em>(layout)</em>',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Cuadros de diálogo, menús y barras de herramientas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Interfaces gráficas en aplicaciones <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Estructura de páginas <em>web</em> y uso de etiquetas HTML',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Formularios y componentes de formularios en aplicaciones <em>web</em>',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estándares y <em>frameworks</em> para interfaces <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estándares del W3C y validación de código',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              '<em>Frameworks front-end</em> para el desarrollo de interfaces',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Hojas de estilo para el diseño de interfaces',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto y sintaxis de hojas de estilo CSS',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Aplicación de estilos en interfaces <em>web</em>',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'CSS',
      significado:
        'lenguaje utilizado para definir la presentación visual de una página web, incluyendo colores, tipografías, márgenes y disposición de elementos.',
    },
    {
      termino: 'Framework front-end',
      significado:
        'conjunto de herramientas y librerías que facilitan el desarrollo de interfaces web mediante componentes reutilizables y estructuras predefinidas.',
    },
    {
      termino: 'Formulario',
      significado:
        'elemento de una interfaz que permite la entrada de datos por parte del usuario mediante campos, botones y otros controles.',
    },
    {
      termino: 'HTML',
      significado:
        'lenguaje de marcado utilizado para estructurar el contenido de las páginas web mediante etiquetas.',
    },
    {
      termino: 'Interfaz gráfica de usuario (GUI)',
      significado:
        'entorno visual que permite la interacción entre el usuario y un sistema mediante elementos gráficos como botones, ventanas e íconos.',
    },
    {
      termino: 'Layout (disposición)',
      significado:
        'organización y distribución de los elementos dentro de una interfaz para mejorar la usabilidad y la comprensión visual.',
    },
    {
      termino: 'Menú',
      significado:
        'elemento de la interfaz que presenta opciones de navegación o acciones disponibles dentro de una aplicación.',
    },
    {
      termino: 'Principios de diseño',
      significado:
        'conjunto de reglas y buenas prácticas que orientan la creación de interfaces funcionales, estéticas y fáciles de usar.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'nivel de facilidad con el que un usuario puede interactuar con una interfaz para cumplir sus objetivos de manera eficiente.',
    },
    {
      termino: 'Validación de código',
      significado:
        'proceso de verificación del código fuente para asegurar que cumple con estándares establecidos y funciona correctamente.',
    },
    {
      termino: 'Web',
      significado:
        'sistema de documentos e información enlazados que se acceden a través de Internet mediante navegadores.',
    },
    {
      termino: 'Ventana',
      significado:
        'espacio gráfico dentro de una aplicación donde se presentan contenidos o se realizan acciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Date, C. J. (2019). Database design and relational theory: Normal forms and all that jazz (2nd ed.). Apress.',
      link: '',
    },
    {
      referencia:
        'DeBarros, A. (2022). Practical SQL: A beginners guide to storytelling with data (2nd ed.). No Starch Press.',
      link: '',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Frameworks del front-end.',
      link: 'https://www.youtube.com/watch?v=Z-YzV72qq4o',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). HTML5.',
      link: 'https://www.youtube.com/watch?v=utbiQXbo9PY',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Aplicando el CSS.',
      link: 'https://www.youtube.com/watch?v=_qlj_FyUR-w',
    },
    {
      referencia:
        'Forta, B. (2020). SQL in 10 minutes a day, Sams teach yourself (5th ed.). Sams Publishing.',
      link: '',
    },
    {
      referencia:
        'Fowler, M. (2012). Patterns of enterprise application architecture (18th printing). Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'Hernández, M. J. (2013). Database design for mere mortals: A hands-on guide to relational database design (3rd ed.). Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (s. f.). ISO 8601.',
      link: '',
    },
    {
      referencia:
        'Jakob Nielsen. (s. f.). Usability engineering and interface design principles. Nielsen Norman Group.',
      link: '',
    },
    {
      referencia:
        'Microsoft. (2024). Transact-SQL reference (Database Engine). Microsoft Learn.',
      link: 'https://learn.microsoft.com/en-us/sql/t-sql/language-reference',
    },
    {
      referencia:
        'Norman, D. A. (2013). The design of everyday things (Revised and expanded edition). Basic Books.',
      link: '',
    },
    {
      referencia:
        'Ramakrishnan, R., & Gehrke, J. (2003). Database management systems (3rd ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Sadalage, P. J., & Fowler, M. (2012). NoSQL distilled: A brief guide to the emerging world of polyglot persistence. Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7th ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Wierzbicki, A. (2021). SQL for data analysis: Advanced techniques for transforming data into insights. O’Reilly Media.',
      link: '',
    },
    {
      referencia: 'World Wide Web Consortium. (s. f.). W3C standards.',
      link: '',
    },
    {
      referencia:
        'Web Hypertext Application Technology Working Group. (s. f.). Welcome to the WHATWG community. ',
      link: 'https://whatwg.org/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarría Orozco',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
