import { Menu, ShoppingCart } from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div className="container">
      {/* Yellow decorative blob */}
      <div className="bg-blob-yellow" aria-hidden="true" />

      <header className="main-header">
        <button className="icon-btn" aria-label="Menu">
          <Menu size={24} color="var(--color-primary-green)" />
        </button>
        
        <Link to="/" className="logo">
          LITTLE LEMON
        </Link>
        
        <button className="icon-btn" aria-label="Cart">
          <ShoppingCart size={24} color="var(--color-primary-green)" />
        </button>
      </header>
      
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
