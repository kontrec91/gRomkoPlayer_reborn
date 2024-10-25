import {
 Pause,
 PlayArrow,
 RepeatOne,
 RepeatOneOn,
 Shuffle,
 ShuffleOn,
 SkipNext,
 SkipPrevious,
} from "@mui/icons-material";
import { IconButton, LinearProgress, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { formatSecondsToMinutes } from "../feature/convetnTrackTime";

export const Player = () => {
 const audioRef = useRef<HTMLAudioElement>(null);
 const [isPlaying, setIsPlaying] = useState(false);
 const [isRepeatOne, setIsRepeatOne] = useState(false);
 const [isShuffleOn, setIsShuffleOn] = useState(false);
 const [volume, setVolume] = useState(0.5);
 const [currentTime, setCurrentTime] = useState(0);
 const [trackDuration, setTrackDuration] = useState(0);
 const [progress, setProgress] = useState(0);

 useEffect(() => {
  if (isPlaying && audioRef.current) {
   setTrackDuration(audioRef.current.duration);
   const timer = setInterval(() => {
    setCurrentTime(audioRef.current!.currentTime);
    setProgress(() => {
     if (audioRef.current!.ended) {
      setIsPlaying(false);
      return 0;
     }

     return (audioRef.current!.currentTime / audioRef.current!.duration) * 100;
    });
   }, 500);

   return () => clearInterval(timer);
  }
 }, [isPlaying]);

 //  useEffect(() => {
 //   const updateProgress = () => {
 //    if (audioRef.current) {
 //     const currentTime = audioRef.current.currentTime;
 //     const duration = audioRef.current.duration || 0;
 //     const percent = (currentTime / duration) * 100;
 //     setProgress(percent);
 //     setCurrentTime(currentTime);
 //    }
 //   };

 //   if (audioRef.current) {
 //    audioRef.current.addEventListener("timeupdate", updateProgress);
 //   }

 //   return () => {
 //    if (audioRef.current) {
 //     audioRef.current.removeEventListener("timeupdate", updateProgress);
 //    }
 //   };
 //  }, []);

 const togglePlay = () => {
  if (audioRef.current) {
   if (isPlaying) {
    audioRef.current.pause();
   } else {
    audioRef.current.play();
   }
   setIsPlaying(!isPlaying);
  }
 };

 const handleVolumeChange = (e: Event, newValue: number | number[]) => {
  if (audioRef.current) {
   const newVolume = Array.isArray(newValue) ? newValue[0] : newValue;
   audioRef.current.volume = newVolume;
   setVolume(newVolume);
  }
 };

 const handleProgressChange = (event: React.MouseEvent<HTMLDivElement>) => {
  if (audioRef.current) {
   isPlaying && audioRef.current.pause();
   const progressBar = event.currentTarget;
   const rect = progressBar.getBoundingClientRect();
   const clickPositionX = event.clientX - rect.left;
   const progressBarWidth = progressBar.clientWidth;
   const clickPercentageWidth = clickPositionX / progressBarWidth;
   const clickTime = clickPercentageWidth * trackDuration;

   audioRef.current.currentTime = clickTime;
   setProgress(clickPercentageWidth * 100);

   isPlaying && audioRef.current.play();
  }
 };

 return (
  <Box
   sx={{
    display: "flex",
    alignItems: "center",
    width: "100%",
    background: "red",
    position: "fixed",
    bottom: 0,
   }}>
   <audio
    ref={audioRef}
    loop={isRepeatOne}
    // src="/t-rex-roar.mp3"
    src="/Король и Шут - Ведьма и Осел.mp3"
    style={{
     width: "600px",
    }}
   />

   <IconButton>
    <SkipPrevious />
   </IconButton>
   <IconButton onClick={togglePlay}>
    {isPlaying ? <Pause /> : <PlayArrow />}
   </IconButton>
   <IconButton>
    <SkipNext />
   </IconButton>
   <Typography>{formatSecondsToMinutes(currentTime)}</Typography>
   <LinearProgress
    value={progress}
    variant="determinate"
    sx={{
     width: "100%",
     marginLeft: "10px",
     marginRight: "10px",
     cursor: "pointer",
    }}
    onClick={handleProgressChange}
   />
   <Typography>{formatSecondsToMinutes(trackDuration)}</Typography>
   <IconButton onClick={() => setIsRepeatOne((prev) => !prev)}>
    {isRepeatOne ? <RepeatOneOn /> : <RepeatOne />}
   </IconButton>
   <IconButton onClick={() => setIsShuffleOn((prev) => !prev)}>
    {isShuffleOn ? <ShuffleOn /> : <Shuffle />}
   </IconButton>
   <Slider
    value={volume}
    aria-label="Volume"
    min={0}
    max={1}
    step={0.01}
    sx={{
     width: "150px",
    }}
    onChange={handleVolumeChange}
   />
  </Box>
 );
};
