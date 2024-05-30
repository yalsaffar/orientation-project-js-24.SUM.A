import React, { useState } from 'react';
import './App.css';
import AddSkillForm from './AddSkillForm';
import UserInfo from './UserInfo'; 
import ExperienceForm from './ExperienceForm';

function App() {
  const [showAddSkillForm, setShowAddSkillForm] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  const handleAddSkillClick = () => {
    setShowAddSkillForm(!showAddSkillForm);
  };

  const handleFormSubmit = () => {
    setShowAddSkillForm(false);
  };

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
        <br />
      </div>

      {/* Skills Section */}
      <div className="resumeSection">
        <h2>Skills</h2>
        <p>Skill Placeholder</p>
        <button onClick={handleAddSkillClick}>Add Skill</button>
        <br />
        {showAddSkillForm && <AddSkillForm onSubmit={handleFormSubmit} />}
      </div>

      <br />
      <button>Export</button>
    </div>
  );
}

export default App;
