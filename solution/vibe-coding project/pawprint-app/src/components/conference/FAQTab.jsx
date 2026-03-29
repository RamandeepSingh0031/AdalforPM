import { useState } from 'react';

const faqs = [
  {
    question: 'Who should attend Vet Summit 2026?',
    answer: 'Practice owners, veterinary clinicians, operations leads, and teams preparing for modern digital care and VCPR changes.'
  },
  {
    question: 'What is included in the ticket?',
    answer: 'Full-day access to keynotes, breakout sessions, networking events, and conference materials.'
  },
  {
    question: 'Are CE/CME credits available?',
    answer: 'Yes. Vet Summit 2026 is approved for up to 8 hours of Continuing Education (CE) credit for veterinary professionals. Certificates will be issued electronically within 7 business days after the event. Please ensure your license information is accurate during registration.'
  },
  {
    question: 'What is the cancellation and refund policy?',
    answer: 'Cancellations made 30+ days before the event receive a full refund. Cancellations 14–29 days prior receive a 50% refund or full credit toward a future event. No refunds within 14 days, but you may transfer your ticket to another attendee. All cancellation requests must be submitted in writing to summit@pawprint.vet.'
  },
  {
    question: 'Will session recordings be available?',
    answer: 'Yes. Registered attendees receive post-event access to selected session recordings.'
  },
  {
    question: 'Can I transfer my ticket?',
    answer: 'Yes, ticket transfers are allowed up to 7 days before the event. Contact the support team to process changes.'
  },
  {
    question: 'Is parking available at the venue?',
    answer: 'Yes. The Foundry SF offers on-site parking. Complimentary parking is included with all tickets.'
  },
  {
    question: 'What should I bring?',
    answer: 'Bring a valid ID for check-in, business cards for networking, and a device for taking notes. All other materials will be provided.'
  }
];

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div style={{
      backgroundColor: '#111111',
      border: isOpen ? '1px solid #CCC07F' : '1px solid #222222',
      borderRadius: '6px',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          padding: '24px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          color: isOpen ? '#CCC07F' : '#FFFFFF',
          fontFamily: '"Inter", system-ui, sans-serif',
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: '26px',
          transition: 'color 0.2s',
        }}>
          {question}
        </span>
        <span style={{
          color: isOpen ? '#CCC07F' : '#666666',
          fontSize: '24px',
          fontWeight: 300,
          transition: 'transform 0.3s, color 0.2s',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
        }}>
          +
        </span>
      </button>
      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-out, padding 0.3s ease-out',
        padding: isOpen ? '0 28px 24px' : '0 28px',
      }}>
        <div style={{
          color: '#888888',
          fontFamily: '"Inter", system-ui, sans-serif',
          fontSize: '15px',
          lineHeight: '1.7',
        }}>
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQTab() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: '#0A0A0A', boxSizing: 'border-box', paddingBlock: '120px', paddingInline: '120px' }}>
      <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '48px', fontWeight: 900, lineHeight: '58px', marginBottom: '64px', textAlign: 'center' }}>
        Frequently Asked Questions
      </div>

      {/* Venue Section */}
      <div style={{ margin: '0 auto 48px', maxWidth: '980px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0F0D06 0%, #0A0A0A 100%)',
          border: '1px solid #CCC07F',
          borderRadius: '8px',
          padding: '40px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '32px',
        }}>
          <div>
            <div style={{
              color: '#CCC07F',
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              Venue
            </div>
            <div style={{
              color: '#FFFFFF',
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '32px',
              fontWeight: 900,
              marginBottom: '8px',
            }}>
              The Foundry SF
            </div>
            <div style={{
              color: '#888888',
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: '1.5',
            }}>
              1425 Folsom Street, SoMa
              <br />
              San Francisco, CA 94103
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=1425+Folsom+Street+San+Francisco+CA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#CCC07F',
              color: '#050505',
              padding: '14px 28px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '1px',
              textDecoration: 'none',
              fontFamily: '"Inter", system-ui, sans-serif',
              whiteSpace: 'nowrap',
            }}
          >
            GET DIRECTIONS →
          </a>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div style={{ margin: '0 auto', maxWidth: '980px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {faqs.map((item, index) => (
          <AccordionItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
