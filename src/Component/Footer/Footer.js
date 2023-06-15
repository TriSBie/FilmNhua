import React from "react";
import "./styleFooter.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div
          className="row jusify-content-center"
          style={{ justifyContent: "center" }}
        >
          <div className="col-md-9 text-center">
            <div className="social mb-2 mt-2">
              <h4>Stay in touch</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright">© FilmNhua. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
    
  );
}
