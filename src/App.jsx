import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Home from "./components/Home";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/hero" element={<Hero />}></Route>
          <Route path="/" element={<Body />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
