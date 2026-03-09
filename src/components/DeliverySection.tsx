import { ChevronRight } from 'lucide-react';
import './DeliverySection.css';

const categories = ['Lunch', 'Mains', 'Desserts', 'A La Carte'];

const menuItems = [
  {
    id: 1,
    title: 'Greek salad',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our...',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    title: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been sme...',
    price: '$7.99',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    title: 'Grilled fish',
    description: 'Freshly grilled fish, brushed with extra-virgin olive oil and finishe...',
    price: '$20.99',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400'
  }
];

export default function DeliverySection() {
  return (
    <section className="delivery-section">
      <h2>ORDER FOR DELIVERY!</h2>
      
      {/* Categories */}
      <div className="categories-scroll">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            className={`category-pill ${idx === 0 ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {menuItems.map(item => (
          <article key={item.id} className="menu-card">
            <div className="menu-card-bg" style={{ backgroundImage: `url(${item.image})` }} />
            <div className="menu-card-overlay" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <div className="menu-card-footer">
                <p>{item.description}</p>
                <ChevronRight size={20} color="var(--color-white)" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
