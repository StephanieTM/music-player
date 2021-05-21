import React from 'react';

export interface IRawLyricJson {
  title: string;
  artist: string;
  lyrics: Array<{
    timeTag: string;
    content: string;
  }>;
}

export interface ILyricJson {
  title: string;
  artist: string;
  lyrics: Array<{
    timeSec: number;
    content: string;
  }>;
}

export interface IValue {
  audioRef: React.MutableRefObject<HTMLAudioElement|null>;
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  lyricJson: ILyricJson;
  setLyricJson: React.Dispatch<React.SetStateAction<ILyricJson>>;
  activeLrcIndex: number;
  setActiveLrcIndex: React.Dispatch<React.SetStateAction<number>>;
  toggleState: () => void;
  play: () => void;
  pause: () => void;
  jump(timeTag: string): void;
  jump(timeTag: number): void;
}
