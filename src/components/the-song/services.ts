import axios from 'axios';
import configs from 'configs';
import { calcSec } from './utils';
import { ILyricJson, IRawLyricJson } from './interface';

export const getLyricJson = (): Promise<ILyricJson> => axios.get<IRawLyricJson, IRawLyricJson>(`${configs.COS_DOMAIN}/assets/the-song.json`).then((data) => ({
  title: data.title,
  artist: data.artist,
  lyrics: data.lyrics.map(item => ({
    timeSec: calcSec(item.timeTag),
    content: item.content,
  })),
}));
