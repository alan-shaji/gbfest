// import React, { useState } from "react";
// import MenuTab from "../../components/menuTab";
// import "./index.css";

// const VolunteerPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interests: "",
//     availability: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Volunteer Info Submitted:", formData);
//     alert("Thank you for signing up as a volunteer!");
//   };

//   return (
//     <div>
//       <MenuTab />
//       <section className="volunteer-page">
//         <h1>Volunteer Form</h1>
//         <p className="intro-text">
//           Be part of Global Fest 2026! Fill out the form below and join our team
//           of passionate volunteers.
//         </p>

//         <form className="volunteer-form" onSubmit={handleSubmit}>
//           <label>
//             Full Name
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Email Address
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Phone Number
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </label>

//           <label>
//             Areas of Interest
//             <textarea
//               name="interests"
//               value={formData.interests}
//               onChange={handleChange}
//               placeholder="e.g. logistics, stage setup, guest support"
//             />
//           </label>

//           <label>
//             Availability
//             <select
//               name="availability"
//               value={formData.availability}
//               onChange={handleChange}
//             >
//               <option value="">Select...</option>
//               <option value="weekdays">Weekdays</option>
//               <option value="weekends">Weekends</option>
//               <option value="full-event">Full Event</option>
//             </select>
//           </label>

//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default VolunteerPage;



// import React, { useState } from "react";
// import MenuTab from "../../components/menuTab";
// import "./index.css";

// const VolunteerPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     availability: "",
//     interests: [],
//     preEventParticipation: "",
//     preEventAvailability: "",
//     motivation: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     setFormData((prev) => {
//       if (checked) {
//         return { ...prev, interests: [...prev.interests, value] };
//       } else {
//         return {
//           ...prev,
//           interests: prev.interests.filter((interest) => interest !== value),
//         };
//       }
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Volunteer Info Submitted:", formData);
//     alert("Thank you for signing up as a volunteer!");
//   };

//   return (
//     <div>
//       <MenuTab />
//       <section className="volunteer-page">
//         <h1>Volunteer Form</h1>
//         <p className="intro-text">
//           Be part of Global Fest 2026! Fill out the form below and join our team
//           of passionate volunteers.
//         </p>

//         <form className="volunteer-form" onSubmit={handleSubmit}>
//           {/* Basic Info */}
//           <label>
//             Full Name
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Email Address
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Phone Number
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </label>

//           {/* Availability */}
//           <label>
//             Availability During Event
//             <select
//               name="availability"
//               value={formData.availability}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select...</option>
//               <option value="full-event">Full Event</option>
//               <option value="morning-only">Morning Only</option>
//               <option value="evening-only">Evening Only</option>
//             </select>
//           </label>

//           {/* Areas of Interest */}
//           <fieldset className="checkbox-group">
//             <legend>Areas of Interest</legend>
//             <label>
//               <input
//                 type="checkbox"
//                 value="logistics"
//                 onChange={handleCheckboxChange}
//               />
//               Logistics
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="stage-setup"
//                 onChange={handleCheckboxChange}
//               />
//               Stage Setup
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="guest-support"
//                 onChange={handleCheckboxChange}
//               />
//               Guest Support
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 value="cultural-activities"
//                 onChange={handleCheckboxChange}
//               />
//               Cultural Activities
//             </label>
//           </fieldset>

//           {/* Pre-event participation */}
//           <label>
//             Are you interested in participating before the event?
//             <select
//               name="preEventParticipation"
//               value={formData.preEventParticipation}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select...</option>
//               <option value="yes">Yes</option>
//               <option value="no">No</option>
//             </select>
//           </label>

//           {formData.preEventParticipation === "yes" && (
//             <label>
//               Pre-Event Availability
//               <select
//                 name="preEventAvailability"
//                 value={formData.preEventAvailability}
//                 onChange={handleChange}
//               >
//                 <option value="">Select...</option>
//                 <option value="weekdays">Weekdays</option>
//                 <option value="weekends">Weekends</option>
//               </select>
//             </label>
//           )}

//           {/* Motivation */}
//           <label>
//             Why do you want to be a part of this event?
//             <textarea
//               name="motivation"
//               value={formData.motivation}
//               onChange={handleChange}
//               placeholder="Share your motivation..."
//               required
//             />
//           </label>

//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default VolunteerPage;




import React, { useState } from "react";
import MenuTab from "../../components/menuTab";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

const VolunteerPage = () => {

  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
    interests: [],
    preEventParticipation: "",
    preEventAvailability: "",
    motivation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return {
          ...prev,
          interests: prev.interests.filter((interest) => interest !== value),
        };
      }
    });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Volunteer Info Submitted:", formData);
  setSubmitted(true); // ✅ show confirmation screen
};


  return (
    <div>
      <MenuTab />
      <section className="volunteer-page">
  {!submitted && (
    <>
      <h1>Volunteer Form</h1>
      <p className="intro-text">
        Be part of Global Fest 2026! Follow the steps below to join our team.
      </p>
    </>
  )}

  {submitted ? (
    <div className="confirmation-screen">
      <h2>Thank you for signing up!</h2>
      <p>We appreciate your interest in Global Fest 2026.</p>
      <Link to="/" className="submit-btn">Return to Home</Link>
    </div>
  ) : (
        <form className="volunteer-form" onSubmit={handleSubmit}>
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <>
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
              <button type="button" className="submit-btn" onClick={nextStep}>
                Next
              </button>
            </>
          )}

          {/* Step 2: Availability + Interests */}
          {step === 2 && (
            <>
              <label>
                Availability During Event
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="availability"
                      value="full-event"
                      checked={formData.availability === "full-event"}
                      onChange={handleChange}
                    />
                    Full Event
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="availability"
                      value="morning-only"
                      checked={formData.availability === "morning-only"}
                      onChange={handleChange}
                    />
                    Morning Only
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="availability"
                      value="evening-only"
                      checked={formData.availability === "evening-only"}
                      onChange={handleChange}
                    />
                    Evening Only
                  </label>
                </div>
              </label>

              <fieldset className="checkbox-group">
                <legend>Areas of Interest</legend>
                <label>
                  <input
                    type="checkbox"
                    value="logistics"
                    onChange={handleCheckboxChange}
                  />
                  Logistics
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="stage-setup"
                    onChange={handleCheckboxChange}
                  />
                  Stage Setup
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="guest-support"
                    onChange={handleCheckboxChange}
                  />
                  Guest Support
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="cultural-activities"
                    onChange={handleCheckboxChange}
                  />
                  Cultural Activities
                </label>
              </fieldset>

              <div className="form-nav">
                <button type="button" className="submit-btn" onClick={prevStep}>
                  Back
                </button>
                <button type="button" className="submit-btn" onClick={nextStep}>
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 3: Pre-event + Motivation */}
          {step === 3 && (
            <>
              <label>
                Are you interested in participating before the event?
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="preEventParticipation"
                      value="yes"
                      checked={formData.preEventParticipation === "yes"}
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="preEventParticipation"
                      value="no"
                      checked={formData.preEventParticipation === "no"}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </label>

              {formData.preEventParticipation === "yes" && (
                <label>
                  Pre-Event Availability
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="preEventAvailability"
                        value="weekdays"
                        checked={formData.preEventAvailability === "weekdays"}
                        onChange={handleChange}
                      />
                      Weekdays
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="preEventAvailability"
                        value="weekends"
                        checked={formData.preEventAvailability === "weekends"}
                        onChange={handleChange}
                      />
                      Weekends
                    </label>
                  </div>
                </label>
              )}

              {/* <label>
                Why do you want to be a part of this event?
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                />
              </label> */}

              <div className="form-nav">
                <button type="button" className="submit-btn" onClick={prevStep}>
                  Back
                </button>
                <button type="button" className="submit-btn" onClick={nextStep}>
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 4: Motivation */}
          {step === 4 && (
            <>
                <div className="motivation-box">
                 <label className="motivation-label">
                    Why do you want to be a part of this event?
                </label>
            <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                required
            />
        </div>

    <div className="form-nav">
      <button type="button" className="submit-btn" onClick={prevStep}>
        Back
      </button>
      <button type="button" className="submit-btn" onClick={nextStep}>
        Next
      </button>
    </div>
  </>
)}



          {/* Step 4: Review */}
          {step === 5 && (
            <div className="review-section">
              <h2>Review Your Information</h2>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Availability:</strong> {formData.availability}</p>
              <p><strong>Interests:</strong> {formData.interests.join(", ")}</p>
              <p><strong>Pre-Event Participation:</strong> {formData.preEventParticipation}</p>
              {formData.preEventParticipation === "yes" && (
                <p><strong>Pre-Event Availability:</strong> {formData.preEventAvailability}</p>
              )}
              <p><strong>Motivation:</strong> {formData.motivation}</p>

              <div className="form-nav">
                <button type="button" className="submit-btn" onClick={prevStep}>
                  Back
                </button>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
        )}
      </section>
    </div>
  );
};

export default VolunteerPage;
