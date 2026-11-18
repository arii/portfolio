import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ImageLightbox from '@/components/ImageLightbox';
import FlagshipCard from '@/components/FlagshipCard';
import ToolCard from '@/components/ToolCard';
import { ExperienceSection } from '@/components/resume/ExperienceSection';
import { HonorsSection } from '@/components/resume/HonorsSection';
import { ProjectsSection } from '@/components/resume/ProjectsSection';
import { flagshipTools } from '@/data/research/flagshipTools';

beforeEach(() => {
  HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) { this.open = true; });
  HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) { this.open = false; });
});

describe('native modal dialogs', () => {
  it('opens the menu modally, closes on Escape cancellation, and restores focus and scroll', () => {
    document.body.style.overflow = 'auto';
    render(<MemoryRouter><Navigation /></MemoryRouter>);
    const trigger = screen.getByRole('button', { name: 'Toggle navigation menu' });
    trigger.focus();
    fireEvent.click(trigger);
    const dialog = screen.getByRole('dialog', { name: 'Mobile Navigation Menu' });
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledOnce();
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent(dialog, new Event('cancel', { cancelable: true }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalledOnce();
    expect(trigger).toHaveFocus();
    expect(document.body.style.overflow).toBe('auto');
    document.body.style.overflow = '';
  });

  it('closes the menu when switching to the desktop breakpoint', () => {
    const preference = { matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() };
    const spy = vi.spyOn(window, 'matchMedia').mockReturnValue(preference as unknown as MediaQueryList);
    render(<MemoryRouter><Navigation /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation menu' }));
    preference.matches = true;
    const listener = preference.addEventListener.mock.calls[0][1];
    act(() => listener());
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.body.style.overflow).not.toBe('hidden');
    spy.mockRestore();
  });

  it('makes the image lightbox modal and leaves image clicks open', () => {
    const onClose = vi.fn();
    const { unmount } = render(<ImageLightbox imageSrc="/preview.webp" onClose={onClose} />);
    const dialog = screen.getByRole('dialog', { name: 'Enlarged screenshot preview' });
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByAltText('Enlarged screenshot preview'));
    expect(onClose).not.toHaveBeenCalled();
    fireEvent(dialog, new Event('cancel', { cancelable: true }));
    expect(onClose).toHaveBeenCalledOnce();
    fireEvent.click(dialog);
    expect(onClose).toHaveBeenCalledTimes(2);
    unmount();
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalledOnce();
  });
});

describe('portfolio links', () => {
  it.each(['/devai/', '/devai/gitops-pr-reviewer/', '/research/feels'])('marks the current section at %s', (path) => {
    render(<MemoryRouter initialEntries={[path]}><Navigation /></MemoryRouter>);
    const section = path.startsWith('/devai/') ? 'DevAI' : 'Research';
    expect(screen.getByRole('link', { name: section })).toHaveAttribute('aria-current', path === '/devai/' ? 'page' : 'location');
    expect(screen.getByRole('link', { name: 'Overview' })).not.toHaveAttribute('aria-current');
  });

  it('uses independent native links and an image button instead of a nested card button', () => {
    const tool = flagshipTools.find((item) => item.id === 'boomtick')!;
    const onImageClick = vi.fn();
    const onNavigate = vi.fn();
    const { container } = render(<FlagshipCard tool={tool} onNavigate={onNavigate} onImageClick={onImageClick} />);
    expect(container.querySelector('[role="button"]')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: `Enlarge preview of ${tool.title}` }));
    expect(onImageClick).toHaveBeenCalledWith(tool.image);
    expect(onNavigate).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('link', { name: /Explore Boomtick Deep-Dive/ }));
    expect(onNavigate).toHaveBeenCalledExactlyOnceWith('gitops-pr-reviewer');
    expect(screen.queryByRole('link', { name: /Inspect Boomtick source/ })).not.toBeInTheDocument();
  });

  it('keeps media actions separate from the case study', () => {
    const tool = { ...flagshipTools[0], videoUrl: 'https://example.com/video', pdfUrl: 'https://example.com/report.pdf' };
    const onNavigate = vi.fn();
    render(<ToolCard tool={tool} onNavigate={onNavigate} />);
    const video = screen.getByRole('link', { name: `Watch video demonstration of ${tool.title}` });
    expect(video).toHaveAttribute('href', tool.videoUrl);
    expect(screen.getByRole('link', { name: `Read PDF report for ${tool.title}` })).toHaveAttribute('href', tool.pdfUrl);
    fireEvent.click(video);
    expect(onNavigate).not.toHaveBeenCalled();
  });

  it('names resume icon-only links from their own entries', () => {
    render(<>
      <ExperienceSection experiences={[{ title: 'Engineer', company: 'Waymo', period: '2022', link: 'https://example.com/waymo' }]} />
      <HonorsSection honors={[{ title: 'Robotics Award', year: '2020', link: 'https://example.com/award' }]} />
      <ProjectsSection projects={[{ title: 'Navigation', description: 'Robot navigation', link: 'https://example.com/project' }]} />
    </>);
    expect(screen.getByRole('link', { name: 'Learn more about Waymo' })).toHaveAttribute('href', 'https://example.com/waymo');
    expect(screen.getByRole('link', { name: 'Learn more about Robotics Award' })).toHaveAttribute('href', 'https://example.com/award');
    expect(screen.getByRole('link', { name: 'Open Navigation' })).toHaveAttribute('href', 'https://example.com/project');
  });
});
