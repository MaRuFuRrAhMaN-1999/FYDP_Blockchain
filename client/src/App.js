import "./App.scss";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";
import TransactionPage from "./pages/transaction-page/TransactionPage";
import Homepage from "./pages/home";
import Policy from "./pages/policy";
import Pay from "./pages/pay";
import Support from "./pages/support";
import Claim from "./pages/claim";
import About from "./pages/about";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transaction/:acc" element={<TransactionPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/support" element={<Support />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
