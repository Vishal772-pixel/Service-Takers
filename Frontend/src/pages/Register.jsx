import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'servicetaker'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8000/register', formData);
      console.log(response.data); // Optionally handle success
      navigate('/login'); // Redirect to login on success
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>

        {error && <div className="text-red-600 text-sm mb-4">{error}</div>}

        <div className="flex justify-between mb-6">
          {['servicetaker', 'freelancer'].map((role) => (
            <div
              key={role}
              onClick={() => handleRoleChange(role)}
              className={`flex-1 mx-1 p-3 border rounded-lg text-center cursor-pointer ${
                formData.role === role ? 'bg-blue-100 border-blue-600' : 'border-gray-300'
              }`}
            >
              <p className="font-medium capitalize">{role}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            minLength={6}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? 'Creating...' : 'Register'}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-blue-600 cursor-pointer font-medium"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;