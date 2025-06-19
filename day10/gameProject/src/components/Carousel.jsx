import React from "react";

export default function Carousel() {
  return (
    <div id="gameCarousel" className="carousel slide mt-3" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="img1.png" className="d-block w-100" alt="Game 1" />
        </div>
        <div className="carousel-item">
          <img src="img2.png" className="d-block w-100" alt="Game 2" />
        </div>
        <div className="carousel-item">
          <img src="img3.png" className="d-block w-100" alt="Game 3" />
        </div>
      </div>
    </div>
  );
}
