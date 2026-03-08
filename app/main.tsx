"use client";
import { useEffect, useState } from "react";
import { UserResponse, UserResponseData } from "./models";
import useWindowFocus from "./util/WindowFocus";
import { useMediaQuery } from "react-responsive";
import GridBackground from "./components/GridBackground";
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
    try {
      const req = await fetch(
        "https://api.lanyard.rest/v1/users/978596696156147754",
      );

      const data = (await req.json()) as UserResponse;
      setUser(data.data);
    } catch {
      console.error("failed to fetch discord info");
    }
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

  function getBackgroundColor() {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Warsaw",
      hour: "numeric",
    }).formatToParts(now);

    const hour = Number(parts.find((p) => p.type === "hour")?.value || 0);
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
      <p className="absolute right-1 bottom-1 opacity-20 text-sm leading-none m-0 tabular-nums">
        {nextRefresh}s | v{process.env.version}
      </p>
    </div>
  );
}
