import { BrowserRouter, Routes, Route } from "react-router-dom";

// STYLING
import "./App.css";

// LAYOUT
import Layout from "./components/layout/Layout";

// PAGES
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import BuyNow from "./pages/play/BuyNow";
import Prizes from "./pages/play/Prizes";
import HowToPlay from "./pages/play/HowToPlay";

import PreviousDrawResults from "./pages/draws/PreviousDrawResults";
import WinnersStories from "./pages/draws/WinnersStories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route path="play/prizes" element={<Prizes />} />
          <Route path="play/how-to-play" element={<HowToPlay />} />
          <Route path="play/buy-now" element={<BuyNow />} />

          <Route path="draws/previous-draw-results" element={<PreviousDrawResults />} />
          <Route path="draws/winners-stories" element={<WinnersStories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
