const { CircularList } = require('./list.js');

describe('test for length method', () => {

  test('should return number of elements in the list', () => {
    const list = new CircularList();

    const elements = ['d', 'e', 'f', 'g'];
    elements.forEach(el => list.append(el));
    expect(list.getLength()).toBe(elements.getLength);
  });
  
  test('should return 0 for empty list', () => {
    const list = new CircularList();

    expect(list.getLength()).toBe(0);
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
    expect(list.getLength()).toBe(1);
  });

  test('should fail operation with appending a number', () => {
    const list = new CircularList();

    expect(() => list.append(5)).toThrow('Append only one-character string');
  });

  test('should throw exception with appending several characters', () => {
    const list = new CircularList();

    expect(() => list.append('hello'))
    .toThrow('Append only one-character string');
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
    
    const elements = ['a', 'b', 'c'];
    elements.forEach(el => list.append(el));
    list.insert('d', 1);
    expect(list.get(1)).toBe('d');
  });

  test('should add +1 to list length', () => {
    const list = new CircularList();

    const elements = ['a', 'b', 'c'];
    elements.forEach(el => list.append(el));
    list.insert('d', 1);
    expect(list.length).toBe(4);
  });

  test('should throw exception with negative index', () => {
    const list = new CircularList();
    
    const elements = ['a', 'b', 'c'];
    elements.forEach(el => list.append(el));
    expect(() => list.insert('d', -2)).toThrow('Use only positive index');
  });

  test('should throw exception with index more than length', () => {
    const list = new CircularList();
    
    const elements = ['a', 'b', 'c'];
    elements.forEach(el => list.append(el));
    expect(() => list.insert('d', elements.length + 1))
    .toThrow('Dont use index more than list length');
  });

  test('should throw exception with inserting a number', () => {
    const list = new CircularList();
    
    const elements = ['a', 'b', 'c'];
    elements.forEach(el => list.append(el));
    expect(() => list.insert(5, 1)).toThrow('Insert only one-character string');
  });

  test('throw exception if inserting a string with several characters', () => {
    const list = new CircularList();
    
    const elements = ['a', 'b', 'c'];
    elements.forEach(el => list.append(el));
    expect(() => list.insert('hello', 1))
    .toThrow('Insert only one-character string');
  });
});

describe('test for delete method', () => {

    it('should delete an element with mentioned index', () => {
      const list = new CircularList();
      
      const elements = ['a', 'b', 'c'];
      elements.forEach(el => list.append(el));
      list.delete(1);
      expect(list.get(1)).toBe('c');
    });
  
    test('should identify new head', () => {
      const list = new CircularList();
      
      const elements = ['a', 'b', 'c'];
      elements.forEach(el => list.append(el));
      list.delete(0);
      expect(list.head.current).toBe('b');
    });
  
    test('should identify new tail', () => {
      const list = new CircularList();
      
      const elements = ['a', 'b', 'c'];
      elements.forEach(el => list.append(el));
      list.delete(list.length - 1);
      expect(list.tail.current).toBe('b');
    });
  
    test('should decrease list length', () => {
      const list = new CircularList();
      
      const elements = ['a', 'b', 'c'];
      elements.forEach(el => list.append(el));
      const initLength = list.length;
      list.delete(1);
      expect(list.length).toBe(initLength - 1);
    });
  
    test('should throw exception with negative index', () => {
      const list = new CircularList();
      
      const elements = ['a', 'b', 'c'];
      elements.forEach(el => list.append(el));
      expect(() => list.delete(-2)).toThrow('Use only positive index');
    });
  
    test('should throw exception with index more than length', () => {
      const list = new CircularList();
      
      const elements = ['a', 'b', 'c'];
      elements.forEach(el => list.append(el));
      expect(() => list.delete(elements.length))
      .toThrow('Dont use index equal to or more than list length');
    });
  });
  
describe('test for deleteAll method', () => {
  
    test('should delete all elements with mentioned value', () => {
      const list = new CircularList();
  
      const elements = ['a', 'b', 'c', 'c'];
      elements.forEach(el => list.append(el));
      list.deleteAll('c');
      expect(list.tail.current).toBe('b');
    });
  
    test('should decrease list length', () => {
      const list = new CircularList();
  
      const elements = ['a', 'b', 'c', 'c'];
      elements.forEach(el => list.append(el));
      const initLength = list.length;
      list.deleteAll('c');
      expect(list.length).toBe(initLength - 2);
    });
    
    test('should throw exception if number argument was used', () => {
      const list = new CircularList();
  
      const elements = ['a', 'b', 'c', 'c'];
      elements.forEach(el => list.append(el));
      expect(() => list.deleteAll(4)).toThrow('Use element string value');
    });
  
    test('should throw exception if argument with several characters', () => {
      const list = new CircularList();
  
      const elements = ['a', 'b', 'c', 'c'];
      elements.forEach(el => list.append(el));
      expect(() => list.deleteAll('hello')).toThrow('Use element single value');
    });
});