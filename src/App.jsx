//import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import Home from "./components/Home/Home";

function App() {
  
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Navigation/>,
      children: [ 
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/:userId",
          element: <PersonalPage/>
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={appRoutes}/>
    </>
  );
}

export default App;

/*

"/" navigates to home page 

"/{user}"" navigates to personal page for variable user.

*/