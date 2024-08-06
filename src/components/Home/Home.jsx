import Search from "./Search/Search";
import UserCard from "./UserCard/UserCard";
import { useEffect, useState } from "react";
import usersData from "../../assets/data/users.json";
import "./Home.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const loadUsers = () => {
    setUsers(usersData);
  };

  useEffect(() => {
    loadUsers();
    console.log(users);
  }, []);

  const filteredUserCards = users.filter((user) => {
    if (searchValue) {
      return user.name.toLowerCase().startsWith(searchValue.toLowerCase());
    }
    return true;
  });

  const userCardComponents = filteredUserCards.map((user, i) => {
    return <UserCard user={user} key={`user${i}`} />;
  });

  return (
    <div className="home-container">
      <h1>Home</h1>
      <Search setSearchValue={setSearchValue} />
      <div className="user-card-container">
        {userCardComponents}
      </div>
    </div>
  );
};

export default Home;
