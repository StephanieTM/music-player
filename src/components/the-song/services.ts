import axios from 'axios';
import { ILyricJson } from './interface';

export const getLyricJson = (): Promise<ILyricJson> => axios.get('/music-player/assets/lyrics/the-song.json')
