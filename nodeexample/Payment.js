function proceedToPayment(orderId) {
  const p = new Promise((resolve, reject) => {
    resolve("Proceed to payment for OrderId: " + orderId);
  });
  return p;
}

export default proceedToPayment;
