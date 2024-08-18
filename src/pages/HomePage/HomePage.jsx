import Search from "./Search/Search";
import UserCardFront from "../../components/UserCard/UserCardFront/UserCardFront";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./HomePage.css";
import Filter from "./Filter/Filter";
import Navigation from "../../components/Navigation/Navigation";

import PropTypes from "prop-types";

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
      <UserCardFront
        user={user}
        key={`user${i}`}
        onClick={() => navigate(`/${user.name}`)}
      />
    );
  });

  return (
    <div className="home-container">
      <Navigation />
      <Search setSearchValue={setSearchValue} />
      <div className="filter-container">
        <Filter
          filterOptions={skillsOptions}
          setFilterValue={setSkillsFilterValue}
        />
        <Filter
          filterOptions={typeOptions}
          setFilterValue={setTypesFilterValue}
        />
      </div>
      <div className="user-card-container">{userCardComponents}</div>
    </div>
  );
};

Home.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
