import fetch from 'node-fetch';
import { DogService } from "./src/dog.service";

const dogService = new DogService(fetch);
dogService.getDogImageUrl('pug').then(console.log);