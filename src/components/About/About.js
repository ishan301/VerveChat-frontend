import React from "react";
import "./About.scss";
import AboutImg from "../../assests/About.png";

function About() {
  return (
    <section className="About">
      <h2>About VerveChat</h2>
      <div className="about_card">
        <div className="about_figure">
          <img src={AboutImg} alt="About"></img>
        </div>
        <div className="about_caption">
          <p>
            VerveChat is an open source random video chat app that enables users
            to connect with people from all around the world. The app features a
            unique video chat algorithm which allows users to connect with
            people based on their interests, age, gender and location.
          </p>
          <p>
            The app also features a section which allows users to view their
            chat history and find out who they have recently chatted with. You
            can also add people as your friends to chat with them later and also
            find your friends on this platform by their username.
          </p>
          <p>
            The main purpose for this app is to provide these services for free
            for which many websites charge users.
          </p>
        </div>
      </div>
      <div className="contributung">
        <p>
          ALL THOSE WHO WANT TO CONTRIBUTE TO THIS APPLICATION ARE WELCOME TO
          CONTRIBUTE. PLEASE{" "}
          <a href="https://github.com/ishan301/VerveChat-frontend" target="_blank" rel="noreferrer">
            {" "}
            Contribute Here.
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;
