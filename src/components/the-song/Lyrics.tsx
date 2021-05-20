import React, { useEffect } from 'react';
import { getLyricJson } from './services';
import { calcSec } from './utils';
import LocalStore from './local-store';

export default function Lyrics(): JSX.Element {
  const { lyricJson, setLyricJson, jump, currentTime } = LocalStore.useContainer();
  const { lyrics, artist, title } = lyricJson;

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getLyricJson().then(data => {
        setLyricJson(data);
      });
    }
    return () => {
      mounted = false;
    };
  }, [setLyricJson]);

  function checkIsActive(index: number): boolean {
    const { timeTag } = lyrics[index];

    if (index < lyrics.length - 1) {
      return calcSec(timeTag) <= currentTime && currentTime < calcSec(lyrics[index + 1].timeTag);
    } else {
      return calcSec(timeTag) <= currentTime;
    }
  }

  return (
    <div>
      <h3>Lyrics</h3>
      <p>{title}</p>
      <p>{artist}</p>
      {lyrics.map(({ content, timeTag }, index) => {
        const color = checkIsActive(index) ? 'orange' : 'black';

        return (
          <p
            key={`${timeTag}-${index}`}
            onClick={() => jump(timeTag)}
            style={{ color }}
          >
            {content} {timeTag}
          </p>
        );
      })}
    </div>
  );
}
