// src/components/UserProfile.js
import React, { useState } from 'react';
import './UserProfile.css';

function UserProfile({ currentUser, items }) {
  const [activeTab, setActiveTab] = useState('donated');
  
  // Filter items by user
  const donatedItems = items.filter(item => item.donatedBy === currentUser.username);
  const claimedItems = items.filter(item => item.status === 'claimed' && item.claimedBy === currentUser.username);
  
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="/api/placeholder/150/150" alt="Profile" />
        </div>
        <div className="profile-info">
          <h1>{currentUser.username}</h1>
          <p className="profile-email">{currentUser.email}</p>
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-value">{currentUser.donatedItems}</span>
              <span className="stat-label">Donated</span>
            </div>
            <div className="stat">
              <span className="stat-value">{currentUser.claimedItems}</span>
              <span className="stat-label">Claimed</span>
            </div>
            <div className="stat">
              <span className="stat-value">{Math.round(currentUser.donatedItems * 2.5)}</span>
              <span className="stat-label">kg CO₂ Saved</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="profile-content">
        <div className="profile-tabs">
          <button 
            className={`tab-btn ${activeTab === 'donated' ? 'active' : ''}`}
            onClick={() => setActiveTab('donated')}
          >
            My Donations
          </button>
          <button 
            className={`tab-btn ${activeTab === 'claimed' ? 'active' : ''}`}
            onClick={() => setActiveTab('claimed')}
          >
            My Claims
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'donated' && (
            <>
              <h2>Items You've Donated</h2>
              {donatedItems.length === 0 ? (
                <div className="empty-state">
                  <p>You haven't donated any items yet.</p>
                  <a href="/donate" className="btn btn-primary">Donate an Item</a>
                </div>
              ) : (
                <div className="items-grid">
                  {donatedItems.map(item => (
                    <div key={item.id} className={`item-card ${item.status === 'claimed' ? 'claimed' : ''}`}>
                      <div className="item-image">
                        <img src={item.imageUrl} alt={item.title} />
                        {item.status === 'claimed' && (
                          <div className="claimed-overlay">Claimed</div>
                        )}
                      </div>
                      
                      <div className="item-details">
                        <h3>{item.title}</h3>
                        <p className="item-description">{item.description.substring(0, 80)}...</p>
                        
                        <div className="item-meta">
                          <span className="category">{item.category}</span>
                          <span className="condition">{item.condition}</span>
                        </div>
                        
                        <div className="item-status">
                          <span>Status: {item.status === 'available' ? 'Available' : 'Claimed'}</span>
                        </div>
                        
                        {item.status === 'claimed' && (
                          <div className="claimed-by">
                            <span>Claimed by: {item.claimedBy}</span>
                          </div>
                        )}
                        
                        <div className="item-date">
                          <span>Posted: {item.createdAt}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          
          {activeTab === 'claimed' && (
            <>
              <h2>Items You've Claimed</h2>
              {claimedItems.length === 0 ? (
                <div className="empty-state">
                  <p>You haven't claimed any items yet.</p>
                  <a href="/items" className="btn btn-primary">Browse Items</a>
                </div>
              ) : (
                <div className="items-grid">
                  {claimedItems.map(item => (
                    <div key={item.id} className="item-card claimed">
                      <div className="item-image">
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="claimed-overlay">Claimed</div>
                      </div>
                      
                      <div className="item-details">
                        <h3>{item.title}</h3>
                        <p className="item-description">{item.description.substring(0, 80)}...</p>
                        
                        <div className="item-meta">
                          <span className="category">{item.category}</span>
                          <span className="condition">{item.condition}</span>
                        </div>
                        
                        <div className="item-donor">
                          <span>Donated by: {item.donatedBy}</span>
                        </div>
                        
                        <div className="item-location">
                          <span>Location: {item.location}</span>
                        </div>
                        
                        <div className="item-date">
                          <span>Claimed on: {item.createdAt}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
