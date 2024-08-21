import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import TextContainer from "../../components/TextContainer/TextContainer";
import "./InstructionsPage.css";

const InstructionsPage = () => {
    const instructionComponents = [...Array(11).keys()].map(number => {
        let extraInfo = <></>;
        if (number ===4) {
            extraInfo = (
                <Link to="/add-card#user-template">Copy the user template from here.</Link>
            )
        }
        return (
        <div id={`step${number + 1}`} className="instruction-container" key={`step${number + 1}`} >
            <h3>Step: {number+1}</h3>
            {extraInfo}
            <p>{instructionsMapper[number+1]}</p>
            <img className="instruction-image" src={`/assets/instructions/step${number + 1}.png`} />
        </div>
        )
    })
    return (
        <div className="text-page-container" >
            <Navigation />
            <TextContainer>
                <h1>Step by step guide to adding your card.</h1>
                <div className="instructions-full-container">   
                    {instructionComponents}
                </div>

            </TextContainer>
        </div>
    );
}

const instructionsMapper = {
    "1": "Click the fork button from the repo github.com/aebel-shajan/connect-cards",
    "2": "Press create fork.",
    "3": "Locate the users.json file in your fork.",
    "4": "Click the edit file button.",
    "5": "Paste in the user object template and make changes to it as you wish. If you are using your own image then add it into public/assets/user-card-images. Then reference the image by setting 'image' to /image-name.png",
    "6": "Click commit changes.",
    "7": "Go back to the repo github.com/aebel-shajan/connect-cards. Navigate to the pull requests tab. Then click new pull request.",
    "8": "Click 'compare across forks'.",
    "9": "Click the drop down menu for 'head repository' and choose your fork.",
    "10": "Click 'Create pull request'.",
    "11": "Enter a title and description for your pull request. Click 'Create pull request'."
}

export default InstructionsPage;