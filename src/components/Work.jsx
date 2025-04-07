import { motion } from "framer-motion";
import { useState } from "react";
import "./Work.css";
import Airbnb from "../assets/Airbnb.png";
import TravelBooking from "../assets/TravelBooking.png";

const projects = [
  {
    img: Airbnb,
    title: "🏠 Airbnb Clone",
    details: [
      "Developed a full-stack Airbnb clone with user login, property listings, and a booking system.",
      "Secure authentication for user sign-up and login.",
      "Optimized performance and state management using React and Redux.",
    ],
  },
  {
    img: TravelBooking,
    title: "🌍 Travel Booking",
    details: [
      "Designed a modern, user-friendly travel booking website with a responsive layout.",
      "Implemented an interactive UI for searching destinations and accommodations.",
      "Included filtering options to help users find the best travel deals.",
    ],
  },
];

function Work() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="work">
      <h2 className="worksTitle">💻 My Projects</h2>
      <p className="workDesc">
        UI/UX design to build dynamic and responsive web applications
      </p>

      <div className="slider">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-slide ${
              selectedIndex === index ? "active" : ""
            }`}
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{
              scale: selectedIndex === index ? 1 : 0.9,
              opacity: selectedIndex === index ? 1 : 0.5,
            }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={project.img} className="worksImg" alt={project.title} />
            <div className="project-text">
              <h3>{project.title}</h3>
              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Work;
