import Activity from "../components/Activity";
import SpotifyStatusComp from "../components/SpotifyStatus";
import { space_grotesk } from "../fonts";
import { UserResponseData } from "../models";

export default function Activities({ user }: { user: UserResponseData }) {
  const statusColorStyleMap = {
    online: "oklch(87.1% 0.15 154.449)", // tw green 300
    idle: "oklch(92.4% 0.12 95.746)", // tw amber 200
    dnd: "oklch(70.4% 0.191 22.216)", // tw red 400
    offline: "oklch(55.6% 0 0)", // tw neutral 500
  };
  const status = user?.activities.find((n) => n.id == "custom");

  return (
    <div className="backdrop-blur-sm rounded-xl h-fit p-2 border border-white/20 relative">
      {/* <ContainerGlare topRight /> */}
      {/* <NoiseBackground /> */}
      <p
        className={`${space_grotesk.className} text-sm flex flex-row items-center gap-1`}
        style={{
          color: statusColorStyleMap[user.discord_status],
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
      {user?.spotify && <SpotifyStatusComp spotify={user.spotify} />}
      {user?.activities.map((a, _) => (
        <Activity key={_} activity={a} />
      ))}
    </div>
  );
}
