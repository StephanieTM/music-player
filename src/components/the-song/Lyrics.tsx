import React, { useEffect, useRef } from 'react';
import { getLyricJson } from './services';
import LocalStore from './local-store';

const lineHeight = 1.8;
const fontSizeRem = 1.2;
const activeFontSizeRem = 1.6;

const lyricStyle: React.CSSProperties = {
  fontSize: `${fontSizeRem}rem`,
  lineHeight,
};

const activeLyricStyle: React.CSSProperties = {
  fontSize: `${activeFontSizeRem}rem`,
  lineHeight,
};

export default function Lyrics(): JSX.Element {
  const { lyricJson, setLyricJson, jump, currentTime, activeLrcIndex, setActiveLrcIndex } = LocalStore.useContainer();
  const { lyrics, artist, title } = lyricJson;
  const containerRef = useRef<HTMLDivElement>(null);
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

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

  useEffect(() => {
    for (let i = 0; i < lyrics.length; i += 1) {
      if (lyrics[i].timeSec <= currentTime) {
        if (i < lyrics.length - 1) {
          if (currentTime < lyrics[i + 1].timeSec) {
            setActiveLrcIndex(i);
            return;
          }
        } else {
          setActiveLrcIndex(i);
          return;
        }
      }
    }
    setActiveLrcIndex(-1);
  }, [currentTime, lyrics, setActiveLrcIndex]);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: activeLrcIndex * fontSizeRem * rem * lineHeight,
      behavior: 'smooth',
    });
  }, [activeLrcIndex, rem]);

  function handleJump(timeSec: number, index: number): void {
    setActiveLrcIndex(index);
    jump(timeSec);
  }

  return (
    <div className="lyric-container" ref={containerRef}>
      <div>
        <p className="lyric" style={lyricStyle}>{title}</p>
        <p className="lyric" style={lyricStyle}>{artist}</p>
        {lyrics.map(({ content, timeSec }, index) => {
          const isActive = activeLrcIndex === index;

          return (
            <p
              key={`${timeSec}-${index}`}
              onClick={() => handleJump(timeSec, index)}
              className={`lyric ${isActive ? 'active' : ''}`}
              style={isActive ? activeLyricStyle : lyricStyle}
            >
              {content}
            </p>
          );
        })}
      </div>
    </div>
  );
}
