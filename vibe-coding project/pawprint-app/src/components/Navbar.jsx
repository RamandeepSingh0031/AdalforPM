import { useNavigate, useLocation } from 'react-router-dom';

const scrollToSection = (e, sectionId) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, sectionId) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/#' + sectionId);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      scrollToSection(e, sectionId);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav style={{
      alignItems: 'center',
      backgroundColor: '#000000',
      borderBottomColor: '#16213E',
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      paddingBlock: '20px',
      paddingInline: '60px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      width: '100%'
    }}>
      {/* BRANDING - Always Visible */}
      <div 
        onClick={handleLogoClick}
        style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '12px', cursor: 'pointer' }}
      >
        <div style={{ alignItems: 'center', backgroundColor: '#CCC07F', borderRadius: '12px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '44px', justifyContent: 'center', width: '44px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '24px', lineHeight: '30px' }}>
            🐾
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '26px', lineHeight: '32px' }}>
          Pawprint
        </div>
      </div>

      {/* DYNAMIC MENU */}
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '36px' }}>
        {location.pathname === '/' ? (
          <>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} style={{ boxSizing: 'border-box', color: '#9A8E4E', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '15px', lineHeight: '18px', textDecoration: 'none', cursor: 'pointer' }}>
              How it Works
            </a>
            <a href="#for-pet-owners" onClick={(e) => handleNavClick(e, 'for-pet-owners')} style={{ boxSizing: 'border-box', color: '#9A8E4E', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '15px', lineHeight: '18px', textDecoration: 'none', cursor: 'pointer' }}>
              For Pet Owners
            </a>
            <a href="#for-vets" onClick={(e) => handleNavClick(e, 'for-vets')} style={{ boxSizing: 'border-box', color: '#9A8E4E', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '15px', lineHeight: '18px', textDecoration: 'none', cursor: 'pointer' }}>
              For Veterinarians
            </a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} style={{ boxSizing: 'border-box', color: '#9A8E4E', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '15px', lineHeight: '18px', textDecoration: 'none', cursor: 'pointer' }}>
              Pricing
            </a>
            <a href="/conference" onClick={(e) => { e.preventDefault(); navigate('/conference'); }} style={{ boxSizing: 'border-box', color: '#CCC07F', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '15px', lineHeight: '18px', textDecoration: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
              Conference
            </a>
          </>
        ) : (
          <>
            {/* Conference Specific Menu - Students can add links here */}
            <span style={{ color: '#9A8E4E', fontFamily: 'system-ui, sans-serif', fontSize: '15px' }}>
              Vet Conference 2026
            </span>
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} style={{ boxSizing: 'border-box', color: '#CCC07F', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '15px', lineHeight: '18px', textDecoration: 'none', cursor: 'pointer' }}>
              Back to Pawprint
            </a>
          </>
        )}
      </div>

      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '16px' }}>
        <div style={{ boxSizing: 'border-box', color: '#9A8E4E', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '15px', lineHeight: '18px', cursor: 'pointer' }}>
          Sign In
        </div>
        <div style={{ backgroundColor: '#9A8E4E', borderRadius: '10px', boxSizing: 'border-box', paddingBlock: '12px', paddingInline: '28px', cursor: 'pointer' }}>
          <div style={{ boxSizing: 'border-box', color: '#FFFFFF', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '15px', lineHeight: '18px' }}>
            Get Started
          </div>
        </div>
      </div>
    </nav>
  );
}
