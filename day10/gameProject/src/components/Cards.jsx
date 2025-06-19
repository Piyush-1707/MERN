import React from "react";

const games = [
  { title: "GTA V", price: "₹1,999", img: "gmn1.jpg", video: "gm1v.mp4" },
  { title: "Cricket 24", price: "₹2,499", img: "gmn2.jpg", video: "gm2v.mp4" },
  { title: "NBA 2K25", price: "₹3,299", img: "gmn3.jpg", video: "gm3v.mp4" },
  { title: "WWE 2K25", price: "₹2,999", img: "gmn4.jpg", video: "gm4v.mp4" },
];

export default function Cards() {
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Top Games</h3>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {games.map((game, idx) => (
          <div className="col" key={idx}>
            <div className="card bg-dark text-white position-relative h-100">
              <img src={game.img} className="card-img-top game-img" alt={game.title} />
              <video className="video-hover" muted autoPlay loop playsInline>
                <source src={game.video} type="video/mp4" />
              </video>
              <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <span className="badge bg-info mb-2">{game.price}</span>
                <button className="btn btn-outline-light btn-sm w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .card {
          position: relative;
          overflow: hidden;
        }

        .game-img, .video-hover {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .card:hover .game-img {
          transform: scale(1.05);
          opacity: 0;
        }

        .card:hover .video-hover {
          opacity: 1;
        }

        .video-hover {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
