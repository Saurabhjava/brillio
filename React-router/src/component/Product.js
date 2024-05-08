import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <>
      <div>Product Component</div>
      <nav>
        <Link to="new">New</Link>
        <Link to="featured">Featured</Link>
      </nav>
      <Outlet />
    </>
  );
}
export default Product;
