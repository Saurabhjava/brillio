function Product({ name, price, children }) {
  return (
    <div
      style={{
        border: "solid blue",
        height: "90px",
        width: "120px",
        fontSize: "6pt",
      }}
    >
      <p>ProductName: {name} </p>
      <p>Price: INR {price}</p>
      <p>{children}</p>
    </div>
  );
}

export default Product;
