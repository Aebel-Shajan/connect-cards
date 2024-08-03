import UserCard from "./UserCard/UserCard";

const Home = () => {
  let userList = [];
  for (let i = 0; i <= 10; i++) {
    const user = {
      name: `user${i}`,
      image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
      type: "pokemon type",
      occupation: "occupation",
      description: "Hello this is a description which is very long and it will continue more and more and more and more. This bit however will not be displayed",
      links: {
        "LinkedIn": "LinkedIn.com",
        "Github": "Github.com",
        "Portfolio": "portfolio.com"
      },
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
      {userCardComponents}
    </div>
  );
};

export default Home;
