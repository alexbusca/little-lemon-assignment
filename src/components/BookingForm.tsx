import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronDown } from 'lucide-react';

const reservationSchema = z.object({
  name: z.string().min(2, 'Name is required (min 2 characters)'),
  phone: z.string().min(6, 'Valid phone number is required'),
  guests: z.string().min(1, 'Please select number of people'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
});

export type ReservationData = z.infer<typeof reservationSchema>;

interface BookingFormProps {
  availableTimes: string[];
  onSubmit: (data: ReservationData) => void;
  mealType: 'Lunch' | 'Dinner';
  onMealTypeChange: (type: 'Lunch' | 'Dinner') => void;
  onDateChange: (date: string) => void;
}

export default function BookingForm({ availableTimes, onSubmit, mealType, onMealTypeChange, onDateChange }: BookingFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<ReservationData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guests: '4', // Design shows 4 as default
    }
  });

  return (
    <section className="reservation-card">
      <h1>Reserve a table</h1>
      
      {/* Meal Type Toggle */}
      <div className="meal-toggle">
        <button 
          type="button"
          className={`toggle-btn ${mealType === 'Lunch' ? 'active' : ''}`}
          onClick={() => onMealTypeChange('Lunch')}
        >
          Lunch
        </button>
        <button 
          type="button"
          className={`toggle-btn ${mealType === 'Dinner' ? 'active' : ''}`}
          onClick={() => onMealTypeChange('Dinner')}
        >
          Dinner
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="reservation-form">
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input 
            id="name" 
            type="text" 
            placeholder="John Doe"
            {...register('name')} 
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && <span className="error-text" role="alert">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            id="phone" 
            type="tel" 
            placeholder="+39 1234567890"
            {...register('phone')} 
            aria-invalid={errors.phone ? 'true' : 'false'}
          />
          {errors.phone && <span className="error-text" role="alert">{errors.phone.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of people</label>
          <div className="select-wrapper">
            <select id="guests" {...register('guests')} aria-invalid={errors.guests ? 'true' : 'false'}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <ChevronDown className="select-icon" size={20} color="var(--color-primary-green)" />
          </div>
          {errors.guests && <span className="error-text" role="alert">{errors.guests.message}</span>}
        </div>

        <div className="form-row">
          <div className="form-group half-width">
            <label htmlFor="date">Select a day</label>
            <div className="input-with-icon">
              <input 
                id="date" 
                type="date" 
                {...register('date')} 
                onChange={(e) => {
                  register('date').onChange(e);
                  onDateChange(e.target.value);
                }}
                aria-invalid={errors.date ? 'true' : 'false'}
              />
            </div>
            {errors.date && <span className="error-text" role="alert">{errors.date.message}</span>}
          </div>

          <div className="form-group half-width">
            <label htmlFor="time">Select Time</label>
            <div className="select-wrapper">
              <select id="time" {...register('time')} aria-invalid={errors.time ? 'true' : 'false'}>
                <option value="">Select</option>
                {availableTimes.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
              <ChevronDown className="select-icon" size={20} color="var(--color-primary-green)" />
            </div>
            {errors.time && <span className="error-text" role="alert">{errors.time.message}</span>}
          </div>
        </div>

        <button type="submit" className="btn btn-primary submit-btn">
          Reserve now
        </button>
        <p className="form-disclaimer">Availability is not guaranteed</p>
      </form>
    </section>
  );
}
