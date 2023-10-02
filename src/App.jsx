import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";


import HowTo from "./components/Video/HowTo/Index.jsx";
import VideoPage from "./pages/VideoPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
   
      <Route path="/login" index element={<Login />} />
      <Route path="/videos" index element={<VideoPage />} />
      <Route path="/videos/how_to" index element={<HowTo />} />
    </Routes>
  );
};

export default App;
