// add.test.ts
import add from './add';

describe('add function', () => {
    it('should add two numbers correctly', () => {
        expect(add(1, 2)).toBe(3);
    });

    it('should handle negative numbers', () => {
        expect(add(-1, -2)).toBe(-3);
    });

    it('should handle zero', () => {
        expect(add(0, 0)).toBe(0);
    });
});