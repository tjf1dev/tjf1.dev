import ContainerGlare from "../components/ContainerGlare";
import LinkButton from "../components/LinkButton";

export default function Links({ isWeb }: { isWeb: boolean }) {
  return (
    <div className="backdrop-blur-sm rounded-xl p-2 border border-white/20 relative overflow-hidden md:overflow-auto flex flex-col xl:flex-row gap-1">
      <ContainerGlare topLeft />
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
  );
}
