import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory()
    const [understanding, setUnderstanding] = useState('')

    const handleNext = (event) => {
        event.preventDefault();
        history.push('/page-2')
        
        dispatch( {type: "GET_UNDERSTANDING", payload: understanding} )
        
        setUnderstanding('')
    };

    console.log(`My rate my understanding as ${understanding}`);

    return (
        <>
        <h2>How well are you understanding the content?</h2>

        <br></br><br></br><br></br>
        
        <form>
            <label htmlFor="understanding?">Understanding?</label>
            <input 
                type="number"
                id='understandingInput' 
                name='understanding'
                value={understanding}
                onChange={(evt) => (setUnderstanding(evt.target.value))}
                // Fix so that a value is require before going to next page
                required
            />
            <button onClick={handleNext}>Next</button>
        </form>
        </>
    )
}

export default Understanding