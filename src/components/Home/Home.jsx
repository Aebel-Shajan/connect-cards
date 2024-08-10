import Search from "./Search/Search";
import UserCard from "./UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import Filter from "./Filter/Filter";

const Home = ({ users }) => {

  const [searchValue, setSearchValue] = useState("");
  const [skillsFilterValue, setSkillsFilterValue] = useState("");
  const [typesFilterValue, setTypesFilterValue] = useState("");

  const navigate = useNavigate();

  const skillsOptions = ["Java", "Python", "JavaScript", "HTML", "CSS", "React", "SQL", "PostgreSQL", "AWS", "Azure", "MS Office", "Spring"];
  const typeOptions = ["Data", "Backend", "Frontend", "Devops", "Cybersecurity", "Cloud", "AI", "Normal"];

  const filteredUserCards = users.filter((user) => {
    if (searchValue && skillsFilterValue && typesFilterValue) {
      return user.name.toLowerCase().startsWith(searchValue.toLowerCase()) && user.skills.includes(skillsFilterValue) && user.type.includes(typesFilterValue);
    }

    if(searchValue) {
      return user.name.toLowerCase().startsWith(searchValue.toLowerCase())
    }

    if(skillsFilterValue) {
      return user.skills.includes(skillsFilterValue);
    }

    if(typesFilterValue) {
      return user.type.includes(typesFilterValue);
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
      <Filter filterOptions={skillsOptions} setFilterValue={setSkillsFilterValue} />
      <Filter filterOptions={typeOptions} setFilterValue={setTypesFilterValue} />
      
      <div className="user-card-container">{userCardComponents}</div>
    </div>
  );
};

export default Home;
