import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      &copy; 2025 Steam Games Clone | Using bootstrap
      <div className="row text-center">
        <div className="col-md-12 mb-2">
          <a href="#" className="text-white-50 text-decoration-none me-3">About Valve</a> |
          <a href="#" className="text-white-50 text-decoration-none mx-3">Jobs</a> |
          <a href="#" className="text-white-50 text-decoration-none mx-3">Steamworks</a> |
          <a href="#" className="text-white-50 text-decoration-none mx-3">Steam Distribution</a> |
          <a href="#" className="text-white-50 text-decoration-none mx-3">Support</a> |
          <a href="#" className="text-white-50 text-decoration-none mx-3">Gift Cards</a>
          <span className="mx-3">|</span>
          <a href="#" className="text-white-50 text-decoration-none mx-1"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white-50 text-decoration-none mx-1"><i className="bi bg-info"></i></a>
        </div>
      </div>
    </footer>
  );
}
