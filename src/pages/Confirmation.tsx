import { CheckCircle2 } from 'lucide-react';
import DeliverySection from '../components/DeliverySection';
import './Confirmation.css';

export default function Confirmation() {
  return (
    <div className="confirmation-page">
      <div className="confirmation-hero">
        <section className="success-overlay-card">
          <div className="success-icon-wrapper">
            <CheckCircle2 size={80} color="var(--color-primary-green)" strokeWidth={3} className="success-icon" />
          </div>
          
          <h1>Reservation completed!</h1>
          <p>You will receive the confirmation on your phone number shortly.</p>
        </section>
      </div>

      <DeliverySection />
    </div>
  );
}
