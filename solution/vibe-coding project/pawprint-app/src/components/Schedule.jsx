import { useState } from 'react';

const scheduleData = {
  firstHalf: [
    {
      id: '01',
      time: '8:30 AM',
      title: 'Registration & Morning Coffee',
      location: 'Main Lobby',
      tags: ['networking', 'registration'],
      type: 'break',
      description: 'Your day starts here. Pick up your badge, grab a coffee, and connect with fellow veterinary professionals from across the country before the sessions begin.',
      details: 'Light breakfast provided. Conference swag bags available at the registration desk. Pawprint team members on hand to welcome you and answer any questions.'
    },
    {
      id: '02',
      time: '9:00 AM',
      title: 'The Telehealth Gap',
      location: 'Main Hall',
      tags: ['keynote', 'telehealth', 'industry trends', 'revenue growth'],
      type: 'keynote',
      description: 'Telehealth adoption among veterinary practices dropped from 38% to 29% between 2023 and 2024. This keynote unpacks what\'s driving the hesitation — and what the practices gaining the most revenue right now are doing differently.',
      details: 'Telehealth adoption dropped from 38% in 2023 to 29.2% in 2024 — a counterintuitive trend in a market growing at nearly 20% CAGR. This keynote opens the day with a clear-eyed look at what\'s holding practices back and what the data says about the window of opportunity for independent practice owners who move now.',
      speaker: { initials: 'SC', name: 'Dr. Sarah Chen', role: 'CEO & Co-Founder, Pawprint' }
    },
    {
      id: '03',
      time: '9:45 AM',
      title: 'Beyond the Burnout Ceiling',
      location: 'Main Hall',
      tags: ['keynote', 'burnout', 'work-life balance', 'independent practice'],
      type: 'keynote',
      description: 'Dr. Amanda Foster runs three veterinary clinics across the Bay Area. After rolling out Pawprint, her practice added $10,000+ in monthly revenue while cutting on-call hours by 40%.',
      details: 'Burnout costs the US veterinary industry between $1 and $2 billion annually in lost revenue. Dr. Foster will walk through her practice-wide Pawprint rollout — which location piloted first, how she got staff buy-in, how she handled compliance across two states, and what the revenue curve actually looked like. Q&A in the final 10 minutes.',
      speaker: { initials: 'AF', name: 'Dr. Amanda Foster', role: 'Owner, Foster Veterinary Group' }
    },
    {
      id: '04',
      time: '10:30 AM',
      title: 'Coffee Break + Demos',
      location: 'Main Hall Foyer',
      tags: ['networking', 'demo', 'break'],
      type: 'break',
      description: 'Take a break, refuel, and explore live Pawprint demos — drop in at your own pace, ask anything, and see the platform in action.',
      details: 'Three demo stations running simultaneously — booking flow & scheduling, vet dashboard & digital records, and prescription fulfilment & pharmacy integration. No sign-up required.',
      speaker: { initials: 'PT', name: 'Product Team', role: 'Pawprint' }
    },
    {
      id: '05',
      time: '11:00 AM',
      title: 'Telehealth Regulations by State',
      location: 'Main Hall',
      tags: ['keynote', 'compliance', 'licensing'],
      type: 'keynote',
      description: 'A plain-English breakdown of where VCPR laws stand today, which states changed the rules in 2024–2026, and exactly what you need to do to practice telehealth legally and confidently in your state.',
      details: 'Twenty-two states have language explicitly requiring an in-person examination to establish a VCPR — while states including Florida, Arizona, California, and Washington DC have recently moved to allow virtual VCPR establishment under specific conditions. This session delivers a state-by-state compliance checklist attendees can take home and act on immediately.',
      speaker: { initials: 'MW', name: 'Marcus Webb', role: 'Regulatory Counsel, Pawprint' }
    },
    {
      id: '06',
      time: '11:45 AM',
      title: 'The Independent Vet in 2030',
      location: 'Main Hall',
      tags: ['keynote', 'future', 'AI'],
      type: 'keynote',
      description: 'An honest, data-backed look at the forces reshaping independent veterinary practice over the next five years — the near-term pressures, the structural opportunity, and what the practices most likely to thrive are doing today.',
      details: 'Forecasts show a deficit of 70,092 veterinarians by 2032 versus only 52,926 graduates — a structural shortage that creates a real and lasting opportunity for independent practice owners who build flexible, telehealth-enabled models now.',
      speaker: { initials: 'PN', name: 'Dr. Priya Nair', role: 'Veterinary Telehealth Analyst' }
    },
    {
      id: '07',
      time: '12:30 PM',
      title: 'Lunch Break',
      location: 'Dining Hall',
      tags: ['networking', 'break'],
      type: 'break',
      description: 'A relaxed lunch break with open seating — connect with peers, swap stories, and continue conversations from the morning sessions.',
      details: 'Catered lunch included with registration. Dietary options available — indicate preferences at registration. Informal seating, no assigned tables.'
    }
  ],
  secondHalf: [
    {
      id: '08',
      time: '1:30 PM',
      title: 'Vets Who Made the Switch',
      location: 'Main Hall',
      tags: ['panel', 'career', 'tech-transition'],
      type: 'panel',
      description: 'A candid peer conversation led by veterinarians who\'ve been in your shoes — real numbers, real challenges, real outcomes from their first six months on Pawprint.',
      details: 'The global online vet consultation market reached $1.2 billion in 2024 and is projected to reach $6.46 billion by 2034. These panelists represent a range of practice sizes and geographies and will speak to what early adoption looks like on the ground. Audience Q&A in the final 15 minutes.'
    },
    {
      id: 'break',
      time: '2:15 PM',
      title: 'Coffee & Networking',
      location: '',
      tags: ['break'],
      type: 'break',
      description: 'Short break before the parallel tracks begin.'
    },
    {
      id: '09',
      time: '2:30 PM',
      title: 'Parallel Tracks',
      location: '',
      tags: [],
      type: 'parallel',
      description: 'Choose your own adventure — deep-dive office hours, hands-on demos, or peer-facilitated roundtables.',
      tracks: [
        { 
          room: 'Room A', 
          title: 'Office Hours', 
          description: 'One-on-One with Engineers', 
          tags: ['09A', 'Q&A'],
          details: 'A focused, small-group session for practice owners actively evaluating telehealth. Bring your real questions — this is your time to get direct answers from the Pawprint Vet Relations team. Limited to 20 pre-approved practice owners.',
          inviteOnly: true
        },
        { 
          room: 'Room B', 
          title: 'Open Demo Stations', 
          description: 'Hands-On Product Demos', 
          tags: ['09B', 'Demo'],
          details: 'See Pawprint in action on your own terms. Three stations running simultaneously — booking flow & scheduling, vet dashboard & digital records, and prescription fulfilment & pharmacy integration. No sign-up required, no time limit.'
        },
        { 
          room: 'Main Hall', 
          title: 'Peer Roundtables', 
          description: 'Facilitated Discussions', 
          tags: ['09C', 'Discussion'],
          details: 'Three facilitated table discussions: (1) Closing the rural access gap, (2) Pricing telehealth consultations profitably, (3) Protecting work-life balance as a practice owner. Open seating, peer-led conversations.'
        }
      ]
    },
    {
      id: '10',
      time: '3:15 PM',
      title: 'AI Triage in Practice',
      location: 'Main Hall',
      tags: ['lightning-talk', 'AI', 'triage'],
      type: 'lightning',
      description: 'Pawprint\'s Head of Product presents the latest clinical benchmarks on veterinary AI triage — what the research shows, where the real accuracy gains are, and how responsible deployment works in a live practice environment.',
      details: 'Purpose-built veterinary triage AI achieved 81% clinical accuracy in independent testing, surpassing general-purpose models including Gemini (69%) and ChatGPT (50%). A clear-eyed look at where AI triage delivers real value in veterinary practice today — and where the profession is heading next.',
      speaker: { initials: 'JF', name: 'Jordan Federer', role: 'Head of Product, Pawprint' }
    },
    {
      id: '11',
      time: '3:35 PM',
      title: 'Closing Keynote',
      location: 'Main Hall',
      tags: ['keynote', 'vision', 'future'],
      type: 'keynote',
      description: 'A forward-looking close to the day — where Pawprint is heading next, how vet partners shape the product roadmap, and what joining the Pawprint network looks like from day one.',
      details: 'The global online vet consultation market is projected to reach $6.46 billion by 2034, growing at 18.34% CAGR. This session closes the day with Pawprint\'s product vision, upcoming features shaped by vet partner feedback, and a clear picture of what partnership looks like from day one.',
      speaker: { initials: 'SC', name: 'Dr. Sarah Chen', role: 'CEO & Co-Founder, Pawprint' }
    },
    {
      id: '12',
      time: '4:05 PM',
      title: 'Closing Remarks & Thanks',
      location: 'Main Hall',
      tags: ['closing'],
      type: 'closing',
      description: 'A concise wrap-up with everything you need to take the next step — onboarding resources, key contacts, and what happens after today.',
      details: 'All registered attendees will receive a follow-up email within 48 hours with onboarding resources, select session recordings, and a direct contact for the Vet Relations team.'
    },
    {
      id: '13',
      time: '4:15 PM',
      title: 'Evening Reception',
      location: 'Rooftop Terrace',
      tags: ['networking', 'social'],
      type: 'networking',
      description: 'End the day the right way — drinks, light bites, and great company on the rooftop. The best conversations of the day often happen here.',
      details: 'Open bar and light appetisers included with registration. All attendees welcome.'
    }
  ]
};

const tagColors = {
  keynote: { bg: '#CCC07F', color: '#000000', fontWeight: 800 },
  panel: { bg: '#1A1A1A', color: '#CCC07F', fontWeight: 700 },
  'lightning-talk': { bg: '#1A1A1A', color: '#CCC07F', fontWeight: 700 },
  networking: { bg: '#111111', color: '#AAAAAA', fontWeight: 700 },
  break: { bg: '#111111', color: '#666666', fontWeight: 700 },
  default: { bg: '#111111', color: '#AAAAAA', fontWeight: 700 }
};

function EventModal({ session, onClose }) {
  if (!session) return null;

  const isParallel = session.type === 'parallel';

  return (
    <div 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#111111',
          borderRadius: '16px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          border: '1px solid #333333',
          position: 'relative'
        }}
      >
        {/* Header */}
        <div style={{ 
          padding: '32px', 
          borderBottom: '1px solid #1A1A1A',
          position: 'sticky',
          top: 0,
          backgroundColor: '#111111',
          borderRadius: '16px 16px 0 0'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: '#666666',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px 8px'
            }}
          >
            ×
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ 
              color: '#CCC07F', 
              fontFamily: '"Inter", system-ui, sans-serif', 
              fontSize: '14px', 
              fontWeight: 700,
              letterSpacing: '1px'
            }}>
              {session.time}
            </span>
            {session.location && (
              <span style={{ 
                color: '#666666', 
                fontFamily: '"Inter", system-ui, sans-serif', 
                fontSize: '12px' 
              }}>
                • {session.location}
              </span>
            )}
          </div>
          <h2 style={{ 
            color: '#FFFFFF', 
            fontFamily: '"Inter", system-ui, sans-serif', 
            fontSize: '24px', 
            fontWeight: 800, 
            margin: 0,
            lineHeight: '1.2'
          }}>
            {session.title}
          </h2>
        </div>

        {/* Content */}
        <div style={{ padding: '32px' }}>
          {session.description && (
            <p style={{ 
              color: '#CCCCCC', 
              fontFamily: '"Inter", system-ui, sans-serif', 
              fontSize: '16px', 
              lineHeight: '1.6',
              margin: '0 0 24px 0'
            }}>
              {session.description}
            </p>
          )}

          {session.details && (
            <div style={{ 
              backgroundColor: '#0A0A0A', 
              borderRadius: '8px', 
              padding: '20px',
              marginBottom: '24px'
            }}>
              <h4 style={{ 
                color: '#CCC07F', 
                fontFamily: '"Inter", system-ui, sans-serif', 
                fontSize: '12px', 
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                margin: '0 0 12px 0'
              }}>
                More Details
              </h4>
              <p style={{ 
                color: '#888888', 
                fontFamily: '"Inter", system-ui, sans-serif', 
                fontSize: '14px', 
                lineHeight: '1.6',
                margin: 0
              }}>
                {session.details}
              </p>
            </div>
          )}

          {/* Parallel Tracks Details */}
          {isParallel && session.tracks && (
            <div style={{ marginBottom: '24px' }}>
              {session.tracks.map((track, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: '#0A0A0A', 
                  borderRadius: '8px', 
                  padding: '20px',
                  marginBottom: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ 
                      color: '#CCC07F', 
                      fontFamily: '"Inter", system-ui, sans-serif', 
                      fontSize: '11px', 
                      fontWeight: 600,
                      letterSpacing: '1px'
                    }}>
                      {track.room}
                    </span>
                    {track.inviteOnly && (
                      <span style={{ 
                        backgroundColor: '#CCC07F', 
                        color: '#000000', 
                        fontFamily: '"Inter", system-ui, sans-serif', 
                        fontSize: '9px', 
                        fontWeight: 700,
                        letterSpacing: '1px',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                      }}>
                        Invite Only
                      </span>
                    )}
                  </div>
                  <h4 style={{ 
                    color: '#FFFFFF', 
                    fontFamily: '"Inter", system-ui, sans-serif', 
                    fontSize: '16px', 
                    fontWeight: 600, 
                    margin: '0 0 8px 0' 
                  }}>
                    {track.title}
                  </h4>
                  <p style={{ 
                    color: '#888888', 
                    fontFamily: '"Inter", system-ui, sans-serif', 
                    fontSize: '13px', 
                    lineHeight: '1.5',
                    margin: 0
                  }}>
                    {track.details}
                  </p>
                </div>
              ))}
            </div>
          )}

          {session.speaker && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '16px',
              padding: '16px',
              backgroundColor: '#0A0A0A',
              borderRadius: '8px',
              marginBottom: '24px'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: '#1A1A1A', 
                borderRadius: '20px', 
                width: '40px', 
                height: '40px',
                flexShrink: 0
              }}>
                <span style={{ 
                  color: '#CCC07F', 
                  fontFamily: '"Inter", system-ui, sans-serif', 
                  fontSize: '14px', 
                  fontWeight: 800 
                }}>
                  {session.speaker.initials}
                </span>
              </div>
              <div>
                <div style={{ 
                  color: '#FFFFFF', 
                  fontFamily: '"Inter", system-ui, sans-serif', 
                  fontSize: '16px', 
                  fontWeight: 700 
                }}>
                  {session.speaker.name}
                </div>
                <div style={{ 
                  color: '#888888', 
                  fontFamily: '"Inter", system-ui, sans-serif', 
                  fontSize: '13px' 
                }}>
                  {session.speaker.role}
                </div>
              </div>
            </div>
          )}

          {session.tags && session.tags.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {session.tags.map((tag, idx) => {
                const colors = tagColors[tag] || tagColors.default;
                const isHighlight = tag === 'keynote';
                return (
                  <span key={idx} style={{ 
                    backgroundColor: colors.bg, 
                    color: colors.color, 
                    fontFamily: '"Inter", system-ui, sans-serif', 
                    fontSize: '11px', 
                    fontWeight: colors.fontWeight, 
                    letterSpacing: '1px',
                    padding: '6px 12px', 
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    border: isHighlight ? 'none' : '1px solid #333333'
                  }}>
                    {tag}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SessionCard({ session, onClick }) {
  const isParallel = session.type === 'parallel';
  const isBreak = session.type === 'break' || session.type === 'closing';

  if (isParallel) {
    return (
      <div 
        onClick={onClick}
        style={{ 
          marginBottom: '32px', 
          cursor: 'pointer',
          transition: 'opacity 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ color: '#CCC07F', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 700, letterSpacing: '1px' }}>
            {session.time}
          </span>
          <span style={{ color: '#888888', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px' }}>
            Parallel Tracks — Click for details
          </span>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          {session.tracks.map((track, idx) => (
            <div key={idx} style={{ 
              flex: 1, 
              backgroundColor: '#111111', 
              borderRadius: '12px', 
              padding: '20px',
              borderTop: '2px solid #CCC07F'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ color: '#CCC07F', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 500 }}>
                  {track.room}
                </span>
                {track.inviteOnly && (
                  <span style={{ 
                    backgroundColor: '#CCC07F', 
                    color: '#000000', 
                    fontSize: '8px', 
                    fontWeight: 700,
                    padding: '2px 4px', 
                    borderRadius: '2px'
                  }}>
                    INVITE
                  </span>
                )}
              </div>
              <h4 style={{ color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, margin: '0 0 4px 0' }}>
                {track.title}
              </h4>
              <p style={{ color: '#888888', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '13px', margin: '0 0 12px 0' }}>
                {track.description}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {track.tags.map((tag, i) => (
                  <span key={i} style={{ 
                    backgroundColor: '#1A1A1A', 
                    color: '#AAAAAA', 
                    fontFamily: '"Inter", system-ui, sans-serif', 
                    fontSize: '10px', 
                    fontWeight: 700, 
                    letterSpacing: '1px',
                    padding: '4px 8px', 
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      style={{ 
        display: 'flex', 
        paddingBlock: '32px', 
        borderBottom: '1px solid #1A1A1A',
        opacity: isBreak ? 0.7 : 1,
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0A0A0A'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <div style={{ width: '140px', flexShrink: 0 }}>
        <span style={{ 
          color: isBreak ? '#666666' : '#CCC07F', 
          fontFamily: '"Inter", system-ui, sans-serif', 
          fontSize: '16px', 
          fontWeight: 700, 
          letterSpacing: '1px' 
        }}>
          {session.time}
        </span>
      </div>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div>
          <h3 style={{ 
            color: isBreak ? '#666666' : '#FFFFFF', 
            fontFamily: '"Inter", system-ui, sans-serif', 
            fontSize: '20px', 
            fontWeight: 800, 
            margin: '0 0 4px 0' 
          }}>
            {session.title}
          </h3>
          {session.location && (
            <p style={{ color: '#888888', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', margin: 0 }}>
              {session.location}
            </p>
          )}
        </div>
        {session.tags && session.tags.length > 0 && (
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {session.tags.map((tag, idx) => {
              const colors = tagColors[tag] || tagColors.default;
              const isHighlight = tag === 'keynote';
              return (
                <span key={idx} style={{ 
                  backgroundColor: colors.bg, 
                  color: colors.color, 
                  fontFamily: '"Inter", system-ui, sans-serif', 
                  fontSize: '10px', 
                  fontWeight: colors.fontWeight, 
                  letterSpacing: '1px',
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  border: isHighlight ? 'none' : '1px solid #333333'
                }}>
                  {tag}
                </span>
              );
            })}
          </div>
        )}
      </div>
      {session.speaker && (
        <div style={{ width: '200px', display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#1A1A1A', 
            borderRadius: '16px', 
            width: '32px', 
            height: '32px', 
            flexShrink: 0 
          }}>
            <span style={{ color: '#CCC07F', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', fontWeight: 800 }}>
              {session.speaker.initials}
            </span>
          </div>
          <div>
            <div style={{ color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 700 }}>
              {session.speaker.name}
            </div>
            <div style={{ color: '#888888', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px' }}>
              {session.speaker.role}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('first');
  const [selectedSession, setSelectedSession] = useState(null);

  return (
    <div id="schedule" style={{ backgroundColor: '#050505', paddingBlock: '100px', paddingInline: '120px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: '48px', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>
          <span style={{ color: '#FFFFFF' }}>CONFERENCE </span>
          <span style={{ color: '#CCC07F' }}>SCHEDULE</span>
        </h2>
        <p style={{ color: '#666666', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', marginTop: '16px' }}>
          Click any session for more details
        </p>
      </div>

      {/* Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '32px', 
        borderBottom: '1px solid #333333', 
        marginBottom: '32px',
        maxWidth: '900px',
        marginInline: 'auto'
      }}>
        <button
          onClick={() => setActiveTab('first')}
          style={{
            background: 'none',
            border: 'none',
            paddingBottom: '12px',
            borderBottom: activeTab === 'first' ? '2px solid #CCC07F' : '2px solid transparent',
            cursor: 'pointer',
            color: activeTab === 'first' ? '#FFFFFF' : '#666666',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >
          First Half (8:30 AM – 12:30 PM)
        </button>
        <button
          onClick={() => setActiveTab('second')}
          style={{
            background: 'none',
            border: 'none',
            paddingBottom: '12px',
            borderBottom: activeTab === 'second' ? '2px solid #CCC07F' : '2px solid transparent',
            cursor: 'pointer',
            color: activeTab === 'second' ? '#FFFFFF' : '#666666',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >
          Second Half (1:30 PM – 6:00 PM)
        </button>
      </div>

      {/* Schedule Content */}
      <div style={{ maxWidth: '900px', marginInline: 'auto' }}>
        {activeTab === 'first' && scheduleData.firstHalf.map((session, idx) => (
          <SessionCard key={idx} session={session} onClick={() => setSelectedSession(session)} />
        ))}
        {activeTab === 'second' && scheduleData.secondHalf.map((session, idx) => (
          <SessionCard key={idx} session={session} onClick={() => setSelectedSession(session)} />
        ))}
      </div>

      {/* Modal */}
      {selectedSession && (
        <EventModal session={selectedSession} onClose={() => setSelectedSession(null)} />
      )}
    </div>
  );
}
