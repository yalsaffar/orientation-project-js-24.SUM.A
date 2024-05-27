import "./App.css";
import React, {useState} from "react";
import EducationForm from "./components/education/EducationForm";

function App() {
  const [showEducationForm, setShowEducationForm] = useState(false);

  const toggleEducationForm = () => {
    setShowEducationForm(!showEducationForm);
  }
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="resumeSection">
        <h2>Experience</h2>
        <p>Experience Placeholder</p>
        <button>Add Experience</button>
        <br></br>
      </div>
      <div className="resumeSection">
        <h2>Education</h2>
        <p>Education Placeholder</p>
        <button onClick={toggleEducationForm}>{showEducationForm ? "Hide" : "Add Education"}</button>
        {showEducationForm && <EducationForm />}
        <br></br>
      </div>
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
