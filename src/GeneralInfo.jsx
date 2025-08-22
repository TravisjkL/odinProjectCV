import './GeneralInfo.css';
import {useState} from 'react';
import Button from './components/Button.jsx';

function GeneralForm() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [pNum, setPNum] = useState("");
    const [canEdit, setEdit] = useState(true);

    let sVar;

    {canEdit ? sVar='Submit' : sVar='Edit'}

    const handleClick = () => {
        setEdit(!canEdit)
    };

    return (
        <>
        <label>
            First Name: <input type="text" value={fName} onChange={(e) => setFName(e.target.value)} disabled={!canEdit} />
            {/*This was just a test <p>First Name: {fName}</p>*/}
        </label>

        <label>
            Last Name: <input type="text" value={lName} onChange={(e) => setLName(e.target.value)} disabled={!canEdit} />
        </label>

        <br />
        <label>
            Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!canEdit} />
        </label>

        <label>
            Phone Number: <input type="text" value={pNum} onChange={(e) => setPNum(e.target.value)} disabled={!canEdit} />
        </label>

        <br />
        {/*Submit/Edit Button*/}
        <Button text={sVar} handleClick={handleClick} />
        </>
    )
}

function GeneralInfo() {


    return (
        <div>
            <h1>General Information:</h1>
            <GeneralForm />
        </div>
    )
}

export default GeneralInfo