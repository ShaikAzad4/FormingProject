import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSeedling, FaInfoCircle } from 'react-icons/fa';
import { cropImages } from '../assets/images';
import './Crops.css';

const Crops = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  const { soilType, season } = location.state || {};

  // Crop database
  const cropsDatabase = {
    kharif: {
      loamy: [
        { id: 1, name: 'Rice', image: cropImages.rice, description: 'Staple food crop, requires high rainfall', water: 'High', temp: '20-27°C', duration: '120-150 days', soil: 'Loamy soil', fertilizer: 'NPK 120:60:40', yield: '2.5-3.5 tons/ha' },
        { id: 2, name: 'Cotton', image: cropImages.cotton, description: 'Cash crop for textile industry', water: 'Medium', temp: '25-35°C', duration: '150-180 days', soil: 'Loamy soil', fertilizer: 'NPK 100:50:50', yield: '2-2.5 tons/ha' },
        { id: 3, name: 'Sugarcane', image: cropImages.sugarcane, description: 'Source of sugar and biofuel', water: 'High', temp: '20-30°C', duration: '10-12 months', soil: 'Loamy soil', fertilizer: 'NPK 150:75:75', yield: '70-80 tons/ha' },
        { id: 4, name: 'Maize', image: cropImages.maize, description: 'Versatile cereal crop', water: 'Medium', temp: '21-27°C', duration: '90-110 days', soil: 'Loamy soil', fertilizer: 'NPK 80:40:40', yield: '2.5-3 tons/ha' }
      ],
      clay: [
        { id: 5, name: 'Rice', image: cropImages.rice, description: 'Thrives in water-retentive clay soil', water: 'High', temp: '20-27°C', duration: '120-150 days', soil: 'Clay soil', fertilizer: 'NPK 120:60:40', yield: '2.8-3.8 tons/ha' },
        { id: 6, name: 'Cotton', image: cropImages.cotton, description: 'Good for moisture retention', water: 'Medium', temp: '25-35°C', duration: '150-180 days', soil: 'Clay soil', fertilizer: 'NPK 100:50:50', yield: '2-2.5 tons/ha' }
      ],
      sandy: [
        { id: 7, name: 'Groundnut', image: cropImages.groundnut, description: 'Oilseed crop, drought tolerant', water: 'Low', temp: '25-30°C', duration: '100-120 days', soil: 'Sandy soil', fertilizer: 'NPK 40:60:40', yield: '1.5-2 tons/ha' },
        { id: 8, name: 'Bajra', image: cropImages.bajra, description: 'Millet crop, drought resistant', water: 'Low', temp: '25-31°C', duration: '70-80 days', soil: 'Sandy soil', fertilizer: 'NPK 60:30:30', yield: '1-1.5 tons/ha' }
      ],
      black: [
        { id: 9, name: 'Cotton', image: cropImages.cotton, description: 'Excellent for black cotton soil', water: 'Medium', temp: '25-35°C', duration: '150-180 days', soil: 'Black soil', fertilizer: 'NPK 100:50:50', yield: '2.2-2.8 tons/ha' },
        { id: 10, name: 'Sugarcane', image: cropImages.sugarcane, description: 'Grows well in deep black soil', water: 'High', temp: '20-30°C', duration: '10-12 months', soil: 'Black soil', fertilizer: 'NPK 150:75:75', yield: '75-85 tons/ha' }
      ],
      red: [
        { id: 11, name: 'Groundnut', image: cropImages.groundnut, description: 'Suitable for well-drained red soil', water: 'Low', temp: '25-30°C', duration: '100-120 days', soil: 'Red soil', fertilizer: 'NPK 40:60:40', yield: '1.5-2 tons/ha' },
        { id: 12, name: 'Jowar', image: cropImages.jowar, description: 'Drought tolerant grain crop', water: 'Low', temp: '26-30°C', duration: '90-120 days', soil: 'Red soil', fertilizer: 'NPK 80:40:40', yield: '1-1.5 tons/ha' }
      ]
    },
    rabi: {
      loamy: [
        { id: 13, name: 'Wheat', image: cropImages.wheat, description: 'Staple food grain', water: 'Medium', temp: '10-15°C', duration: '120-150 days', soil: 'Loamy soil', fertilizer: 'NPK 120:60:40', yield: '2.8-3.5 tons/ha' },
        { id: 14, name: 'Mustard', image: cropImages.mustard, description: 'Oilseed crop', water: 'Low', temp: '10-25°C', duration: '90-120 days', soil: 'Loamy soil', fertilizer: 'NPK 60:40:40', yield: '1-1.5 tons/ha' },
        { id: 15, name: 'Gram', image: cropImages.gram, description: 'Pulse crop, nitrogen fixing', water: 'Low', temp: '20-25°C', duration: '90-110 days', soil: 'Loamy soil', fertilizer: 'NPK 20:60:40', yield: '1.2-1.8 tons/ha' }
      ],
      clay: [
        { id: 16, name: 'Wheat', image: cropImages.wheat, description: 'Good for moisture retention', water: 'Medium', temp: '10-15°C', duration: '120-150 days', soil: 'Clay soil', fertilizer: 'NPK 120:60:40', yield: '3-3.8 tons/ha' },
        { id: 17, name: 'Barley', image: cropImages.barley, description: 'Hardy cereal crop', water: 'Low', temp: '12-15°C', duration: '90-120 days', soil: 'Clay soil', fertilizer: 'NPK 80:40:40', yield: '2-2.5 tons/ha' }
      ],
      sandy: [
        { id: 18, name: 'Barley', image: cropImages.barley, description: 'Drought tolerant', water: 'Low', temp: '12-15°C', duration: '90-120 days', soil: 'Sandy soil', fertilizer: 'NPK 80:40:40', yield: '1.8-2.3 tons/ha' },
        { id: 19, name: 'Pea', image: cropImages.pea, description: 'Vegetable crop', water: 'Medium', temp: '10-18°C', duration: '60-70 days', soil: 'Sandy loam', fertilizer: 'NPK 40:60:40', yield: '1.5-2 tons/ha' }
      ],
      black: [
        { id: 20, name: 'Wheat', image: cropImages.wheat, description: 'Good for black soil', water: 'Medium', temp: '10-15°C', duration: '120-150 days', soil: 'Black soil', fertilizer: 'NPK 120:60:40', yield: '2.8-3.5 tons/ha' },
        { id: 21, name: 'Linseed', image: cropImages.linseed, description: 'Oilseed crop', water: 'Low', temp: '10-25°C', duration: '100-120 days', soil: 'Black soil', fertilizer: 'NPK 60:40:40', yield: '0.8-1.2 tons/ha' }
      ],
      red: [
        { id: 22, name: 'Mustard', image: cropImages.mustard, description: 'Suitable for red soil', water: 'Low', temp: '10-25°C', duration: '90-120 days', soil: 'Red soil', fertilizer: 'NPK 60:40:40', yield: '1-1.5 tons/ha' },
        { id: 23, name: 'Sunflower', image: cropImages.sunflower, description: 'Oilseed crop', water: 'Medium', temp: '20-25°C', duration: '80-100 days', soil: 'Red soil', fertilizer: 'NPK 60:50:40', yield: '1-1.5 tons/ha' }
      ]
    }
  };

  useEffect(() => {
    if (!soilType || !season) {
      navigate('/');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const crops = cropsDatabase[season]?.[soilType] || [];
      setFilteredCrops(crops);
      setLoading(false);
    }, 500);
  }, [soilType, season, navigate]);

  const handleCropClick = (crop) => {
    navigate(`/crop/${crop.id}`, { state: { crop } });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Finding best crops for your farm...</p>
      </div>
    );
  }

  return (
    <div className="crops-page">
      <div className="crops-header">
        <button onClick={() => navigate('/')} className="back-btn">
          <FaArrowLeft /> Back
        </button>
        <h1 className="crops-title">
          <FaSeedling className="crops-title-icon" />
          Recommended Crops
        </h1>
        <div className="selection-info">
          <span className="info-badge soil-badge">{soilType?.charAt(0).toUpperCase() + soilType?.slice(1)} Soil</span>
          <span className="info-badge season-badge">{season?.charAt(0).toUpperCase() + season?.slice(1)} Season</span>
        </div>
      </div>

      {filteredCrops.length === 0 ? (
        <div className="no-crops">
          <h2>No crops found for this combination</h2>
          <p>Try selecting different soil type or season</p>
          <button onClick={() => navigate('/')} className="btn-primary">
            Go Back
          </button>
        </div>
      ) : (
        <div className="crops-grid">
          {filteredCrops.map((crop) => (
            <div key={crop.id} className="crop-card">
              <div 
                className="crop-image"
                style={{ backgroundImage: `url(${crop.image})` }}
              >
                <div className="crop-overlay">
                  <button 
                    onClick={() => handleCropClick(crop)}
                    className="view-details-btn"
                  >
                    <FaInfoCircle /> View Details
                  </button>
                </div>
              </div>
              <div className="crop-info">
                <h3 className="crop-name">{crop.name}</h3>
                <p className="crop-description">{crop.description}</p>
                <div className="crop-quick-info">
                  <span className="quick-info-item">🌡️ {crop.temp}</span>
                  <span className="quick-info-item">💧 {crop.water}</span>
                  <span className="quick-info-item">⏱️ {crop.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Crops;