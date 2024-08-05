import Search from "./Search/Search";
import UserCard from "./UserCard/UserCard";

const Home = ( { users, setSearchValue } ) => {

  const userCardComponents = users.map((user, i) => {
    return <UserCard user={user} key={`user${i}`} />;
  });

  return (
    <div>
      <h1>Home</h1>
      <Search setSearchValue={setSearchValue}/>

      {userCardComponents}
    </div>
  );
};

export default Home;
