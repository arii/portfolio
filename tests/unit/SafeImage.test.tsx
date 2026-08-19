import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SafeImage from '@/components/ui/SafeImage';

describe('SafeImage Component', () => {
  it('renders image and handles error gracefully with placeholder', () => {
    render(
      <SafeImage
        src="/invalid-asset-path.png"
        alt="Test project thumbnail"
        containerClassName="h-40 w-full"
      />
    );

    const img = screen.getByAltText('Test project thumbnail');
    fireEvent.error(img);

    expect(screen.getByText('Test project thumbnail')).toBeInTheDocument();
  });
});
