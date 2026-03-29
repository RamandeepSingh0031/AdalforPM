import chengImg from '../../assets/Images/Cheng.png';
import jordanImg from '../../assets/Images/Jordan.png';
import fosterImg from '../../assets/Images/speaker_foster.webp';
import nairImg from '../../assets/Images/speaker_nair.webp';
import webbImg from '../../assets/Images/speaker_webb.webp';

export default function SpeakersTab() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', boxSizing: 'border-box', paddingBlock: '140px', paddingInline: '120px' }}>
      <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '48px', fontWeight: 900, lineHeight: '58px', marginBottom: '80px', textAlign: 'center' }}>
        The Lineup
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', gap: '40px', justifyContent: 'center' }}>
        <div style={{ backgroundColor: '#1A1A1A', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '1', height: '500px', justifyContent: 'flex-end', overflow: 'clip', paddingBlock: '40px', paddingInline: '40px', position: 'relative' }}>
          <img src={fosterImg} alt="Dr. Amanda Foster" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
          <div style={{ backgroundImage: 'linear-gradient(in oklab 180deg, oklab(0% 0 0 / 0%) 0%, oklab(0% 0 0 / 90%) 100%)', bottom: '0px', boxSizing: 'border-box', left: '0px', position: 'absolute', right: '0px', top: '0px', zIndex: 1 }} />
          <div style={{ boxSizing: 'border-box', position: 'relative', zIndex: 2 }}>
            <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: 800, lineHeight: '34px', marginBottom: '8px' }}>
              Dr. Amanda Foster
            </div>
            <div style={{ boxSizing: 'border-box', color: '#CCC07F', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', lineHeight: '18px', textTransform: 'uppercase' }}>
              Foster Vet Group
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#1A1A1A', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '1', height: '500px', justifyContent: 'flex-end', overflow: 'clip', paddingBlock: '40px', paddingInline: '40px', position: 'relative' }}>
          <img src={nairImg} alt="Dr. Priya Nair" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, objectPosition: 'center top' }} />
          <div style={{ backgroundImage: 'linear-gradient(in oklab 180deg, oklab(0% 0 0 / 0%) 0%, oklab(0% 0 0 / 90%) 100%)', bottom: '0px', boxSizing: 'border-box', left: '0px', position: 'absolute', right: '0px', top: '0px', zIndex: 1 }} />
          <div style={{ boxSizing: 'border-box', position: 'relative', zIndex: 2 }}>
            <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: 800, lineHeight: '34px', marginBottom: '8px' }}>
              Dr. Priya Nair
            </div>
            <div style={{ boxSizing: 'border-box', color: '#CCC07F', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', lineHeight: '18px', textTransform: 'uppercase' }}>
              VetTech Insights
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#1A1A1A', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '1', height: '500px', justifyContent: 'flex-end', overflow: 'clip', paddingBlock: '40px', paddingInline: '40px', position: 'relative' }}>
          <img src={webbImg} alt="Marcus Webb" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
          <div style={{ backgroundImage: 'linear-gradient(in oklab 180deg, oklab(0% 0 0 / 0%) 0%, oklab(0% 0 0 / 90%) 100%)', bottom: '0px', boxSizing: 'border-box', left: '0px', position: 'absolute', right: '0px', top: '0px', zIndex: 1 }} />
          <div style={{ boxSizing: 'border-box', position: 'relative', zIndex: 2 }}>
            <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: 800, lineHeight: '34px', marginBottom: '8px' }}>
              Marcus Webb
            </div>
            <div style={{ boxSizing: 'border-box', color: '#CCC07F', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', lineHeight: '18px', textTransform: 'uppercase' }}>
              Regulatory Counsel
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#1A1A1A', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '1', height: '500px', justifyContent: 'flex-end', overflow: 'clip', paddingBlock: '40px', paddingInline: '40px', position: 'relative' }}>
          <img src={chengImg} alt="Dr Cheng" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
          <div style={{ backgroundImage: 'linear-gradient(in oklab 180deg, oklab(0% 0 0 / 0%) 0%, oklab(0% 0 0 / 90%) 100%)', bottom: '0px', boxSizing: 'border-box', left: '0px', position: 'absolute', right: '0px', top: '0px', zIndex: 1 }} />
          <div style={{ boxSizing: 'border-box', position: 'relative', zIndex: 2 }}>
            <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: 800, lineHeight: '34px', marginBottom: '8px' }}>
              Dr Cheng
            </div>
            <div style={{ boxSizing: 'border-box', color: '#CCC07F', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', lineHeight: '18px', textTransform: 'uppercase' }}>
              Clinical Innovation
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#1A1A1A', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '1', height: '500px', justifyContent: 'flex-end', overflow: 'clip', paddingBlock: '40px', paddingInline: '40px', position: 'relative' }}>
          <img src={jordanImg} alt="Jordan" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
          <div style={{ backgroundImage: 'linear-gradient(in oklab 180deg, oklab(0% 0 0 / 0%) 0%, oklab(0% 0 0 / 90%) 100%)', bottom: '0px', boxSizing: 'border-box', left: '0px', position: 'absolute', right: '0px', top: '0px', zIndex: 1 }} />
          <div style={{ boxSizing: 'border-box', position: 'relative', zIndex: 2 }}>
            <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: 800, lineHeight: '34px', marginBottom: '8px' }}>
              Jordan
            </div>
            <div style={{ boxSizing: 'border-box', color: '#CCC07F', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', lineHeight: '18px', textTransform: 'uppercase' }}>
              Product Strategy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
