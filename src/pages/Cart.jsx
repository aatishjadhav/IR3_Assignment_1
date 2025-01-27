import Header from "../components/Header";
import Footer from "../components/Footer";


const Cart = () => {
    const cart = [
      { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
      { id: 2, name: "Product 2", price: 129.99, quantity: 1 },
      { id: 3, name: "Product 3", price: 79.99, quantity: 3 },
    ];
  
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  
    return (
        <>
            <Header/>
      <main className="container py-4">
        <h1 className="mb-4">Shopping Cart</h1>
  
        {cart.map((car) => (
          <div className="card mb-3" key={car.id}>
            <div className="card-body d-flex justify-content-between align-items-center">
              
              <div>
                <h5 className="card-title mb-2">{car.name}</h5>
                <p className="card-text mb-1">Price: ${car.price.toFixed(2)}</p>
                <p className="card-text mb-1">Quantity: {car.quantity}</p>
              </div>
            
              <div className="text-end">
                <p className="mb-0">Total: ${ (car.price * car.quantity).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
  
       
        <div className="mt-4">
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
            </main>
            <Footer/>
            </>
    );
  };
  
  export default Cart;
  