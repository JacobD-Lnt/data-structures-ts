export default class Node {
    private _value: any;
    public next: any;

    constructor(value: any = null) {
        this._value = value;
        this.next = null;
    }

    public get value() {
        return this._value;
    }

    public set value(val) {
        this._value = val;
    }

    public set setNext(n: Node)
    {
        this.next = n;
    }
}
