// Shallow Copy    =>   “Outer copied, inner shared.”
// changes affect on both objects because they reference the same underlying data.
// In shallow copy, only the reference of the object is copied, not the actual object itself.
let user1 = {
  name: "Aman",
  address: {
    city: "Mumbai"
  }
};

let user2 = { ...user1 };

user2.address.city = "Pune";

console.log(user1.address.city); // Output: "Pune"


// Deep Copy      =>    “Everything copied separately.”
// changes do not affect each other because they are completely independent objects.
// In deep copy, a new object is created with all properties and nested objects copied recursively.
let user3 = {
  name: "Aman",
  address: {
    city: "Mumbai"
  }
};

let user4 = structuredClone(user3);
// old way => let user4 = JSON.parse(JSON.stringify(user3));

user4.address.city = "Pune";

console.log(user3.address.city); // Output: "Mumbai"


// “A shallow copy copies only the top-level properties, while nested objects are copied by reference.
// if we have nested objects, we have to use refence to same object.
// A deep copy recursively copies all nested objects into new memory locations, making both objects completely independent.”