import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ItemsList from './components/ItemsList';
import DonateItem from './components/DonateItem';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';

// Mock data for demonstration
import { mockItems, mockUsers } from './mockData';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [items, setItems] = useState(mockItems);
  const [users, setUsers] = useState(mockUsers);

  // Check if user is logged in from localStorage on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // Function to handle user login
  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  // Function to handle user logout
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  // Function to add a new item
  const addItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);

    // Update user's donation count
    if (currentUser) {
      const updatedUsers = users.map((user) => {
        if (user.username === currentUser.username) {
          const updatedUser = {
            ...user,
            donatedItems: user.donatedItems + 1,
          };
          setCurrentUser(updatedUser);
          localStorage.setItem('currentUser', JSON.stringify(updatedUser));
          return updatedUser;
        }
        return user;
      });
      setUsers(updatedUsers);
    }
  };

  // Function to claim an item
  const claimItem = (itemId) => {
    if (!currentUser) return false;

    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          status: 'claimed',
          claimedBy: currentUser.username,
          claimedAt: new Date().toISOString(),
        };
      }
      return item;
    });

    setItems(updatedItems);

    // Update user's claimed count
    const updatedUsers = users.map((user) => {
      if (user.username === currentUser.username) {
        const updatedUser = {
          ...user,
          claimedItems: user.claimedItems + 1,
        };
        setCurrentUser(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        return updatedUser;
      }
      return user;
    });

    setUsers(updatedUsers);
    return true;
  };

  return (
    <Router>
      <div className="app">
        <Navbar currentUser={currentUser} handleLogout={handleLogout} />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={items} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/items"
              element={
                <ItemsList
                  items={items}
                  currentUser={currentUser}
                  handleClaimItem={claimItem}
                />
              }
            />
            <Route
              path="/donate"
              element={<DonateItem currentUser={currentUser} addItem={addItem} />}
            />
            <Route
              path="/login"
              element={<Login handleLogin={handleLogin} users={users} />}
            />
            <Route
              path="/register"
              element={
                <Register
                  handleLogin={handleLogin}
                  users={users}
                  setUsers={setUsers}
                />
              }
            />
            <Route
              path="/profile"
              element={<UserProfile currentUser={currentUser} items={items} />}
            />
            <Route path="/leaderboard" element={<Leaderboard users={users} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;