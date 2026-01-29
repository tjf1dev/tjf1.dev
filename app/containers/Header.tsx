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
    <div className="backdrop-blur-sm rounded-xl p-2 border border-white/20 relative overflow-auto flex flex-col gap-1">
      {/* <NoiseBackground /> */}
      <ContainerGlare topLeft />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-1">
          <h1 className={`${space_grotesk.className} font-black text-4xl`}>
            hey there! im tjf1 :3
          </h1>
        </div>
      </div>
      <p>polish silly programmer and more</p>
      <p>i make websites and discord bots in my free time</p>
      <p>
        its currently{" "}
        <span className="bg-white/10 rounded-xs px-0.5">{time}</span> for me!
      </p>
      <p>
        i don't usually accept discord friend requests, you can dm me though
      </p>
      <LinkButton
        logo="/icons/discord.svg"
        href="https://discord.gg/ZRA6XzTshx"
        text="JOIN MY DISCORD SERVER!!!!"
        long
      />
      <p>i'll update this website every time i think of something new</p>
    </div>
  );
}
