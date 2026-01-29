import { Space_Grotesk } from "next/font/google";
import ContainerGlare from "../components/ContainerGlare";
import { space_grotesk } from "../fonts";

export default function OtherInfo() {
  return (
    <div className="backdrop-blur-sm rounded-xl p-2 border border-white/20 relative overflow-hidden md:overflow-auto">
      {/* <NoiseBackground /> */}
      <ContainerGlare topLeft />
      <h2 className={`font-medium ${space_grotesk.className}`}>nerdy stuff</h2>
      <p>i code in a lot of languages, but these are the ones i use the most</p>
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
        ◦ i primarily use <a href="https://nextjs.org">Next.js</a> for frontend
      </p>
      <p>
        • <strong>C#</strong> - some networking stuff and unity ig
      </p>
      <p>
        • <strong>C++</strong> - mostly geometry dash mods
      </p>
    </div>
  );
}
