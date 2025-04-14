// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home({ items }) {
  // Get only available items
  const availableItems = items.filter(item => item.status === 'available');
  
  // Sort by newest first
  const recentItems = [...availableItems].sort((a, b) => 
    new Date(b.createdAt) - new Date(a.createdAt)
  ).slice(0, 4); // Get only 4 most recent items
  
  // Calculate impact stats
  const totalDonated = items.length;
  const totalClaimed = items.filter(item => item.status === 'claimed').length;
  const co2Saved = Math.round(totalDonated * 2.5); // Assuming 2.5kg CO2 saved per item
  
  return (
    <div className="home">
      <div className="hero">
        <h1>Reduce Waste, Share Resources</h1>
        <p>
          Join our community dedicated to sustainable consumption and production.
          Donate items you no longer need and find treasures others have shared.
          Together, we can make a difference for SDG 12.
        </p>
        <div className="hero-buttons">
          <Link to="/donate" className="btn btn-primary">Donate an Item</Link>
          <Link to="/items" className="btn btn-secondary">Browse Items</Link>
        </div>
      </div>
      
      <div className="impact-stats">
        <div className="stat-card">
          <h3>{totalDonated}</h3>
          <p>Items Donated</p>
        </div>
        <div className="stat-card">
          <h3>{totalClaimed}</h3>
          <p>Items Claimed</p>
        </div>
        <div className="stat-card">
          <h3>{co2Saved}</h3>
          <p>kg CO₂ Saved</p>
        </div>
      </div>
      
      <div className="recent-items">
        <h2>Recently Added Items</h2>
        <div className="items-grid">
          {recentItems.map(item => (
            <div key={item.id} className="item-card">
              <div className="item-image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p className="location">Location: {item.location}</p>
              <p className="status">Status: Available</p>
              <Link to="/items" className="btn btn-small btn-primary">View Details</Link>
            </div>
          ))}
        </div>
        <Link to="/items" className="btn btn-secondary view-all">View All Items</Link>
      </div>
      
      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Create an Account</h3>
            <p>Sign up with your email to start participating in our sustainable exchange community.</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Donate Your Items</h3>
            <p>List items you no longer need but are still in good condition for others to claim.</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Browse & Claim</h3>
            <p>Find items that you need and claim them from other community members at no cost.</p>
          </div>
          <div className="step">
            <div className="step-icon">4</div>
            <h3>Track Your Impact</h3>
            <p>See how your participation helps reduce waste and support sustainable consumption.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;