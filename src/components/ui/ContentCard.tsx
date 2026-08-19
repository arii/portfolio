import React from 'react';
import SafeImage from '@/components/ui/SafeImage';

export interface ContentCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  tags: string[];
  status?: string;
  metrics?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  tags,
  status,
  metrics
}) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-950 transition hover:border-slate-700">
      <SafeImage
        src={imageUrl}
        alt={imageAlt || title}
        containerClassName="h-44 w-full"
        className="h-full w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-400">{status}</span>
          {metrics && <span className="text-xs font-semibold text-amber-400">{metrics}</span>}
        </div>
        <h3 className="text-base font-semibold text-slate-100">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-slate-400">{description}</p>
        <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="rounded bg-slate-900 px-2 py-0.5 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ContentCard;
