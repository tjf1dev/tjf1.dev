import Image from "next/image";
import { Activity as ActivityModel } from "../models";
import { extractUrl } from "../tools";
import { space_grotesk } from "../fonts";
import NoiseBackground from "./NoiseBackground";

export default function Activity({ activity }: { activity: ActivityModel }) {
  if (activity.id == "custom") return;
  if (activity.id == "spotify:1") return;
  const activityTypeMap = {
    0: "playing",
    1: "streaming",
    2: "listening",
    3: "watching",
    4: "custom",
    5: "competing",
  };
  return (
    <div className="backdrop-blur-3xl rounded-xl p-2 border border-white/20">
      {/* <p className={`${space_grotesk.className} text-sm`}>
        {activityTypeMap[activity.type]}
      </p> */}
      {/* <NoiseBackground /> */}

      <div className="flex flex-row items-center gap-2">
        {activity.assets.large_image && (
          <Image
            src={extractUrl(activity.assets.large_image)}
            width={64}
            height={64}
            alt=""
            className="w-20 h-20 rounded-md aspect-square"
          />
        )}
        <div>
          <h2 className={`${space_grotesk.className}`}>{activity.name}</h2>

          <p className={`${space_grotesk.className}`}>{activity.details}</p>
          <p className={`${space_grotesk.className}`}>{activity.state}</p>
        </div>
      </div>
    </div>
  );
}
