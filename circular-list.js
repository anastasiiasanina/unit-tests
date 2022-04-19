class CircularList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
  
    returnLength() {
        return this.length;
    }
  
    append(el) {
        const prev = this.tail;
        const element = {current: el, next: this.head};
  
        if(this.tail) {
            prev.next = element;
        }
  
        if(!this.head) {
            this.head = element;
        }
  
        this.tail = element; 
        this.length++;
        return element;
    }

    get(index) {
        if(index < 0  || index >= this.length) {
        throw new Error('Index for element is not suitable');
        }
    
        let currEl = this.head;
        
        for(let i = 0; i !== index; i++) {
            currEl = currEl.next;
        }
        return currEl.current;
    }

    insert(el, index) {
        if(index < 0 || index > this.length) {
            throw new Error('Index for inserted element is not suitable');
        }
    
        const element = {current: el, next: this.head};
    
        if(index == 0) {
            this.head = element;
            this.tail.next = this.head;
            return element;
        } else if(index == this.length) {
            this.tail.next = element;
            this.tail = element;
            return element;
        }
    
        let prevEl = this.head; //starts with the head
        
        for (let i = 0; i !== index-1; i++) {
            prevEl = prevEl.next;
        }
    
        element.next = prevEl.next;
        prevEl.next = element;
        this.length++;
    }
    
    delete(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index for element is not suitable');
        }
    
        let currEl = this.head;
        let deleted;
        
        //identify new list head
        if(index == 0) {
            deleted = this.head.current;
            this.tail.next = this.head.next
            this.head = this.head.next;
            this.length--;
            return deleted;
        }
    
        for(let i = 0; i < index - 1; i++) {
            currEl = currEl.next;
        }
    
        deleted = currEl.next;
        currEl.next = currEl.next.next;
        if(deleted == this.tail) this.tail = currEl;
        this.length--;
        return deleted.current;
    }
    
    deleteAll(el) {
        let currEl = this.head;
        let initLength = this.length;
        let diff;
    
        for(let i = 0; i < initLength; i++) {
            if(currEl.current == el) {
                diff = initLength - this.length;
                this.delete(i - diff);
            }
            currEl = currEl.next;
        }
    }
}