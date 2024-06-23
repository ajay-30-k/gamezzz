// App.js
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Globalstyle from "./componets/Globalstyle";
import Nav from "./componets/Nav";
import Popup from "./componets/Popup";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    setIsVerified(true);
  };

  return (
    <div className="App">
      <Globalstyle />
      {!isVerified && <Popup onVerify={handleVerification} />}
      {isVerified && <Nav />}
      {isVerified && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Home />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
