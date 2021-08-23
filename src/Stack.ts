import { isEmptyBindingElement, isThisTypeNode } from "../node_modules/typescript/lib/typescript"

import Node from "./Node"

export default class Stack
{
    private data: Node[] = [];

    constructor()
    {

    }
    
    public isEmpty()
    {
        return (this.data.length == 0);
    }

    public push(n: Node)
    {
        this.data.push(n);
    }
    
    public count()
    {
        return (this.data.length);
    }

    public pop()
    {
        return (this.data.pop());
    }

    public peek()
    {
        return (this.data[this.data.length - 1]);
    }
}