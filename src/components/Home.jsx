import "./Home.css";
import image from "../assets/image.png";


function Home() {
  return (
    <section id="home">
      <div className="introcontent">
        <span className="hello">👋 Hello,</span>
        <span className="introtext">
          I&apos;m <span className="Introname">Madhu</span>
          <br />
          React Developer.1
        </span>
        <p className="intropara">
          Aspiring React Developer passionate about building interactive,
          scalable, and user-friendly web applications. Skilled in React.js,
          JavaScript, Redux, and modern UI frameworks like Tailwind CSS. Strong
          problem-solving abilities, especially in array manipulation and state
          management using useReducer and Redux.
        </p>
        
        {/* <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div> */}
        
        <button className="btn">
          <a 
            href="https://drive.google.com/uc?export=download&id=1e3Cq749D6GtN1sGPtOfhsVTZ_4rgF5Q9"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            📄 Download Resume
          </a>
        </button>
      </div>
      <img src={image} alt="Madhu - React Developer Portfolio" className="bg" />
    </section>
  );
}

export default Home;
