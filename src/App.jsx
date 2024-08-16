import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import { useEffect, useState } from "react";
import usersData from "./assets/data/users.json";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import HomePage from "./pages/HomePage/HomePage"

function CaseInsensitiveWrapper() {
  const location = useLocation();

  // If the current path is not all lowercase, redirect to the lowercase version
  if (location.pathname !== location.pathname.toLowerCase()) {
    return <Navigate to={location.pathname.toLowerCase()} replace />;
  }

  return <Outlet />;
}

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
      element: <CaseInsensitiveWrapper />,
      path: "/",
      children: [
        {
          path: "/",
          element: <HomePage users={users} />,
        },
        {
          path: "/:userId",
          element: !loading ? (
            <PersonalPage users={users} />
          ) : (
            <LoadingComponent />
          ),
        },
        {
          path: "/about-us",
          element: <AboutUsPage />,
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
