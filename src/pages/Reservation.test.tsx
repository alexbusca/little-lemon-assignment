import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Reservation from './Reservation';
import { describe, it, expect } from 'vitest';

describe('Reservation Form', () => {
  it('renders all form fields', () => {
    render(
      <MemoryRouter>
        <Reservation />
      </MemoryRouter>
    );
    
    expect(screen.getByLabelText(/Your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of people/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select a day/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Time/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reserve now/i })).toBeInTheDocument();
  });

  it('validates required fields on empty submit', async () => {
    render(
      <MemoryRouter>
        <Reservation />
      </MemoryRouter>
    );

    const submitBtn = screen.getByRole('button', { name: /Reserve now/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Valid phone number is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Please select a date/i)).toBeInTheDocument();
      expect(screen.getByText(/Please select a time/i)).toBeInTheDocument();
    });
  });

  it('allows user to type into inputs', async () => {
    render(
      <MemoryRouter>
        <Reservation />
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText(/Your name/i);
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    expect(nameInput).toHaveValue('Jane Doe');
  });
});
