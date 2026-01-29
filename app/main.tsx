"use client";
import { useEffect, useState } from "react";
import { UserResponse, UserResponseData } from "./models";
import Image from "next/image";
import { space_grotesk, space_mono, work_sans } from "./fonts";
import SpotifyStatusComp from "./components/SpotifyStatus";
import Activity from "./components/Activity";
import { getTime } from "./tools";
import NoiseBackground from "./components/NoiseBackground";
import useWindowFocus from "./util/WindowFocus";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import LinkButton from "./components/LinkButton";
import dynamic from "next/dynamic";
import GridBackground from "./components/GridBackground";
import ContainerGlare from "./components/ContainerGlare";
import Activities from "./containers/Activities";
import Links from "./containers/Links";
import OtherInfo from "./containers/OtherInfo";
import Projects from "./containers/Projects";
import Header from "./containers/Header";

export default function Main() {
  const [user, setUser] = useState<UserResponseData>();
  const isFocused = useWindowFocus();
  const isWeb = useMediaQuery({ minWidth: 1280 });
  async function getDiscordData() {
    const req = await fetch(
      "https://api.lanyard.rest/v1/users/978596696156147754",
    );
    const data = (await req.json()) as UserResponse;
    setUser(data.data);
  }
  const [nextRefresh, setNextRefresh] = useState(10);

  useEffect(() => {
    getDiscordData();

    let counter = 10;
    const interval = setInterval(() => {
      counter -= 1;
      setNextRefresh(counter);

      if (counter <= 0) {
        if (isFocused) {
          getDiscordData();
        }
        counter = 10;
        setNextRefresh(counter);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function hexToRgb(hex: string): [number, number, number] {
    const cleaned = hex.replace("#", "");
    const r = parseInt(cleaned.slice(0, 2), 16);
    const g = parseInt(cleaned.slice(2, 4), 16);
    const b = parseInt(cleaned.slice(4, 6), 16);
    return [r, g, b];
  }

  function getBackgroundColor() {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Warsaw",
      hour: "numeric",
    }).formatToParts(now);

    var hour = Number(parts.find((p) => p.type === "hour")?.value || 0);
    if (hour >= 5 && hour < 8) {
      return "#806653"; // sunrise
    } else if (hour >= 8 && hour < 17) {
      return "#60729c"; // morning/noon
    } else if (hour >= 17 && hour < 20) {
      return "#232652"; // evening
    } else {
      return "#0A0F1E"; // night
    }
  }

  return (
    <div
      className="min-h-screen relative flex flex-col items-center"
      style={{
        background: `linear-gradient(to bottom, ${getBackgroundColor()}, black)`,
      }}
    >
      <GridBackground />
      <div className="flex flex-col xl:flex-row justify-around lg:absolute gap-2 lg:top-1/2 lg:left-1/2 lg:-translate-1/2 w-full lg:w-3/4 xl:h-5/6 p-2">
        <div className="flex flex-col gap-2 flex-1">
          <Header />
          <Projects />
          <OtherInfo />
          <Links isWeb={isWeb} />
        </div>
        <div className="flex flex-col gap-2">
          {user && <Activities user={user} />}
        </div>
      </div>
    </div>
  );
}
