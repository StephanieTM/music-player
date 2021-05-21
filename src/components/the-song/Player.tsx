import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import configs from 'configs';
import Lyrics from './Lyrics';
import LocalStore from './local-store';

export default function Player(): JSX.Element {
  const { audioRef, isPlaying, setIsPlaying, setCurrentTime, setDuration, jump, play } = LocalStore.useContainer();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `${configs.COS_DOMAIN}/assets/the-song.mp3`;
    }
  }, [audioRef]);

  function handleTimeUpdate(): void {
    setCurrentTime(audioRef.current?.currentTime || 0);
  }

  function handleDurationChange(): void {
    setDuration(audioRef.current?.duration || 0);
  }

  function handleEnded(): void {
    jump(0);
    play();
  }

  return (
    <div className="player-container">
      <Button style={{ display: 'none' }} onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </Button>

      <Lyrics />

      <audio
        ref={audioRef}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
      />
    </div>
  );
}
