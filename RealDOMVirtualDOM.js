// DOM => (Browser API) Browser converts HTML into a tree structure.
// Without DOM, JavaScript can see the page but cannot change it. DOM acts like a remote control for the webpage.
// becasue javascript cqnnot directly interact with HTML
// Using DOM, JavaScript can:
// Change text, Change colors, Add elements, Remove elements, Handle button clicks


// Real DOM is the actual DOM inside browser. Browser directly updates UI.
// Problem with Real DOM  =>  When one small thing changes : 
// Browser recalculates, layoutRepaints, screenRe-renders elements This is expensive and slow.
document.getElementById("title").innerText = "Hello";

// Virtual DOM =>  A lightweight copy of Real DOM. It is a JS object representation of Real DOM.
// When one small thing changes :
// Virtual DOM updates only that specific element in the virtual DOM and then compares it with the previous version of virtual DOM using diffing algorithm. 
// Then it updates only that specific element in the Real DOM. This is faster and efficient.
