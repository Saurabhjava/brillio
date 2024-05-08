import { useNavigate } from "react-router-dom";

function Home() {
  const order = {
    orderID: 1001,
    productName: "Apple I15",
    price: 95000,
  };
  const orderString = JSON.stringify(order);
  const navigate = useNavigate();
  return (
    <>
      <div>Home Component</div>
      <button
        onClick={() =>
          navigate(`order-summary/${encodeURIComponent(orderString)}`)
        }
      >
        Place Order
      </button>
    </>
  );
}
export default Home;
