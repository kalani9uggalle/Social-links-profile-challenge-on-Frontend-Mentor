
import './App.css';
import './fonts.css'; 
import { useState } from 'react'; 
import profileImage from './assets/images/avatar-jessica.jpeg';  // Import the image

function App() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);  // Set the clicked button as active
  };
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img 
          src = {profileImage }
          alt="profile" 
          className="profile-image"
        />
        <h2>Jessica Randall</h2>
        <h4 className="location">London, United Kingdom</h4>
        <p className="bio">"Front-end developer and avid reader."</p>

        <div className="social-links">
        <button
            className={`social-button ${activeButton === 'GitHub' ? 'active' : ''}`}
            onClick={() => handleClick('GitHub')}
          >
            GitHub
          </button>
          <button
            className={`social-button ${activeButton === 'Frontend Mentor' ? 'active' : ''}`}
            onClick={() => handleClick('Frontend Mentor')}
          >
            Frontend Mentor
          </button>
          <button
            className={`social-button ${activeButton === 'LinkedIn' ? 'active' : ''}`}
            onClick={() => handleClick('LinkedIn')}
          >
            LinkedIn
          </button>
          <button
            className={`social-button ${activeButton === 'Twitter' ? 'active' : ''}`}
            onClick={() => handleClick('Twitter')}
          >
            Twitter
          </button>
          <button
            className={`social-button ${activeButton === 'Instagram' ? 'active' : ''}`}
            onClick={() => handleClick('Instagram')}
          >
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
