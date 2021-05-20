import React from 'react';
import Player from './Player';
import LocalStore from './local-store';

export default function TheSong(): JSX.Element {
  return (
    <LocalStore.Provider>
      <Player />
    </LocalStore.Provider>
  );
}
