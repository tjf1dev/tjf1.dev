import { useEffect, useState } from "react";
import ContainerGlare from "../components/ContainerGlare";
import { space_grotesk } from "../fonts";
import { getTime } from "../tools";
import LinkButton from "../components/LinkButton";

export default function Header() {
  const [time, setTime] = useState<string | null>(null);
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
  return (
    <div className="backdrop-blur-sm rounded-xl p-2 border border-white/20 relative overflow-auto">
      {/* <NoiseBackground /> */}
      <ContainerGlare topLeft />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-1">
          <h1 className={`${space_grotesk.className} font-black text-4xl`}>
            hey there! im tjf1
          </h1>
        </div>
      </div>
      <LinkButton
        logo="/icons/protochat.svg"
        href="https://protochat.tjf1.dev"
        text="looking for protochat instead?"
        long
      />
      <p>
        polish <i>silly</i> programmer and more
      </p>
      <p>i make websites and discord bots in my free time</p>
      <p>
        its currently
        <span className="bg-white/10 rounded-xs px-0.5 ml-1">
          {time ?? "--:--:-- AM"}
        </span>{" "}
        for me!
      </p>
      <p>
        if you need to contact me, you can do it on discord or by{" "}
        <a href="mailto:hi@tjf1.dev">emailing me </a> (hi@tjf1.dev)
      </p>
      <p>
        i don&apos;t usually accept discord friend requests, you can dm me
        though
      </p>
      <p>
        you can join my discord server for updates! the server is read only
        though
      </p>
      <LinkButton
        logo="/icons/discord.svg"
        href="https://discord.gg/ZRA6XzTshx"
        text="Discord server"
        long
      />
    </div>
  );
}
