import React from "react";
import "./style.css";
import Container from "../../components/Container";
import TitleCard from "../../components/TitleCard";
import LinkCard from "../../components/LinkCard";
import Footer from "../../components/Footer";

function PortfolioPage() {
  return (
    <div>
      <Container style={{ marginTop: 50 }}>
        <TitleCard> <h1> Portfolio </h1> </TitleCard>
        <TitleCard> <h2 className="portfolioText"> Clicking images will direct you to the deployed application! </h2> </TitleCard>
        <LinkCard><a href="https://github.com/Kayvonk/voyagr" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
          <h3>Voyagr</h3>
        </a> </LinkCard>
        <a class="center" href="https://voyagr.netlify.app/" target="_blank" rel="noreferrer"><img
          src="assets/voyagrHomepagethumbnailsmall.PNG" class="img-fluid images"
          alt="voyagrThumbnail" /></a>
      </Container>
      <Container style={{ marginTop: 80 }}>
        <LinkCard><a href="https://github.com/Kayvonk/MyPracticeCompanion" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
          <h3>My Practice Companion</h3>
        </a> </LinkCard>
        <a class="center" href="https://kayvonk.github.io/MyPracticeCompanion/" target="_blank" rel="noreferrer"><img
          src="assets/MyPracticeCompanionImgThumbnail.PNG" class="img-fluid images"
          alt="MyPracticeCompanionImgThumbnail" /></a>
      </Container>
      <Container style={{ marginTop: 80 }}>
        <LinkCard> <a href="https://github.com/Kayvonk/NotAnotherDirectory" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
          <h3>Not Another Directory</h3>
        </a> </LinkCard>
        <a class="center" href="https://kayvonk.github.io/NotAnotherDirectory/" target="_blank" rel="noreferrer"> <img
          src="assets/employeedirectorythumbnail.PNG" class="img-fluid rounded mx-auto d-block images"
          alt="NotAnotherDirectoryImgThumbnail" /></a>
      </Container>
      <Container style={{ marginTop: 80 }}>
        <LinkCard> <a href="https://github.com/Kayvonk/DailyPlannerForTheWin" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
          <h3>Daily Planner For The Win</h3>
        </a> </LinkCard>
        <a class="center" href="https://kayvonk.github.io/DailyPlannerForTheWin/" target="_blank" rel="noreferrer"> <img
          src="assets/DailyPlannerImgThumbnail.PNG" class="img-fluid rounded mx-auto d-block images"
          alt="DailyPlannerImgThumbnail" /></a>
      </Container>
      <Container style={{ marginTop: 80 }}>
        <LinkCard> <a href="https://github.com/Koffidanh/job-aid" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
          <h3> Job Aid</h3>
        </a> </LinkCard>
        <a class="center" href="https://whispering-eyrie-33529.herokuapp.com/" target="_blank" rel="noreferrer"> <img
          src="assets/jobaidThumbnail.PNG" class="img-fluid rounded mx-auto d-block images"
          alt="JobAideImgThumbnail" /></a>
      </Container>
      <Container style={{ marginTop: 80 }}>
        <LinkCard>  <a href="https://github.com/Kayvonk/BurgerDevourer" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
          <h3> Burger Devourer</h3>
        </a> </LinkCard>
        <a class="center" href="https://still-inlet-08359.herokuapp.com/" target="_blank" rel="noreferrer"> <img
          src="assets/burgerThumbnail.PNG" class="img-fluid rounded mx-auto d-block images"
          alt="BurgerDevourerImgThumbnail" /></a>
      </Container>
      <Container style={{ marginTop: 80, marginBottom: 150 }}>
        <LinkCard> <a href="https://github.com/Kayvonk/WonderfulWeatherApp" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
          <h3> Wonderful Weather App</h3>
        </a> </LinkCard>
        <a class="center" href="https://kayvonk.github.io/WonderfulWeatherApp/" target="_blank" rel="noreferrer"><img
          src="assets/WeatherAppImgThumbnail.PNG" class="img-fluid rounded mx-auto d-block images"
          alt="WonderfulWeatherAppImgThumbnail" /></a>
      </Container>
      <Footer />
    </div>
  );
}

export default PortfolioPage;
