import { expect } from "chai";
import { BinaryNode } from "../src/bst";

describe('bst', () => {
    it('should insert and retrieve values', () => {
        const bst = new BinaryNode(5);
        bst.insert(3);
        bst.insert(7);
        bst.insert(1);
        bst.insert(4);
        bst.insert(6);
        bst.insert(8);
        expect(bst.contains(1)).to.eq(true);
        expect(bst.contains(2)).to.eq(false);
        expect(bst.contains(3)).to.eq(true);
        expect(bst.contains(4)).to.eq(true);
        expect(bst.contains(5)).to.eq(true);
        expect(bst.contains(6)).to.eq(true);
        expect(bst.contains(7)).to.eq(true);
        expect(bst.contains(8)).to.eq(true);
        expect(bst.contains(9)).to.eq(false);
    })

    it('should remove values', () => {
        const bst = new BinaryNode(5);
        bst.insert(3);
        bst.insert(7);
        bst.insert(1);
        bst.insert(4);
        bst.insert(6);
        bst.insert(8);
        bst.remove(1);
        expect(bst.contains(1)).to.eq(false);
        bst.remove(3);
        expect(bst.contains(3)).to.eq(false);
        bst.remove(4);
        expect(bst.contains(4)).to.eq(false);
        // TODO: fix
        // bst.remove(5);
        // expect(bst.contains(5)).to.eq(false);
        bst.remove(6);
        expect(bst.contains(6)).to.eq(false);
        bst.remove(7);
        expect(bst.contains(7)).to.eq(false);
        bst.remove(8);
        expect(bst.contains(8)).to.eq(false);
    });
})