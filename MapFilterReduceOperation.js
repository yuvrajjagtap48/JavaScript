// Method	    |               Purpose	                   |         Returns
// find()	    |   First matching object	                 |  Object or undefined
// filter()	  |   All matching objects	                 |  New array
// map()	    |   Transform/update each object	         |  New array
// reduce()	  |   Convert array into a single value      |  Any value
// sort()	    |   Sort elements	                         |  Modified array (in place)
// some()	    |   Check if at least one element matches  |  true/false
// every()	  |   Check if all elements match	           |  true/false
// forEach()  |   Perform an action for each element	   |  undefined (no new array)


const users = [
  { id: 1, name: "Yuvraj", age: 23, salary: 50000, department: "IT" },
  { id: 2, name: "Amit", age: 17, salary: 40000, department: "HR" },
  { id: 3, name: "Neha", age: 28, salary: 60000, department: "IT" },
  { id: 4, name: "Priya", age: 25, salary: 55000, department: "Sales" },
  { id: 5, name: "Omkar", age: 23, salary: 50000, department: "IT" }
];


// Find => it returns the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const user = users.find(user => user.id === 3);
console.log(user);

// Filter Users older than 18
const adults = users.filter(user => user.age > 18);
console.log(adults);

// Update a User's Name Without Mutating the Original Array
const updatedUsers = users.map(user =>
  user.id === 2
    ? { ...user, name: "Rahul" }
    : user
);
console.log(updatedUsers);


// Delete a User by ID
const remainingUsers = users.filter(user => user.id !== 4);
console.log(remainingUsers);

// Sort Users by Age
const sorted = [...users].sort((a, b) => a.age - b.age);
console.log(sorted);  // Ascending order
const sortedDesc = [...users].sort((a, b) => b.age - a.age);  // Descending order
console.log(sortedDesc);


// Sort by Name
const sorted = [...users].sort((a, b) =>
  a.name.localeCompare(b.name)
);
console.log(sorted);


// Calculate Total Salary Using reduce()
const totalSalary = users.reduce((total, user) => {
  return total + user.salary;
}, 0);
console.log(totalSalary);


// Remove Duplicate Objects by Name
const unique = Array.from(
  new Map(users.map(user => [user.name, user])).values()
);
console.log(unique);

// Remove duplicates by ID
const uniqueById = Array.from(
  new Map(users.map(user => [user.id, user])).values()
);
console.log(uniqueById);

// Merge Two Arrays of Objects
const users1 = [
  { id: 1, name: "Yuvraj" }
];
const users2 = [
  { id: 2, name: "Amit" }
];

const merged = [...users1, ...users2];
console.log(merged);


// Get Only User Names
const names = users.map(user => user.name);
console.log(names);



