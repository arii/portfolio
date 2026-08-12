import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ResearchListPage from '@/pages/ResearchListPage';
import ResearchDetailPage from '@/pages/ResearchDetailPage';

const Research: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const handleSelect = (selectedSlug: string) => {
    navigate(`/research/${selectedSlug}`);
  };

  const handleBack = () => {
    navigate('/research');
  };

  if (slug) {
    return <ResearchDetailPage slug={slug} onBack={handleBack} />;
  }

  return <ResearchListPage onNavigate={handleSelect} />;
};

export default Research;
