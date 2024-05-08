import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [order, setOrder] = useState({
    orderID: 1001,
    productName: "Book",
    price: 550,
  });
  const navigate = useNavigate();
  return (
    <>
      <div>Home Component</div>
      <button onClick={() => navigate(`order-summary/${order.orderID}`)}>
        Place Order
      </button>
    </>
  );
}
export default Home;
