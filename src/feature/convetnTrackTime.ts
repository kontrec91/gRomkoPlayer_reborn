function formatTime(t: number) {
 if (t.toString().length === 1) {
  return "0" + t;
 }
 return t;
}

export function formatSecondsToMinutes(sec = 0) {
 return `${formatTime(Math.trunc(sec / 60))}:${formatTime(
  Math.trunc(sec % 60)
 )}`;
}
