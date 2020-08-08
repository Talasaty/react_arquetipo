import * as React from 'react';
import { render, screen } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders App component', async () => {
   
    render(<App />);
    screen.getByText('Front React App, by Mayorga')
    
  });

});