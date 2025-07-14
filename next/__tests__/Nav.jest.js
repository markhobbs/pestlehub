import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Nav from '../app/components/Nav'
 
describe('Navigation Links', () => {
  it('DishBuilder Link Exists And Is Styled Correctly', () => {
    render(<Nav />);
    const title = screen.getByTitle('Create a dish with dishbuilder');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline');
    expect(screen.getByText('DishBuilder')).toBeInTheDocument();
  }),
  it('About Link Exists And Is Styled Correctly', () => {
    render(<Nav />);
    const title = screen.getByTitle('Read about us');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline');
    expect(screen.getByText('About')).toBeInTheDocument();
  }),
  it('Search Link Exists And Is Styled Correctly', () => {
    render(<Nav />);
    const title = screen.getByTitle('Search our spices');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline');
    expect(screen.getByText('Search')).toBeInTheDocument();
  }),
  it('Login Link Exists And Is Styled Correctly', () => {
    render(<Nav />);
    const title = screen.getByTitle('Login to Dashboard');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline');
    expect(screen.getByText('Login')).toBeInTheDocument();
  }),
  it('Signup Link Exists And Is Styled Correctly', () => {
    render(<Nav />);
    const title = screen.getByTitle('Signup to PestleHub');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline me-2 md:me-4');
    expect(screen.getByText('Signup')).toBeInTheDocument();
  })
})