import { BrowserRouter, Routes, Route } from "react-router-dom";

// STYLING
import "./App.css";

// LAYOUT
import Layout from "./components/layout/Layout";

// PAGES
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
