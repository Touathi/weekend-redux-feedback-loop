import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Support() {

    const dispatch = useDispatch();
    const history = useHistory()
    const [support, setSupport] = useState('')

    const handleNext = (event) => {
        event.preventDefault();
        history.push('/page-3')
        
        dispatch( {type: "GET_SUPPORT", payload: support} )
        
        setSupport('')
    };

    console.log(`I rate my support as ${support}`);
    
    return (
        <>
        <h2>How well are you being supported?</h2>

        <br></br><br></br><br></br>

        <form onSubmit={handleNext}>
            <label htmlFor="Support">Support?</label>
            <input 
                type="number"
                id='supportInput' 
                name='support'
                value={support}
                onChange={(evt) => (setSupport(evt.target.value))}
                // Fix so that a value is require before going to next page
                required
            />
            <button type='submit'>Next</button>
        </form>
        </>
    )
}

export default Support