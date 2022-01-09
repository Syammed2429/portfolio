//SEO Related settings
const seo = {
  title: "Dada's Portfolio",
  description:
    "A passionate Full Stack Web Developer 🚀 having an experience of building web applications with JavaScript / ReactJS / NodeJS / ExpressJS and some other cool libraries and frameworks.",
  og: {
    title: "Dada Khalandar Portfolio",
    type: "website",
    url: "https://dada-khalandar-portfolio.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Dada Khalandar",
  logo_name: "Dada Khalandar",
  // nickname: "Muhd Khal Boy",
  subTitle:
    "A passionate Full Stack Web Developer 🚀 having an experience of building web applications with JavaScript / ReactJS / NodeJS / ExpressJS and some other cool libraries and frameworks.",

  resumeLink:
    "https://drive.google.com/file/d/1OQsmSz8GhBZQ-g5y7hpOqUxvz3LBb5Wz/view?usp=sharing",
  portfolio_repository: "https://github.com/kerrybli/portfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/kerrybli",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dada-khalandar/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/c/codingwithmrm",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000",
  // },
  {
    name: "Gmail",
    link: "mailto:kerry.blig12@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Kerry14066781",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/diana.adwa.96/",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/bestpicturesinweb/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Front End Tools",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building functionality front end websites",
        "⚡ Building reusable website components",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#2f74c0",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Back End Tools ",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining the websites on various deployment platforms",
        "⚡ Storing and managing the data on MongoDB",
        "⚡ Creating backend application  in NodeJs,&  Express ",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJs",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "silver",
          },
        },
        {
          skillName: "Railway",
          fontAwesomeClassname: "simple-icons:railway",
          style: {
            color: "#ffffff",
          },
        },
        {
          skillName: "HeroKu",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#79589f",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#e84d31",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "dark",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#499ebe",
          },
        },
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },

        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "dark",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI Frameworks",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Creating the responsive web application's for various devices",
      ],
      softwareSkills: [
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:materialui",
          style: {
            color: "#007fff",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952b3",
          },
        },
        {
          skillName: "Chakra Ui",
          fontAwesomeClassname: "simple-icons:chakraui",
          style: {
            color: "#44c8c1",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#44c8c1",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full-stack web applications projects and deploy them to various hosting sites using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile1.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Front End, Back End, Full Stack, React, JavaScript and OpenSource Development.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Guntakal, Dist.-Anantapur, Andhra Pradesh - 515801",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://bit.ly/3HYUMyH",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 6281774753",
  },
};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  projectsHeader,
  contactPageData,
};

// const kitchen = {
//   name: "kitchen",
//   purpose: "cook",
//   order: "meal",

//   cookFood() {
//     console.log(`Serving ${this.order} in 2 mins`);
//   },
// };

// const bedroom = {
//   name: "bedroom",
//   purpose: "sleep",
//   order: "magiee",

// };

// kitchen.cookFood.call(bedroom);
