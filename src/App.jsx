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
import Forms from "./pages/Forms";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";

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
        <Route path="/subscriptionForm" element={<SubscriptionForm />} />
        <Route path="/formExample" element={<FormExample />} />
        <Route path="/Forms" element={<Forms/>} />
        <Route path="/Form2" element={<Form2/>} />
        <Route path="/Form3" element={<Form3/>} />
      </Routes>
    </div>
  );
}

export default App;

// CRUD - Create, Read, Update, Delete
