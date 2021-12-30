import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Audio from "./component/Audio";
import Password from "./component/Password";
import Declaration from "./component/Declaration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/password" element={<Password />} />
        <Route path="/declaration" element={<Declaration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
