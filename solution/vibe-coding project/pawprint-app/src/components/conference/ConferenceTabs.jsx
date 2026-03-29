const tabs = [
  { key: 'schedule', label: 'Schedule' },
  { key: 'speakers', label: 'Speakers' },
  { key: 'tickets', label: 'Tickets' },
  { key: 'faq', label: 'FAQ' }
];

export default function ConferenceTabs({ activeTab, onTabChange }) {
  return (
    <div style={{ backgroundColor: '#050505', borderBottom: '1px solid #1A1A1A', paddingInline: '120px' }}>
      <div style={{ display: 'flex', gap: '28px' }}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: isActive ? '2px solid #CCC07F' : '2px solid transparent',
                boxSizing: 'border-box',
                color: isActive ? '#CCC07F' : '#888888',
                cursor: 'pointer',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '20px',
                paddingBlock: '18px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
