import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Provider } from 'react-redux';
import { store } from '../store/index.ts';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './SearchBar';

  
describe ('Test', () => {
    test('should render TrackCard', async () => {
        render(<Router><Provider store={store}> <SearchBar/> </Provider> </Router>  );
    
        expect(await screen.findByText('Search for Tracks')).toBeInTheDocument();

        //screen.debug()
    })
});