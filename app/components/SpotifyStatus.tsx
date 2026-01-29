"use client";
import { useEffect, useState } from "react";
import { SpotifyStatus } from "../models";
import Image from "next/image";
import { space_grotesk, space_mono } from "../fonts";
import NoiseBackground from "./NoiseBackground";
import ContainerGlare from "./ContainerGlare";

export default function SpotifyStatusComp({
  spotify,
}: {
  spotify: SpotifyStatus;
}) {
  const [progress, setProgress] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [songLength, setSongLength] = useState("");
  function formatTime(ms: number) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const mmss = `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;

    return h > 0 ? `${h}:${mmss}` : mmss;
  }

  useEffect(() => {
    if (!spotify) return;

    const { start, end } = spotify.timestamps;
    const total = end - start;

    setSongLength(formatTime(total));

    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = end - now;

      const value = 100 - (100 * remaining) / total;
      setProgress(Math.min(Math.max(value, 0), 100));
      setTimeRemaining(formatTime(remaining));
    }, 250);

    return () => clearInterval(interval);
  }, [spotify]);
  return (
    <div className="backdrop-blur-sm rounded-xl h-fit p-2 border border-white/20 relative">
      {/* <NoiseBackground /> */}
      {/* <ContainerGlare topRight /> */}

      <p
        className={`${space_grotesk.className} text-sm flex flex-row items-center gap-1`}
      >
        <Image
          src={
            "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"
          }
          width={8}
          height={8}
          alt="spotify icon"
          className="aspect-square w-3 h-3"
        />
        listening to Spotify
      </p>
      <div className="flex flex-row">
        {spotify.album_art_url ? (
          <Image
            src={spotify.album_art_url}
            alt="album cover"
            width={512}
            height={512}
            className="w-20 h-20 rounded-md"
          />
        ) : (
          <span></span>
        )}
        <div className="flex flex-col px-2">
          <h2>{spotify?.song}</h2>
          <p>{spotify?.artist.replace(";", ",")}</p>
          <div
            className={`flex flex-row items-center ${space_mono.className} tracking-tighter gap-2`}
          >
            <p>-{timeRemaining}</p>
            <div className="w-full md:w-60 h-2 bg-white/20 rounded overflow-hidden">
              <div
                className="h-full bg-white rounded-r-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p>{songLength}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
