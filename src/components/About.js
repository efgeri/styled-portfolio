import React from "react";
import man from "../img/man.jpg";

const About = () => {
  return (
    <section class="about-me">
      <h2 class="section__title section__title--about">Who I am</h2>
      <p class="section__subtitle section__subtitle--about">Junior Software Develeoper based in Edinburgh</p>

      <div class="about-me__body">
        <p></p>
        <p></p>
      </div>

      <img src={man} alt="Photo of Gergely Farkas" />
    </section>
  );
};

export default About;
