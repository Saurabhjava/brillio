import { useParams } from "react-router-dom";

function OrderSummary(props) {
  let { order } = useParams();
  const jsonObject = JSON.parse(decodeURIComponent(order));
  return (
    <div>
      Order Summary Page
      <h5>Product Name={jsonObject.productName}</h5>
      <h5>Product Price={jsonObject.price}</h5>
    </div>
  );
}
export default OrderSummary;
