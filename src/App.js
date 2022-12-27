import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Sheard/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Navigation from './Sheard/Navigation';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/LogIn/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/appointment",
          element: <Appointment />
        },
        {
          path: "/reviews",
          element: <Reviews />
        },
        {
          path: "/contactus",
          element: <ContactUs />
        },
        {
          path: "/login",
          element: <Login/>
        },

      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
