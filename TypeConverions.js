//Int--->String
let a = 123;               
// 'a' created in memory (stack), value = 123 (number primitive)
console.log(a);            // 123
console.log(typeof a);     // "number"

// It won’t convert 'a' directly. 
// It just takes a copy of 'a'’s value, puts it inside double quotes, 
// and makes a new string "123". 
// If we want, we can store it in another variable.
let b = String(a);         
console.log(b);            // "123"
console.log(typeof b);     // "string"

// If we don’t store in 'b':
console.log(String(a));    // Takes the value of 'a', makes temporary "123" (string) 
                           // and prints it. After printing, it gets discarded 
                           // (garbage collected since no variable points to it).
console.log(typeof String(a)); // "string"


let d = 20;
console.log(typeof d);
let f = String(d);
console.log(f);



