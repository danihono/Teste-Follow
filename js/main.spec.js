const { greet } = require('./main');

describe('Greet Function', () => {
    it('should return "Hello, World!"', () => {
        expect(greet()).toBe('Hello, World!');
    });
});