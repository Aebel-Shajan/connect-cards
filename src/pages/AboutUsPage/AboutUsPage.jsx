import "./AboutUsPage.css";
import jsonpic from "../../assets/exampleJSON.png";
import Navigation from "../../components/Navigation/Navigation";

const AboutUsPage = () => {
  return (
      <div className="about-us-container">
        <Navigation />
        <div className="description-container">
          <h1 >About Us!</h1>
          <h3>What is Connect Cards?</h3>
          <p>
            This app is designed to help you connect with a diverse and unique
            network of individuals. Whether youre looking to make new friends,
            find collaborators for projects, or expand your professional
            connections, this platform provides the perfect space to meet
            like-minded people. By joining our community, you can share your
            skills, showcase your work, and discover opportunities to
            collaborate with others who share your passions.
          </p>

          <h3>How You Can Be Part of It!</h3>
          <p>
            Want to contribute to this project and become part of our growing
            network? It&rsquo;s easy! Join our GitHub repository and add your
            own profile to the JSON file. By doing so, you&rsquo;ll be able to
            share your background, skills, and interests with the community.
          </p>
          <p>
            Here&rsquo;s the format to use when adding your profile:
          </p>


          <p>
            By adding your profile, you&rsquo;ll make it easier for others to
            connect with you and explore what you bring to the table. Join us
            today and become a vital part of this innovative project!
          </p>
        </div>
      </div>
  );
};

export default AboutUsPage;
