import { useEffect, useState } from "react";
import CoreNavbar from "../components/navbar";
import "../App.css";
import "../index.css";

export default function Facts() {
  const [fact, setFact] = useState([]);

  const fetchFact = () => {
    fetch("https://meowfacts.herokuapp.com")
      .then((response) => response.json())
      .then((data) => {
        setFact(data.data[0]); 
      });
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <>
          <CoreNavbar />
    <div className="facts-container">
      <div className="facts-content">
      <h1 className="facts-heading">🐾 Cat Facts</h1>
      <img src="https://http.cat/102.jpg" alt="cat" className="facts-img" />
      <div className="facts-button">
      <button onClick={fetchFact} className="facts-btn">
        Random fact 🐱
      </button>
      </div>
      <p className="facts-text">{fact}</p>
      </div>
    </div>
    </>
  );
}