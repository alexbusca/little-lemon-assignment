import { Link } from 'react-router-dom';
import DeliverySection from '../components/DeliverySection';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>WELCOME ON LITTLE LEMON</h1>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes
          served with a modern twist.
        </p>
        <Link to="/reservation" className="btn btn-primary hero-btn">
          Reserve a table
        </Link>
      </section>

      <DeliverySection />
    </div>
  );
}
