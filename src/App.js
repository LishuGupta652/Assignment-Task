import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Audio from "./component/Audio";
import Password from "./component/Password";
import Declaration from "./component/Declaration";
import ThankYou from "./component/ThankYou";
import Ant from "./Ant";
import ShowData from "./component/ShowData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/withAnt" element={<Ant />} />
        <Route path="/" element={<Home />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/password" element={<Password />} />
        <Route path="/declaration" element={<Declaration />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/*" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
