import React, { useState } from 'react';
import { ChevronDown, MapPin, Calendar, Check, Globe } from 'lucide-react';
import { allTrips } from '../data/tripsRegistry';

export default function TripSelector({ currentTripId, onSelectTrip }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeTrip = allTrips.find(t => t.id === currentTripId) || allTrips[0];

  const handleSelect = (tripId) => {
    onSelectTrip(tripId);
    setIsOpen(false);
  };

  return (
    <div className="trip-selector-container">
      {/* Active Trip Header Trigger Button */}
      <button 
        className="trip-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Switch Trip / สลับทริป"
      >
        <span className="trip-flag">{activeTrip.flag || '✈️'}</span>
        <div className="trip-btn-info">
          <span className="trip-btn-title">{activeTrip.title}</span>
          <span className="trip-btn-dates">{activeTrip.dates}</span>
        </div>
        <ChevronDown size={16} className={`chevron-icon ${isOpen ? 'open' : ''}`} />
      </button>

      {/* Trip Switcher Modal */}
      {isOpen && (
        <div className="trip-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="trip-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="trip-modal-header">
              <div className="trip-modal-title-group">
                <Globe className="text-pink-500" size={20} />
                <h3>Select Trip / เลือกทริปเดินทาง</h3>
              </div>
              <button className="trip-modal-close" onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <p className="trip-modal-subtitle">
              ทริปทั้งหมดสร้างโดย AI (AI-Generated Itineraries) • เลือกทริปเพื่อดูรายละเอียด
            </p>

            <div className="trip-card-grid">
              {allTrips.map((trip) => {
                const isSelected = trip.id === activeTrip.id;
                return (
                  <div 
                    key={trip.id}
                    className={`trip-card ${isSelected ? 'active' : ''}`}
                    onClick={() => handleSelect(trip.id)}
                  >
                    {isSelected && (
                      <div className="trip-card-badge">
                        <Check size={12} /> Selected
                      </div>
                    )}
                    <div className="trip-card-header">
                      <span className="trip-card-flag">{trip.flag}</span>
                      <div>
                        <h4 className="trip-card-title">{trip.title}</h4>
                        <p className="trip-card-country">{trip.country}</p>
                      </div>
                    </div>

                    <div className="trip-card-meta">
                      <div className="trip-meta-item">
                        <Calendar size={13} />
                        <span>{trip.dates}</span>
                      </div>
                      <div className="trip-meta-item">
                        <MapPin size={13} />
                        <span className="truncate">{trip.route}</span>
                      </div>
                    </div>

                    <div className="trip-card-footer">
                      <span className="trip-budget-label">งบประมาณ:</span>
                      <span className="trip-budget-value">{trip.totalBudget}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
