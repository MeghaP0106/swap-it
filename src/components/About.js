// src/components/About.js
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <h1>About SDG 12: Responsible Consumption and Production</h1>
      
      <div className="about-sdg">
        <img 
          src="/images/sdg_banner.png" 
          alt="SDG 12 Banner" 
          className="sdg-image" 
        />
        
        <p>
          <strong>SDG 12</strong> aims to ensure sustainable consumption and production patterns. 
          As our global population continues to grow, so does the pressure on our planet's finite resources.
          Sustainable consumption and production promote resource and energy efficiency, sustainable infrastructure, 
          and access to basic services, green and decent jobs, and a better quality of life for all.
        </p>
        
        <p>
          The United Nations' Sustainable Development Goal 12 recognizes that achieving economic growth 
          and sustainable development requires that we urgently reduce our ecological footprint by 
          changing the way we produce and consume goods and resources.
        </p>
      </div>
      
      <div className="our-mission">
        <h2>Our Mission</h2>
        <p>
          At ShareCycle, we believe that small actions can lead to significant impact. Our platform is 
          designed to extend the lifecycle of products by facilitating the exchange of usable items 
          within communities. Instead of discarding perfectly good items, we encourage their reuse, 
          reducing waste and conserving the resources that would otherwise be used in manufacturing new products.
        </p>
        
        <p>
          We envision a world where responsible consumption is the norm, where we value what we have, 
          repair what we can, and share what we don't need. By connecting donors with recipients, 
          we're not just moving items from one home to another – we're building a community committed 
          to sustainability and waste reduction.
        </p>
      </div>
      
      <div className="how-we-help">
        <h2>How Our Platform Contributes to SDG 12</h2>
        
        <div className="impact-areas">
          <div className="impact-area">
            <h3>Waste Reduction</h3>
            <p>
              Every item exchanged through our platform is one less item in a landfill. 
              We help divert usable goods from waste streams, reducing the environmental 
              burden of disposal.
            </p>
          </div>
          
          <div className="impact-area">
            <h3>Resource Conservation</h3>
            <p>
              By extending product lifecycles through reuse, we reduce the demand for 
              new production, conserving the raw materials, energy, and water that would 
              be consumed in manufacturing processes.
            </p>
          </div>
          
          <div className="impact-area">
            <h3>Carbon Footprint Reduction</h3>
            <p>
              Each reused item represents a carbon saving by avoiding the emissions 
              associated with producing a new item and disposing of an old one. 
              We track these savings to demonstrate our collective impact.
            </p>
          </div>
          
          <div className="impact-area">
            <h3>Community Building</h3>
            <p>
              Our platform strengthens community bonds by connecting neighbors through 
              the act of giving. This social aspect is crucial for building sustainable 
              communities that value shared resources.
            </p>
          </div>
          
          <div className="impact-area">
            <h3>Awareness & Education</h3>
            <p>
              We raise awareness about consumption patterns and provide resources 
              to help our users make more sustainable choices in their daily lives.
            </p>
          </div>
          
          <div className="impact-area">
            <h3>Accessibility</h3>
            <p>
              By making goods available at no cost, we increase access to useful items 
              for those who may not be able to afford new products, promoting social equity.
            </p>
          </div>
        </div>
      </div>
      
      <div className="join-us">
        <h2>Join Our Movement</h2>
        <p>
          Everyone can contribute to SDG 12 through thoughtful consumption and disposal practices. 
          By joining ShareCycle, you become part of a growing community dedicated to reducing waste 
          and promoting sustainability.
        </p>
        
        <h3>Ways to Participate:</h3>
        <ul>
          <li>Donate items you no longer need but are still in usable condition</li>
          <li>Claim items instead of buying new when possible</li>
          <li>Spread the word about our platform to increase our collective impact</li>
          <li>Learn more about sustainable consumption from our resources section</li>
          <li>Share your success stories to inspire others</li>
        </ul>
        
        <div className="cta-buttons">
          <Link to="/donate" className="btn btn-primary">Donate an Item</Link>
          <Link to="/items" className="btn btn-secondary">Browse Available Items</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
