import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/NavBar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Pokemon from "./views/Characters";
import Detail from "./views/Detail";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones/" element={<Pokemon />} />
          <Route path="/pokemones/:name" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
