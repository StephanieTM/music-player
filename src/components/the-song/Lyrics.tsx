import React from 'react';
import { useAsync } from 'react-use';
import { getLyricJson } from './services';

export default function Lyrics(): JSX.Element {
  const { value: lyric } = useAsync(
    () => getLyricJson(),
    []
  );

  return (
    <div>
      <h3>Lyrics</h3>
      <p>{lyric?.title}</p>
      <p>{lyric?.artist}</p>
      {lyric?.lyrics.map(({ content, timeTag }, index) => (
        <p key={`${timeTag}-${index}`}>{content}</p>
      ))}
    </div>
  );
}
