import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
