import React from 'react';
import { ExternalLink, ArrowRight, FlaskConical, Activity, Server, FileText, ShoppingBag, Cpu, Video, Play } from 'lucide-react';
import { ResearchTool } from '@/types/research';
import SafeImage from '@/components/ui/SafeImage';
import { GithubIcon } from '@/components/SocialIcons';

export interface FlagshipCardProps {
  tool: ResearchTool;
  onNavigate: (slug: string) => void;
  onImageClick: (src: string) => void;
}

const FlagshipCard: React.FC<FlagshipCardProps> = ({ tool, onNavigate, onImageClick }) => {
  const getToolIcon = (t: ResearchTool) => {
    if (t.id.includes('hrm')) return Activity;
    if (t.id.includes('experiments')) return FlaskConical;
    if (t.id.includes('scraper')) return Server;
    if (t.id.includes('blog-drafter')) return FileText;
    if (t.id.includes('ecommerce')) return ShoppingBag;
    return Cpu;
  };

  const ToolIcon = getToolIcon(tool);
  const imageSrc = tool.id === 'hrm-flagship' ? '/assets/research/hrm-flagship.png' : tool.id === 'repo-auditor-ai' ? '/assets/research/repo-auditor-ai.png' : tool.image || null;

  const isClickable = !!(tool.externalUrl || tool.sourceUrl || tool.canonicalPath);
  const targetSlug = tool.canonicalPath ? tool.canonicalPath.replace('/research/', '') : '';

  const executePrimaryAction = () => {
    if (tool.externalUrl) {
      window.open(tool.externalUrl, '_blank', 'noopener,noreferrer');
    } else if (tool.sourceUrl) {
      window.open(tool.sourceUrl, '_blank', 'noopener,noreferrer');
    } else if (tool.canonicalPath && targetSlug) {
      onNavigate(targetSlug);
    }
  };

  const handleCardClick = () => {
    if (isClickable) {
      executePrimaryAction();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && isClickable) {
      if (e.key === ' ') e.preventDefault();
      executePrimaryAction();
    }
  };

  return (
    <div
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? 'button' : undefined}
      className={`group rounded-3xl border border-line bg-surface p-0 flex flex-col justify-between overflow-hidden transition-all hover:border-accent hover:shadow-glow ${
        isClickable ? 'cursor-pointer' : ''
      }`}
    >
      {tool.customPreview ? (
        <div className="p-6 bg-bg border-b border-line aspect-[16/10] max-h-48 sm:max-h-64 flex flex-col justify-center space-y-2">
          <div className="text-accent font-extrabold text-sm tracking-wider font-display">
            {tool.customPreview.logo.prefix}<span className="text-text-main">{tool.customPreview.logo.accent}</span><span className="text-text-dim font-light">{tool.customPreview.logo.suffix}</span>
          </div>
          <div className="text-text-main font-black text-lg leading-tight font-display">
            {tool.customPreview.headline.map((line, idx) => (<span key={idx} className={line.accent ? 'text-accent' : ''}>{line.text}{' '}</span>))}
          </div>
          <div className="text-xs text-text-dim">{tool.customPreview.tagline}</div>
        </div>
      ) : imageSrc ? (
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
      ) : null}

      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-10 w-10 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20"><ToolIcon className="h-5 w-5 text-accent" /></div>
            {tool.id !== 'phd-thesis' && tool.id !== 'masters-thesis' && (
              <div className="flex items-center space-x-1.5 bg-surface border border-line px-2 py-1 rounded-full">
                <span className={`w-2 h-2 rounded-full ${
                  tool.status === 'Live' ? 'bg-emerald-500' :
                  tool.status === 'Local only' ? 'bg-amber-500' :
                  tool.status === 'In development' ? 'bg-sky-500' : 'bg-slate-500'
                }`}></span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-main pr-0.5">{tool.status}</span>
              </div>
            )}
          </div>
          <div>
            <span className="text-[10px] text-accent font-bold uppercase tracking-wider block font-sans">{tool.category}</span>
            <h3 className="text-xl font-bold text-text-main mt-1 font-display group-hover:text-accent transition-colors">{tool.title}</h3>
            {tool.subtitle && <p className="text-xs text-accent font-semibold tracking-wide mt-1 uppercase font-sans">{tool.subtitle}</p>}
          </div>
          <p className="text-sm text-text-dim leading-relaxed ">{tool.description}</p>
        </div>

        <div className="space-y-4 pt-4 border-t border-line">
          <div className="flex flex-wrap gap-1.5">
            {tool.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 rounded-full text-[10px] font-sans bg-surface text-text-dim border border-line">{tag}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
            {tool.canonicalPath && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (targetSlug) {
                    onNavigate(targetSlug);
                  }
                }}
                className="inline-flex items-center space-x-1.5 bg-accent/10 border border-accent/20 px-3.5 py-2 rounded-xl text-xs font-semibold text-accent hover:bg-accent/20 transition-colors min-h-[44px] cursor-pointer"
              >
                <span>Deep-Dive</span><ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
            {tool.videoUrl && (
              <a
                href={tool.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center space-x-1.5 bg-surface border border-line px-3.5 py-2 rounded-xl text-xs font-semibold text-text-dim hover:bg-surface-alt hover:text-text-main transition-colors min-h-[44px]"
              >
                <Video className="h-3.5 w-3.5 text-accent" /><span>Watch Video</span>
              </a>
            )}
            {tool.externalUrl && (
              <a
                href={tool.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[44px] ${
                  tool.canonicalPath
                    ? 'bg-surface border border-line text-text-dim hover:bg-surface-alt hover:text-text-main'
                    : 'bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20'
                }`}
              >
                <span>{tool.externalLinkDisplayLabel || 'Open Link'}</span><ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {tool.playlistUrl && (
              <a
                href={tool.playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center space-x-1.5 bg-surface border border-line px-3.5 py-2 rounded-xl text-xs font-semibold text-text-dim hover:bg-surface-alt hover:text-text-main transition-colors min-h-[44px]"
              >
                <Play className="h-3.5 w-3.5 text-accent" />
                <span>Watch Playlist</span>
              </a>
            )}
            {tool.sourceUrl && (
              <a
                href={tool.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center space-x-1.5 bg-surface border border-line px-3.5 py-2 rounded-xl text-xs font-semibold text-text-dim hover:bg-surface-alt hover:text-text-main transition-colors min-h-[44px]"
              >
                <span>Source Repo</span><GithubIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagshipCard;
