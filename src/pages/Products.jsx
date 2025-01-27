import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$99.99",
      description:
        "This is Description of Product 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availableColors: ["Red", "Blue", "Green"],
      isReturnApplicable: true,
      image: "https://placehold.co/300x300",
    },

    {
      id: 2,
      name: "Product 2",
      price: "$129.99",
      description:
        "This is Description of Product 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availableColors: ["White", "Black"],
      isReturnApplicable: true,
      image: "https://placehold.co/300x300",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$79.99",
      description:
        "This is Description of Product 3. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availableColors: ["Yellow"],
      isReturnApplicable: false,
      image: "https://placehold.co/300x300",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$49.99",
      description:
        "This is Description of Product 4. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availableColors: ["Purple", "Yellow"],
      isReturnApplicable: true,
      image: "https://placehold.co/300x300",
    },
  ];

  return (
    <>
      <Header />
      <main className="container py-4">
        {products.map((product) => (
          <>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={product.image}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">{product.description}</p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Price: {product.price}
                      </small>
                    </p>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-primary"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Products;
