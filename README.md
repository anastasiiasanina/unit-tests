# Lab2
# Unit-tests
Class for making circular list with basic methods and tests for them.

## Variant of work
Number of book: 422
```bash
422 % 2 = 0 - circular single linked list
```

## Description
Circular single linked list made with the class with 12 basic methods for modifying the list.
They are:

- **returnLength()** - returns length of the list
- **append(el)** - appends an element to the end of the list
- **get(index)** - gets element by index
- **insert(el, index)** - inserts element to certain position
- **delete(index)** - deletes one certain element
- **deleteAll(element)** - deletes all elements with certain value
- **clone()** - clones current list
- **reverse()** - reverses current list
- **findFirst(el)** - finds first element in the list with certain value
- **findLast(el)** - finds last element in the list with certain value
- **clear()** - clears current list
- **extend(elements)** - extends current list with another one
- **showList()** - shows all elements of the list

## Setup

#### 1. Have Node JS installed.

#### 2. Clone the repository with command:
```bash
git clone https://github.com/anastasiiasanina/unit-tests.git
```
#### 3. Run main file:
```bash
node circular-list.js
```
#### 4. Run tests:
```bash
npm test
```
## Commit with failed tests
[Failed tests](https://github.com/anastasiiasanina/unit-tests/commit/5a3503d5b0a7cbf99ac074408cc9cb66a108abb6)