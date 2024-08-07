//import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import usersData from "./assets/data/users.json";

function App() {
  
  const [users, setUsers] = useState([]);
  
  const loadUsers = () => {
    setUsers(usersData);
  };

  useEffect(() => {
    loadUsers();
  }, []);

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
          element: <PersonalPage users={users} />,
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

/*

"/" navigates to home page 

"/{user}"" navigates to personal page for variable user.

*/
