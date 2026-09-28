import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Reactjs from "../assets/react.png";
import Mongodb from "../assets/mongodb.png";
import Nodejs from "../assets/nodejs.png";
import Github from "../assets/github.png";
import Postman from "../assets/postman.png";
import Express from "../assets/Express.png";
// import Git from "./assets/git.png";
import Typescript from "../assets/Typescript.png";
// import Redux from "./assets/redux.png";
import Tailwind from "../assets/Tailwindcss.png";
import Jwt from "../assets/Jwt.png";
// import Nextjs from "./assets/nextjs.png";
import "./Skills.css";
function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">Skills</span>
      <div className="skillDesc">
        Frontend Developer | React & UI/UX Enthusiast
      </div>
      <div className="skillBars">
        {/* <img src={Html} className="skillImg" />
        <img src={Css} className="skillImg" />
        <img src={Javascript} className="skillImg" />
        <img src={Reactjs} className="skillImg" />
        <img src={Mongodb} className="skillImg" />
        <img src={Nodejs} className="skillImg" />
        <img src={Github} className="skillImg" />
        <img src={Postman} className="skillImg" /> */}
     <img src={Html} className="skillImg" />
<img src={Css} className="skillImg" />
<img src={Javascript} className="skillImg" />
<img src={Reactjs} className="skillImg" />
<img src={Mongodb} className="skillImg" />
<img src={Nodejs} className="skillImg" />
<img src={Github} className="skillImg" />
<img src={Postman} className="skillImg" />

<img src={Express} className="skillImg" />
<img src={Typescript} className="skillImg" />
<img src={Tailwind} className="skillImg" />
<img src={Jwt} className="skillImg" />
{/* <img src={Nextjs} className="skillImg" /> */}
      </div>
    </section>
  );
}

export default Skills;
