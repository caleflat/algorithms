import { expect } from "chai";
import { heapsort } from "../src/heapsort";

describe('heapsort', () => {
    it('should sort an array', () => {
        const arr = [5, 3, 7, 1, 4, 6, 8];
        const sorted = heapsort(arr);
        expect(sorted).to.deep.eq([1, 3, 4, 5, 6, 7, 8].reverse());
    });

    it('should sort an array with duplicates', () => {
        const arr = [5, 3, 7, 1, 4, 6, 8, 3, 5, 7, 1, 4, 6, 8];
        const sorted = heapsort(arr);
        expect(sorted).to.deep.eq([1, 1, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8].reverse());
    });

    it('should sort an array with negative numbers', () => {
        const arr = [5, 3, 7, 1, 4, 6, 8, 3, 5, 7, 1, 4, 6, 8, -1, -3, -7, -1, -4, -6, -8, -3, -5, -7, -1, -4, -6, -8];
        const sorted = heapsort(arr);
        expect(sorted).to.deep.eq([-8, -8, -7, -7, -6, -6, -5, -4, -4, -3, -3, -1, -1, -1, 1, 1, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8].reverse());
    });
})