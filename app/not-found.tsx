import NoiseBackground from "./components/NoiseBackground";
import { space_grotesk } from "./fonts";

export default function NotFound() {
  return (
    <main className="bg-neutral-900 min-h-screen">
      <div
        className={`backdrop-blur-3xl rounded-xl absolute top-1/2 left-1/2 -translate-1/2 h-fit w-fit p-2 border border-white/20 overflow-hidden ${space_grotesk.className}`}
      >
        <NoiseBackground />
        <h1 className="font-bold">Not Found</h1>
        <p>
          this page sure does look empty.{" "}
          <a className="underline font-medium" href="/">
            go back?
          </a>
        </p>
      </div>
    </main>
  );
}
