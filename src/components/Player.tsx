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

export const Player = () => {
 const audioRef = useRef<HTMLAudioElement>(null);
 const [isPlaying, setIsPlaying] = useState(false);
 const [isRepeatOne, setIsRepeatOne] = useState(false);
 const [isShuffleOn, setIsShuffleOn] = useState(false);
 const [volume, setVolume] = useState(0.5);
 const [currentTime, setCurrentTime] = useState(0);
 const [trackDuration, setTrackDuration] = useState(0);
 const [progress, setProgress] = useState(0);
 const [isScrubbing, setIsScrubbing] = useState(false);

 useEffect(() => {
  if (isPlaying && audioRef.current && !isScrubbing) {
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
 }, [isPlaying, isScrubbing]);

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

 function nilFirst(t: any) {
  if (t.toString().length === 1) return "0" + t;
  return t.toString();
 }

 function toTime(sec = 0) {
  return nilFirst(Math.trunc(sec / 60)) + ":" + nilFirst(Math.trunc(sec % 60));
 }

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
   const clickPositionX = event.nativeEvent.offsetX;
   const progressBarWidth = event.currentTarget.clientWidth;
   const clickPercentageWidth = clickPositionX / progressBarWidth;
   const clickTime = clickPercentageWidth * trackDuration;
   console.log("clickPositionX", clickPositionX);
   console.log("progressBarWidth", progressBarWidth);
   console.log("clickPercentageWidth", clickPercentageWidth);
   console.log("clickTime", clickTime);
   console.log("===>>>>>>>>>>>>>>>");

   const wasPlaying = !audioRef.current.paused;
   audioRef.current.pause();

   setIsScrubbing(true);

   audioRef.current.currentTime = clickTime;
   setProgress(clickPercentageWidth * 100);

   setTimeout(() => {
    setIsScrubbing(false);
    if (wasPlaying) {
     audioRef.current?.play();
    }
   }, 300);
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
   <Typography>{toTime(currentTime)}</Typography>
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
   <Typography>{toTime(trackDuration)}</Typography>
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

// import React, { useRef, useState, useEffect } from "react";
// import { LinearProgress } from "@mui/material";

// export const Player = () => {
//  const audioRef = useRef<HTMLAudioElement>(null);
//  const [progress, setProgress] = useState(0);

//  useEffect(() => {
//   const updateProgress = () => {
//    if (audioRef.current) {
//     const currentTime = audioRef.current.currentTime;
//     const duration = audioRef.current.duration || 0;
//     const percent = (currentTime / duration) * 100;
//     setProgress(percent);
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

//  // Обработчик клика по прогресс-бару
//  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
//   if (audioRef.current) {
//    const progressBar = event.currentTarget; // Получаем элемент прогресс-бара
//    const clickPositionX = event.nativeEvent.offsetX; // Позиция клика по оси X
//    const progressBarWidth = progressBar.clientWidth; // Ширина прогресс-бара
//    const clickPercentage = clickPositionX / progressBarWidth; // Процент нажатия на прогресс-бар
//    const newTime = clickPercentage * audioRef.current.duration; // Новое время воспроизведения
//    console.log("clickPositionX", clickPositionX);
//    console.log("progressBarWidth", progressBarWidth);
//    console.log("clickPercentage", clickPercentage);
//    console.log("newTime", newTime);
//    console.log("===>>>>>>>>>>>>>>>");

//    audioRef.current.currentTime = newTime; // Устанавливаем новое время
//   }
//  };

//  const handleAudioClick = (event: React.MouseEvent<HTMLAudioElement>) => {
//   if (audioRef.current) {
//    const progressBar = event.currentTarget; // Получаем элемент прогресс-бара
//    const clickPositionX = event.nativeEvent.offsetX; // Позиция клика по оси X
//    const progressBarWidth = progressBar.clientWidth; // Ширина прогресс-бара
//    const clickPercentage = clickPositionX / progressBarWidth; // Процент нажатия на прогресс-бар
//    const newTime = clickPercentage * audioRef.current.duration; // Новое время воспроизведения
//    console.log("clickPositionX AUDIO", clickPositionX);
//    console.log("progressBarWidth AUDIO", progressBarWidth);
//    console.log("clickPercentage AUDIO", clickPercentage);
//    console.log("newTime AUDIO", newTime);
//    console.log("===>>>>>>>>>>>>>>>");

//    audioRef.current.currentTime = newTime; // Устанавливаем новое время
//   }
//  };
//  return (
//   <div>
//    <audio
//     ref={audioRef}
//     src="/Dope - Thanks For Nothing.mp3"
//     controls
//     onClick={handleAudioClick}
//    />

//    {/* Полоса прогресса */}
//    <LinearProgress
//     variant="determinate"
//     value={progress}
//     onClick={handleProgressClick} // Навешиваем событие onClick
//     sx={{
//      width: "100%",
//      marginLeft: "10px",
//      marginRight: "10px",
//      cursor: "pointer", // Указываем, что элемент кликабельный
//     }}
//    />
//   </div>
//  );
// };
