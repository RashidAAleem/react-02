import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Navigation Links Section */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-menu">
                        <li><a href="#" className="footer-link">Home</a></li>
                        <li><a href="#" className="footer-link">About</a></li>
                        <li><a href="#" className="footer-link">Projects</a></li>
                        <li><a href="#" className="footer-link">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media Links Section */}
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                {/* About Us Section */}
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are a dedicated team building creative and innovative web solutions.</p>
                </div>

                {/* Contact Us Form Section */}
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Rana Rashid. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
