import "./AboutUsPage.css";
import Navigation from "../../components/Navigation/Navigation";
import TextContainer from "../../components/TextContainer/TextContainer";

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <Navigation />
      <TextContainer>
        <h1>About Us!</h1>
        <section>
          <h3>What is Connect Cards?</h3>
          <p>
            This app is designed to help you connect with a diverse and unique
            network of individuals. By joining our community, you can share your
            skills and discover opportunities to collaborate with others who
            share your passions.
          </p>
        </section>
      </TextContainer>
    </div>
  );
};

export default AboutUsPage;
