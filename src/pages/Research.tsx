import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ResearchListPage from './ResearchListPage';
import ResearchDetailPage from './ResearchDetailPage';

export interface ResearchProps {
  subtitle?: string;
}

const Research: React.FC<ResearchProps> = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const handleNavigate = (targetSlug: string) => {
    const cleanSlug = targetSlug.replace(/^\/?(devai|research)\//, '').replace(/^\//, '');
    navigate(`/research/${cleanSlug}`);
  };

  const handleBack = () => {
    navigate('/research');
  };

  if (slug) {
    return <ResearchDetailPage slug={slug} onBack={handleBack} />;
  }

  return <ResearchListPage onNavigate={handleNavigate} />;
};

export default Research;
