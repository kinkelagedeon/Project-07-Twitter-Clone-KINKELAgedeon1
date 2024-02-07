import Profile from "./pages/Profile.jsx";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />

     </Routes>
    </BrowserRouter>
    </Layout>
  );
}

