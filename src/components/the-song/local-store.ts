import { useRef, useState } from 'react';
import { usePrevious } from 'hooks';
import { createContainer } from 'unstated-next';
import { ILyricJson, IValue } from './interface';
import { calcSec } from './utils';

function useLocalStore(): IValue {
  const audioRef = useRef<HTMLAudioElement|null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [lyricJson, setLyricJson] = useState<ILyricJson>({ title: '', artist: '', lyrics: [] });
  const prevIsPlaying = usePrevious(isPlaying);

  // iOS限制audio.play()只能在点击等事件的回调中执行，故在useEffect(componentDidUpdate)中调用时没有效果，此处模拟getDerivedStateFromProps
  if (isPlaying && !prevIsPlaying) {
    play();
  }
  if (!isPlaying && prevIsPlaying) {
    pause();
  }

  function toggleState(): void {
    setIsPlaying(curr => !curr);
  }

  function play(): void {
    audioRef.current?.play();
    !isPlaying && setIsPlaying(true);
  }

  function pause(): void {
    audioRef.current?.pause();
    isPlaying && setIsPlaying(false);
  }

  function jump(timeTag: string): void
  function jump(timeTag: number): void
  function jump(timeTag: string|number): void {
    if (audioRef.current) {
      audioRef.current.currentTime = typeof timeTag === 'number' ? timeTag : calcSec(timeTag);
    }
  }

  return {
    audioRef,
    duration,
    setDuration,
    currentTime,
    setCurrentTime,
    isPlaying,
    setIsPlaying,
    lyricJson,
    setLyricJson,
    toggleState,
    play,
    pause,
    jump,
  };
}

export default createContainer<IValue>(useLocalStore);
