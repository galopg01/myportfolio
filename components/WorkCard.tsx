import React from 'react';
import ExternalLink from './ExternalLink';

interface WorkCardProps {
  period: string;
  description: React.ReactNode;
  href: string;
  label: string;
  ariaLabel: string;
  workAriaLabel: string;
  techUsed: string[];
}

const WorkCard: React.FC<WorkCardProps> = ({ period, description, href, label, ariaLabel, workAriaLabel, techUsed }) => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
        </div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label={ariaLabel}>
            {period}
        </header>
        <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
                <div>
                    <ExternalLink href={href} label={label} ariaLabel={workAriaLabel}/>
                </div>
            </h3>
            <p className="mt-2 text-sm leading-normal">
                {description}
            </p>
            <ul className="mt-2 flex flex-wrap"
                aria-label='Technologies used'>
            {techUsed.map((item) => (
                <li key={item} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {item}
                    </div>
                </li>
            ))}
            </ul>
        </div>
    </div>
  );
};

export default WorkCard;