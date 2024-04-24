import "./App.css";
import SocilaMediaForm from "./pages/SocialMediaForm";
import TodoPage from "./pages/TodoPage";
import Booking from "./pages/Booking";
import { Routes, Route } from "react-router-dom";
import BookingDetails from "./pages/BookingDetails";
import SocialMediaForm from "./pages/SocialMediaForm";
import Notes from "./pages/Notes";
import SubscriptionForm from "./pages/SubscriptionForm";
import FormExample from "./pages/FormExample";

function App() {
  return (
    <div className="app-main-container">
      <Routes>
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/form" element={<SocialMediaForm />} />
        <Route path="/booking" element={<Booking />} />
        <Route
          path="/booking/:bookingId/details"
          element={<BookingDetails />}
        />
        <Route path="/notes" element={<Notes />} />
        <Route path="/subscriptionForm" element={<SubscriptionForm/>} />
        <Route path="/formExample" element={<FormExample />} />
      </Routes>
    </div>
  );
}

export default App;
