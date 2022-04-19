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
}