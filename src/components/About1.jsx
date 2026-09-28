// import { motion } from "framer-motion";
// import "./About1.css";
// import studyImage from "../assets/study.png";

// function About1() {
//   const educationData = [
//     {
//       degree: "Full Stack Developer",
//       institution: "GUVI Geek Network Private Limited",
//       year: "2023 - 2024",
//       score: "85.10%",
//     },
//     {
//       degree: "Bachelor of Engineering",
//       institution: "ARJ College of Engineering and Technology",
//       year: "2015 - 2019",
//       score: "64%",
//     },
//     {
//       degree: "Higher Secondary",
//       institution: "Bharathidasan Hr. Sec School",
//       year: "2014 - 2015",
//       score: "73%",
//     },
//   ];

//   return (
//     <motion.section
//       id="about"
//       className="about-container"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <motion.div
//         className="education-container"
//         initial={{ x: 50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <div className="section-heading">
//           <span className="section-tag">Academic Journey</span>
//           <h2 className="education-title">Education</h2>
//         </div>

//         <ul className="education-list">
//           {educationData.map((edu, index) => (
//             <motion.li
//               key={index}
//               className="education-item"
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <div className="education-item-header">
//                 <h3 className="education-degree">{edu.degree}</h3>
//                 <span className="education-score">{edu.score}</span>
//               </div>

//               <p className="education-institution">{edu.institution}</p>

//               <div className="education-meta">
//                 <span className="education-year">{edu.year}</span>
//               </div>
//             </motion.li>
//           ))}
//         </ul>
//       </motion.div>

//       <motion.div
//         className="image-container"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         <img
//           src={studyImage}
//           alt="Study Illustration"
//           className="study-image"
//         />
//       </motion.div>
//     </motion.section>
//   );
// }

// export default About1;
import { motion } from "framer-motion";
import "./About1.css";
import studyImage from "../assets/study.png";

function About1() {
  const educationData = [
    {
      degree: "Full Stack Developer",
      institution: "GUVI Geek Network Private Limited",
      year: "2023 - 2024",
      score: "85.10%",
    },
    {
      degree: "Bachelor of Engineering",
      institution: "ARJ College of Engineering and Technology",
      year: "2015 - 2019",
      score: "64%",
    },
    {
      degree: "Higher Secondary",
      institution: "Bharathidasan Hr. Sec School",
      year: "2014 - 2015",
      score: "73%",
    },
  ];

  return (
    <motion.section
      id="about"
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="education-container"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="section-heading">
          <span className="section-tag">Academic Journey</span>
          <h2 className="education-title">Education</h2>
        </div>

        <ul className="education-list">
          {educationData.map((edu, index) => (
            <motion.li
              key={index}
              className="education-item"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="education-item-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <span className="education-score">{edu.score}</span>
              </div>

              <p className="education-institution">{edu.institution}</p>

              <div className="education-meta">
                <span className="education-year">{edu.year}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>

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
    </motion.section>
  );
}

export default About1;