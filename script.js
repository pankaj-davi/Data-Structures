// Pice of data - val
// refterance to next node  - next
// initialized next  null

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Adding a new node to the end of the Linked List!
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //  Remove a node from the end of the Linked List
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return current; 
    }
    shift(){
        // removeing a node from the begginning of the link list
        if(!this.head) return undefined;
        let remove = this.head;
        this.head = remove.next;
        remove.next = null;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        this.length--;

        return remove;
    }
    
    unshift(value){
        // Adding a new node of the begginning of the link list
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this;
    }

    get(index){
        // Retrieving a node by it's position in the linked list
        if(index < 0 || index >= this.length) return undefined;
        if(this.length === 0) return undefined;

        let counter = 0;
        let current = this.head;
        while(index !== counter){
            counter++;
            current = current.next;
        }
        return current;
    }

    set( index , value){
        // Changing the value of a node based on it's position in the linked list
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.val  = value;
            return true;
        }
        return false;
    }
    
    insert(index , value){
        // adding a node to the linked list at a specific position
        if(index < 0 || index > this.length) return undefined; 
        if(index === this.length) return !!this.push(value)
        if(index === 0 ) return !! this.unshift(value);

        let newNode = new Node(value);
        let preValue = this.get(index - 1);
        let nextValue = preValue.next;

        preValue.next = newNode;
        newNode.next = nextValue;
        this.length++;

        return true;
    }

    remove(index){
        // Removing a node from the Linked List at a specific position
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        let preNode = this.get(index - 1);
        let remove = preNode.next;
        preNode.next = remove.next
        remove.next = null; 
        this.length--;
        
        return remove;
    }

    reverse(){
        let current = this.head;
        let next;
        let prev = null;
        
        for(let i = 0 ; i < this.length;i++){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }


}

let test = new SinglyLinkedList();
test.push(1111);
test.push(2222);
test.push(3333);
test.push(4444);
test.push(5555);
test.push(6666);