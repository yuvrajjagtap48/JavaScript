<div id="parent">
    <button id="child">Click Me</button>
</div>

// You click the button 👆
// Now question is: Which event runs first? => Parent? => Child?

// That’s where Bubbling and Capturing come.

// Event Capturing (Top → Bottom) ⬇
// Event starts from top:
// HTML
//  ↓
// BODY
//  ↓
// DIV
//  ↓
// BUTTON
// Parent → Child ⬇️


// Event Bubbling (Bottom → Top)
// After reaching button:
// BUTTON
//  ↑
// DIV
//  ↑
// BODY
//  ↑
// HTML
// Child → Parent 



// stopPropagation() 🚫  => Used to stop bubbling/capturing.

// button.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Button Clicked");
// });



// JavaScript uses Event Bubbling
// React uses Event Capturing





// Event Delegation    => “One parent controls all children.”
// Event Delegation is a technique where a single event listener is attached to a parent element
//  to handle events for multiple child elements using event bubbling.
// How Event Delegation Works
// LI clicked
//    ↓
// Event bubbles upward
//    ↓
// UL catches event