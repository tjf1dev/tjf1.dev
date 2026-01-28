export interface AvatarDecorationData {
  asset: string;
  expires_at?: any; // i have no idea
  sku_id: string;
}
export interface PrimaryGuild {
  badge: string;
  identity_enabled: boolean;
  identity_guild_id: number;
  tag: string;
}
export interface User {
  avatar?: string;
  avatar_decoration_data?: AvatarDecorationData;
  bot: boolean;
  //   collectibles,
  discriminator: number;
  display_name: string;
  display_name_styles?: any;
  global_name: string;
  id: string;
  primary_guild?: PrimaryGuild;
  public_flags: number;
  username: string;

}
export interface ActivityAssets {
  large_image: string;
  large_text: string;
  small_image: string;
  small_text: string;
}
export interface Activity {
  application_id: number;
  created_at: number;
  details?: string;
  flags: number;
  id: string;
  assets: ActivityAssets;
  state?: string;
  emoji?: any;
  type: 0 | 1 | 2 | 3 | 4 | 5;
  name: string;
  platform: string;
}
export interface SpotifyStatus {
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
  timestamps: StartEndTimestamps;
  track_id: string;
}
export interface StartEndTimestamps {
  end: number;
  start: number;
}
export interface UserResponseData {
  discord_user: User;
  spotify?: SpotifyStatus;
  activities: Activity[];
  discord_status: "online" | "idle" | "dnd" | "offline";
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_embedded: boolean;
  listening_to_spotify: boolean;
}
export interface UserResponse {
  data: UserResponseData;
}
