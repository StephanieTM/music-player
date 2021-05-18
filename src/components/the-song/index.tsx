import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@chakra-ui/react';
import Lyrics from './Lyrics';

export default function TheSong(): JSX.Element {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div>
      <Button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </Button>

      <Lyrics />

      <audio
        ref={audioRef}
        src="/assets/songs/the-song.mp3"
        hidden
      />
    </div>
  );
}
