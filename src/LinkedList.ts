import Node from "./Node"

export default class LinkedList
{
    public head: any;

    constructor()
    {
        this.head = null;
    }

    public add(n: Node)
    {
        if (this.head == null)
        {
            this.head = n;
        }
        else
        {
            var temp = this.head;

            while (temp.next != null)
            {
                temp = temp.next;
            }

            temp.next = n;
        }
    }

    public count()
    {
        var num = 0;

        var temp = this.head;

        while (temp != null)
        {
            num++;
            temp = temp.next;
        }
        
        return num;
    }
}