import Home from "./pages/home"; // Corrected import
import Services from "./pages/services"; // Corrected import
import Contact from "./pages/contact"; // Corrected import

export const routes = [
  { name: "home", path: "/", element: <Home /> },
  { name: "services", path: "/services", element: <Services /> }, 
  { name: "contact", path: "/contact", element: <Contact /> }, 
];