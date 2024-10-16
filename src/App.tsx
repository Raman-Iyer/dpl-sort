import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Teams from "./pages/Teams";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
