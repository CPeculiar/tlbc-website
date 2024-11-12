import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useAuth } from "../services/AuthContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


// Custom Alert Component
const Alert = ({ children, type }) => {
  const bgColor = type === "success" ? "bg-green-50" : "bg-red-50";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";
  const borderColor = type === "success" ? "border-green-200" : "border-red-200";

  return (
    <div
      className={`p-4 mb-4 rounded-lg border ${bgColor} ${textColor} ${borderColor}`}
    >
      {children}
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, logout } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleBackToHome = () => {
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = extractErrorCode(error.message);
      alert("Failed to log in: " + errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  function extractErrorCode(errorMessage) {
    const match = errorMessage.match(/\(auth\/([^\)]+)\)/);
    return match ? match[1] : errorMessage;
  }

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.clear(); // Clear the local storage
      navigate('/'); // Redirect to the homepage
    } catch (error) {
      console.error('Logout error:', error);
      alert("Failed to log out: " + error.message);
    }
  }

  return (
    <div className="page-content">
      <div className="row">
        <div className="column">
          <h2>Login Here</h2>

          {showSuccess && (
            <Alert type="success">
              Registration successful! Thank you for registering.
            </Alert>
          )}

          <form onSubmit={handleSubmit} autoComplete="off">
            <fieldset disabled={isLoading}>
              <div className="relative form-field">
              <input
                  name="email"
                  className={`h-full-width h-remove-bottom ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-lg mt-1">{errors.email}</p>
                )}
              </div>

              <div className="relative form-field">
                <input
                  name="password"
                  className={`h-full-width h-remove-bottom ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={passwordVisible ? 'text' : 'password'}
                  required
                  style={{ paddingRight: '40px' }} 
                />
                 <div className="input-group-append position-absolute end-0 top-50 translate-middle-y" style={{ zIndex: 10, paddingRight: '10px' }}>
                <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                      onClick={togglePasswordVisibility}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        padding: 0,
                      }}
                    >
                      <FontAwesomeIcon
                        icon={passwordVisible ? faEyeSlash : faEye}
                        style={{ color: '#6c757d' }}
                        className="h-8"
                      />
                    </button>
                  </div>
                {errors.password && (
                  <p className="text-red-500 text-lg mt-1">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn--primary btn-wide btn--large h-full-width"
                disabled={isLoading}
              >
                {isLoading ? "Loggin in..." : "Login"}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Login