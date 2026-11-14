import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ResearchTool } from '@/types/research';
import SafeImage from '@/components/ui/SafeImage';

export interface ProductCardProps {
  tool: ResearchTool;
  onNavigate: (slug: string) => void;
  onImageClick: (src: string) => void;
}

// Resolve the card image, including the hardcoded assets used by tools whose
// screenshots are not referenced from their data entry.
function getCardImage(tool: ResearchTool): string | null {
  if (tool.id === 'hrm-flagship') return '/assets/research/hrm-flagship.webp';
  if (tool.id === 'repo-auditor-ai') return '/assets/research/repo-auditor-ai.webp';
  return tool.image || null;
}

// The image card is the single entry point to the product's deep-dive article:
// the image is the content, the text below it is a caption.
const ProductCard: React.FC<ProductCardProps> = ({ tool, onNavigate, onImageClick }) => {
  const imageSrc = getCardImage(tool);

  const targetSlug = tool.canonicalPath
    ? tool.canonicalPath.replace(/^\/?(research|devai)\//, '').replace(/^\//, '').replace(/\/+$/, '')
    : '';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && targetSlug) {
      onNavigate(targetSlug);
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      className="group rounded-3xl border border-line bg-surface p-0 flex flex-col overflow-hidden transition-all hover:border-accent hover:shadow-glow"
    >
      {imageSrc && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            onImageClick(imageSrc);
          }}
          className="relative aspect-[16/10] max-h-48 sm:max-h-64 overflow-hidden bg-bg border-b border-line cursor-zoom-in group/img"
        >
          <SafeImage
            src={imageSrc}
            alt={tool.imageAlt || tool.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-102"
            containerClassName="w-full h-full"
          />
        </div>
      )}

      <div className="p-5 flex-grow flex flex-col space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-text-main font-display group-hover:text-accent transition-colors text-balance">
            {tool.title}
          </h3>
          <div className="flex items-center space-x-1.5 bg-bg border border-line px-2 py-1 rounded-md shrink-0">
            <span className={`w-2 h-2 rounded-md ${
              tool.status === 'Live' ? 'bg-accent' :
              tool.status === 'Local only' ? 'bg-accent' :
              tool.status === 'In development' ? 'bg-accent-sky' : 'bg-muted-foreground'
            }`}></span>
            <span className="text-xs font-semibold text-text-main pr-0.5">{tool.status}</span>
          </div>
        </div>

        <p className="text-sm text-text-dim leading-relaxed text-pretty">{tool.shortDescription || tool.description}</p>

        {tool.canonicalPath && (
          <a
            href={tool.canonicalPath}
            role="button"
            aria-label={`Read the ${tool.title} engineering deep-dive`}
            onClick={(e) => {
              if (targetSlug && !e.metaKey && !e.ctrlKey) {
                e.preventDefault();
                onNavigate(targetSlug);
              }
            }}
            className="mt-auto inline-flex items-center space-x-1.5 self-start bg-accent/10 border border-accent/20 px-3.5 py-2 rounded-xl text-xs font-semibold text-accent hover:bg-accent/20 transition-colors min-h-[44px] cursor-pointer no-underline"
          >
            <span>Read the Deep-Dive</span><ArrowRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
