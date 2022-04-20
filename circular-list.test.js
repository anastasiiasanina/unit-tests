const { CircularList } = require('./circular-list.js');

describe('test for length method', () => {

  test('should return number of elements in the list', () => {
    const list = new CircularList();

    const elements = ['d', 'e', 'f', 'g'];
    elements.forEach(el => list.append(el));
    expect(list.returnLength()).toBe(elements.length);
  });
  
  test('should return 0 for empty list', () => {
    const list = new CircularList();

    expect(list.returnLength()).toBe(0);
  });

});

describe('test for append method', () => {

  it('should add new tail for the list', () => {
    const list = new CircularList();
    
    list.append('a');
    expect(list.tail.current).toBe('a');
  });

  it('should add +1 to list length', () => {
    const list = new CircularList();
    
    list.append('b');
    expect(list.returnLength()).toBe(1);
  });

  test('should fail operation with appending a number', () => {
    const list = new CircularList();

    expect(() => list.append(5)).toThrow(Error);
  });

  test('should throw exception with appending several characters', () => {
    const list = new CircularList();

    expect(() => list.append('hello'))
    .toThrow(Error);
  });

  test('should append a new character to the end', () => {
    const list = new CircularList();

    const elements = ['a', 'b', 'c'];
    elements.forEach(el => list.append(el));
    list.append('z');
    expect(list.get(list.length - 1)).toBe('z');
  });
});

describe('test for insert method', () => {

  it('should insert an element to the index', () => {
    const list = new CircularList();
    
    ['a', 'b', 'c'].forEach(el => list.append(el));
    list.insert('d', 1);
    expect(list.get(1)).toBe('d');
  });

  test('should add +1 to list length', () => {
    const list = new CircularList();

    ['a', 'b', 'c'].forEach(el => list.append(el));
    list.insert('d', 1);
    expect(list.length).toBe(4);
  });

  test('should throw exception with negative index', () => {
    const list = new CircularList();
    
    ['a', 'b', 'c'].forEach(el => list.append(el));
    expect(() => list.insert('d', -2)).toThrow(Error);
  });

  test('should throw exception with index more than length', () => {
    const list = new CircularList();
    
    ['a', 'b', 'c'].forEach(el => list.append(el));
    expect(() => list.insert('d', elements.length + 1))
    .toThrow(Error);
  });

  test('should throw exception with inserting a number', () => {
    const list = new CircularList();
    
    ['a', 'b', 'c'].forEach(el => list.append(el));
    expect(() => list.insert(5, 1)).toThrow(Error);
  });

  test('throw exception if inserting a string with several characters', () => {
    const list = new CircularList();
    
    ['a', 'b', 'c'].forEach(el => list.append(el));
    expect(() => list.insert('hello', 1))
    .toThrow(Error);
  });
});

describe('test for delete method', () => {

    it('should delete an element with mentioned index', () => {
      const list = new CircularList();
      
      ['a', 'b', 'c'].forEach(el => list.append(el));
      list.delete(1);
      expect(list.get(1)).toBe('c');
    });
  
    test('should identify new head', () => {
      const list = new CircularList();
      
      ['a', 'b', 'c'].forEach(el => list.append(el));
      list.delete(0);
      expect(list.head.current).toBe('b');
    });
  
    test('should identify new tail', () => {
      const list = new CircularList();
      
      ['a', 'b', 'c'].forEach(el => list.append(el));
      list.delete(list.length - 1);
      expect(list.tail.current).toBe('b');
    });
  
    test('should decrease list length', () => {
      const list = new CircularList();
      
      ['a', 'b', 'c'].forEach(el => list.append(el));
      const initLength = list.length;
      list.delete(1);
      expect(list.length).toBe(initLength - 1);
    });
  
    test('should throw exception with negative index', () => {
      const list = new CircularList();
      
      ['a', 'b', 'c'].forEach(el => list.append(el));
      expect(() => list.delete(-2)).toThrow(Error);
    });
  
    test('should throw exception with index more than length', () => {
      const list = new CircularList();
      
      ['a', 'b', 'c'].forEach(el => list.append(el));
      expect(() => list.delete(elements.length))
      .toThrow(Error);
    });
  });
  
describe('test for deleteAll method', () => {
  
    test('should delete all elements with mentioned value', () => {
      const list = new CircularList();
  
      ['a', 'b', 'c', 'c'].forEach(el => list.append(el));
      list.deleteAll('c');
      expect(list.tail.current).toBe('b');
    });
  
    test('should decrease list length', () => {
      const list = new CircularList();
  
      ['a', 'b', 'c', 'c'].forEach(el => list.append(el));
      const initLength = list.length;
      list.deleteAll('c');
      expect(list.length).toBe(initLength - 2);
    });
    
    test('should throw exception if number argument was used', () => {
      const list = new CircularList();
  
      ['a', 'b', 'c', 'c'].forEach(el => list.append(el));
      expect(() => list.deleteAll(4)).toThrow(Error);
    });
  
    test('should throw exception if argument with several characters', () => {
      const list = new CircularList();
  
      ['a', 'b', 'c', 'c'].forEach(el => list.append(el));
      expect(() => list.deleteAll('hello')).toThrow(Error);
    });
});

describe('test for get method', () => {

    it('should return an element from mentioned pos', () => {
      const list = new CircularList();
      
      ['a', 'b', 'c'].forEach(el => list.append(el));
      expect(list.get(1)).toBe('b');
    });
  
    test('should throw exception with index < 0', () => {
      const list = new CircularList();
      
      ['a', 'b', 'c'].forEach(el => list.append(el));
      expect(() => list.get(-2)).toThrow(Error);
    });
    
    test('should throw exception with index >= list length', () => {
      const list = new CircularList();
      
      ['a', 'b', 'c'].forEach(el => list.append(el));
      expect(() => list.get(list.length))
      .toThrow(Error);
    });
  
    test('should throw exception with string instead of index', () => {
      const list = new CircularList();
      
      ['a', 'b', 'c'].forEach(el => list.append(el));
      expect(() => list.get('a')).toThrow(Error);
    });
  });
  
describe('test for clone method', () => {
  
    test('should clone current list', () => {
      const list = new CircularList();
      
      ['d', 'e', 'f'].forEach(el => list.append(el));
      const clone = list.clone();
      expect(clone.head.current).toBe('d');
      expect(clone.get(1)).toBe('e');
      expect(clone.tail.current).toBe('f');
    });
});
  
describe('test for reverse method', () => {
    
    test('should reverse current list', () => {
      const list = new CircularList();
      
      ['d', 'e', 'f'].forEach(el => list.append(el));
      list.reverse();
      expect(list.head.current).toBe('f');
      expect(list.get(1)).toBe('e');
      expect(list.tail.current).toBe('d');
    });
});

describe('test for findFirst method', () => {

    test('should return index of first found element', () => {
      const list = new CircularList();
  
      ['d', 'f', 'e', 'f'].forEach(el => list.append(el));
      expect(list.findFirst('f')).toBe(1);
    });
    
    test('should return -1 if element wasnt found', () => {
      const list = new CircularList();
      
      ['d', 'f', 'e', 'f'].forEach(el => list.append(el));
      expect(list.findFirst('a')).toBe(-1);
    });
  
    test('should throw exception with number instead of string', () => {
      const list = new CircularList();
      
      ['d', 'f', 'e', 'f'].forEach(el => list.append(el));
      expect(() => list.findFirst(5)).toThrow(Error);
    });
  
    test('should throw exception with multiple characters', () => {
      const list = new CircularList();
      
      ['d', 'f', 'e', 'f'].forEach(el => list.append(el));
      expect(() => list.findFirst('hello')).toThrow(Error);
    });
});
  
describe('test for findLast method', () => {
  
    test('should return index of last found element', () => {
      const list = new CircularList();
  
      ['d', 'f', 'e', 'f'].forEach(el => list.append(el));
      expect(list.findLast('f')).toBe(3);
    });
    
    test('should return -1 if element wasnt found', () => {
      const list = new CircularList();
      
      ['d', 'f', 'e', 'f'].forEach(el => list.append(el));
      expect(list.findLast('a')).toBe(-1);
    });
  
    test('should throw exception with number instead of string', () => {
      const list = new CircularList();
      
      ['d', 'f', 'e', 'f'].forEach(el => list.append(el));
      expect(() => list.findLast(5)).toThrow(Error);
    });
  
    test('should throw exception with multiple characters', () => {
      const list = new CircularList();
      
      ['d', 'f', 'e', 'f'].forEach(el => list.append(el));
      expect(() => list.findLast('hello')).toThrow(Error);
    });
});

describe('test for clear method', () => {

    test('should delete all elements in the list', () => {
      const list = new CircularList();
      
      ['d', 'e', 'f'].forEach(el => list.append(el));
      list.clear();
      expect(list.length).toBe(0);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });
  });
  
describe('test for extend method', () => {
    test('should append items of another list', () => {
      const list = new CircularList();
      const list1 = new CircularList();
  
      ['a', 'b', 'c'].forEach(el => list.append(el));
      ['d', 'e', 'f'].forEach(el => list1.append(el));
      list.extend(list1);
      expect(list.tail.current).toBe('f');
      expect(list.length).toBe(6);
    });
  
    test('should leave second list unchangeable', () => {
      const list = new CircularList();
      const list1 = new CircularList();
  
      ['a', 'b', 'c'].forEach(el => list.append(el));
      ['d', 'e', 'f'].forEach(el => list1.append(el));
      list.extend(list1);
      list.append('g');
      expect(list1.tail.current).toBe('f');
      expect(list1.head.current).toBe('d');
      expect(list1.length).toBe(3);  
    });
});
  