import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "3D Visualizer",
      icon: web,
    },
    {
      title: "CGI lighting artist",
      icon: mobile,
    },
    {
      title: "Virtual Cloth design artist",
      icon: backend,
    },
    {
      title: "3D Product Animator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Primary Education",
      company_name: "St.Joseph's North Point",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2016 - 2022",
      points: [
        "Particapted in Annual Science fair",
        "10th grade Basketball team",
        "Assisting campus visitors in many social events",
        "Participated in Annual School Play in the dance group",
      ],
    },
    {
      title: "Hobby",
      company_name: "Basketball",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2016-present",
      points: [
        "Was a part of my highschool Basketball team",
        "Particapated in staff vs students",
        "Represented my college St.Joseph's University in the Mizo Students Association Basketball tournament 2023 in Team Thuaizball",
        "Particapted in 2 three point shooting contest and came 4th place.",
      ],
    },
    {
      title: "Field of Interest",
      company_name: "3D Generalist",
      icon: shopify,
      iconBg: "#383E56",
      date: "2021-present",
      points: [
        "Intermediate knowledge in modelling, PBR texturing, and basic cloth simulations",
        "Ability to make basic cloths like hoodie,shirt,pants,dress in Marvellous Designer",
        "Using EXR cryptomatte layers to individually color correct 3D scenes in Aftereffects",
        "Intermediate knowledge in rendering with UnrealEngine's Lighting and PBR texturing,as well as the CineCamera movements",
      ],
    },
    {
      title: "Industry Experience",
      company_name: "MediaMonks & RealityXLight",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2023 & June 2024",
      points: [
        "Gained Experience within the corporate office of Mediamonks, how the clients spend their days, how they deal with different 3D workflows",
        "Interacted with the employees, how they got to the office, what was their portfolio like",
        "Gained another experience in Mizoram, and learned how about time managements and deadlines",
        "Learned the industry workflows like EXR rendering, Aftereffects compositing, and many more ",
      ],
    },
  ];
  
  const testimonials = [
    
    {
      testimonial:
        "During his internship programe with us, he explored different processes and was found deligent,hardowrking and inquisitive",
      name: "John Paite",
      designation: "Chief Creative officer(Art&Tech)",
      company: "MediaMonks",
      image: "./testimonial/John-Paite.jpeg",
    },
    {
      testimonial:
        "He is a good master, I dont know what he does on his desktop but he works really hard for his future.",
      name: "Buanga",
      designation: "CEO of Dogs",
      company: "Xeia",
      image: "./testimonial/Buanga.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "Samsung Galaxy Book 2",
      description:
        "A fan animation showcase of my workflow wih Blender and Aftereffect for a fairly average product animation",
      tags: [
        {
          name: "3D",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
        {
          name: "Adobe",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.instagram.com/reel/C6ZNWbIS2c9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      name: "Porsche Spyder Project",
      description:
        "A fan animation for Porsche Spyder where I first use UnrealEngine 5 for my renders with the addition of Blender and AfterEffects",
      tags: [
        {
          name: "UnrealEngine",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
        {
          name: "Adobe",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.instagram.com/p/C2SSbdCyGSc/?hl=en",
    },
    {
      name: "Pwnisher",
      description:
        "My first time particapting in Pwnisher's challenges, done in 3 days with Blender, Marvellous Designer and further cryptomatte compositing in Aftereffects",
      tags: [
        {
          name: "Blender",
          color: "blue-text-gradient",
        },
        {
          name: "AfterEffects",
          color: "green-text-gradient",
        },
        {
          name: "Marvellous Designer",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.instagram.com/p/C_fSD4VSbTv/?hl=en",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };