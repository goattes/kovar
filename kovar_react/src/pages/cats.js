import { useEffect, useState } from "react";
import CoreNavbar from "../components/navbar";
import "../App.css";

export default function Cats() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // přidáno

  const fetchImages = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=5")
      .then((res) => res.json())
      .then((data) => setImages(data));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <CoreNavbar />
      <div className="cats-container">
        <h1 className="cats-heading">🐱 Cat Images</h1>
        <div className="cats-list">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.url}
              alt="cat"
              className="cats-img"
              onClick={() => setSelectedImage(img.url)} // přidáno
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
        <div className="cats-button">
          <button onClick={fetchImages} className="cats-btn">
            More cats!
          </button>
        </div>
      </div>

      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <span
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
          </span>
          <img
            src={selectedImage}
            alt="cat enlarged"
            className="enlarged-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}