// This => Refers to the current object context.

const user = {
   name: "Alex",

   greet() {
      console.log(this.name);
   }
};

user.greet();