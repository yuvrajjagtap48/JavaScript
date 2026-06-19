// This keyword behave differently based on strick mode and non-strick mode.

// this is global space
console.log(this); // global object => window , global



// this inside a function
function x() {
   //the value depends on strict / non strick mode
   console.log(this); 
}



// this in strick mode - (this substittution)

// If the value of this keyword is undefined or null
// this keyword will be replaced with global object 
// only in non-strick mode

// this keyword value depends on how the function is called(window)
x();         // defined any reference output => undefined
window.x();  



// this inside a object method
const obj = {
   a : 10,
   x : function() {
      console.log(this); 
   }
};
obj.x(); //value of obj is obj




// call apply bind menthod(sharing methods)

const student = {
   name : "Alex",
   printName: function() {
      console.log(this.name);
   },
};
student.printName();

const student2 = {
   name : "Yuvraj"
};

student2.printName.call(student2); 




// this inside arrow function
const obj = {
   a : 10,
   x : () => {
      console.log(this); 
   }
}
obj.x();




// this inside nested arrow function
// arrow function does not have its own this value. Instead, 
// it inherits the this value from the enclosing lexical context. In other words, 
// the value of this inside an arrow function is determined by the surrounding code where the arrow function is defined, rather than how it is called.
const obj = {
   a : 10,
   x : function() {
      // enclosing lexical context
      const y = () => {
         console.log(this); 
      }
      y();
   }
}
obj.x();




// this inside dom element =>  referece to the HTMLelement itself



 