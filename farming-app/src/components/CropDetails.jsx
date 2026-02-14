import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSeedling, FaTemperatureHigh, FaTint, FaClock, FaMapMarkerAlt, FaFlask, FaWeightHanging } from 'react-icons/fa';
import './CropDetails.css';

const CropDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { crop } = location.state || {};

  if (!crop) {
    navigate('/crops');
    return null;
  }

  return (
    <div className="crop-details-page">
      <div className="crop-details-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          <FaArrowLeft /> Back to Crops
        </button>

        <div className="crop-details-card">
          <div 
            className="crop-detail-image"
            style={{ backgroundImage: `url(${crop.image})` }}
          >
            <div className="crop-detail-overlay">
              <h1 className="crop-detail-title">{crop.name}</h1>
            </div>
          </div>

          <div className="crop-detail-content">
            <div className="crop-detail-section">
              <h2 className="section-title">
                <FaSeedling className="section-icon" />
                About this Crop
              </h2>
              <p className="crop-detail-description">{crop.description}</p>
            </div>

            <div className="crop-detail-section">
              <h2 className="section-title">Growing Requirements</h2>
              <div className="info-grid">
                <div className="info-item">
                  <FaTemperatureHigh className="info-icon" />
                  <div className="info-content">
                    <h4>Temperature</h4>
                    <p>{crop.temp}</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaTint className="info-icon" />
                  <div className="info-content">
                    <h4>Water Requirement</h4>
                    <p>{crop.water}</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaClock className="info-icon" />
                  <div className="info-content">
                    <h4>Growing Duration</h4>
                    <p>{crop.duration}</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div className="info-content">
                    <h4>Soil Type</h4>
                    <p>{crop.soil}</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaFlask className="info-icon" />
                  <div className="info-content">
                    <h4>Fertilizer</h4>
                    <p>{crop.fertilizer}</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaWeightHanging className="info-icon" />
                  <div className="info-content">
                    <h4>Expected Yield</h4>
                    <p>{crop.yield}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="crop-detail-section">
              <h2 className="section-title">Growing Tips</h2>
              <div className="tips-list">
                <div className="tip-item">
                  <span className="tip-number">1</span>
                  <p>Prepare the soil with proper tillage and add recommended fertilizers</p>
                </div>
                <div className="tip-item">
                  <span className="tip-number">2</span>
                  <p>Maintain proper irrigation schedule based on growth stage</p>
                </div>
                <div className="tip-item">
                  <span className="tip-number">3</span>
                  <p>Monitor for pests and diseases regularly</p>
                </div>
                <div className="tip-item">
                  <span className="tip-number">4</span>
                  <p>Harvest at the right time for maximum yield</p>
                </div>
              </div>
            </div>

            <div className="crop-detail-section">
              <h2 className="section-title">Additional Information</h2>
              <div className="additional-info">
                <p><strong>Sowing Time:</strong> {crop.season === 'kharif' ? 'June-July' : 'October-November'}</p>
                <p><strong>Harvesting Time:</strong> {crop.season === 'kharif' ? 'September-October' : 'March-April'}</p>
                <p><strong>Seed Rate:</strong> 80-100 kg/ha</p>
                <p><strong>Spacing:</strong> 20-25 cm between plants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;