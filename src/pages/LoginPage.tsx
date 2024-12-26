import React, { useState } from 'react';
import '../styles/JoinPage.css'; // Import custom CSS for droplets effect

const JoinPage: React.FC = () => {
  const [isMember, setIsMember] = useState<boolean>(false); // Track whether user is signing up or logging in
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [membershipNumber, setMembershipNumber] = useState<string>('');

  const handleSubmitSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the sign-up logic here (save data, show success message, etc.)
    console.log('Sign Up:', { name, phone, email });
  };

  const handleSubmitLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the login logic here (validate membership number, show success message, etc.)
    console.log('Login:', { name, membershipNumber });
  };

  return (
    <div className="join-page">
      <div className="glass-container">
        <div className="water-droplets"></div> {/* Water droplets */}
        <div className="max-w-md mx-auto bg-white bg-opacity-30 backdrop-blur-sm p-8 rounded-lg shadow-md">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Join Our Community</h1>

          {/* Toggle between Sign Up and Login */}
          <div className="text-center mb-6">
            <button
              onClick={() => setIsMember(false)}
              className={`px-4 py-2 mr-4 ${!isMember ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setIsMember(true)}
              className={`px-4 py-2 ${isMember ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
            >
              Login
            </button>
          </div>

          {/* Sign Up Form */}
          {!isMember ? (
            <form onSubmit={handleSubmitSignUp} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="123-456-7890"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="youremail@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
          ) : (
            // Login Form
            <form onSubmit={handleSubmitLogin} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="membershipNumber" className="block text-lg">Membership Number</label>
                <input
                  type="text"
                  id="membershipNumber"
                  value={membershipNumber}
                  onChange={(e) => setMembershipNumber(e.target.value)}
                  placeholder="Enter your membership number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                >
                  Login
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
