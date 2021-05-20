import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { usePrevious } from 'hooks';
import config from 'configs';
import Lyrics from './Lyrics';

export default function TheSong(): JSX.Element {
  const audioRef = useRef<HTMLAudioElement|null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const prevIsPlaying = usePrevious(isPlaying);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `${config.COS_DOMAIN}/assets/the-song.mp3`;
    }
  }, []);

  // iOS限制audio.play()只能在点击等事件的回调中执行，故在useEffect(componentDidUpdate)中调用时没有效果，此处模拟getDerivedStateFromProps
  if (isPlaying && !prevIsPlaying) {
    audioRef.current?.play();
  }
  if (!isPlaying && prevIsPlaying) {
    audioRef.current?.pause();
  }

  function handleTimeUpdate(): void {
    setCurrentTime(audioRef.current?.currentTime || 0);
  }

  function handleDurationChange(): void {
    setDuration(audioRef.current?.duration || 0);
  }

  function handleEnded(): void {
    setIsPlaying(false);
  }

  return (
    <div>
      <Button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </Button>
      <Button
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 265;
          }
        }}
      >
        Jump
      </Button>

      <div>duration: {duration}</div>

      <div>currentTime: {currentTime}</div>

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
