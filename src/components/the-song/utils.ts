export function calcSec(timeTag: string): number {
  const match = timeTag.match(/(\d+):(\d+).(\d+)/);
  if (match) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_str, minute, second, milliSecond] = match;
    return Number(minute)*60 + Number(`${second}.${milliSecond}`);
  }
  return 0;
}
