import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import usersData from "./assets/data/users.json";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = () => {
    setUsers(usersData);
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const LoadingComponent = () => {
    return <div>Loading...</div>;
  };  

  const appRoutes = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home users={users} />,
        },
        {
          path: "/:userId",
          element: !loading ? <PersonalPage users={users} /> : <LoadingComponent />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
}

export default App;
