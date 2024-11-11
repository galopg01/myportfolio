import React from 'react';

interface EducationCardProps {
  period: string;
  description: React.ReactNode;
  label: string;
  center: string;
  ariaLabel: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ period, description, label, center, ariaLabel }) => {
  return (
    <div className="education-card group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 ">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block">
        </div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-1 lg:col-span-2"
                aria-label={ariaLabel}>
            {period}
        </header>
        <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
                <div>
                    <p>
                        {label}  
                    </p> 
                </div>
            </h3>
            <h4 className="text-sm leading-normal">
                {center}
            </h4>
            <p className="mt-2 text-sm leading-normal">
                {description}
            </p>
        </div>
    </div>
  );
};

export default EducationCard;