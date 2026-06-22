// Promise is an object that represents the eventual completion (or failure) of an asynchronous operation

const cart = ["shoes", "pants", "kurta"];
// Callback hell example
createOrder(cart, function(orderId) {

    proceedToPayment(orderId, function(paymentInfo) {

        showOrderSummary(paymentInfo, function(summary) {

            updateWalletBalance();
            
        });
    });
});

// Promise example / Promise chaining
createOrder(cart)
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function(paymentInfo) {
        updateWalletBalance(paymentInfo);
    })
    .catch(function(error) {
        console.log(error);
    });


// using Arrow functions
createOrder(cart)
    .then(orderId => proceedToPayment(orderId))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWalletBalance(paymentInfo))
    .catch(error => console.log(error));



function createOrder(cart) {
    const pr = new Promise(function(resolve, reject){
      // create order logic
      // validate cart
      // order id generate
      if(!validateCart(cart)) {
        const err = new Error("Cart is empty");
        reject(err);
      } 
      // logic to create order
      const orderId = "12345";
      if(orderId) {
        setTimeout(function() {
          resolve(orderId);
        }, 5000);
      }
    });
  return pr;
}

function proceedToPayment(orderId) {
    const pr = new Promise(function(resolve, reject){
      // logic to proceed to payment
      const paymentInfo = "Payment successful";
      if(paymentInfo) {
        setTimeout(function() {
          resolve(paymentInfo);
        }, 5000);
      }
    });
  return pr;
}