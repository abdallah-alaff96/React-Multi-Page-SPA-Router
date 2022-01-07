import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <section>
      <p>ProductDetail</p>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
