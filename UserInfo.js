import React, { useState } from "react";
import "./UserInfo.css";

function UserInfo() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="userInfoSection">
      <h2>User Information</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number (with country code):</label>
          <input
            type="tel"
            name="phoneNumber"
            value={userInfo.phoneNumber}
            onChange={handleChange}
            pattern="^\+[1-9]\d{1,14}$"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default UserInfo;
