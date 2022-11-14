export class BinaryNode<T> {
    private value: T;
    private left: BinaryNode<T> | null;
    private right: BinaryNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    public getValue(): T {
        return this.value;
    }

    public insert(value: T): void {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BinaryNode(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BinaryNode(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    public contains(value: T): boolean {
        if (value === this.value) {
            return true;
        } else if (value < this.value) {
            if (this.left === null) {
                return false;
            } else {
                return this.left.contains(value);
            }
        } else {
            if (this.right === null) {
                return false;
            } else {
                return this.right.contains(value);
            }
        }
    }

    public remove(value: T): BinaryNode<T> | null {
        if (value < this.value) {
            if (this.left !== null) {
                this.left = this.left.remove(value);
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right = this.right.remove(value);
            }
        } else {
            if (this.left !== null && this.right !== null) {
                this.value = this.right.getMinValue();
                this.right = this.right.remove(this.value);
            } else if (this.left !== null) {
                return this.left;
            } else if (this.right !== null) {
                return this.right;
            } else {
                return null;
            }
        }
        return this;
    }

    private getMinValue(): T {
        if (this.left === null) {
            return this.value;
        } else {
            return this.left.getMinValue();
        }
    }
}