import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaSeedling, 
  FaCalendar, 
  FaArrowRight, 
  FaTint, 
  FaTemperatureHigh,
  FaLeaf,
  FaChartLine,
  FaUserFriends,
  FaCheckCircle,
  FaInfoCircle,
  FaCloudSun,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { bgImages, soilImages } from '../assets/images';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [soilType, setSoilType] = useState('');
  const [season, setSeason] = useState('');
  const [activeTab, setActiveTab] = useState('soil');

  const soilTypes = [
    { id: 'loamy', name: 'Loamy Soil', image: soilImages.loamy, description: 'Perfect for most crops', fertility: 'High', waterRetention: 'Moderate' },
    { id: 'clay', name: 'Clay Soil', image: soilImages.clay, description: 'Nutrient-rich, water retentive', fertility: 'High', waterRetention: 'High' },
    { id: 'sandy', name: 'Sandy Soil', image: soilImages.sandy, description: 'Well-draining, warms quickly', fertility: 'Low', waterRetention: 'Low' },
    { id: 'black', name: 'Black Soil', image: soilImages.black, description: 'Ideal for cotton, oilseeds', fertility: 'High', waterRetention: 'High' },
    { id: 'red', name: 'Red Soil', image: soilImages.red, description: 'Good for pulses, groundnuts', fertility: 'Medium', waterRetention: 'Medium' }
  ];

  const seasons = [
    { 
      id: 'kharif', 
      name: 'Kharif', 
      description: 'Monsoon Season (June-October)', 
      icon: '🌧️',
      crops: ['Rice', 'Cotton', 'Sugarcane', 'Maize'],
      temperature: '25-35°C',
      rainfall: 'High'
    },
    { 
      id: 'rabi', 
      name: 'Rabi', 
      description: 'Winter Season (October-March)', 
      icon: '☀️',
      crops: ['Wheat', 'Mustard', 'Gram', 'Barley'],
      temperature: '10-25°C',
      rainfall: 'Low'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (soilType && season) {
      navigate('/crops', { state: { soilType, season } });
    }
  };

  const stats = [
    { icon: <FaLeaf />, value: '50+', label: 'Crop Varieties' },
    { icon: <FaUserFriends />, value: '10K+', label: 'Happy Farmers' },
    { icon: <FaChartLine />, value: '95%', label: 'Success Rate' },
  ];

  return (
    <div className="home-enhanced">
      {/* Hero Section with Parallax Effect */}
      <div className="hero-enhanced">
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${bgImages.harvesting})` }}
        />
        <div className="hero-overlay"></div>
        <div className="hero-content-enhanced">
          <div className="hero-badge">
            <FaSeedling /> Organic Farming Guidence
          </div>
          <h1 className="hero-title-enhanced">
            Grow Smarter,
            <br />
            <span className="hero-highlight">Harvest Better</span>
          </h1>
          <p className="hero-subtitle-enhanced">
            Personalized crop recommendations based on your soil type and growing season.
            Maximize your yield with data-driven insights.
          </p>
          
          {/* Quick Stats */}
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="hero-stat-item">
                <span className="hero-stat-icon">{stat.icon}</span>
                <div className="hero-stat-info">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Selection Section */}
      <div className="selection-section-enhanced">
        <div className="selection-header">
          <h2 className="selection-title-enhanced">
            Find Your Perfect Crop Match
          </h2>
          <p className="selection-subtitle">
            Select your soil type and growing season to get personalized recommendations
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="progress-indicator">
          <div className={`progress-step ${soilType ? 'completed' : 'active'}`}>
            <span className="step-number">1</span>
            <span className="step-label">Select Soil</span>
          </div>
          <div className="progress-line"></div>
          <div className={`progress-step ${season ? 'completed' : soilType ? 'active' : ''}`}>
            <span className="step-number">2</span>
            <span className="step-label">Choose Season</span>
          </div>
          <div className="progress-line"></div>
          <div className={`progress-step ${soilType && season ? 'active' : ''}`}>
            <span className="step-number">3</span>
            <span className="step-label">Get Results</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="selection-form-enhanced">
          {/* Tabs for Mobile */}
          <div className="selection-tabs">
            <button
              type="button"
              className={`tab-btn ${activeTab === 'soil' ? 'active' : ''}`}
              onClick={() => setActiveTab('soil')}
            >
              <FaSeedling /> Soil Type
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === 'season' ? 'active' : ''}`}
              onClick={() => setActiveTab('season')}
            >
              <FaCalendar /> Season
            </button>
          </div>

          {/* Soil Selection */}
          <div className={`selection-panel ${activeTab === 'soil' ? 'active' : ''}`}>
            <div className="panel-header">
              <FaSeedling className="panel-icon" />
              <h3>Choose Your Soil Type</h3>
              <p>Select the soil type available in your farm</p>
            </div>
            <div className="soil-grid-enhanced">
              {soilTypes.map((soil) => (
                <div
                  key={soil.id}
                  className={`soil-card-enhanced ${soilType === soil.id ? 'selected' : ''}`}
                  onClick={() => {
                    setSoilType(soil.id);
                    setActiveTab('season');
                  }}
                >
                  <div className="soil-card-inner">
                    <div 
                      className="soil-image-enhanced"
                      style={{ backgroundImage: `url(${soil.image})` }}
                    >
                      <div className="soil-image-overlay">
                        {soilType === soil.id && <FaCheckCircle className="selected-icon" />}
                      </div>
                    </div>
                    <div className="soil-info-enhanced">
                      <h4>{soil.name}</h4>
                      <p>{soil.description}</p>
                      <div className="soil-properties">
                        <span className="soil-property">
                          <FaTint /> {soil.waterRetention}
                        </span>
                        <span className="soil-property">
                          <FaTemperatureHigh /> {soil.fertility}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Season Selection */}
          <div className={`selection-panel ${activeTab === 'season' ? 'active' : ''}`}>
            <div className="panel-header">
              <FaCalendar className="panel-icon" />
              <h3>Select Growing Season</h3>
              <p>Choose when you plan to grow your crops</p>
            </div>
            <div className="season-grid-enhanced">
              {seasons.map((s) => (
                <div
                  key={s.id}
                  className={`season-card-enhanced ${season === s.id ? 'selected' : ''}`}
                  onClick={() => setSeason(s.id)}
                >
                  <div className="season-icon">{s.icon}</div>
                  <div className="season-info-enhanced">
                    <h4>{s.name}</h4>
                    <p className="season-desc">{s.description}</p>
                    <div className="season-details">
                      <span className="season-detail">
                        <FaTemperatureHigh /> {s.temperature}
                      </span>
                      <span className="season-detail">
                        <FaCloudSun /> {s.rainfall} Rainfall
                      </span>
                    </div>
                    <div className="season-crops">
                      <span className="crops-label">Common Crops:</span>
                      <div className="crop-tags">
                        {s.crops.map((crop, idx) => (
                          <span key={idx} className="crop-tag">{crop}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button 
              type="submit" 
              className="btn-submit-enhanced"
              disabled={!soilType || !season}
            >
              <span>Get Crop Recommendations</span>
              <FaArrowRight className="btn-icon-enhanced" />
            </button>
            {(!soilType || !season) && (
              <p className="form-hint">
                <FaInfoCircle /> Please select both soil type and season to continue
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Features Grid */}
      <div className="features-enhanced">
        <div className="features-header">
          <span className="features-badge">Why Choose Us</span>
          <h2 className="features-title-enhanced">Smart Agriculture Solutions</h2>
          <p className="features-subtitle">
            Leverage technology to make informed farming decisions
          </p>
        </div>
        
        <div className="features-grid-enhanced">
          <div className="feature-card-enhanced">
            <div className="feature-icon-wrapper">
              <FaSeedling />
            </div>
            <h3>Smart Recommendations</h3>
            <p>AI-powered crop suggestions based on your specific soil and climate conditions</p>
            <div className="feature-stats">
              <span>95% Accuracy</span>
            </div>
          </div>

          <div className="feature-card-enhanced">
            <div className="feature-icon-wrapper">
              <FaMapMarkerAlt />
            </div>
            <h3>Localized Advice</h3>
            <p>Region-specific recommendations considering local weather patterns</p>
            <div className="feature-stats">
              <span>500+ Regions</span>
            </div>
          </div>

          <div className="feature-card-enhanced">
            <div className="feature-icon-wrapper">
              <FaChartLine />
            </div>
            <h3>Yield Optimization</h3>
            <p>Maximize your harvest with optimal planting and harvesting schedules</p>
            <div className="feature-stats">
              <span>+40% Yield</span>
            </div>
          </div>

          <div className="feature-card-enhanced">
            <div className="feature-icon-wrapper">
              <FaUserFriends />
            </div>
            <h3>Expert Community</h3>
            <p>Connect with agricultural experts and fellow farmers</p>
            <div className="feature-stats">
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step-item">
            <div className="step-number-bg">1</div>
            <div className="step-content">
              <h3>Select Soil</h3>
              <p>Choose your soil type from our comprehensive database</p>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-item">
            <div className="step-number-bg">2</div>
            <div className="step-content">
              <h3>Pick Season</h3>
              <p>Select Kharif or Rabi based on your planting schedule</p>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-item">
            <div className="step-number-bg">3</div>
            <div className="step-content">
              <h3>Get Recommendations</h3>
              <p>Receive detailed crop suggestions with growing guides</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h2 className="section-title">Trusted by Farmers</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"This platform helped me increase my wheat yield by 35% in just one season!"</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">RK</div>
              <div className="author-info">
                <h4>Ramesh Kumar</h4>
                <p>Wheat Farmer, Punjab</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The soil-specific recommendations are incredibly accurate. Best farming tool I've used."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">SP</div>
              <div className="author-info">
                <h4>Sunita Patel</h4>
                <p>Cotton Farmer, Gujarat</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Perfect for small farmers like me. Easy to use and very helpful recommendations."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">MS</div>
              <div className="author-info">
                <h4>Mohan Singh</h4>
                <p>Vegetable Farmer, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Smart Farming Journey?</h2>
          <p>Get personalized crop recommendations and expert guidance today</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cta-button"
          >
            Start Now <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;