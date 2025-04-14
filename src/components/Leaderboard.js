// src/components/Leaderboard.js
import React from 'react';
import './Leaderboard.css';

function Leaderboard({ users }) {
  // Sort users by number of donations (highest to lowest)
  const sortedUsers = [...users].sort((a, b) => b.donatedItems - a.donatedItems);
  
  // Calculate ranks - users with same number of donations get same rank
  let currentRank = 1;
  let prevDonations = -1;
  const rankedUsers = sortedUsers.map((user, index) => {
    if (user.donatedItems < prevDonations) {
      currentRank = index + 1;
    }
    prevDonations = user.donatedItems;
    return { ...user, rank: currentRank };
  });

  return (
    <div className="leaderboard-container">
      <h1>Donation Leaderboard</h1>
      <p className="leaderboard-desc">
        Celebrating our community members who have contributed the most to reducing waste
        and promoting responsible consumption.
      </p>
      
      <div className="top-donors">
        {rankedUsers.slice(0, 3).map((user, index) => (
          <div key={user.id} className={`top-donor rank-${index + 1}`}>
            <div className="medal">{index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}</div>
            <div className="user-avatar">
              <img src={user.imageUrl} alt={user.username} />
            </div>
            <h3>{user.username}</h3>
            <p className="donation-count">{user.donatedItems} donations</p>
            <p className="impact">{Math.round(user.donatedItems * 2.5)} kg CO₂ Saved</p>
          </div>
        ))}
      </div>
      
      <div className="leaderboard-table-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Donations</th>
              <th>Claims</th>
              <th>Impact (kg CO₂)</th>
            </tr>
          </thead>
          <tbody>
            {rankedUsers.map(user => (
              <tr key={user.id} className={user.rank <= 3 ? 'highlighted' : ''}>
                <td>{user.rank}</td>
                <td className="user-cell">
                  <img src={user.imageUrl} alt={user.username} className="table-avatar" />
                  <span>{user.username}</span>
                </td>
                <td>{user.donatedItems}</td>
                <td>{user.claimedItems}</td>
                <td>{Math.round(user.donatedItems * 2.5)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="leaderboard-info">
        <h3>How Impact is Calculated</h3>
        <p>
          Each donated item is estimated to save approximately 2.5 kg of CO₂ emissions
          by extending product lifecycles and reducing the need for new production.
          This is a conservative estimate based on average consumer goods.
        </p>
        
        <div className="join-cta">
          <h3>Join the Sustainability Movement</h3>
          <p>Every donation counts towards a more sustainable future!</p>
          <a href="/donate" className="btn btn-primary">Donate an Item</a>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
