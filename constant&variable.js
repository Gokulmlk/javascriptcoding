const useId = 20011091787; // immutable useId = 23 -> not allowed 
let person = "Gokul"; // mutable person = "Alex" -. allowed
var emailId = "xyz@gmail.com"; // Mutable but not prefare to use because 'var' have the issue of block scope and functional scope
accountName = "GokulMLk"; // without using any keyword we can also craete a veriable 

console.log(useId);
console.log(person);
console.log(emailId);
console.log(accountName);

console.table([useId, person, emailId, accountName]);