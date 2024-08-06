import Search from "./Search/Search";
import UserCard from "./UserCard/UserCard";
import { useEffect, useState } from "react";
import usersData from '../../data/users.json';

const Home = () => {

    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState("");


    const loadUsers = () => {
        setUsers(usersData);
    }

    useEffect(() => {
        loadUsers();
        console.log(users);
    }, []);


    const filteredUserCards = users.filter((user) => {
        if(searchValue){
            return (user.name.toLowerCase().startsWith(searchValue.toLowerCase()))
        }
        return true;
    });


  const userCardComponents = filteredUserCards.map((user, i) => {
    return <UserCard user={user} key={`user${i}`} />;
  });


  return (
    <div>
      <h1>Home</h1>
      <Search setSearchValue={setSearchValue} />

      {userCardComponents}
    </div>
  );
};

export default Home;
