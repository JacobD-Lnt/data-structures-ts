import { textChangeRangeIsUnchanged } from "../node_modules/typescript/lib/typescript";
import Node from "./Node"

export default class Queue
{
    private data: Node[] = [];

    constructor()
    {

    }
    
    public isEmpty()
    {
        return (this.data.length == 0);
    }

    public enqueue(n: Node)
    {
        this.data.push(n);
    }
    
    public length()
    {
        return (this.data.length);
    }

    public dequeue()
    {
        return this.data.shift();
    }

    public front()
    {
        return this.data[0];
    }

    public rear()
    {
        return this.data[this.data.length - 1];
    }
}