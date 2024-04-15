import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// STYLING
import "./App.css";

// LAYOUT
import Layout from "./components/layout/Layout";

// PAGES
import Home from "./pages/Home";

import Register from "./pages/Register";
import Login from "./pages/Login";
import EmailValidation from "./pages/EmailValidation";

import BuyNow from "./pages/play/BuyNow";
import Prizes from "./pages/play/Prizes";
import HowToPlay from "./pages/play/HowToPlay";

import PreviousDrawResults from "./pages/draws/PreviousDrawResults";
import WinnersStories from "./pages/draws/WinnersStories";

import LatestNews from "./pages/LatestNews";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";

import UserLayout from "./components/user/layout/UserLayout";
import ProfileDetails from "./pages/user/ProfileDetails";
import ChangePassword from "./pages/user/ChangePassword";
import RecurringPurchase from "./pages/user/RecurringPurchase";
import Messages from "./pages/user/Messages";
import MessageData from "./pages/user/MessageData";
import MyPurchase from "./pages/user/MyPurchase";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="email-validation" element={<EmailValidation />} />

            <Route path="play/prizes" element={<Prizes />} />
            <Route path="play/how-to-play" element={<HowToPlay />} />
            <Route path="play/buy-now" element={<BuyNow />} />

            <Route
              path="draws/previous-draw-results"
              element={<PreviousDrawResults />}
            />
            <Route path="draws/winners-stories" element={<WinnersStories />} />

            <Route path="latest-news" element={<LatestNews />} />
            <Route path="blog/:id" element={<Blog />} />
            <Route path="about-us" element={<AboutUs />} />

            <Route path="user/" element={<UserLayout />}>
              <Route path="profile" element={<ProfileDetails />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route
                path="recurring-purchase"
                element={<RecurringPurchase />}
              />
              <Route path="messages" element={<Messages />} />
              <Route path="messages/:id" element={<MessageData />} />
              <Route path="my-purchase" element={<MyPurchase />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
