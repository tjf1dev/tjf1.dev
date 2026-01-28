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

export default function Main() {
  const [user, setUser] = useState<UserResponseData>();
  const [time, setTime] = useState<string | null>(null);
  const isFocused = useWindowFocus();
  const isWeb = useMediaQuery({ minWidth: 1280 });
  const status = user?.activities.find((n) => n.id == "custom");
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
  const statusColorStyleMap = {
    online: "oklch(87.1% 0.15 154.449)", // tw green 300
    idle: "oklch(92.4% 0.12 95.746)", // tw amber 200
    dnd: "oklch(70.4% 0.191 22.216)", // tw red 400
    offline: "oklch(55.6% 0 0)", // tw neutral 500
  };

  useEffect(() => {
    const now = Date.now();
    const delay = 1000 - (now % 1000);

    let interval: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      setTime(getTime());
      interval = setInterval(() => {
        setTime(getTime());
      }, 1000);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
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
      <div className="flex flex-col xl:flex-row justify-around lg:absolute gap-2 lg:top-1/2 lg:left-1/2 lg:-translate-1/2 w-full lg:w-3/4 xl:h-4/5 p-2">
        <div className="flex flex-col gap-2 flex-1">
          <div className="backdrop-blur-3xl rounded-xl p-2 border border-white/20 relative overflow-auto flex flex-col gap-1">
            {/* <NoiseBackground /> */}

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-1">
                <h1
                  className={`${space_grotesk.className} font-black text-4xl`}
                >
                  hey there! im tjf1 :3
                </h1>
              </div>
            </div>
            <p>polish silly programmer and more</p>
            <p>i make websites and discord bots in my free time</p>
            <p>
              its currently{" "}
              <span className="bg-white/10 rounded-xs px-0.5">{time}</span> for
              me!
            </p>
            <p>
              i don't usually accept discord friend requests, you can dm me
              though
            </p>
            <LinkButton
              logo="/icons/discord.svg"
              href="https://discord.gg/ZRA6XzTshx"
              text="JOIN MY DISCORD SERVER!!!!"
              long
            />
            <p>i'll update this website every time i think of something new</p>
          </div>
          <div className="backdrop-blur-3xl rounded-xl p-2 border border-white/20 relative overflow-auto">
            <h2 className={`font-medium ${space_grotesk.className}`}>
              my projects
            </h2>
            {/* projects div */}
            <div className="flex flex-col gap-1">
              {/* protochat */}
              <div className="flex flex-row gap-2">
                <Image
                  src="/icons/protochat.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-md"
                />
                <div>
                  <h3
                    className={`flex flex-row gap-1 font-semibold items-center leading-none m-0 text-lg ${space_grotesk.className}`}
                  >
                    protochat
                  </h3>
                  <p>
                    an independent chatting platform, focused on privacy and
                    simplicity.
                  </p>
                  <p className="text-xs tracking-tighter">
                    alpha, active development. | not available yet, closed
                    source (for now)
                  </p>
                </div>
              </div>

              {/* codygen */}
              <div className="flex flex-row gap-2">
                <Image
                  src="/icons/codygen.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-md"
                />
                <div className="flex flex-col">
                  <a
                    className={`flex flex-row gap-1 font-semibold underline items-center leading-none m-0 text-lg ${space_grotesk.className}`}
                    href="https://codygen.tjf1.dev"
                  >
                    codygen
                  </a>
                  <span>all-in-one powerful discord bot</span>
                  <span className="text-xs tracking-tighter">
                    beta, active development. |{" "}
                    <a href="https://github.com/tjf1dev/codygen">
                      open source.
                    </a>
                  </span>
                </div>
              </div>

              {/* lyrX */}
              <div className="flex flex-row gap-2">
                <Image
                  src="/icons/lyrx.png"
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-md"
                />
                <div>
                  <a
                    className={`flex flex-row gap-1 font-semibold underline items-center text-lg ${space_grotesk.className}`}
                    href="https://lyrx.tjf1.dev"
                  >
                    lyrX
                  </a>
                  <p>easy to use lyrics engine and API.</p>
                  <p className="text-xs tracking-tighter">
                    status: beta, maintained (no new updates planned) |{" "}
                    <a href="https://github.com/tjf1dev/codygen">open source</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-3xl rounded-xl p-2 border border-white/20 relative overflow-auto">
            {/* <NoiseBackground /> */}
            <h2>nerdy stuff</h2>
            <p>
              i code in a lot of languages, but these are the ones i use the
              most
            </p>
            <p>
              • <strong>Python</strong> - not my favorite but almost everything
              i do is in python
            </p>
            <p className="ml-2">
              ◦ i use <strong>FastAPI</strong> for networking
            </p>
            <p className="ml-2">
              ◦ and <strong>Discord.py</strong> for discord bots
            </p>
            <p>
              • <strong>JavaScript</strong> (TypeScript)
            </p>
            <p className="ml-2">
              ◦ i primarily use <a href="https://nextjs.org">Next.js</a> for
              frontend
            </p>
            <p>
              • <strong>C#</strong> - some networking stuff and unity ig
            </p>
            <p>
              • <strong>C++</strong> - mostly geometry dash mods
            </p>
          </div>
          <div className="backdrop-blur-3xl rounded-xl p-2 border border-white/20 relative overflow-auto flex flex-col xl:flex-row gap-1">
            {/* <NoiseBackground /> */}
            <LinkButton
              logo="/icons/github.svg"
              href="https://github.com/tjf1dev"
              text="GitHub"
              long={!isWeb}
            />
            <LinkButton
              logo="/icons/youtube.png"
              href="https://youtube.com/@tjf1dev"
              text="YouTube"
              long={!isWeb}
            />
            <LinkButton
              logo="/icons/twitch.svg"
              href="https://twitch.tv/tjf1dev"
              text="Twitch"
              long={!isWeb}
            />
            <LinkButton
              logo="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"
              href="https://open.spotify.com/user/315euq7uvwltu6qtcc6fij5net7q"
              text="Spotify"
              long={!isWeb}
            />
            <LinkButton
              logo="/icons/steam.svg"
              href="https://steamcommunity.com/id/tjf1/"
              text="Steam"
              long={!isWeb}
            />
            <LinkButton
              logo="/icons/lastfm.svg"
              href="https://last.fm/user/Tomekjestfajny1/"
              text="Last.fm"
              long={!isWeb}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {user && (
            <div className="backdrop-blur-3xl rounded-xl h-fit p-2 border border-white/20">
              {/* <NoiseBackground /> */}
              <p
                className={`${space_grotesk.className} text-sm flex flex-row items-center gap-1`}
                style={{
                  color: statusColorStyleMap[user?.discord_status],
                }}
              >
                <img src={"/icons/discord.svg"} width={12} height={12} />
                {user?.discord_status}
              </p>
              {status && (
                <p>
                  {status.emoji.name} {status.state}
                </p>
              )}
            </div>
          )}
          {user?.spotify && <SpotifyStatusComp spotify={user.spotify} />}
          {user?.activities.map((a, _) => (
            <Activity key={_} activity={a} />
          ))}
        </div>
      </div>
    </div>
  );
}
