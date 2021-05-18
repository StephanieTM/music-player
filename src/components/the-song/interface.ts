export interface ILyricJson {
  title: string;
  artist: string;
  lyrics: Array<{
    timeTag: string;
    content: string;
  }>;
}
