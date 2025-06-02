import { useState } from "react";
import { schedule } from "./Data";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa"; // Social icons
import logo from "../../images/logo/l4.png"; // Adjust path as needed

function List({ selectedDay }) {
  const [showSignup, setShowSignup] = useState(false);

  const openSignup = () => setShowSignup(true);
  const closeSignup = () => setShowSignup(false);

  return (
    <>
      {schedule.at(selectedDay).map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-between gap-2 bg-gray-50 p-6 text-center xl:flex-row xl:text-left"
        >
          <div className="xl:basis-36">
            <h3 className="text-sm font-medium text-gray-200">Class Name</h3>
            <p className="text-lg font-semibold">{item.class}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-200">Time</h3>
            <p className="text-lg font-semibold">{item.time}</p>
          </div>

          <div className="xl:basis-40">
            <h3 className="text-sm font-medium text-gray-200">Trainer</h3>
            <p className="text-lg font-semibold">{item.trainer}</p>
          </div>

          <button
            onClick={openSignup}
            className="self-center rounded-full bg-gray-400 p-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red"
          >
            Join Now
          </button>
        </div>
      ))}

      {/* Signup Popup Modal */}
      {showSignup && (
        <div className="bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            {/* Logo */}
            <div className="mb-4 flex justify-center">
              <img
                src={logo}
                alt="BookMyFit Logo"
                className="h-12 object-contain"
              />
            </div>

            <h2 className="text-gray-800 mb-4 text-center text-xl font-bold">
              Create Your Account
            </h2>

            <form className="space-y-3">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded border border-gray-300 p-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded border border-gray-300 p-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded border border-gray-300 p-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded border border-gray-300 p-2"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full rounded border border-gray-300 p-2"
              />

              <button
                type="submit"
                className="hover:bg-red-600 w-full rounded bg-red px-4 py-2 font-semibold text-white"
              >
                Sign Up
              </button>
            </form>

            {/* Social Media Section */}
            <div className="my-4 text-center text-sm text-gray-500">
              or sign up with
            </div>
            <div className="mb-4 flex justify-center gap-4 text-xl text-gray-600">
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              <FaGoogle className="hover:text-red-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            </div>

            <button
              onClick={closeSignup}
              className="text-red-500 mt-2 block w-full text-sm hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default List;
