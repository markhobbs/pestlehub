import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Heading from '../app/components/Heading'
 
describe('Headings', () => {
  it('H1 Heading Exists And Is Styled Correctly', () => {
    render(<Heading Tag="h1" title="Title Test" />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText("Title Test")).toBeInTheDocument();
    expect(heading).toHaveClass('mb-2 md:mb-5 text-4xl md:text-5xl dark:text-white font-bold');
  })
  it('H2 Heading Exists And Is Styled Correctly', () => {
    render(<Heading Tag="h2" title="Title Test" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText("Title Test")).toBeInTheDocument();
    expect(heading).toHaveClass('mb-2 md:mb-5 text-3xl md:text-4xl font-bold');
  })
  it('H3 Heading Exists And Is Styled Correctly', () => {
    render(<Heading Tag="h3" title="Title Test" />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText("Title Test")).toBeInTheDocument();
    expect(heading).toHaveClass('mb-2 mt-2 md:mb-2 text-xl md:text-2xl md:mt-2 font-bold');
  })
  it('H4 Heading Exists And Is Styled Correctly', () => {
    render(<Heading Tag="h4" title="Title Test" />);
    const heading = screen.getByRole('heading', { level: 4 });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText("Title Test")).toBeInTheDocument();
    expect(heading).toHaveClass('mb-1 mt-2 md:text-l font-bold');
  })
})