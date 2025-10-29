import React, { useEffect, useRef, useState } from 'react';
import ExternalLink from './ExternalLink';

interface WorkCardProps {
  period: string;
  description: React.ReactNode;
  href: string;
  label: string;
  ariaLabel: string;
  workAriaLabel: string;
  techUsed: string[];
  // opcional: puedes pasar maxChars si quieres ajustar por tarjeta
  maxChars?: number;
}

const WorkCard: React.FC<WorkCardProps> = ({ period, description, href, label, ariaLabel, workAriaLabel, techUsed, maxChars = 240 }) => {
  const [isLong, setIsLong] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const el = descRef.current;
    if (!el) return;
    const length = el.innerText.trim().length;
    setIsLong(length > maxChars);
  }, [description, maxChars]);

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

            {/* Contenedor con recorte cuando no está expandido */}
            <div className="relative mt-2 text-sm leading-normal">
              <p
                ref={descRef}
                style={{
                  display: isLong && !expanded ? '-webkit-box' : undefined,
                  WebkitLineClamp: isLong && !expanded ? 4 : undefined, // number of lines to show
                  WebkitBoxOrient: isLong && !expanded ? 'vertical' : undefined,
                  overflow: isLong && !expanded ? 'hidden' : undefined,
                  textOverflow: isLong && !expanded ? 'ellipsis' : undefined,
                  transition: 'max-height .2s ease',
                }}
              >
                {description}
              </p>
            </div>

            {/* botón Mostrar más (solo cuando está colapsado) */}
            {isLong && !expanded && (
              <div className="mt-2" style={{ position: 'relative', zIndex: 60 }}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setExpanded(true);
                  }}
                  onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  // asegurar que el botón reciba punteros aunque haya un enlace overlay
                  style={{ position: 'relative', zIndex: 70, pointerEvents: 'auto' }}
                  className="text-sm font-medium text-teal-300 hover:underline"
                  aria-expanded={expanded}
                >
                  Mostrar más
                </button>
              </div>
            )}

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