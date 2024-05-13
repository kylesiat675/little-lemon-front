import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
test('Renders the BookingForm heading', () => {
  render(<BookingForm></BookingForm>);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test('checks the date if it was changed', ()=>{
  render(<BookingForm></BookingForm>);
  const dateElement = screen.getByLabelText(/Choose Date/);
  fireEvent.change(dateElement, {target: {value: "2024-05-14"}});
  expect(dateElement.value==="2024-05-14");
});

test('checks the time if it was changed', ()=>{
  render(<BookingForm></BookingForm>);
  const timeElement = screen.getByLabelText(/Choose Time/);
  fireEvent.change(timeElement, {target: {value: "22:00"}});
  expect(timeElement.value==="22:00");
});

