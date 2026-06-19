// Type conversion refers to the process of converting a value from one data type to another. 
// In JavaScript, there are two types of type conversion:
// Implicit	JS converts automatically
// Explicit	Developer converts manually


// type cohesion => How strongly related the work inside one function/module/class is


// Coincidental Cohesion ❌ (Worst) -   Things are grouped randomly.
function randomTask() {
  console.log("Login");
  calculateSalary();
  sendEmail();
}

//Logical Cohesion  - Things are grouped because they are logically categorized to do similar things, but they are different by nature.
function handleInput(type) {
  if(type === "mouse") {}
  if(type === "keyboard") {}
}

// Temporal Cohesion  - Things are grouped because they are performed at the same time.
function initializeApp() {
  loadConfig();
  connectToDatabase();
  startServer();
}

// Procedural Cohesion - Things are grouped because they always follow a certain sequence of execution.
function processOrder(order) {
  validateOrder(order);
  calculateTotal(order);
  chargePayment(order);
  sendConfirmationEmail(order);
}

// Communicational Cohesion - Things are grouped because they operate on the same data.
function userProfile(user) {
  printName(user);
  printEmail(user);
}

// Sequential Cohesion - Things are grouped because the output from one part serves as input to another part.
function process() {
  let data = fetchData();
  let result = filterData(data);
}


// Functional Cohesion ✅ (Best) - Things are grouped because they all contribute to a single well-defined task.
function calculateTotal(price, tax) {
  return price + tax;
}