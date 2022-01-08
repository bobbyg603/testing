import { RequestInfo, RequestInit, Response } from "node-fetch";

export class DogService {

    constructor(private _fetch: Fetch) { }

    async getDogImageUrl(breed: string): Promise<string> {
        if (!breed) {
            throw new Error('Most specify a valid doggo!');
        }
    
        const response = await this._fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const json = await response.json() as DogResponse;  
        return json.message;
    }
}

export type Fetch = (url: RequestInfo, init?: RequestInit) => Promise<Response>;

export interface DogResponse {
    status: 'success' | unknown;
    message: string;
}