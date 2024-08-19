import "./AboutUsPage.css";
import Navigation from "../../components/Navigation/Navigation";
import TextContainer from "../../components/TextContainer/TextContainer";
import cardPreview from "../../assets/nfc-card-preview.jpg";

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <Navigation />
      <TextContainer>
        <h1>About Us!</h1>
        <section>
          <h3>What is Connect Cards?</h3>
          <p>
            This website was made to encourage collabaration and networking
            between people who are in tech. By adding your own card, you get
            your own personal page containing your important links and github
            projects.
          </p>
          <br />
          <p>
            This was a good practice in using react and we used this as a way to
            further refine our skills. We learned how to use formatting tools
            (Prettier and eslint), deployment tools (Vercel) and how to work
            together using github.
          </p>
          <br />
          <h6>Also we really wanted to get the stargazer badge on github 🤫</h6>
        </section>
        <section>
          <h3>Who are we?</h3>
          <p>
            This project was made in collabaration between{" "}
            <a href="https://github.com/Y-Negash" target="_blank">
              Yabbi
            </a>
            ,<a href="https://github.com/KajananGit">Kajanan</a> and{" "}
            <a href="https://github.com/aebel-shajan">Aebel</a>. It was
            originally only meant to be a quick week long project. However like
            all great projects, we experienced some major scope creep and it
            ended up lasting 3 weeks. We used github projects as our kanban
            board for the first time, making use of converting issues to
            tickets.
          </p>
        </section>

        <section>
          <h3>Whats in store for the future?</h3>
          <p>
            If connect-cards up actually being used by people we plan on
            adding the following:
            <ul>
              <li>User authentication/accounts.</li>
              <li>
                Offer ability to buy physical nfc enabled version of the cards.
              </li>
              <li>Add more designs for the personal pages.</li>
            </ul>
          </p>
          <br />
          <p>Here&rsquo;s a sneak peek: </p>
          <img src={cardPreview} />
        </section>
      </TextContainer>
    </div>
  );
};

export default AboutUsPage;
