// conditions
// bad
if (condition) {
    console.log(456)
console.log(123)
}

// good
if (condition) {
  console.log(456)
  console.log(123)
}



// functions
// bad
function test() {

    let x = 10;
    while (x > 5) {
  
      x--;
      console.log(x)
    }
    return x;
  
  }
  
  // good
  function test() {
    let x = 10;
  
    while (x > 5) {
      x--;
      console.log(x)
    }
    
    return x;
  }



// creating variables
// bad
let x = 1, y = 2;

// good
let x0 = 1;
let y0 = 2;



// naming variables
// bad
let user_name = '';
let UserName = '';

// good
let userName = '';
