import Search from "./Search/Search";
import UserCard from "./UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import SkillsFilter from "./Filter/SkillsFilter";

const Home = ({ users }) => {

  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const navigate = useNavigate();


  const filteredUserCards = users.filter((user) => {
    if (searchValue && filterValue) {
      return user.name.toLowerCase().startsWith(searchValue.toLowerCase()) && user.skills.includes(filterValue);
    }

    if(searchValue) {
      return user.name.toLowerCase().startsWith(searchValue.toLowerCase())
    }

    if(filterValue) {
      return user.skills.includes(filterValue);
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
      <SkillsFilter setFilterValue={setFilterValue} />
      <div className="user-card-container">{userCardComponents}</div>
    </div>
  );
};

export default Home;
