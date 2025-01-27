import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Featured Products</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://placehold.co/400x300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">
                  Description of Product 1. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit.
                </p>
                <Link className="btn btn-primary" to="/products/1">
                  View Product
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://placehold.co/400x300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">
                  Description of Product 1. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit.
                </p>
                <Link className="btn btn-primary" to="/products/2">
                  View Product
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://placehold.co/400x300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">
                  Description of Product 1. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit.
                </p>
                <Link className="btn btn-primary" to="/products/3">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
