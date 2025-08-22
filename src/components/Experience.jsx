import {useState} from 'react';
import Button from './Button.jsx'

function ExperienceForm() {
    const [comName, setCom] = useState("");
    const [posTitle, setTitle] = useState("");
    const [comResponse, setResponse] = useState("");
    const [startDate, setStart] = useState("");
    const [endDate, setEnd] = useState("");
    const [isDisabled, setDisabled] = useState(false);

    let sVar;
    {isDisabled ? sVar='Edit':sVar='Submit'}

    const handleClick = () =>{
        setDisabled(!isDisabled);
    }

    return (
        <>
        <label>
            Company Name: <input type="text" value={comName} onChange={(e) => setCom(e.target.value)} disabled={isDisabled}/>
        </label>
        <label>
            Position Title: <input type="text" value={posTitle} onChange={(e) => setTitle(e.target.value)} disabled={isDisabled}/>
        </label>
        <br/>
        <label>
            Responsibilities: <input type="text" value={comResponse} onChange={(e) => setResponse(e.target.value)} disabled={isDisabled}/>
        </label>
        <br/>
        <label>
            Start Date: <input type="date" value={startDate} onChange={(e) => setStart(e.target.value)} disabled={isDisabled}/>
        </label>
        <label>
            End Date: <input type="date" value={endDate} onChange={(e) => setEnd(e.target.value)} disabled={isDisabled}/>
        </label>
        <br/>
        <Button text={sVar} handleClick={handleClick}/>
        </>
    )
}



function Experience() {
    return (
        <>
        <h1>Experience:</h1>
        <ExperienceForm/>
        </>
    )
}


export default Experience