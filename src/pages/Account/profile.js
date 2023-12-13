// // Profile.js
// import React from "react";

// const Profile = () => {
//   return (
//     <div className="w-full h-screen flex items-center justify-center">
//       <div className="max-w-[600px] px-6 py-8 bg-white shadow-md rounded-md">
//         <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
//         {/* Add your profile content here */}
//         <div className="mb-4">
//           <label className="block text-gray-600 text-sm font-medium">
//             Username
//           </label>
//           <p className="text-gray-800">JohnDoe123</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-600 text-sm font-medium">
//             Email
//           </label>
//           <p className="text-gray-800">john.doe@example.com</p>
//         </div>
//         {/* Add more profile information as needed */}
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import "./ProfilePage.css";

const ArtVistaProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
    if (!name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Enter your Name" }));
      return;
    }

    // Add the logic to handle form submission
    // ...

    console.log("Form submitted successfully!");
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Art Vista Profile" />
      <form className="pb-20" onSubmit={handleSubmit}>
        <h1 className="font-titleFont font-semibold text-3xl">
          Art Vista Profile
        </h1>
        <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
          {/* Profile Picture */}
          <div>
            <label className="text-base font-titleFont font-semibold px-2">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
            {profilePicture && (
              <img
                src={URL.createObjectURL(profilePicture)}
                alt="Profile"
                className="rounded-full mt-2"
                style={{ width: "100px", height: "100px" }}
              />
            )}
          </div>

          {/* Personal Information Section */}
          <div>
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
          <div>
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

          {/* About Section */}
          <div>
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
          <div>
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

          {/* Recent Arts Section */}
          <div>
            <label className="text-base font-titleFont font-semibold px-2">
              Recent Arts
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleRecentArtsChange}
            />
            {recentArts.map((art, index) => (
              <img
                key={index}
                src={URL.createObjectURL(art)}
                alt={`Art ${index + 1}`}
                className="rounded-full mt-2"
                style={{ width: "100px", height: "100px" }}
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArtVistaProfile;
