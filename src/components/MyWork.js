import MyWorkElement from "./MyWorkElement";

const MyWork = () => {
  const ipsum =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto, amet facere suscipit, recusandae hic dolor itaque omnis vitae rem praesentium quos eum necessitatibus nisi. Expedita consectetur ipsum possimus iure.";
  return (
    <section class="my-services" id="services">
      <h2 class="section__title section__title--services">What I do</h2>
      <div class="services">
        <MyWorkElement title={"Design + Development"} words={ipsum} />
        <MyWorkElement title={"E-Commerce"} words={ipsum} />
        <MyWorkElement title={"WordPress"} words={ipsum} />
      </div>

      <a href="/projects" class="btn">
        My Work
      </a>
    </section>
  );
};

export default MyWork;