import Search from "./Search/Search";
import UserCardFront from "../../components/UserCard/UserCardFront/UserCardFront";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./HomePage.css";
import Filter from "./Filter/Filter";
import Navigation from "../../components/Navigation/Navigation";
import TypeMapping from "../../utils/TypeMapping";

import PropTypes from "prop-types";

const Home = ({ users }) => {
  const [searchValue, setSearchValue] = useState("");
  const [skillsFilterValue, setSkillsFilterValue] = useState("");
  const [typesFilterValue, setTypesFilterValue] = useState("");
  const navigate = useNavigate();

  // Obtain options to use in filter components based on:
  // * What skills are currently taken by users.
  // * What the type mapping is like.
  let presentSkillsMap = {};
  if (users.length > 0) {
    presentSkillsMap = users.reduce((skillMap, user) => {
      for (let i = 0; i < user.skills.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(skillMap, user.skills[i])) {
          skillMap[user.skills[i]] = 0;
        }
        skillMap[user.skills[i]] += 1;
        console.log(skillMap);
      }
      return skillMap;
    }, {});
  }
  const skillsOptions = Object.keys(presentSkillsMap).sort(function (a, b) {
    return presentSkillsMap[b] - presentSkillsMap[a];
  });
  const skillsOptionsAmount = skillsOptions.map((key) => presentSkillsMap[key]);
  const typeOptions = Object.keys(TypeMapping);

  // Filter users based skills and type filters
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
      return user.type.toLowerCase().includes(typesFilterValue.toLowerCase());
    }
    return true;
  });

  // Create UserCard components from filtered list
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
      <div className="search-container">
        <Search setSearchValue={setSearchValue} />
        <Filter
          filterOptions={skillsOptions}
          filterOptionsAmount={skillsOptionsAmount}
          setFilterValue={setSkillsFilterValue}
          defaultValue="All skills"
        />
        <Filter
          filterOptions={typeOptions}
          setFilterValue={setTypesFilterValue}
          defaultValue="All types"
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
