import Hero from "./component/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Notes from "./component/Notes";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/:semType" element={<Hero/>} />
          <Route path="/:semType/:sub" element={<Notes/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="*" element={<Error message="404 Not Found"/>} /> */}
          {/* <Route path="/contact" element={<Contact/>} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
