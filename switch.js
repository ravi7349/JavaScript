// 👉 Definition of switch:
// A switch statement is used when we need to test one value against multiple possible cases.
// It is an alternative to writing many if-else-if conditions.

// 🔑 Key points about switch:
// 1. The value in switch is compared using STRICT EQUALITY (===).
// 2. Each case should end with a 'break' statement, otherwise execution will continue into the next case (fall-through).

// Example 1: Normal way (if-else-if)
let userRole = "admin";

if (userRole == "admin") {
    console.log("admin user privilege");
}
else if (userRole == "editor") {
    console.log("editor access granted");
}
else if (userRole == "author") {
    console.log("author access granted");
}
else {
    console.log("student access");
}

// Example 2: Using switch
let userRole1 = "student";

switch (userRole1) {
    case "admin":
        console.log("admin user privilege");
        break;
    case "editor":
        console.log("editor user privilege");
        break;
    case "author":
        console.log("author user privilege");
        break;
    case "student":
        console.log("student access granted");
        break;
    default:
        console.log("access denied");
}

// Example 3
let day = 0;
switch(day)
{
    case 0:
    case 6:
        console.log("happy weekend");
        break;
    case 1:
        console.log("happy Monday");
        break;
    case 2:
    case 3:
    case 4:
        console.log("Happy MidWeek!")
        break;
    case 5:
        console.log("TGIF")
    

}

        