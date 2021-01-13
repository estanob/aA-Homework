function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

function madLib(verb, adj, noun){
  return `We shall ${verb} the ${adj} ${noun}.`
};

// console.log(madLib('make', 'best', "guac"));

function isSubstring(searchString, subString){
  let words = searchString.split(" ");
  for (var i = 0; i < words.length; i++) {
    let word = words[i];
    if (subString === word){
      return true
    };
  };
  return false;
};

// console.log(isSubstring("time to program", "time"));
// // true

// console.log(isSubstring("Jump for joy", "joys"));
// // false



function fizzBuzz(arr){
  let fiz = [];
  for (var i = 0; i < arr.length; i++){
    let num = arr[i];
    if ((num % 3 === 0) && (num % 5 !== 0)){
      fiz.push(num);
    } else if ((num % 3 !== 0) && (num % 5 === 0)){
      fiz.push(num);
    }
  };
  return fiz;
};

// console.log(fizzBuzz([19, 18, 15, 30, 33, 35, 36, 82, 85]));



// function isPrime(num){
//   if (num < 2){
//     return false;
//   }
//   for (let i = 2; i < num; i++){
//     if (num % i === 0){
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isPrime(2))
// // true

// console.log(isPrime(10))
// // false

// console.log(isPrime(15485863))
// // true

// console.log(isPrime(3548563))
// // false



function sumOfNPrimes(n){
  
  if (n === 0){
    return 0;
  }
  
  let primes = [];
  while (primes.length < n){
    let i = 2;
    if (isPrime(i)){
      primes.push(i)
    }
    i++;
  };
  return primes
  // return primes.reduce((a,b) => a + b, 0)

  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
};

console.log(sumOfNPrimes(0));

console.log(sumOfNPrimes(1));

console.log(sumOfNPrimes(4));