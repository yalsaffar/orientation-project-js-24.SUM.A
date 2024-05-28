import React, { useState } from 'react';
import './App.css';
import AddSkillForm from './AddSkillForm';

function App() {
  const [showAddSkillForm, setShowAddSkillForm] = useState(false);

  const handleAddSkillClick = () => {
    setShowAddSkillForm(!showAddSkillForm);
  };

  const handleFormSubmit = () => {
    setShowAddSkillForm(false);
  };

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="resumeSection">
        <h2>Experience</h2>
        <p>Experience Placeholder</p>
        <button>Add Experience</button>
        <br />
      </div>
      <div className="resumeSection">
        <h2>Education</h2>
        <p>Education Placeholder</p>
        <button>Add Education</button>
        <br />
      </div>
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
