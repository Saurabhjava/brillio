import createOrder from "./Order.js";
import proceedToPayment from "./Payment.js";

const cart = ["Book"];
const p = createOrder(cart);

p.then((orderID) => {
  console.log("Your Order generated with Order id: " + orderID);
  return orderID;
})
  .then((oid) => {
    return proceedToPayment(oid);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err);
  });
