import Image from "next/image";
import { space_grotesk } from "../fonts";
import ContainerGlare from "../components/ContainerGlare";

export default function Projects() {
  return (
    <div className="backdrop-blur-sm rounded-xl p-2 border border-white/20 relative overflow-hidden md:overflow-auto">
      <ContainerGlare topLeft />
      <h2 className={`font-medium ${space_grotesk.className}`}>my projects</h2>
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
              alpha, active development. | not available yet, closed source (for
              now)
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
              <a href="https://github.com/tjf1dev/codygen">open source.</a>
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
  );
}
