const ProjectItem = ({link, picture, alt}) => {
  return (
    <>
      <a href={link} class="portfolio__item">
        <img src={picture} alt={alt} class="portfolio__img" />
      </a>
    </>
  );
};

export default ProjectItem;
