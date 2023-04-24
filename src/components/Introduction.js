import mac from "../img/macpic.jpg";
import styled from "styled-components";

const Introduction = () => {
    return ( 
        <Intro class="intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>Gergely Farkas</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">Junior Software Dev</p>
            <img src={mac} alt="a picture of a computer"/>
        </Intro>
     );
}
 
export default Introduction;

const Intro = styled.section`
 position: relative;
`