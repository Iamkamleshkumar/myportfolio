import facedetector4 from "./assets/portfolioImages/face-detector4.png"
import Book1 from "./assets/portfolioImages/Book1.png"
import game1 from "./assets/portfolioImages/game1.png"
import wristband1 from "./assets/portfolioImages/wristband1.png"

const ProjectsData = [

  {
    id: "Face-Detector",
    img: facedetector4,
    img2: facedetector4,
    name: "Face Detector Full Stack Application",
    Tech: "Reactjs | Node.js | Express.js | PostgreSQL | Figma",
    date: "Aug 2022 - Sep 2022",
    live: "https://adamazizi10.github.io/face-detector/",
    source: "https://github.com/adamazizi10/face-detector-frontend",
    description1:
      "Developed a secure and scalable web application using Reactjs, Node.js, Express.js, and PostgreSQL to detect faces in images using Clarafai’s Face Recognition API, resulting in an accurate and efficient detection rate of 97%",
    description2:
      "Implemented a robust registration system with frontend and backend validation to ensure maximum security",
    description3:
      "Users are able to keep track of their face detection entries, change password and profile info",
    description4:
      "Created user-friendly profile pages that enable users to manage their detection entries, change passwords, and view relevant information with ease",

    description5:
      "Designed and implemented a secure and scalable web application using a tech stack comprising Reactjs, Node.js, Express.js, and PostgreSQL. Leveraging Clarafai’s Face Recognition API, the system achieves an impressive 97% accuracy in detecting faces in images, showcasing a high level of precision and efficiency in image recognition technology.",

    description6:
      "Established a robust registration system that prioritizes security through meticulous frontend and backend validation processes. This system ensures that user data remains protected, reflecting a dedication to creating a trustworthy and secure environment for user registration and engagement.",

    description7:
      "Authorized users with comprehensive control over their account activities by enabling features such as tracking face detection entries, facilitating password changes, and updating profile information. This user-centric approach enhances the overall experience, showing a sense of ownership and personalization within the application.",

    description8:
      "Created user-friendly profile pages that seamlessly integrate with the web application, providing an intuitive interface for users to manage their face detection entries, change passwords, and access relevant information effortlessly. This emphasis on user experience promotes accessibility and ease of use, enhancing overall user satisfaction and engagement."
  },
  {
    id: "PongGame",
    img: game1,
    img2: game1,
    name: "Full Stack Application with Multiplayer Pong Game",
    Tech: "Reactjs | Django | SQLite | Python | Figma | Websockets",
    date: "Sep 2023 - Nov 2023",
    live: "",
    source: "https://github.com/adamazizi10/Multiplayer-Pong-Game",
    description1:
      "Created an online multiplayer pong game enabling participation of up to 8 guest or registered players at once",
    description2:
      "Utilized Reactjs for frontend and Django for backend, to create the account system allowing players to save and view their match history as well as the access a dynamic leaderboard",
    description3:
      "Implemented WebSocket technology in JavaScript to enable real-time multiplayer functionality for the game",
    description4:
      "Added authTokens to enhance session management, ensuring secure player tracking and efficient management of game room IDs",
    description5:
      "Developed and deployed a cutting-edge online multiplayer pong game, elevating the gaming experience by accommodating up to 8 concurrent players, whether they are guests or registered users. The emphasis was on creating a seamless and engaging platform for players to connect and compete in real-time.",

    description6:
      "Employed Reactjs for the frontend and Django for the backend, crafting a robust account system that empowers players to not only participate in exhilarating matches but also save and review their match history. The incorporation of a dynamic leaderboard adds a competitive edge, showing a sense of achievement and recognition within the gaming community.",

    description7:
      "Integrated WebSocket technology in JavaScript, a pivotal step in achieving real-time multiplayer functionality for the game. This technology facilitates instantaneous communication, creating an immersive gaming environment where players can experience the thrill of live competition with minimal latency.",

    description8:
      "Implemented authTokens to elevate session management, ensuring a secure and efficient way to track players and manage game room IDs. This addition not only enhances the overall security of player data but also streamlines the gaming experience by providing a stable and reliable framework for tracking player activity and ensuring seamless transitions within the gaming environment."
  },
  {
    id: "capstoneWristband",
    img: wristband1,
    img2: wristband1,
    name: "Parkinson Disease Detection Wristband with Full Stack GUI",
    Tech: "Python | React.js | Node.js | Express.js | Figma",
    date: "Sep 2023 - Dec 2023",
    live: "",
    source: "https://github.com/adamazizi10/Frontend-ParkinsonWristband",
    description1:
      "Engineered a Parkinson's Disease Simulation and detection wristband by utilizing motors on two rails controlled by an ESP32 microcontroller and MPU6050 motion-tracker to retrieve accelerometer data",
    description2:
      "Implemented the K-Nearest Neighbours Machine Learning algorithm to assess Parkinson's severity from the data and categorizing it as None, Low, Medium, or High",
    description3:
      "Developed the GUI using React.js and Node.js for interaction and 3D visualization of Parkinson's detection results, and an account system for healthcare professionals, assigning each doctor a dashboard for patient profile management",
    description4:
      "Secured seamless data transfer with RESTful APIs, utilizing password hashing and salting for robust user account protection",

    description5:
      "Engineered a fully functional Parkinson's Disease Simulation and detection wristband, employing innovative technologies such as motors on two rails controlled by an ESP32 microcontroller and an MPU6050 motion-tracker to capture precise accelerometer data. This meticulous approach ensures accuracy and reliability in detecting Parkinson's Disease symptoms.",

    description6:
      "Implemented the K-Nearest Neighbours Machine Learning algorithm to analyze accelerometer data and assess Parkinson's severity. The system intelligently categorizes the severity into distinct levels of None, Low, Medium, or High, providing valuable insights for healthcare professionals in evaluating and managing patients' conditions effectively.",

    description7:
      "Developed an intuitive graphical user interface (GUI) using React.js and Node.js, facilitating user interaction and 3D visualization of Parkinson's detection results. Additionally, a sophisticated account system tailored for healthcare professionals was created, assigning each doctor a personalized dashboard for efficient patient profile management and data interpretation.",

    description8:
      "Ensured high security in data transfer through RESTful APIs, incorporating advanced measures such as password hashing and salting. This approach fortifies user account protection, guaranteeing the confidentiality and integrity of sensitive healthcare data. The emphasis on secure data handling reflects a commitment to maintaining the highest standards of privacy and confidentiality in healthcare applications.",
  },
  // {
  //   id: "Leaked-Password-Detector",
  //   img: pass1,
  //   img2: pass2,
  //   name: "Leaked Password Detector | Python Scripting",
  //   Tech: "Python | SHA-1 Hashing",
  //   date: "Apr 2023 - May 2023",
  //   live: "",
  //   source: "https://github.com/adamazizi10/Leaked-Password-Detector",
  //   description1:
  //   "Developed a password detector using Python and libraries such as requests and hashlib that enables users to verify if their passwords have been compromised, resulting in improved online security for users",
  //   description2: 
  //   "Achieved a reliable and accurate password check rate of 95% by integrating the application with the pwned passwords API and implementing SHA-1 hashing for password encryption",
  //   description3:  
  //   "Implemented a command-line interface for secure password checking, enabling users to avoid typing their full password on the web and minimizing the risk of sensitive information exposure",
  //   description4:  
  //   "",
  //   description5:  
  //   "",
  //   description6:  
  //   "",
  // },
  // {
  //   id: "E-Portfolio",
  //   img: PortfolioPic,
  //   img2: PortfolioPic2,
  //   name: "E-Portfolio",
  //   Tech: "Reactjs | Hooks | Redux",
  //   date: "Sep 2022 - Oct 2022",
  //   live: "https://adamazizi.ml/",
  //   source: "https://github.com/adamazizi10/react-portfolio",
  //   description1:
  //   "Utilized Redux to manage state and improve application performance by minimizing the number of unnecessary re-renders",
  //   description2: 
  //   "Implemented React Hooks, such as useState and useEffect, to simplify the management of component state and lifecycle methods",
  //   description3:  
  //   "Employed responsive design principles and CSS media queries to ensure optimal rendering and user experience across a wide range of devices and screen sizes",
  //   description4:  
  //   "Utilized React Router to create a smooth, seamless navigation experience, allowing users to easily move between pages without needing to refresh the entire page",
  //   description5:  
  //   "Incorporated React components and props to organize and modularize code, improving readability and maintainability of the project",
  //   description6:  
  //   "",
  // },
  {
    id: "Bookstore",
    img: Book1,
    img2: Book1,
    name: "Bookstore Management App",
    Tech: "Java | Object Oriented Programing | Figma",
    date: "Mar 2022 - Apr 2022",
    live: "",
    source: "https://github.com/adamazizi10/Bookstore-Management-System",
    description1:
      `Utilized Java Swing to design a user-friendly and responsive graphical user interface that allows administrators to manage books, users, and orders with ease`,
    description2:
      "Designed and implemented a database schema using Java Database Connectivity (JDBC) to store and retrieve information about books, users, and orders in an efficient and organized manner",
    description3:
      "Implemented an authentication and authorization system using Java's built-in security libraries to ensure that only authorized users can access sensitive data",
    description4:
      "Collaborated on the visual design using Figma, ensuring an intuitive and aesthetically pleasing user interface, enhancing the overall user experience of the Bookstore Management App.",
    description5:
      "Utilized Java Swing to meticulously craft a user-friendly and responsive graphical user interface (GUI) for the Bookstore Management App. This GUI empowers administrators by providing a seamless platform to manage books, users, and orders with unparalleled ease, emphasizing efficiency and user satisfaction.",

    description6:
      "Architected a robust and organized database schema using Java Database Connectivity (JDBC), ensuring the systematic storage and retrieval of information related to books, users, and orders. This meticulous approach enhances the application's performance and responsiveness, contributing to a streamlined and efficient Bookstore Management system.",

    description7:
      "Implemented a secure authentication and authorization system leveraging Java's built-in security libraries. This system guarantees that only authorized users can access sensitive data, reinforcing the integrity and confidentiality of the information stored within the Bookstore Management App, aligning with the highest standards of data security.",

    description8:
      "Collaborated on the visual design aspect using Figma, contributing to an intuitive and aesthetically pleasing user interface. This collaborative effort ensures that the Bookstore Management App not only meets functional requirements but also provides an engaging and visually appealing experience for administrators, thereby enhancing the overall usability and user satisfaction of the application.",
  },
];

const exportObject = {
  ProjectsData,
};

export default exportObject;