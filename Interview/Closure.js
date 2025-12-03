function outer(){
    let name = "Ravi";

    function inner(){
        console.log("hello"+name);
    }
    return inner;
}

const greet = outer();
greet();


function outer1(){ 
    let name1 = "ravi";

    function inner1(){
        console.log("hello"+name1);
    }
    return inner1;
}

const greet1= outer1();
console.log(greet1);


// 3)What Is a Closure (Easy Definition)
// A closure is when a function remembers and accesses variables from its outer scope, even after that outer function has finished executing.
// 👉 In simple words:
// 	A closure means an inner function still remembers the variables of its outer function, even if the outer one is gone.
	
	
	
	function outer() {
	  let counter = 0; // variable in outer function
	
	  function inner() {
	    counter++;
	    console.log(counter);
	  }
	
	  return inner;
	}
	
	const count = outer();  // outer() runs and returns inner()
	count(); // 1
	count(); // 2
	count(); // 3
	
	
// 	Why Are Closures Important in Real Time?
// 	Closures are used to:
// 		1. Preserve state (like keeping a counter or cache).
// 		2. Data privacy (simulate private variables).
// 		3. Event handlers & callbacks (like in React or DOM code).
// Modules or function factories.