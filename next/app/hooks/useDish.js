import { useContext } from 'react';
import { DishProvider } from '../ContextProvider/DishProvider'; // Adjust path as needed

export const useDish = () => {
  const context = useContext(DishProvider);

  if (!context) {
    throw new Error('useDish must be used within a DishProvider');
  }

  return context;
};

/*
const Dashboard = () => {
  const {
    inputs,
    setInputs,
    Dishes,
    setDishes,
    isStale,
    setStale,
  } = useDish();

  return (
    <div>
      <h2>{inputs?.heading || 'No dish selected'}</h2>
      <button onClick={() => setStale(true)}>Mark Dashboard Stale</button>
    </div>
  );
};
*/