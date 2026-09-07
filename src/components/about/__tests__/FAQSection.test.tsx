import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FAQSection } from '../FAQSection';

const mockFaqs = [
  {
    question: 'What consulting services do you offer?',
    answer: 'I offer AI and robotics software engineering consulting.',
  },
  {
    question: 'What is your research background?',
    answer: 'I completed my PhD at MIT CSAIL.',
  },
];

describe('FAQSection Accordion Component', () => {
  it('renders all FAQ questions collapsed by default', () => {
    render(<FAQSection faqs={mockFaqs} />);

    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText('What consulting services do you offer?')).toBeInTheDocument();
    expect(screen.getByText('What is your research background?')).toBeInTheDocument();

    // Answers should not be visible initially
    expect(screen.queryByText('I offer AI and robotics software engineering consulting.')).not.toBeInTheDocument();
    expect(screen.queryByText('I completed my PhD at MIT CSAIL.')).not.toBeInTheDocument();
  });

  it('has appropriate ARIA accessibility attributes on header buttons', () => {
    render(<FAQSection faqs={mockFaqs} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);

    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[0]).toHaveAttribute('aria-controls', 'faq-panel-0');
    expect(buttons[0]).toHaveAttribute('id', 'faq-header-0');
  });

  it('expands answer panel on header click and updates ARIA attributes', () => {
    render(<FAQSection faqs={mockFaqs} />);

    const button1 = screen.getAllByRole('button')[0];
    fireEvent.click(button1);

    expect(button1).toHaveAttribute('aria-expanded', 'true');
    const answer1 = screen.getByText('I offer AI and robotics software engineering consulting.');
    expect(answer1).toBeInTheDocument();

    const panel1 = screen.getByRole('region');
    expect(panel1).toHaveAttribute('id', 'faq-panel-0');
    expect(panel1).toHaveAttribute('aria-labelledby', 'faq-header-0');

    // Second question answer remains collapsed
    expect(screen.queryByText('I completed my PhD at MIT CSAIL.')).not.toBeInTheDocument();
  });

  it('collapses expanded panel when clicked again', () => {
    render(<FAQSection faqs={mockFaqs} />);

    const button1 = screen.getAllByRole('button')[0];
    // Open
    fireEvent.click(button1);
    expect(screen.getByText('I offer AI and robotics software engineering consulting.')).toBeInTheDocument();

    // Close
    fireEvent.click(button1);
    expect(screen.queryByText('I offer AI and robotics software engineering consulting.')).not.toBeInTheDocument();
    expect(button1).toHaveAttribute('aria-expanded', 'false');
  });

  it('allows expanding multiple FAQ items independently', () => {
    render(<FAQSection faqs={mockFaqs} />);

    const [button1, button2] = screen.getAllByRole('button');

    fireEvent.click(button1);
    fireEvent.click(button2);

    expect(screen.getByText('I offer AI and robotics software engineering consulting.')).toBeInTheDocument();
    expect(screen.getByText('I completed my PhD at MIT CSAIL.')).toBeInTheDocument();
    expect(button1).toHaveAttribute('aria-expanded', 'true');
    expect(button2).toHaveAttribute('aria-expanded', 'true');
  });
});
