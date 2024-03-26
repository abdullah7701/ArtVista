import React, { useState } from "react";

import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import "./ProfilePage.css";


const ArtVistaProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [socialLinks, setSocialLinks] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [recentArts, setRecentArts] = useState([]);

  // Additional state for form validation
  const [errors, setErrors] = useState({});

  const handleProfilePictureChange = (e) => {
    // Handle the profile picture change here
    setProfilePicture(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSocialLinksChange = (e) => {
    setSocialLinks(e.target.value);
  };

  const handleLinkedInProfileChange = (e) => {
    setLinkedInProfile(e.target.value);
  };

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleRecentArtsChange = (e) => {
    // Handle the recent arts change here
    setRecentArts([...recentArts, e.target.files[0]]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form validation logic here

    // Example validation: Check if name is not empty
    if (!name.trim().length) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Enter your Name" }));
      return;
    }
    

    // Add the logic to handle form submission
    // ...

    console.log("Form submitted successfully!");
  };

  return (
    <div className="max-w-container mx-auto px-4 flex">
      <div>
        <Breadcrumbs title="Art Vista Profile" />
        <form className="profile-form" onSubmit={handleSubmit}>
          {/* Left-side section for personal information */}
          <div className="personal-info">
            <h1 className="font-titleFont font-semibold text-3xl mb-6">
              Art Vista Profile
            </h1>
            {/* <div className="input-group">
              <label className="form-label">Name</label>
              <input
                onChange={handleNameChange}
                value={name}
                className="form-control"
                type="text"
                placeholder="Enter your name here"
              />
              {errors.name && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errors.name}
                </p>
              )}
            </div> */}
            {/* Personal Information Section */}
          <div  className="input-group">
            <label className="text-base font-titleFont font-semibold px-2">
              Name
            </label>
            <input
              onChange={handleNameChange}
              value={name}
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
              type="text"
              placeholder="Enter your name here"
            />
            {errors.name && (
              <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                <span className="text-sm italic font-bold">!</span>
                {errors.name}
              </p>
            )}
          </div>
          <div className="input-group">
            <label className="text-base font-titleFont font-semibold px-2">
              Email
            </label>
            <input
              onChange={handleEmailChange}
              value={email}
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
              type="email"
              placeholder="Enter your email here"
            />
            {/* Add similar form components for social links and LinkedIn profile */}
          </div>
          {/* Age Section */}
          <div className="input-group">
            <label className="text-base font-titleFont font-semibold px-2">
              Age
            </label>
            <input
              type="number"
              onChange={handleAgeChange}
              value={age}
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
              placeholder="Enter your age"
            />
          </div>
          {/* About Section */}
          <div className="input-group">
            <label className="text-base font-titleFont font-semibold px-2">
              About
            </label>
            <textarea
              onChange={handleAboutChange}
              value={about}
              cols="30"
              rows="3"
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
              placeholder="Write about yourself and your art"
            ></textarea>
          </div>

          {/* Location Section */}
          <div className="input-group">
            <label className="text-base font-titleFont font-semibold px-2">
              Location
            </label>
            <input
              onChange={handleLocationChange}
              value={location}
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
              type="text"
              placeholder="Enter your location here"
            />
            {/* You can add icons for different locations here */}
          </div>
          </div>
  
          <div className="profile-media">
          {/* Profile Picture Container */}
          <div className="profile-picture-container">
            <label className="form-label" htmlFor="profile-upload">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              id="profile-upload"
              onChange={handleProfilePictureChange}
              className="file-input"
            />
            <div className="profile-picture" id="preview">
              {profilePicture && (
                <img
                  src={URL.createObjectURL(profilePicture)}
                  alt="Profile"
                  className="profile-picture-img"
                />
              )}
            </div>
          </div>

          {/* Recent Arts Section */}
          <div className="recent-arts-container">
            <label className="form-label">Recent Arts</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleRecentArtsChange}
              className="file-input"
            />
            {recentArts.map((art, index) => (
              <img
                key={index}
                src={URL.createObjectURL(art)}
                alt={`Art ${index + 1}`}
                className="recent-art"
              />
            ))}
          </div>
        </div>  
          {/* Save Button */}
          <button
            type="submit"
            className="btn bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold mt-8 hover:bg-black hover:text-white duration-200"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArtVistaProfile;
