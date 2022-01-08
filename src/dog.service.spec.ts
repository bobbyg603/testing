import { DogService } from './dog.service';

describe('DogService', () => {
    describe('getDogImageUrl', () => {
        let service: DogService;
        let fetch: jasmine.Spy;
        let message: string;

        beforeEach(() => {
            const status = 'success';
            message = 'https://images.dog.ceo/breeds/pug/n02110958_12589.jpg';
            fetch = jasmine.createSpy();
            fetch.and.resolveTo({
                json: async() => ({
                    status,
                    message
                })
            });
            service = new DogService(fetch);
        })

        it('should throw if breed is empty', async () => {
            return expectAsync(service.getDogImageUrl('')).toBeRejected();
        });

        it('should call fetch with url containing breed', async () => {
            const breed = 'pug';

            await service.getDogImageUrl(breed);

            expect(fetch).toHaveBeenCalledWith(jasmine.stringMatching(/pug/));
        });

        it('should return url to a picture of a dog', async () => {
            const breed = 'pug';

            const result = await service.getDogImageUrl(breed);

            expect(result).toEqual(message);
        });
    });
})