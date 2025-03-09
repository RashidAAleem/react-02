import React from "react";
import "./hero.css";

function Hero() {
    return (
        <main className="mid-section">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay">
                    <h1 className="hero-title">Welcome to My Website</h1>
                    <p className="hero-subtitle">Building the future with technology and innovation.</p>
                    <a href="#projects" className="hero-btn">View Projects</a>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
                <h2 className="section-title">Our Services</h2>
                <div className="service-container">
                    <div className="service-card">
                        <i className="fas fa-laptop-code"></i>
                        <h3>Web Development</h3>
                        <p>We create stunning and responsive websites.</p>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-mobile-alt"></i>
                        <h3>App Development</h3>
                        <p>We build user-friendly mobile applications.</p>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-cloud"></i>
                        <h3>Cloud Solutions</h3>
                        <p>We provide scalable and secure cloud services.</p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects" id="projects">
                <h2 className="section-title">Recent Projects</h2>
                <div className="project-container">
                    <div className="project-card">Project 1</div>
                    <div className="project-card">Project 2</div>
                    <div className="project-card">Project 3</div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2 className="section-title">What Our Clients Say</h2>
                <div className="testimonial-container">
                    <div className="testimonial">
                        <p>"This team delivered an amazing website!"</p>
                        <h4>- Client A</h4>
                    </div>
                    <div className="testimonial">
                        <p>"Fantastic app development services."</p>
                        <h4>- Client B</h4>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Hero;
