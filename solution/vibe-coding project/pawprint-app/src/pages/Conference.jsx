import conferenceVideo from '../assets/Videos/Conference.mp4';
import Schedule from '../components/Schedule';
import FAQTab from '../components/conference/FAQTab';
import ShaderFlow from '../components/conference/ShaderFlow';
import SpeakersTab from '../components/conference/SpeakersTab';
import TicketsTab from '../components/conference/TicketsTab';

export default function Conference() {
  return (
    <div style={{ backgroundColor: '#050505', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', minHeight: '100vh', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '100%' }}>
      <div style={{ backgroundColor: '#050505', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '100%' }}>
        
        {/* Hero Section */}
        <div style={{ position: 'relative', alignItems: 'center', backgroundColor: '#050505', borderBottomColor: '#1A1A1A', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', height: '850px', justifyContent: 'center', overflow: 'hidden', paddingBlock: '60px', paddingInline: '60px', width: '100%' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
            <ShaderFlow xScale={1.55} yScale={0.38} distortion={0.03} speed={0.005} />
          </div>

          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(5,5,5,0.16) 0%, rgba(5,5,5,0.38) 38%, rgba(5,5,5,0.82) 70%, rgba(5,5,5,0.95) 100%)', zIndex: 1, pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 2, alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
            <div style={{ borderColor: '#CCC07F', borderRadius: '40px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', marginBottom: '32px', paddingBlock: '8px', paddingInline: '16px' }}>
              <div style={{ boxSizing: 'border-box', color: '#CCC07F', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', lineHeight: '18px', textAlign: 'center', textTransform: 'uppercase', width: '100%' }}>
                San Francisco • Q3 2026
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '96px', fontWeight: 900, letterSpacing: '-4px', lineHeight: '1', marginBottom: '24px', textAlign: 'center' }}>
              VET SUMMIT
            </div>
            <div style={{ boxSizing: 'border-box', marginBottom: '48px', maxWidth: '800px' }}>
              <div style={{ boxSizing: 'border-box', color: '#888888', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', lineHeight: '1.4', textAlign: 'center' }}>
                The Future of Veterinary Care. 
              </div>
              <div style={{ boxSizing: 'border-box', color: '#FFFFFF', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', lineHeight: '1.4', textAlign: 'center' }}>
                One Day. One Community.
              </div>
            </div>
            <div
              onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              style={{ backgroundImage: 'linear-gradient(in oklab 135deg, oklab(80.3% -0.013 0.084) 0%, oklab(64.3% -0.013 0.085) 100%)', borderRadius: '4px', boxSizing: 'border-box', paddingBlock: '24px', paddingInline: '64px', cursor: 'pointer' }}>
              <div style={{ boxSizing: 'border-box', color: '#000000', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '20px', fontWeight: 800, letterSpacing: '1px', lineHeight: '24px', textAlign: 'center', textTransform: 'uppercase', width: '100%' }}>
                Secure Your Seat
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" style={{ backgroundColor: '#050505', boxSizing: 'border-box', paddingBlock: '100px', paddingInline: '120px' }}>
          <div style={{ alignItems: 'flex-end', boxSizing: 'border-box', display: 'flex', gap: '80px' }}>
            <div style={{ boxSizing: 'border-box', flexBasis: '0%', flexGrow: '1', flexShrink: '1' }}>
              <div style={{ boxSizing: 'border-box', color: '#FFFFFF', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '64px', fontWeight: 900, lineHeight: '1' }}>
                Built for the 
              </div>
              <div style={{ boxSizing: 'border-box', color: '#CCC07F', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '64px', fontWeight: 900, lineHeight: '1' }}>
                Bold Owner.
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: '#888888', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '20px', lineHeight: '24px', maxWidth: '400px' }}>
              A masterclass in practice evolution for independent and multi-clinic leaders.
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div style={{ alignItems: 'center', backgroundColor: '#0A0A0A', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingBlock: '100px', paddingInline: '120px' }}>
          <div style={{ borderLeftColor: '#CCC07F', borderLeftStyle: 'solid', borderLeftWidth: '2px', boxSizing: 'border-box', paddingLeft: '32px' }}>
            <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '64px', fontWeight: 900, lineHeight: '1', marginBottom: '4px' }}>
              29%
            </div>
            <div style={{ boxSizing: 'border-box', color: '#666666', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', letterSpacing: '1px', lineHeight: '18px', textTransform: 'uppercase' }}>
              Adoption Window
            </div>
          </div>
          <div style={{ borderLeftColor: '#CCC07F', borderLeftStyle: 'solid', borderLeftWidth: '2px', boxSizing: 'border-box', paddingLeft: '32px' }}>
            <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '64px', fontWeight: 900, lineHeight: '1', marginBottom: '4px' }}>
              $2B
            </div>
            <div style={{ boxSizing: 'border-box', color: '#666666', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', letterSpacing: '1px', lineHeight: '18px', textTransform: 'uppercase' }}>
              Industry Impact
            </div>
          </div>
          <div style={{ borderLeftColor: '#CCC07F', borderLeftStyle: 'solid', borderLeftWidth: '2px', boxSizing: 'border-box', paddingLeft: '32px' }}>
            <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '64px', fontWeight: 900, lineHeight: '1', marginBottom: '4px' }}>
              $6.4B
            </div>
            <div style={{ boxSizing: 'border-box', color: '#666666', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', letterSpacing: '1px', lineHeight: '18px', textTransform: 'uppercase' }}>
              Market Potential
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div style={{ position: 'relative', width: '100%', height: '550px', overflow: 'hidden', borderBottomColor: '#1A1A1A', borderBottomStyle: 'solid', borderBottomWidth: '1px' }}>
          <video src={conferenceVideo} autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,5,5,0.7)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '40px', paddingInline: '60px' }}>
            <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '48px', fontWeight: 900, letterSpacing: '-2px', lineHeight: '1.1', marginBottom: '16px', textAlign: 'center' }}>
              Hear From the Experts
            </div>
            <div style={{ boxSizing: 'border-box', color: '#888888', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '18px', lineHeight: '1.5', textAlign: 'center', maxWidth: '500px' }}>
              Industry leaders sharing insights on the future of veterinary medicine
            </div>
          </div>
        </div>

        {/* Value Props Section */}
        <div style={{ backgroundColor: '#050505', boxSizing: 'border-box', paddingBlock: '140px', paddingInline: '120px' }}>
          <div style={{ boxSizing: 'border-box', display: 'grid', gap: '40px', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div style={{ backgroundColor: '#111111', borderColor: '#222222', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', paddingBlock: '60px', paddingInline: '40px' }}>
              <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '24px', fontWeight: 800, lineHeight: '30px', marginBottom: '24px' }}>
                01. REVENUE
              </div>
              <div style={{ boxSizing: 'border-box', color: '#888888', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', lineHeight: '1.6' }}>
                Scale monthly revenue by $10k+ through automated digital triage workflows.
              </div>
            </div>
            <div style={{ backgroundColor: '#111111', borderColor: '#222222', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', paddingBlock: '60px', paddingInline: '40px' }}>
              <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '24px', fontWeight: 800, lineHeight: '30px', marginBottom: '24px' }}>
                02. COMPLIANCE
              </div>
              <div style={{ boxSizing: 'border-box', color: '#888888', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', lineHeight: '1.6' }}>
                Navigate 2026 VCPR laws with a definitive state-by-state regulatory playbook.
              </div>
            </div>
            <div style={{ backgroundColor: '#111111', borderColor: '#222222', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', paddingBlock: '60px', paddingInline: '40px' }}>
              <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '24px', fontWeight: 800, lineHeight: '30px', marginBottom: '24px' }}>
                03. NETWORK
              </div>
              <div style={{ boxSizing: 'border-box', color: '#888888', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', lineHeight: '1.6' }}>
                Direct access to the owners and innovators reshaping the veterinary landscape.
              </div>
            </div>
          </div>
        </div>

        <section id="schedule">
          <Schedule />
        </section>

        <section id="speakers">
          <SpeakersTab />
        </section>

        <section id="tickets">
          <TicketsTab />
        </section>

        <section id="faq">
          <FAQTab />
        </section>
      </div>
    </div>
  );
}
