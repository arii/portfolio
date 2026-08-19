import React from 'react';
import { ResearchTool } from '@/types/research';
import ResearchCard from './ResearchCard';

interface ToolCardProps {
  tool: ResearchTool;
  onNavigate: (slug: string) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onNavigate }) => {
  return <ResearchCard tool={tool} onNavigate={onNavigate} onSelect={onNavigate} />;
};

export default ToolCard;
