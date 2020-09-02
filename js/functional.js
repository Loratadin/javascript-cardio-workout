const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599))
  console.table(fifteen);

  // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.table(fullNames);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const ordered = inventors.sort(function(a, b) {
        if (a.year > b.year) {
            return 1;
        } else {
            return -1;
        }
    });
    console.table(ordered);

    const ordered2 = inventors.sort((a, b) => a.year < b.year ? 1 : -1);
    console.table(ordered2);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0); // asign initial total to 0
    console.log(totalYears);
    // 5. Sort the inventors by years lived
const yearsLived = inventors.sort((a, b) => {
    const firstGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return firstGuy > nextGuy ? 1 : -1;
});
console.table(yearsLived);
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const category = document.querySelector('.mw-category');
    // const links = [...category.querySelectorAll('a')];
    // const de = links
    //                 .map(link => link.textContent)
    //                 .filter(streetName => streetName.includes('de'))
    // console.log(de);

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alphabet = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
    });
    console.log(alphabet);
    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const newData = data.reduce((obj, item) => {
        if(!obj[item]) {
            obj[item] = 0; // to set the initial one to zero
        }
        obj[item]++;
        return obj;
    }, {}); //start with a blank object
    console.log(newData);

    const folks = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
      const adults = folks.some(folk => ((new Date()).getFullYear()) - folk.year >= 19);
      console.log({adults});
      // Array.prototype.every() // is everyone 19 or older?
      const isEvery = folks.every(folk => { //we run a function against it which will give us a folk
          return 2018 - folk.year >= 19;
      });
      console.log({isEvery});
      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
      const targetComment = comments.find(comment => comment.id === 823423); //we run a function against it which will give us a comment
      console.log({targetComment});
      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423
      const index = comments.findIndex(comment => comment.id === 823423);
      console.log(index);
      comments.splice(index, 1);
      console.table(comments);

      console.clear();

      //key SEQUENCE detection
      const pressed = [];
      const secretCode = 'tania';
      window.addEventListener('keyup', (e) => {
          console.log(e.key);
          pressed.push(e.key);
          if(pressed.join("").includes(secretCode)) {
              console.log('BINGO!!!');
              cornify_add();
          }
          console.log(pressed);
      })
      //Reference
      let age = 100;
      let age2 = age;
      console.log(age, age2);
      age = 200;
      console.log(age, age2);

      console.clear();
      //Palindrome
      function palindrome(str) {
          let reverseWord = "";
          for (let i = str.length -1; i >= 0; i--){
              reverseWord += str[i];
          }
          return reverseWord === str;
      }
      console.log(palindrome("madam"));
      // closure
      let a = 1;
      let addTo = function() {
          let b = 2;
          return a + b;
      };
      console.dir(addTo);
      //closure 2
      let bedroom = function(passed) {
            let home = function(inner) {
                return passed + inner;
            };
            return home;
      }

      let buyForMe = new bedroom('pillow, ');
      let buyForYou = new bedroom('chair, ');

      console.log(buyForMe(' lamp'));
      console.log(buyForYou(' carpet'));
      // Promise
      let myPromise = new Promise((resolve, reject) => {
        resolve('Bingo!');
      })


      function fetch() {
          return new Promise((resolve, reject) => {
            resolve('Bingo!');
          });
      }


    //   myPromise.then((data) => {console.log(data);})
    //   let myPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve('Bingo!')
    //     }, 5000);
    //   })
    //   myPromise.then((data) => {console.log(data);})

    let luckyNumber = 7;
    switch (luckyNumber) {
        case 1:
            console.log("Number is 1");
            break;
        case 3:
            console.log('Number is 3');
            break;
        default:
            console.log('Number is 8');
            break;
    }

    let aa = 2.2;
    let bb = 1.3;
    if ((aa * bb).toFixed(2) == 2.86) {
        console.log('true');
    } else {
        console.log('false');
    }

    let oldObject = {
        name: 'Tania',
        surname: 'Ta',
        address: 'Willy Street'
    }

    let newObject = Object.create(oldObject);
    newObject.name = 'Sergey';
    console.log(newObject);
    console.log(oldObject.__proto__);

    console.clear();
//Debugging
// var aaa = 2;
// var b = 5;
// var c;
// var d = 1000;

// for (var i = 0; i < 5; i++) {
//     if (i > aaa && i < b) {
//         c = 1000;
//     }
//     if (i === 3) {
//         d *= 2;
//     }
// }

// console.log(aaa);
// console.log(b);
// console.log(c);
// console.log(d);

//Build-in functions
// const keepDoing = setInterval(function() {
//     console.log("Keep doing!")
// }, 500);
// setTimeout(function() {
//     clearInterval(keepDoing);
// }, 2500);

//events
let inner = document.querySelector('#inner');
let outer = document.querySelector('#outer');
inner.addEventListener('click', innerListener);
outer.addEventListener('click', outerListener, true); // true adds priority

function innerListener(event) {
    // console.log(event.bubbles);
    event.stopPropagation();
    console.log('Clicked inner!');
}
function outerListener(event) {
    console.log('Clicked outer!');
}
console.clear();

let showWindow = (event) => {
    console.log(this);
}
showWindow();

console.clear;

function isEqualTo(number, compare) {
    return number == compare;
}
console.log(isEqualTo(10, 10));

// Rest Operator
function sumUp(...toAdd) {
    console.log(toAdd);
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
}
console.log(sumUp(100, 20, 10));

// Spread Operator
let numbers = [1, 2, 3, 4, 5];
console.log(...numbers);
console.log(Math.max(...numbers));

// for-of loop
let testResults = [1.23, 1.10, 4.1];
for (let testResult of testResults) {
    console.log(testResult);
}
console.clear

//destructuring - arrays
let myNumbers = [1, 2, 3];
let [firstA, secondB] = myNumbers;
console.log(firstA);
console.log(secondB);

//destructure objects
let myNewObject = {
    hisName: "Jer",
    hisAge: 5,
    hisGreed: function () {
        console.log("Rrraph");
    }
};
let { hisName, hisGreed: hi } = myNewObject;
console.log(hisName);
hi();

//ES6 Symbols
let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');
console.log(symbol1 == symbol2);

//Iterator
let myObjectForIteration = {
    hobbies: ['Sports', 'Cooking'],
    [Symbol.iterator]: function () {
        let w = 0;
        let hobbies = this.hobbies;
        return {
            next: function () {
                let myValue = hobbies[w];
                w++;
                return {
                    done: w > hobbies.length ? true : false,
                    value: myValue
                };
            }
        };
    }
};

for (let hobby of myObjectForIteration) {
    console.log(hobby);
}

//generator
function *select() {
    yield 'House';
    yield 'Garage';
}
let it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.clear();
//controll generator with return
function *gen(end) {
    for (let m = 0; m < end; m++) {
        try {
            yield m;
        } catch (e) {
            console.log(e);
        }
    }
}
let thisThing = gen(2);

console.log(thisThing.next());
console.log(thisThing.return('Oops, small error!'));
console.log(thisThing.next());
console.log(thisThing.next());

//promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Done as promissed!');
    }, 1500);
});

promise.then(function (value) {
    console.log(value);
});

// chain promises
function waitASecond(seconds) {
    return new Promise(function (resolve, reject) {
        if (seconds > 2) {
            reject("Rejected!");
        } else {
            setTimeout(function () {
                seconds++;
                resolve(seconds);
            }, 1000);
        }
    });
}

waitASecond(2)
    .then(waitASecond)
    .then(function (seconds) {
        console.log(seconds);
    })
    .catch(function (error) {
        console.log(error);
    });

    //
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Resolved!");
    }, 1000);
});

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject("Rejected!");
    }, 2000);
});

Promise.race([promise1, promise2])
    .then(function (success) {
        console.log(success);
    })
    .catch(function (error) {
        console.log(error);
    });

// Merge Object
var myLibrary1 = {
    books: 1
}
var myLibrary2 = {
    stories: 2
}
var library = Object.assign(myLibrary1, myLibrary2);

// Strings
let myNewThing = "Variable";
console.log("starts", myNewThing.startsWith("Var"));
console.log("ends", myNewThing.endsWith("le"));
console.log("includes",myNewThing.includes("iabl"));

console.clear();
// Map
let cardAce = {
    name: "Ace of Spades"
};
let cardKing = {
    name: "King of Clubs"
};
let deck = new Map();
deck.set("as", cardAce);
deck.set('kc', cardKing);

// Set
let set = new Set([1, 1, 1]);

set.add(2);
set.delete(1);

for (element of set) {
    console.log(element);
}

console.clear();

function reverseAString(string) {
    // return string.split('').reverse().join('');

    ////////////

    // let result = "",
    // for (i = string.length - 1; i >= 0; i--) {
    //     result = result + string[i];
    // }
    // return result;

    ////////////

    // let result = "";
    // for(let char of string) {
    //     result = char + result;
    // }
    // return result;

    /////////////

    return string.split('').reduce((reversed, character) => character + reversed, '');

}
console.log(reverseAString("congratulations"));

console.clear();

// Remove duplicates and sort an array
function removeDuplicatesAndSort(array) {
    let result = array.filter((element, index, arr) => {
        return index === arr.indexOf(element)
    })
    result.sort();
    return result;
}
console.log(removeDuplicatesAndSort([6, 8, 1, 4, 1, 4]))

console.clear();

function palindrome(string) {
    const reversedString = string.split('').reduce((reversed, character) => character + reversed, '');
    return reversedString === string;
}
console.log(palindrome("hello"), palindrome("abcba"))

console.clear();

function reversedInteger(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}
console.log(reversedInteger(-400), reversedInteger(829), reversedInteger(15))

console.clear();

function maxCharacter(string) {
    let characterMap = {};
    for (let char of string) {
        characterMap[char] = characterMap[char] + 1 || 1;
    }
    let max = 0;
    let maxChar = ' ';
    for (let char in characterMap) {
        if (characterMap[char] > max) {
            max = characterMap[char];
            maxChar = char;
        }
    };
    return maxChar;
}
console.log(maxCharacter("Hello there"))

console.clear();

//fizzbuzz; numbers from 1 to n
function fizzbuzz(n) {
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0  && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i)
    }
}
}
console.log(fizzbuzz(15));

console.clear();

// function chunk(array, size) {
//     let chunked = [];
//     for (let element of array) {
//         let last = chunked[chunked.lenght - 1];
//         if (!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }
// console.log(chunk([1, 2, 3, 4], 3))

function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size))
        index += size;
    }
    return chunked;
}
console.log(chunk([1, 2, 3, 4], 3));

console.clear();

// function anagram(stringA, stringB) {
//     const charMapA = characterMap(stringA);
//     const charMapB = characterMap(stringB);
//     console.log(charMapA, charMapB)
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false;
//     }
//     for (let char in charMapA) {
//         if (charMapA[char] !== charMapB[char]) {
//             return false;
//         }
//     }
//     return true;
// }
// function characterMap(string) {
//     let characterMap = {};
//     for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
//         characterMap[char] = characterMap[char] + 1 || 1;
//     }
//     return characterMap;
// }

function anagram(stringA, stringB) {
    const modifiedA = modifyString(stringA);
    const modifiedB = modifyString(stringB);
    return modifiedA === modifiedB;
}
function modifyString(string) {
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagram("hello there", "Hellothere!"))

console.clear();

function capitalize(string) {
    // const words = [];
    // for (let word of string.split(' ')) {
    //     words.push(word[0].toUpperCase() + word.slice(1));
    // }
    // return words.join(' ');
    let result = string[0].toUpperCase();
    for (let i = 1; i < string.length; i++){
        if (string[i - 1] === ' ') {
            result += string[i].toUpperCase();
        } else {
            result += string[i];
        }
    }
    return result;
}
console.log(capitalize("i need to finish this task tonight!"))

console.clear();
// function steps(n) {
//     for (let row = 0; row < n; row++){
//         let stair = '';
//         for (let column = 0; column < n; column++){
//             if (column <= row) {
//                 stair += '#'
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

// recursion
function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1)
    }
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
}
console.log(steps(3));

console.clear();
function firstMissingPositive(nums) {
    const uniqueNums = nums.filter((value, index, array) => {
        return index === array.indexOf(value)
    })
        .filter((num) => num > 0)
        .sort((a, b) => a-b);
    console.log(uniqueNums)
    let missingPositive = 1;
    for (let i = 0; i < uniqueNums.length; i++) {
        if(uniqueNums[i] === missingPositive){
            missingPositive += 1;
        } else {
            return missingPositive;
        }
    }
    return missingPositive;
};
console.log(firstMissingPositive([-1,4,2,1,9,10]));

// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     for (let row = 0; row < n; row++){
//         let level = '';
//         for (let column = 0; column < 2 * n - 1; column++){
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }
function pyramid(n, row = 0, level = '') {
    if (n === row) {
        return
    }
    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1)
    }
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}
console.log(pyramid(7));
console.clear();

// class Queue {
//     constructor() {
//         this.data = [];
//     }
//     add(record) {
//         this.data.unshift(record);
//     }
//     remove() {
//         return this.data.pop();
//     }
//     peek() {
//         return this.data[this.data.length - 1];
//     }
// }

// function weave(sourceOne, sourceTwo) {
//     const q = new Queue();
//     while (sourceOne.peek() || sourceTwo.peek()) {
//         if (sourceOne.peek()) {
//             q.add(sourceOne.remove());
//         }
//         if (sourceTwo.peek()) {
//             q.add(sourceTwo.remove());
//         }
//     }
//     return q;
// }
// console.log(weave([1, 2, 3], ["Hi", "There", "You"]));

console.clear();
class Stack {
    constructor() {
        this.data = [];
    }
    push(record) {
        this.data.push(record);
    }
    pop() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}
class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.push(record);
    }
    remove() {
        while (this.first.peek()) {
            const record = this.first.pop();
            this.second.push(record);
        }
        const target = this.second.pop();
        while (this.second.peek()) {
            this.first.push(target);
        }
        return record;
    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
        }
        const record = this.second.peek();
        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }

        return record;
    }
}

console.clear();
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList  {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const node = new Node(data, this.head);
        this.head = node;
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        while (node) {
            node = node.next;
            if (!node.next) {
                return node;
            }
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();
        if (last) {
            // There are some nodes in the chain.
            last.next = new Node(data);
        } else {
            // The chain is empty!
            this.head = new Node(data);
        }
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    removeAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }
}
function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
function loopThrough(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
}
function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while (n > 0) {
        fast = fast.next;
        n--;
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}
class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }
    remove(data) {
        this.children.filter(node => {
            return node.data !== data;
        })
    }
}