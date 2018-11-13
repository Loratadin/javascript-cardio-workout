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