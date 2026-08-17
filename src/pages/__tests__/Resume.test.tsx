import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import ResumePage from '../ResumePage';

describe('ResumePage Component', () => {
  it('renders header, title, and contact details correctly', () => {
    render(
      <BrowserRouter>
        <ResumePage />
      </BrowserRouter>
    );

    expect(screen.getByText('Ariel Anders, PhD')).toBeInTheDocument();
    expect(
      screen.getByText('Senior Roboticist & DevAI Infrastructure Engineer')
    ).toBeInTheDocument();
    expect(screen.getByText('anders.ariel@gmail.com')).toBeInTheDocument();
  });

  it('renders all primary resume sections', () => {
    render(
      <BrowserRouter>
        <ResumePage />
      </BrowserRouter>
    );

    expect(screen.getByText('Executive Summary')).toBeInTheDocument();
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
  });

  it('renders work experience items correctly', () => {
    render(
      <BrowserRouter>
        <ResumePage />
      </BrowserRouter>
    );

    expect(screen.getByText('Civ Robotics')).toBeInTheDocument();
    expect(screen.getByText('Senior Algorithms Developer')).toBeInTheDocument();
    expect(screen.getByText('Waymo')).toBeInTheDocument();
    expect(screen.getAllByText('Robust.AI').length).toBeGreaterThan(0);
  });

  it('renders education details correctly', () => {
    render(
      <BrowserRouter>
        <ResumePage />
      </BrowserRouter>
    );

    expect(
      screen.getByText('PhD & SM in Computer Science and Electrical Engineering')
    ).toBeInTheDocument();
    expect(
      screen.getByText('University of California, Santa Cruz')
    ).toBeInTheDocument();
  });

  it('triggers window.print on print button click', () => {
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});

    render(
      <BrowserRouter>
        <ResumePage />
      </BrowserRouter>
    );

    const printButton = screen.getByRole('button', { name: /Print \/ Export PDF/i });
    fireEvent.click(printButton);

    expect(printSpy).toHaveBeenCalledTimes(1);
    printSpy.mockRestore();
  });
});
