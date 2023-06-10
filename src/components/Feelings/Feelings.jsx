import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Feelings() {
    
    const dispatch = useDispatch();
    const history = useHistory()
    const [feeling, setFeeling] = useState('')


    const handleNext = (event) => {
        event.preventDefault();


        // go to next page
        history.push('/page-1')
        
        dispatch( {type: "GET_FEELING", payload: feeling} )
        
        setFeeling('')
    };

    console.log(`I rate my feelings as ${feeling}`);

    return (
        <>
        <h2>How are you feeling today?</h2>

        <br></br><br></br><br></br>
        
        <form onSubmit={handleNext}>
            <label htmlFor="Feeling?">Feeling?</label>
            <input 
                type="number"
                id='feelingInput' 
                name='feeling'
                value={feeling}
                onChange={(evt) => (setFeeling(evt.target.value))}
                // Fix so that a value is require before going to next page
                required
            />
            <button type='submit'>Next</button>
        </form>
        </>
    )
    
}

export default Feelings