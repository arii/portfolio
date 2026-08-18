import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DevAIListPage from './DevAIListPage';
import ResearchDetailPage from './ResearchDetailPage';

export interface DevAIProps {
  subtitle?: string;
}

const DevAI: React.FC<DevAIProps> = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const handleNavigate = (targetSlug: string) => {
    navigate(`/devai/${targetSlug}`);
  };

  const handleBack = () => {
    navigate('/devai');
  };

  if (slug) {
    return <ResearchDetailPage slug={slug} onBack={handleBack} />;
  }

  return <DevAIListPage onNavigate={handleNavigate} />;
};

export default DevAI;
