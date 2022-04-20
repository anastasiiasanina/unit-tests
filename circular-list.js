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
        if (typeof el !== 'string' || el.length > 1) {
            throw new Error('Wrong format of data');
        }

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
        if(index < 0  || index >= this.length || typeof index !== 'number') {
        throw new Error('Index for element is not suitable');
        }
    
        let currEl = this.head;
        
        for(let i = 0; i !== index; i++) {
            currEl = currEl.next;
        }
        return currEl.current;
    }

    insert(el, index) {
        if (typeof el !== 'string' || el.length > 1) {
            throw new Error('Wrong format of data');
        }

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
        if (typeof el !== 'string' || el.length > 1) {
            throw new Error('Wrong format of data');
        }

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

    clone() {
        let clonedList = new CircularList();
        let currElement = this.head;
    
        for(let i = 0; i < this.length; i++) {
          clonedList.append(currElement.current);
          currElement = currElement.next;
        }
    
        return clonedList;
    }
    
    reverse() {
        let currEl = this.head;
        let prevEl = this.tail;
        let nextEl = null;
    
        for(let i = 0; i < this.length; i++) {
          nextEl = currEl.next;
          currEl.next = prevEl;
          prevEl = currEl;
          currEl = nextEl;
        }
    
        this.head = prevEl;
        this.tail = currEl;
    }
    
    findFirst(el) {
        if (typeof el !== 'string' || el.length > 1) {
            throw new Error('Wrong format of data');
        }

        let index = -1;
        let currEl = this.head;
    
        for( let i = 0; i < this.length; i++) {
          if(currEl.current == el) {
            index = i;
            return index;
          }
          currEl = currEl.next;
        }
        return index;
    }
    
    findLast(el) {
        /*if (typeof el !== 'string' || el.length > 1) {
            throw new Error('Wrong format of data');
        }*/

        let index = -1;
        let currEl = this.head;
    
        for(let i = 0; i < this.length; i++){
            if(currEl.current === el) index = i;
    
            currEl = currEl.next;
        }
        return index;
    }

    clear() {
        this.length = 0;
        this.head = null;
        this.tail = null;
      }
    
    extend(elements) {
        if (typeof elements !== "object") {
            throw new Error('Wrong format of data');
        }
        
        let currEl = elements.head;
    
        for(let i = 0; i < elements.length; i++) {
          this.append(currEl.current);
          currEl = currEl.next;
        }
    }
    
    //additional method for showing final list
    showList() {
        let current = this.head;
        for(let i = 0; i < this.length; i++) {
          console.log(current.current);
          current = current.next;
        }
    }
}

//checking some methods
const newList = new CircularList();
const newList2 = new CircularList();

newList.append('a');
newList.append('b');
newList.append('c');
newList.append('d');

newList2.append('e');
newList2.append('f');
newList2.append('g');

const clonedList = newList.clone();
clonedList.showList();

newList.extend(newList2);
newList.showList();
console.log(newList.delete(3));
console.log(newList.findFirst('b'));
console.log(newList.findLast('f'));
console.log(newList.returnLength());

newList.deleteAll('e');
newList.insert('j', 2);
newList.showList();
console.log(newList.get(2));

newList.reverse();
newList.clear();

module.exports = {CircularList};