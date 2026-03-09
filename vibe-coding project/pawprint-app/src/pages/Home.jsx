import { useState, useEffect } from 'react';
import { GrainGradient } from '@paper-design/shaders-react';

// Import pet images
import img1 from '../assets/images/alexander-mass-q-1iFFFN6ls-unsplash.jpg';
import img2 from '../assets/images/jay-nlper-Tpff0kOfhYw-unsplash.jpg';
import img3 from '../assets/images/judy-beth-morris-3YU2gGotlq4-unsplash.jpg';
import img4 from '../assets/images/karlo-tottoc-y_EbiAIQrp4-unsplash.jpg';
import img5 from '../assets/images/pexels-ali-dashti-506667798-23692683.jpg';
import img6 from '../assets/images/pexels-gustavo-fring-6816849.jpg';
import img7 from '../assets/images/pexels-gustavo-fring-6816857.jpg';
import img8 from '../assets/images/pexels-tima-miroshnichenko-6130978.jpg';
import img9 from '../assets/images/pexels-tima-miroshnichenko-6235022.jpg';
import img10 from '../assets/images/pexels-tima-miroshnichenko-6235649.jpg';

// Import videos
import petOwnersVideo from '../assets/Videos/Pet Owners.mp4';
import vetsVideo from '../assets/Videos/Vets.mp4';

const petImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

// Smooth scroll to anchor
const scrollToSection = (e, sectionId) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVetsVideoHovered, setIsVetsVideoHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % petImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      backgroundColor: '#0F0F1A',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '12px',
      fontSynthesis: 'none',
      lineHeight: '16px',
      MozOsxFontSmoothing: 'grayscale',
      minHeight: '100vh',
      width: '100vw',
      overflowX: 'hidden',
      position: 'relative',
      WebkitFontSmoothing: 'antialiased'
    }}>
      {/* Grain Gradient - Hero section only */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100vh', zIndex: 0 }}>
        <GrainGradient
          speed={1.15}
          scale={2.63}
          rotation={255}
          offsetX={0.13}
          offsetY={-0.18}
          softness={0.7}
          intensity={0.35}
          noise={0.18}
          shape="wave"
          colors={['#C4730B', '#BDAD5F', '#D8CCC7']}
          colorBack="#00000000"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </div>

      {/* Hero Section */}
      <div style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: '100vh',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1,
        paddingTop: '84px',
        paddingLeft: '60px',
        paddingRight: '60px',
        gap: '40px'
      }}>
        <div style={{ flex: '0 0 55%', maxWidth: '600px' }}>
          <div style={{
            alignItems: 'flex-start',
            backgroundColor: '#111111B3',
            borderRadius: '181px',
            boxShadow: '#00000033 0px 2px 3px inset',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            paddingBlock: '60px',
            paddingInline: '80px',
            paddingLeft: '60px',
            width: '100%'
          }}>
            <div style={{ boxSizing: 'border-box', maxWidth: '600px', width: '100%' }}>
              <div style={{ boxSizing: 'border-box', color: '#DFE0DC', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '14px', lineHeight: '18px', marginBottom: '16px' }}>
                TELEHEALTH FOR PETS
              </div>
              <div style={{ boxSizing: 'border-box', marginBottom: '16px' }}>
                <div style={{ boxSizing: 'border-box', color: '#CCC07F', display: 'block', fontFamily: 'system-ui, sans-serif', fontSize: '56px', lineHeight: '1.1', marginBottom: '8px' }}>
                  Veterinary Care,
                </div>
                <div style={{ boxSizing: 'border-box', color: '#DFE0DC', display: 'block', fontFamily: 'system-ui, sans-serif', fontSize: '56px', lineHeight: '1.1' }}>
                  On Demand.
                </div>
              </div>
              <div style={{ boxSizing: 'border-box', color: '#D1D3C4', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '1.6', marginBottom: '24px' }}>
                Connect with licensed veterinarians in minutes. Get expert advice, digital prescriptions, and peace of mind — all from home.
              </div>
              <div style={{ boxSizing: 'border-box', display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <div style={{ backgroundColor: '#DFE0DC', borderRadius: '10px', boxSizing: 'border-box', paddingBlock: '16px', paddingInline: '32px', cursor: 'pointer' }}>
                  <div style={{ boxSizing: 'border-box', color: '#341431', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '22px' }}>
                    Book Consultation →
                  </div>
                </div>
                <div style={{ borderColor: '#E5E5E5', borderRadius: '10px', borderStyle: 'solid', borderWidth: '2px', boxSizing: 'border-box', paddingBlock: '14px', paddingInline: '30px', cursor: 'pointer' }}>
                  <div style={{ boxSizing: 'border-box', color: '#DFE0DC', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '22px' }}>
                    How It Works
                  </div>
                </div>
              </div>
              <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
                  <div style={{ boxSizing: 'border-box', color: '#DFE0DC', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '22px' }}>
                    ⭐⭐⭐⭐⭐
                  </div>
                  <div style={{ boxSizing: 'border-box', color: '#D1D3C4', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '14px', lineHeight: '18px' }}>
                    4.9/5 rating
                  </div>
                </div>
                <div style={{ boxSizing: 'border-box', color: '#D1D3C4', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '14px', lineHeight: '18px' }}>
                  |
                </div>
                <div style={{ boxSizing: 'border-box', display: 'inline-block' }}>
                  <div style={{ boxSizing: 'border-box', color: '#CCC07F', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '14px', lineHeight: '18px' }}>
                    50K+
                  </div>
                  <div style={{ boxSizing: 'border-box', color: '#D1D3C4', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '14px', lineHeight: '18px' }}>
                    pet owners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div style={{ flex: '0 0 40%', maxWidth: '45%', height: 'calc(100vh - 120px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
            {petImages.map((img, index) => (
              <img key={index} src={img} alt={`Pet ${index + 1}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', opacity: index === currentImageIndex ? 1 : 0, transition: 'opacity 1.5s ease-in-out', borderRadius: '32px' }} />
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Banner - Light section */}
      <div id="metrics" style={{ backgroundColor: '#0F0F1A', padding: '60px', display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
        {[
          { value: '50K+', label: 'Pet Owners' },
          { value: '120+', label: 'Licensed Vets' },
          { value: '15K', label: 'Monthly Consults' }
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ color: '#CCC07F', fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>{stat.value}</div>
            <div style={{ color: '#9A8E4E', fontSize: '16px' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* How It Works Section - Warm Parchment */}
      <section id="how-it-works" style={{ padding: '80px 60px', backgroundColor: '#F5F0E8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ color: '#0F0F1A', fontSize: '32px', letterSpacing: '3px' }}>HOW IT WORKS</div>
        <p style={{ color: '#4A4A4A', fontSize: '18px', marginTop: '16px', textAlign: 'center', maxWidth: '600px', lineHeight: '1.5' }}>Get expert veterinary care in minutes — from the comfort of your home.</p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap', padding: '0 40px', gap: '20px', marginTop: '60px', width: '100%', maxWidth: '1200px' }}>
          {[
            { icon: '📱', step: 'STEP 1', title: 'Book Your Consultation', desc: 'Select your pet, describe symptoms, and book a virtual appointment in minutes — available 24/7.' },
            { icon: '📹', step: 'STEP 2', title: 'Video Call with a Vet', desc: 'Connect with a licensed veterinarian via secure video. Get expert advice and recommendations.' },
            { icon: '📋', step: 'STEP 3', title: 'Receive Prescriptions', desc: 'Get digital prescriptions sent directly to your email or our pharmacy partners for delivery.' },
            { icon: '🏥', step: 'STEP 4', title: 'Follow-Up Care', desc: 'Need in-person care? Book follow-up appointments at partner clinics near you.' }
          ].map((item, i) => (
            <div key={i} style={{ flex: '1 1 0', minWidth: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '24px', padding: '40px 24px', background: '#111111' }}>
              <div style={{ width: '88px', height: '88px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #CCC07F 0%, #D8CCC7 100%)' }}>
                <div style={{ fontSize: '36px' }}>{item.icon}</div>
              </div>
              <div style={{ color: '#CCC07F', fontSize: '13px', letterSpacing: '2px', marginBottom: '12px' }}>{item.step}</div>
              <div style={{ color: '#FFFFFF', fontSize: '22px', textAlign: 'center', marginBottom: '16px', lineHeight: '1.3' }}>{item.title}</div>
              <div style={{ color: '#D1D3C4', fontSize: '15px', textAlign: 'center', lineHeight: '1.6' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* For Pet Owners Section - Dark */}
      <section id="for-pet-owners" style={{ padding: '80px 60px', backgroundColor: '#0F0F1A', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ color: '#DFE0DC', fontSize: '14px', letterSpacing: '3px' }}>FOR PET OWNERS</span>
        <h2 style={{ color: '#CCC07F', fontSize: '48px', marginTop: '16px', textAlign: 'center', lineHeight: '1.1' }}>Pet Care Made Simple</h2>
        <p style={{ color: '#D1D3C4', fontSize: '18px', marginTop: '16px', textAlign: 'center', maxWidth: '600px', lineHeight: '1.5' }}>Affordable, convenient veterinary care for your furry babies.</p>

        <div style={{ display: 'flex', gap: '60px', marginTop: '60px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ flex: '0 0 500px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {[
              { icon: '⏰', title: '24/7 Availability', desc: 'Vets available anytime — evenings, weekends, holidays.' },
              { icon: '💰', title: 'Affordable Pricing', desc: '$35-50 per consultation vs $70-174 in-clinic.' },
              { icon: '📱', title: 'Digital Prescriptions', desc: 'Prescriptions sent directly to your phone or pharmacy.' },
              { icon: '✨', title: 'Expert Peace of Mind', desc: 'Licensed veterinarians with years of experience.' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #CCC07F 0%, #9A8E4E 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '24px' }}>{item.icon}</span>
                </div>
                <div>
                  <h4 style={{ color: '#CCC07F', fontSize: '20px', margin: '0 0 8px 0' }}>{item.title}</h4>
                  <p style={{ color: '#D1D3C4', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ flex: '0 0 480px', position: 'relative' }}>
            <video src={petOwnersVideo} autoPlay loop muted playsInline style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }} />
          </div>
        </div>
      </section>

      {/* For Vets Section - Warm Parchment */}
      <section id="for-vets" style={{ padding: '80px 60px', backgroundColor: '#F5F0E8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ color: '#0F0F1A', fontSize: '14px', letterSpacing: '3px' }}>FOR VETERINARIANS</span>
        <h2 style={{ color: '#0F0F1A', fontSize: '48px', marginTop: '16px', textAlign: 'center', lineHeight: '1.1' }}>Expand Your Practice</h2>
        <p style={{ color: '#4A4A4A', fontSize: '18px', marginTop: '16px', textAlign: 'center', maxWidth: '600px', lineHeight: '1.6' }}>Additional revenue stream with flexible hours and reduced administrative burden.</p>

        {/* CTA */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{ color: '#0F0F1A', fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Start Earning in 48 Hours</p>
          <div style={{ background: 'linear-gradient(135deg, #CCC07F 0%, #9A8E4E 100%)', borderRadius: '12px', padding: '16px 40px', display: 'inline-block', cursor: 'pointer' }}>
            <span style={{ color: '#000000', fontSize: '16px', fontWeight: 'bold' }}>Apply to Join →</span>
          </div>
        </div>

        {/* Tiles + Stats */}
        <div style={{ display: 'flex', gap: '40px', marginTop: '40px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 480px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #CCC07F 0%, #9A8E4E 100%)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '20px' }}>📅</span>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: '#0F0F1A', fontSize: '16px', margin: 0 }}>Flexible Schedule</h4>
                <p style={{ color: '#666666', fontSize: '12px', margin: '2px 0 0 0' }}>Set your own hours</p>
              </div>
            </div>
            <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #CCC07F 0%, #9A8E4E 100%)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '20px' }}>⚙️</span>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: '#0F0F1A', fontSize: '16px', margin: 0 }}>Reduced Admin</h4>
                <p style={{ color: '#666666', fontSize: '12px', margin: '2px 0 0 0' }}>Automated intake forms</p>
              </div>
            </div>
            <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #CCC07F 0%, #9A8E4E 100%)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '20px' }}>💵</span>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: '#0F0F1A', fontSize: '16px', margin: 0 }}>70% Revenue Share</h4>
                <p style={{ color: '#666666', fontSize: '12px', margin: '2px 0 0 0' }}>Keep the majority</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={{ flex: '0 0 200px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: 'linear-gradient(135deg, #CCC07F 0%, #9A8E4E 100%)', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
              <div style={{ color: '#000', fontSize: '24px', fontWeight: 'bold' }}>120+</div>
              <div style={{ color: '#000', fontSize: '11px' }}>Active Vets</div>
            </div>
            <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
              <div style={{ color: '#0F0F1A', fontSize: '24px', fontWeight: 'bold' }}>$2.1M</div>
              <div style={{ color: '#666666', fontSize: '11px' }}>Paid to Vets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Video Section - Dark */}
      <section style={{ padding: '60px 0', backgroundColor: '#0F0F1A', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#CCC07F', fontSize: '32px', marginBottom: '32px', textAlign: 'center' }}>A practice, beyond the clinic</h2>
        <div style={{ width: '100%', maxWidth: '1100px', height: '320px', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.4)' }}>
          <video src={vetsVideo} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Pricing Section - Warm Parchment */}
      <section id="pricing" style={{ padding: '80px 60px', backgroundColor: '#F5F0E8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ color: '#0F0F1A', fontSize: '14px', letterSpacing: '2px' }}>PRICING</span>
        <h2 style={{ color: '#0F0F1A', fontSize: '40px', marginTop: '16px', textAlign: 'center' }}>Simple, Transparent Pricing</h2>
        <p style={{ color: '#4A4A4A', fontSize: '16px', marginTop: '12px', textAlign: 'center', maxWidth: '500px' }}>No subscriptions, no hidden fees.</p>

        <div style={{ display: 'flex', gap: '24px', marginTop: '60px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ background: '#111111', borderRadius: '24px', padding: '40px', width: '300px', border: '2px solid #CCC07F' }}>
            <h4 style={{ color: '#FFFFFF', fontSize: '24px', marginBottom: '16px' }}>Standard</h4>
            <div style={{ color: '#CCC07F', fontSize: '48px', fontWeight: 'bold', marginBottom: '8px' }}>$35<span style={{ fontSize: '18px', color: '#9A8E4E' }}>/consult</span></div>
            <p style={{ color: '#D1D3C4', fontSize: '14px', marginBottom: '24px' }}>Perfect for one-time consultations</p>
            <ul style={{ color: '#D1D3C4', fontSize: '14px', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}>✓ Video consultation</li>
              <li style={{ marginBottom: '12px' }}>✓ Digital prescription</li>
              <li style={{ marginBottom: '12px' }}>✓ Follow-up within 48hrs</li>
            </ul>
            <div style={{ background: '#CCC07F', borderRadius: '10px', padding: '14px', textAlign: 'center', marginTop: '24px', cursor: 'pointer' }}>
              <span style={{ color: '#000', fontSize: '16px', fontWeight: 'bold' }}>Book Now</span>
            </div>
          </div>

          <div style={{ background: '#1A1A28', borderRadius: '24px', padding: '40px', width: '300px' }}>
            <h4 style={{ color: '#FFFFFF', fontSize: '24px', marginBottom: '16px' }}>Priority</h4>
            <div style={{ color: '#CCC07F', fontSize: '48px', fontWeight: 'bold', marginBottom: '8px' }}>$50<span style={{ fontSize: '18px', color: '#9A8E4E' }}>/consult</span></div>
            <p style={{ color: '#D1D3C4', fontSize: '14px', marginBottom: '24px' }}>For urgent concerns</p>
            <ul style={{ color: '#D1D3C4', fontSize: '14px', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}>✓ Priority scheduling</li>
              <li style={{ marginBottom: '12px' }}>✓ Video consultation</li>
              <li style={{ marginBottom: '12px' }}>✓ Digital prescription</li>
              <li style={{ marginBottom: '12px' }}>✓ Same-day follow-up</li>
            </ul>
            <div style={{ background: 'transparent', border: '2px solid #CCC07F', borderRadius: '10px', padding: '14px', textAlign: 'center', marginTop: '24px', cursor: 'pointer' }}>
              <span style={{ color: '#CCC07F', fontSize: '16px', fontWeight: 'bold' }}>Book Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Tightened */}
      <footer style={{ backgroundColor: '#0F0F1A', padding: '40px 60px', borderTop: '1px solid #16213E' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ background: '#CCC07F', borderRadius: '8px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>🐾</span>
              </div>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>Pawprint</span>
            </div>
            <p style={{ color: '#9A8E4E', fontSize: '14px', maxWidth: '250px' }}>Making veterinary care accessible, affordable, and stress-free for every pet owner.</p>
          </div>
          <div style={{ display: 'flex', gap: '60px' }}>
            <div>
              <h5 style={{ color: '#FFFFFF', fontSize: '16px', marginBottom: '16px' }}>Product</h5>
              <ul style={{ listStyle: 'none', padding: 0, color: '#9A8E4E', fontSize: '14px' }}>
                <li style={{ marginBottom: '8px' }}>How it Works</li>
                <li style={{ marginBottom: '8px' }}>Pricing</li>
                <li style={{ marginBottom: '8px' }}>For Vets</li>
              </ul>
            </div>
            <div>
              <h5 style={{ color: '#FFFFFF', fontSize: '16px', marginBottom: '16px' }}>Company</h5>
              <ul style={{ listStyle: 'none', padding: 0, color: '#9A8E4E', fontSize: '14px' }}>
                <li style={{ marginBottom: '8px' }}>About</li>
                <li style={{ marginBottom: '8px' }}>Careers</li>
                <li style={{ marginBottom: '8px' }}>Contact</li>
              </ul>
            </div>
            <div>
              <h5 style={{ color: '#FFFFFF', fontSize: '16px', marginBottom: '16px' }}>Legal</h5>
              <ul style={{ listStyle: 'none', padding: 0, color: '#9A8E4E', fontSize: '14px' }}>
                <li style={{ marginBottom: '8px' }}>Privacy Policy</li>
                <li style={{ marginBottom: '8px' }}>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '60px', paddingTop: '24px', borderTop: '1px solid #16213E', color: '#9A8E4E', fontSize: '14px' }}>
          © 2026 Pawprint. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
