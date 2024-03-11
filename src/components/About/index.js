import React from "react";
import noteTakerImage from "../../assets/small/NoteTaker.png";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={noteTakerImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Greetings! I'm AJ Generoso, a 23-year-old residing in Charlotte NC.
          </p>
          <p></p>
          <p>Beyond my professional commitments, I am an ardent advocate of an active lifestyle. I take immense pleasure in embarking on leisurely strolls accompanied by my beloved dog. Additionally, I relish partaking in brief hiking expeditions with my cherished friends. Engaging in physical exercise brings me great joy, and I diligently dedicate time every day to nurture my well-being. My exercise regimen encompasses a diverse array of activities, including pilates, weight training, yoga, and invigorating high-intensity interval training (HIIT) sessions.</p>
          <p>By embracing an active and balanced lifestyle, I strive to make the most of my time outside of work, enjoying the wonders of both nature and the thriving communities that surround me.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
