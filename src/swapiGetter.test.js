import swapiGetter from "./swapiGetter";

test('should return the first name from the api', async () => {
    const result = await swapiGetter(1);
    expect(result.title).toBe('delectus aut autem');
});

