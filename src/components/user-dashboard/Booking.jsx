import { useState } from 'react';
import { FiClock, FiAlertCircle } from 'react-icons/fi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Booking() {
  const [value, setValue] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState(['10:00 AM - 11:00 PM']);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const timeSlots = [
    '1:00 AM - 2:00 AM',
    '6:00 AM - 7:00 AM',
    '10:00 AM - 11:00 PM',
    '10:00 AM - 11:00 AM',
    '1:00 PM - 3:00 PM'
  ];

  const membership = {
    expiryDate: '2024-02-20',
    plan: 'Premium',
    daysRemaining: 25
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBook = () => {
    if (selectedSlot && !bookedSlots.includes(selectedSlot)) {
      setBookedSlots([...bookedSlots, selectedSlot]);
      setSelectedSlot(null);
    }
  };

  const handleConfirmBooking = () => {
    setShowBookingModal(false);
    setSelectedPlan(null);
  };

  return (
    <div className="space-y-6 p-4">
      {/* Membership Expiry Alert */}
      <div className="rounded-lg bg-yellow-50 p-4">
        <div className="flex items-center">
          <FiAlertCircle className="mr-2 text-yellow-600" />
          <div>
            <h3 className="font-semibold text-yellow-800">Membership Status</h3>
            <p className="text-sm text-yellow-700">
              Your {membership.plan} membership will expire in {membership.daysRemaining} days
              ({new Date(membership.expiryDate).toLocaleDateString()}).
            </p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-6">
          <Calendar
            onChange={setValue}
            value={value}
            className="mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-2 space-y-4">
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => handleSlotSelect(slot)}
                  className={`flex items-center rounded-lg border px-4 py-2 ${
                    selectedSlot === slot
                      ? 'border-red bg-red text-white'
                      : bookedSlots.includes(slot)
                      ? 'border-gray-300 bg-gray-100 text-gray-500'
                      : 'border-gray-300 hover:border-red'
                  }`}
                  disabled={bookedSlots.includes(slot)}
                >
                  <FiClock className="mr-2" />
                  {slot}
                </button>
              ))}
            </div>
            {selectedSlot && (
              <div className="mt-2 text-sm text-green-600">
                Booking available
              </div>
            )}
            <button
              onClick={handleBook}
              disabled={!selectedSlot}
              className={`mt-4 rounded-lg px-6 py-2 ${
                selectedSlot
                  ? 'bg-red text-white hover:bg-red-600'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              Book
            </button>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="mb-3 font-semibold">Booked Slots</h3>
              {bookedSlots.map((slot) => (
                <div
                  key={slot}
                  className="mb-2 flex items-center justify-between rounded bg-gray-50 p-2"
                >
                  <span>{slot}</span>
                  <button
                    onClick={() => setBookedSlots(bookedSlots.filter(s => s !== slot))}
                    className="text-red hover:text-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-3 font-semibold">Waiting Slots</h3>
              <p className="text-sm text-gray-500">No waiting slots</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingModal && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h3 className="mb-4 text-lg font-bold">Confirm Membership Booking</h3>
            <div className="mb-4">
              <p className="mb-2"><strong>Plan:</strong> {selectedPlan.name}</p>
              <p className="mb-2"><strong>Price:</strong> ₹{selectedPlan.price}</p>
              <p className="mb-2"><strong>Duration:</strong> {selectedPlan.duration}</p>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowBookingModal(false);
                  setSelectedPlan(null);
                }}
                className="rounded bg-gray-400 px-4 py-2 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmBooking}
                className="rounded bg-red-600 px-4 py-2 text-white"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
