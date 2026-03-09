import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders the Home page by default', () => {
    render(<App />);
    expect(screen.getByText(/WELCOME ON LITTLE LEMON/i)).toBeInTheDocument();
    // Use getAllByText if it appears multiple times or just test one section
    expect(screen.getByText(/ORDER FOR DELIVERY!/i)).toBeInTheDocument();
  });
});
