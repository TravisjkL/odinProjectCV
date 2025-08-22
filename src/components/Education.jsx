import { useState } from 'react';

function EducationInfo() {
    const [schoolName, setSchool] = useState("");
    const [titleStudy, setTitle] = useState("");
    const [startDate, setStart] = useState("");


    return(
        <>
        <label>
            Name of School: <input type="text" value={schoolName} onChange={(e) => setSchool(e.target.value)} />
        </label>

        <label>
            Title of Study: <input type="text" value={titleStudy} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label>
            Start Date: <input type="date" value={startDate} onChange={(e) => setStart(e.target.value)} />
        </label>
        </>
    )
}




function Education() {
    return (
        <>
        <h1>Education:</h1>
        <EducationInfo/>
        </>
    )
}

export default Education