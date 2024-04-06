import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pageLocation = location.pathname;

  const onButtonClick = () => {
    navigate(-1);
  };

  const onDetailsButtonClick = () => {
    navigate("");
  };

  return (
    <div>
      <h3>Bookings</h3>
      <button onClick={onButtonClick}>Go Back</button>
      <h3>{pageLocation}</h3>
      <button onClick={onDetailsButtonClick}>Go To Details Page</button>
    </div>
  );
};

export default Booking;
