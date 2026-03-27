import React from "react";

export default function Lsb() {
  return (
    <div className="left-sidebar">
      <img className="me" src="./assets/images/Abdulwahab.jpeg" alt="Abdulwahab Mahmoud" />
      <div className="designation-wrap">
        <span className="designation-badge">Senior Frontend Engineer</span>
      </div>
      <h2 className="email">abdulwahabmahmoud99@gmail.com</h2>
      <h2 className="address">Cairo, Egypt</h2>
      {/* <p className="copyright">&copy; 2026 Abdulwahab Mahmoud. All Rights Reserved</p> */}
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="lab la-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
