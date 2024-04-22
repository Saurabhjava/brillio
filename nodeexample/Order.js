var createOrder = (cart) => {
  const myPromise = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      reject("Cart is Not Valid");
    }
    const orderId = 1001; //call some API
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    }
  });
  return myPromise;
};

function validateCart(cart) {
  if (cart.length > 0) return true;
}

export default createOrder;
