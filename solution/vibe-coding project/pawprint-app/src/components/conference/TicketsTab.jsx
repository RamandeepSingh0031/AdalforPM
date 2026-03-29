import { useState, useEffect } from 'react';

const featureIcon = '✦';

const practiceSizeOptions = [
  { value: '', label: 'Select practice size' },
  { value: '1', label: '1' },
  { value: '2-5', label: '2–5' },
  { value: '6-10', label: '6–10' },
  { value: '10+', label: '10+' },
];

const telehealthStatusOptions = [
  { value: '', label: 'Select current status' },
  { value: 'not_offering', label: 'Not offering' },
  { value: 'evaluating', label: 'Evaluating' },
  { value: 'offering_not_results', label: 'Already offering but not seeing the results I expected' },
  { value: 'offering_scaling', label: 'Offering telehealth and looking to scale' },
];

const locationCountOptions = [
  { value: '', label: 'Select number of locations' },
  { value: '1', label: '1 location' },
  { value: '2-5', label: '2–5 locations' },
  { value: '6-10', label: '6–10 locations' },
  { value: '10+', label: '10+ locations' },
];

const telehealthSituationOptions = [
  { value: '', label: 'Select your situation' },
  { value: 'just_starting', label: 'Just starting to explore telehealth' },
  { value: 'pilot_stage', label: 'Running a pilot program' },
  { value: 'established', label: 'Established but looking to optimize' },
  { value: 'scaling', label: 'Scaling across multiple locations' },
];

const officeHoursGoalOptions = [
  { value: '', label: 'Select your primary goal' },
  { value: 'compliance', label: 'Understand state-by-state compliance requirements' },
  { value: 'integration', label: 'Learn how to integrate telehealth into my workflow' },
  { value: 'roi', label: 'Maximize ROI and revenue from telehealth' },
  { value: 'staff_training', label: 'Train my team on best practices' },
  { value: 'platform_demo', label: 'Get a hands-on demo of the Pawprint platform' },
];

const planOptions = [
  { value: 'individual', label: 'Individual Professional — $195', price: 195 },
  { value: 'practice_leader', label: 'Practice Leader (VIP) — $495', price: 495 },
];

const inputBaseStyle = {
  width: '100%',
  padding: '14px 16px',
  backgroundColor: '#0A0A0A',
  border: '1px solid #2A2A2A',
  borderRadius: '4px',
  color: '#FFFFFF',
  fontSize: '14px',
  fontFamily: '"Inter", system-ui, sans-serif',
  outline: 'none',
  boxSizing: 'border-box',
};

const selectStyle = {
  ...inputBaseStyle,
  cursor: 'pointer',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center',
  paddingRight: '40px',
};

const individualFeatures = [
  'Full Summit Access — All Keynotes & Panels',
  'State-by-State Compliance Deep-Dive',
  'AI Triage Live Demo & Workshop',
  'Networking Lounge Access',
  'Digital Summit Playbook',
  'Post-Event Recording Access',
];

const vipFeatures = [
  'Everything in Individual, plus…',
  'Invite-Only Office Hours with Pawprint Leadership',
  'Compliance Playbook — Customized for Your State',
  'Priority Seating (Front 3 Rows)',
  'Exclusive VIP Dinner (Evening of Day 1)',
  '1-on-1 Practice Integration Consultation',
  'Early Access to Pawprint Platform Beta',
];

function PricingCard({ tier, price, originalPrice, features, isVip, badge }) {
  return (
    <div style={{
      flex: '1 1 0%',
      maxWidth: '520px',
      minWidth: '0',
      backgroundColor: isVip ? '#0F0D06' : '#0A0A0A',
      border: isVip ? '1px solid #CCC07F' : '1px solid #1A1A1A',
      borderRadius: '8px',
      padding: '48px 40px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {badge && (
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
          backgroundColor: '#CCC07F',
          color: '#050505',
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '1px',
          padding: '6px 16px',
          borderBottomLeftRadius: '6px',
          textTransform: 'uppercase',
        }}>
          {badge}
        </div>
      )}

      <div style={{
        color: isVip ? '#CCC07F' : '#666666',
        fontSize: '13px',
        fontWeight: 700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom: '12px',
      }}>
        {tier}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
        <span style={{ color: '#FFFFFF', fontSize: '52px', fontWeight: 900, lineHeight: 1, letterSpacing: '-2px' }}>
          ${price}
        </span>
        {originalPrice && (
          <span style={{ color: '#555555', fontSize: '20px', fontWeight: 500, textDecoration: 'line-through' }}>
            ${originalPrice}
          </span>
        )}
      </div>
      <div style={{ color: '#555555', fontSize: '14px', marginBottom: '36px', lineHeight: '20px' }}>
        per practitioner · early bird pricing
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', flex: 1 }}>
        {features.map((feat, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <span style={{
              color: isVip ? '#CCC07F' : '#9A8E4E',
              fontSize: '12px',
              marginTop: '4px',
              flexShrink: 0,
            }}>
              {featureIcon}
            </span>
            <span style={{
              color: i === 0 && isVip ? '#CCC07F' : '#CCCCCC',
              fontSize: '14px',
              fontWeight: i === 0 && isVip ? 600 : 400,
              lineHeight: '22px',
            }}>
              {feat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormField({ label, required, children }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{
        display: 'block',
        color: '#CCCCCC',
        fontSize: '13px',
        fontWeight: 500,
        marginBottom: '8px',
        fontFamily: '"Inter", system-ui, sans-serif',
      }}>
        {label}{required && <span style={{ color: '#CCC07F', marginLeft: '4px' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function RegistrationModal({ isOpen, onClose, selectedPlan }) {
  const [formData, setFormData] = useState({
    plan: '',
    fullName: '',
    email: '',
    practiceName: '',
    practiceSize: '',
    telehealthStatus: '',
    applyOfficeHours: false,
    locationCount: '',
    telehealthSituation: '',
    officeHoursGoal: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleClose}
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
        padding: '20px',
        boxSizing: 'border-box',
      }}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#0A0A0A',
          border: '1px solid #2A2A2A',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '520px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}>
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#666666',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '4px',
            lineHeight: 1,
          }}>
          ×
        </button>

        {submitted ? (
          <div style={{ padding: '64px 48px', textAlign: 'center' }}>
            <div style={{ color: '#CCC07F', fontSize: '48px', marginBottom: '24px' }}>✓</div>
            <div style={{
              color: '#FFFFFF',
              fontSize: '28px',
              fontWeight: 700,
              marginBottom: '16px',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}>
              Registration Received!
            </div>
            <div style={{
              color: '#888888',
              fontSize: '16px',
              lineHeight: '24px',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}>
              We'll send a confirmation email to <span style={{ color: '#CCCCCC' }}>{formData.email}</span> with next steps.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: '48px' }}>
            <div style={{
              color: '#FFFFFF',
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '8px',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}>
              Reserve Your Seat
            </div>
            <div style={{
              color: '#666666',
              fontSize: '14px',
              marginBottom: '32px',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}>
              Complete the form below to register for the 2026 Vet Summit.
            </div>

            <FormField label="Ticket Type" required>
              <select
                required
                value={formData.plan}
                onChange={(e) => handleChange('plan', e.target.value)}
                style={selectStyle}
              >
                <option value="">Select a ticket type</option>
                {planOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </FormField>

            <FormField label="Full Name" required>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                style={inputBaseStyle}
              />
            </FormField>

            <FormField label="Email Address" required>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="you@practice.com"
                style={inputBaseStyle}
              />
            </FormField>

            <FormField label="Practice Name" required>
              <input
                type="text"
                required
                value={formData.practiceName}
                onChange={(e) => handleChange('practiceName', e.target.value)}
                placeholder="Enter your practice name"
                style={inputBaseStyle}
              />
            </FormField>

            <FormField label="Practice Size" required>
              <select
                required
                value={formData.practiceSize}
                onChange={(e) => handleChange('practiceSize', e.target.value)}
                style={selectStyle}
              >
                {practiceSizeOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </FormField>

            <FormField label="Current Telehealth Status" required>
              <select
                required
                value={formData.telehealthStatus}
                onChange={(e) => handleChange('telehealthStatus', e.target.value)}
                style={selectStyle}
              >
                {telehealthStatusOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </FormField>

            <div style={{
              marginTop: '28px',
              padding: '20px',
              backgroundColor: '#0F0D06',
              border: '1px solid #2A2A20',
              borderRadius: '6px',
            }}>
              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                cursor: 'pointer',
              }}>
                <input
                  type="checkbox"
                  checked={formData.applyOfficeHours}
                  onChange={(e) => handleChange('applyOfficeHours', e.target.checked)}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                    accentColor: '#CCC07F',
                    cursor: 'pointer',
                  }}
                />
                <div>
                  <div style={{
                    color: '#FFFFFF',
                    fontSize: '15px',
                    fontWeight: 600,
                    fontFamily: '"Inter", system-ui, sans-serif',
                  }}>
                    Apply for Office Hours?
                  </div>
                  <div style={{
                    color: '#888888',
                    fontSize: '13px',
                    marginTop: '4px',
                    fontFamily: '"Inter", system-ui, sans-serif',
                  }}>
                    Limited-seat session with Pawprint leadership (Practice Leader ticket required)
                  </div>
                </div>
              </label>

              {formData.applyOfficeHours && (
                <div style={{
                  marginTop: '24px',
                  paddingTop: '24px',
                  borderTop: '1px solid #2A2A20',
                }}>
                  <div style={{
                    color: '#CCC07F',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    fontFamily: '"Inter", system-ui, sans-serif',
                  }}>
                    Office Hours Qualifying Questions
                  </div>

                  <FormField label="How many locations does your practice operate?" required>
                    <select
                      required
                      value={formData.locationCount}
                      onChange={(e) => handleChange('locationCount', e.target.value)}
                      style={selectStyle}
                    >
                      {locationCountOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="How would you describe your current telehealth situation?" required>
                    <select
                      required
                      value={formData.telehealthSituation}
                      onChange={(e) => handleChange('telehealthSituation', e.target.value)}
                      style={selectStyle}
                    >
                      {telehealthSituationOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="What's the single biggest thing you want to walk away with from Office Hours?" required>
                    <select
                      required
                      value={formData.officeHoursGoal}
                      onChange={(e) => handleChange('officeHoursGoal', e.target.value)}
                      style={selectStyle}
                    >
                      {officeHoursGoalOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </FormField>
                </div>
              )}
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '18px 0',
                marginTop: '32px',
                backgroundColor: '#CCC07F',
                color: '#050505',
                border: 'none',
                borderRadius: '4px',
                fontSize: '15px',
                fontWeight: 800,
                letterSpacing: '1px',
                cursor: 'pointer',
                fontFamily: '"Inter", system-ui, sans-serif',
              }}
            >
              SUBMIT REGISTRATION
            </button>

            <div style={{
              color: '#555555',
              fontSize: '12px',
              textAlign: 'center',
              marginTop: '16px',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}>
              By registering, you agree to our Terms of Service and Privacy Policy.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function StickyBar({ selectedPlan, onPlanChange, onOpenModal }) {
  const currentPlan = planOptions.find(p => p.value === selectedPlan) || planOptions[1];

  return (
    <div style={{
      backgroundColor: '#0A0A0A',
      border: '1px solid #2A2A2A',
      borderRadius: '8px',
      padding: '24px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '48px',
      flexWrap: 'wrap',
    }}>
      <select
        value={selectedPlan}
        onChange={(e) => onPlanChange(e.target.value)}
        style={{
          ...selectStyle,
          width: 'auto',
          minWidth: '260px',
        }}
      >
        {planOptions.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{
          color: '#FFFFFF',
          fontSize: '32px',
          fontWeight: 900,
          fontFamily: '"Inter", system-ui, sans-serif',
        }}>
          ${currentPlan.price}
        </span>
        <button
          onClick={onOpenModal}
          style={{
            backgroundColor: '#CCC07F',
            color: '#050505',
            border: 'none',
            borderRadius: '4px',
            padding: '14px 32px',
            fontSize: '15px',
            fontWeight: 800,
            letterSpacing: '1px',
            cursor: 'pointer',
            fontFamily: '"Inter", system-ui, sans-serif',
            whiteSpace: 'nowrap',
          }}
        >
          RESERVE YOUR SEAT →
        </button>
      </div>
    </div>
  );
}

export default function TicketsTab() {
  const [selectedPlan, setSelectedPlan] = useState('practice_leader');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <div style={{
      backgroundColor: '#050505',
      paddingBlock: '140px',
      paddingInline: '120px',
      boxSizing: 'border-box',
    }}>
        <div style={{
          color: '#FFFFFF',
          fontFamily: '"Inter", system-ui, sans-serif',
          fontSize: '56px',
          fontWeight: 900,
          letterSpacing: '-2px',
          lineHeight: '68px',
          marginBottom: '64px',
          textAlign: 'center',
        }}>
          THE FUTURE IS LIMITED.
        </div>

        <div style={{
          display: 'flex',
          gap: '32px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          <PricingCard
            tier="Individual Professional"
            price="195"
            originalPrice="395"
            features={individualFeatures}
            isVip={false}
          />
          <PricingCard
            tier="Practice Leader"
            price="495"
            originalPrice="795"
            features={vipFeatures}
            isVip={true}
            badge="Recommended"
          />
        </div>

        <div style={{
          color: '#444444',
          fontSize: '13px',
          textAlign: 'center',
          marginTop: '48px',
          lineHeight: '18px',
        }}>
          Prices increase March 31, 2026. All tickets include complimentary coffee, lunch, and parking.
        </div>

        <StickyBar
          selectedPlan={selectedPlan}
          onPlanChange={setSelectedPlan}
          onOpenModal={() => setModalOpen(true)}
        />
      </div>

      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}
