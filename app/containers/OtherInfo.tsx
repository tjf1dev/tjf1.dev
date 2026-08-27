import ContainerGlare from "../components/ContainerGlare";
import LinkButton from "../components/LinkButton";
import { space_grotesk } from "../fonts";

export default function OtherInfo({ isWeb }: { isWeb: boolean }) {
  return (
    <div className="flex w-full gap-1">
      <div className="backdrop-blur-sm rounded-xl p-2 border border-white/20 relative overflow-hidden md:overflow-auto w-full">
        {/* <NoiseBackground /> */}
        <ContainerGlare topLeft />
        <h2 className={`font-medium ${space_grotesk.className}`}>
          nerdy stuff
        </h2>
        <p>
          i code in a lot of languages, but these are the ones i use the most
        </p>
        <p>
          • <strong>Python</strong> - not my favorite but almost everything i do
          is in python
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
      <div className="backdrop-blur-sm rounded-xl p-2 border border-white/20 relative overflow-hidden md:overflow-auto w-full">
        {/* <NoiseBackground /> */}
        <ContainerGlare topLeft />
        <h2 className={`font-medium ${space_grotesk.className}`}>
          other things i do
        </h2>
        <p>
          i also occasionally play geometry dash, deltarune and speedrun
          minecraft
        </p>
        <p>
          im pretty bad at speedrunning minecraft tho :P (my goal is to get a
          sub 10 ranked speedrun)
        </p>
        <div className="w-full h-fit">
          <LinkButton
            href="https://mcsrranked.com/stats/tjf1"
            text={"MCSR Ranked profile"}
            logo="/icons/ranked.png"
            long={true}
          />
        </div>{" "}
        <p className="m-0">
          i&apos;ll update this website every time i think of something new
        </p>
      </div>
    </div>
  );
}
