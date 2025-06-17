import React from 'react';

interface PastRole {
  id: number;
  title: string;
  department: string;
  filledDate: string;
}

const pastRoles: PastRole[] = [
  { id: 1, title: 'Senior Product Designer', department: 'Design', filledDate: 'Jan 2024' },
  { id: 2, title: 'Product Manager', department: 'Product', filledDate: 'Dec 2023' },
  { id: 3, title: 'QA Engineer', department: 'Engineering', filledDate: 'Nov 2023' },
];

export const PastRoles: React.FC = () => {
  return (
    <section id="past-roles" className="w-full bg-[#F7F3F0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}>Past Roles</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          These positions have been filled, but we are always looking for talented people — keep an eye on our open roles page for new opportunities.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {pastRoles.map((role) => (
          <div key={role.id} className="border bg-white rounded-md p-5 flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900" style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}>{role.title}</h4>
              <p className="text-sm text-gray-600">{role.department}</p>
            </div>
            <span className="text-xs text-gray-500">Filled {role.filledDate}</span>
          </div>
        ))}
      </div>
    </section>
  );
}; 