import React from "react";
import { useParams } from "react-router-dom";

const BookingDetails = () => {
  const params = useParams();

  console.log(params.bookingId, "params");

  return (
    <div>
      <h3>BookingDetails</h3>
    </div>
  );
};

export default BookingDetails;
