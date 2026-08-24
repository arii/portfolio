import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
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
    const researchOnlyRedirects: Record<string, string> = {
      'leac-monitoring-software': 'leac-monitoring-software',
      'leac-monitoring': 'leac-monitoring-software',
      'leac': 'leac-monitoring-software',
      'light-therapy-mit': 'light-therapy-mit',
      'light-therapy': 'light-therapy-mit',
      'boop-light-detector': 'boop-light-detector',
      'boop': 'boop-light-detector',
      'report-6375-rsa': 'report-6375-rsa',
      'report-ml-lis': 'report-ml-lis',
      'report-ce118-mechatronics': 'report-ce118-mechatronics',
      'report-ce121-microprocessor': 'report-ce121-microprocessor',
    };

    if (slug in researchOnlyRedirects) {
      return <Navigate to={`/research/${researchOnlyRedirects[slug]}`} replace />;
    }

    return <ResearchDetailPage slug={slug} onBack={handleBack} />;
  }

  return <DevAIListPage onNavigate={handleNavigate} />;
};

export default DevAI;
