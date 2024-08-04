//import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import Home from "./components/Home/Home";
import HomeContainer from "./container/HomeContainer";

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <HomeContainer />,
        },
        {
          path: "/:userId",
          element: <PersonalPage />,
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
