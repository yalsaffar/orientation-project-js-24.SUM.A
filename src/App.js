import React, { useState } from "react";
import "./App.css";
import ExperienceForm from "./ExperienceForm";

function App() {
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  const toggleExperienceForm = () => {
    setShowExperienceForm(!showExperienceForm);
  };

  return (
    <div className="App">
      <h1>Resume Builder</h1>

      {/* User Info Section */}
      <UserInfo />

      {/* Experience Section */}
      <div className="resumeSection">
        <h2>Experience</h2>
        <button onClick={toggleExperienceForm}>
          {showExperienceForm ? "Hide Experience Form" : "Add Experience"}
        </button>
        {showExperienceForm && <ExperienceForm />}
      </div>

      {/* Education Section */}
      <div className="resumeSection">
        <h2>Education</h2>
        <p>Education Placeholder</p>
        <button>Add Education</button>
        <br></br>
      </div>

      {/* Skills Section */}
      <div className="resumeSection">
        <h2>Skills</h2>
        <p>Skill Placeholder</p>
        <button>Add Skill</button>
        <br></br>
      </div>

      <br></br>
      <button>Export</button>
    </div>
  );
}

export default App;
