import "./AboutUsPage.css";
import jsonpic from "../../assets/exampleJSON.png";
import Navigation from "../../components/Navigation/Navigation";

const AboutUsPage = () => {
  return (
    <>
      <div className="about-us-container">
        <Navigation />
        <h1 id="about-title">About Us!</h1>
        <div className="app-desc-container">
          <h3 className="title1">What is Connect Cards?</h3>
          <p className="paragraph1">
            This app is designed to help you connect with a diverse and unique
            network of individuals. Whether youre looking to make new friends,
            find collaborators for projects, or expand your professional
            connections, this platform provides the perfect space to meet
            like-minded people. By joining our community, you can share your
            skills, showcase your work, and discover opportunities to
            collaborate with others who share your passions.
          </p>
        </div>

        <div className="participation-desc-container">
          <h3 className="title2">How You Can Be Part of It!</h3>
          <p className="paragraph2">
            Want to contribute to this project and become part of our growing
            network? It&rsquo;s easy! Join our GitHub repository and add your
            own profile to the JSON file. By doing so, you&rsquo;ll be able to
            share your background, skills, and interests with the community.
          </p>
          <p className="paragraph3">
            Here&rsquo;s the format to use when adding your profile:
          </p>

          <div className="json-img-container">
            <img
              className="json-img"
              src={jsonpic}
              alt="JSON example code"
            ></img>
          </div>

          <p className="paragraph4">
            By adding your profile, you&rsquo;ll make it easier for others to
            connect with you and explore what you bring to the table. Join us
            today and become a vital part of this innovative project!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
