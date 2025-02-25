import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import {routes} from "./routes";

export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        {routes.map(({path, element}) => (
          <Route key={path} path={path} element={element}/>
        ))}
      </Routes>
    </Router>
    </>
  )
}