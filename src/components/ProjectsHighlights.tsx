import React from 'react';

export const ProjectsHighlights = () => {
  // Inline style objects for each card and container
  const containerStyle: React.CSSProperties = {
    width: '100%',
    background: '#ede5df',
    padding: '64px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const groupStyle: React.CSSProperties = {
    width: 1361,
    height: 393,
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    marginBottom: 48,
    maxWidth: '100%',
  };
  const cardBase: React.CSSProperties = {
    height: 393,
    width: 454,
    border: '1px solid #d5d5d5',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    background: '#fff',
    boxSizing: 'border-box',
  };
  const cardDark: React.CSSProperties = {
    ...cardBase,
    background: 'rgba(6, 21, 58, 1)',
    color: '#fff',
  };
  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    top: 50,
    left: 27,
    width: 76,
    height: 76,
  };
  const iconStyle2: React.CSSProperties = {
    position: 'absolute',
    top: 41,
    left: 27,
    width: 76,
    height: 76,
  };
  const iconStyle3: React.CSSProperties = {
    position: 'absolute',
    top: 41,
    left: 41,
    width: 76,
    height: 76,
  };
  const titleStyle: React.CSSProperties = {
    position: 'absolute',
    top: 170,
    left: 44,
    fontFamily: 'Myriad Pro-SemiExtended, Helvetica',
    fontSize: 25,
    fontWeight: 400,
    color: '#000',
    letterSpacing: 0.25,
    lineHeight: '30px',
    whiteSpace: 'nowrap',
  };
  const titleStyleDark: React.CSSProperties = {
    ...titleStyle,
    top: 164,
    left: 40,
    color: '#fff',
  };
  const descStyle: React.CSSProperties = {
    position: 'absolute',
    top: 225,
    left: 44,
    width: 378,
    fontFamily: 'Myriad Pro-SemiExtended, Helvetica',
    fontSize: 19,
    fontWeight: 400,
    color: '#7b7b7b',
    letterSpacing: 0.19,
    lineHeight: '30px',
  };
  const descStyleDark: React.CSSProperties = {
    ...descStyle,
    left: 40,
    color: '#fff',
  };
  const card2Style: React.CSSProperties = {
    ...cardDark,
    marginLeft: -1,
    marginRight: -1,
  };
  const card3Style: React.CSSProperties = {
    ...cardBase,
    marginLeft: 0,
  };
  const mapSectionStyle: React.CSSProperties = {
    width: 1361,
    maxWidth: '100%',
    borderRadius: 24,
    overflow: 'hidden',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  };

  return (
    <section style={containerStyle}>
      <h3 style={{
        textAlign: 'center',
        color: '#323232',
        letterSpacing: '0.2em',
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 32,
        textTransform: 'uppercase',
      }}>
        WHY OUR PROJECTS STANDS OUT?
      </h3>
      <div style={groupStyle}>
        {/* Card 1 */}
        <div style={cardBase}>
          {/* Demo SVG icon */}
          <svg style={iconStyle} viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="#323232" strokeWidth="3"/><path d="M24 14v10l7 4" stroke="#323232" strokeWidth="3" strokeLinecap="round"/></svg>
          <div style={titleStyle}>Innovative Technology</div>
          <p style={descStyle}>
            We integrate advanced technologies like IoT, CCMS, and GIS mapping to deliver smarter and more efficient lighting solutions.
          </p>
        </div>
        {/* Card 2 */}
        <div style={card2Style}>
          {/* Demo SVG icon */}
          <svg style={iconStyle2} viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="#fff" strokeWidth="3"/><path d="M24 14v10l7 4" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>
          <div style={titleStyleDark}>Sustainability Focus</div>
          <p style={descStyleDark}>
            Our projects prioritize energy efficiency and environmental responsibility, contributing to a greener future.
          </p>
        </div>
        {/* Card 3 */}
        <div style={card3Style}>
          {/* Demo SVG icon */}
          <svg style={iconStyle3} viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="#323232" strokeWidth="3"/><path d="M24 14v10l7 4" stroke="#323232" strokeWidth="3" strokeLinecap="round"/></svg>
          <div style={titleStyle}>Innovative Technology</div>
          <p style={descStyle}>
            We integrate advanced technologies like IoT, CCMS, and GIS mapping to deliver smarter and more efficient lighting solutions.
          </p>
        </div>
      </div>
      {/* Map Section */}
      <div style={mapSectionStyle}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28079.338851013297!2d77.27849083799876!3d28.391564000987547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddcd5387a551%3A0x7d7b8952cfef9ad9!2sNew%20Industrial%20Township%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1750111125940!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map - New Industrial Township, Faridabad"
        />
      </div>
    </section>
  );
}; 