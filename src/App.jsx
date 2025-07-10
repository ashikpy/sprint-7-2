import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Review from "./Review";
import ThankYou from "./ThankYou";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/step/1" />} />
      <Route path="/step/1" element={<Step1 name={name} setName={setName} />} />
      <Route
        path="/step/2"
        element={<Step2 rating={rating} setRating={setRating} />}
      />
      <Route
        path="/step/3"
        element={<Step3 message={message} setMessage={setMessage} />}
      />
      <Route
        path="/review"
        element={<Review name={name} rating={rating} message={message} />}
      />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
