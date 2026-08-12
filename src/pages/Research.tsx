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
    navigate(`/research/${targetSlug}`);
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
