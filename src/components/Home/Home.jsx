import Search from "./Search/Search";
import UserCard from "./UserCard/UserCard";

const Home = ( { users, setSearchValue } ) => {

  let userList = [];
  for (let i = 0; i <= 10; i++) {
    const user = {
      name: `user${i}`,
      "profile-pic": "either from asset folder or online",
      type: "pokemon type",
      occupation: "",
      description: "description less than 50 chars.",
      links: ["link 1", "link 2", "link 3"],
      skills: ["skill 1", "skill 2", "skill3"], // max 3 skills
    };
    userList.push(user);
  }
  const userCardComponents = userList.map((user, i) => {
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
