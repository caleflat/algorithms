export const heapsort = (arr: number[]): number[] => {
    const heap = new Heap();
    arr.forEach((item) => heap.insert(item));
    const sorted = [];
    while (heap.size() > 0) {
        sorted.push(heap.remove());
    }
    return sorted;
}

class Heap {
    private heap: number[] = [];

    public insert(item: number): void {
        this.heap.push(item);
        this.bubbleUp();
    }

    public remove(): number {
        const item = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0 && end) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return item;
    }

    public size(): number {
        return this.heap.length;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        const item = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index + 1) / 2) - 1;
            const parent = this.heap[parentIndex];
            if (item > parent) {
                this.heap[parentIndex] = item;
                this.heap[index] = parent;
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;
        const item = this.heap[index];
        while (true) {
            const leftChildIndex = (index + 1) * 2 - 1;
            const rightChildIndex = (index + 1) * 2;
            let swap = null;
            if (leftChildIndex < length) {
                const leftChild = this.heap[leftChildIndex];
                if (leftChild > item) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                const rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild > item) || (swap !== null && rightChild > this.heap[swap])) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) {
                break;
            }
            this.heap[index] = this.heap[swap];
            this.heap[swap] = item;
            index = swap;
        }
    }
}