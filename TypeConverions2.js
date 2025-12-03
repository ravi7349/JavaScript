//BOOLEAN --> STRING
// boolean to string
let c = false;             
// 'c' created in memory (stack), value = false (boolean primitive)
console.log(c);            // false
console.log(typeof c);     // "boolean"

// It won’t convert 'c' directly.
// It just takes a copy of 'c'’s value, puts it inside double quotes,
// and makes a new string "false". 
// If we want, we can store it in another variable.
let d = String(c);         
console.log(d);            // "false"
console.log(typeof d);     // "string"
x   
// If we don’t store in 'd':
console.log(String(c));    // Takes the value of 'c', makes temporary "false" (string)
// and prints it. After printing, it gets discarded (garbage collected).
console.log(typeof String(c)); // "string"
