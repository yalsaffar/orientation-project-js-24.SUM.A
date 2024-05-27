import { useState, useEffect } from "react";

const EducationView = () => {
    const [educationData, setEducationData] = useState({
        "course": "test",
        "school": "",
        "start_date": "",
        "end_date": "",
        "grade": "",
        "logo": ""
    })

    useEffect(() => {
        fetch("/data").then((res) =>
            res.json().then((data) => {
                console.log(data)

                // setEducationData({
                //     course: data[0].course,
                //     school: data[0].school,
                //     start_date: data[0].start_date,
                //     end_date: data[0].start_date,
                //     grade: data[0].grade,
                //     logo: data[0].logo,
                // });
            })
        );
    }, []);

    return (
        <>
            {educationData.course}
        </>
    )
};

export default EducationView;