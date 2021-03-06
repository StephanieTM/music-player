import React from 'react';
import LandPage from './LandPage';
import Player from './Player';
import LocalStore from './local-store';
import './index.less';

export default function TheSong(): JSX.Element {
  return (
    <LocalStore.Provider>
      <div className="the-song-container">
        <LandPage />
        <Player />
      </div>
    </LocalStore.Provider>
  );
}
