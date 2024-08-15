import Search from "./Search/Search";
import UserCard from "./UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import Filter from "./Filter/Filter";
import Navigation from "../Navigation";

const Home = ({ users }) => {
  const [searchValue, setSearchValue] = useState("");
  const [skillsFilterValue, setSkillsFilterValue] = useState("");
  const [typesFilterValue, setTypesFilterValue] = useState("");

  const navigate = useNavigate();

  const skillsOptions = [
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "SQL",
    "PostgreSQL",
    "AWS",
    "Azure",
    "MS Office",
    "Spring",
  ];
  const typeOptions = [
    "Data",
    "Backend",
    "Frontend",
    "Devops",
    "Cybersecurity",
    "Cloud",
    "AI",
    "Normal",
  ];


  let filteredUserCards = users;
  filteredUserCards = filteredUserCards.filter((user) => {
    if (searchValue) {
      return user.name.toLowerCase().startsWith(searchValue.toLowerCase());
    }
    return true;
  });
  filteredUserCards = filteredUserCards.filter((user) => {
    if (skillsFilterValue) {
      return user.skills.includes(skillsFilterValue);
    }
    return true;
  });
  filteredUserCards = filteredUserCards.filter((user) => {
    if (typesFilterValue) {
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
      <div className="navigationbar">
        <Navigation />
      </div>
        <Search setSearchValue={setSearchValue} />
      <div className="filter-container">
        <Filter filterOptions={skillsOptions} setFilterValue={setSkillsFilterValue} />
        <Filter filterOptions={typeOptions} setFilterValue={setTypesFilterValue} />
      </div>
      <div className="user-card-container">{userCardComponents}</div>
      <footer className="home-footer">
        <p className="footer-aboutus"><a href="/about-us">About Us</a></p>
      </footer>
    </div>
  );
};

export default Home;
