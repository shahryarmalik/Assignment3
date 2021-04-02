import swapiGetter from "./swapiGetter";
//import mockAxios from 'axios';
//const mockAxios = require('axios');
//const swapiGetter = require('./swapiGetter');

 describe('swapiGetter integration, no mocking',() => {
    test('should return the first name from the api', async () => {
        const result = await swapiGetter(1);
        console.log(result); // for debugging
        expect(result).toBe('delectus aut autem');
    });
});


/* jest.mock('axios');
mockAxios.get.mockResolvedValue({ data: { name: 'Tess Jedi'}});

describe('swapiGetter unit test, swapi mocked', () =>{
    afterEach(jest.clearAllMocks);

    test('return the first entry from the API', async () => {
        const result = await swapiGetter(1);
        expect(result).toBe('Tess Jedi');
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
}); */


// example from https://blog.jimmydc.com/mock-asynchronous-functions-with-jest/
