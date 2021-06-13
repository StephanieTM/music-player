import React from 'react';
import downImg from 'assets/images/down.png';
import LocalStore from './local-store';

export default function LandPage(): JSX.Element {
  const { play } = LocalStore.useContainer();

  function handleClickDown(): void {
    play();
    window.scrollTo({ top: window.visualViewport.height, behavior: 'smooth' });
  }

  return (
    <div className="land-page-container">
      <div className="text-container">
        {/* <div>
          Happy Anniversary!
        </div>
        <div>
          2020/05/23 ➡️ 2021/05/23
        </div> */}
        ❤️
      </div>

      <div className="down" onClick={handleClickDown}>
        <img src={downImg} />
      </div>
    </div>
  );
}
