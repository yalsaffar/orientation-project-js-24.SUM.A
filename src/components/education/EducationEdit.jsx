import { useState } from "react";

const EducationEdit = ({education, showEdit, setShowEdit}) => {
    const [formData, setFormData] = useState ({
        id: education.id,
        course: education.course,
        school: education.school,
        start_date: education.start_date,
        end_date: education.end_date,
        grade: education.grade,
        logo: education.logo
    })

    const handleChange = (field) => (e) => {
        e.preventDefault();

        setFormData({
            ...formData,
            [field]: e.currentTarget.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/resume/education', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            setShowEdit([true, education.id])
            alert("Education successfully updated!");
        })
        .catch((error) => {
            setShowEdit([true, education.id])
            alert("Error: Education not updated :(");
        })
    }

    return (
        <div className="education-edit">
            <div className="education-form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Course</h2>
                        <input
                        type="text"
                        value={formData.course}
                        placeholder={education.course}
                        onChange={handleChange('course')}
                        />
                    </label>
                    <label>
                        <h2>School</h2>
                        <input
                        type="text"
                        value={formData.school}
                        placeholder={education.school}
                        onChange={handleChange('school')}
                        />
                    </label>
                    <label>
                        <h2>Start Date</h2>
                        <input
                        type="month"
                        value={formData.start_date}
                        placeholder={education.start_date}
                        onChange={handleChange('start_date')}
                        />
                    </label>
                    <label>
                        <h2>End Date</h2>
                        <input
                        type="month"
                        value={formData.end_date}
                        placeholder={education.end_date}
                        onChange={handleChange('end_date')}
                        />
                    </label>
                    <label>
                        <h2>Grade</h2>
                        <input
                        type="number"
                        min="0"
                        max="100"
                        value={formData.grade}
                        placeholder={education.grade}
                        onChange={handleChange('grade')}
                        />%
                    </label>
                    <label>
                        <h2>Logo URL</h2>
                        <input
                        type="text"
                        value={formData.logo}
                        placeholder={education.logo}
                        onChange={handleChange('logo')}
                        />
                    </label>

                    <button onSubmit={handleSubmit}>Submit Education</button>
                </form>
            </div>
        </div>
    )
}

export default EducationEdit;