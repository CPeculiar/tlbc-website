import React, { useState } from "react";
import emailjs from "emailjs-com";

// Custom Alert Component
const Alert = ({ children, type }) => {
    const bgColor = type === 'success' ? 'bg-green-50' : 'bg-red-50';
    const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
    const borderColor = type === 'success' ? 'border-green-200' : 'border-red-200';
  
    return (
      <div className={`p-4 mb-4 rounded-lg border ${bgColor} ${textColor} ${borderColor}`}>
        {children}
      </div>
    );
  };


function ContactUs() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        church: "",
        message: ""
      });
    
      const [errors, setErrors] = useState({});
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [showSuccess, setShowSuccess] = useState(false);
    
      // Format phone number as user types
      const formatPhoneNumber = (value) => {
        // Remove all non-numeric characters
        const phoneNumber = value.replace(/\D/g, '');
        
        // Format the number as per Nigerian format: +234 XXX XXX XXXX
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
    
        // Name validation
        if (!formData.name.trim()) {
          newErrors.name = "Name is required";
        }
    
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
    
        // Phone validation
        const phoneRegex = /^(?:\+?234|0)?([789][01]\d{8})$/;
        const cleanPhone = formData.phone.replace(/\D/g, '');
        if (!cleanPhone) {
          newErrors.phone = "Phone number is required";
        } else if (!phoneRegex.test(cleanPhone)) {
          newErrors.phone = "Please enter a valid Nigerian phone number";
        }
    
        // Church validation
        if (!formData.church.trim()) {
          newErrors.church = "Church name is required";
        }
    
        // Message validation
        if (!formData.message.trim()) {
          newErrors.message = "Message is required";
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        if (validateForm()) {
          try {
            
            const response = await emailjs.send(
              "service_9y9qd0r",
              "template_cywtduf",
              {
                to_email: "info@thelordsbrethrenchurch.org",
                from_name: formData.name,
                from_phone: formData.phone,
                from_email: formData.email,
                church: formData.church,
                message: formData.message,
              },
              "G0uRp4jJwwELDgewX"
            );
            
            if (response.status === 200) {
              setShowSuccess(true);
              setFormData({
                name: "",
                email: "",
                phone: "",
                church: "",
                message: ""
              });
              

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  } else {
    setErrors({ submit: "Failed to send message. Please try again." });
  }
} catch (error) {
  console.error("Error:", error);
  setErrors({ submit: "Failed to submit form. Please try again." });
}
}

setIsSubmitting(false);
};





      const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'phone') {
          // Format phone number while typing
          setFormData(prev => ({
            ...prev,
            [name]: formatPhoneNumber(value)
          }));
        } else {
          setFormData(prev => ({
            ...prev,
            [name]: value
          }));
        }
    
        // Clear error when user starts typing
        if (errors[name]) {
          setErrors(prev => ({
            ...prev,
            [name]: ""
          }));
        }
      };
    


  return (
    <div>
      {/*  page header*/}

      <section class="page-header page-header--contact">
        <div class="gradient-overlay"></div>
        <div class="row page-header__content">
          <div class="column">
            <h1>Contact Us</h1>
          </div>
        </div>
      </section>

      {/*  page content */}

      <section class="page-content">
        <div class="row">
          <div class="column">
            <p class="lead drop-cap text-justify">
              TLBC Int'l has expressions across various locations in Nigeria.
              Our locations include: Awka, Nnewi, Ihiala, Ekwulobia, Onitsha, Oko, Owerri, Nekede, .
            </p>

            <p className="text-justify">
              We also have our campus churches at: Nnamdi Azikiwe University
              Awka, Chukwuemeka Odumegwu Ojukwu (COOU) Uli and Igbariam campuses, Anambra
              State Polytechnic (ANSPOLY) Mgbakwu, Federal Polytechnic Nekede,
              Federal Polytechnic Oko, Federal University of Technology Owerri,
              Nnamdi Azikiwe University, College of Health Sciences UNIZIK,
              Okofia Nnewi and University of Lagos. For more information or
              inquiries, please contact us at +234 913 444 3057.
            </p>

            <div class="row">
              <div class="column large-6 tab-full mt-2">
                <h3 className="display-1">TLBC Int'l Awka Zone.</h3>
                <p className="text-justify">
                  The Lord’s Brethren Place, <br />
                  3 Uche Ekwunife Crescent, Awka, <br />
                  Anambra State.
                </p>
              </div>

              <div class="column large-6 tab-full mt-2">
                <h3 className="display-1">TLBC Int'l Nnewi Zone.</h3>
                <p className="text-justify">
                  The Lord’s Brethren Place, <br />
                  31 Oraifite Road, Uruagu Nnewi <br /> (By Nwanyị Imo Bus Stop,
                  2nd Floor, <br />
                  Fidelity Bank Building), Anambra State.
                </p>
              </div>

              <div class="column large-6 tab-full mt-2">
                <h3 className="display-1">TLBC Int'l Ekwulobia Zone.</h3>
                <p className="text-justify">
                  The Lord’s Brethren Place, <br />
                  Old NEPA Office, near Oko Roundabout, <br />
                  Oko, Anambra State.
                </p>
              </div>

              <div class="column large-6 tab-full">
                <h3 className="display-1">TLBC Int'l Owerri Zone.</h3>
                <p className="text-justify">
                  The Lord’s Brethren Place, <br />
                  Umunnamaenyi Road (opposite Drink Depot), <br />
                  Ihiala, Anambra State.
                </p>
              </div>

              <div class="column large-6 tab-full">
                <h3 className="display-1">Contact Info.</h3>
                <a
                  href="mailto:info@thelordsbrethrenchurch.org"
                  className="hover:text-[#3b0d11]"
                >
                  info@thelordsbrethrenchurch.org
                </a>
                <a href="tel: 0913-444-5037" className="hover:text-[#3b0d11]">
                  <p>Phone: +234 913-444-5037</p>
                </a>
              </div>
            </div>

            <h2 className="display-1">Get In Touch.</h2>

            {showSuccess && (
              <Alert type="success" className="text-lg">
                Thank you for reaching out to us, we will get back to you shortly
              </Alert>
            )}

            <form
              name="contactForm"
              id="contactForm"
             onSubmit={handleSubmit}
              autocomplete="off"
            >
               <fieldset disabled={isSubmitting}>
               <div className="form-field">
                  <input
                    name="name"
                    id="cName"
                    className={`h-full-width h-remove-bottom ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="form-field">
                  <input
                    name="email"
                    id="cEmail"
                    className={`h-full-width h-remove-bottom ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>


                <div className="form-field">
                  <input
                    name="phone"
                    id="cPhone"
                    className={`h-full-width h-remove-bottom ${
                      errors.phone ? 'border-red-500' : ''
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
                  <input
                    name="church"
                    id="cChurch"
                    className={`h-full-width h-remove-bottom ${
                      errors.church ? 'border-red-500' : ''
                    }`}
                    placeholder="Church name"
                    value={formData.church}
                    onChange={handleChange}
                    type="text"
                  />
                  {errors.church && (
                    <p className="text-red-500 text-sm mt-1">{errors.church}</p>
                  )}
                </div>

                <div className="message form-field">
                  <textarea
                    name="message"
                    id="cMessage"
                    className={`h-full-width h-remove-bottom ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="Type your Message here"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {errors.submit && (
                  <Alert type="error">
                    {errors.submit}
                  </Alert>
                )}


                <br />

                <button
                  type="submit"
                  className="btn btn--primary btn-wide btn--large h-full-width"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
