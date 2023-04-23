import React from "react";
import ProjectItem from "./ProjectItem";
import project from "../img/project.jpg";

const Projects = () => {
  return (
    <section class="my-work" id="work">
      <h2 class="section__title">My work</h2>
      <p class="section__subtitle"></p>

      <div class="portfolio">
        <ProjectItem link={"#"} picture={project} alt={"Project screenshot"} />
        <ProjectItem link={"#"} picture={project} alt={"Project screenshot"} />
        <ProjectItem link={"#"} picture={project} alt={"Project screenshot"} />
      </div>
    </section>
  );
};

export default Projects;
