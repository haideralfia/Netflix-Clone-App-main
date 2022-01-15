import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";

function Footer() {
  // const history = useHistory();
  const [position, setPosition] = useState({top: 0, left: 0})
  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth'
    })
  })

  return (
    <div className="footer">
      <div className="footer__styles">
      <button className="footer__backToTop" onClick={() => setPosition({...position, position: {top: 0, left: 0}})} >↑</button>
        <h5 className="padding">
          <small>
            Questions?
            <spam className="hover">
              <small>Call 000-800-040-1843</small>{" "}
            </spam>
          </small>
        </h5>
        <div className="footerColumns">
          <div className="footerColumn__1">
            <p className="hover">
              <small>FAQ</small>
            </p>
            <p className="hover">
              <small>Investor Relations</small>
            </p>
            <p className="hover">
              <small>Privacy</small>
            </p>
            <p className="hover">
              <small>Speed Test</small>
            </p>
          </div>

          <div className="footerColumn__2">
            <p className="hover">
              <small>Help Center</small>
            </p>
            <p className="hover">
              <small>Jobs</small>
            </p>
            <p className="hover">
              <small>Cookie Preferences</small>
            </p>
            <p className="hover">
              <small>Legal Notices</small>
            </p>
          </div>

          <div className="footerColumn__3">
            <p className="hover">
              <small>Account</small>
            </p>
            <p className="hover">
              <small>Way to Watch</small>
            </p>
            <p className="hover">
              <small>Corporation Information</small>
            </p>
            <p className="hover">
              <small>Only on Netflix</small>
            </p>
          </div>

          <div className="footerColumn__4">
            <p className="hover">
              <small>Media Center</small>
            </p>
            <p className="hover">
              <small>Terms of Use</small>
            </p>
            <p className="hover">
              <small>Contact Us</small>
            </p>
          </div>
        </div>
        <p className="netflixPadding">
          <small>Netflix</small>
        </p>
      </div>
    </div>
  );
}

export default Footer;
