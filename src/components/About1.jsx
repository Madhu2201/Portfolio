import { motion } from "framer-motion";
import "./About1.css";
import studyImage from "../assets/study.png";

function About1() {
  const educationData = [
    {
      degree: "Full Stack Developer",
      institution: "GUVI GEEK NETWORK PRIVATE LIMITED",
      year: "2023 - 2024",
      Percentage: "85.10%",
    },
    {
      degree: "Bachelor of Engineering",
      institution: "ARJ College of Engineering and Technology",
      year: "2015 - 2019",
      Percentage: "64%",
    },
    {
      degree: "Higher Secondary",
      institution: "Bharathidasan Hr.Sec School",
      year: "2014-2015",
      Percentage: "73%",
    },
  ];

  return (
    <motion.div
      id="about"
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Side - Education */}
      <motion.div
        className="education-container"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="education-title">🎓 Education</h2>
        <ul className="education-list">
          {educationData.map((edu, index) => (
            <motion.li
              key={index}
              className="education-item"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">
                <p className="education-institution">{edu.institution}</p>
              </p>
              <p className="education-year">{edu.year}</p>
              <p className="education-percentage">{edu.Percentage}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="image-container"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={studyImage}
          alt="Study Illustration"
          className="study-image"
        />
      </motion.div>
    </motion.div>
  );
}

export default About1;
