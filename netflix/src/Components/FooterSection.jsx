import React from "react";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";
const FooterSection = () => {
  /* <!-- footer --> */
  return (
    <footer className="footer">
      {/* <div>
        <FaFacebookSquare className="social-icons" />
        <FaInstagramSquare className="social-icons" />
        <FaTwitter className="social-icons" />
        <FaYoutube className="social-icons" />
      </div> */}

      <div className="grid-footer">
        <div className="footer-section">
          <p>Audio and Subtitles</p>
          <p>Media Centre</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>

        <div className="footer-section">
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </div>

        <div className="footer-section">
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </div>

        <div className="footer-section">
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </div>
      </div>
      <button className="btn-footer">Service Code</button>
      <p className="p-footer">&copy; 1997-2021 Netflix, Inc.</p>
    </footer>
  );
  /*     <!-- end of footer -->
   */
};
export default FooterSection;
