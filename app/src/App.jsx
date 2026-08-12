import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  MapPin, Calendar, Heart, Hotel, Award, Sun, Moon
} from 'lucide-react';
import { defaultTripId, getTripById } from './data/tripsRegistry';
import TripSelector from './components/TripSelector';
import ImageGallery from './components/ImageGallery';

export default function App() {
  const [currentTripId, setCurrentTripId] = useState(defaultTripId);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' or 1..N for day numbers
  const [day1Plan, setDay1Plan] = useState('planB'); // 'planA' or 'planB'
  const [theme, setTheme] = useState('light'); // default 'light' theme
  const [approvedTrips, setApprovedTrips] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Active trip object loaded dynamically from JSON
  const currentTrip = getTripById(currentTripId);
  const tripOverview = currentTrip;
  const daysData = currentTrip.daysData || [];

  const isCurrentTripApproved = !!approvedTrips[currentTripId];

  // Handle switching active trip
  const handleSelectTrip = (newTripId) => {
    setCurrentTripId(newTripId);
    setActiveTab('overview');
  };

  // Trigger trip approval celebration
  const handleApproveTrip = () => {
    setApprovedTrips(prev => ({
      ...prev,
      [currentTripId]: true
    }));
    setShowModal(true);

    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 300 };

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const currentDayData = daysData.find(d => d.day === activeTab);

  return (
    <div id="root" data-theme={theme}>
      {/* Header */}
      <header className="app-header">
        <div className="header-top-row">
          {/* Trip Selector Component */}
          <TripSelector 
            currentTripId={currentTripId} 
            onSelectTrip={handleSelectTrip} 
          />

          <button 
            className="theme-toggle-btn"
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            title="สลับโหมดสว่าง / โหมดมืด"
          >
            {theme === 'light' ? <Moon size={13} /> : <Sun size={13} />}
            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </div>

        <h1 className="app-title">{tripOverview.title}</h1>
        <div className="app-subtitle">
          <Calendar size={14} />
          <span>{tripOverview.dates}</span>
        </div>
      </header>

      {/* Sticky Day Tabs */}
      <div className="tabs-wrapper">
        <div className="tabs-scroll">
          <button 
            className={`tab-chip ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <Award size={14} />
            <span>ภาพรวม</span>
          </button>
          
          {daysData.map(d => (
            <button 
              key={d.day}
              className={`tab-chip ${activeTab === d.day ? 'active' : ''}`}
              onClick={() => setActiveTab(d.day)}
            >
              <span className="day-num">Day {d.day}</span>
              <span style={{ fontSize: '0.65rem', opacity: 0.85 }}>{d.date ? d.date.split(' ')[0] : ''}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {activeTab === 'overview' ? (
          /* Trip Overview Page */
          <div style={{ padding: '16px' }}>
            <div className="day-banner">
              <div className="day-header-title">📌 สรุปภาพรวมเส้นทางทริป ({daysData.length} วัน)</div>
              <div className="theme-text">{tripOverview.route}</div>
              <div className="info-pills">
                <div className="pill">✈️ ตั๋วบิน: {tripOverview.flightCost}</div>
                <div className="pill">💰 งบรวมทริป: {tripOverview.totalBudget}</div>
              </div>
            </div>

            {tripOverview.hotelBases && tripOverview.hotelBases.length > 0 && (
              <div className="glass-card">
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Hotel size={18} color="var(--accent-gold)" />
                  <span>ย่านที่พักตลอดทริป</span>
                </h3>
                {tripOverview.hotelBases.map((hb, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: idx < tripOverview.hotelBases.length - 1 ? '1px solid var(--border-glass)' : 'none', fontSize: '0.85rem' }}>
                    <div>
                      <strong>{hb.city}</strong> ({hb.nights} คืน)
                    </div>
                    <div style={{ color: 'var(--accent-orange)', fontSize: '0.8rem' }}>{hb.date}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="glass-card">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>🗓️ ตารางเมืองรายวัน</h3>
              {daysData.map(d => (
                <div key={d.day} style={{ display: 'flex', gap: '10px', padding: '10px 0', borderBottom: d.day < daysData.length ? '1px solid var(--border-glass)' : 'none' }}>
                  <div style={{ fontWeight: 700, color: 'var(--accent-crimson)', minWidth: '48px', fontSize: '0.85rem' }}>
                    Day {d.day}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{d.city}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{d.theme}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : currentDayData ? (
          /* Day Detail View */
          <div>
            {/* Day Header Banner */}
            <div className="day-banner">
              <div className="day-title-row">
                <div className="day-header-title">
                  Day {currentDayData.day} • {currentDayData.date}
                </div>
                <div className="city-badge">
                  {currentDayData.city}
                </div>
              </div>
              <div className="theme-text">✨ {currentDayData.theme}</div>
              <div className="info-pills">
                <div className="pill">🛏️ ที่พัก: {currentDayData.stay}</div>
                {currentDayData.transportPass && (
                  <div className="pill" style={{ color: 'var(--accent-gold)' }}>
                    🎟️ {currentDayData.transportPass.name} ({currentDayData.transportPass.price})
                  </div>
                )}
              </div>
            </div>

            {/* Transport Pass Benefit Note if any */}
            {currentDayData.transportPass && (
              <div style={{ margin: '0 16px 16px 16px', background: 'rgba(233, 196, 106, 0.12)', border: '1px solid rgba(233, 196, 106, 0.3)', borderRadius: '14px', padding: '12px', fontSize: '0.78rem', lineHeight: 1.4 }}>
                <strong>💡 คำแนะนำพาสเดินทาง:</strong> {currentDayData.transportPass.benefit}
              </div>
            )}

            {/* Hotel Candidates if any */}
            {currentDayData.hotelCandidates && currentDayData.hotelCandidates.length > 0 && (
              <div style={{ padding: '0 16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Hotel size={16} color="var(--accent-gold)" />
                  <span>ตัวเลือกโรงแรมแนะนำ:</span>
                </div>
                {currentDayData.hotelCandidates.map((h, i) => (
                  <div key={i} className="glass-card" style={{ marginBottom: '8px', padding: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{h.name}</div>
                      {h.tag && (
                        <span style={{ fontSize: '0.7rem', background: 'rgba(42, 157, 143, 0.2)', color: 'var(--accent-green)', padding: '2px 8px', borderRadius: '8px', fontWeight: 600 }}>
                          {h.tag}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '8px' }}>{h.note}</div>
                    {h.mapUrl && (
                      <a href={h.mapUrl} target="_blank" rel="noreferrer" className="map-btn">
                        <MapPin size={12} />
                        <span>เปิด Google Maps ดูโรงแรม</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Timeline */}
            <div className="timeline-container">
              {currentDayData.timeline && currentDayData.timeline.map((item, idx) => (
                <div key={idx} className={`timeline-item ${item.type || ''}`}>
                  <div className="time-badge">{item.time}</div>
                  <div className="item-title">{item.title}</div>
                  <div className="item-desc">{item.desc}</div>

                  {/* Image Gallery */}
                  {item.images && item.images.length > 0 && (
                    <ImageGallery images={item.images} altText={item.title} />
                  )}

                  {/* Food Options Sub-cards */}
                  {item.foodOptions && item.foodOptions.map((f, fIdx) => (
                    <div key={fIdx} style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '10px', margin: '8px 0' }}>
                      <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--accent-gold)' }}>🍲 {f.name}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '4px 0 6px 0' }}>{f.desc}</div>
                      {f.images && f.images.length > 0 && (
                        <ImageGallery images={f.images} altText={f.name} />
                      )}
                      {f.mapUrl && (
                        <a href={f.mapUrl} target="_blank" rel="noreferrer" className="map-btn">
                          <MapPin size={12} />
                          <span>ดูพิกัดร้านบน Maps</span>
                        </a>
                      )}
                    </div>
                  ))}

                  {/* Action Link / Cost */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '6px' }}>
                    {item.mapUrl && (
                      <a href={item.mapUrl} target="_blank" rel="noreferrer" className="map-btn">
                        <MapPin size={12} />
                        <span>เปิด Google Maps</span>
                      </a>
                    )}
                    {item.cost && (
                      <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                        💰 {item.cost}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Day 1 Special Plan A vs Plan B Toggle */}
              {currentDayData.hasOptions && (
                <div className="plan-toggle-box">
                  <div className="toggle-header">
                    <span>💡 เลือกแผนช่วงบ่าย (ถ้าแฟนล้าจากการเดินทาง):</span>
                  </div>
                  <div className="toggle-switch">
                    <button 
                      className={`toggle-btn ${day1Plan === 'planA' ? 'active plan-a' : ''}`}
                      onClick={() => setDay1Plan('planA')}
                    >
                      Plan A: เที่ยวต่อ 🛍️
                    </button>
                    <button 
                      className={`toggle-btn ${day1Plan === 'planB' ? 'active plan-b' : ''}`}
                      onClick={() => setDay1Plan('planB')}
                    >
                      Plan B: พากลับไปนอนพัก (แนะนำ 💖)
                    </button>
                  </div>

                  {/* Display Selected Plan Items */}
                  <div style={{ marginTop: '12px' }}>
                    {day1Plan === 'planA' && currentDayData.planA ? (
                      <div>
                        {currentDayData.planA.items.map((pi, pIdx) => (
                          <div key={pIdx} style={{ fontSize: '0.8rem', marginBottom: '8px' }}>
                            <strong style={{ color: 'var(--accent-orange)' }}>{pi.time}</strong> - {pi.title}
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{pi.desc}</div>
                          </div>
                        ))}
                      </div>
                    ) : currentDayData.planB ? (
                      <div>
                        {currentDayData.planB.items.map((pi, pIdx) => (
                          <div key={pIdx} style={{ fontSize: '0.8rem', marginBottom: '8px' }}>
                            <strong style={{ color: 'var(--accent-green)' }}>{pi.time}</strong> - {pi.title}
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{pi.desc}</div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              )}

              {/* Evening Timeline if any */}
              {currentDayData.eveningTimeline && currentDayData.eveningTimeline.map((item, idx) => (
                <div key={`eve-${idx}`} className={`timeline-item ${item.type || ''}`}>
                  <div className="time-badge">{item.time}</div>
                  <div className="item-title">{item.title}</div>
                  <div className="item-desc">{item.desc}</div>
                  {item.images && item.images.length > 0 && (
                    <ImageGallery images={item.images} altText={item.title} />
                  )}
                  {item.mapUrl && (
                    <a href={item.mapUrl} target="_blank" rel="noreferrer" className="map-btn">
                      <MapPin size={12} />
                      <span>เปิด Google Maps</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </main>

      {/* Sticky Footer Approval Bar */}
      <footer className="sticky-approval-bar">
        <button 
          className={`approve-btn ${isCurrentTripApproved ? 'approved-state' : ''}`}
          onClick={handleApproveTrip}
        >
          <Heart fill={isCurrentTripApproved ? "#fff" : "none"} size={18} />
          <span>
            {isCurrentTripApproved 
              ? `${tripOverview.title} ได้รับอนุมัติเรียบร้อย! 🎉❤️` 
              : `อนุมัติทริป ${tripOverview.title} (Approve Trip ❤️)`
            }
          </span>
        </button>
      </footer>

      {/* Celebration Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-heart">{tripOverview.flag || '✈️'}💖</div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
              เย้! ทริป {tripOverview.title} ได้รับการอนุมัติแล้ว 🎉
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              เดินทางช่วง {tripOverview.dates} นี้! เตรียมกล้องถ่ายรูปและพาสปอร์ตให้พร้อมเลยครับ! ❤️
            </p>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>
              ปิดหน้าต่าง & ไปเตรียมจัดกระเป๋า 🧳
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
