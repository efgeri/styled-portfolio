import mac from "../img/macpic.jpg";

const Introduction = () => {
    return ( 
        <section class="intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>Gergely Farkas</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">Junior Software Dev</p>
            <img src={mac} alt="a picture of a computer"/>
        </section>
     );
}
 
export default Introduction;