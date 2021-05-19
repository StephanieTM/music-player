import axios from 'axios';
import configs from 'configs';
import { ILyricJson } from './interface';

export const getLyricJson = (): Promise<ILyricJson> => axios.get(`${configs.COS_DOMAIN}/assets/the-song.json`);
