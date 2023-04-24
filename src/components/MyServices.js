import MyServicesElement from "./MyServicesElement";

const MyServices = () => {
  const ipsum =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto, amet facere suscipit, recusandae hic dolor itaque omnis vitae rem praesentium quos eum necessitatibus nisi. Expedita consectetur ipsum possimus iure.";
  return (
    <section class="my-services" id="services">
      <h2 class="section__title section__title--services">What I do</h2>
      <div class="services">
        <MyServicesElement title={"Not sure"} words={ipsum} />
        <MyServicesElement title={"Holding places"} words={ipsum} />
        <MyServicesElement title={"Bleh"} words={ipsum} />
      </div>

      <a href="/projects" class="btn">
        My Work
      </a>
    </section>
  );
};

export default MyServices;