import { TAGS } from "../data/tags.ts";
export const PROJECTS = [
    {
      title: "Sistema de Facturación",
      description:
        "Proyecto desarrollado a inicios de mi carrera, tiene un enfoque general con lo que respecta a un sistema de facturación, incluye una interfaz interactiva para que los ususarios puedan manejar este sistema de la manera más comoda, además este proyecto destaca por trabajar utilizando el patron MVC",
      github: "#",
      image: "/portafolio-personal/projects/sistema_facturacion.webp",
      tags: [TAGS.INDIVIDUAL, TAGS.JAVA, TAGS.MYSQL],
    },
    {
      title: "Control Asistencia Docente",
      description:
        "Este proyecto es una aplicación web diseñada específicamente para gestionar y controlar el registro de asistencia de empleados, con un enfoque particular en los docentes. La aplicación permite realizar un seguimiento detallado de la asistencia diaria, asegurando una gestión eficiente y precisa del personal. ",
      github: "https://github.com/melanieAlban/control-asistencia-docente",
      image: "/portafolio-personal/projects/asistencia_empleados.webp",
      tags: [
        TAGS.COLLABORATIVE,
        TAGS.PHP,
        TAGS.JS,
        TAGS.MYSQL,
        TAGS.HTML,
        TAGS.BOOTSTRAP,
      ],
    },
    {
      title: "API-Ecommerce",
      description:
        "API desarrollada para un sistema básico de Ecommerce, desarrollado como un proyecto universitario, principalmente enfocado en el uso de una base de datos relacional como lo es PostgreSQL",
      github: "https://github.com/IsmaelSailema20/API_project_ecommerce",
      image: "/portafolio-personal/projects/ecommerce.webp",
      tags: [TAGS.COLLABORATIVE, TAGS.NESTJS, TAGS.POSTGRESQL],
    },
    {
      title: "Jungletras",
      description:
        "Este proyecto es un juego de sopa de letras desarrollado en Java, que integra una variedad de componentes de interfaz gráfica para ofrecer una experiencia de usuario interactiva y atractiva. El juego permite a los usuarios buscar y seleccionar palabras en una cuadrícula de letras, ofreciendo una interfaz visual intuitiva y fácil de usar.",
      github: "https://github.com/W1llAn/ProyectoEstructuraFinal",
      image: "/portafolio-personal/projects/jungletras.webp",
      tags: [TAGS.COLLABORATIVE, TAGS.JAVA],
    },
    {
      title: "Pokedex",
      description:
        "Este es un proyecto web interactivo que permite a los usuarios explorar una lista de Pokémon, ver sus detalles y agregarlos a una lista de favoritos. Utiliza la API de pokemon (PokéAPI) para obtener información en tiempo real sobre los Pokémon y ofrece funcionalidades avanzadas como búsqueda, paginación y almacenamiento de favoritos",
      github: "https://github.com/IsmaelSailema20/PokedexProject",
      image: "/portafolio-personal/projects/pokedex.webp",
      tags: [TAGS.INDIVIDUAL, TAGS.REACT, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    },
  
    {
      title: "Landing Page - Veterinaria",
      description:
        "Esta es una landing page deasarrollada para una veterinaria local, la cual tiene como objetivo principal mostrar los servicios que ofrece la veterinaria, además de mostrar información relevante de la misma, como ubicación, horarios de atención, entre otros.",
      github: "https://github.com/IsmaelSailema20/Veterinary-WebProject",
      image: "/portafolio-personal/projects/veterinaria.webp",
      tags: [TAGS.INDIVIDUAL, TAGS.REACT, TAGS.ASTRO, TAGS.TAILWIND],
    },
  ];