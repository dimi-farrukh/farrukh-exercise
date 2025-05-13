import { sayHello } from '../src/hello';

describe('sayHello', () => {
test('should return default greeting when no name is provided', () => {
expect(sayHello()).toBe('Hello, World!');
});

test('should return greeting with provided name', () => {
expect(sayHello('Alice')).toBe('Hello, Alice!');
});

test('should handle empty string as name', () => {
expect(sayHello('')).toBe('Hello, !');
});
})