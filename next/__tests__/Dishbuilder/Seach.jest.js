import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Search from '../../app/components/DishBuilder/Search';
 
describe('Dishbuilder Search', () => {
  it('Elements Stacked Correctly', () => {
    const {getByRole, getByTestId} = 
      render(<Search 
        onAddIngredient={[{"ingredientName": "cat","quantity": 10,"unit_ID": 10,"state_ID": 10}]}
        ingredients={[{"ingredient_ID":166,"name":"Açaí"}]} />);
    const root = getByRole('search');
    const query = getByTestId('query');
    const response = getByTestId('response');
    expect(root).toContainElement(query);
    expect(root).toContainElement(response);
    expect(response).not.toContainElement(root); // Pass
  })

  it('Query Renders Correctly', () => {
    const {getByTestId} = render(<Search />);
    const query = getByTestId('query');
    expect(query).toHaveClass('md:flex md:items-center');
    expect(query).toBeInTheDocument();
  })

  it('Select List Renders Correctly', () => {
    render(<Search />);
    const units = screen.getByText('Units');
    const states = screen.getByText('States');
    expect(units).toBeInTheDocument();
    expect(states).toBeInTheDocument();
  })
})