import { useState, useEffect } from "react";
import EducationEdit from "./EducationEdit";
import defaultLogo from '../../assets/graduation-cap.png'
import editIcon from '../../assets/edit.png'
import './EducationView.css'

const EducationView = () => {
    const [educationData, setEducationData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/resume/education")
            .then((res) => {
                res.json().then((data) => {
                setEducationData(data);
            })
        });
    }, []);

    return (
        <>
        {educationData ?
            educationData.map(education =>
                <div key={education.id} className="education-item">
                        <div className="education-item-school-container">
                            <div className="education-item-school">
                                {education.logo.includes("example") ? <img src={defaultLogo} alt="defaultLogo" className="logo"/> : <img src={education.logo} alt="logo" className="logo"/>}
                                <h3>{education.school}</h3>
                            </div>
                            <button className="icon-button"><img src={editIcon} alt="editIcon" className="icon"/></button>
                        </div>
                        <div className="education-item-course">
                            <li>{education.course}</li>
                            <li>Grade: {education.grade}</li>
                            <li>{education.start_date} - {education.end_date}</li>
                        </div>
                </div>
                )
            : ""}
        </>
    )
};

export default EducationView;