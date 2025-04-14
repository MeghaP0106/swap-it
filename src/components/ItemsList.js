// src/components/ItemsList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemsList.css';

function ItemsList({ items, currentUser, handleClaimItem }) {
  const [filter, setFilter] = useState('all');
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    'All Categories', 'Furniture', 'Electronics', 'Clothing', 'Books', 
    'Toys', 'Home & Garden', 'Sports', 'Appliances', 'Art & Crafts', 'Other'
  ];

  // Filter items based on criteria
  const filteredItems = items.filter(item => {
    // Filter by status
    if (filter === 'available' && item.status !== 'available') return false;
    if (filter === 'claimed' && item.status !== 'claimed') return false;
    
    // Filter by category
    if (category && category !== 'All Categories' && item.category !== category) return false;
    
    // Filter by search term
    if (searchTerm && 
        !item.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !item.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const claim = (itemId) => {
    if (!currentUser) {
      alert('Please login to claim items');
      return;
    }
    
    const item = items.find(i => i.id === itemId);
    if (item.donatedBy === currentUser.username) {
      alert('You cannot claim your own donations');
      return;
    }
    
    const success = handleClaimItem(itemId);
    if (success) {
      alert('Item claimed successfully!');
    } else {
        alert('Failed to claim item. Please try again.');
      }
    };
  
    return (
      <div className="items-list-container">
        <h1>Browse Available Items</h1>
        
        <div className="filter-controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-options">
            <div className="filter-group">
              <label>Status:</label>
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All Items</option>
                <option value="available">Available Only</option>
                <option value="claimed">Claimed Only</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Category:</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {filteredItems.length === 0 ? (
          <div className="no-items">
            <p>No items match your search criteria.</p>
            <button 
              className="btn btn-secondary" 
              onClick={() => {
                setFilter('all');
                setCategory('');
                setSearchTerm('');
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="items-grid">
            {filteredItems.map(item => (
              <div key={item.id} className={`item-card ${item.status === 'claimed' ? 'claimed' : ''}`}>
                <div className="item-image">
                  <img src={item.imageUrl} alt={item.title} />
                  {item.status === 'claimed' && (
                    <div className="claimed-overlay">Claimed</div>
                  )}
                </div>
                
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p className="item-description">{item.description.substring(0, 100)}
                    {item.description.length > 100 ? '...' : ''}
                  </p>
                  
                  <div className="item-meta">
                    <span className="category">{item.category}</span>
                    <span className="condition">{item.condition}</span>
                  </div>
                  
                  <div className="item-location">
                    <span>Location: {item.location}</span>
                  </div>
                  
                  <div className="item-donor">
                    <span>Donated by: {item.donatedBy}</span>
                  </div>
                  
                  <div className="item-date">
                    <span>Posted: {item.createdAt}</span>
                  </div>
                  
                  {item.status === 'available' ? (
                    <button 
                      className="btn btn-primary claim-btn"
                      onClick={() => claim(item.id)}
                      disabled={!currentUser || item.donatedBy === currentUser?.username}
                    >
                      {!currentUser ? 'Login to Claim' : 
                        item.donatedBy === currentUser?.username ? 'Can\'t Claim Own Item' : 'Claim This Item'}
                    </button>
                  ) : (
                    <div className="claimed-by">
                      <span>Claimed by: {item.claimedBy}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!currentUser && (
          <div className="login-prompt">
            <p>Want to donate or claim items? <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to get started!</p>
          </div>
        )}
      </div>
    );
  }
  
export default ItemsList;