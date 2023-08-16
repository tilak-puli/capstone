import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import * as API from '../../../mockAPI';
import routes from '../../../routes';
import BookingForm from './BookingForm';

const updateTimes = (availableTimes, date) => {
  const response = API.fetch(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...API.fetch(new Date())];

const Bookings = () => {
  const [
    availableTimes,
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = formData => {
    const response = API.submit(formData);
    if (response) navigate(routes.get('confirmedBooking').path);
  };

  return (
    <div className="bookings">
      <h2>Table reservation</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    </div>
  );
};

export default Bookings;
