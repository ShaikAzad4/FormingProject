import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaSeedling, FaTemperatureHigh, FaTint, FaClock, 
  FaMapMarkerAlt, FaFlask, FaWeightHanging, FaListAlt, 
  FaRobot, FaTimes, FaPaperPlane, FaFilePdf, FaDownload,
  FaLeaf, FaSun, FaWater, FaSeedling as FaSprout
} from 'react-icons/fa';
import html2pdf from 'html2pdf.js';
import './CropDetails.css';

const CropDetails = () => {
  // ========== ROUTER HOOKS ==========
  const location = useLocation();
  const navigate = useNavigate();
  const { crop } = location.state || {};

  // ========== COMPONENT STATE ==========
  // Chatbot states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // PDF generation state
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // ========== REFS ==========
  const messagesEndRef = useRef(null);
  const pdfContentRef = useRef(null);
  const stagesContainerRef = useRef(null);

  // ========== INITIALIZATION ==========
  useEffect(() => {
    // Initialize chat messages when crop data is available
    if (crop) {
      setMessages([
        { 
          id: 1, 
          text: `Hi! I'm your farming assistant. Ask me anything about ${crop.name} cultivation!`, 
          sender: 'bot' 
        }
      ]);
    }
  }, [crop]);

  // ========== NAVIGATION GUARD ==========
  if (!crop) {
    navigate('/crops');
    return null;
  }

  // ========== UTILITY FUNCTIONS ==========
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // ========== MESSAGE FORMATTING FUNCTIONS ==========
  const formatBotMessage = (text) => {
    if (!text) return text;

    const lines = text.split('\n');
    let formattedLines = [];

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      
      // Skip empty lines but add a line break
      if (trimmedLine === '') {
        formattedLines.push('<br/>');
        return;
      }

      // Check for numbered lists (e.g., "1. ", "2. ")
      if (/^\d+\.\s/.test(trimmedLine)) {
        formattedLines.push(`<div class="bot-message-list-item numbered">${trimmedLine}</div>`);
      }
      // Check for bullet points (e.g., "- ", "• ")
      else if (/^[-•]\s/.test(trimmedLine)) {
        formattedLines.push(`<div class="bot-message-list-item bullet">${trimmedLine}</div>`);
      }
      // Check for headings/sections (e.g., "**Title:**" or "Title:")
      else if (trimmedLine.includes(':**') || /^[A-Z][a-z]+:/.test(trimmedLine) || /^[A-Z\s]+:$/.test(trimmedLine)) {
        formattedLines.push(`<h4 class="bot-message-heading">${trimmedLine}</h4>`);
      }
      // Check for key-value pairs (e.g., "Temperature: 25°C")
      else if (trimmedLine.includes(':') && !trimmedLine.startsWith('http')) {
        const parts = trimmedLine.split(':');
        if (parts.length >= 2) {
          formattedLines.push(`<div class="bot-message-keyvalue"><strong>${parts[0]}:</strong>${parts.slice(1).join(':')}</div>`);
        } else {
          formattedLines.push(`<div class="bot-message-paragraph">${trimmedLine}</div>`);
        }
      }
      // Regular paragraph
      else {
        formattedLines.push(`<div class="bot-message-paragraph">${trimmedLine}</div>`);
      }
    });

    return formattedLines.join('');
  };

  const renderMessage = (msg) => {
    if (msg.sender === 'bot') {
      return (
        <div className="message-content bot-message-formatted">
          <div dangerouslySetInnerHTML={{ __html: formatBotMessage(msg.text) }} />
        </div>
      );
    }
    return (
      <div className="message-content">
        <p>{msg.text}</p>
      </div>
    );
  };

  // ========== CHATBOT FUNCTIONS ==========
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Create context about the crop
      const cropContext = `
        Crop: ${crop.name}
        Season: ${crop.season}
        Soil Type: ${crop.soil}
        Temperature: ${crop.temp}
        Water Requirement: ${crop.water}
        Duration: ${crop.duration}
        Fertilizer: ${crop.fertilizer}
        Expected Yield: ${crop.yield}
      `;

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: inputMessage,
        cropContext: cropContext
      }),
    });

      const data = await response.json();
      
      // Add bot response
      const botMessage = {
        id: messages.length + 2,
        text: data.reply,
        sender: 'bot'
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // ========== PDF DOWNLOAD FUNCTION ==========
  const downloadPDF = async () => {
    setIsGeneratingPDF(true);
    
    const element = pdfContentRef.current;
    
    // Temporarily remove animation classes for PDF generation
    const stagesContainer = stagesContainerRef.current;
    if (stagesContainer) {
      stagesContainer.classList.add('pdf-generation-mode');
    }
    
    // Optimized PDF options
    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: `${crop.name.replace(/\s+/g, '_')}_Cultivation_Guide.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        letterRendering: true,
        useCORS: true,
        logging: false,
        allowTaint: false,
        foreignObjectRendering: false
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    // Show loading indicator
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'pdf-loading';
    loadingMsg.innerHTML = '📄 Generating PDF... Please wait.';
    document.body.appendChild(loadingMsg);

    try {
      // Force reflow to ensure all content is rendered
      element.style.display = 'block';
      
      // Wait for any pending renders
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate and save PDF
      await html2pdf().set(opt).from(element).save();
      
      // Success message
      loadingMsg.innerHTML = '✅ PDF generated successfully!';
      setTimeout(() => {
        document.body.removeChild(loadingMsg);
      }, 1500);
      
    } catch (error) {
      console.error('PDF generation error:', error);
      loadingMsg.innerHTML = '❌ Error generating PDF. Please try again.';
      setTimeout(() => {
        document.body.removeChild(loadingMsg);
      }, 2000);
    } finally {
      // Restore animation classes
      if (stagesContainer) {
        stagesContainer.classList.remove('pdf-generation-mode');
      }
      setIsGeneratingPDF(false);
    }
  };

  // ========== RENDER FUNCTIONS ==========
  
  /**
   * Renders all growing stages in a vertical list - PDF FRIENDLY VERSION
   * No animations, no complex CSS transforms
   */
  const renderAllStages = () => {
    if (crop.description && typeof crop.description === 'object' && !Array.isArray(crop.description)) {
      const stages = Object.keys(crop.description);
      
      return (
        <div className="all-stages-container" ref={stagesContainerRef}>
          {stages.map((stageKey, index) => {
            // Format stage name for display
            const formatStageName = (name) => {
              return name
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase())
                .replace(/\b\w/g, char => char.toUpperCase());
            };

            return (
              <div key={stageKey} className="stage-full-card pdf-friendly">
                <div className="stage-full-header">
                  <div className="stage-icon-wrapper">
                    <span className="stage-number-badge">{index + 1}</span>
                  </div>
                  <h3 className="stage-full-title">
                    Stage {index + 1}: {formatStageName(stageKey)}
                  </h3>
                </div>
                <div className="stage-full-content">
                  <p className="stage-full-description">
                    {crop.description[stageKey]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else if (typeof crop.description === 'string') {
      return <p className="crop-detail-description">{crop.description}</p>;
    }
    return <p className="crop-detail-description">No description available</p>;
  };

  const renderTitleDescription = () => {
    if (crop.titleDescription) {
      return (
        <div className="title-description">
          <p>{crop.titleDescription}</p>
        </div>
      );
    }
    return null;
  };

  // ========== MAIN RENDER ==========
  return (
    <div className={`crop-details-page ${isGeneratingPDF ? 'is-generating-pdf' : ''}`}>
      <div className="crop-details-container">
        
        {/* ===== HEADER ACTIONS ===== */}
        <div className="header-actions">
          <button onClick={() => navigate(-1)} className="back-btn" disabled={isGeneratingPDF}>
            <FaArrowLeft /> Back to Crops
          </button>
          <button 
            onClick={downloadPDF} 
            className="download-pdf-btn"
            disabled={isGeneratingPDF}
          >
            <FaFilePdf /> <FaDownload /> {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF Guide'}
          </button>
        </div>

        {/* ===== MAIN CARD ===== */}
        <div className="crop-details-card" ref={pdfContentRef}>
          
          {/* Crop Image Section */}
          <div 
            className="crop-detail-image"
            style={{ backgroundImage: `url(${crop.image})` }}
          >
            <div className="crop-detail-overlay">
              <h1 className="crop-detail-title">{crop.name}</h1>
            </div>
          </div>

          {/* Crop Content Section */}
          <div className="crop-detail-content">
            
            {/* Title Description */}
            {renderTitleDescription()}

            {/* Growing Stages Section - ALL STAGES VERTICAL */}
            <div className="crop-detail-section">
              <h2 className="section-title">
                <FaListAlt className="section-icon" />
                Complete Growing Guide
              </h2>
              {renderAllStages()}
            </div>

            {/* Growing Requirements Section */}
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

                {/* <div className="info-item">
                  <FaFlask className="info-icon" />
                  <div className="info-content">
                    <h4>Fertilizer</h4>
                    <p>{crop.fertilizer}</p>
                  </div>
                </div> */}

                <div className="info-item">
                  <FaWeightHanging className="info-icon" />
                  <div className="info-content">
                    <h4>Expected Yield</h4>
                    <p>{crop.yield}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Growing Tips Section */}
            <div className="crop-detail-section">
              <h2 className="section-title">Growing Tips</h2>
              <div className="tips-list">
                <div className="tip-item">
                  <span className="tip-number">1</span>
                  <p>Prepare the soil with proper tillage and add recommended organic manures</p>
                </div>
                <div className="tip-item">
                  <span className="tip-number">2</span>
                  <p>Maintain proper irrigation schedule based on critical growth stages</p>
                </div>
                <div className="tip-item">
                  <span className="tip-number">3</span>
                  <p>Monitor for pests and diseases regularly; use organic control methods</p>
                </div>
                <div className="tip-item">
                  <span className="tip-number">4</span>
                  <p>Harvest at the right maturity stage for maximum yield and quality</p>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="crop-detail-section">
              <h2 className="section-title">Additional Information</h2>
              <div className="additional-info">
                <p><strong>Sowing Time:</strong> {crop.season === 'kharif' ? 'June-July (with monsoon onset)' : 'October-November (after monsoon)'}</p>
                <p><strong>Harvesting Time:</strong> {crop.season === 'kharif' ? 'September-October' : 'March-April'}</p>
                <p><strong>Crop Season:</strong> {crop.season === 'kharif' ? 'Kharif (Monsoon)' : 'Rabi (Winter)'}</p>
                <p><strong>Crop ID:</strong> {crop.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CHATBOT FLOATING BUTTON ===== */}
      {!isGeneratingPDF && (
        <button 
          className={`chatbot-toggle-btn ${isChatOpen ? 'open' : ''}`}
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          {isChatOpen ? <FaTimes /> : <FaRobot />}
        </button>
      )}

      {/* ===== CHATBOT WINDOW ===== */}
      {isChatOpen && !isGeneratingPDF && (
        <div className="chatbot-window">
          
          {/* Chatbot Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-title">
              <FaRobot className="chatbot-icon" />
              <h3>Farming Assistant</h3>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="chatbot-close">
              <FaTimes />
            </button>
          </div>

          {/* Chatbot Messages Area */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                {renderMessage(msg)}
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content">
                  <p>Typing...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chatbot Input Area */}
          <div className="chatbot-input">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about farming practices, pests, diseases, etc..."
              rows="1"
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="send-btn"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropDetails;