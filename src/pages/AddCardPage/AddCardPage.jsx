import TextContainer from "../../components/TextContainer/TextContainer";
import { CopyBlock, dracula } from "react-code-blocks";
import TypeMapping from "../../utils/TypeMapping";
import Navigation from "../../components/Navigation/Navigation";
import "./AddCardPage.css";
import TypeIcon from "../../components/TypeIcon/TypeIcon";
import { Link } from "react-router-dom";

const AddCardPage = () => {
  return (
    <div className="text-page-container">
      <Navigation />
      <TextContainer>
        <h1>Add your own card</h1>
        <section id="add-card">
          <h3>Want to create your own card?</h3>
          <Link to="/add-card/instructions">For step by step image instructions click here.</Link> 
          <h4>In summary: </h4>
          <ol>
            <li>
              First fork the github repo from{" "}
              <a
                href="https://github.com/Aebel-Shajan/connect-cards/fork"
                target="_blank"
              >
                here.
              </a>
            </li>
            <li>
              Then modify the users.json file found in
              &quot;/src/assets/data/users.json&quot; within your fork. See{" "}
              <a href="#user-template">here</a> for the user template object.
            </li>
            <li>
              <p>
                Finally submit a pull request on our github repo
                <a
                  href="https://github.com/Aebel-Shajan/connect-cards/compare"
                  target="_blank"
                >
                  {" "}
                  here.
                </a>
              </p>
              <p>
                (Make sure to set the &quot;base&quot; as main and
                &quot;compare&quot; as your fork.)
              </p>
            </li>
          </ol>
        </section>

        <section>
          <h3>Types</h3>
          <p>There are {TypeMappingKeys.length} number of types. These are: </p>
          <ul className="types-list">
            {TypeMappingKeys.map((typeName, index) => {
              return (
                <li key={`type ${index}`} className="types-list-item">
                  <TypeIcon typeStyle={TypeMapping[typeName]} /> {typeName}
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h3>Skills</h3>
          <p>
            There are hundreds of skills you can choose from. We use markdown
            badges to display these skills. To see a full list of the supported
            markdown badges see &nbsp;
            <a
              href="https://github.com/Ileriayo/markdown-badges"
              target="_blank"
            >
              here.
            </a>
            If your skill is not there, it will still render in your card, but
            without the logo.
          </p>
        </section>

        <section id="user-template">
          <h3>Here&rsquo;s the format to use when adding your profile:</h3>

          <CopyBlock
            text={userTemplateCode}
            language={"javascript"}
            showLineNumbers={true}
            theme={dracula}
          />
        </section>
      </TextContainer>
    </div>
  );
};

const TypeMappingKeys = Object.keys(TypeMapping);
const userTemplateCode = `
{
  "name": "Enter your name here",
  "type": "Choose one from ${TypeMappingKeys}",
  "image": "Enter/link/to/image.",
  "occupation": "Enter occupation here",
  "description": "Enter a description less than 100 characters",
  "moves": [
    {
      "name": "Enter name of move1 here",
      "link": "Enter link of move1 here",
      "type": ["type1", "type2"]
    },
    {
      "name": "Enter name of move2 here",
      "link": "Enter link of move2 here",
      "type": ["type1", "type2"]
    },
    {
      "name": "Enter name of move3 here",
      "link": "Enter link of move4 here",
      "type": ["type1", "type2"]
    }
  ],
  "skills": ["skill1", "skil2", "skill3"],
  "links": {
    "link1": "Enter link1 here",
    "link2": "If you enter your github then your projects are displayed",
    "link3": "Enter link2 here"
  }
}
`;

export default AddCardPage;
