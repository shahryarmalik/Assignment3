import axios from 'axios';
import swapiGetter from "./swapiGetter";

jest.mock('axios');
test('return the first entry from the API', async () => {
    axios.get.mockResolvedValue({ data: { title: 'Tess Jedi' } });
    const result = await swapiGetter(1);
    expect(result.title).toBe('Tess Jedi');
});

// example from https://blog.jimmydc.com/mock-asynchronous-functions-with-jest/
