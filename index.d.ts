enum AnimeFormat {
    "TV" = 0,
    "TV_SHORT" = 1,
    "MOVIE" = 2,
    "SPECIAL" = 3,
    "OVA" = 4,
    "ONA" = 5,
    "MUSIC" = 6,
}
enum AnimeStatus {
    "FINISHED" = 0,
    "RELEASING" = 1,
    "NOT_YET_RELEASED" = 2,
    "CANCELLED" = 3,
}
enum AnimeSeasonPeriod {
    "WINTER" = 0,
    "SPRING" = 1,
    "SUMMER" = 2,
    "FALL" = 3,
    "UNKNOWN" = 4, 
}
enum AnimeSongType {
    "OPENING" = 0,
    "ENDING" = 1,
    "NONE" = 2,
}
enum AnimeResourceType {
    "GENRES" = 0,
    "LOCALIZATIONS" = 1,
}
enum AnimeUserRole {
    "BASIC" = 0,
    "MODERATOR" = 1,
    "ADMINISTRATOR" = 2,
}
enum AnimeUserGender {
    "UNKNOWN" = 0,
    "MALE" = 1,
    "FEMALE" = 2,
}
enum AnimeUserStoryStatus {
    "CURRENT" = 0,
    "PLANNING" = 1,
    "COMPLETED" = 2,
    "DROPPED" = 3,
    "PAUSED" = 4,
    "REPEATING" = 5,
}
interface Anime {
    id: number, 
    anilist_id: number, 
    mal_id: number | null, 
    format: AnimeFormat, 
    status: AnimeStatus, 
    titles: Map<string>, 
    descriptions: Map<string>, 
    start_date: Date | null, 
    end_date: Date | null, 
    season_period: AnimeSeasonPeriod, 
    season_year: number | null, 
    episodes_count: number, 
    episode_duration: number | null, 
    trailer_url: string | null, 
    cover_image: string, 
    cover_color: string, 
    banner_image: string, 
    genres: string[], 
    sequel: number | null, 
    prequel: number | null, 
    score: number
}
interface Episode {
    id: number,
    anime_id: number,
    number: number,
    title: string,
    video: string,
    source: string,
    locale: string,
}
interface Song {
    id: number,
    anime_id: number,
    title: string,
    artist: string,
    album: string,
    year: number,
    season: AnimeSeasonPeriod,
    duration: number,
    preview_url: string,
    open_spotify_url: string,
    local_spotify_url: string,
    type: AnimeSongType
}
interface User {
    id: number,
    username: string,
    email: string | null,
    email_verified: boolean | null,
    role: AnimeUserRole,
    avatar: string,
    gender: AnimeUserGender,
    localization: string | null,
    has_anilist: boolean | null,
    has_mal: boolean | null,
}
interface UserStory {
    id: number,
    user_id: number,
    anime_id: number,
    status: AnimeUserStoryStatus,
    current_episode: number,
    current_episode_ticks: number,
}
type Resource = string[] | {
    "i18n": string,
    "label": string
}
interface AnimeResponse {
    status_code: number,
    message: string,
    data: string | (Anime | Anime[]),
    version: string 
}
interface AnimeFilters {
    title: string,
    anilist_id: number,
    mal_id: number,
    formats: AnimeFormat,
    status: AnimeStatus,
    year: number,
    season: number,
    genres: string[]
}
interface EpisodeFilters {
    anime_id: number,
    number: number,
    source: string,
    locale: string,
}
interface EpisodeResponse {
    status_code: number,
    message: string,
    data: string | (Episode | Episode[]),
    version: string,
}
export class API {
    constructor() {};
    GetAnimeByID(id: string): Promise<AnimeResponse>;
    GetAnime(filters: AnimeFilters, page: number, per_page: number): Promise<AnimeResponse>;
    GetEpisodeByID(id: string): Promise<EpisodeResponse>;
    GetEpisodes(filters: EpisodeFilters, page: number, per_page: number): Promise<EpisodeResponse>
    DownloadAllEpisodes(anime_id: number): Promise<any>; 
}