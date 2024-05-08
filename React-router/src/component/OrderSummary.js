import { useParams } from "react-router-dom";

function OrderSummary(props) {
  let { order } = useParams();
  return (
    <div>
      Order Summary Page
      <h5>OrderId={order}</h5>
    </div>
  );
}
export default OrderSummary;
