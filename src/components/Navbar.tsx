import {Link, useLocation} from "react-router-dom";
import {routes} from "../routes";
import logo from "../assets/Navbar/Final logo-01 111.png"


export default function Navbar() {

    const location = useLocation();
    const active = location.pathname ==="/"? "home": location.pathname.substring(1);

  return (
    <div className="flex justify-between items-center bg-[#000529] px-6 py-3 font-montserrat">
      {/* Left Side: Logo and Text */}
      <div className="flex items-center text-white text-2xl ml-18 pl-20 font-regular">
        <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
        <span className="mr-2 font-semibold">SSVC</span>Lucknow
      </div>

      {/* Right Side: Navigation Links */}
      <div className="flex space-x-6 mr-18 pr-20">
      {routes.map(({name, path}) => (
        <Link key={name}
        to={path}
        className={`text-white transition ${
            active === name ? "font-semibold border-b-2 border-yellow-400" : "font-normal"
        }`}
        >
           {name === "home" ? "Home" : name === "services" ? "Our Services" : "Contact Us"}
           </Link>
      ))}
      </div>
    </div>
  );
}
