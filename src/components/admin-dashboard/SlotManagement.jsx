import React, { useState } from 'react';

function SlotManagement() {
  const [maxBooking, setMaxBooking] = useState(2);
  const [maxWaiting, setMaxWaiting] = useState(2);
  const [newSlot, setNewSlot] = useState('');
  const [slots, setSlots] = useState([
    '1:00 AM - 2:00 AM',
    '6:00 AM - 7:00 AM',
    '10:00 AM - 11:00 PM',
    '10:00 AM - 11:00 AM',
    '1:00 PM - 3:00 PM'
  ]);

  const handleAddSlot = () => {
    if (newSlot) {
      setSlots([...slots, newSlot]);
      setNewSlot('');
    }
  };

  const handleDeleteSlot = (index) => {
    setSlots(slots.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Slot Management</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-4">
          <label>Set Max Booking:</label>
          <input
            type="number"
            value={maxBooking}
            onChange={(e) => setMaxBooking(e.target.value)}
            className="border rounded p-1 w-16"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <label>Set Max Waiting:</label>
          <input
            type="number"
            value={maxWaiting}
            onChange={(e) => setMaxWaiting(e.target.value)}
            className="border rounded p-1 w-16"
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-4">
          <label>Add New Slot:</label>
          <input
            type="text"
            value={newSlot}
            onChange={(e) => setNewSlot(e.target.value)}
            placeholder="e.g. 10:00 AM to 11:00 AM"
            className="border rounded p-2 flex-1"
          />
          <button
            onClick={handleAddSlot}
            className="bg-red text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>

      <div className="border rounded p-4">
        <h3 className="font-bold mb-4">Slots:</h3>
        <ul className="space-y-2">
          {slots.map((slot, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{slot}</span>
              <button
                onClick={() => handleDeleteSlot(index)}
                className="text-red hover:text-red-700"
              >
                ✕ Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-6 bg-red text-white px-4 py-2 rounded">
        Update
      </button>
    </div>
  );
}

export default SlotManagement;