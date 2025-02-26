import Home from "./pages/home"; // Corrected import
import Services from "./pages/services"; // Corrected import
import Contact from "./pages/contact"; // Corrected import
import About from "./pages/about";

export const routes = [
  { name: "home", path: "/", element: <Home /> },
  { name: "services", path: "/services", element: <Services /> }, 
  {name: "about", path:"/about", element:<About/>},
  { name: "contact", path: "/contact", element: <Contact /> }, 
];