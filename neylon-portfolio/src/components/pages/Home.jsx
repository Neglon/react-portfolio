import Tom from "../images/20220304_123959.jpg"
export default function About() {
    return (
      <div>
        <h2>About Me</h2>
        <img className="tomImage" src={Tom} alt="Tom Neylon" />
        <p className="about-text">
          My name is Tom Neylon, and i am an aspiring web developer. I am currently enrolled in the University of Connecticut's Coding Bootcamp.
           I am excited to learn new skills and apply them to real world projects. I am looking forward to working with a team of developers to create amazing applications.
           I am a former Bartender, and swimming pool technician.
        </p>
      </div>
    );
  }