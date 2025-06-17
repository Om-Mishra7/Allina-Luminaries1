import React, { useState } from 'react';

interface Role {
  id: number;
  title: string;
  department: string;
  location?: string;
  type: string; // e.g. Full-time / Part-time
  payRange?: string; // e.g. 80k-120k
  featured?: boolean; // true if highlighted in dark background as in screenshot
  description: string;
}

// Sample static data – this can be replaced by API data in the future
const roles: Role[] = [
  { id: 1, title: 'Product Designer', department: 'Design', type: 'Full-time', payRange: '80k-100k', location: 'Faridabad, India', featured: false, description: "We're looking for a mid-level product designer to join our team." },
  { id: 2, title: 'Product Designer', department: 'Design', type: 'Full-time', payRange: '80k-100k', location: 'Faridabad, India', featured: true, description: "We're looking for a mid-level product designer to join our team." },

  { id: 3, title: 'UI Engineer', department: 'Engineering', type: 'Full-time', payRange: '95k-130k', location: 'Worldwide', featured: false },
  { id: 4, title: 'Mechanical Engineer', department: 'Engineering', type: 'Full-time', payRange: '90k-120k', location: 'Worldwide', featured: false },
  { id: 5, title: 'Electrical Engineer', department: 'Engineering', type: 'Full-time', payRange: '98k-135k', location: 'Worldwide', featured: true },

  { id: 6, title: 'UI Engineer', department: 'Engineering', type: 'Full-time', payRange: '95k-130k', location: 'Worldwide', featured: false },
];

export const OpenRoles: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredRoles = roles.filter((role) =>
    role.title.toLowerCase().includes(query.toLowerCase()) ||
    role.department.toLowerCase().includes(query.toLowerCase())
  );

  // Group roles by department for heading layout
  const departments = Array.from(new Set(filteredRoles.map((r) => r.department)));

  return (
    <section id="open-roles" className="w-full bg-[#F1E9E4] py-16 px-4 sm:px-6 lg:px-8">
      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mb-14">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for roles …"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-12 sm:h-14 rounded-md px-12 text-sm sm:text-base bg-white shadow-sm placeholder-gray-500 focus:ring-2 focus:ring-[#DDB9A2] focus:outline-none"
          />
          {/* Search icon */}
          <svg
            className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 5.65a7.5 7.5 0 010 10.6z" />
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {departments.map((dept) => (
          <div key={dept}>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900" style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}>
                {dept}
              </h3>
              <p className="text-sm text-gray-600">Open positions in our {dept.toLowerCase()} team.</p>
            </div>

            <div className="space-y-6">
              {filteredRoles
                .filter((r) => r.department === dept)
                .map((role) => (
                  <a
                    key={role.id}
                    href="#" // placeholder link
                    className={`relative block border-[1.6px] rounded-2xl px-8 py-7 transition-colors duration-200 ${
                      role.featured
                        ? 'bg-black text-white border-primary'
                        : 'bg-[#E7DED7] text-[#06153A] border-primary hover:bg-[#e0d6cf]'
                    }`}
                  >
                    {/* Title */}
                    <h4 className="text-xl font-medium mb-2" style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}>
                      {role.title}
                    </h4>

                    {/* Description */}
                    <p className={`text-sm sm:text-base leading-relaxed mb-8 ${role.featured ? 'text-gray-200' : 'text-gray-700'}`}>{role.description}</p>

                    {/* Footer Row */}
                    <div
                      className={`absolute bottom-6 left-8 flex flex-wrap items-center gap-10 text-sm font-medium ${
                        role.featured ? 'text-white' : 'text-[#06153A]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        <span>{role.type}</span>
                      </div>
                      {role.payRange && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          <span>{role.payRange}</span>
                        </div>
                      )}
                    </div>

                    {/* Location Badge */}
                    {role.location && (
                      <span
                        className={`absolute top-7 right-8 flex items-center gap-1 px-3 py-1 border rounded-md text-xs ${
                          role.featured ? 'border-white text-white' : 'border-[#06153A] text-[#06153A]'
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 11.75a2 2 0 100-4 2 2 0 000 4z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21c4.418 0 8-3.582 8-8 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 4.418 3.582 8 8 8z"
                          />
                        </svg>
                        {role.location}
                      </span>
                    )}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 