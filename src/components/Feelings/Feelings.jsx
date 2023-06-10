import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Feelings() {
    
    const dispatch = useDispatch();
    const history = useHistory()
    const [feeling, setFeeling] = useState('')

    const handleNext = (event) => {
        event.preventDefault();
        history.push('/page-2')
        
        dispatch( {type: "GET_FEELING", payload: feeling} )
        
        setFeeling('')
    };

    console.log(feeling);

    return (
        <>
        <h2>How are you feeling today?</h2>

        <br></br><br></br><br></br>
        
        <form >
            <label htmlFor="Feeling?">Feeling?</label>
            <input 
                type="number"
                id='feelingInput' 
                value={feeling}
                onChange={(evt) => (setFeeling(evt.target.value))}
            />
            <button onClick={handleNext}>Next</button>
        </form>
        </>
    )
    
}

export default Feelings