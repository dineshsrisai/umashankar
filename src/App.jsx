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
          <Route path="/" element={<Hero />}></Route>
          <Route path="/home" element={<Body />}>
            <Route index element={<Home />}></Route>
            <Route path="printer" element={<Printer />} />
            <Route path="computer" element={<Comp />} />
            <Route path="cctv" element={<Cctv/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
