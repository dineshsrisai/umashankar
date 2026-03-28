import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Printer from "./components/Printer";
import Comp from "./components/Comp";
import Cctv from "./components/Cctv";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/hero" element={<Hero />}></Route>
          <Route path="/" element={<Body />}>
            <Route index element={<Home />}></Route>
            <Route path="/printer" element={<Printer />} />
            <Route path="/comp" element={<Comp />} />
            <Route path="/cc" element={<Cctv/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
