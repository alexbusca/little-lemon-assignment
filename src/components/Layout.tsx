import { ShoppingCart } from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div className="container">
      {/* Yellow decorative blob */}
      <div className="bg-blob-yellow" aria-hidden="true" />

      <header className="main-header">
        <Link to="/" className="logo">
          LITTLE LEMON
        </Link>
        
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <a href="#menu">Menu</a>
          <Link to="/reservation">Reservations</Link>
          <a href="#order">Order Online</a>
        </nav>

        <button className="icon-btn cart-btn" aria-label="Cart">
          <ShoppingCart size={24} color="var(--color-primary-green)" />
          <span className="cart-badge">2</span>
        </button>
      </header>
      
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
