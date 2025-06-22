import React, { useState, useMemo } from 'react';

interface Role {
  id: number;
  title: string;
  description: string;
  type: string;
  payRange: string;
  location: string;
}

const engineeringRoles: Role[] = [
  { 
    id: 1, 
    title: 'IOT Engineer', 
    description: "We're looking for a mid-level product designer to join our team.",
    type: 'Full-time',
    payRange: '80k-100k',
    location: 'Faridabad, India'
  },
  { 
    id: 2, 
    title: 'Mechanical Engineer', 
    description: "We're looking for a mid-level product designer to join our team.",
    type: 'Full-time',
    payRange: '80k-100k',
    location: 'Faridabad, India'
  }
];

const managementRoles: Role[] = [
  { 
    id: 3, 
    title: 'HR Manager', 
    description: "We're looking for a mid-level product designer to join our team.",
    type: 'Full-time',
    payRange: '80k-100k',
    location: 'Faridabad, India'
  },
  { 
    id: 4, 
    title: 'Team Manager', 
    description: "We're looking for a mid-level product designer to join our team.",
    type: 'Full-time',
    payRange: '80k-100k',
    location: 'Faridabad, India'
  }
];

const RoleCard: React.FC<{ role: Role }> = ({ role }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        width: '932px',
        height: '202px',
        backgroundColor: '#E7DED7',
        borderRadius: '15px',
        border: '1px solid #000000',
        marginBottom: '48px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Circular expanding overlay */}
      <div 
        className="absolute inset-0 bg-black transition-all ease-in-out"
        style={{
          clipPath: isHovered ? 'circle(150% at 50% 100%)' : 'circle(0% at 50% 100%)',
          borderRadius: '15px',
          transitionDuration: '1200ms',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />

      {/* Description */}
      <p 
        className="relative z-10"
        style={{
          position: 'absolute',
          width: '550px',
          height: '27px',
          top: '75px',
          left: '41px',
          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
          fontWeight: 400,
          color: isHovered ? '#ffffff' : '#666666',
          fontSize: '18.3px',
          letterSpacing: '0',
          lineHeight: 'normal',
          transition: 'color 1200ms ease-in-out'
        }}
      >
        {role.description}
      </p>

      {/* Title Section with Icon */}
      <div 
        className="relative z-10"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 0px',
          position: 'absolute',
          top: '23px',
          left: '30px'
        }}
      >
        {/* Icon */}
        <svg 
          style={{
            position: 'relative',
            width: '32px',
            height: '32px',
            transition: 'stroke 1200ms ease-in-out'
          }}
          viewBox="0 0 24 24" 
          fill="none"
        >
          <circle cx="12" cy="12" r="10" stroke={isHovered ? "#ffffff" : "#000000"} strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke={isHovered ? "#ffffff" : "#000000"} strokeWidth="2" strokeLinecap="round"/>
        </svg>
        
        {/* Title */}
        <div 
          className="relative z-10"
          style={{
            position: 'relative',
            width: 'fit-content',
            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: isHovered ? '#ffffff' : '#000000',
            fontSize: '20.9px',
            letterSpacing: '0',
            lineHeight: 'normal',
            whiteSpace: 'nowrap',
            transition: 'color 1200ms ease-in-out'
          }}
        >
          {role.title}
        </div>
      </div>

      {/* Bottom Section - Full-time and Salary */}
      <div 
        className="relative z-10"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '40px',
          position: 'absolute',
          top: '157px',
          left: '30px'
        }}
      >
        {/* Full-time */}
        <div 
          style={{
            display: 'flex',
            width: '114.32px',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            position: 'relative'
          }}
        >
          <svg 
            style={{
              position: 'relative',
              width: '24px',
              height: '24px',
              transition: 'fill 1200ms ease-in-out'
            }}
            viewBox="0 0 24 24" 
            fill={isHovered ? "#ffffff" : "#000000"}
          >
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span 
            style={{
              position: 'relative',
              width: '81.33px',
              height: '22.33px',
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: isHovered ? '#ffffff' : '#000000',
              fontSize: '19.5px',
              letterSpacing: '0',
              lineHeight: 'normal',
              whiteSpace: 'nowrap',
              transition: 'color 1200ms ease-in-out'
            }}
          >
            {role.type}
          </span>
        </div>

        {/* Salary */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'flex-start',
            gap: '8px',
            position: 'relative'
          }}
        >
          <svg 
            style={{
              position: 'relative',
              width: '24px',
              height: '24px',
              transition: 'fill 1200ms ease-in-out'
            }}
            viewBox="0 0 24 24" 
            fill={isHovered ? "#ffffff" : "#000000"}
          >
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span 
            style={{
              position: 'relative',
              width: '95.69px',
              marginTop: '-1px',
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: isHovered ? '#ffffff' : '#000000',
              fontSize: '19.5px',
              letterSpacing: '0',
              lineHeight: 'normal',
              transition: 'color 1200ms ease-in-out'
            }}
          >
            {role.payRange}
          </span>
        </div>
      </div>

      {/* Location Badge */}
      <div 
        className="relative z-10"
        style={{
          position: 'absolute',
          width: '159px',
          height: '29px',
          top: '18px',
          left: '731px',
          backgroundColor: isHovered ? '#000000' : '#e7ded7',
          borderRadius: '4px',
          border: isHovered ? '1px solid #ffffff' : '1px solid #06153A',
          transition: 'background-color 1200ms ease-in-out, border-color 1200ms ease-in-out'
        }}
      >
        <span 
          style={{
            position: 'absolute',
            height: '18px',
            top: '5px',
            left: '43px',
            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: isHovered ? '#ffffff' : '#06153A',
            fontSize: '14.9px',
            textAlign: 'right',
            letterSpacing: '0',
            lineHeight: 'normal',
            transition: 'color 1200ms ease-in-out'
          }}
        >
          {role.location}
        </span>
        <svg 
          style={{
            position: 'absolute',
            width: '14px',
            height: '18px',
            top: '5px',
            left: '6px',
            transition: 'fill 1200ms ease-in-out'
          }}
          viewBox="0 0 24 24" 
          fill={isHovered ? "#ffffff" : "#06153A"}
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>

      {/* Circle Dot */}
      <div 
        className="relative z-10"
        style={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          top: '202px',
          left: '444px',
          backgroundColor: isHovered ? '#ffffff' : '#000000',
          borderRadius: '6px',
          transition: 'background-color 1200ms ease-in-out'
        }}
      />
    </div>
  );
};

const NavigationDots: React.FC<{ total: number; current: number }> = ({ total, current }) => (
  <div className="flex justify-center gap-2 mt-6">
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        className={`w-3 h-3 rounded-full transition-colors ${
          index === current ? 'bg-orange-500' : 'bg-gray-300'
        }`}
      />
    ))}
  </div>
);

export const OpenRoles: React.FC = () => {
  const [engineeringSlide, setEngineeringSlide] = useState(0);
  const [managementSlide, setManagementSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter roles based on search query
  const filteredEngineeringRoles = useMemo(() => {
    if (!searchQuery.trim()) return engineeringRoles;
    
    return engineeringRoles.filter(role =>
      role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.payRange.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredManagementRoles = useMemo(() => {
    if (!searchQuery.trim()) return managementRoles;
    
    return managementRoles.filter(role =>
      role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.payRange.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Check if any results found
  const hasResults = filteredEngineeringRoles.length > 0 || filteredManagementRoles.length > 0;

  return (
    <section className="w-full bg-[#E7DED7] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Search Bar */}
        <div className="mb-8" style={{ 
          position: 'relative',
          width: '1400px',
          height: '94px',
          top: '0px',
        }}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for roles ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                width: '1410px',
                height: '80px',
                borderRadius: '16px',
                border: '2px solid #06153A',
                backgroundColor: 'transparent',
                paddingTop: '15px',
                paddingRight: '35px',
                paddingBottom: '15px',
                paddingLeft: '35px',
                gap: '10px',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '16px',
                color: '#666666'
              }}
            />
            <div className="absolute" style={{
              right: '35px',
              top: '50%',
              transform: 'translateY(-50%)'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06153A" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-[#06153A] font-medium tracking-wider uppercase mb-8"
            style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              width: '150px',
              height: '24px',
              fontSize: '14px',
              margin: '0 auto',
              letterSpacing: '0.2em'
            }}
          >
            OPEN ROLES
          </h1>
        </div>

        {/* Search Results Info */}
        {searchQuery.trim() && (
          <div className="mb-8 text-center">
            <p className="text-[#06153A] text-lg" style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}>
              {hasResults ? (
                <>
                  Found {filteredEngineeringRoles.length + filteredManagementRoles.length} result(s) for "{searchQuery}"
                </>
              ) : (
                <>No results found for "{searchQuery}". Try searching for different keywords.</>
              )}
            </p>
          </div>
        )}

        {/* Engineering Section */}
        {(!searchQuery.trim() || filteredEngineeringRoles.length > 0) && (
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title and Image */}
              <div>
                <div className="mb-8">
                  <h2 
                    className="text-4xl font-normal text-gray-900 mb-4"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Engineering
                  </h2>
                  <p 
                    className="text-gray-600 text-lg"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Open positions in our Engineering team.
                  </p>
                </div>
                
                <div className="relative">
                  <img 
                    src="/images/image2.png" 
                    alt="Engineering Team" 
                    className="object-cover"
                    style={{
                      width: '402px',
                      height: '336px',
                      borderRadius: '10px'
                    }}
                  />
                </div>
              </div>

              {/* Right Side - Job Cards */}
              <div style={{ marginLeft: '-250px' }}>
                {filteredEngineeringRoles.length > 0 ? (
                  filteredEngineeringRoles.map((role) => (
                    <RoleCard key={role.id} role={role} />
                  ))
                ) : searchQuery.trim() ? (
                  <div className="text-center p-8">
                    <p className="text-gray-600 text-lg" style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}>
                      No engineering roles match your search.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
            
            {/* Navigation Dots for Engineering */}
            {filteredEngineeringRoles.length > 0 && <NavigationDots total={5} current={0} />}
            
            {/* Decorative Line SVG */}
            {(!searchQuery.trim() || (filteredEngineeringRoles.length > 0 && filteredManagementRoles.length > 0)) && (
              <div className="flex justify-center mt-12 mb-8 w-full">
                <div className="w-full">
                  <svg width="100%" height="2" viewBox="0 0 1200 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <line x1="0" y1="1" x2="1200" y2="1" stroke="#777777" strokeWidth="1"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Management Section */}
        {(!searchQuery.trim() || filteredManagementRoles.length > 0) && (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title and Image */}
              <div>
                <div className="mb-8">
                  <h2 
                    className="text-4xl font-normal text-gray-900 mb-4"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Management
                  </h2>
                  <p 
                    className="text-gray-600 text-lg"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Open positions in our Management team.
                  </p>
                </div>
                
                <div className="relative">
                  <img 
                    src="/images/image3.jpg" 
                    alt="Management Team" 
                    className="object-cover"
                    style={{
                      width: '402px',
                      height: '336px',
                      borderRadius: '10px'
                    }}
                  />
                </div>
              </div>

              {/* Right Side - Job Cards */}
              <div style={{ marginLeft: '-250px' }}>
                {filteredManagementRoles.length > 0 ? (
                  filteredManagementRoles.map((role) => (
                    <RoleCard key={role.id} role={role} />
                  ))
                ) : searchQuery.trim() ? (
                  <div className="text-center p-8">
                    <p className="text-gray-600 text-lg" style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}>
                      No management roles match your search.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
            
            {/* Navigation Dots for Management */}
            {filteredManagementRoles.length > 0 && <NavigationDots total={5} current={0} />}
            
            {/* Decorative Line SVG */}
            <div className="flex justify-center mt-12 mb-8 w-full">
              <div className="w-full">
                <svg width="100%" height="2" viewBox="0 0 1200 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  <line x1="0" y1="1" x2="1200" y2="1" stroke="#777777" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}; 