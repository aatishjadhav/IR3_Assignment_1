import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const prodId = useParams();
  console.log(prodId);

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$99.99",
      description:
        "This is Description of Product 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availableColors: ["Red", "Blue", "Green"],
      isReturnApplicable: true,
      image: "https://placehold.co/300x200",
    },

    {
      id: 2,
      name: "Product 2",
      price: "$129.99",
      description:
        "This is Description of Product 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availableColors: ["White", "Black"],
      isReturnApplicable: true,
      image: "https://placehold.co/300x200",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$79.99",
      description:
        "This is Description of Product 3. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availableColors: ["Yellow"],
      isReturnApplicable: false,
      image: "https://placehold.co/300x200",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$49.99",
      description:
        "This is Description of Product 4. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availableColors: ["Purple", "Yellow"],
      isReturnApplicable: true,
      image: "https://placehold.co/300x200",
    },
  ];

  const productData = products.find((product) => product.id == prodId.prodId);
  console.log(productData);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>{productData.name}</h1>
        <img src={productData.image} alt="" />
        <p>Price: {productData.price}</p>
        <p>Description: {productData.description}</p>
        <p>Available Colors: {productData.availableColors.join(", ")}</p>
        <p>
          Return Policy:{" "}
          {productData.isReturnApplicable
            ? "Return applicable within 7 days"
            : "No return policy"}
        </p>
      </main>
      <Footer />
    </>
  );
};
export default ProductDetails;
