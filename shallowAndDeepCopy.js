// Shallow Copy 
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

console.log(user1.address.city);


// Deep Copy
// changes do not affect each other because they are completely independent objects.
// In deep copy, a new object is created with all properties and nested objects copied recursively.
let user3 = {
  name: "Aman",
  address: {
    city: "Mumbai"
  }
};

let user4 = structuredClone(user3);

user4.address.city = "Pune";

console.log(user3.address.city);