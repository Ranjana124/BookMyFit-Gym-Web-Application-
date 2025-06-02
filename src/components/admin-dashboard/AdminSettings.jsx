
import React from 'react';

function AdminSettings() {
  return (
    <div className="max-w-2xl space-y-8">
      <div className="rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-xl font-bold">Change Password</h2>
        <form className="space-y-4">
          <div>
            <label className="mb-2 block font-medium">Current Password</label>
            <input 
              type="password" 
              className="w-full rounded border p-2"
              placeholder="Enter current password"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">New Password</label>
            <input 
              type="password" 
              className="w-full rounded border p-2"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">Confirm New Password</label>
            <input 
              type="password" 
              className="w-full rounded border p-2"
              placeholder="Confirm new password"
            />
          </div>
          <button className="rounded bg-red px-4 py-2 text-white">
            Update Password
          </button>
        </form>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-xl font-bold">Admin Credentials</h2>
        <form className="space-y-4">
          <div>
            <label className="mb-2 block font-medium">Email</label>
            <input 
              type="email" 
              className="w-full rounded border p-2"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">Username</label>
            <input 
              type="text" 
              className="w-full rounded border p-2"
              placeholder="admin"
            />
          </div>
          <button className="rounded bg-red px-4 py-2 text-white">
            Update Credentials
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminSettings;
