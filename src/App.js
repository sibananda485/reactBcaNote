import Hero from "./component/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Notes from "./component/Notes";
import About from "./component/About";
import Contact from "./component/Contact";
import Feedback from "./component/Feedback";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/:semType" element={<Hero />} />
        <Route path="/:semType/:sub" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
