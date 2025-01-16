

const ExperienceArray = () => {
  const experiences = [
    {
      company: "Inlaks LTD",
      role: "Software Engineer",
      description:
        "Inlaks is a global technology company that provides IT solutions and services across various sectors, including banking, financial services, telecommunications, and government. They offer a wide range of services such as system integration, software development, infrastructure management, and consulting. Inlaks is known for providing solutions that enable digital transformation, improve operational efficiency, and support business growth.",
      website: "https://www.inlaks.com/",
      image: "/assets/inlaks.jpg",
      startDate: "Nov 2023",
      endDate: "Present",
      tags: "Work",
      points: [
        "Implemented and customized Temenos T24 as Local Technical Architect(LTA), optimizing banking processes and ensuring regulatory compliance.",
        "Developed real-time interfaces using Kafka & DES for seamless system integration and enhanced operational efficiency.",
        "Utilized Docker, AIX, and Linux for scalable environment setup and deployment.",
        "Contributed to the Central Bank of Kenya T24 implementation, ensuring environment stability, maintenance, and deployment in line with national regulations.",
      ],
      badges: [
        {
          id: 1,
          name: "Contracted",
          color: "blue",
        },
        {
          id: 2,
          name: "Ongoing",
          color: "orange",
        },
      ],
    },
    {
      company: "App Town Technologies",
      role: "Full-Stack Developer",
      description:
        "App Town Technologies is a fintech firm that offers cutting-edge solutions for clients spanning different needs such as ecommerce",
      website: "https://atlke.com/",
      image: "/assets/atl.jpg",
      startDate: "Jan 2023",
      endDate: "Nov 2023",
      tags: "Work",
      points: [
        "Launched j-uza.com, an e-commerce platform using Next.js, Redux, Node.js, PostgreSQL, increasing sales by 40% in the first quarter.",
        "Engineered the frontend with Next.js and Redux, enhancing user interaction and reducing bounce rate by 25%",
        "Built a robust backend using Node.js and PostgreSQL, handling 1,000+ active users seamlessly.",
        "Integrated secure payment gateways (PayPal, Stripe) and optimized for 99.9% uptime and faster transaction processing.",
        "Developed a seller/vendor dashboard using React and Node.js, improving product management efficiency for 50+ vendors."
      ],
      badges: [
        {
          id: 1,
          name: "Contracted",
          color: "blue",
        },
        {
          id: 2,
          name: "Ongoing",
          color: "orange",
        },
      ],
    },
   
    
    {
      company: "What i do",
      role: "Full-Stack Developer",
      startDate: "Feb 2023",
      description: "What i do deals with helping people find their purpose in life. It provides a variety of resources and tools to help people explore their interests, talents, and values. The website also offers a community forum where people can connect with others who are on a similar journey.",
      image:
        "https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg",
      website: "https://whatido.app/",
      endDate: "July 2023",
      tags: "Work",
      points: [
        "Built a real-time audio chat feature for web applications, similar to Twitter Spaces or Clubhouse.",
        "Implemented a user-friendly interface for joining and participating in chat rooms",
        "Enabled users to create and customize their own chat rooms with topics, titles, and descriptions",
        "Built in features for users to raise their hand, mute and unmute themselves, and leave the chat room as needed",
        "Implemented a system for recording and saving chats, so users can listen back to past conversations",
        "Optimized the audio chat feature for performance and scalability, ensuring a smooth experience for all users regardless of the size of the chat room",
        "Built in features to allow users to share a link to the audioroom through any platform"
      ],
      badges: [
        {
          id: 1,
          name: "Contracted",
          color: "blue",
        },
        {
          id: 2,
          name: "Completed",
          color: "green",
        },
      ],
    },
    {
      company: "Ecospace Services LTD",
      role: "Full-Stack Developer",
      description:
        "Ecospace Services Limited is a geospatial firm that offers cutting-edge targeted spatial solutions and consultancy services in Land, Engineering Survey, Training, Drone Mapping, Technical Support, and Application Development among others.\nThe company has a team of experienced professionals who are committed to providing quality services to their clients.\nEcospace Services Limited is a reliable partner for businesses of all sizes.",
      website: "https://espace.co.ke/",
      image: "/assets/Ecospace.jpg",
      startDate: "Jan 2022",
      endDate: "July 2023",
      tags: "Work",
      points: [
        "Developed mobile and web applications from concept to launch, using technologies such as ReactJS, NodeJS and Flutter",
        "Led the design and development of multiple enterprise-level microservice applications",
        "Worked closely with clients to understand their needs and requirements for geospatial solutions, and incorporated feedback into the development process",
        "Designed and implemented custom maps and geospatial tools for a variety of industries, including agriculture, transportation, and natural resource management",
      ],
      badges: [
        {
          id: 1,
          name: "Contracted",
          color: "blue",
        },
        {
          id: 2,
          name: "Completed",
          color: "green",
        },
      ],
    },
    {
      company: "Nywele Nyumbani",
      role: "Front End Developer",
      description:
        "Nywele Nyumbani is an online platform connecting clients to the beauticians of their choice, and allowing for their beauty needs to be met in the comfort of their homes",
      website: "https://home.nywelenyumbani.co.ke/",
      image: "/assets/nywele.png",
      startDate: "December 2020",
      endDate: "January 2023",
      tags: "Internship",
      points: [
        "Developed the UI for the Nywele Nyumbani's website and mobile app",
        "Designed and implemented responsive and intuitive user interfaces that optimized the user experience for both clients and hair stylists",
        "Implemented an efficient and easy-to-use booking and scheduling system, with features such as appointment reminders and cancellation policies",
      ],
      badges: [
        {
          id: 1,
          name: "Internship",
          color: "blue",
        },
        {
          id: 2,
          name: "Completed",
          color: "green",
        },
      ],
    },
    {
      company: "JKUAT",
      role: "Embedded Systems Engineer",
      description: "JKUAT stands for Jomo Kenyatta University of Agriculture and Technology. It is a public university in Kenya that was founded in 1981. The university is located in Juja, 36 kilometers northeast of Nairobi. JKUAT offers a wide range of courses in agriculture, engineering, science, commerce, management, and building sciences. The university has a strong research interest in the areas of biotechnology and engineering. ",
      website:
        "https://www.jkuat.ac.ke/jkuat-students-among-winners-of-kenya-space-agency-research-grant/",
      image: "/assets/jkuat.png",
      startDate: "June 2021",
      endDate: "Oct 2021",
      tags: "School",
      points: [
        "Participated in a government-sponsored research grant project focused on developing an engineering model for a nanosatellite",
        "Built a web application and mobile application to display real-time data from the nanosatellite. Developed user-friendly interfaces and integrated APIs for data visualization",
        "Served as an embedded engineer, responsible for setting up the communication system for the nanosatellite. Implemented protocols and systems to ensure seamless data transmission",
        "Prepared technical documentation, progress reports, and presentations for stakeholders, highlighting the project's achievements, challenges, and future recommendations",
        " Demonstrated strong problem-solving skills by identifying and addressing technical issues during the development and testing phases of the project",
      ],
      badges: [
        {
          id: 1,
          name: "School",
          color: "blue",
        },
        {
          id: 2,
          name: "Completed",
          color: "green",
        },
      ],
    },
    {
      company: "Kicks and Heels",
      role: "Full-Stack Developer",
      startDate: "Aug 2020",
      description: "Kicks and Heels is an online shoe retailer in Kenya that offers a diverse collection of footwear to shop from. They offer home delivery, a safe and secure checkout and payment & overally a seamless customer experience.",
      image: "/assets/kicks.jpg",
      endDate: "Dec 2022",
      website: "http://kicksnheels.co.ke/",
      tags: "Work",
      points: [
        "Single-handedly developed and deployed the Kicks and Heels ecommerce app using Flutter, NodeJS, MongoDB and AWS",
        "Integrated payment gateways, shipping providers, and other thirdparty services to provide a comprehensive shopping experience for customers",
        "Actively sought out and implemented opportunities to improve platform performance and user experience, including optimizing database queries and caching frequently accessed data",
        "Designed and implemented scalable and robust backend services, including user authentication, product catalog management, and order processing and fulfillment"
      ],
      badges: [
        {
          id: 1,
          name: "Co-Founder",
          color: "purple",
        },
        {
          id: 2,
          name: "Solo dev",
          color: "teal",
        },
        {
          id: 3,
          name: "Completed",
          color: "green",
        },
      ],
    },
    {
      company: "Gearbox LTD",
      role: "Electronics Eng. Intern",
      description:
        "Gearbox LTD is a company that aims to improve the ecosystem for hardware entrepreneurship in Africa. They provide flexible working space, shared prototyping facilities, training in manufacturing, fabrication and design as well as mentorship, availing of investment opportunities, incubation and acceleration, and community development.",
      image: "/assets/gearbox.png",
      startDate: "Aug 2018",
      endDate: "Oct 2019",
      website: "https://www.gearbox-europlacer.com/",
      tags: "Internship",
      points: [
        "Trained in Embedded Systems which involved gaining skills in C++ programming language and interconnecting electrical devices to the internet",
        "Trained in Internet of Things (IoT) and subsequently designed and developed an IoT app using Flutter",
        "Created a mobile app which automated various facilities within the establishment such as automating the lighting system",
        "Developed an app that used Geolocation to allow users to get services near them such as Plumbing, electrician, mechanic and laundry services",
      ],
      badges: [
        {
          id: 1,
          name: "Internship",
          color: "blue",
        },
        {
          id: 2,
          name: "Completed",
          color: "green",
        },
      ],
    },
   
   
  ];

  return experiences;
};

export default ExperienceArray;
