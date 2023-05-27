

const ProjectsArray = () => {
 
  const projects = [
    {
      "name": "Kicks and Heels",
      "tags": "Work",
      "description": "Developed and deployed the Kicks and Heels ecommerce app using Flutter, NodeJS, MongoDB and AWS",
      "image": "/assets/kicks.jpg",
      "badges": [
        
        {
          id:2,
          name: "Completed",
          color: "green"
        }
      ],
      "link": "https://kicksnheels.co.ke/",
      
    },
    {
      "name": "Nanosatellite Dashboard",
      "tags": "School",
      "description": "Built a web application to display real-time data from the nanosatellite.",
      "image": "/assets/nanosat.png",
      "badges": [
       
        {
          id:2,
          name: "Completed",
          color: "green"
        }
      ],
      "link": "https://tafitiproject.web.app/dashboard/app",
      "github": "https://github.com/timndichu/NanosatReactApp"
      
    },
    {
      "name": "Nywele Nyumbani website",
      "tags": "Internship",
      "description": "Built a web application to help connect clients to hair stylists",
      "image": "/assets/nywele.png",
      "badges": [
       
        {
          id:2,
          name: "Completed",
          color: "green"
        }
      ],
      "link": "https://home.nywelenyumbani.co.ke/",
      
    },

    {
      "name": "Land Cover Collection App",
      "tags": "Work",
      "description": "Built a mobile application to help the Kenyan government in collecting geospatial data",
      "image": "/assets/ecofield.png",
      "badges": [
       
        {
          id:2,
          name: "Completed",
          color: "green"
        }
      ],
      "link": "https://play.google.com/store/apps/details?id=com.ksa.lcccollect",
      
    },

    {
      "name": "What i do social media platform",
      "tags": "Work",
      "description": "Working on a social media platform that helps connect professionals and allows them to express themselves in a casual way.\nIn particular, working on an audioroom chatroom feature like Twitter Spaces",
      "image": "/assets/whatido2.PNG",
      "badges": [
        {
          id:1,
          name: "Ongoing",
          color: "orange"
        }
      ],
      "link": "https://whatido.app",
      
    }


  ]

  return projects;
};

export default ProjectsArray;
