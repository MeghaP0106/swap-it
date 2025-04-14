// src/components/DonateItem.js
import React, { useState } from 'react';
import './DonateItem.css';
import { useNavigate } from 'react-router-dom';

function DonateItem({ currentUser, addItem }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    location: '',
    imageFile: null,
    imagePreview: null
  });
  
  const categories = [
    'Select a category',
    'Furniture',
    'Electronics',
    'Clothing',
    'Books',
    'Kitchen & Appliances',
    'Home Goods',
    'Sports & Fitness',
    'Garden & Outdoor',
    'Kids & Toys',
    'Art & Crafts',
    'Music & Instruments',
    'Office Supplies',
    'Tools & DIY',
    'Other'
  ];
  
  const conditions = [
    'Select condition',
    'Like New',
    'Excellent',
    'Very Good',
    'Good',
    'Fair'
  ];
  
  // Redirect to login if user is not authenticated
  if (!currentUser) {
    return (
      <div className="donate-container">
        <h1>Donate an Item</h1>
        <div className="auth-card">
          <p>You need to be logged in to donate items.</p>
          <div className="form-actions">
            <button 
              className="btn btn-primary" 
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // For demo purposes, we're just using a placeholder image
      // In a real app, you'd handle file upload to a server
      setFormData(prev => ({ 
        ...prev, 
        imageFile: file,
        imagePreview: '/api/placeholder/400/300' // Use a placeholder
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (
      !formData.title || 
      !formData.description || 
      formData.category === 'Select a category' || 
      formData.category === '' || 
      formData.condition === 'Select condition' || 
      formData.condition === '' || 
      !formData.location
    ) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Create new item object
    const newItem = {
      id: Date.now(), // Use timestamp as unique ID
      title: formData.title,
      description: formData.description,
      category: formData.category,
      condition: formData.condition,
      location: formData.location,
      imageUrl: formData.imagePreview || '/api/placeholder/400/300',
      donatedBy: currentUser.username,
      status: 'available',
      createdAt: new Date().toISOString()
    };
    
    // Add item to the list
    addItem(newItem);
    
    // Redirect to items page
    navigate('/items');
  };
  
  return (
    <div className="donate-container">
      <h1>Donate an Item</h1>
      
      <div className="donate-intro">
        <p>
          Thank you for considering a donation! By sharing items you no longer need,
          you're helping reduce waste and supporting our community's sustainability goals.
        </p>
      </div>
      
      <div className="donate-form-container">
        <form className="donate-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Item Name *</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="What are you donating?"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea 
              id="description" 
              name="description" 
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Provide details about the item (size, color, age, any defects, etc.)"
            ></textarea>
          </div>
          
          <div className="form-row">
          <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select 
                id="category" 
                name="category" 
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="condition">Condition *</label>
              <select 
                id="condition" 
                name="condition" 
                value={formData.condition}
                onChange={handleChange}
                required
              >
                {conditions.map(condition => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <input 
              type="text" 
              id="location" 
              name="location" 
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="General area where the item is located"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="image">Upload Image</label>
            <div className="file-upload">
              <input 
                type="file" 
                id="image" 
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              <p className="file-note">
                Please upload a clear image of your item. Max file size: 5MB
              </p>
              
              {formData.imagePreview && (
                <div className="image-preview">
                  <img src={formData.imagePreview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
                </div>
              )}
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Donate Item
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
        
        <div className="donation-tips">
          <h3>Tips for Successful Donations</h3>
          <ul>
            <li>Be honest about the condition of your item</li>
            <li>Provide clear, detailed descriptions</li>
            <li>Include measurements when relevant</li>
            <li>Clean items before donating when possible</li>
            <li>Test electronic items to ensure they work</li>
            <li>Make sure all parts are included</li>
          </ul>
          
          <div className="impact-note">
            <h4>Your Impact</h4>
            <p>
              Each item you donate helps save approximately 2.5 kg of CO₂ 
              by extending product lifecycles and reducing the need for new production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateItem;
          
