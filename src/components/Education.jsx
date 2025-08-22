import { useState } from 'react';
import Button from './Button.jsx';

function EducationInfo() {
    const [schoolName, setSchool] = useState("");
    const [titleStudy, setTitle] = useState("");
    const [startDate, setStart] = useState("");
    const [isDisabled, setDisabled] = useState(false);

    let sVar;
    {isDisabled ? sVar = 'Edit' : sVar = 'Submit'}

    const handleClick = () => {
        setDisabled(!isDisabled);
    };

    return(
        <>
        <label>
            Name of School: <input type="text" value={schoolName} onChange={(e) => setSchool(e.target.value) } disabled={isDisabled} />
        </label>

        <label>
            Title of Study: <input type="text" value={titleStudy} onChange={(e) => setTitle(e.target.value)} disabled={isDisabled}/>
        </label>

        <label>
            Start Date: <input type="date" value={startDate} onChange={(e) => setStart(e.target.value)} disabled={isDisabled}/>
        </label>

        <br/>

        <Button text={sVar} handleClick={handleClick} />
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