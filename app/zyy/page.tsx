"use client";
import { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "./style.css"; // Assuming you have a CSS file for styles

export default function CubePage() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlay, setIsPlay] = useState(false);

    const clickAudio = () => {
        if (!isPlay && audioRef.current) {
            audioRef.current.play();
            setIsPlay(true);
        }
    };

    return (
        <>
            <div className="flex  items-center justify-center h-screen">
                <audio ref={audioRef} autoPlay loop preload="auto" id="audio">
                    <source src="/assets/mp3/1.mp3" type="audio/mpeg" />
                </audio>
                <div className="container" onClick={clickAudio}>
                    <div className="box">
                        {["front", "back", "left", "right", "top", "bottom"].map((side, i) => (
                            <div key={i} className={`out-div out-${side}`}>
                                <Image src={`/assets/img/zyy${i + 1}.jpg`} alt={`out-${side}`} width={200} height={200} style={{ objectFit: "cover" }} />
                                {/* <img src={`/assets/img/zyy${i + 1}.jpg`} alt={`out-${side}`} /> */}
                            </div>
                        ))}
                        {["front", "back", "left", "right", "top", "bottom"].map((side, i) => (
                            <div key={i} className={`in-div in-${side}`}>
                                <Image src={`/assets/img/zyy${i + 1}.jpg`} alt={`in-${side}`} width={100} height={100} style={{ objectFit: "fill" }} />
                                {/* <img src={`/assets/img/zyy${i + 1}.jpg`} alt={`in-${side}`} /> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
