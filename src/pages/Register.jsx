import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../services/firebase";
import { useAuth } from "../services/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


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

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zone: "",
    password: "" // Added password field
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const zones = ["Awka Zone", "Nnewi Zone", "Ekwulobia Zone", "Owerri Zone"];

  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, "");

    if (phoneNumber.length <= 10) {
      return phoneNumber;
    } else {
      const countryCode = phoneNumber.slice(0, 3);
      const firstPart = phoneNumber.slice(3, 6);
      const secondPart = phoneNumber.slice(6, 9);
      const thirdPart = phoneNumber.slice(9, 13);

      if (phoneNumber.length <= 9) {
        return `${countryCode} ${firstPart} ${secondPart}`;
      }
      return `${countryCode} ${firstPart} ${secondPart} ${thirdPart}`;
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^(?:\+?234|0)?([789][01]\d{8})$/;
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid Nigerian phone number";
    }

    if (!formData.zone) {
      newErrors.zone = "Please select a zone";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        // Prepare user data for Firestore
        const userData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          zone: formData.zone,
          createdAt: new Date(),
        };

        // Store additional user data in Firestore
        await setDoc(doc(db, "admin", userCredential.user.uid), userData);

        setCurrentUser({
          ...userCredential.user,
          ...userData,
        });

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);

        navigate("/admin");
      } catch (error) {
        console.error("Error during registration:", error);
        const errorMessage = error.code ? error.code : error.message;
        setErrors({ form: `Registration failed: ${errorMessage}` });
      } finally {
        setIsSubmitting(false);
      }
      } else {
        setIsSubmitting(false);
      }
    };

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: name === "phone" ? formatPhoneNumber(value) : value,
      }));

      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };

    
    return (
      <div className="page-content">
        <div className="row">
          <div className="column">
            <h2>Registration Form</h2>

            {showSuccess && (
              <Alert type="success">
                Registration successful! Thank you for registering.
              </Alert>
            )}

            <form onSubmit={handleSubmit} autoComplete="off">
              <fieldset disabled={isSubmitting}>
                <div className="form-field">
                  <input
                    name="firstName"
                    className={`h-full-width h-remove-bottom ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-lg mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <input
                    name="lastName"
                    className={`h-full-width h-remove-bottom ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-lg mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <input
                    name="email"
                    className={`h-full-width h-remove-bottom ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.password}
                    onChange={handleChange}
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

                <div className="form-field">
                  <input
                    name="phone"
                    className={`h-full-width h-remove-bottom ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                    placeholder="Phone Number (e.g., 0803 XXX XXXX)"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-lg mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="form-field">
                  <select
                    name="zone"
                    className={`h-full-width h-remove-bottom ${
                      errors.zone ? "border-red-500" : ""
                    }`}
                    value={formData.zone}
                    onChange={handleChange}
                  >
                    <option value="">Select Zone</option>
                    {zones.map((zone) => (
                      <option key={zone} value={zone}>
                        {zone}
                      </option>
                    ))}
                  </select>
                  {errors.zone && (
                    <p className="text-red-500 text-lg mt-1">{errors.zone}</p>
                  )}
                </div>

                {errors.submit && <Alert type="error">{errors.submit}</Alert>}

                <br />

                <button
                  type="submit"
                  className="btn btn--primary btn-wide btn--large h-full-width"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Register"}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  };


export default RegistrationForm;
