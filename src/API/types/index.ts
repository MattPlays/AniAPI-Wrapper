export * from './Anime';
export * from './Episode';
export * from './Song';
export * from './User';
import { User } from './User';
import { Song } from './Song';
import { Anime } from './Anime';
import { Episode } from './Episode';

export type APIResponseTypes =
    // Anime
    | Anime
    | Page<Anime>
    // Episode
    | Episode
    | Page<Episode>
    // Song
    | Song
    | Page<Song>
    // User
    | User
    | Page<User>;

export type Page<T> =
    | T[]
    | { last_page?: number; current_page: number; count: number; documents: T[] };

export interface APIResponse<T extends APIResponseTypes> {
    status_code: number;
    message: string;
    data: T;
    version: '1';
}
