import Search from "./Search/Search";
import UserCard from "./UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = ({ users }) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const filteredUserCards = users.filter((user) => {
    if (searchValue) {
      return user.name.toLowerCase().startsWith(searchValue.toLowerCase());
    }
    return true;
  });

  const userCardComponents = filteredUserCards.map((user, i) => {
    return (
      <UserCard
        user={user}
        key={`user${i}`}
        onClick={() => navigate(`/${user.name}`)}
      />
    );
  });

  return (
    <div className="home-container">
      <h1>Home</h1>
      <Search setSearchValue={setSearchValue} />
      <div className="user-card-container">{userCardComponents}</div>
    </div>
  );
};

export default Home;
