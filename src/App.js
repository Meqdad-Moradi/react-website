import { Route, Routes } from "react-router-dom";
import "./assets/style/main.css";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Notfound from "./components/pages/Notfound";
import Projects from "./components/pages/Projects";

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/about" element={<About />} />
         <Route path="*" element={<Notfound />} />
      </Routes>
   );
}

export default App;
