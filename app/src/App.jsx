import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  MapPin, ExternalLink, Calendar, Plane, Heart, 
  CheckCircle2, Sparkles, Hotel, Award, DollarSign, Check 
} from 'lucide-react';
import { tripOverview, daysData } from './data/tripData';
import ImageGallery from './components/ImageGallery';

export default function App() {
  const [activeTab, setActiveTab] = useState(1); // 1-9 for days, 'overview' for overview
  const [day1Plan, setDay1Plan] = useState('planB'); // 'planA' or 'planB'
  const [approvedDays, setApprovedDays] = useState({});
  const [isFullyApproved, setIsFullyApproved] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Toggle individual day approval
  const toggleApproveDay = (dayNum) => {
    setApprovedDays(prev => ({
      ...prev,
      [dayNum]: !prev[dayNum]
    }));
  };

  // Trigger full trip approval
  const handleApproveTrip = () => {
    setIsFullyApproved(true);
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
    <div id="root">
      {/* Header */}
      <header className="app-header">
        <div className="hero-badge">
          <Sparkles size={13} />
          <span>Japan Autumn Trip 2026</span>
        </div>
        <h1 className="app-title">{tripOverview.title} 🍁</h1>
        <div className="app-subtitle">
          <Calendar size={14} />
          <span>{tripOverview.dates}</span>
        </div>
        <div className="app-subtitle" style={{ marginTop: '4px' }}>
          <Plane size={14} />
          <span>{tripOverview.route}</span>
        </div>
      </header>

      {/* Sticky Horizontal Day Tabs */}
      <div className="tabs-wrapper">
        <div className="tabs-scroll">
          <button 
            className={`tab-chip ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span>ภาพรวม</span>
            <span className="day-num">Overview</span>
          </button>
          
          {daysData.map(d => (
            <button 
              key={d.day}
              className={`tab-chip ${activeTab === d.day ? 'active' : ''}`}
              onClick={() => setActiveTab(d.day)}
            >
              <span>Day {d.day}</span>
              <span className="day-num">{d.city.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div style={{ padding: '16px' }}>
            <div className="glass-card">
              <h2 style={{ fontSize: '1.1rem', color: 'var(--accent-gold)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={18} /> สรุปเส้นทาง & เมืองที่พัก
              </h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {tripOverview.hotelBases.map((b, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.04)', padding: '10px 12px', borderRadius: '12px' }}>
                    <div>
                      <strong style={{ color: '#fff', fontSize: '0.9rem' }}>{b.city}</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{b.date}</div>
                    </div>
                    <span style={{ background: 'rgba(244,162,97,0.2)', color: 'var(--accent-orange)', padding: '4px 10px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 600 }}>
                      พัก {b.nights} คืน
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card">
              <h2 style={{ fontSize: '1.1rem', color: 'var(--accent-gold)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <DollarSign size={18} /> งบประมาณประมาณการ (ต่อคน)
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid var(--border-glass)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>ค่าตั๋วเครื่องบิน (Open-Jaw):</span>
                  <strong style={{ color: '#fff' }}>~ 34,000 บาท</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid var(--border-glass)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>ที่พัก 8 คืน (หาร 2):</span>
                  <strong style={{ color: '#fff' }}>~ 15,000 - 18,000 บาท</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid var(--border-glass)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>เดินทางบัส/รถไฟ:</span>
                  <strong style={{ color: '#fff' }}>~ 6,500 บาท</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid var(--border-glass)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>อาหาร 9 วัน (27 มื้อ):</span>
                  <strong style={{ color: '#fff' }}>~ 9,000 - 11,000 บาท</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '6px', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>รวมประมาณการ:</span>
                  <strong style={{ color: '#ff6b6b', fontWeight: 700 }}>{tripOverview.totalBudget}</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DAY VIEW TAB */}
        {typeof activeTab === 'number' && currentDayData && (
          <div>
            {/* Banner Card */}
            <div className="day-banner">
              <div className="day-title-row">
                <div className="day-header-title">Day {currentDayData.day}: {currentDayData.date}</div>
                <span className="city-badge">{currentDayData.city}</span>
              </div>
              <div className="theme-text">✨ {currentDayData.theme}</div>
              
              <div className="info-pills">
                <span className="pill"><Hotel size={12} /> พัก: {currentDayData.stay}</span>
              </div>
            </div>

            {/* Hotel Candidates Section */}
            {currentDayData.hotelCandidates && (
              <div style={{ padding: '0 16px', marginBottom: '16px' }}>
                <div className="glass-card" style={{ borderColor: 'rgba(233,196,106,0.3)' }}>
                  <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Hotel size={16} /> โรงแรมแนะนำย่าน {currentDayData.city}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {currentDayData.hotelCandidates.map((h, i) => (
                      <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ fontSize: '0.85rem', color: '#fff' }}>{h.name}</strong>
                          <span style={{ fontSize: '0.68rem', background: 'rgba(230,57,70,0.2)', color: '#ff6b6b', padding: '2px 6px', borderRadius: '8px' }}>{h.tag}</span>
                        </div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px' }}>{h.note}</p>
                        <ImageGallery images={h.images} altText={h.name} />
                        {h.mapUrl && (
                          <a href={h.mapUrl} target="_blank" rel="noreferrer" className="map-btn" style={{ marginTop: '6px' }}>
                            <MapPin size={12} /> ดูพิกัด Google Maps <ExternalLink size={10} />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Transport Pass Alert */}
            {currentDayData.transportPass && (
              <div style={{ padding: '0 16px', marginBottom: '16px' }}>
                <div className="glass-card" style={{ background: 'rgba(42, 157, 143, 0.15)', borderColor: 'rgba(42, 157, 143, 0.4)' }}>
                  <div style={{ fontWeight: 700, color: '#4ed9c5', fontSize: '0.85rem', marginBottom: '4px' }}>
                    🎫 พาสแนะนำประจำวัน: {currentDayData.transportPass.name} ({currentDayData.transportPass.price})
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#e0e0e0', lineHeight: 1.4 }}>
                    {currentDayData.transportPass.benefit}
                  </p>
                </div>
              </div>
            )}

            {/* DAY 1 Special Option Switcher (Plan A vs Plan B) */}
            {currentDayData.hasOptions && (
              <div style={{ padding: '0 16px' }}>
                <div className="plan-toggle-box">
                  <div className="toggle-header">
                    <span>💡 เลือกทางเลือกช่วงบ่าย (Day 1 Afternoon Choice)</span>
                  </div>
                  <div className="toggle-switch">
                    <button 
                      className={`toggle-btn ${day1Plan === 'planA' ? 'active plan-a' : ''}`}
                      onClick={() => setDay1Plan('planA')}
                    >
                      Plan A: เดินเที่ยววัดโอสึต่อ ⛩️
                    </button>
                    <button 
                      className={`toggle-btn ${day1Plan === 'planB' ? 'active plan-b' : ''}`}
                      onClick={() => setDay1Plan('planB')}
                    >
                      Plan B: แฟนเหนื่อย นอนพักชาร์จแบต 💖 (แนะนำ)
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Main Timeline */}
            <div className="timeline-container">
              <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-orange)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                📍 ตารางเวลาเดินทาง (Timeline)
              </h3>

              {currentDayData.timeline.map((t, idx) => (
                <div key={idx} className={`timeline-item ${t.type || ''}`}>
                  <div className="time-badge">{t.time}</div>
                  <div className="item-title">{t.title}</div>
                  <div className="item-desc">{t.desc}</div>

                  {/* Swipeable Image Gallery for Timeline Spot */}
                  <ImageGallery images={t.images} altText={t.title} />

                  {t.cost && (
                    <div style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', marginBottom: '6px', fontWeight: 600 }}>
                      💰 ค่าใช้จ่าย: {t.cost}
                    </div>
                  )}

                  {t.foodOptions && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px', marginBottom: '8px' }}>
                      {t.foodOptions.map((f, fi) => (
                        <div key={fi} style={{ background: 'rgba(233,196,106,0.08)', border: '1px solid rgba(233,196,106,0.3)', padding: '10px', borderRadius: '12px' }}>
                          <strong style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', display: 'block', marginBottom: '4px' }}>{f.name}</strong>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>{f.desc}</span>
                          
                          {/* Swipeable Food Gallery */}
                          <ImageGallery images={f.images} altText={f.name} />

                          {f.mapUrl && (
                            <div style={{ marginTop: '6px' }}>
                              <a href={f.mapUrl} target="_blank" rel="noreferrer" className="map-btn" style={{ padding: '4px 8px', fontSize: '0.7rem' }}>
                                <MapPin size={10} /> Google Maps
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {t.mapUrl && (
                    <a href={t.mapUrl} target="_blank" rel="noreferrer" className="map-btn">
                      <MapPin size={12} /> พิกัด Google Maps <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              ))}

              {/* Display Afternoon Choice for Day 1 */}
              {currentDayData.hasOptions && day1Plan === 'planA' && (
                <div>
                  <div style={{ padding: '8px 12px', background: 'rgba(230,57,70,0.15)', borderLeft: '3px solid #e63946', borderRadius: '8px', fontSize: '0.8rem', color: '#ff6b6b', marginBottom: '12px', fontWeight: 600 }}>
                    🟢 {currentDayData.planA.title}
                  </div>
                  {currentDayData.planA.items.map((pa, pai) => (
                    <div key={pai} className="timeline-item spot">
                      <div className="time-badge">{pa.time}</div>
                      <div className="item-title">{pa.title}</div>
                      <div className="item-desc">{pa.desc}</div>
                      <ImageGallery images={pa.images} altText={pa.title} />
                      {pa.mapUrl && (
                        <a href={pa.mapUrl} target="_blank" rel="noreferrer" className="map-btn">
                          <MapPin size={12} /> พิกัด Google Maps <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {currentDayData.hasOptions && day1Plan === 'planB' && (
                <div>
                  <div style={{ padding: '8px 12px', background: 'rgba(42,157,143,0.15)', borderLeft: '3px solid #2a9d8f', borderRadius: '8px', fontSize: '0.8rem', color: '#4ed9c5', marginBottom: '12px', fontWeight: 600 }}>
                    💖 {currentDayData.planB.title}
                  </div>
                  {currentDayData.planB.items.map((pb, pbi) => (
                    <div key={pbi} className="timeline-item hotel">
                      <div className="time-badge">{pb.time}</div>
                      <div className="item-title">{pb.title}</div>
                      <div className="item-desc">{pb.desc}</div>
                      <ImageGallery images={pb.images} altText={pb.title} />
                    </div>
                  ))}
                </div>
              )}

              {/* Day 1 Evening Flow */}
              {currentDayData.eveningTimeline && currentDayData.eveningTimeline.map((et, eti) => (
                <div key={eti} className={`timeline-item ${et.type || ''}`}>
                  <div className="time-badge">{et.time}</div>
                  <div className="item-title">{et.title}</div>
                  <div className="item-desc">{et.desc}</div>
                  <ImageGallery images={et.images} altText={et.title} />
                  {et.mapUrl && (
                    <a href={et.mapUrl} target="_blank" rel="noreferrer" className="map-btn">
                      <MapPin size={12} /> พิกัด Google Maps <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Checkmark Per Day */}
            <div style={{ padding: '16px' }}>
              <button 
                onClick={() => toggleApproveDay(currentDayData.day)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '12px',
                  border: approvedDays[currentDayData.day] ? '1px solid #2a9d8f' : '1px solid var(--border-glass)',
                  background: approvedDays[currentDayData.day] ? 'rgba(42, 157, 143, 0.2)' : 'rgba(255,255,255,0.04)',
                  color: approvedDays[currentDayData.day] ? '#4ed9c5' : 'var(--text-muted)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
              >
                {approvedDays[currentDayData.day] ? <CheckCircle2 size={16} /> : <Check size={16} />}
                <span>{approvedDays[currentDayData.day] ? `อนุมัติแผน Day ${currentDayData.day} เรียบร้อย!` : `กดอนุมัติแผน Day ${currentDayData.day}`}</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Sticky Bottom Bar for Girlfriend Approval */}
      <div className="sticky-approval-bar">
        <button 
          className={`approve-btn ${isFullyApproved ? 'approved-state' : ''}`}
          onClick={handleApproveTrip}
        >
          <Heart size={18} fill={isFullyApproved ? "#fff" : "none"} />
          <span>{isFullyApproved ? "อนุมัติทริปแล้ว ❤️ (Approved!)" : "อนุมัติทริปนี้! (Approve Trip ❤️)"}</span>
        </button>
      </div>

      {/* Celebration Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-heart">💖✈️🍁</div>
            <h2 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '8px', fontWeight: 700 }}>
              YEAH! ทริปได้รับการอนุมัติแล้ว!
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              เตรียมแพ็คกระเป๋าไปฟินกับใบไม้เปลี่ยนสีที่ญี่ปุ่นกันได้เลยค่ะ! (7 - 15 พ.ย. 2026) 🎉
            </p>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>
              ปิดหน้าต่าง & เตรียมแพ็คกระเป๋า ✨
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
