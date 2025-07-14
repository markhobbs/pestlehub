import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import StatusBadge from '../app/components/StatusBadge'
 
describe('StatusBadge Links', () => {
  it('StatusBadge Exists And Is Styled Correctly', () => {
    render(<StatusBadge />);
    const link = screen.getByRole('link');
    expect(screen.getByTitle("Login to dashboard")).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  })
})