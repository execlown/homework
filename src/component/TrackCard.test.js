import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import TrackCard from './TrackCard'

test("All components should be render", () => {
    render(<TrackCard />);

    const song = screen.getByTestedId("song-pic");
    const title = screen.getByTestedId("song-title");
    const detail = screen.getByTestedId("song-detail");
    const button = screen.getByTestedId("song-btn");
    
    expect(song).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(detail).toBeInTheDocument();


});
  