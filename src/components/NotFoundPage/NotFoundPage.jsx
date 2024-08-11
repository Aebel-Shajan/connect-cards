import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css"

const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <div id="not-found-container">
            Sorry the user you are looking for does not exist.

            <button onClick={() => navigate("/")}> Return home </button>
        </div>
    );
}
 
export default NotFoundPage;