import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliverySection from '../components/DeliverySection';
import BookingForm, { ReservationData } from '../components/BookingForm';
import './Reservation.css';

// Initial state for available times
export const initializeTimes = (): string[] => {
  return ["12:00", "12:30", "13:00", "18:00", "18:30", "19:00", "19:30", "20:00"];
};

// Reducer for managing available times based on state actions
export const updateTimes = (state: string[], action: { type: string, payload: any }): string[] => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Currently mimicking simple behavior
      return initializeTimes();
    default:
      return state;
  }
};

export default function Reservation() {
  const [mealType, setMealType] = useState<'Lunch' | 'Dinner'>('Dinner');
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const handleDateChange = (date: string) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  const onSubmit = (data: ReservationData) => {
    console.log('Form data:', { ...data, mealType });
    navigate('/confirmation');
  };

  return (
    <div className="reservation-page">
      <div className="reservation-hero">
        <div className="reservation-image-panel">
          <h2>Experience authentic Mediterranean flavors</h2>
          <p>Join us for an unforgettable dining experience.</p>
        </div>
        
        <div className="reservation-form-panel">
          <BookingForm 
            availableTimes={availableTimes}
            onSubmit={onSubmit}
            mealType={mealType}
            onMealTypeChange={setMealType}
            onDateChange={handleDateChange}
          />
        </div>
      </div>

      <DeliverySection />
    </div>
  );
}

