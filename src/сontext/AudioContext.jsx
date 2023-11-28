import { createContext, useState } from "react";
import tracksList from "../assets/tracksList";

const defaultTrack = tracksList[0];
const audio = new Audio(defaultTrack.src);


export const AudioContext = createContext({});

// eslint-disable-next-line react/prop-types
const AudioProvider = ({children}) => {
    const [currentTrack, setCurrentTrack] = useState(defaultTrack);
    const [isPlaying, setIsPlaying] = useState(false);
    const handleToggleAudio = (track) => {
        if (currentTrack.id !== track.id) {
            setCurrentTrack(track);
            setIsPlaying(true);

            audio.src = track.src;
            audio.currentTime = 0;
            audio.play();
            return;
        }

       if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
       } else {
        audio.play();
        setIsPlaying(true);
       }
    };
const value = {audio, currentTrack, isPlaying, handleToggleAudio}

    return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider;